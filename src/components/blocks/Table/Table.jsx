import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

const TableWrapper = styled.table`
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  border-collapse: collapse;
  display: flex-block;
  width: 100%;
`;
const Row = styled.tr`
  font-size: 12px;

  // &:nth-child(even) {
  //   background-color: #f0f5fb ;
  // }

  &:hover {
    background-color: #f5f7f9;
    transition: background-color 0.05s ease-in;
  }
`;
const Cell = styled.td`
  padding: 0.5em 1em 0.5em;

  &:first-child {
    color: #83a3c2;
    font-weight: bold;
    font-size: 12px;
  };
  &:nth-child(even) {
    text-align: right;
  }
`;

function Table() {
  return (
    <TableWrapper>
      <Row>
        <Cell>Address</Cell>
        <Cell>Row one, second cell</Cell>
      </Row>
      <Row>
        <Cell>Parcel Number</Cell>
        <Cell>second cell</Cell>
      </Row>
      <Row>
        <Cell>Land Description</Cell>
        <Cell>Row one, second cell</Cell>
      </Row>
      <Row>
        <Cell>Owner</Cell>
        <Cell>Row one, second cell</Cell>
      </Row>
    </TableWrapper>
  )
};

export default Table;


//Tables currently do not have context props. these props will need to be added so there is no hard coded text. we will meet on this later
