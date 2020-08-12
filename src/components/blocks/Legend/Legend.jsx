/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text, { Title, Link } from "base/Typography";
import { useId } from "utils/hooks";
import { SkeletonStatic } from "helpers/Skeleton";
import Loader from "atoms/Loader";

const LegendTitle = styled(Title)`
padding-bottom: .5rem;
`;

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
  &:empty {
    ${SkeletonStatic};
    padding: 5px;
    width: 100 em;
    height: 5rem;
  }
`;

const Cell = styled.td`
  padding: ${(props) => {
    return props.cellPadding || "0.4em";
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
  margin: 0.5rem;
  ${Cell}:first-of-type {
      color: ${(props) => {
    return props.theme.text.secondary;
  }};
  }
  ${Cell}:last-of-type {
        color: ${(props) => {
    return props.theme.text.primary;
  }};
  }
`;

const Body = styled.tbody``;

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

  const uId = useId(id);

  const content = data instanceof Array
    ? (
      <TableContainer id={`${uId}-table`}>
        <Body>
          {data.map((row, index) => {
            let rowValue = row.value;
            if (row.onClick) {
              rowValue = (<Link onClick={row.onClick}>{rowValue}</Link>);
            }
            if (typeof row.isText === "undefined" || row.isText) {
              rowValue = <Text>{rowValue}</Text>;
            }

            const rowKey = row.id
              || (typeof row.label === "string" && row.label.substr(0, 50).replace(/\s+/g, "_").replace(/\W+/g, ""))
              || (typeof row.value === "string" && row.value.substr(0, 50).replace(/\s+/g, "_").replace(/\W+/g, ""))
              || index;
            return (
              <Row key={rowKey}>
                <Cell
                  cellBorder={cellBorder}
                  cellPadding={cellPadding}
                  cellBorderColor={cellBorderColor}
                  fontWeight={fontWeight}
                  fontSize={fontSize}
                >
                  <Text>{row.label}</Text>
                </Cell>
                <Cell
                  cellBorder={cellBorder}
                  cellPadding={cellPadding}
                  cellBorderColor={cellBorderColor}
                  fontWeight={fontWeight}
                  fontSize={fontSize}
                >
                  {rowValue}
                </Cell>
              </Row>
            );
          })}
        </Body>
      </TableContainer>
    ) : <Loader />;

  return (
    <Wrapper id={uId}>
      {title ? <LegendTitle weight="bold" text={title} /> : null}
      {content}
    </Wrapper>
  );
}

Legend.propTypes = {
  id: PropTypes.string,
  fontSize: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.node,
    value: PropTypes.node,
    isText: PropTypes.bool,
  })),
};

Legend.defaultProps = {
  id: null,
  fontSize: null,
  title: null,
  data: null,
};

export default Legend;
