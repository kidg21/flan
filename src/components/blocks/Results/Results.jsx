import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";
import Title from "base/Typography";


const Number = styled.a`
  font-size: 20px;
  font-weight: 600;
  padding-right: 0.25em;
  &:focus {
    border: 1px solid ${(props) => {
      return props.theme.colors.primary; }};
    outline: none;
  }
`;
const ResultsContainer = styled.div`
  display: inline-block;
`;

const StyledLabel = styled.label`
  vertical-align: sup;
`;

function Results({ id, count, onClick }) {
  return (
    <ResultsContainer id={id}>
      <Number onClick={onClick}>{count}</Number>
      <StyledLabel>results</StyledLabel>
    </ResultsContainer>
  );
}
Results.propTypes = {
  id: PropTypes.string,
  count: PropTypes.string,
  onClick: PropTypes.func,
};
export default Results;
