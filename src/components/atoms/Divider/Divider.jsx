/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styled from "styled-components";

const Line = styled.hr`
  height: 0;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-top: 0.25px solid
    ${(props) => {
    return props.theme.palette.grey5;
  }};
  font-size: 0;
`;

function Divider() {
  return <Line />;
}

export default Divider;
