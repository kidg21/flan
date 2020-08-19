/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { Skeleton } from "helpers/Skeleton";
import { Lighten, Darken } from "Variables";

const StyledLabel = styled.label`
  color: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  font-family: ${(props) => { return props.theme.typography.primary; }};
  line-height: ${(props) => { return props.lineHeight; }};
  user-select: none;
  text-transform: ${(props) => { return props.textTransform; }};
  font-size: ${(props) => { return props.fontSize; }};
  cursor: ${(props) => { return props.cursor; }};
  font-weight: ${(props) => { return props.fontWeight; }};
  letter-spacing: ${(props) => { return props.letterSpacing; }};
  &:after {
    display: ${(props) => {
    return props.isRequired ? "" : "none";
  }};
    content: "*";
    color: ${(props) => {
    return props.theme.palette.alert80;
  }};
    font-size: ${(props) => { return props.fontSize; }};
    line-height: ${(props) => { return props.lineHeight; }};
    vertical-align: middle;
    padding-left: 0.25em;
  }
`;

const LinkText = styled.a`
  line-height: inherit;
  font-size: ${(props) => { return props.fontSize; }};
  font-weight: ${(props) => { return props.fontWeight; }};
  font-family: ${(props) => { return props.theme.typography.primary; }};
  text-decoration: underline;
  margin: -.25em;
  padding: .25em;
  letter-spacing: ${(props) => { return props.letterSpacing; }};
  color: ${(props) => { return props.theme.text.link; }};
  cursor: pointer;
  &[disabled] {
    color: ${(props) => {
    return props.theme.text.disabled;
  }};
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    border-left: none;
  }
  &:hover,
  &:focus {
    ${Darken};
  }
  &:active {
    ${Lighten};
  }
`;

const TitleText = styled.h6`
  font-size: ${(props) => { return props.fontSize; }};
  font-weight: ${(props) => { return props.fontWeight; }};
  color: inherit;
  text-transform: ${(props) => { return props.textTransform; }};
  line-height: normal;
  font-family: ${(props) => { return props.theme.typography.secondary; }};
  letter-spacing: ${(props) => { return props.letterSpacing; }};
`;

const Paragraph = styled.p`
  font-size: ${(props) => { return props.fontSize; }};
  font-weight: ${(props) => { return props.fontWeight; }};
  color: inherit;
  line-height: normal;
  font-family: ${(props) => { return props.theme.typography.primary; }};
  letter-spacing: ${(props) => { return props.letterSpacing; }};
`;

const textSizeHash = {
  xs: {
    fontSize: "0.75rem",
    letterSpacing: "0.4px",
  },
  sm: {
    fontSize: "0.875rem",
    letterSpacing: "0.25px",
  },
  lg: {
    fontSize: "1.1rem",
    letterSpacing: "0.8px",
  },
};

const titleSizeHash = {
  "lg": {
    fontSize: "1.15rem",
    letterSpacing: "0.4px",
    fontWeight: "500",
    as: "h5",
  },
  "xl": {
    fontSize: "1.35rem",
    letterSpacing: "0px",
    fontWeight: "400",
    as: "h4",
  },
  "2xl": {
    fontSize: "1.5rem",
    letterSpacing: "0.25px",
    fontWeight: "400",
    as: "h3",
  },
  "3xl": {
    fontSize: "2rem",
    letterSpacing: "0px",
    fontWeight: "400",
    as: "h2",
  },
  "4xl": {
    fontSize: "2.5rem",
    letterSpacing: "-1.5px",
    fontWeight: "300",
    as: "h1",
  },
};

const labelSizeHash = {
  xs: {
    fontSize: "0.75em",
    letterSpacing: "0.4px",
  },
  sm: {
    fontSize: "0.8rem",
    letterSpacing: "1px",
  },
  lg: {
    fontSize: "1rem",
    letterSpacing: ".5px",
  },
  xl: {
    fontSize: "1.2rem",
    letterSpacing: ".25px",
  },
};

const linkSizeHash = {
  "lg": {
    fontSize: "1rem",
    letterSpacing: "0.2px",
  },
  "xl": {
    fontSize: "1.25rem",
    letterSpacing: "0px",
  },
  "2xl": {
    fontSize: "1.45rem",
    letterSpacing: "0px",
  },
};

const weightHash = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 600,
};

function Text({
  children, className, id, size, text, weight,
}) {

  let fontWeight = parseInt(weight, 10);
  if (isNaN(fontWeight)) fontWeight = weightHash[weight && weight.toLowerCase()] || 400;

  const selectedSize = textSizeHash[size && size.toLowerCase()] || { fontSize: "1rem", letterSpacing: "0.5px" };
  const { fontSize, letterSpacing } = selectedSize;

  return (
    <Paragraph
      className={className}
      fontSize={fontSize}
      fontWeight={fontWeight}
      id={id}
      letterSpacing={letterSpacing}
    >
      {text || children}
    </Paragraph>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "lg", ""]),
  text: PropTypes.string,
  weight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
};
Text.defaultProps = {
  children: null,
  className: null,
  id: null,
  size: "",
  text: null,
  weight: null,
};

function Title({
  children, className, size, text, isUppercase,
}) {
  const selectedSize = titleSizeHash[size && size.toLowerCase()] || {
    fontSize: "1.2rem", as: "h6", fontWeight: "400", letterSpacing: "1px",
  };
  const {
    fontSize, as, letterSpacing, fontWeight,
  } = selectedSize;

  let textTransform;
  if (isUppercase) {
    textTransform = "uppercase";
  }

  return (
    <TitleText
      as={as}
      className={className}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textTransform={textTransform}
      letterSpacing={letterSpacing}
    >
      {text || children}
    </TitleText>
  );
}

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(["lg", "xl", "2xl", "3xl", "4xl", ""]),
  isUppercase: PropTypes.bool,
  text: PropTypes.string,
};
Title.defaultProps = {
  children: null,
  className: null,
  size: "",
  isUppercase: false,
  text: null,
};

function Label({
  children,
  className,
  cursor,
  htmlFor,
  isRequired,
  weight,
  size,
  text,
  isUppercase,
}) {

  let fontWeight = parseInt(weight, 10);
  if (isNaN(fontWeight)) fontWeight = weightHash[weight && weight.toLowerCase()] || 400;

  const selectedSize = labelSizeHash[size && size.toLowerCase()] || { fontSize: "0.875rem", letterSpacing: ".5px", };
  const { fontSize, letterSpacing } = selectedSize;

  let textTransform;

  if (isUppercase) {
    textTransform = "uppercase";
  }

  return (
    <StyledLabel
      className={className}
      cursor={cursor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textTransform={textTransform}
      htmlFor={htmlFor}
      isRequired={isRequired}
      letterSpacing={letterSpacing}
    >
      {text || children}
    </StyledLabel>
  );
}

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cursor: PropTypes.string,
  htmlFor: PropTypes.string,
  isUppercase: PropTypes.bool,
  isRequired: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "lg", "xl", ""]),
  text: PropTypes.node,
  weight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
};
Label.defaultProps = {
  children: null,
  className: null,
  cursor: "pointer",
  isUppercase: false,
  htmlFor: null,
  isRequired: false,
  size: "",
  text: null,
  weight: null,
};

function Link({
  children, className, disabled, href, onClick, size, target, text, weight,
}) {
  const selectedSize = linkSizeHash[size && size.toLowerCase()] || { fontSize: "1rem", letterSpacing: "0px" };
  const { fontSize, letterSpacing } = selectedSize;

  let fontWeight = parseInt(weight, 10);
  if (isNaN(fontWeight)) fontWeight = weightHash[weight && weight.toLowerCase()] || 500;

  return (
    <LinkText
      className={className}
      fontSize={fontSize}
      fontWeight={fontWeight}
      href={href}
      disabled={disabled}
      letterSpacing={letterSpacing}
      onClick={onClick}
      target={target}
    >
      {text || children}
    </LinkText>
  );
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["lg", "xl", "2xl", ""]),
  target: PropTypes.string,
  text: PropTypes.string,
  weight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
};
Link.defaultProps = {
  children: null,
  className: null,
  disabled: false,
  href: null,
  onClick: null,
  size: "",
  target: null,
  text: null,
  weight: null,
};

export {
  Text as default, Title, Label, Link,
};
