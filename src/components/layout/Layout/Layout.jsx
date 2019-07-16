import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";
import { colors, viewport, screen } from "Variables";
import { PlaceholderText } from "helpers/Placeholders";

const FlexWrapper = styled.div`
  position: ${props => props.setPosition || "absolute"};
  top: ${props => props.top || ""};
  left: ${props => props.left || ""};
  bottom: ${props => props.bottom || ""};
  right: ${props => props.right || ""};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  display: flex;
  flex-direction: ${props => props.flexDirection || "column"};
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: ${props => props.alignContent || ""};
  align-items: ${props => props.alignItems || ""};
  align-self: ${props => props.alignSelf || ""};
  flex: ${props => props.setFlex || "1 1 auto"};
  flex-basis: ${props => props.flexBasis || ""};
  order: 0;
  z-index: ${props => props.zIndex || "1"};
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  background-color: ${props => props.backgroundColor || "lightblue"};
  transform: ${props => props.displayState || ""};
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Layout Wrapper }";
    }
  }
`;

function Wrapper({
  id,
  children,
  width,
  height,
  right,
  setPosition,
  flexDirection,
  alignContent,
  alignItems,
  alignSelf,
  setFlex,
  flexBasis,
  maxWidth,
  backgroundColor,
  state,
  name,
}) {
  const screenSmall = window.matchMedia(screen.small);
  const screenMedium = window.matchMedia(screen.medium);
  const screenLarge = window.matchMedia(screen.large);
  let displayState;
  switch (name) {
    case "outerWrapper":
      setPosition = "relative";
      backgroundColor = "black";
      if (screenMedium.matches) {
        flexDirection = "row";
      } else if (screenSmall.matches) {
        flexDirection = "column";
      }
      break;
    case "innerWrapper":
      setPosition = "relative";
      backgroundColor = "green";
      if (screenMedium.matches) {
        flexDirection = "row";
      } else if (screenSmall.matches) {
        flexDirection = "column";
      }
      break;
    case "contentWrapper":
      setPosition = "relative";
      backgroundColor = "yellow";
      if (screenMedium.matches) {
        flexDirection = "row";
      } else if (screenSmall.matches) {
        flexDirection = "column";
      }
      break;
    case "leftWrapper":
      if (screenLarge.matches) {
        width = "30%";
        backgroundColor = "pink";
      } else if (screenMedium.matches) {
        width = "40%";
        backgroundColor = "yellow";
      } else {
        width = "100%";
        backgroundColor = "orange";
      }
      break;
    case "mainWrapper":
      if (screenLarge.matches) {
        width = "70%";
        backgroundColor = "violet";
      } else if (screenMedium.matches) {
        width = "60%";
        backgroundColor = "green";
      } else if (screenSmall.matches) {
        width = "100%";
        backgroundColor = "purple";
      }
      break;
    case "rightWrapper":
      right = "0";
      if (screenLarge.matches) {
        width = "30%";
        backgroundColor = "pink";
      } else if (screenMedium.matches) {
        width = "40%";
        backgroundColor = "yellow";
      } else if (screenSmall.matches) {
        width = "100%";
        backgroundColor = "orange";
      }
      break;
    case "controlsWrapper":
      setPosition = "relative";
      backgroundColor = "red";
      if (screenMedium.matches) {
        width = "100px";
        height = "100%";
      } else if (screenSmall.matches) {
        width = "100%";
        height = "60px";
      }
      break;
    default:
      break;
  }
  switch (state) {
    case "offscreenTop":
      displayState = "translate3d(0, -100%, 0)";
      break;
    case "offscreenBottom":
      displayState = "translate3d(0, 100%, 0)";
      break;

    case "offScreen":
      if (name === "rightWrapper") {
        displayState = "translate3d(100%, 0, 0)";
      } else {
        displayState = "translate3d(0, 0, 0)";
      }
      break;
    case "fullScreen":
      width = "100%";
      break;
    case "onScreen":
    default:
      if (name === "contentWrapper") {
        if (screenLarge.matches) {
          displayState = "translate3d(30%, 0, 0)";
        } else if (screenMedium.matches) {
          displayState = "translate3d(40%, 0, 0)";
        } else if (screenSmall.matches) {
          displayState = "translate3d(100%, 0, 0)";
        }
      } else {
        displayState = "translate3d(0, 0, 0)";
      }
      break;
  }
  return (
    <FlexWrapper
      id={id}
      width={width}
      height={height}
      right={right}
      setPosition={setPosition}
      flexDirection={flexDirection}
      alignContent={alignContent}
      alignItems={alignItems}
      alignSelf={alignSelf}
      setFlex={setFlex}
      flexBasis={flexBasis}
      maxWidth={maxWidth}
      backgroundColor={backgroundColor}
      displayState={displayState}
    >
      {children}
    </FlexWrapper>
  );
}

export default Wrapper;
