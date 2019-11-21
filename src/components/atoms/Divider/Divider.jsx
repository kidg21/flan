/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";

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
