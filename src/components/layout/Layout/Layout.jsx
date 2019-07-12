import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";
import { colors } from "Variables";
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
  let displayState;
  switch (name) {
    case "outerWrapper":
      setPosition = "relative";
      flexDirection = "row";
      backgroundColor = "black";
      break;
    case "innerWrapper":
      setPosition = "relative";
      flexDirection = "row";
      backgroundColor = "green";
      break;
    case "contentWrapper":
      setPosition = "relative";
      flexDirection = "row";
      backgroundColor = "yellow";
      break;
    case "leftWrapper":
      width = "30%";
      backgroundColor = "lightgrey";
      break;
    case "mainWrapper":
      width = "70%";
      backgroundColor = "violet";
      break;
    case "rightWrapper":
      width = "30%";
      right = "0";
      backgroundColor = "pink";
      break;
    case "controlsWrapper":
      setPosition = "relative";
      width = "100px";
      backgroundColor = "red";
      break;
    default:
      break;
  }
  switch (state) {
    // case "onScreen":
    //   if (name === "contentWrapper") {
    //     displayState = "translate3d(30%, 0, 0)";
    //   } else {
    //     displayState = "translate3d(0, 0, 0)";
    //   }
    //   break;
    // case "offscreenLeft":
    //   displayState = "translate3d(-100%, 0, 0)";
    //   break;
    // case "offscreenRight":
    //   displayState = "translate3d(100%, 0, 0)";
    //   break;
    // case "leftOpen":
    //   displayState = "translate3d(30%, 0, 0)";
    //   break;
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
    default:
    case "onScreen":
      if (name === "contentWrapper") {
        displayState = "translate3d(30%, 0, 0)";
      } else {
        displayState = "translate3d(0, 0, 0)";
      }
      break;
  }
  return (
    <FlexWrapper
      id={id}
      width={width}
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
