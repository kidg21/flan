import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";

const BarLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => {
    return props.alignContent || "";
  }};
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: ${(props) => {
    return props.barPadding || "0.5em 1em";
  }};
`;

const Slot = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  align-items: ${(props) => {
    return props.alignItems || "";
  }};
  text-align: ${(props) => {
    return props.textAlign || "";
  }};
  padding: ${(props) => {
    return props.setPadding || "";
  }};
  min-width: ${(props) => {
    return props.widthMin || "";
  }};
  max-width: ${(props) => {
    return props.widthMax || "";
  }};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    &:last-child {
      margin: 0;
    }
  }
`;

function Bar({
  id,
  contentAlign,
  left,
  leftWidth,
  center,
  centerAlign,
  padding,
  right,
  rightWidth,
  onClick,
  className,
  disabled,
}) {
  let alignContent;
  let alignItems;
  let barPadding;
  let textAlign;
  switch (padding && padding.toLowerCase()) {
    case "none":
      barPadding = "0";
      break;
    case "2x":
      barPadding = "1em 1.25em";
      break;
    case "3x":
      barPadding = "1.5em 1.5em";
      break;
    default:
      break;
  }
  switch (contentAlign && contentAlign.toLowerCase()) {
    case "center":
      alignContent = "center";
      break;
    case "bottom":
      alignContent = "flex-end";
      break;
    default:
      alignContent = "flex-start";
      break;
  }
  switch (centerAlign && centerAlign.toLowerCase()) {
    case "left":
      alignItems = "flex-start";
      textAlign = "left";
      break;
    case "right":
      alignItems = "flex-end";
      textAlign = "right";
      break;
    default:
      alignItems = "center";
      textAlign = "center";
      break;
  }

  const barLayout = (
    <BarLayout
      id={id}
      barPadding={barPadding}
      alignContent={alignContent}
      onClick={onClick}
      className={className}
    >
      {left ? (
        <Slot widthMin={leftWidth} widthMax={leftWidth} setPadding="0 1em 0 0">
          {left}
        </Slot>
      ) : null}
      {center ? (
        <Slot alignItems={alignItems} textAlign={textAlign}>
          {center}
        </Slot>
      ) : null}
      {right ? (
        <Slot
          widthMin={rightWidth}
          widthMax={rightWidth}
          alignItems="flex-end"
          textAlign="right"
          setPadding="0 0 0 1em"
        >
          {right}
        </Slot>
      ) : null}
    </BarLayout>
  );

  return typeof disabled === "boolean" ? (
    <DisabledContext.Provider value={disabled}>{barLayout}</DisabledContext.Provider>
  ) : (
    barLayout
  );
}

Bar.propTypes = {
  id: PropTypes.string,
  /** Sets the vertical alignment of all content
   * Default: 'top'
   */
  contentAlign: PropTypes.oneOf(["center", "bottom"]),
  /** Used to define the content in the left 'slot' */
  left: PropTypes.node,
  /** Used to override the default flex ratio of the left 'slot' by increasing the setting a 'min-width' and 'max-width'.
   * Value should be in percentage (%)
   */
  leftWidth: PropTypes.string,
  /** Used to define the content in the center 'slot' */
  center: PropTypes.node,
  /** Sets the horizontal alignment of 'center' content
   * Default: 'center'
   */
  centerAlign: PropTypes.oneOf(["left", "right"]),
  /** Sets the padding of the Bar component */
  padding: PropTypes.oneOf(["none", "1x (default)", "2x", "3x"]),
  /** Used to define the content in the right 'slot' */
  right: PropTypes.node,
  /** Used to override the default flex ratio of the right 'slot' by increasing the setting a 'min-width' and 'max-width'.
   * Value should be in percentage (%)
   */
  rightWidth: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Bar.defaultProps = {
  id: null,
  contentAlign: null,
  left: null,
  leftWidth: null,
  center: null,
  centerAlign: null,
  padding: null,
  right: null,
  rightWidth: null,
  onClick: null,
  className: null,
  disabled: null,
};

export default Bar;
