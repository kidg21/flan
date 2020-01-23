/* eslint-disable linebreak-style */
// Import dependencies
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Skeleton } from "helpers";

const StyledLabel = styled.label`
  color: inherit;
  user-select: none;
  font-size: ${(props) => {
    return props.fontSize || "";
  }};;
  cursor: pointer;
  display: flex;
  font-weight: ${(props) => {
    return props.fontWeight || "";
  }};;
  letter-spacing: ${(props) => {
    return props.letterSpacing || "";
  }};;
  text-transform: ${(props) => {
    return props.textTransform || "";
  }};;
  &:empty {
    ${Skeleton};
  }
}

&:after {
  display: ${(props) => {
    return props.isRequired ? "" : "none";
  }};
  content: "*";
  color: ${(props) => {
    return props.theme.palette.alert;
  }};
  font-size: 1.25rem;
  line-height: 0;
  vertical-align: middle;
  padding-left: 0.25em;
}

`;

const sizeHash = {
  sm: "0.876rem",
  m: "0.8rem",
  lg: "1.25rem",
};

const weightHash = {
  light: "300",
  normal: "500",
  semibold: "600",
  bold: "bold",
};

function Label({
  children,
  htmlFor,
  isRequired,
  letterSpacing,
  size,
  text,
  textTransform,
  weight,
}) {
  const fontSize = sizeHash[size && size.toLowerCase()] || "";
  const fontWeight = weightHash[weight && weight.toLowerCase()] || "";
  return (
    <StyledLabel
      fontWeight={fontWeight}
      isRequired={isRequired}
      htmlFor={htmlFor}
      letterSpacing={letterSpacing}
      fontSize={fontSize}
      textTransform={textTransform}
    >
      {text || children}
    </StyledLabel>
  );
}
Label.propTypes = {
  htmlFor: PropTypes.node,
  children: PropTypes.node,
  isRequired: PropTypes.bool,
  letterSpacing: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  textTransform: PropTypes.string,
  weight: PropTypes.string,
};
Label.defaultProps = {
  htmlFor: null,
  children: null,
  isRequired: false,
  letterSpacing: null,
  size: null,
  text: null,
  textTransform: null,
  weight: null,
};

export default Label;
