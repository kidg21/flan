/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text, { Title, Link } from "base/Typography";
import { SkeletonStatic, getGuid } from "helpers";
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
  ${Cell}:first-child {
      color: ${(props) => {
    return props.theme.text.secondary;
  }};
  }
  ${Cell}:last-child {
        color: ${(props) => {
    return props.theme.text.primary;
  }};
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

  const uId = useMemo(() => { return id || getGuid(); }, [id]);

  return (
    <Wrapper id={uId}>
      {title ? <LegendTitle weight="bold" text={title} /> : null}
      <TableContainer id={`${uId}-table`}>
        {/* if data is an array (possibly empty) then content has been loaded
          and we should display it if it's not an array then assume content is still loading */}
        {data instanceof Array > 0 ? data.map((row, index) => {
          let rowValue = row.value;
          if (row.onClick) {
            rowValue = (<Link onClick={row.onClick}>{rowValue}</Link>);
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
                <Text>{rowValue}</Text>
              </Cell>
            </Row>
          );
        }) : <Loader />}
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
    label: PropTypes.node,
    value: PropTypes.node,
  })).isRequired,
};

Legend.defaultProps = {
  id: null,
  fontSize: null,
  title: null,
};

export default Legend;
