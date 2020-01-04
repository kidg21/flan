/* eslint-disable linebreak-style */
// Import dependencies
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Skeleton } from "helpers";

const StyledLabel = styled.label`
  color: inherit;
  font-family: Nunito;
  margin: 0px 0px 0px 0px;
  width: max-content;
  line-height: ${(props) => {
    return props.lineHeight || "1.5";
  }};;
  user-select: none;
  font-size: ${(props) => {
    return props.fontSize || "14px";
  }};;
  cursor: pointer;
  font-weight: ${(props) => {
    return props.fontWeight || "600";
  }};;
  letter-spacing: ${(props) => {
    return props.letterSpacing || "0.5px";
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


function Label({
  children,
  htmlFor,
  isRequired,
  type,
  size,
  text,
  textTransform,
}) {
  let letterSpacing;
  let lineHeight;
  let weight;
  switch (type && type.toLowerCase()) {
    case "normal":
      weight = "400";
      letterSpacing = "0.125px";
      lineHeight = "1px";
      break;
    case "bold":
      weight = "600";
      letterSpacing = "0.5px";
      break;
    default:
      weight = "400";
      letterSpacing = "0.125px";
      lineHeight = "1px";
      break;
  }
  return (
    <StyledLabel
      fontWeight={weight}
      isRequired={isRequired}
      htmlFor={htmlFor}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      fontSize={size}
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
  size: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  textTransform: PropTypes.string,
};
Label.defaultProps = {
  htmlFor: null,
  children: null,
  isRequired: false,
  size: null,
  type: null,
  text: null,
  textTransform: null,
};

export default Label;
