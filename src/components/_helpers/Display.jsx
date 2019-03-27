import React from "react";
import styled from "styled-components";

const centerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
};
const Center = ({ children }) => <div style={centerStyles}>{children}</div>;

const padding = {
  padding: "2rem"
};
const Padding = storyFn => <div style={padding}>{storyFn()}</div>;

export { Center, Padding };
