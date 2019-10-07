import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Line = styled.hr`
  height: 0;
  border-top: 0.25px solid
    ${(props) => {
    return props.theme.palette.grey6;
  }};
  font-size: 0;
`;

function Divider() {
  return <Line />;
}

export default Divider;
