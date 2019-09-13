import React from "react";
import styled, { css } from "styled-components";
import Container from "atoms/Container";
import Icon from "atoms/Icon";

const Wrapper = styled.div`
  display: block;
`;
const Table = styled.table`
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

function TableExample({ id, data, columns }) {
  return (
    <Wrapper>
      <Table>
        <THEAD>
          <Row>
            <TH>User</TH>
            <TH>Roles</TH>
            <TH>Edit</TH>
          </Row>
        </THEAD>
      </Table>
      <Container height="200px">
        <Table>
          <Body>
            {data.map((item) => {
              return (
                <Row>
                  <Cell>{item.name}</Cell>
                  <Cell>{item.roles}</Cell>
                  <Cell>{item.action}</Cell>
                </Row>
              );
            })}
          </Body>
        </Table>
      </Container>
    </Wrapper>
  );
}
export default TableExample;
