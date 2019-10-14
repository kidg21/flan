/* eslint-disable security/detect-object-injection */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { MultiGrid, AutoSizer, CellMeasurer, CellMeasurerCache, InfiniteLoader } from "react-virtualized";
import { CellWrapper, MultiGridWrapper } from "./TableView";

function _containedInRowCol(cellRowCol, row, col) {
  if (cellRowCol.rowIndex !== null && cellRowCol.rowIndex !== undefined) {
    if (cellRowCol.rowIndex === row - 1) {
      return true;
    }
  }
  if (cellRowCol.columnIndex !== null && cellRowCol.columnIndex !== undefined) {
    if (cellRowCol.columnIndex === col) {
      return true;
    }
  }
  return false;
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.cache = new CellMeasurerCache({
      defaultWidth: 100,
      minWidth: 100,
      fixedHeight: true,
    });
    this._cellRenderer = this._cellRenderer.bind(this);
    this._infiniteLoaderChildren = this._infiniteLoaderChildren.bind(this);
    this._onSectionRendered = this._onSectionRendered.bind(this);
  }

  componentDidUpdate(prevProps) {
    const currRows = this.props.rows;
    const prevRows = prevProps.rows;
    if (this.props.listId !== prevProps.listId) {
      // need to force update of entire MultiGrid when active list changes
      // otherwise rows don't update due to possible cachcing issues
      this._loadMissingRowsInView(currRows);
      this.forceUpdate();
    } else if (prevRows.length !== currRows.length) {
      this._loadMissingRowsInView(currRows);
    }
  }

  _loadMissingRowsInView(currRows) {
    let missingRow = this.rowVisibleStartIndex;
    for (let i = missingRow; (i < this.rowVisibleStopIndex) && i < currRows.length; i++) {
      if (!currRows[i]) {
        missingRow = i;
        this._loadMoreRows(missingRow);
        break;
      }
    }
  }

  _loadMoreRows(startIndex) {
    this._loadMoreRowsStartIndex = startIndex;
    return this.props.loadRows({ startIndex }); // TODO: update to just be a startIndex???
  }

  _cellRenderer({
    columnIndex,
    rowIndex,
    key,
    parent,
    style,
  }) {
    const {
      rows,
      headers,
      selectedCell,
      highlightedCell,
      onHeaderClick,
      onCellClick,
      onCellMouseOut,
      onCellMouseOver,
      onHeaderMouseOver,
      onHeaderMouseOut,
    } = this.props;
    const row = rows[rowIndex - 1];
    const cellProps = {};
    let cellData = "";

    if (rowIndex === 0) {
      // data column header
      cellProps.onClick = (e) => {
        if (onHeaderClick) onHeaderClick(e, { rowIndex, columnIndex, row });
      };
      cellProps.onMouseOver = (e) => {
        if (onHeaderMouseOver) {
          onHeaderMouseOver(e, { rowIndex: rowIndex - 1, columnIndex: columnIndex, row: row });
        }
      };
      cellProps.onMouseOut = (e) => {
        if (onHeaderMouseOut) {
          onHeaderMouseOut(e, { rowIndex: rowIndex - 1, columnIndex: columnIndex, row: row });
        }
      };
      cellProps.isHeader = true;
      cellData = headers[columnIndex].label || "";
    } else if (row) {
      // regular cell from a row that's ready to render
      cellData = row[headers[columnIndex].id];
      if (selectedCell) {
        cellProps.isSelected = _containedInRowCol(selectedCell, rowIndex, columnIndex);
      }
      if (!cellProps.isSelected && highlightedCell) {
        cellProps.isHighlighted = _containedInRowCol(highlightedCell, rowIndex, columnIndex);
      }
      cellProps.onClick = (e) => {
        if (onCellClick) {
          onCellClick(e, { rowIndex: rowIndex - 1, columnIndex: columnIndex, row: row });
        }
      };
      cellProps.onMouseOver = (e) => {
        if (onCellMouseOver) {
          onCellMouseOver(e, { rowIndex: rowIndex - 1, columnIndex: columnIndex, row: row });
        }
      };
      cellProps.onMouseOut = (e) => {
        if (onCellMouseOut) {
          onCellMouseOut(e, { rowIndex: rowIndex - 1, columnIndex: columnIndex, row: row });
        }
      };
    }

    return (
      <CellMeasurer
        cache={this.cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}
      >
        <CellWrapper style={style} {...cellProps}>
          {cellData}
        </CellWrapper>
      </CellMeasurer>
    );
  }

  _onSectionRendered({ rowStartIndex, rowStopIndex }, onRowsRendered) {
    this.rowVisibleStartIndex = rowStartIndex;
    this.rowVisibleStopIndex = rowStopIndex;
    onRowsRendered({ startIndex: rowStartIndex, stopIndex: rowStopIndex });
  }

  _infiniteLoaderChildren({ onRowsRendered, registerChild }) {
    const {
      focusedRow,
      rows,
      headers,
      scrollTopChanged,
      scrollTop,
      listId,
      sortDirection,
      sortColumnId,
      scrollToAlignment,
    } = this.props;

    let scrollToRow;
    if (focusedRow === null || focusedRow === undefined) {
      scrollToRow = undefined;
    } else {
      scrollToRow = focusedRow + 1;
    }

    return (
      <MultiGridWrapper>
        <AutoSizer>
          {({ width, height }) => {
            return (
              <MultiGrid
                headers={headers}
                sortColumnId={sortColumnId}
                sortDirection={sortDirection}
                onScroll={(params) => { if (scrollTopChanged) scrollTopChanged(params.scrollTop); }}
                listId={listId}
                scrollToAlignment={scrollToAlignment}
                scrollToRow={scrollToRow} // takes precedence over scrollTop
                scrollTop={scrollTop} // only used for restoring place in the list when swapping lists
                columnWidth={this.cache.columnWidth}
                columnCount={headers.length}
                rowHeight={40}
                height={height}
                rowCount={rows.length + 1} // TODO: update showHeader
                width={width}
                cellRenderer={this._cellRenderer}
                fixedRowCount={1} // TODO: update showHeader
                onSectionRendered={(params) => { this._onSectionRendered(params, onRowsRendered); }} // have to pass onRowsRendered through
                ref={registerChild}
              />
            );
          }}
        </AutoSizer>
      </MultiGridWrapper>
    );
  }

  render() {
    const {
      rows,
      listId,
    } = this.props;
    return (
      <InfiniteLoader
        listId={listId}
        isRowLoaded={({ index }) => {
          // index given excludes the header (fixedRows)
          return !!rows[index];
        }}
        loadMoreRows={({ startIndex }) => { this._loadMoreRows(startIndex); }}
        rowCount={rows.length + 1}
        threshold={0}
      >
        {this._infiniteLoaderChildren}
      </InfiniteLoader>
    );
  }
}

Table.defaultProps = {
  focusedRow: null,
  scrollTop: null,
  selectedCell: null,
  highlightedCell: null,
  sortColumnId: "",
  sortDirection: true,
  scrollTopChanged: null,
  scrollToAlignment: "start",
  onCellClick: null,
  onHeaderClick: null,
  onCellMouseOver: null,
  onCellMouseOut: null,
  onHeaderMouseOver: null,
  onHeaderMouseOut: null,
};

Table.propTypes = {
  listId: PropTypes.string.isRequired,
  focusedRow: PropTypes.number,
  rows: PropTypes.arrayOf(PropTypes.shape).isRequired,
  headers: PropTypes.arrayOf(PropTypes.shape).isRequired,
  selectedCell: PropTypes.shape({
    columnIndex: PropTypes.number,
    rowIndex: PropTypes.number,
  }),
  highlightedCell: PropTypes.shape({
    columnIndex: PropTypes.number,
    rowIndex: PropTypes.number,
  }),
  sortColumnId: PropTypes.string,
  sortDirection: PropTypes.bool,
  scrollTop: PropTypes.number,
  scrollTopChanged: PropTypes.func,
  scrollToAlignment: PropTypes.string,
  onHeaderClick: PropTypes.func,
  onHeaderMouseOver: PropTypes.func,
  onHeaderMouseOut: PropTypes.func,
  onCellClick: PropTypes.func,
  onCellMouseOut: PropTypes.func,
  onCellMouseOver: PropTypes.func,
  loadRows: PropTypes.func.isRequired,
};


export default Table;
