import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Skeleton } from "helpers";
import { fonts } from "Variables";

const StyledText = styled.h4`
  grid-column: 1 / -1;
  margin: ${props => {
    return props.margin || "0px 0px 0.25em";
  }};
  font-family: ${props => {
    return props.fontFamily || "inherit";
  }};
  color: ${props => {
    return props.theme.text[props.textColor] || props.theme.text.primary;
  }};
  font-weight: ${props => {
    return props.textWeight || "600";
  }};
  text-align: ${props => {
    return props.textAlign || "";
  }};
  letter-spacing: ${props => {
    return props.letterSpacing || "0px";
  }};
  font-style: ${props => {
    return props.textStyle || "";
  }};
  text-decoration: ${props => {
    return props.textDecoration || "";
  }};
  user-select: ${props => {
    return props.select || "";
  }};
  width: ${props => {
    return props.textWidth || "";
  }};
  a {
    margin: initial;
    /** TODO: Add a 'separator' prop */
    /* &:before,
    &:after {
      content: ${props => {
        return props.separator || "|";
      }};
    } */
  }
  &:empty {
    ${Skeleton};
  }
}
`;

const LinkedText = styled(StyledText)`
  color: ${props => {
    return props.theme.text.link;
  }};
  /* width: max-content; */
`;

const StyledNumber = styled(StyledText)`
  font-family: ${fonts.numbers};
  color: inherit;
  letter-spacing: 1px;
  &:empty {
    ${Skeleton};
  }
}
`;

const StyledCode = styled.code`
  background-color: ${props => {
    return props.theme.palette.grey5;
  }};
  border: 1px solid ${props => {
    return props.theme.palette.grey2;
  }};
  border-radius: 0.25rem;
  padding: 0.5rem 0.5rem 0.25rem;
  user-select: all;
  &:empty {
    ${Skeleton};
  }
}
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
  margin
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
    case "secondary":
      textColor = "secondary";
      break;
    default:
      // textColor = "primary";
      break;
  }
  switch (size && size.toLowerCase()) {
    case "xs":
      as = "label";
      break;
    case "sm":
      as = "h5";
      break;
    case "m":
      as = "h4";
      break;
    case "lg":
      as = "h3";
      break;
    case "2x":
      as = "h2";
      break;
    case "3x":
      as = "h1";
      break;
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
    case "semibold":
      textWeight = "600";
      break;
    case "bold":
      textWeight = "700";
      break;
    default:
      textWeight = "500";
      break;
  }
  const numSpacing = spacing ? parseInt(spacing, 10) : 0;
  if (numSpacing && !isNaN(numSpacing)) {
    letterSpacing = `${0.1 * (numSpacing - 1)}em`;
  }
  if (link) {
    as = "a";
    textColor = "link";
    textWeight = "800";
    textWidth = "max-content";
  }
  return (
    <StyledText
      as={as}
      margin={margin}
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
  // type: PropTypes.oneOf([
  //   "info",
  //   "success",
  //   "warning",
  //   "alert",
  //   "dark",
  //   "inverse",
  //   "light"
  // ]),
  // size: PropTypes.oneOf(["tiny", "small", "large", "xlarge", "xxlarge"]),
  align: PropTypes.oneOf(["center", "right"]),
  spacing: PropTypes.string,
  styling: PropTypes.oneOf(["underline", "italic"]),
  // weight: PropTypes.oneOf(["light", "normal", "bold"]),
  /** Sets the 'user-select' CSS property
   * Text is selectable by default
   * 'all' selects the complete string with a tap/click
   * 'none' disables text selection
   */
  select: PropTypes.oneOf(["all", "none"]),
  className: PropTypes.string
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
  select: null,
  children: null,
  className: null
};

function Headline({ text, children, ...textProps }) {
  return (
    <Text separator="pipe" size="xl" weight="bold" {...textProps}>
      {text || children}
    </Text>
  );
}
Headline.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node
};
Headline.defaultProps = {
  text: null,
  children: null
};

function Title({ text, size, children, ...textProps }) {
  return (
    <Text size={size} weight="semibold" {...textProps}>
      {text || children}
    </Text>
  );
}
Title.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node
};
Title.defaultProps = {
  text: null,
  children: null
};

function SubTitle({ text, children, ...textProps }) {
  return (
    <Text spacing="1" type="secondary" margin="0px 0px 0.15em" {...textProps}>
      {text || children}
    </Text>
  );
}
SubTitle.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node
};
SubTitle.defaultProps = {
  text: null,
  children: null
};

function Body({ text, weight, children, ...textProps }) {
  return (
    <Text size="sm" weight="normal" margin="0px 0px 0.15em" {...textProps}>
      {text || children}
    </Text>
  );
}
Body.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node
};
Body.defaultProps = {
  text: null,
  children: null
};

function Description({ text, children, ...textProps }) {
  return (
    <Text size="xs" spacing="1" {...textProps}>
      {text || children}
    </Text>
  );
}
Description.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node
};
Description.defaultProps = {
  text: null,
  children: null
};

function Link({ text, children, title, onClick, href, target, ...textProps }) {
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
  target: PropTypes.string
};
Link.defaultProps = {
  children: null,
  href: null,
  target: null
};

function Number({ text, children, ...textProps }) {
  return (
    <Text font="numbers" weight="normal" spacing="2" {...textProps}>
      {text || children}
    </Text>
  );
}
Number.propTypes = {
  text: PropTypes.number.isRequired,
  children: PropTypes.node
};
Number.defaultProps = {
  children: null
};

function Code({ text, children }) {
  return <StyledCode>{text || children}</StyledCode>;
}
Code.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string
};
Code.defaultProps = {
  children: null,
  text: null
};

export {
  Title as default,
  Headline,
  SubTitle,
  Description,
  Body,
  Link,
  Number,
  Code
};
