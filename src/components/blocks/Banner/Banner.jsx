import React from "react";
import styled, { css, createGlobalStyle } from "styled-components";
// import { createGlobalStyle } from "styled-components";
import CloseIcon from './CloseIcon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.section``;

const StyledBanner = styled.button`
  background: ${props => (props.primary ? "lightgrey" : "black")};
  color: ${props => (props.primary ? "black" : "white")};
  border: ${props =>
    props.primary ? "2px solid lightgrey" : "2px solid black"};

  ${props =>
    props.isSecondary &&
    css`
      background: olivedrab;
      color: black;
      border: 2px solid green;
    `};
  ${props =>
    props.isDisabled &&
    css`
      color: white;
      background: firebrick;
      border: 2px solid gray;
    `};
  opacity: 0.85;
  padding: 20px 1em;
  border-radius: 5px;
  margin: 5px;
  text-align: left;
  position: relative;
  width: 30%;
  display: flex;
  font-weight: semibold;
`;

const BannerLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  margin-left: 10px;
  color: ${props => (props.primary ? "black" : "white")};
  border-bottom: ${props => (props.primary ? "1px solid black" : " 1px solid white")};
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;

const GlobalStyle = createGlobalStyle;

export default class section extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <FontAwesomeIcon icon={["fal", "times"]} />
        <StyledBanner>
          This is a notification alert. Look at me!
          <BannerLink>Learn more about this Banner</BannerLink>
        </StyledBanner>
        <StyledBanner primary>
          Primary Banner
          <BannerLink primary>Learn more about the issue</BannerLink>
          <FontAwesomeIcon icon={["fal", "times"]} />
        </StyledBanner>
        <StyledBanner isSecondary>
          Secondary Banner
          <BannerLink primary>Learn more about the issue</BannerLink>
        </StyledBanner>
        <StyledBanner isDisabled>
          Disabled Banner
          <BannerLink>Learn more about the issue</BannerLink>
        </StyledBanner>
        <GlobalStyle />
      </Container>
    );
  }
}
