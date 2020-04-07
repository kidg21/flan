/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const GridWrapper = styled.section`
  display: grid;
  grid-gap: ${(props) => {
    return props.gap || "";
  }};
  grid-template-columns: ${(props) => {
    return props.columns || "repeat(auto-fill, minmax(18rem, 1fr))";
  }};
  grid-template-rows: ${(props) => {
    return props.rows || "auto";
  }};
  align-items: ${(props) => {
    return props.alignItems || "flex-start";
  }};
  width: 100%;
`;
GridWrapper.displayName = "Grid";

function Grid({
  align, children, columns, gap, id, rows, className,
}) {
  // 1-12 colums with custom override
  let setColumns;
  const _columns = parseInt(columns, 10);
  if (_columns > 0 && columns < 13) {
    setColumns = `repeat(${_columns}, minmax(0, 1fr))`;
  } else {
    setColumns = columns;
  }
  // 'auto' by default with custom override
  const setRows = rows;
  // 'gutter' between grid items
  const baseGap = 0.25;
  let setGap;
  switch (gap) {
    case "0":
      setGap = "0";
      break;
    default:
      setGap = `${baseGap}rem`;
      break;
    case "2x":
      setGap = `${baseGap * 2}rem`;
      break;
    case "3x":
      setGap = `${baseGap * 3}rem`;
      break;
    case "4x":
      setGap = `${baseGap * 4}rem`;
      break;
    case "5x":
      setGap = `${baseGap * 5}rem`;
      break;
    case "6x":
      setGap = `${baseGap * 6}rem`;
      break;
    case "7x":
      setGap = `${baseGap * 7}rem`;
      break;
    case "8x":
      setGap = `${baseGap * 8}rem`;
      break;
    case "9x":
      setGap = `${baseGap * 9}rem`;
      break;
  }
  let alignItems;
  switch (align) {
    case "center":
      alignItems = "center";
      break;
    case "bottom":
      alignItems = "flex-end";
      break;
    case "top":
    default:
      break;
  }
  return (
    <GridWrapper
      alignItems={alignItems}
      className={className}
      columns={setColumns}
      gap={setGap}
      id={id}
      rows={setRows}
    >
      {children}
    </GridWrapper>
  );
}
Grid.displayName = "GridWrapper";

Grid.propTypes = {
  align: PropTypes.oneOf(["top", "center", "bottom"]),
  children: PropTypes.node,
  className: PropTypes.string,
  /** Defines the widths of grid columns
   *
   * Options: 1-12 or any standard value accepted by the CSS Grid property, 'grid-template-columns'.
   */
  columns: PropTypes.string,
  /** Sets the 'gutter' between grid items */
  gap: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "0",
      "2x",
      "3x",
      "4x",
      "5x",
      "6x",
      "7x",
      "8x",
      "9x",
    ]),
  ]),
  id: PropTypes.string,
  /** Defines the heights of grid rows
   *
   * Options: Any standard value accepted by the CSS Grid property, 'grid-template-rows'.
   */
  rows: PropTypes.string,
};

Grid.defaultProps = {
  align: null,
  children: null,
  className: null,
  columns: null,
  gap: null,
  id: null,
  rows: null,
};

export default Grid;
