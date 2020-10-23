/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import {
  MultiGrid,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  InfiniteLoader,
} from "react-virtualized";
import { PointerEventsContext } from "States";
import Text, { Label } from "base/Typography";

export const MultiGridWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => {
    return props.theme.background.default;
  }};
  border: 1px solid ${(props) => { return props.theme.palette.neutral60; }};
  pointer-events: ${(props) => {
    return props.mouseEvents;
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
    border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
  }};
    box-shadow: inset 0 0 0 1px ${(props) => {
    return props.theme.background.default;
  }};
    outline: none;
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

// Generic background color, padding and border line for each cell
const FormattedCell = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  border-bottom: ${(props) => {
    return `1px solid ${props.theme.palette.neutral40}`;
  }};
  background-color: ${(props) => {
    return props.theme.palette[props.backgroundColor]
      ? props.theme.palette[props.backgroundColor] : props.theme.background.default;
  }};
  /* Highlighed Rows */
  ${(props) => {
    return props.isHighlighted
      && css`
      background-color: ${() => { return props.theme.palette[props.highlightedColor] ? props.theme.palette[props.highlightedColor] : props.theme.palette.neutral20; }};
    `;
  }}
  /* Selected Rows */
  ${(props) => {
    return props.isSelected
      && css`
      background-color: ${() => { return props.theme.palette[props.selectedColor] ? props.theme.palette[props.selectedColor] : props.theme.background.light; }};
    `;
  }}
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
    this._setRefGrid = this._setRefGrid.bind(this);
    this.remeasureCells = this.remeasureCells.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { rows: currRows, listId: currListId } = this.props;
    const prevRows = prevProps.rows;
    if (currListId !== prevProps.listId) {
      // need to force update of entire MultiGrid when active list changes
      // otherwise rows don't update due to possible cachcing issues
      this._loadMissingRowsInView(currRows);
      this.forceUpdate();
    } else if (prevRows.length !== currRows.length) {
      this._loadMissingRowsInView(currRows);
    }
  }

  // helper function to get the ref of grid
  _setRefGrid(ref) {
    this._grid = ref;
    this._registerInfiniteLoaderChild(ref);
  }

  // helper function to remeasure the table cells
  remeasureCells(e) {
    if (e) {
      // target specific cells
      if (this.cache) this.cache.clear(e.rowIndex, e.columnIndex);
      this._grid.recomputeGridSize(e);
    } else {
      // remeasure whole grid
      if (this.cache) this.cache.clearAll();
      this._grid.recomputeGridSize();
    }
    this._grid.forceUpdate();
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
      headerDark,
      headers,
      selectedCell,
      highlightedCell,
      onHeaderClick,
      onCellClick,
      onCellMouseOut,
      onCellMouseOver,
      onHeaderMouseOver,
      onHeaderMouseOut,
      columnTemplates,
      HeaderTemplate,
    } = this.props;
    const row = rows[rowIndex - 1];
    const cellProps = {};
    let cellData = "";

    // formats cell when using custom templates: padding, line separation, & background color
    // we pass in cellProps (mouse clicks, background color), these can be overwritten
    // user will wrap FormattedCell in their custom template
    const _FormattedCell = (props) => {
      // props: backgroundColor, highlightedColor, selectedColor
      return <FormattedCell style={style} {...cellProps} {...props} />;
    };

    if (rowIndex === 0) {
      // data column header
      cellProps.onClick = (e) => {
        if (onHeaderClick) {
          onHeaderClick(e, {
            rowIndex, columnIndex, row,
          });
        }
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
      cellProps.backgroundColor = headerDark ? "brand1" : "";
      cellData = headers[columnIndex].label || "";
      if (headers[columnIndex].sortable) {
        cellProps.isSortable = true;
      }
      // if (headers[columnIndex].id === sortColumnId) {
      //   const arrow = sortDirection ? "up" : "down";
      //   cellData = (<React.Fragment>{cellData}<Icon icon={arrow} /></React.Fragment>);
      // }
      if (HeaderTemplate) {
        cellData = (
          <HeaderTemplate
            data={cellData}
            columnIndex={columnIndex}
            rowIndex={rowIndex}
            FormattedCell={_FormattedCell}
            remeasureCells={this.remeasureCells}
          />
        );
      } else {
        // default header text style, used Label for color & cursor props
        cellData = (
          <FormattedCell style={style} {...cellProps}>
            <Label weight="bold" size="sm" color={headerDark ? "inverse" : "secondary"} cursor={onHeaderClick ? "pointer" : "default"}>
              {cellData}
            </Label>
          </FormattedCell>
        );
      }
    } else if (row) {
      // regular cell from a row that's ready to render
      const headerId = headers[columnIndex].id;
      cellData = row[headerId];
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
      if (columnTemplates && columnTemplates[headerId]) {
        const CellTemplate = columnTemplates[headerId];
        cellData = (
          <CellTemplate
            data={cellData}
            columnIndex={columnIndex}
            rowIndex={rowIndex}
            isHighlighted={cellProps.isHighlighted}
            isSelected={cellProps.isSelected}
            FormattedCell={_FormattedCell}
            remeasureCells={this.remeasureCells}
          />
        );
      } else {
        // default cell text style
        cellData = (
          <FormattedCell style={style} {...cellProps}>
            <Text>
              {cellData}
            </Text>
          </FormattedCell>
        );
      }
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
          {cellData}
        </CellMeasurer>
      );
    }
    return cellData;
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
    this._registerInfiniteLoaderChild = registerChild;

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
      <MultiGridWrapper mouseEvents={this.context}>
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
                ref={this._setRefGrid}
                deferredMeasurementCache={this.cache}
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
  columnTemplates: PropTypes.objectOf(PropTypes.func),
  focusedRow: PropTypes.number,
  highlightedCell: PropTypes.shape({
    columnIndex: PropTypes.number,
    rowIndex: PropTypes.number,
  }),
  headers: PropTypes.arrayOf(PropTypes.shape).isRequired,
  headerDark: PropTypes.bool,
  HeaderTemplate: PropTypes.func,
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
  columnTemplates: null,
  focusedRow: null,
  highlightedCell: null,
  headerDark: false,
  HeaderTemplate: null,
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

Table.contextType = PointerEventsContext;
export default Table;
