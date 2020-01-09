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
    return props.cellPadding || "0.15em 0.15em 0.15em";
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
    return props.fontWeight || "";
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
                <Text text={row.name} />
              </Cell>
              <Cell
                cellBorder={cellBorder}
                cellPadding={cellPadding}
                cellBorderColor={cellBorderColor}
                fontWeight={fontWeight}
                fontSize={fontSize}
              >
                <Text text={row.value} />
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
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.node,
  })).isRequired,
  title: PropTypes.node,
};

Legend.defaultProps = {
  id: null,
  fontSize: null,
  title: null,
};

export default Legend;
