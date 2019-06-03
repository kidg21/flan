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

  &:hover {
    background-color: #f5f7f9;
    transition: background-color 0.05s ease-in;
  }
`;
const Cell = styled.td`
  padding: 0.5em 1em 0.5em;
  font-size: 0.860rem;

  &:first-child {
    color: #83a3c2;
    font-weight: bold;
  };
  &:nth-child(even) {
    text-align: right;
  }
`;



const data = [
  {id: 'a', color: 'red', name: 'Devin'},
  {id: 'b', color: 'blue', name: 'Gabe'},
  {id: 'c', color: 'green', name: 'Kim'},
]



function Table() {
  return (
    <TableWrapper>
      <Row>
        <Cell>Address</Cell>
        <Cell>Row one, second cell</Cell>
      </Row>
      <Row>
      <Cell>Address</Cell>
        <Cell>Row one, second cell</Cell>
      </Row>
      <Row>
        <Cell>Address</Cell>
        <Cell>Row one, second cell</Cell>
      </Row>
      <Row>
      <Cell>Address</Cell>
        <Cell>Row one, second cell</Cell>
      </Row>
    </TableWrapper>
  )
};

export default Table;


//Tables currently do not have context props. these props will need to be added so there is no hard coded text. we will meet on this later
