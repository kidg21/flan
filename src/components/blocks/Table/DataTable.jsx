/* eslint-disable security/detect-object-injection */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { MultiGrid, AutoSizer, CellMeasurer, CellMeasurerCache, InfiniteLoader } from "react-virtualized";
import styled from "styled-components";
import { colors } from "Variables";

export const MultiGridWrapper = styled.div`
  cursor: default;
  margin: 0.5em;
  overflow: hidden;
  font-size: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  border-collapse: collapse;
  flex: 1 1 auto;
`;

export const CellWrapper = styled.div`
  padding: 5px;
  color: ${colors.grey_80};
  font-weight: ${(props) => { return props.isHeader ? "" : "bold"; }};
  border-bottom: 1px solid #eee;
  background-color: ${(props) => {
    if (props.isHighlighted) {
      return "#f0f5fb";
    }
    if (props.isSelected) {
      return "#669932";
    }
    return "white";
  }};
`;

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

class DataTable extends Component {
  constructor(props) {
    super(props);
    const {
      rowHeight,
      columnWidth,
      minColWidth,
      minRowHeight,
    } = this.props;

    if (rowHeight && columnWidth) {
      // if both provided, no need to use CellMeasurer
      this.cache = null;
    } else if (typeof rowHeight === "number") {
      // rowHeight is fixed and columnWidth will be calculated by CellMeasurer
      this.fixedHeight = true;
      this.cache = new CellMeasurerCache({
        defaultWidth: minColWidth,
        minWidth: minColWidth,
        fixedHeight: true,
      });
    } else if (typeof columnWidth === "number") {
      // columnWidth is fixed and rowHeight will be calculated by CellMeasurer
      this.fixedWidth = true;
      this.cache = new CellMeasurerCache({
        defaultHeight: minRowHeight,
        minHeight: minRowHeight,
        fixedWidth: true,
      });
    }

    // if none of the above cases fit, then neither value was provided
    // and default min values will be used instead

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
    return this.props.loadRows({ startIndex });
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

    if (this.cache) {
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
    return (
      <CellWrapper style={style} {...cellProps}>
        {cellData}
      </CellWrapper>);
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
      rowHeight,
      columnWidth,
      minRowHeight,
      minColWidth,
    } = this.props;

    let scrollToRow;
    if (focusedRow === null || focusedRow === undefined) {
      scrollToRow = undefined;
    } else {
      scrollToRow = focusedRow + 1;
    }

    let rowHeightToUse;
    let columnWidthToUse;

    // no CellMeasurer used, either both values provided or neither provided and will be defaulted
    if (!this.cache) {
      rowHeightToUse = rowHeight || minRowHeight;
      columnWidthToUse = columnWidth || minColWidth;
    } else if (this.fixedHeight && this.cache) {
      // fixed rowHeight and dynamic columnWidth provided by cellMeasurer
      rowHeightToUse = rowHeight;
      columnWidthToUse = this.cache.columnWidth;
    } else if (this.fixedWidth && this.cache) {
      // fixed columnWidth and dynamic rowHeight provided by cellMeasurer
      rowHeightToUse = this.cache.rowHeight;
      columnWidthToUse = columnWidth;
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
                columnWidth={columnWidthToUse}
                columnCount={headers.length}
                rowHeight={rowHeightToUse}
                height={height}
                rowCount={rows.length + 1}
                width={width}
                cellRenderer={this._cellRenderer}
                fixedRowCount={1}
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

DataTable.defaultProps = {
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
  rowHeight: null,
  columnWidth: null,
  minColWidth: 120,
  minRowHeight: 40,
};

DataTable.propTypes = {
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
  rowHeight: PropTypes.oneOf(PropTypes.number, PropTypes.func),
  columnWidth: PropTypes.oneOf(PropTypes.number, PropTypes.func),
  minRowHeight: PropTypes.number,
  minColWidth: PropTypes.number,
};


export default DataTable;
