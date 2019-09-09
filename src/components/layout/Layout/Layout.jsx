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
    return props.theme.background;
  }};
  transform: ${(props) => {
    return props.displayState || "";
  }};
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Layout Wrapper }";
      color: ${(props) => {
    return props.theme.textColor;
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
  let displayState;
  switch (type) {
    case "outerWrapper":
      setPosition = "relative";
      if (screenMedium.matches) {
        flexDirection = "row";
      } else if (screenSmall.matches) {
        flexDirection = "column";
      }
      break;
    case "innerWrapper":
      setPosition = "relative";
      setOverflow = "visible";
      break;
    case "leftWrapper":
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
      break;
    case "middleWrapper":
      height = "auto";
      break;
    case "bottomWrapper":
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

export default Layout;
