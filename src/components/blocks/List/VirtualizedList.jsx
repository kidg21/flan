import React, { Component } from "react";
import PropTypes from "prop-types";
import { List, AutoSizer, CellMeasurer, CellMeasurerCache, InfiniteLoader } from "react-virtualized";
import styled from "styled-components";

const RowWrapper = styled.div`
  padding: 5px;
  color: ${(props) => { return props.theme.text.primary; }};
  font-weight: ${(props) => { return props.isHeader ? "600" : ""; }};
  border-bottom: 1px solid #eee;
  background-color: ${(props) => {
    if (props.isHighlighted) {
      return "#f0f5fb";
    }
    if (props.isSelected) {
      return "#669932";
    }
    return "";
  }};
`;

class VirtualizedList extends Component {
  constructor(props) {
    super(props);
    const {
      minRowHeight,
      rowHeight,
    } = props;
    this.cache = null;
    if (rowHeight === null) {
      // rowHeight will be calculated by the cell measurer
      this.cache = new CellMeasurerCache({
        defaultHeight: minRowHeight,
        minHeight: minRowHeight,
        fixedWidth: true,
      });
    }
    this._rowRenderer = this._rowRenderer.bind(this);
  }

  componentDidUpdate(prevProps) {
    // const currRows = this.props.rows;
    // const prevRows = prevProps.rows;
    if (this.props.id !== prevProps.id) {
      // need to force update of entire MultiGrid when active list changes
      // otherwise rows don't update due to possible cachcing issues
      this.forceUpdate();
    }
  }

  _rowRenderer({
    key,
    index,
    isScrolling,
    isVisible,
    parent,
    style,
  }) {
    const {
      rows, Template, highlightedCell, selectedCell,
      onCellClick, onCellMouseOut, onCellMouseOver, onCellMouseLeave, onCellMouseEnter,
    } = this.props;
    const rowProps = {
      isSelected: false,
      isHighlighted: false,
    };
    if (selectedCell && selectedCell.rowIndex === index) {
      rowProps.isSelected = true;
    } else if (highlightedCell && highlightedCell.rowIndex === index) {
      rowProps.isHighlighted = true;
    }
    rowProps.onClick = (e) => {
      if (onCellClick) onCellClick(e, { rowIndex: index });
    };
    rowProps.onMouseOver = (e) => {
      if (onCellMouseOver) onCellMouseOver(e, { rowIndex: index });
    };
    rowProps.onMouseOut = (e) => {
      if (onCellMouseOut) onCellMouseOut(e, { rowIndex: index });
    };
    rowProps.onMouseLeave = (e) => {
      if (onCellMouseLeave) onCellMouseLeave(e, { rowIndex: index });
    };
    rowProps.onMouseEnter = (e) => {
      if (onCellMouseEnter) onCellMouseEnter(e, { rowIndex: index });
    };
    const content = (
      <RowWrapper key={key} style={style} {...rowProps}>
        <Template
          {...rows[index]}
          isHighlighted={rowProps.isHighlighted}
          isSelected={rowProps.isSelected}
          index={index}
        />
      </RowWrapper>
    );

    return this.cache ? (
      <CellMeasurer
        cache={this.cache}
        columnIndex={0}
        rowIndex={index}
        parent={parent}
        key={`cellmeasurer-${key}`}
      >
        {content}
      </CellMeasurer>
    ) : content;
  }

  render() {
    const {
      id, rows, loadMoreRows, width,
      height, rowHeight, highlightedCell, selectedCell,
      focusedRow, scrollToAlignment, scrollTop, scrollTopChanged,
    } = this.props;
    const _rowHeight = this.cache ? this.cache.rowHeight : rowHeight;
    const scrollToRow = typeof focusedRow === "number" ? focusedRow : undefined;

    return (
      <InfiniteLoader
        isRowLoaded={({ index }) => {
          return !!rows[index];
        }}
        loadMoreRows={({ startIndex }) => {
          if (loadMoreRows) loadMoreRows({ startIndex });
        }}
        rowCount={rows.length}
        threshold={0}
      >
        {({ onRowsRendered, registerChild }) => {
          return (
            <AutoSizer>
              {(autoSizer) => {
                return (
                  <List
                    id={id}
                    width={width || autoSizer.width}
                    height={height || autoSizer.height}
                    rowCount={rows.length}
                    rowHeight={_rowHeight}
                    rowRenderer={this._rowRenderer}
                    highlightedCell={highlightedCell}
                    selectedCell={selectedCell}
                    scrollToIndex={scrollToRow} // takes precedence over scrollTop
                    scrollTop={scrollTop}
                    scrollToAlignment={scrollToAlignment}
                    onScroll={(params) => {
                      if (scrollTopChanged) scrollTopChanged(params.scrollTop);
                    }}
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
                  />
                );
              }}
            </AutoSizer>
          );
        }}
      </InfiniteLoader>
    );
  }
}

VirtualizedList.defaultProps = {
  width: null,
  height: null,
  rowHeight: null,
  minRowHeight: 40,
  highlightedCell: null,
  selectedCell: null,
  onCellClick: null,
  onCellMouseOut: null,
  onCellMouseOver: null,
  focusedRow: null,
  scrollToAlignment: "auto",
  scrollTop: null,
  scrollTopChanged: null,
  loadMoreRows: null,
};

VirtualizedList.propTypes = {
  id: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape).isRequired,
  Template: PropTypes.elementType.isRequired,
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
  focusedRow: PropTypes.number,
  scrollToAlignment: PropTypes.string,
  scrollTop: PropTypes.number,
  scrollTopChanged: PropTypes.func,
  loadMoreRows:  PropTypes.func,
};
export default VirtualizedList;
