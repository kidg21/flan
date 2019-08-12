// Import dependencies
import React from "react";
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
  font-weight: ${props => props.textWeight || "600"};
  text-align: ${props => props.textAlign || ""};
  letter-spacing: ${props => props.letterSpacing || ""};
  font-style: ${props => props.textStyle || ""};
  text-decoration: ${props => props.textDecoration || ""};
  user-select: ${props => props.userSelect || ""};
`;

function Text({
  id,
  title,
  count,
  type,
  size,
  align,
  spacing,
  style,
  weight,
  select,
  className,
}) {
  let textColor;
  let textWeight;
  let letterSpacing;
  let textAlign;
  let textStyle;
  let textDecoration;
  let userSelect;
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
    case "light":
      textColor = colors.grey_60;
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
    case "normal":
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
  switch (spacing) {
    case "2x":
      letterSpacing = "0.1em";
      break;
    case "3x":
      letterSpacing = "0.2em";
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
  switch (weight) {
    case "light":
      textWeight = "300";
      break;
    case "normal":
      textWeight = "500";
      break;
    case "bold":
      textWeight = "700";
      break;
    default:
      break;
  }
  switch (select) {
    case "all":
      userSelect = "all";
      break;
    case "none":
      userSelect = "none";
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
      letterSpacing={letterSpacing}
      textAlign={textAlign}
      textStyle={textStyle}
      textDecoration={textDecoration}
      userSelect={userSelect}
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

function Title({ id, title, className, ...textProps }) {
  return <Text id={id} title={title} className={className} {...textProps} />;
}

function SubTitle({ id, title, className, ...textProps }) {
  return (
    <Text
      id={id}
      title={title}
      spacing="2x"
      type="light"
      className={className}
      {...textProps}
    />
  );
}

function Description({ id, title, className, ...textProps }) {
  return (
    <Text
      id={id}
      title={title}
      size="tiny"
      weight="light"
      className={className}
      {...textProps}
    />
  );
}

Text.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.number,
  weight: PropTypes.string,
  type: PropTypes.oneOf([
    "info",
    "success",
    "warning",
    "alert",
    "dark",
    "inverse",
    "light",
  ]),
  size: PropTypes.oneOf(["tiny", "small", "large", "xlarge", "xxlarge"]),
  align: PropTypes.oneOf(["center", "right"]),
  spacing: PropTypes.oneOf(["2x", "3x"]),
  style: PropTypes.oneOf(["underline", "italic"]),
  weight: PropTypes.oneOf(["light", "normal", "bold"]),
  select: PropTypes.oneOf(["all", "none"]),
  className: PropTypes.string,
};

export { Title as default, SubTitle, Description };
