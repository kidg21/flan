/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SkeletonStatic } from "helpers";


const Wrapper = styled.div`
  display: block;
  padding: 1em;
`;
const TableContainer = styled.table`
  width: 100%;
  color: ${(props) => {
    return props.theme.text.primary;
  }};
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

const Cell = styled.td`
  padding: ${(props) => {
    return props.cellPadding || "0.15em 0.15em 0.25em";
  }};
  border-bottom: ${(props) => {
    return props.cellBorder || "";
  }};
  border-bottom-color: ${(props) => {
    return props.theme.palette[props.cellBorderColor] || "";
  }};
  font-size: ${(props) => {
    return props.fontSize || "small";
  }};

  &:first-child {
    font-weight: ${(props) => {
    return props.fontWeight || "bold";
  }};
  }

  &:empty {
    &:before {
      content: "N/A";
    }
  }
`;

function Legend({
  id,
  fontSize,
  data,
}) {
  let cellPadding;
  let fontWeight;
  let cellBorder;
  let cellBorderColor;

  return (
    <Wrapper id={id}>
      <TableContainer id={id}>
        {data.map((row) => {
          return (
            <Row key={row.id}>
              <Cell
                cellBorder={cellBorder}
                cellPadding={cellPadding}
                cellBorderColor={cellBorderColor}
                fontWeight={fontWeight}
                fontSize={fontSize}
              >
                {row.name}
              </Cell>
              <Cell
                cellBorder={cellBorder}
                cellPadding={cellPadding}
                cellBorderColor={cellBorderColor}
                fontWeight={fontWeight}
                fontSize={fontSize}
              >
                {row.value}
              </Cell>
            </Row>
          );
        })}
      </TableContainer>
    </Wrapper>
  );
}

Legend.propTypes = {
  id: PropTypes.string,
  scroll: PropTypes.bool,
  setHeight: PropTypes.string,
  fontSize: PropTypes.string,
  style: PropTypes.node,
  data: PropTypes.node.isRequired,
  columns: PropTypes.arrayOf(PropTypes.string),
  keyField: PropTypes.string,
};

Legend.defaultProps = {
  id: null,
  scroll: false,
  setHeight: null,
  fontSize: null,
  style: null,
  columns: null,
  keyField: null,
};

export default Legend;
