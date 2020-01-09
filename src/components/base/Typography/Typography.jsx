/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { Skeleton } from "helpers";
import { Lighten, Darken } from "Variables";

const SubText = styled.sub`
font-size: 10.5px;
font-weight: 300;
line-height: 2;
font-family: ${(props) => { return props.theme.typography.primary; }};
letter-spacing: 0.6px;
`;

const StyledLabel = styled.label`
  color: inherit;
  font-family: Nunito;
  margin: 0px 0px 0px 0px;
  width: max-content;
  line-height: ${(props) => {
    return props.lineHeight || "1.5";
  }};;
  user-select: none;
  font-size: ${(props) => {
    return props.fontSize || "14px";
  }};;
  cursor: pointer;
  font-weight: ${(props) => {
    return props.fontWeight || "600";
  }};;
  letter-spacing: ${(props) => {
    return props.letterSpacing || "0.5px";
  }};;
}

&:after {
  display: ${(props) => {
    return props.isRequired ? "" : "none";
  }};
  content: "*";
  color: ${(props) => {
    return props.theme.palette.alert;
  }};
  font-size: 1.25rem;
  line-height: 0;
  vertical-align: middle;
  padding-left: 0.25em;
}

`;


const LinkText = styled.a`
line-height: inherit;
font-weight: 600;
font-size: 14px;
text-decoration: none;
padding: .5em;
letter-spacing: 0.5px;
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

const TitleWrapper = styled.section`
color: ${(props) => { return props.theme.text[props.textColor] || props.theme.text.primary; }};
`;

const TextWrapper = styled.section`
font-weight: ${(props) => { return props.weightValue || "400"; }};
`;


const H1 = styled.h1`
font-size: 55px;
font-weight: 300;
line-height: 1;
color: inherit;
font-family: ${(props) => { return props.theme.typography.primary; }};
letter-spacing: -1.25px;
`;

const H2 = styled.h2`
font-size: 48px;
font-weight: 200;
line-height: 1;
color: inherit;
font-family: ${(props) => { return props.theme.typography.primary; }};
letter-spacing: -0.5px;
`;

const H3 = styled.h3`
font-size: 40px;
font-weight: 400;
line-height: 1.15;
color: inherit;
font-family: ${(props) => { return props.theme.typography.primary; }};
letter-spacing: .25px;
`;

const H4 = styled.h4`
font-size: 30px;
font-weight: 400;
line-height: 1.15;
color: inherit;
font-family: ${(props) => { return props.theme.typography.primary; }};
letter-spacing: 0.25px;
`;

const H5 = styled.h5`
font-size: 24px;
font-weight: 600;
line-height: 1.5;
color: inherit;
font-family: ${(props) => { return props.theme.typography.primary; }};
letter-spacing: 0px;
`;

const H6 = styled.h6`
font-size: 17px;
font-weight: 600;
color: inherit;
font-family: ${(props) => { return props.theme.typography.primary; }};
letter-spacing: 1px;
`;


const Body1 = styled.p`
font-size: 15px;
color: inherit;
line-height: 1.35;
font-family: ${(props) => { return props.theme.typography.primary; }};
letter-spacing: 0.5px;
`;

const Body2 = styled.p`
font-size: 14px;
line-height: 1.25;
color: inherit;
font-family: ${(props) => { return props.theme.typography.primary; }};
letter-spacing: 0.4px;
`;


const CaptionText = styled.caption`
font-size: 12.5px;
font-weight: 300;
text-align: left;
color: inherit;
line-height: 1;
font-family: ${(props) => { return props.theme.typography.secondary; }};
letter-spacing: .25px;
`;

function Title({
  text, size, type,
}) {
  let content;
  let textColor;

  switch (size && size.toLowerCase()) {
    case "6x":
      content = <H1 >{text}</H1>;
      break;
    case "5x":
      content = <H2 >{text}</H2>;
      break;
    case "4x":
      content = <H3 >{text}</H3>;
      break;
    case "3x":
      content = <H4 >{text}</H4>;
      break;
    case "2x":
      content = <H5 >{text}</H5>;
      break;
    case "1x":
      content = <H6 >{text}</H6>;
      break;
    default:
      content = <H6 >{text}</H6>;
      break;
  }

  switch (type && type.toLowerCase()) {
    case "primary":
      textColor = "primary";
      break;
    case "secondary":
      textColor = "secondary";
      break;
    case "inverse":
      textColor = "inverse";
      break;
    default:
      textColor = "primary";
      break;
  }


  return (
    <TitleWrapper
      textColor={textColor}
    >
      {content}
    </TitleWrapper>
  );
}


function Link({
  text, onClick, href, target, disabled,
}) {
  return (
    <LinkText
      href={href}
      isDisabled={disabled}
      onClick={onClick}
      target={target}
    >
      {text}
    </LinkText>
  );
}


function Caption({ text }) {
  return (
    <CaptionText>
      {text}
    </CaptionText>
  );
}

function Subscript({ text }) {
  return (
    <SubText>
      {text}
    </SubText>
  );
}

function Text({
  text, size, type, weight,
}) {
  let textColor;
  let content;
  let weightValue;
  switch (size && size.toLowerCase()) {
    case "2x":
      content = <Body1>{text}</Body1>;
      break;
    case "1x":
      content = <Body2>{text}</Body2>;
      break;
    default:
      content = <Body2>{text}</Body2>;
      break;
  }

  switch (type && type.toLowerCase()) {
    case "info":
      textColor = "info";
      break;
    case "success":
      textColor = "success";
      break;
    case "inverse":
      textColor = "inverse";
      break;
    case "warning":
      textColor = "warning";
      break;
    case "alert":
      textColor = "alert";
      break;
    default:
      textColor = "primary";
      break;
  }

  switch (weight && weight.toLowerCase()) {
    case "bold":
      weightValue = "600";
      break;
    default:
      break;
  }

  return (
    <TextWrapper
      weightValue={weightValue}
      textColor={textColor}
    >
      {content}
    </TextWrapper>
  );
}


function Label({
  children,
  htmlFor,
  isRequired,
  type,
  size,
  text,
}) {
  let letterSpacing;
  let lineHeight;
  let weight;
  switch (type && type.toLowerCase()) {
    case "normal":
      weight = "400";
      letterSpacing = "0.125px";
      lineHeight = "1px";
      break;
    case "bold":
      weight = "600";
      letterSpacing = "0.5px";
      break;
    default:
      weight = "400";
      letterSpacing = "0.125px";
      lineHeight = "1px";
      break;
  }
  return (
    <StyledLabel
      fontWeight={weight}
      isRequired={isRequired}
      htmlFor={htmlFor}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      fontSize={size}
    >
      {text || children}
    </StyledLabel>
  );
}
Label.propTypes = {
  htmlFor: PropTypes.node,
  children: PropTypes.node,
  isRequired: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
};
Label.defaultProps = {
  htmlFor: null,
  children: null,
  isRequired: false,
  size: null,
  type: null,
  text: null,
};


Title.propTypes = {
  text: PropTypes.string,
  size: PropTypes.node,
  type: PropTypes.string,
};
Title.defaultProps = {
  text: null,
  size: null,
  type: null,
};


Text.propTypes = {
  text: PropTypes.string,
  size: PropTypes.node,
  type: PropTypes.node,
  weight: PropTypes.node,
};
Text.defaultProps = {
  text: null,
  size: null,
  type: null,
  weight: null,
};


Caption.propTypes = {
  text: PropTypes.string,
};
Caption.defaultProps = {
  text: null,
};

Subscript.propTypes = {
  text: PropTypes.string,
};
Subscript.defaultProps = {
  text: null,
};


Link.propTypes = {
  text: PropTypes.string,
  target: PropTypes.node,
  onClick: PropTypes.node,
  href: PropTypes.node,
  disabled: PropTypes.bool,
};
Link.defaultProps = {
  text: null,
  target: null,
  onClick: null,
  href: null,
  disabled: false,
};


export { Text as default, Title, Caption, Subscript, Label, Link };
