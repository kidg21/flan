/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DisabledContext } from "States";
// import { Skeleton } from "helpers";
import { fonts, Lighten, Darken } from "Variables";

const LinkText = styled.a`
line-height: inherit;
font-weight: 700;
font-size: 14px;
text-decoration: none;
padding: .5em;
letter-spacing: 0.5px;
color: ${(props) => {
    return props.theme.text[props.linkColor] || props.theme.text.link;
  }};;
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

const H1 = styled.h1`
font-size: 70px;
font-weight: 300;
line-height: 1;
font-family: ${fonts.body};
letter-spacing: -1.25px;
`;

const H2 = styled.h2`
font-size: 60px;
font-weight: 300;
line-height: 1;
font-family: ${fonts.body};
letter-spacing: -0.5px;
`;

const H3 = styled.h3`
font-size: 48px;
font-weight: 400;
line-height: 1.15;
font-family: ${fonts.body};
letter-spacing: 0px;
`;

const H4 = styled.h4`
font-size: 34px;
font-weight: 400;
line-height: 1.15;
font-family: ${fonts.body};
letter-spacing: 0.25px;
`;

const H5 = styled.h5`
font-size: 24px;
font-weight: 400;
line-height: 1.5;
font-family: ${fonts.body};
letter-spacing: 0px;
`;

const H6 = styled.h6`
font-size: 20px;
font-weight: 600;
line-height: 1.5;
font-family: ${fonts.body};
letter-spacing: 0.15px;
`;


function Title({ text, size }) {
  let content;
  switch (size && size.toLowerCase()) {
    case "h1":
      content = <H1>{text}</H1>;
      break;
    case "h2":
      content = <H2>{text}</H2>;
      break;
    case "h3":
      content = <H3>{text}</H3>;
      break;
    case "h4":
      content = <H4>{text}</H4>;
      break;
    case "h5":
      content = <H5>{text}</H5>;
      break;
    case "h6":
      content = <H6>{text}</H6>;
      break;
    default:
      content = <H4>{text}</H4>;
      break;
  }
  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}


const Subtitle1 = styled.h4`
font-size: 16px;
font-weight: 400;
line-height: 2;
font-family: ${fonts.body};
letter-spacing: 0.15px;
`;

const Subtitle2 = styled.h4`
font-size: 14px;
font-weight: 600;
line-height: 2;
font-family: ${fonts.body};
letter-spacing: 0.1px;
`;

const Body1 = styled.h4`
font-size: 16px;
font-weight: 400;
line-height: 1.35;
font-family: ${fonts.body};
letter-spacing: 0.5px;
`;

const Body2 = styled.h4`
font-size: 14px;
line-height: 1.25;
font-weight: 400;
font-family: ${fonts.body};
letter-spacing: 0.25px;
`;

const Button = styled.h4`
font-size: 13px;
font-weight: 650;
text-transform: uppercase;
font-family: ${fonts.body};
letter-spacing: 1.25px;
`;

const Caption = styled.h4`
font-size: 12px;
font-weight: 400;
line-height: 1.5;
font-family: ${fonts.body};
letter-spacing: 0.4px;
`;

const Overline = styled.h4`
font-size: 10px;
font-weight: 400;
line-height: 2;
text-transform: uppercase;
font-family: ${fonts.body};
letter-spacing: 1.5px;
`;


function Link({
  text, onClick, href, target, disabled,
}) {
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) linkColor = "disabled";
  return (
    <LinkText
      href={href}
      isDisabled={isDisabled}
      onClick={onClick}
      target={target}
    >
      {text}
    </LinkText>
  );
}


function Body({ text }) {
  return (
    <Body1>
      {text}
    </Body1>
  );
}

function Description({ text }) {
  return (
    <Caption>
      {text}
    </Caption>
  );
}

function Headline({ text }) {
  return (
    <H3>
      {text}
    </H3>
  );
}

function SubTitle({ text, size }) {
  let content;
  switch (size && size.toLowerCase()) {
    case "normal":
      content = <Subtitle1>{text}</Subtitle1>;
      break;
    case "small":
      content = <Subtitle2>{text}</Subtitle2>;
      break;
    default:
      content = <Subtitle1>{text}</Subtitle1>;
      break;
  }
  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}

function Text({ text, size }) {
  let content;
  switch (size && size.toLowerCase()) {
    case "body1":
      content = <Body1>{text}</Body1>;
      break;
    case "body2":
      content = <Body2>{text}</Body2>;
      break;
    case "button":
      content = <Button>{text}</Button>;
      break;
    case "caption":
      content = <Caption>{text}</Caption>;
      break;
    case "overline":
      content = <Overline>{text}</Overline>;
      break;
    default:
      content = <Body2>{text}</Body2>;
      break;
  }
  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}


Title.propTypes = {
  text: PropTypes.string,
  size: PropTypes.node,
};
Title.defaultProps = {
  text: null,
  size: null,
};


SubTitle.propTypes = {
  text: PropTypes.string,
  size: PropTypes.node,
};
SubTitle.defaultProps = {
  text: null,
  size: null,
};

Text.propTypes = {
  text: PropTypes.string,
  size: PropTypes.node,
};
Text.defaultProps = {
  text: null,
  size: null,
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

Body.propTypes = {
  text: PropTypes.string,
};
Body.defaultProps = {
  text: null,
};

Description.propTypes = {
  text: PropTypes.string,
};
Description.defaultProps = {
  text: null,
};

Headline.propTypes = {
  text: PropTypes.string,
};
Headline.defaultProps = {
  text: null,
};

export { Text as default, Title, Link, Body, SubTitle, Description, Headline };
