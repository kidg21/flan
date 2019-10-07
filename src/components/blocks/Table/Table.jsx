import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Container from "atoms/Container";
import { SkeletonStatic } from "helpers";
import Title from "base/Typography";

const Wrapper = styled.div`
  display: block;
  padding: 1em;
`;
const TableContainer = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  min-width: 400px;


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

const Head = styled.thead``;

const Body = styled.tbody`
  min-width: 400px;
`;

const TH = styled.th`
  text-align: left;
  min-width: 400px;
  color: black;
  font-size: ${(props) => {
    return props.fontSize || "small";
  }};
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
  font-size: ${(props) => {
    return props.fontSize || "small";
  }};

  &:nth-child(even) {
    font-weight: ${(props) => {
    return props.fontWeight || "";
  }};
  }

  &:empty {
    &:before {
      content: "N/A";
    }
  }
`;

function Table({
  id, header, scroll, setHeight, fontSize, style, data, columns,
}) {
  let content;
  let cellPadding;
  let fontWeight;
  let cellBorder;
  let headerContent;

  switch (style) {
    case "legend":
      cellBorder = "";
      cellPadding = "0.15em 0.15em 0.15em";
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
        <Head>
          <Row>
            {columns.map((column) => {
              return (
                <TH key={column} fontSize={fontSize}>
                  {column}
                </TH>
              );
            })}
          </Row>
        </Head>
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
                    fontSize={fontSize}
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
              <Cell
                cellBorder={cellBorder}
                cellPadding={cellPadding}
                fontWeight={fontWeight}
                fontSize={fontSize}
              >
                {row.name}
              </Cell>
              <Cell
                cellBorder={cellBorder}
                cellPadding={cellPadding}
                fontWeight={fontWeight}
                fontSize={fontSize}
              >
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
        <Container height={setHeight}>
          <TableContainer>{content}</TableContainer>
        </Container>
      ) : (
        <TableContainer>{content}</TableContainer>
      )}
    </Wrapper>
  );
}

Table.propTypes = {
  id: PropTypes.string,
  header: PropTypes.any,
  scroll: PropTypes.bool,
  setHeight: PropTypes.string,
  fontSize: PropTypes.string,
  style: PropTypes.any,
  data: PropTypes.any,
  columns: PropTypes.any,
};

Table.defaultProps = {
  id: null,
  header: null,
  scroll: false,
  setHeight: null,
  fontSize: null,
  style: null,
  data: null,
  columns: null,
};

export default Table;
