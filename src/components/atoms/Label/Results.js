import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Content = styled.a`
  display: inline-flex;
  margin: 0px 5px 0px 5px;
  color: #75ab3f;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.25s ease-in;
`;

// const props = {
//     contentProp: "yo brother"
// };

function Results({ number, ...props }) {
  return (
    <div>
      <Content>{number}</Content>
      <span style={{ fontSize: "11px" }}>results</span>
    </div>
  );
}

Results.defaultProps = {
  id: "",
  number: "0"
};

Results.propTypes = {
  id: PropTypes.string,
  number: PropTypes.string
};

export default Results;
