import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const GridWrapper = styled.section`
  display: grid;
  grid-gap: ${props => props.setGap || "1rem"};
  grid-template-columns: ${props =>
    props.setColumns || "repeat(auto-fit, minmax(22rem, 1fr))"};
  grid-template-rows: ${props => props.setRows || "auto"};
`;

function Grid({ children, columns, gap, id, rows }) {
  // 1-12 colums with custom override
  let setColumns;
  const _columns = parseInt(columns);
  if (_columns > 0 && columns < 21) {
    setColumns = `repeat(${_columns}, minmax(0, 1fr))`;
  } else {
    setColumns = columns;
  }
  // 'auto' by default with custom override
  let setRows = rows;
  // 'gutter' between grid items
  let setGap;
  switch (gap) {
    case "none":
      setGap = "0";
      break;
    case "tiny":
      setGap = ".25rem";
      break;
    case "small":
      setGap = ".5rem";
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
  return (
    <GridWrapper
      id={id}
      setColumns={setColumns}
      setGap={setGap}
      setRows={setRows}
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
};

export { Grid as default };
