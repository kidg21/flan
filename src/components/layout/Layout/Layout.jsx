/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => {
    return props.flexDirection || "column";
  }};
  flex: ${(props) => {
    return props.flex || "1 1 auto";
  }};
  flex-wrap: nowrap;
  justify-content: flex-start;
  order: 0;
  position: ${(props) => {
    return props.position || "relative";
  }};
  top: ${(props) => {
    return props.top || "";
  }};
  right: ${(props) => {
    return props.right || "";
  }};
  bottom: ${(props) => {
    return props.bottom || "";
  }};
  left: ${(props) => {
    return props.left || "";
  }};
  width: ${(props) => {
    return props.width || "";
  }};
  max-width: 100%;
  height: ${(props) => {
    return props.height || "";
  }};
  max-height: 100%;
  overflow: ${(props) => {
    return props.overflow || "hidden";
  }};
  z-index: ${(props) => {
    return props.zIndex || "0";
  }};
  background-color: ${(props) => {
    return props.theme.background.default;
  }};
  transform: ${(props) => {
    return props.displayState || "";
  }};
  transition: all 0.3s ease-in-out;
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Region }";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;


function Layout({
  bottom,
  children,
  className,
  flexDirection,
  height,
  id,
  left,
  right,
  flex,
  overflow,
  position,
  top,
  width,
  zIndex,
}) {
  return (
    <LayoutWrapper
      bottom={bottom}
      className={className}
      flexDirection={flexDirection}
      height={height}
      id={id}
      left={left}
      right={right}
      flex={flex}
      overflow={overflow}
      position={position}
      top={top}
      width={width}
      zIndex={zIndex}
    >
      {children}
    </LayoutWrapper>
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
  className: PropTypes.string,
  /** Defines how much space a Flexbox item is allowed to fill.  A Flexbox item either takes up only the space that it needs (fixed) or takes up (or shares) any remaining empty space (flex).
   *
   * Options:
   * fixed: '0 0 auto' or 'none' (default)
   * flex: '1 1 auto' or 'auto'
   */
  flex: PropTypes.string,
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
  /** Determines whether the content within a Layout component is contained or overflows its borders.
   *
   * Options:
   * 'hidden' (default)
   * 'visible'
   */
  overflow: PropTypes.string,
  /** Used to manage the display Layout hierarchy.
   *
   * Options:
   * 'absolute' (default)
   * 'relative'
   */
  position: PropTypes.string,
  /** Sets the right edge (in percentage) of a Layout component. */
  right: PropTypes.string,
  /** Sets the top edge (in percentage) of a Layout component.
   *
   * 'top' is the primary control for vertical sizing.  For a vertical Layout component that does not extend to the bottom edge of the viewport, the 'bottom' prop is required
   */
  top: PropTypes.string,
  /** Sets the width (in percentage) of a Layout component. */
  width: PropTypes.string,
  /** Uses the CSS property, 'z-index' to define the stacking order of elements at the same level within the DOM.  Elements with higher values will diplay 'on top' of elements with lower values. */
  zIndex: PropTypes.string,

};

Layout.defaultProps = {
  bottom: null,
  children: null,
  className: null,
  flex: null,
  flexDirection: null,
  height: null,
  id: null,
  left: null,
  overflow: null,
  position: null,
  right: null,
  top: null,
  width: null,
  zIndex: null,
};


export default Layout;
