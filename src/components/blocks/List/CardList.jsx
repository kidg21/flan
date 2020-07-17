import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import {
  Grid,
  CellMeasurerCache,
  CellMeasurer,
  ColumnSizer,
  AutoSizer,
  InfiniteLoader,
} from "react-virtualized";
import styled from "styled-components";
import { DisableTransitionContext } from "States";
import { getGuid } from "helpers";

/* eslint-disable security/detect-object-injection */
// const GridWrapper = styled.div`
//   width: 100%;
//   height: 100%;
// `;

// const CellWrapper = styled.div`
//   align-items: center;
//   color: ${(props) => { return props.theme.text.primary; }};
//   border-bottom: 1px solid ${(props) => { return props.theme.palette.neutral40; }};
//   background-color: ${(props) => {
//     if (props.isHighlighted) {
//       return "#f0f5fb";
//     }
//     if (props.isSelected) {
//       return "#669932";
//     }
//     return "";
//   }};
// `;

export const GridWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => {
    return props.theme.palette.neutral60;
  }};
  overflow: hidden;
  .ReactVirtualized__Grid {
    ::-webkit-scrollbar {
      height: 0.75em;
    }
    ::-webkit-scrollbar-track {
      background-color: ${(props) => {
    return props.theme.palette.disabled;
  }};
    border: 1px solid ${(props) => {
    return props.theme.palette.neutral60;
  }};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => {
    return props.theme.palette.link;
  }};
    border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
  }};
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
  align-items: center;
  padding: 0.5em 1em;
  color: ${(props) => {
    if (props.isSelected && !props.isHeader) return props.theme.text.inverse;
    return props.theme.text.primary;
  }};
  font-weight: ${(props) => {
    return props.isHeader ? "600" : "400";
  }};
  font-family: ${(props) => { return props.isHeader ? props.theme.typography.primary : props.theme.typography.secondary; }};
  border-bottom: ${(props) => {
    return props.isHeader ? `2px solid ${props.theme.palette.neutral40}` : `1px solid ${props.theme.palette.neutral40}`;
  }};
  background-color: ${(props) => {
    if (props.isHeader) {
      return props.theme.background.app;
    }
    if (props.isHighlighted) {
      return props.theme.palette.neutral20;
    }
    if (props.isSelected) {
      return props.theme.background.selected;
    }
    return props.theme.background.default;
  }};
  [class^="Menu"],
  [class^="Command"] {
    color: ${(props) => {
    if (props.isSelected) {
      return props.theme.text.inverse;
    }
    return "";
  }};
  }

  &:after {
    content: "v";
    position: absolute;
    right: 0;
    display: ${(props) => {
    return props.isSortable ? "" : "none";
  }};
  }
`;

class CardList extends PureComponent {
  constructor(props) {
    super(props);
    this.columnCount = props.columnCount;
    this.rowCount = 1;
    this.width = props.width;
    this.height = props.height;
    this.id = props.id || getGuid();
    this.cache = null;

    this._cellRenderer = this._cellRenderer.bind(this);
    this._recalculateGridSize = this._recalculateGridSize.bind(this);
    this._onResize = this._onResize.bind(this);
    this._setRefGrid = this._setRefGrid.bind(this);
    this.remeasureCells = this.remeasureCells.bind(this);
    this._getCellIndex = this._getCellIndex.bind(this);
    this._getRowIndex = this._getRowIndex.bind(this);
    this.getCellInfo = this.getCellInfo.bind(this);
    this.scrollToRow = this.scrollToRow.bind(this);
    this.scrollToIndex = this.scrollToIndex.bind(this);
    this.scrollToPosition = this.scrollToPosition.bind(this);
    this._onSectionRendered = this._onSectionRendered.bind(this);
    this._loadMoreRows = this._loadMoreRows.bind(this);
    this._loadMissingRowsInView = this._loadMissingRowsInView.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      id,
      listId,
      data,
      columnWidth,
      columnCount,
    } = this.props;

    let bUpdate = false;
    if (id !== prevProps.id) {
      this.id = id || getGuid();
      bUpdate = true;
    }

    if (prevProps.listId !== listId
      || prevProps.data.length !== data.length) {
      this._recalculateGridSize();
      this.remeasureCells(null, true);
      this._loadMissingRowsInView(
        data,
        this._visibleRowStartIndex,
        this._visibleRowStopIndex,
      ).then(() => {
        this.forceUpdate();
      });
    } else if (prevProps.columnWidth !== columnWidth
      || prevProps.columnCount !== columnCount) {
      // if any of these props are NaNi, the component will break
      this._recalculateGridSize();
      this.remeasureCells(null, true);
      this.forceUpdate();
    } else if (bUpdate) {
      this.forceUpdate();
    }
  }

  getCellInfo(index) {
    const info = {
      columnCount: this.columnCount,
      rowCount: this.rowCount,
    };
    if (typeof index === "number") {
      info.rowIndex = this._getRowIndex(index);
      info.columnIndex = index % this.columnCount;
      info.index = index;
    } else if (index && typeof index === "object") {
      info.rowIndex = index.rowIndex || 0;
      info.columnIndex = index.columnIndex || 0;
      info.index = this._getCellIndex(info.rowIndex, info.columnIndex);
    }
    return info;
  }

  _getCellIndex(rowIndex = 0, columnIndex = 0) {
    return (rowIndex * this.columnCount) + columnIndex;
  }

  _getRowIndex(index = 0) {
    return Math.floor(index / this.columnCount);
  }

  _loadMissingRowsInView(data, startRowIndex, stopRowIndex) {
    const startCellIndex = this._getCellIndex(startRowIndex);
    const stopCellIndex = this._getCellIndex(stopRowIndex, this.columnCount - 1);
    for (let i = startCellIndex; i <= stopCellIndex && i < data.length; i++) {
      // if any cell data in the row is missing, load that row
      if (!data[i]) {
        return this._loadMoreRows({
          startIndex: this._getRowIndex(i),
          stopIndex: stopRowIndex,
        });
      }
    }
    return Promise.resolve();
  }

  // recalculates the number of rows/columns
  // call this._grid.forceUpdate after
  _recalculateGridSize() {
    const { columnCount, columnWidth, data } = this.props;
    let newColCount = columnWidth ? Math.floor(this.width / columnWidth) : columnCount;
    newColCount = newColCount || 1;
    if (this.columnCount !== newColCount) {
      if (this._infiniteScroller) this._infiniteScroller.resetLoadMoreRowsCache();
      this.columnCount = newColCount;
    }
    this.rowCount = Math.ceil(data.length / this.columnCount);
  }

  // remeasures dynamic rows/columns & refreshes grid
  remeasureCells(e, skipGridUpdate) {
    if (e) {
      if (this.cache) this.cache.clear(e.rowIndex, e.columnIndex);
      this._grid.recomputeGridSize(e);
    } else {
      if (this.cache) this.cache.clearAll();
      this._grid.recomputeGridSize();
    }
    if (!skipGridUpdate) this._grid.forceUpdate();
  }

  _cellRenderer({
    columnIndex,
    key,
    parent,
    rowIndex,
    style,
  }) {
    const {
      Template, data, selectedCell, highlightedCell,
      onCellClick, onCellMouseEnter, onCellMouseLeave, onCellMouseOut, onCellMouseOver,
    } = this.props;
    const cellProps = {
      isSelected: false,
      isHighlighted: false,
    };
    const index = this._getCellIndex(rowIndex, columnIndex); // calculate index
    if (index >= data.length) {
      return null;
    }

    if (selectedCell && selectedCell.rowIndex === rowIndex
      && selectedCell.columnIndex === columnIndex) {
      cellProps.isSelected = true;
    } else if (highlightedCell && highlightedCell.rowIndex === rowIndex
      && highlightedCell.columnIndex === columnIndex) {
      cellProps.isHighlighted = true;
    }
    cellProps.onClick = (e) => {
      if (onCellClick) onCellClick(e, { index, rowIndex, columnIndex });
    };
    cellProps.onMouseOver = (e) => {
      if (onCellMouseOver) onCellMouseOver(e, { index, rowIndex, columnIndex });
    };
    cellProps.onMouseOut = (e) => {
      if (onCellMouseOut) onCellMouseOut(e, { index, rowIndex, columnIndex });
    };
    cellProps.onMouseLeave = (e) => {
      if (onCellMouseLeave) onCellMouseLeave(e, { index, rowIndex, columnIndex });
    };
    cellProps.onMouseEnter = (e) => {
      if (onCellMouseEnter) onCellMouseEnter(e, { index, rowIndex, columnIndex });
    };

    const content = (
      <CellWrapper id={`cellwrapper-${rowIndex}-${columnIndex}`} key={key} style={{ ...style, width: this._columnWidth }} {...cellProps}>
        <Template
          data={data[index]}
          isHighlighted={cellProps.isHighlighted}
          isSelected={cellProps.isSelected}
          index={index}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          remeasureCells={this.remeasureCells}
        />
      </CellWrapper>
    );
    return this.cache ? (
      <CellMeasurer
        cache={this.cache}
        columnIndex={columnIndex}
        key={`cellmeasurer-${key}`}
        parent={parent}
        rowIndex={rowIndex}
      >
        {content}
      </CellMeasurer>
    ) : content;
  }

  _setRefGrid(ref) {
    this._grid = ref;
    this._registerColumnChild(ref);
    this._registerInfiniteChild(ref);
  }

  // scroll to row given row index (alternative to focusedRow)
  scrollToRow(rowIndex) {
    if (typeof rowIndex === "number") {
      this._grid.scrollToCell({ rowIndex });
    }
  }

  // scroll to row given the cell index
  scrollToIndex(index) {
    if (typeof index === "number") {
      const rowIndex = this._getRowIndex(index);
      this._grid.scrollToCell({ rowIndex });
    }
  }

  // scroll to the given scrollTop value
  scrollToPosition(scrollTop) {
    if (typeof scrollTop === "number") {
      this._grid.scrollToPosition({ scrollTop });
    }
  }

  // recalculating row/col count & remeasure row/col sizes
  // on resizing the grid width/height
  _onResize({ width, height }) {
    const { width: prevWidth, height: prevHeight } = this.props;
    this.width = prevWidth || width;
    this.height = prevHeight || height;
    this._recalculateGridSize();
    this.remeasureCells(null, true);
    this.forceUpdate();
  }

  _onSectionRendered({ rowStartIndex, rowStopIndex }) {
    // save last start/stop index in view
    this._visibleRowStartIndex = rowStartIndex;
    this._visibleRowStopIndex = rowStopIndex;
    this._onRowsRendered({
      startIndex: rowStartIndex,
      stopIndex: rowStopIndex,
    });
  }

  // callback for loading more rows
  // e.startIndex & e.stopIndex are the row indexes
  _loadMoreRows(e) {
    const { loadRows, data } = this.props;
    if (!loadRows) return Promise.resolve();
    // get the data/cell index given the row index
    const _startIndex = this._getCellIndex(e.startIndex, 0);
    let _stopIndex = this._getCellIndex(e.stopIndex, this.columnCount - 1);
    _stopIndex = _stopIndex < data.length ? _stopIndex : data.length - 1;

    const promise = loadRows({
      startRowIndex: e.startIndex,
      stopRowIndex: e.stopIndex,
      startIndex: _startIndex,
      stopIndex: _stopIndex,
    });

    // remeasure cells if rowHeight is auto
    // for when loading placeholder height & template height are different
    if (promise && this.cache) {
      return promise.then((refreshIndex) => {
        const refreshStartIndex = refreshIndex && typeof refreshIndex.startIndex === "number" ? refreshIndex.startIndex : _startIndex;
        const refreshStopIndex = refreshIndex && typeof refreshIndex.stopIndex === "number" ? refreshIndex.stopIndex : _stopIndex;
        for (let i = refreshStartIndex; i <= refreshStopIndex && i < data.length; i++) {
          this.remeasureCells(this.getCellInfo(i), true);
        }
        this._grid.forceUpdate();
      });
    }
    return promise;
  }

  render() {
    const {
      data, rowHeight, minRowHeight, selectedCell, highlightedCell,
      scrollToAlignment, scrollTop, focusedRow, onScroll, minimumBatchSize,
    } = this.props;

    let scrollToRow = focusedRow;
    let scrollToTop;
    // scrollToRow takes precedence over scrollTop
    if (typeof scrollToRow !== "number") {
      scrollToRow = undefined;
      scrollToTop = scrollTop;
    }

    if (this.cache && typeof rowHeight === "number") {
      // changed from auto to fixed rowHeight
      this.cache = null;
    } else if (!this.cache && typeof rowHeight !== "number") {
      // changed from fixed to auto rowHeight
      this.cache = new CellMeasurerCache({
        defaultHeight: minRowHeight,
        minHeight: minRowHeight,
        fixedWidth: true,
      });
    }

    return (
      <InfiniteLoader
        isRowLoaded={({ index }) => {
          const startCellIndex = this._getCellIndex(index);
          const stopCellIndex = this._getCellIndex(index, this.columnCount - 1);
          for (let i = startCellIndex; i <= stopCellIndex && i < data.length; i++) {
            // at least one card cell in row is not loaded
            if (!data[i]) {
              return false;
            }
          }
          return true;
        }}
        loadMoreRows={this._loadMoreRows}
        rowCount={this.rowCount}
        threshold={0}
        ref={(ref) => { this._infiniteScroller = ref; }}
        minimumBatchSize={minimumBatchSize}
      >
        {({ onRowsRendered, registerChild }) => {
          this._registerInfiniteChild = registerChild;
          this._onRowsRendered = onRowsRendered;
          return (
          // DisableTransitionContext used to disable transitions on cards for accurate cell measurements
            <DisableTransitionContext.Provider value>
              <GridWrapper>
                <AutoSizer
                  onResize={this._onResize}
                  defaultHeight={100}
                  defaultWidth={200}

                  // props to re-render children
                  _width={this.width}
                >
                  {() => {
                    return (
                      <ColumnSizer
                        columnCount={this.columnCount}
                        width={this.width}
                      >
                        {({
                          adjustedWidth,
                          columnWidth: _columnWidth,
                          registerChild: registerColumnChild,
                        }) => {
                          this._columnWidth = _columnWidth;
                          this._registerColumnChild = registerColumnChild;
                          return (
                            <Grid
                              id={this.id}
                              ref={this._setRefGrid}
                              cellRenderer={this._cellRenderer}
                              columnCount={this.columnCount}
                              columnWidth={_columnWidth}
                              deferredMeasurementCache={this.cache}
                              height={this.height}
                              rowCount={this.rowCount}
                              rowHeight={this.cache ? this.cache.rowHeight : rowHeight}
                              width={adjustedWidth}
                              scrollToAlignment={typeof scrollToAlignment === "string" ? scrollToAlignment : "start"}
                              scrollToRow={scrollToRow}
                              scrollTop={scrollToTop}
                              onScroll={(params) => {
                                if (onScroll) onScroll(params);
                              }}
                              onSectionRendered={this._onSectionRendered}

                              // props to cause re-render children
                              _selectedCell={selectedCell}
                              _highlightedCell={highlightedCell}
                            />
                          );
                        }}
                      </ColumnSizer>
                    );
                  }}
                </AutoSizer>
              </GridWrapper>

            </DisableTransitionContext.Provider>
          );
        }}
      </InfiniteLoader>
    );
  }
}

CardList.defaultProps = {
  id: null,
  columnCount: 1,
  columnWidth: null,
  width: 0,
  height: 0,
  rowHeight: null,
  minRowHeight: 10,
  selectedCell: null,
  highlightedCell: null,
  onCellClick: null,
  onCellMouseOut: null,
  onCellMouseOver: null,
  onCellMouseLeave: null,
  onCellMouseEnter: null,
  scrollToAlignment: "start",
  scrollTop: null,
  onScroll: null,
  focusedRow: null,
  loadRows: null,
  listId: null,
  minimumBatchSize: 10,
};

CardList.propTypes = {
  id: PropTypes.string,
  listId: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  Template: PropTypes.elementType.isRequired,
  columnCount: PropTypes.number,
  columnWidth: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  rowHeight: PropTypes.number,
  minRowHeight: PropTypes.number,
  highlightedCell: PropTypes.shape({
    rowIndex: PropTypes.number,
    columnIndex: PropTypes.number,
  }),
  selectedCell: PropTypes.shape({
    rowIndex: PropTypes.number,
    columnIndex: PropTypes.number,
  }),
  onCellClick: PropTypes.func,
  onCellMouseOut: PropTypes.func,
  onCellMouseOver: PropTypes.func,
  onCellMouseLeave: PropTypes.func,
  onCellMouseEnter: PropTypes.func,
  scrollToAlignment: PropTypes.string,
  scrollTop: PropTypes.number,
  onScroll: PropTypes.func,
  focusedRow: PropTypes.number,
  loadRows: PropTypes.func,
  minimumBatchSize: PropTypes.number,
};

CardList.displayName = "cardList";

export default CardList;
