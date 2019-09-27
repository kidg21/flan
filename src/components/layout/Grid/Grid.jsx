import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const GridWrapper = styled.section`
  display: grid;
  grid-gap: ${(props) => {
    return props.setGap || "1rem";
  }};
  grid-template-columns: ${(props) => {
    return props.setColumns || "repeat(auto-fill, minmax(22rem, 1fr))";
  }};
  grid-template-rows: ${(props) => {
    return props.setRows || "auto";
  }};
  align-items: ${(props) => {
    return props.alignItems || "flex-start";
  }};
`;

function Grid({
  align, children, columns, gap, id, rows, className,
}) {
  // 1-12 colums with custom override
  let setColumns;
  const _columns = parseInt(columns);
  if (_columns > 0 && columns < 13) {
    setColumns = `repeat(${_columns}, minmax(0, 1fr))`;
  } else {
    setColumns = columns;
  }
  // 'auto' by default with custom override
  const setRows = rows;
  // 'gutter' between grid items
  let setGap;
  let alignItems;
  switch (gap) {
    case "none":
      setGap = "0";
      break;
    case "tiny":
      setGap = ".35rem";
      break;
    case "small":
      setGap = ".75rem";
      break;
    case "large":
      setGap = "1.5rem";
      break;
    case "xlarge":
      setGap = "2rem";
      break;
    case "xxlarge":
      setGap = "3rem";
      break;
    default:
    case "normal":
      setGap = gap;
      break;
  }
  switch (align) {
    case "center":
      alignItems = "center";
      break;
    case "bottom":
      alignItems = "flex-end";
      break;
    default:
      break;
  }
  return (
    <GridWrapper
      alignItems={alignItems}
      id={id}
      setColumns={setColumns}
      setGap={setGap}
      setRows={setRows}
      className={className}
    >
      {children}
    </GridWrapper>
  );
}

Grid.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  /** Defines the widths of grid columns
   *
   * Options: 1-12 or any standard value accepted by the CSS Grid property, 'grid-template-columns'.
   */
  columns: PropTypes.string,
  /** Defines the heights of grid rows
   *
   * Options: Any standard value accepted by the CSS Grid property, 'grid-template-rows'.
   */
  rows: PropTypes.string,
  /** Sets the 'gutter' between grid items
   *
   * Options: Any switch case or any standard value accepted by the CSS Grid property, 'grid-gap'.
   */
  gap: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "none",
      "tiny",
      "small",
      "default (normal)",
      "large",
      "xlarge",
      "xxlarge",
      "[grid-template-rows]",
    ]),
  ]),
  align: PropTypes.oneOf(["default (top)", "center", "bottom"]),
  className: PropTypes.string,
};

Grid.defaultProps = {
  id: null,
  children: null,
  columns: null,
  rows: null,
  gap: null,
  align: null,
  className: null,
};

export { Grid as default };
