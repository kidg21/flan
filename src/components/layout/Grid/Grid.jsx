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
  // 'gutter' between grid items
  let setGap;
  // 1-12 colums with custom override
  let setColumns;
  // 'auto' by default with custom override
  // Will add specific cases as they come up
  let setRows;
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
  switch (columns) {
    case "1":
      setColumns = "repeat(1, minmax(0, 1fr))";
      break;
    case "2":
      setColumns = "repeat(2, minmax(0, 1fr))";
      break;
    case "3":
      setColumns = "repeat(3, minmax(0, 1fr))";
      break;
    case "4":
      setColumns = "repeat(4, minmax(0, 1fr))";
      break;
    case "5":
      setColumns = "repeat(5, minmax(0, 1fr))";
      break;
    case "6":
      setColumns = "repeat(6, minmax(0, 1fr))";
      break;
    case "7":
      setColumns = "repeat(7, minmax(0, 1fr))";
      break;
    case "8":
      setColumns = "repeat(8, minmax(0, 1fr))";
      break;
    case "9":
      setColumns = "repeat(9, minmax(0, 1fr))";
      break;
    case "10":
      setColumns = "repeat(10, minmax(0, 1fr))";
      break;
    case "11":
      setColumns = "repeat(11, minmax(0, 1fr))";
      break;
    case "12":
      setColumns = "repeat(12, minmax(0, 1fr))";
      break;
    default:
    case "auto":
      setColumns = columns;
      break;
  }
  switch (rows) {
    default:
    case "auto":
      setRows = rows;
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
  setColumns: PropTypes.oneOf([
    "default (auto)",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "[custom]",
  ]),
  setGap: PropTypes.oneOf([
    "none",
    "tiny",
    "small",
    "default (normal)",
    "large",
    "xlarge",
    "xxlarge",
    "[custom]",
  ]),
  setRows: PropTypes.oneOf(["default (auto)", "[custom]"]),
};

export { Grid as default };
