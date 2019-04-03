import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.table`
overflow: hidden;
box-shadow: 0 0 20px rgba(0, 0, 0, .08);
border-radius: 5px;
border-collapse: collapse;
display: flex-block;
width: 100%;
`
const TH = styled.th`
text-align: left;
font-size: 12px;
padding: 5px 10px 5px;
border-bottom: 1px solid #ddd;
`

const Row = styled.tr`
font-size: 12px;

&:nth-child(even) {
  background-color: #f3f2f2;
}

// &:hover {
//   background-color:rgba(0, 0, 0, 0.1);
//   transition: background-color .05s ease-in;
//   cursor: pointer;
// }
`


const Cell = styled.td`
padding: .5em 1em .5em;

&:first-child {
  font-weight: bold;
  font-size: 12px;
}
`



function TableFunction() {
  return (
          <Table>
              <Row>
                <Cell>Row one, first cell</Cell>
                <Cell>Row one, second cell</Cell>
            </Row>
            <Row>
            <Cell>Row one, first cell</Cell>
                <Cell>Row one, second cell</Cell>
            </Row>
            <Row>
            <Cell>Row one, first cell</Cell>
                <Cell>Row one, second cell</Cell>
            </Row>
            <Row>
            <Cell>Row one, first cell</Cell>
            <Cell>Row one, second cell</Cell>
            </Row>
          </Table>
  )
}


export default TableFunction;