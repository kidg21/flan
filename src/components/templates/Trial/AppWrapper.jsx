import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Tabs, { Tab } from "blocks/Tabs";
import { fonts, colors, shadows, screen } from "Variables";

////12 column flex layout

const AppBase = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: lightgreen;
`;

//FlexDirection column or row

const AppContainer = styled.section`
  display: flex;
  flex-direction: ${props => props.setFlexDirection || "row"};
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 0, 0, 0.2);

  /* Mobile Styles */
  /* @media only screen and (max-width: 415px) { */
  @media ${screen.small} {
    background-color: #f09a9d; /* Red */
  }

  /* Tablet Styles */
  /* @media only screen and (min-width: 416px) and (max-width: 960px) { */
  @media ${screen.medium} {
    background-color: #f5cf8e; /* Yellow */
  }

  /* Desktop Styles */
  /* @media only screen and (min-width: 961px) { */
  @media ${screen.large} {
    background-color: #b2d6ff; /* Blue */
  }
`;

function AppWrapper({ id, children, setFlexDirection }) {
  return (
    // <AppBase>
    <AppContainer id={id} setFlexDirection={setFlexDirection}>
      {children}
    </AppContainer>
    // </AppBase>
  );
}

AppWrapper.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  setFlexDirection: PropTypes.string
};

export default AppWrapper;
