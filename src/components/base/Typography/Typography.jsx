/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { Skeleton } from "helpers";
import { fonts } from "Variables";

const StyledText = styled.h4`
  grid-column: 1 / -1;
  margin: ${(props) => {
    return props.margin || "0px 0px 0.25em";
  }};
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
    return props.letterSpacing || "0px";
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
}
`;

const LinkedText = styled(StyledText)`
  color: ${(props) => {
    return props.theme.text.link;
  }};
  /* width: max-content; */
`;

const StyledNumber = styled(StyledText)`
  font-family: ${fonts.numbers};
  color: inherit;
  letter-spacing: 1px;
}
`;

const StyledCode = styled.code`
  background-color: ${(props) => {
    return props.theme.palette.grey5;
  }};
  border: 1px solid ${(props) => {
    return props.theme.palette.grey2;
  }};
  border-radius: 0.25rem;
  padding: 0.5rem 0.5rem 0.25rem;
  user-select: all;
}
`;

const sizeHash = {
  "xs": "label",
  "sm": "h5",
  "m": "h4",
  "lg": "h3",
  "2x": "h2",
  "3x": "h1",
};

const weightHash = {
  light: "300",
  normal: "500",
  semibold: "600",
  bold: "700",
};

function parseProps({
  font, type, size, align, weight, styling, spacing,
}) {
  let letterSpacing;
  let textStyle;
  let textDecoration;
  let textWidth;

  const fontFamily = font ? fonts[font.toLowerCase()] : null;
  const textColor = type ? type.toLowerCase() : null;
  const as = size ? (sizeHash[size.toLowerCase()] || "h4") : "h4";
  const textAlign = align ? align.toLowerCase() : null;
  const textWeight = weight ? (weightHash[weight.toLowerCase()] || "500") : "500";

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

  const numSpacing = spacing ? parseInt(spacing, 10) : 0;
  if (numSpacing && !isNaN(numSpacing)) {
    letterSpacing = `${0.1 * (numSpacing - 1)}em`;
  }

  return {
    letterSpacing,
    textStyle,
    textDecoration,
    textWidth,
    fontFamily,
    textColor,
    as,
    textAlign,
    textWeight,
  };
}

function Text({
  children,
  className,
  count,
  disabled,
  href,
  id,
  link,
  onClick,
  select,
  target,
  text,
  title,
  margin,
  ...props
}) {
  const textProps = parseProps(props);
  if (link) {
    textProps.as = "a";
    textProps.textColor = "link";
    textProps.textWeight = "800";
    textProps.textWidth = "max-content";
  }
  if (disabled) {
    textProps.textColor = "disabled";
  }
  return (
    <StyledText
      as={textProps.as}
      margin={margin}
      className={className}
      fontFamily={textProps.fontFamily}
      href={href}
      onClick={onClick}
      target={target}
      title={title}
      id={id}
      letterSpacing={textProps.letterSpacing}
      select={select}
      textAlign={textProps.textAlign}
      textColor={textProps.textColor}
      textDecoration={textProps.textDecoration}
      textStyle={textProps.textStyle}
      textWeight={textProps.textWeight}
      textWidth={textProps.textWidth}
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
  font: PropTypes.string,
  href: PropTypes.string,
  id: PropTypes.string,
  link: PropTypes.bool,
  onClick: PropTypes.string,
  size: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  weight: PropTypes.string,
  select: PropTypes.string,
  spacing: PropTypes.string,
  styling: PropTypes.oneOf(["underline", "italic"]),
  disabled: PropTypes.bool,
  margin: PropTypes.string,
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
  disabled: null,
  margin: null,
};

function Headline({ text, children, ...textProps }) {
  return (
    <Text separator="pipe" size="2x" weight="bold" {...textProps}>
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

function Title({
  text, size, children, number, ...textProps
}) {
  return (
    <Text size={size} count={number} weight="semibold" {...textProps}>
      {text || children}
    </Text>
  );
}
Title.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
};
Title.defaultProps = {
  number: null,
  text: null,
  size: null,
  children: null,
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
  children: PropTypes.node,
};
SubTitle.defaultProps = {
  text: null,
  children: null,
};

function Body({
  text, weight, children, ...textProps
}) {
  return (
    <Text size="sm" weight="normal" margin="0px 0px 0.15em" {...textProps}>
      {text || children}
    </Text>
  );
}
Body.propTypes = {
  text: PropTypes.string,
  weight: PropTypes.string,
  children: PropTypes.node,
};
Body.defaultProps = {
  text: null,
  weight: null,
  children: null,
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
  children: PropTypes.node,
};
Description.defaultProps = {
  text: null,
  children: null,
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
  text: PropTypes.node,
  children: PropTypes.node,
  title: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
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
    <Text font="numbers" weight="normal" spacing="2" {...textProps}>
      {text || children}
    </Text>
  );
}
Number.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};
Number.defaultProps = {
  text: null,
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

export {
  Title as default,
  Headline,
  SubTitle,
  Description,
  Body,
  Link,
  Number,
  Code,
};
