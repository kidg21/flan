/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { Skeleton } from "helpers/Skeleton";
import { Lighten, Darken } from "Variables";


const StyledLabel = styled.label`
  color: inherit;
  margin: 0;
  font-family: ${(props) => { return props.theme.typography.primary; }};
  line-height: ${(props) => { return props.lineHeight; }};
  user-select: none;
  font-size: ${(props) => { return props.fontSize; }};
  cursor: pointer;
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
  // text-decoration: underline;
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

function Text({
  children, className, id, size, text, weight,
}) {
  const sizeHash = {
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

  const selectedSize = sizeHash[size && size.toLowerCase()] || { fontSize: "1rem", letterSpacing: "0.5px" };
  const { fontSize, letterSpacing } = selectedSize;

  const weightHash = {
    light: 300,
    medium: 500,
    bold: 600,
  };

  let fontWeight = parseInt(weight, 10);
  if (isNaN(fontWeight)) fontWeight = weightHash[weight && weight.toLowerCase()] || 400;

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
  /** Options: 'xs', 'sm', 'lg' */
  size: PropTypes.string,
  text: PropTypes.string,
  /** Options: 'light', 'bold' */
  weight: PropTypes.string,
};
Text.defaultProps = {
  children: null,
  className: null,
  id: null,
  size: null,
  text: null,
  weight: null,
};

function Title({
  children, className, size, text, uppercase,
}) {

  const sizeHash = {
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

  const selectedSize = sizeHash[size && size.toLowerCase()] || { fontSize: "1.2rem", as: "h6", fontWeight: "400", letterSpacing: "1px" };
  const { fontSize, as, letterSpacing, fontWeight } = selectedSize;

  let textTransform;
  const weightHash = {
    light: 300,
    bold: 500,
  };

  if (uppercase) {
    textTransform= "uppercase";
  };

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
  /** Options: 'lg', 'xl', '2xl', '3xl', '4xl' */
  size: PropTypes.string,
  uppercase: PropTypes.bool,
  text: PropTypes.string,
  /** Options: 'light', 'bold' */
  weight: PropTypes.string,
};
Title.defaultProps = {
  children: null,
  className: null,
  size: null,
  uppercase: false,
  text: null,
  weight: null,
};

function Label({
  children,
  className,
  htmlFor,
  isRequired,
  size,
  text,
  uppercase,
}) {
  const sizeHash = {
    xxs: {
      fontSize: "0.625rem",
      letterSpacing: "1.5px",
      fontWeight: "500",
    },
    xs: {
      fontSize: "0.75em",
      letterSpacing: "0.4px",
      fontWeight: "400",
    },
    sm: {
      fontSize: "0.875em",
      letterSpacing: "0.25px",
      fontWeight: "400",
    },
    lg: {
      fontSize: "1rem",
      letterSpacing: ".5px",
      fontWeight: "400",
    },
    xl: {
      fontSize: "1.2rem",
      letterSpacing: ".25px",
      fontWeight: "400",
    },
  };

  const selectedSize = sizeHash[size && size.toLowerCase()] || { fontSize: "0.875rem", letterSpacing: ".5px", fontWeight: "400" };
  const { fontSize, letterSpacing, fontWeight } = selectedSize;

  let textTransform;

  if (uppercase) {
    textTransform= "uppercase";
  };

  return (
    <StyledLabel
      className={className}
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
  htmlFor: PropTypes.string,
  uppercase: PropTypes.bool,
  isRequired: PropTypes.bool,
  /** Options: 'xxs', 'xs', 'sm', 'lg' */
  size: PropTypes.string,
  text: PropTypes.node,
  /** Options: 'light', 'medium', 'bold' */
  weight: PropTypes.string,
};
Label.defaultProps = {
  children: null,
  className: null,
  uppercase: false,
  htmlFor: null,
  isRequired: false,
  size: null,
  text: null,
  weight: null,
};

function Link({
  children, className, disabled, href, onClick, size, target, text, weight,
}) {
  const sizeHash = {
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

  const selectedSize = sizeHash[size && size.toLowerCase()] || { fontSize: "1rem", letterSpacing: "0px" };
  const { fontSize, letterSpacing } = selectedSize;

  const weightHash = {
    light: 300,
    regular: 400,
  };

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
  /** Options: 'lg', 'xl', '2xl' */
  size: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
  /** Options: 'light', 'regukar' */
  weight: PropTypes.string,
};
Link.defaultProps = {
  children: null,
  className: null,
  disabled: false,
  href: null,
  onClick: null,
  size: null,
  target: null,
  text: null,
  weight: null,
};

export { Text as default, Title, Label, Link };
