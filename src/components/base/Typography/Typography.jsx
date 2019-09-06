/* eslint-disable complexity */
// Import dependencies
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// Import colors and sizes variables
import { colors, fonts } from "Variables";

const LinkedText = styled.a`
  color: ${(props) => {
    return props.theme.primary;
  }};
`;

const StyledNumber = styled.span`
  font-family: ${fonts.numbers};
`;

const StyledText = styled.h4`
  font-family: ${(props) => {
    return props.fontFamily || "inherit";
  }};
  color: ${(props) => {
    return props.theme[props.textColor] || props.theme.textColor ;
  }};
  font-weight: ${(props) => {
    return props.textWeight || "600";
  }};
  text-align: ${(props) => {
    return props.textAlign || "";
  }};
  letter-spacing: ${(props) => {
    return props.letterSpacing || "0";
  }};
  font-style: ${(props) => {
    return props.textStyle || "";
  }};
  text-decoration: ${(props) => {
    return props.textDecoration || "";
  }};
  user-select: ${(props) => {
    return props.select || "";
  }};
  ${LinkedText},
  ${StyledNumber} {
    display: inline-block;
    padding: 0 0.25em;
    /** TODO: Add a 'separator' prop */
    /* &:before,
    &:after {
      content: ${(props) => {
    return props.separator || "|";
  }};
    } */
  }
`;

function Text({
  id,
  font,
  text,
  count,
  type,
  size,
  align,
  spacing,
  styling,
  weight,
  select,
  children,
  className,
}) {
  let as;
  let fontFamily;
  let textColor;
  let textWeight;
  let letterSpacing;
  let textAlign;
  let textStyle;
  let textDecoration;
  switch (font && font.toLowerCase()) {
    case "numbers":
      fontFamily = fonts.numbers;
      break;
    case "data":
      fontFamily = fonts.data;
      break;
    default:
      break;
  }
  switch (type && type.toLowerCase()) {
    case "info":
      textColor = "info";
      break;
    case "success":
      textColor = "success";
      break;
    case "warning":
      textColor = "warning";
      break;
    case "alert":
      textColor = "alert";
      break;
    case "light":
      textColor = "textColor";
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
  switch (styling && styling.toLowerCase()) {
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
  const numSpacing = spacing ? parseInt(spacing, 10) : 0;
  if (numSpacing && !isNaN(numSpacing)) {
    letterSpacing = `${0.1 * (numSpacing - 1)}em`;
  }
  return (
    <StyledText
      id={id}
      as={as}
      fontFamily={fontFamily}
      textColor={textColor}
      textWeight={textWeight}
      letterSpacing={letterSpacing}
      textAlign={textAlign}
      textStyle={textStyle}
      textDecoration={textDecoration}
      select={select}
      className={className}
    >
      {text || children}
      {count ? (
        <LinkedText>
          <StyledNumber>{count}</StyledNumber>
        </LinkedText>
      ) : null}
    </StyledText>
  );
}
Text.propTypes = {
  id: PropTypes.string,
  font: PropTypes.oneOf(["numbers", "data"]),
  text: PropTypes.string,
  children: PropTypes.node,
  count: PropTypes.node,
  type: PropTypes.oneOf(["info", "success", "warning", "alert", "dark", "inverse", "light"]),
  size: PropTypes.oneOf(["tiny", "small", "large", "xlarge", "xxlarge"]),
  align: PropTypes.oneOf(["center", "right"]),
  spacing: PropTypes.string,
  styling: PropTypes.oneOf(["underline", "italic"]),
  weight: PropTypes.oneOf(["light", "normal", "bold"]),
  /** Sets the 'user-select' CSS property
   * Text is selectable by default
   * 'all' selects the complete string with a tap/click
   * 'none' disables text selection
   */
  select: PropTypes.oneOf(["all", "none"]),
  className: PropTypes.string,
};
Text.defaultProps = {
  id: null,
  font: null,
  text: null,
  count: null,
  type: null,
  size: null,
  align: null,
  spacing: null,
  styling: null,
  weight: null,
  select: null,
  children: null,
  className: null,
};

function Headline({ text, children, ...textProps }) {
  return (
    <Text
      separator="pipe"
      size="large"
      weight="bold"
      spacing="2"
      styling="underline"
      {...textProps}
    >
      {text || children}
    </Text>
  );
}
Headline.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};
Headline.defaultProps = {
  text: null,
  children: null,
};

function Title({ text, children, ...textProps }) {
  return <Text {...textProps}>{text || children}</Text>;
}
Title.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};
Title.defaultProps = {
  text: null,
  children: null,
};

function SubTitle({ text, children, ...textProps }) {
  return (
    <Text spacing="2" type="light" {...textProps}>
      {text || children}
    </Text>
  );
}
SubTitle.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};
SubTitle.defaultProps = {
  text: null,
  children: null,
};

function Description({ text, children, ...textProps }) {
  return (
    <Text size="tiny" spacing="2" {...textProps}>
      {text || children}
    </Text>
  );
}
Description.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};
Description.defaultProps = {
  text: null,
  children: null,
};

function Link({
  text, children, title, onClick, href, target,
}) {
  return (
    <LinkedText title={title} onClick={onClick} href={href} target={target}>
      {text || children}
    </LinkedText>
  );
}
Link.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.function,
  href: PropTypes.string,
  /** _blank, _parent, _self, _top, framename */
  target: PropTypes.string,
};
Link.defaultProps = {
  text: null,
  children: null,
  title: null,
  onClick: null,
  href: null,
  target: null,
};

function Number({ text, children, ...textProps }) {
  return (
    <Text font="numbers" type="light" size="large" weight="bold" spacing="3" {...textProps}>
      {text || children}
    </Text>
  );
}
Number.propTypes = {
  text: PropTypes.number.isRequired,
  children: PropTypes.node,
};
Number.defaultProps = {
  children: null,
};

export { Title as default, Headline, SubTitle, Description, Link, Number };
