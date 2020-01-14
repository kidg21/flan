/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
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
  border: ${(props) => {
    return `1px solid ${props.theme.palette.grey5}`;
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

const screenHash = {
  large: {
    direction: "row",
    width: "30%",
    top: "60%",
    height: "40%",
    left: "70%",
    right: "70%",
  },
  medium: {
    direction: "row",
    width: "40%",
    top: "50%",
    height: "50%",
    left: "60%",
    right: "60%",
  },
  small: {
    direction: "column",
    width: "100%",
    top: "40%",
    height: "60%",
    left: "0",
    right: "100%",
  },
};

function parseType({
  type, setPosition, flexDirection, setOverflow, width, height, left, top, bottom, setFlex, zIndex,
}) {
  let position = setPosition;
  let direction = flexDirection;
  let overflow = setOverflow;
  let screenWidth = width;
  let screenHeight = height;
  let offsetLeft = left;
  let offsetTop = top;
  const offsetBottom = bottom;
  let flex = setFlex;
  let z = zIndex;
  let displayState = null;

  const screenSize = Object.keys(screenHash).find((size) => {
    return window.matchMedia(screen[size]).matches;
  });

  switch (type) {
    case "outerWrapper":
      position = "relative";
      direction = screenHash[screenSize].direction;
      break;
    case "innerWrapper":
      position = "relative";
      overflow = "visible";
      break;
    case "leftWrapper":
      displayState = "translate3d(-100%, 0px, 0px)";
      screenWidth = screenHash[screenSize].width;
      break;
    case "middleWrapper":
      screenHeight = "auto";
      break;
    case "bottomWrapper":
      offsetTop = screenHash[screenSize].top;
      screenHeight = screenHash[screenSize].height;
      break;
    case "rightWrapper":
      z = "1";
      offsetLeft = screenHash[screenSize].left;
      screenWidth = screenHash[screenSize].width;
      break;
    case "controlsWrapper":
      position = "relative";
      flex = "0 0 auto";
      if (screenHash[screenSize].width !== "100%") {
        screenWidth = "min-content";
      } else {
        screenWidth = "100%";
        screenHeight = "min-content";
      }
      break;
    case "mainWrapper":
    default:
      break;
  }

  return {
    type,
    position,
    direction,
    overflow,
    screenWidth,
    screenHeight,
    offsetLeft,
    offsetTop,
    offsetBottom,
    flex,
    displayState,
    z,
  };
}

function parseState(state, props) {
  const screenSize = Object.keys(screenHash).find((size) => {
    return window.matchMedia(screen[size]).matches;
  });

  switch (state) {
    case "leftUncover":
      if (props.type === "innerWrapper") {
        props.displayState = `translate3d(${screenHash[screenSize].width}, 0, 0)`;
      }
      break;
    case "leftCover":
      if (props.type === "innerWrapper") {
        props.displayState = "translate3d(0, 0, 0)";
      }
      break;
    case "rightOnscreen":
      if (props.type === "mainWrapper") {
        props.screenWidth = screenHash[screenSize].right;
      }
      break;
    case "rightOffscreen":
      if (props.type === "rightWrapper") {
        props.offsetLeft = "100%";
      }
      break;
    case "bottomOnscreen":
      if (props.type === "middleWrapper") {
        props.offsetBottom = screenHash[screenSize].height;
      }
      break;
    case "bottomOffscreen":
      if (props.type === "bottomWrapper") {
        props.offsetTop = "100%";
      } else if (props.type === "middleWrapper") {
        props.offsetBottom = "0";
      }
      break;
    case "fullScreen":
      props.screenWidth = "100%";
      props.screenHeight = "100%";
      props.offsetTop = "0";
      props.offsetLeft = "0";
      props.z = "1";
      break;
    default:
      break;
  }
}

function Layout({
  children,
  id,
  right,
  state,
  ...props
}) {
  const pos = parseType(props);
  parseState(state, pos);
  return (
    <FlexWrapper
      bottom={pos.offsetBottom}
      displayState={pos.displayState}
      flexDirection={pos.direction}
      height={pos.screenHeight}
      id={id}
      left={pos.offsetLeft}
      right={right}
      setFlex={pos.flex}
      setOverflow={pos.overflow}
      setPosition={pos.position}
      top={pos.offsetTop}
      width={pos.screenWidth}
      zIndex={pos.z}
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
