import React from "react";
import styled, { css } from "styled-components";
import Container from "atoms/Container";
import Icon from "atoms/Icon";

const Wrapper = styled.div`
  display: block;
`;
const TableContainer = styled.table`
  width: 100%;
  overflow-y: auto;
  overflow-x: auto;
  table-layout: fixed;
  border-collapse: collapse;
  cell-padding: 1rem;
  overflow: scroll;
  min-width: 400px;
  cell-spacing: 1rem;
  // border: 1px solid lightgrey;
`;

const Row = styled.tr`
  margin: 1em;
`;

const THEAD = styled.thead``;

const Body = styled.tbody`
  min-width: 400px;
`;

const TH = styled.th`
  text-align: left;
  min-width: 400px;
  color: black;
  padding-left: 5px;
  position: sticky;
  padding-bottom: 10px;
`;

const Cell = styled.td`
  padding: 0.5em;
  border-bottom: 1px solid #ddd;
`;

//   &:nth-child(even) {
//     font-weight: bold;
//   }

function DataTable({ id, data, columns }) {
  return (
    <Wrapper id={id}>
      <TableContainer>
        <THEAD>
          <Row>
            {columns.map((column) => {
              return <TH key={column}> {column} </TH>;
            })}
          </Row>
        </THEAD>
      </TableContainer>
      <Container height="200px">
        <TableContainer>
          <Body>
            {data.map((row) => {
              return (
                <Row>
                  {columns.map((column) => {
                    return <Cell key={column}>{row[column.toLowerCase()]}</Cell>;
                  })}
                </Row>
              );
            })}
          </Body>
        </TableContainer>
      </Container>
    </Wrapper>
  );
}
export default DataTable;
