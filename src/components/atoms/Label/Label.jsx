/* eslint-disable linebreak-style */
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
    return props.fontSize || "1rem";
  }};;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${(props) => {
    return props.fontWeight || "700";
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
  letterSpacing,
  size,
  text,
  textTransform,
  weight,
}) {
  return (
    <StyledLabel
      fontWeight={weight}
      isRequired={isRequired}
      htmlFor={htmlFor}
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
