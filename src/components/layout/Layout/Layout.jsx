/* eslint-disable linebreak-style */
/* eslint-disable complexity */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { screen } from "Variables";
import { PlaceholderText } from "helpers/Placeholders.jsx";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => {
    return props.flexDirection || "column";
  }};
  flex-wrap: nowrap;
  justify-content: flex-start;
  flex: ${(props) => {
    return props.setFlex || "1 1 auto";
  }};
  order: 0;
  position: ${(props) => {
    return props.setPosition || "absolute";
  }};
  top: ${(props) => {
    return props.top || "0";
  }};
  right: ${(props) => {
    return props.right || "";
  }};
  bottom: ${(props) => {
    return props.bottom || "0";
  }};
  left: ${(props) => {
    return props.left || "";
  }};
  width: ${(props) => {
    return props.width || "100%";
  }};
  height: ${(props) => {
    return props.height || "100%";
  }};
  z-index: ${(props) => {
    return props.zIndex || "0";
  }};
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s ease-in-out;
  border: .25px solid ${(props) => {
    return props.theme.divider;
  }};
  overflow: ${(props) => {
    return props.setOverflow || "hidden";
  }};
  background-color: ${(props) => {
    return props.theme.background.default;
  }};
  transform: ${(props) => {
    return props.displayState || "";
  }};
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Layout Wrapper }";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;

function Layout({
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
  let position = setPosition;
  let direction = flexDirection;
  let overflow = setOverflow;
  let screenWidth = width;
  let screenHeight = height;
  let offsetLeft = left;
  let offsetTop = top;
  let offsetBottom = bottom;
  let z = zIndex;
  let flex = setFlex;
  let displayState;
  switch (type) {
    case "outerWrapper":
      position = "relative";
      if (screenMedium.matches) {
        direction = "row";
      } else if (screenSmall.matches) {
        direction = "column";
      }
      break;
    case "innerWrapper":
      position = "relative";
      overflow = "visible";
      break;
    case "leftWrapper":
      displayState = "translate3d(-100%, 0px, 0px)";
      if (screenLarge.matches) {
        screenWidth = "30%";
      } else if (screenMedium.matches) {
        screenWidth = "40%";
      } else if (screenSmall.matches) {
        screenWidth = "100%";
      }
      break;
    case "middleWrapper":
      screenHeight = "auto";
      break;
    case "bottomWrapper":
      if (screenLarge.matches) {
        offsetTop = "60%";
        screenHeight = "40%";
      } else if (screenMedium.matches) {
        offsetTop = "50%";
        screenHeight = "50%";
      } else if (screenSmall.matches) {
        offsetTop = "40%";
        screenHeight = "60%";
      }
      break;
    case "rightWrapper":
      z = "1";
      if (screenLarge.matches) {
        offsetLeft = "70%";
        screenWidth = "30%";
      } else if (screenMedium.matches) {
        offsetLeft = "60%";
        screenWidth = "40%";
      } else if (screenSmall.matches) {
        offsetLeft = "0";
        screenWidth = "100%";
      }
      break;
    case "controlsWrapper":
      position = "relative";
      flex = "0 0 auto";
      if (screenLarge.matches) {
        screenWidth = "min-content";
      } else if (screenMedium.matches) {
        screenWidth = "min-content";
      } else if (screenSmall.matches) {
        screenWidth = "100%";
        screenHeight = "min-montent";
      }
      break;
    case "mainWrapper":
    default:
      break;
  }
  switch (state) {
    case "leftUncover":
      if (type === "innerWrapper" && screenLarge.matches) {
        displayState = "translate3d(30%, 0, 0)";
      } else if (type === "innerWrapper" && screenMedium.matches) {
        displayState = "translate3d(40%, 0, 0)";
      } else if (type === "innerWrapper" && screenSmall.matches) {
        displayState = "translate3d(100%, 0, 0)";
      }
      break;
    case "leftCover":
      if (type === "innerWrapper") {
        displayState = "translate3d(0, 0, 0)";
      }
      break;
    case "rightOnscreen":
      if (type === "mainWrapper" && screenLarge.matches) {
        screenWidth = "70%";
      } else if (type === "mainWrapper" && screenMedium.matches) {
        screenWidth = "60%";
      } else if (type === "mainWrapper" && screenSmall.matches) {
        screenWidth = "100%";
      }
      break;
    case "rightOffscreen":
      if (type === "rightWrapper") {
        offsetLeft = "100%";
      }
      break;
    case "bottomOnscreen":
      if (type === "middleWrapper" && screenLarge.matches) {
        offsetBottom = "40%";
      } else if (type === "middleWrapper" && screenMedium.matches) {
        offsetBottom = "50%";
      } else if (type === "middleWrapper" && screenSmall.matches) {
        offsetBottom = "60%";
      }
      break;
    case "bottomOffscreen":
      if (type === "bottomWrapper") {
        offsetTop = "100%";
      } else if (type === "middleWrapper") {
        offsetBottom = "0";
      }
      break;
    case "fullScreen":
      screenWidth = "100%";
      screenHeight = "100%";
      offsetTop = "0";
      offsetLeft = "0";
      z = "1";
      break;
    default:
      break;
  }
  return (
    <FlexWrapper
      bottom={offsetBottom}
      displayState={displayState}
      flexDirection={direction}
      height={screenHeight}
      id={id}
      left={offsetLeft}
      right={right}
      setFlex={flex}
      setOverflow={overflow}
      setPosition={position}
      top={offsetTop}
      width={screenWidth}
      zIndex={z}
    >
      {children}
    </FlexWrapper>
  );
}

Layout.propTypes = {
  /** Sets the bottom edge (in percentage) of a Layout component. */
  bottom: PropTypes.string,
  /** Allows for the nesting of Layout components */
  children: PropTypes.node,
  /**
   * Defines how flexbox items are ordered within a flexbox container.
   *
   * Options:
   * 'column' (default)
   * 'row'
   */
  flexDirection: PropTypes.string,
  /** Sets the height (in percentage) of a Layout component. */
  height: PropTypes.string,
  /** Allows each component to have a unique identifier */
  id: PropTypes.string,
  /** Sets the left edge (in percentage) of a Layout component.
   *
   * 'left' is the primary control for horizontal sizing.  For a horizontal Layout component that does not extend to the right edge of the viewport, the 'right' prop is required
   */
  left: PropTypes.string,
  /** Sets the right edge (in percentage) of a Layout component. */
  right: PropTypes.string,
  /** Defines how much space a Flexbox item is allowed to fill.  A Flexbox item either takes up only the space that it needs (fixed) or takes up (or shares) any remaining empty space (flex).
   *
   * Options:
   * fixed: '0 0 auto' or 'none' (default)
   * flex: '1 1 auto' or 'auto'
   */
  setFlex: PropTypes.string,
  /** Determines whether the content within a Layout component is contained or overflows its borders.
   *
   * Options:
   * 'hidden' (default)
   * 'visible'
   */
  setOverflow: PropTypes.string,
  /** Used to manage the display Layout hierarchy.
   *
   * Options:
   * 'absolute' (default)
   * 'relative'
   */
  setPosition: PropTypes.string,
  /** Switch that manages a React hook that uses the 'displayState' property.  Each component 'type' can have uniquey state designatins.  Howver, they are all based on 'onScreen', 'offScreen', and 'fullScreen'.  */
  state: PropTypes.oneOf([
    "leftUncover",
    "leftCover",
    "rightOnscreen",
    "rightOffscreen",
    "bottomOnscreen",
    "bottomOffscreen",
    "fullScreen",
  ]),
  /** Sets the top edge (in percentage) of a Layout component.
   *
   * 'top' is the primary control for vertical sizing.  For a vertical Layout component that does not extend to the bottom edge of the viewport, the 'bottom' prop is required
   */
  top: PropTypes.string,
  /** Switch that manages Layout components that have pre-defined display properties.  */
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
  /** Sets the width (in percentage) of a Layout component. */
  width: PropTypes.string,
  /** Uses the CSS property, 'z-index' to define the stacking order of elements at the same level within the DOM.  Elements with higher values will diplay 'on top' of elements with lower values. */
  zIndex: PropTypes.string,
};

Layout.defaultProps = {
  bottom: null,
  children: null,
  flexDirection: null,
  height: null,
  id: null,
  left: null,
  right: null,
  setFlex: null,
  setOverflow: null,
  setPosition: null,
  state: null,
  top: null,
  type: "mainWrapper",
  width: null,
  zIndex: null,
};

export default Layout;
