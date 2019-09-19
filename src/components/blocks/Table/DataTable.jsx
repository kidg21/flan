import React from "react";
import styled, { css } from "styled-components";
import Container from "atoms/Container";
import { SkeletonStatic } from "helpers";

const Wrapper = styled.div`
  display: block;
`;
const TableContainer = styled.table`
  width: 100%;
  overflow-y: ${(props) => {
    return props.scroll ? "auto" : "";
  }};
  overflow-x: ${(props) => {
    return props.scroll ? "auto" : "";
  }};
  table-layout: fixed;
  border-collapse: collapse;
  cell-padding: 1rem;
  overflow: ${(props) => {
    return props.scroll ? "scroll" : "";
  }};
  min-width: 400px;
  cell-spacing: 1rem;

  &:empty {
    ${SkeletonStatic};
    padding: 5px;
    width: 100 em;
    height: 5rem;
  }
}
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
  padding: ${(props) => {
    return props.cellPadding || "";
  }};
  border-bottom: ${(props) => {
    return props.cellBorder || "";
  }};

  &:nth-child(even) {
    font-weight: ${(props) => {
    return props.fontWeight || "";
  }};
  }

  &:empty {
    &:before {
      content: "Not Available";
    }
  }
`;

function DataTable({
  id, header, scroll, style, data, columns,
}) {
  let content;
  let cellPadding;
  let fontWeight;
  let cellBorder;
  let headerContent;

  switch (style) {
    case "legend":
      cellBorder = "";
      cellPadding = "0.25em 0.25em 0.25em";
      fontWeight = "bold";
      break;
    case "standard":
      cellBorder = "1px solid #ddd";
      cellPadding = "0.5em";
      break;
    default:
      cellBorder = "1px solid #ddd";
      cellPadding = "0.5em";
      break;
  }
  if (header) {
    headerContent = (
      <TableContainer>
        <THEAD>
          <Row>
            {columns.map((column) => {
              return <TH key={column}> {column} </TH>;
            })}
          </Row>
        </THEAD>
      </TableContainer>
    );
    content = (
      <Body>
        {data.map((row) => {
          return (
            <Row>
              {columns.map((column) => {
                return (
                  <Cell
                    key={column}
                    cellBorder={cellBorder}
                    cellPadding={cellPadding}
                    fontWeight={fontWeight}
                  >
                    {row[column.toLowerCase()]}
                  </Cell>
                );
              })}
            </Row>
          );
        })}
      </Body>
    );
  } else {
    content = (
      <TableContainer id={id}>
        {data.map((row) => {
          return (
            <Row key={row.id}>
              <Cell cellBorder={cellBorder} cellPadding={cellPadding} fontWeight={fontWeight}>
                {row.name}
              </Cell>
              <Cell cellBorder={cellBorder} cellPadding={cellPadding} fontWeight={fontWeight}>
                {row.value}
              </Cell>
            </Row>
          );
        })}
      </TableContainer>
    );
    headerContent = "";
  }

  return (
    <Wrapper id={id}>
      {headerContent}
      {scroll ? (
        <Container height="200px">
          <TableContainer scroll={scroll}>{content}</TableContainer>
        </Container>
      ) : (
        <TableContainer>{content}</TableContainer>
      )}
    </Wrapper>
  );
}
export default DataTable;
