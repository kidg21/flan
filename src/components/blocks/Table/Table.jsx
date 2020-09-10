/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import {
  MultiGrid,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  InfiniteLoader,
} from "react-virtualized";
import Grid from "layout/Grid";
import Text from "base/Typography";
import Icon from "atoms/Icon";
import styled from "styled-components";

export const MultiGridWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => {
    return props.theme.background.default;
  }};
  border: 1px solid ${(props) => {
    return props.theme.palette.neutral40;
  }};
  overflow: hidden;
  .ReactVirtualized__Grid {
    ::-webkit-scrollbar {
      width: 0.65em;
      height: 0.65em;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0.5px 0 0px ${(props) => {
    return props.theme.palette.neutral40;
  }};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => {
    return props.theme.palette.neutral80;
  }};
      border-radius: 20px;
    }
    ::-webkit-scrollbar-track:horizontal {
      box-shadow: inset 0.5px 0 0px ${(props) => {
    return props.theme.palette.neutral40;
  }};
  }
    ::-webkit-scrollbar-thumb:horizontal{
      background-color: ${(props) => {
    return props.theme.palette.neutral80;
  }};
    border-radius: 20px;
  }
    :focus {
      outline: none;
    }
  }
  .ReactVirtualized__Grid__innerScrollContainer {
    overflow: visible !important;
  }
`;

export const CellWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  color: ${(props) => {
    return props.theme.text.primary;
  }};
  cursor: ${(props) => {
    return props.isHeader ? "pointer" : "";
  }};
  font-family: ${(props) => { return props.theme.typography.primary; }};
  border-bottom: ${(props) => {
    return `1px solid ${props.theme.palette.neutral40}`;
  }};
  background-color: ${(props) => {
    if (props.isHighlighted) {
      return props.theme.palette.neutral20;
    }
    if (props.isSelected) {
      return props.theme.background.light;
    }
    return props.theme.background.default;
  }};
`;

const HeaderPiece = styled.div`
 border: 1px solid green;
 &:hover {
   border: 2px solid pink;
 }
 &:active {
   border: 1px solid purple;
 }
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

class Table extends Component {
  constructor(props) {
    super(props);
    const {
      rowHeight, columnWidth, minColWidth, minRowHeight,
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
    for (
      let i = missingRow;
      i < this.rowVisibleStopIndex && i < currRows.length;
      i++
    ) {
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
    columnIndex, rowIndex, key, parent, style,
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
          onHeaderMouseOver(e, {
            rowIndex: rowIndex - 1,
            columnIndex: columnIndex,
            row: row,
          });
        }
      };
      cellProps.onMouseOut = (e) => {
        if (onHeaderMouseOut) {
          onHeaderMouseOut(e, {
            rowIndex: rowIndex - 1,
            columnIndex: columnIndex,
            row: row,
          });
        }
      };
      cellProps.isHeader = true;
      cellData = headers[columnIndex].label || "";
      if (headers[columnIndex].sortable) {
        cellProps.isSortable = true;
        cellData = (
          <Grid columns="auto .5fr" align="center">
            <Text text={cellData} />
            <Icon icon="down" size="sm" />
          </Grid>
        );
      }
      // if (headers[columnIndex].id === sortColumnId) {
      //   const arrow = sortDirection ? "up" : "down";
      //   cellData = (<React.Fragment>{cellData}<Icon icon={arrow} /></React.Fragment>);
      // }
    } else if (row) {
      // regular cell from a row that's ready to render
      cellData = row[headers[columnIndex].id];
      if (selectedCell) {
        cellProps.isSelected = _containedInRowCol(
          selectedCell,
          rowIndex,
          columnIndex,
        );
      }
      if (!cellProps.isSelected && highlightedCell) {
        cellProps.isHighlighted = _containedInRowCol(
          highlightedCell,
          rowIndex,
          columnIndex,
        );
      }
      cellProps.onClick = (e) => {
        if (onCellClick) {
          onCellClick(e, {
            rowIndex: rowIndex - 1,
            columnIndex: columnIndex,
            row: row,
            iconContent: "up",
          });
        }
      };
      cellProps.onMouseOver = (e) => {
        if (onCellMouseOver) {
          onCellMouseOver(e, {
            rowIndex: rowIndex - 1,
            columnIndex: columnIndex,
            row: row,
          });
        }
      };
      cellProps.onMouseOut = (e) => {
        if (onCellMouseOut) {
          onCellMouseOut(e, {
            rowIndex: rowIndex - 1,
            columnIndex: columnIndex,
            row: row,
          });
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
      </CellWrapper>
    );
  }

  _onSectionRendered({ rowStartIndex, rowStopIndex }, onRowsRendered) {
    this.rowVisibleStartIndex = rowStartIndex;
    this.rowVisibleStopIndex = rowStopIndex;
    onRowsRendered({ startIndex: rowStartIndex, stopIndex: rowStopIndex });
  }

  _infiniteLoaderChildren({ onRowsRendered, registerChild }) {
    const {
      columnWidth,
      focusedRow,
      headers,
      listId,
      minColWidth,
      minRowHeight,
      rowHeight,
      rows,
      scrollToAlignment,
      scrollTop,
      scrollTopChanged,
      sortColumnId,
      sortDirection,
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
        {/* providing non-zero defaultWidth and defaultHeight props so grid will render when unit testing.
            In the browser they are immediately overwritten once the component mounts */}
        <AutoSizer defaultWidth={200} defaultHeight={100}>
          {({ width, height }) => {
            return (
              <MultiGrid
                headers={headers}
                sortColumnId={sortColumnId}
                sortDirection={sortDirection}
                onScroll={(params) => {
                  if (scrollTopChanged) scrollTopChanged(params.scrollTop);
                }}
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
                onSectionRendered={(params) => {
                  this._onSectionRendered(params, onRowsRendered);
                }} // have to pass onRowsRendered through
                ref={registerChild}
              />
            );
          }}
        </AutoSizer>
      </MultiGridWrapper>
    );
  }

  render() {
    const { rows, listId } = this.props;
    return (
      <InfiniteLoader
        listId={listId}
        isRowLoaded={({ index }) => {
          // index given excludes the header (fixedRows)
          return !!rows[index];
        }}
        loadMoreRows={({ startIndex }) => {
          this._loadMoreRows(startIndex);
        }}
        rowCount={rows.length + 1}
        threshold={0}
      >
        {this._infiniteLoaderChildren}
      </InfiniteLoader>
    );
  }
}

Table.propTypes = {
  columnWidth: PropTypes.number,
  focusedRow: PropTypes.number,
  highlightedCell: PropTypes.shape({
    columnIndex: PropTypes.number,
    rowIndex: PropTypes.number,
  }),
  headers: PropTypes.arrayOf(PropTypes.shape).isRequired,
  listId: PropTypes.string.isRequired,
  loadRows: PropTypes.func,
  minColWidth: PropTypes.number,
  minRowHeight: PropTypes.number,
  onCellClick: PropTypes.func,
  onCellMouseOut: PropTypes.func,
  rows: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onCellMouseOver: PropTypes.func,
  onHeaderClick: PropTypes.func,
  onHeaderMouseOut: PropTypes.func,
  onHeaderMouseOver: PropTypes.func,
  rowHeight: PropTypes.number,
  scrollToAlignment: PropTypes.string,
  scrollTop: PropTypes.number,
  scrollTopChanged: PropTypes.func,
  selectedCell: PropTypes.shape({
    columnIndex: PropTypes.number,
    rowIndex: PropTypes.number,
  }),
  sortColumnId: PropTypes.string,
  sortDirection: PropTypes.bool,
};

Table.defaultProps = {
  columnWidth: null,
  focusedRow: null,
  highlightedCell: null,
  loadRows: null,
  minColWidth: 120,
  minRowHeight: 20,
  onCellClick: null,
  onCellMouseOut: null,
  onCellMouseOver: null,
  onHeaderClick: null,
  onHeaderMouseOut: null,
  onHeaderMouseOver: null,
  rowHeight: null,
  scrollToAlignment: "start",
  scrollTop: null,
  scrollTopChanged: null,
  selectedCell: null,
  sortColumnId: "",
  sortDirection: true,
};

export default Table;
