// Import dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// Import colors and sizes variables
import { colors, shadows, fonts, fontSize } from "Variables";

const CountContainer = styled.div`
  display: inline-flex;
  margin-left: 4em;
`;

const StyledText = styled.h4`
  color: ${props => props.textColor || "inherit"};
  font-weight: ${props => props.textWeight || ""};
  text-align: ${props => props.textAlign || ""};
  margin: 0;
  font-style: ${props => props.textStyle || ""};
  text-decoration: ${props => props.textDecoration || ""};
`;

function Title({
  id,
  title,
  type,
  order,
  style,
  weight,
  count,
  size,
  align,
  className,
}) {
  let textColor;
  let textWeight;
  let textAlign;
  let textStyle;
  let textDecoration;
  let flexDirection;
  let as;
  switch (type) {
    case "info":
      textColor = colors.anchor;
      break;
    case "success":
      textColor = colors.success;
      break;
    case "warning":
      textColor = colors.warning;
      break;
    case "alert":
      textColor = colors.alert;
      break;
    case "inverse":
      textColor = colors.white;
      break;
    default:
      break;
  }
  switch (size) {
    case "tiny":
      as = "h6";
      break;
    case "small":
      as = "h5";
      break;
    case "large":
      as = "h3";
      break;
    case "xlarge":
      as = "h2";
      break;
    case "xxlarge":
      as = "h1";
      break;
    default:
      as = "h4";
      break;
  }
  switch (align) {
    case "center":
      textAlign = "center";
      break;
    case "right":
      textAlign = "right";
      break;
    default:
      break;
  }
  switch (style) {
    case "underline":
      textDecoration = "underline";
      break;
    case "italic":
      textStyle = "italic";
      break;
    default:
      break;
  }
  switch (order) {
    case "before":
      flexDirection = "row";
      break;
    case "after":
      flexDirection = "row-reverse";
      break;
    default:
      break;
  }
  switch (weight) {
    case "light":
      textWeight = "500";
      break;
    case "normal":
      textWeight = "600";
      break;
    case "bold":
      textWeight = "700";
      break;
    default:
      break;
  }
  return (
    <StyledText
      id={id}
      as={as}
      textColor={textColor}
      textWeight={textWeight}
      textAlign={textAlign}
      textStyle={textStyle}
      textDecoration={textDecoration}
      className={className}
    >
      {title}
      {count ? (
        <CountContainer>
          <a>{count}</a>
        </CountContainer>
      ) : null}
    </StyledText>
  );
}

Title.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any,
  number: PropTypes.bool,
  results: PropTypes.bool,
  weight: PropTypes.string,
  type: PropTypes.string,
  order: PropTypes.string,
  style: PropTypes.string,
  size: PropTypes.string,
  align: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
