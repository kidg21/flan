/* eslint-disable linebreak-style */
/* eslint-disable complexity */
// Import dependencies
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fonts } from "Variables";

const StyledText = styled.h4`
  grid-column: 1 / -1;
  font-family: ${(props) => {
    return props.fontFamily || "inherit";
  }};
  color: ${(props) => {
    return props.theme.text[props.textColor] || props.theme.text.primary;
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
  width: ${(props) => {
    return props.textWidth || "";
  }};
  a {
    margin: initial;
    /** TODO: Add a 'separator' prop */
    /* &:before,
    &:after {
      content: ${(props) => {
    return props.separator || "|";
  }};
    } */
  }
`;

const LinkedText = styled(StyledText)`
  color: ${(props) => {
    return props.theme.text.info;
  }};
  /* width: max-content; */
`;

const StyledNumber = styled(StyledText)`
  font-family: ${fonts.numbers};
  color: inherit;
  letter-spacing: 1px;
`;

const StyledCode = styled.code`
  background-color: ${(props) => {
    return props.theme.palette.grey5;
  }};
  border: 1px solid
    ${(props) => {
    return props.theme.palette.grey2;
  }};
  border-radius: 0.25rem;
  padding: 0.5rem 0.5rem 0.25rem;
  user-select: all;
`;

function Text({
  align,
  children,
  className,
  count,
  font,
  href,
  id,
  link,
  onClick,
  select,
  size,
  spacing,
  styling,
  target,
  text,
  title,
  type,
  weight,
}) {
  let as;
  let fontFamily;
  let textColor;
  let textWeight;
  let letterSpacing;
  let textAlign;
  let textStyle;
  let textDecoration;
  let textWidth;
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
      textColor = "grey3";
      break;
    default:
      break;
  }
  switch (size && size.toLowerCase()) {
    case "tiny":
      as = "label";
      break;
    case "small":
      as = "h6";
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
  if (link) {
    as = "a";
    textColor = "info";
    textWidth = "max-content";
  }
  return (
    <StyledText
      as={as}
      className={className}
      fontFamily={fontFamily}
      href={href}
      onClick={onClick}
      target={target}
      title={title}
      id={id}
      letterSpacing={letterSpacing}
      select={select}
      textAlign={textAlign}
      textColor={textColor}
      textDecoration={textDecoration}
      textStyle={textStyle}
      textWeight={textWeight}
      textWidth={textWidth}
    >
      {text || children}
      {count ? (
        <LinkedText as="a">
          <StyledNumber as="span">{count}</StyledNumber>
        </LinkedText>
      ) : null}
    </StyledText>
  );
}
Text.propTypes = {
  align: PropTypes.oneOf(["center", "right"]),
  children: PropTypes.node,
  className: PropTypes.string,
  count: PropTypes.node,
  font: PropTypes.oneOf(["numbers", "data"]),
  href: PropTypes.string,
  id: PropTypes.string,
  link: PropTypes.boolean,
  onClick: PropTypes.func,
  /** Sets the 'user-select' CSS property
   * Text is selectable by default
   * 'all' selects the complete string with a tap/click
   * 'none' disables text selection
   */
  select: PropTypes.oneOf(["all", "none"]),
  size: PropTypes.oneOf(["tiny", "small", "large", "xlarge", "xxlarge"]),
  spacing: PropTypes.string,
  styling: PropTypes.oneOf(["underline", "italic"]),
  target: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(["info", "success", "warning", "alert", "dark", "inverse", "light"]),
  weight: PropTypes.oneOf(["light", "normal", "bold"]),
};
Text.defaultProps = {
  align: null,
  children: null,
  className: null,
  count: null,
  font: null,
  href: null,
  id: null,
  link: false,
  onClick: null,
  select: null,
  size: null,
  spacing: null,
  styling: null,
  target: null,
  text: null,
  title: null,
  type: null,
  weight: null,
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
  children: PropTypes.node,
  text: PropTypes.string,
};
Headline.defaultProps = {
  children: null,
  text: null,
};

function Title({ text, children, ...textProps }) {
  return <Text {...textProps}>{text || children}</Text>;
}
Title.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};
Title.defaultProps = {
  children: null,
  text: null,
};

function SubTitle({ text, children, ...textProps }) {
  return (
    <Text spacing="3" size="small" {...textProps}>
      {text || children}
    </Text>
  );
}
SubTitle.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};
SubTitle.defaultProps = {
  children: null,
  text: null,
};

function Description({ text, children, ...textProps }) {
  return (
    <Text size="tiny" spacing="2" {...textProps}>
      {text || children}
    </Text>
  );
}
Description.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};
Description.defaultProps = {
  children: null,
  text: null,
};

function Link({
  text, children, title, onClick, href, target, ...textProps
}) {
  return (
    <Text
      href={href}
      link
      onClick={onClick}
      spacing="2"
      target={target}
      title={title}
      weight="bold"
      {...textProps}
    >
      {text || children}
    </Text>
  );
}
Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.function,
  /** _blank, _parent, _self, _top, framename */
  target: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};
Link.defaultProps = {
  children: null,
  href: null,
  onClick: null,
  target: null,
  text: null,
  title: null,
};

function Number({ text, children, ...textProps }) {
  return (
    <Text font="numbers" type="light" size="large" weight="bold" spacing="3" {...textProps}>
      {text || children}
    </Text>
  );
}
Number.propTypes = {
  children: PropTypes.node,
  text: PropTypes.number.isRequired,
};
Number.defaultProps = {
  children: null,
};

function Code({ text, children }) {
  return <StyledCode>{text || children}</StyledCode>;
}
Code.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};
Code.defaultProps = {
  children: null,
  text: null,
};

export { Title as default, Headline, SubTitle, Description, Link, Number, Code };
