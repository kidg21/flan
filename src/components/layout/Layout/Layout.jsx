import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";
import { colors, viewport, screen } from "Variables";
import { PlaceholderText } from "helpers/Placeholders";

const FlexWrapper = styled.div`
  position: ${props => props.setPosition || "absolute"};
  top: ${props => props.top || "0"};
  right: ${props => props.right || ""};
  bottom: ${props => props.bottom || "0"};
  left: ${props => props.left || ""};
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
  z-index: ${props => props.zIndex || "0"};
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
  top,
  right,
  bottom,
  left,
  setPosition,
  flexDirection,
  alignContent,
  alignItems,
  alignSelf,
  setFlex,
  zIndex,
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
    case "leftWrapper":
      if (screenLarge.matches) {
        width = "30%";
        backgroundColor = "violet";
      } else if (screenMedium.matches) {
        width = "40%";
        backgroundColor = "lightblue";
      } else {
        width = "80%";
        backgroundColor = "lightgreen";
      }
      break;
    case "mainWrapper":
      zIndex = "1";
      flexDirection = "column";
      backgroundColor = "lightgrey";
      break;
    case "topWrapper":
      zIndex = "1";
      if (screenLarge.matches) {
        bottom = "10%";
        height = "10%";
        backgroundColor = "teal";
      } else if (screenMedium.matches) {
        bottom = "20%";
        height = "20%";
        backgroundColor = "salmon";
      } else if (screenSmall.matches) {
        bottom = "30%";
        height = "30%";
        backgroundColor = "chocolate";
      }
      break;
    case "middleWrapper":
      if (screenLarge.matches) {
        height = "60%";
        backgroundColor = "lightgrey";
      } else if (screenMedium.matches) {
        backgroundColor = "grey";
      } else if (screenSmall.matches) {
        backgroundColor = "darkgrey";
      }
      break;
    case "bottomWrapper":
      if (screenLarge.matches) {
        top = "60%";
        height = "40%";
        backgroundColor = "teal";
      } else if (screenMedium.matches) {
        top = "70%";
        height = "30%";
        backgroundColor = "salmon";
      } else if (screenSmall.matches) {
        top = "40%";
        height = "60%";
        backgroundColor = "chocolate";
      }
      break;
    case "rightWrapper":
      zIndex = "1";
      if (screenLarge.matches) {
        left = "70%";
        width = "30%";
        backgroundColor = "pink";
      } else if (screenMedium.matches) {
        left = "60%";
        width = "40%";
        backgroundColor = "yellow";
      } else if (screenSmall.matches) {
        left = "20%";
        width = "80%";
        backgroundColor = "orange";
      }
      break;
    case "controlsWrapper":
      zIndex = "2";
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
    // Wrapper Left
    case "leftUncover":
      if (name === "innerWrapper" && screenLarge.matches) {
        left = "30%";
      } else if (name === "innerWrapper" && screenMedium.matches) {
        left = "40%";
      } else if (name === "innerWrapper" && screenSmall.matches) {
        left = "80%";
      }
      break;
    case "leftCover":
      if (name === "innerWrapper") {
        left = "0";
      }
      break;

    // Wrapper Right
    case "rightOnscreen":
      if (name === "mainWrapper" && screenLarge.matches) {
        width = "70%";
      } else if (name === "mainWrapper" && screenMedium.matches) {
        width = "60%";
      } else if (name === "mainWrapper" && screenSmall.matches) {
        width = "100%";
      }
      break;
    case "rightOffscreen":
      if (name === "rightWrapper") {
        left = "100%";
      }
      break;

    // Wrapper Bottom
    case "topOnscreen":
      if (name === "middleWrapper" && screenLarge.matches) {
        height = "60%";
      } else if (name === "middleWrapper" && screenMedium.matches) {
        top = "20%";
        height = "80%";
      } else if (name === "middleWrapper" && screenSmall.matches) {
        height = "40%";
      }
      break;
    case "topOffscreen":
      if (name === "topWrapper") {
        // bottom = "0";
        top = "-20%";
      } else if (name === "middleWrapper") {
        height = "100%";
      }
      break;

    // Wrapper Bottom
    case "bottomOnscreen":
      if (name === "middleWrapper" && screenLarge.matches) {
        height = "60%";
      } else if (name === "middleWrapper" && screenMedium.matches) {
        height = "70%";
      } else if (name === "middleWrapper" && screenSmall.matches) {
        height = "40%";
      }
      break;
    case "bottomOffscreen":
      if (name === "bottomWrapper") {
        top = "100%";
      } else if (name === "middleWrapper") {
        height = "100%";
      }
      break;

    // Fullscreen
    case "fullScreen":
      width = "100%";
      height = "100%";
      top = "0";
      left = "0";
      break;

    default:
      break;
  }
  return (
    <FlexWrapper
      id={id}
      width={width}
      height={height}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      setPosition={setPosition}
      flexDirection={flexDirection}
      alignContent={alignContent}
      alignItems={alignItems}
      alignSelf={alignSelf}
      setFlex={setFlex}
      zIndex={zIndex}
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
