import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { fonts, colors, shadows, screen } from "Variables";

const WrapperContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-grow: ${props => props.setFlex || "1"};
  flex-basis: auto;
  flex-direction: ${props => props.setFlexDirection || "row"};
  width: ${props => (props.fullScreen ? "100vw" : "")};
  height: ${props => (props.fullScreen ? "100vh" : "")};
  max-width: ${props => (props.transition ? "0" : "100%")};
  /* max-width: 100%; */
  max-height: 100%;
  transform: ${props =>
    props.transition ? "translate3d(-100%, 0, 0)" : "translate3d(0, 0, 0)"};
  transition: all 1s ease-in-out;
  overflow: hidden;
  border: 1px solid lightgrey;
`;

function FlexWrapper({
  id,
  children,
  setFlex,
  setFlexDirection,
  fullScreen,
  transition
}) {
  return (
    <WrapperContainer
      setFlex={setFlex}
      setFlexDirection={setFlexDirection}
      fullScreen={fullScreen}
      transition={transition}
      id={id}
    >
      {children}
    </WrapperContainer>
  );
}

FlexWrapper.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  setFlexDirection: PropTypes.string,
  fullScreen: PropTypes.bool,
  setFlex: PropTypes.string
};

export default FlexWrapper;
