/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable complexity */
// Import dependencies
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Skeleton } from "helpers";


const StyledLabel = styled.label`
  color: inherit;
  width: max-content;
  user-select: none;
  font-size: ${(props) => {
    return props.fontSize || "";
  }};;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${(props) => {
    return props.fontWeight || "500";
  }};;
  letter-spacing: ${(props) => {
    return props.letterSpacing || ".25px";
  }};;
  text-transform: ${(props) => {
    return props.textTransform || "";
  }};;
  &:empty {
    ${Skeleton};
  }
}

&:after {
  display: ${(props) => { return (props.isRequired ? "" : "none"); }};
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
  text, children, size, weight, letterSpacing, isRequired, textTransform,
}) {
  let fontSize;
  let fontWeight;
  switch (size && size.toLowerCase()) {
    case "sm":
      fontSize = "0.876em";
      break;
    case "m":
      fontSize = "0.8rem";
      break;
    case "lg":
      fontSize = "1.25rem";
      break;
    default:
      fontSize = "1rem";
      break;
  }
  switch (weight && weight.toLowerCase()) {
    case "light":
      fontWeight = "300";
      break;
    case "normal":
      fontWeight = "500";
      break;
    case "semibold":
      fontWeight = "600";
      break;
    case "bold":
      fontWeight = "bold";
      break;
    default:
      fontWeight = "500";
      break;
  }
  return (
    <StyledLabel
      fontWeight={fontWeight}
      isRequired={isRequired}
      letterSpacing={letterSpacing}
      fontSize={fontSize}
      textTransform={textTransform}
    >
      {text || children}
    </StyledLabel>
  );
}
Label.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
  weight: PropTypes.string,
  letterSpacing: PropTypes.string,
  textTransform: PropTypes.string,
  isRequired: PropTypes.string,
};
Label.defaultProps = {
  text: null,
  children: null,
  size: null,
  letterSpacing: null,
  weight: null,
  textTransform: null,
  isRequired: null,
};

export { Label as default };
