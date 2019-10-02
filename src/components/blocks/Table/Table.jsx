import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { SkeletonStatic } from "helpers";
import Title from "base/Typography";

const TableWrapper = styled.table`
  // overflow: hidden;
  table-layout: fixed;
  cursor: default;
  // box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  border-collapse: collapse;
  // display: flex-block;
  width: 100%;
  &:empty {
      ${SkeletonStatic};
      padding: 5px;
      width: 100 em;
      height: 5rem;
    }
  }
`;
const Row = styled.tr``;
const Cell = styled.td`
  // padding: 0.25em 0.25em 0.25em;
  font-size: small;
  text-align: left;

  &:empty {
    &:before {
      content: "Not Available";
    }
  }

  &:nth-child(even) {
    font-weight: bold;
  }
`;

function Table({ id, data }) {
  return (
    <TableWrapper id={id}>
      {data.map((item) => {
        return (
          <Row key={item.id}>
            <Cell>
              <Title text={item.name} size="tiny" weight="normal" />
            </Cell>{" "}
            <Cell>
              <Title text={item.value} size="tiny" weight="bold" />
            </Cell>
          </Row>
        );
      })}
    </TableWrapper>
  );
}

Table.propTypes = {
  id: PropTypes.string,
  data: PropTypes.any.isRequired,
};

export default Table;

// Tables currently do not have context props. these props will need to be added so there is no hard coded text. we will meet on this later
