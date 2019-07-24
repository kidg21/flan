import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { screen } from "Variables";
import { PlaceholderText } from "helpers/Placeholders.jsx";

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
  flex: ${props => props.setFlex || "1 1 auto"};
  order: 0;
  z-index: ${props => props.zIndex || "0"};
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s ease-in-out;
  overflow: ${props => props.setOverflow || "hidden"};
  background-color: ${props => props.backgroundColor || "lightblue"};
  transform: ${props => props.displayState || ""};
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Layout Wrapper }";
    }
  }
`;

function Layout({
  backgroundColor,
  bottom,
  children,
  flexDirection,
  height,
  id,
  left,
  right,
  setFlex,
  setOverflow,
  setPosition,
  state,
  top,
  type,
  width,
  zIndex,
}) {
  const screenSmall = window.matchMedia(screen.small);
  const screenMedium = window.matchMedia(screen.medium);
  const screenLarge = window.matchMedia(screen.large);
  let displayState;
  switch (type) {
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
      setOverflow = "visible";
      backgroundColor = "lightgreen";
      break;
    case "leftWrapper":
      backgroundColor = "violet";
      displayState = "translate3d(-100%, 0px, 0px)";
      if (screenLarge.matches) {
        width = "20%";
      } else if (screenMedium.matches) {
        width = "40%";
      } else if (screenSmall.matches) {
        width = "80%";
      }
      break;
    case "mainWrapper":
      backgroundColor = "grey";
      break;
    case "middleWrapper":
      height = "auto";
      backgroundColor = "lightgrey";
      break;
    case "bottomWrapper":
      backgroundColor = "teal";
      if (screenLarge.matches) {
        top = "60%";
        height = "40%";
      } else if (screenMedium.matches) {
        top = "50%";
        height = "50%";
      } else if (screenSmall.matches) {
        top = "40%";
        height = "60%";
      }
      break;
    case "rightWrapper":
      zIndex = "1";
      backgroundColor = "orange";
      if (screenLarge.matches) {
        left = "80%";
        width = "20%";
      } else if (screenMedium.matches) {
        left = "60%";
        width = "40%";
      } else if (screenSmall.matches) {
        left = "20%";
        width = "80%";
      }
      break;
    case "controlsWrapper":
      setPosition = "relative";
      setFlex = "0 0 auto";
      backgroundColor = "red";
      if (screenLarge.matches) {
        width = "min-content";
      } else if (screenMedium.matches) {
        width = "min-content";
      } else if (screenSmall.matches) {
        width = "100%";
        height = "min-montent";
      }
      break;
    default:
      break;
  }
  switch (state) {
    case "leftUncover":
      if (type === "innerWrapper" && screenLarge.matches) {
        displayState = "translate3d(20%, 0, 0)";
      } else if (type === "innerWrapper" && screenMedium.matches) {
        displayState = "translate3d(40%, 0, 0)";
      } else if (type === "innerWrapper" && screenSmall.matches) {
        displayState = "translate3d(80%, 0, 0)";
      }
      break;
    case "leftCover":
      if (type === "innerWrapper") {
        displayState = "translate3d(0, 0, 0)";
      }
      break;
    case "rightOnscreen":
      if (type === "mainWrapper" && screenLarge.matches) {
        width = "80%";
      } else if (type === "mainWrapper" && screenMedium.matches) {
        width = "60%";
      } else if (type === "mainWrapper" && screenSmall.matches) {
        width = "100%";
      }
      break;
    case "rightOffscreen":
      if (type === "rightWrapper") {
        left = "100%";
      }
      break;

    case "bottomOnscreen":
      if (type === "middleWrapper" && screenLarge.matches) {
        bottom = "40%";
      } else if (type === "middleWrapper" && screenMedium.matches) {
        bottom = "50%";
      } else if (type === "middleWrapper" && screenSmall.matches) {
        bottom = "60%";
      }
      break;
    case "bottomOffscreen":
      if (type === "bottomWrapper") {
        top = "100%";
      } else if (type === "middleWrapper") {
        bottom = "0";
      }
      break;

    case "fullScreen":
      width = "100%";
      height = "100%";
      top = "0";
      left = "0";
      zIndex = "1";
      break;

    default:
      break;
  }
  return (
    <FlexWrapper
      backgroundColor={backgroundColor}
      bottom={bottom}
      displayState={displayState}
      flexDirection={flexDirection}
      height={height}
      id={id}
      left={left}
      right={right}
      setFlex={setFlex}
      setOverflow={setOverflow}
      setPosition={setPosition}
      top={top}
      width={width}
      zIndex={zIndex}
    >
      {children}
    </FlexWrapper>
  );
}

Layout.propTypes = {
  /** Prototype-only */
  backgroundColor: PropTypes.string,
  bottom: PropTypes.string,
  children: PropTypes.node,
  flexDirection: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  setFlex: PropTypes.string,
  setOverflow: PropTypes.string,
  setPosition: PropTypes.string,
  state: PropTypes.oneOf([
    "leftUncover",
    "leftCover",
    "rightOnscreen",
    "rightOffscreen",
    "bottomOnscreen",
    "bottomOffscreen",
    "fullScreen",
  ]),
  top: PropTypes.string,
  type: PropTypes.oneOf([
    "outerWrapper",
    "innerWrapper",
    "leftWrapper",
    "mainWrapper",
    "middleWrapper",
    "bottomWrapper",
    "rightWrapper",
    "controlsWrapper",
  ]),
  width: PropTypes.string,
  zIndex: PropTypes.string,
};

export default Layout;
