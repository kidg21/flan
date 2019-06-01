import React from "react";
import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

const Container = styled.div`
  text-align: center;
`;
const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const StyledButton = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  ${props =>
    props.isSecondary &&
    css`
      color: blue;
    `};
  ${props =>
    props.isDisabled &&
    css`
      color: grey;
    `};
  &:hover {
    color: ${props => props.buttonHoverColor};
  }
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
`;

const TomatoButton = styled(StyledButton)`
  color: tomato;
  ${props =>
    props.isSecondary &&
    css`
      color: blue;
    `} border-color: tomato;
`;
const ReversedButton = props => (
  <button {...props} children={props.children.split("").reverse()} />
);

const Thing = styled.div`
  && {
    /* the ampersand can be used to increase the specificity of rules on the component */
    color: blue;
    padding: 0.25em 0;
  }

  ::before {
    content: "🚀";
  }

  &:hover {
    color: red;
  }

  & ~ & {
    background: tomato; /* <Thing> as a sibling of <Thing>, but maybe not directly next to it */
  }

  & + & {
    background: lime; /* <Thing> next to <Thing> */
  }

  &.something {
    background: orange; /* <Thing> tagged with an additional CSS class ".something" */
  }

  .something {
    border: 1px solid; /* an element labeled ".something" inside <Thing> */
    display: block;
  }

  .something-else & {
    border: 1px solid; /* <Thing> inside another element labeled ".something-else" */
  }
`;

const GlobalStyle = createGlobalStyle`
  div${Thing} {
    color: red;
  }
`;

function Experiment() {
  const greeting = "Welcome to React";
  return (
    <Container>
      <StyledButton buttonHoverColor="pink" isDisabled>
        {/* Normal Button */}
        {greeting}
      </StyledButton>
      <StyledButton as="a" href="" primary isSecondary>
        Primary Button
      </StyledButton>
      <TomatoButton as={ReversedButton} isSecondary>
        Tomato Button
      </TomatoButton>
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
      <Thing>Default Thing</Thing>
      {/* <Thing> next to <Thing> */}
      <Thing>Thing Following Thing</Thing>
      {/* <Thing> tagged with an additional CSS class ".something" */}
      <Thing className="something">Thing with CSS 'class'</Thing>
      {/* Not a <Thing> */}
      <div>Not a Thing</div>
      {/* <Thing> as a sibling of <Thing>, but maybe not directly next to it */}
      <Thing>Thing As A Sibling of Thing</Thing>
      {/* <Thing> inside another element labeled ".something-else" */}
      <div className="something-else">
        <Thing>Thing Inside Another Element</Thing>
      </div>
      {/* <Thing> inside another element labeled ".something-else" */}
      <Thing>
        <label htmlFor="foo-button" className="something">
          Mystery button
        </label>
        <button id="foo-button">What do I do?</button>
      </Thing>
      {/* Global styling of a <Thing>. '&&' specificity overrides global styling*/}
      <GlobalStyle />
      <Thing>I'm blue, da ba dee da ba daa</Thing>
    </Container>
  );
};

export default Experiment;
