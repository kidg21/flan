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
  user-select: ${props => props.select || ""};
`;

function Text({
  id,
  text,
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
  let as;
  switch (type && type.toLowerCase()) {
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
  switch (size && size.toLowerCase()) {
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
  switch (align && align.toLowerCase()) {
    case "center":
      textAlign = "center";
      break;
    case "right":
      textAlign = "right";
      break;
    default:
      break;
  }
  switch (spacing && spacing.toLowerCase()) {
    case "2x":
      letterSpacing = "0.1em";
      break;
    case "3x":
      letterSpacing = "0.2em";
      break;
    default:
      break;
  }
  switch (style && style.toLowerCase()) {
    case "underline":
      textDecoration = "underline";
      break;
    case "italic":
      textStyle = "italic";
      break;
    default:
      break;
  }
  switch (weight && weight.toLowerCase()) {
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
      select={select}
      className={className}
    >
      {text}
      {count ? (
        <CountContainer>
          <a>{count}</a>
        </CountContainer>
      ) : null}
    </StyledText>
  );
}

function Title({ id, text, className, ...textProps }) {
  return <Text id={id} text={text} className={className} {...textProps} />;
}

function SubTitle({ id, text, className, ...textProps }) {
  return (
    <Text
      id={id}
      text={text}
      spacing="2x"
      type="light"
      className={className}
      {...textProps}
    />
  );
}

function Description({ id, text, className, ...textProps }) {
  return (
    <Text
      id={id}
      text={text}
      size="tiny"
      weight="light"
      className={className}
      {...textProps}
    />
  );
}

Text.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
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
  /** Sets the 'user-select' CSS property
   * Text is selectable by default
   * 'all' selects the complete string with a tap/click
   * 'none' disables text selection
   */
  select: PropTypes.oneOf(["all", "none"]),
  className: PropTypes.string,
};

export { Title as default, SubTitle, Description };
