/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { Skeleton } from "helpers";
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
  text-decoration: none;
  padding: .5em;
  letter-spacing: ${(props) => { return props.letterSpacing; }};
  color: ${(props) => { return props.theme.text.link; }};
  margin: -.5em;
  cursor: pointer;

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
  line-height: normal;
  font-family: ${(props) => { return props.theme.typography.primary; }};
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


function Title({
  children, className, size, text, weight,
}) {
  const sizeHash = {
    "6x": {
      fontSize: "2em",
      as: "h1",
    },
    "5x": {
      fontSize: "1.65em",
      as: "h2",
    },
    "4x": {
      fontSize: "1.45em",
      as: "h3",
    },
    "3x": {
      fontSize: "1.25em",
      as: "h4",
    },
    "2x": {
      fontSize: "1.15em",
      as: "h5",
    },
    "1x": {
      fontSize: "1.05em",
      as: "h6",
    },
  };

  const selectedSize = sizeHash[size && size.toLowerCase()] || { fontSize: "1.05em", as: "h6" };
  const { fontSize, as } = selectedSize;
  const letterSpacing = "0px";

  const weightHash = {
    light: 300,
    bold: 600,
  };

  let fontWeight = parseInt(weight, 10);
  if (isNaN(fontWeight)) fontWeight = weightHash[weight && weight.toLowerCase()] || 400;


  return (
    <TitleText
      as={as}
      className={className}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
    >
      {text || children}
    </TitleText>
  );
}


function Link({
  children, className, disabled, href, onClick, size, target, text, weight,
}) {
  const sizeHash = {
    "4x": {
      fontSize: "1em",
      letterSpacing: "0px",
    },
    "3x": {
      fontSize: "0.9em",
      letterSpacing: "0px",
    },
    "2x": {
      fontSize: "0.75em",
      letterSpacing: "0.2px",
    },
    "1x": {
      fontSize: "0.65em",
      letterSpacing: "0.6px",
    },
  };

  const selectedSize = sizeHash[size && size.toLowerCase()] || { fontSize: "inherit", letterSpacing: "0px" };
  const { fontSize, letterSpacing } = selectedSize;


  const weightHash = {
    light: 300,
    regular: 400,
    bold: 600,
  };

  let fontWeight = parseInt(weight, 10);
  if (isNaN(fontWeight)) fontWeight = weightHash[weight && weight.toLowerCase()] || 600;


  return (
    <LinkText
      className={className}
      fontSize={fontSize}
      fontWeight={fontWeight}
      href={href}
      isDisabled={disabled}
      letterSpacing={letterSpacing}
      onClick={onClick}
      target={target}
    >
      {text || children}
    </LinkText>
  );
}


function Text({
  children, className, id, size, text, weight,
}) {
  const sizeHash = {
    "4x": {
      fontSize: "1em",
      letterSpacing: "0px",
    },
    "3x": {
      fontSize: "0.95em",
      letterSpacing: "0px",
    },
    "2x": {
      fontSize: "0.75em",
      letterSpacing: "0.2px",
    },
    "1x": {
      fontSize: "0.65em",
      letterSpacing: "0.6px",
    },
  };

  const selectedSize = sizeHash[size && size.toLowerCase()] || { fontSize: "0.95em", letterSpacing: "0px" };
  const { fontSize, letterSpacing } = selectedSize;

  const weightHash = {
    light: 300,
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


function Label({
  children,
  className,
  htmlFor,
  isRequired,
  size,
  text,
  weight,
}) {
  const sizeHash = {
    "4x": {
      fontSize: "1em",
      letterSpacing: "0px",
    },
    "3x": {
      fontSize: "0.876em",
      letterSpacing: "0px",
    },
    "2x": {
      fontSize: "0.82em",
      letterSpacing: "0px",
    },
    "1x": {
      fontSize: "0.65em",
      letterSpacing: "0.6px",
    },
  };

  const selectedSize = sizeHash[size && size.toLowerCase()] || { fontSize: "0.876em", letterSpacing: "0px" };
  const { fontSize, letterSpacing } = selectedSize;

  const weightHash = {
    light: 300,
    bold: 600,
  };

  let fontWeight = parseInt(weight, 10);
  if (isNaN(fontWeight)) fontWeight = weightHash[weight && weight.toLowerCase()] || 400;


  return (
    <StyledLabel
      className={className}
      fontSize={fontSize}
      fontWeight={fontWeight}
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
  isRequired: PropTypes.bool,
  size: PropTypes.string,
  text: PropTypes.string,
  weight: PropTypes.string,
};
Label.defaultProps = {
  children: null,
  className: null,
  htmlFor: null,
  isRequired: false,
  size: null,
  text: null,
  weight: null,
};

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  weight: PropTypes.string,
};
Title.defaultProps = {
  children: null,
  className: null,
  size: null,
  text: null,
  weight: null,
};


Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
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


Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
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
