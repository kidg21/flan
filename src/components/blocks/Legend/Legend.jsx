/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text, { Title } from "base/Typography";
import { SkeletonStatic } from "helpers";


const Wrapper = styled.div`
  display: block;
  padding: .5rem;
`;
const TableContainer = styled.table`
  width: 100%;
  color: ${(props) => {
    return props.theme.text.secondary;
  }};
  table-layout: fixed;
  border-collapse: collapse;


  &:empty {
    ${SkeletonStatic};
    padding: 5px;
    width: 100 em;
    height: 5rem;
  }
}
`;



const Cell = styled.td`
  padding: ${(props) => {
    return props.cellPadding || "0.5em";
  }};
  border-bottom: ${(props) => {
    return props.cellBorder || "";
  }};
  border-bottom-color: ${(props) => {
    return props.theme.palette[props.cellBorderColor] || "";
  }};

  &:first-child {
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

const Row = styled.tr`
  margin: 1em;

  ${Cell}:first-child{
    color: ${(props) => {
      return props.theme.text.secondary;
    }};
  ${Cell}:last-child{
      color: ${(props) => {
        return props.theme.text.primary;
      }};
`;


function Legend({
  id,
  fontSize,
  data,
  title,
}) {
  let cellPadding;
  let fontWeight;
  let cellBorder;
  let cellBorderColor;

  return (
    <Wrapper id={id}>
      {title ? <Title text={title} /> : null}
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
                <Text text={row.label}/>
              </Cell>
              <Cell
                cellBorder={cellBorder}
                cellPadding={cellPadding}
                cellBorderColor={cellBorderColor}
                fontWeight={fontWeight}
                fontSize={fontSize}
              >
                <Text weight="bold" text={row.value} />
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
  fontSize: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.node,
  })).isRequired,
};

Legend.defaultProps = {
  id: null,
  fontSize: null,
  title: null,
};

export default Legend;
