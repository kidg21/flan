import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"


const data = [
  {id: 'a', color: 'Owners/Units', name: 'Multiple Owners (2 Units)'},
  {id: 'b', color: 'Master Parcel No.', name: '387483675638'},
  {id: 'c', color: 'Zoning', name: 'No Zone'},
]



const TableWrapper = styled.table`
  overflow: hidden;
  cursor: default;
  margin: .5em;
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
  padding: 0.5em 0.5em 0.5em;
  font-size: small;

  &:first-child {
    color: #83a3c2;
    font-weight: bold;
  };
  &:nth-child(even) {
    text-align: right;
  }
`;



function Table() {
  return (
    <TableWrapper>
    {data.map(item => 
    <Row key={item.id}>
    <Cell>{item.color}</Cell> <Cell>{item.name}</Cell> 
    </Row>)}
    </TableWrapper>

 );
}

export default Table;


//Tables currently do not have context props. these props will need to be added so there is no hard coded text. we will meet on this later
