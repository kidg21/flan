/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";

const Slot = styled.div`
  display: flex;
  flex: ${(props) => {
    return props.setFlex || "auto";
  }};
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

const BarLayout = styled.div`
  display: flex;
  cursor: ${(props) => {
    return props.onClick ? "pointer" : "";
  }};
  flex-direction: row;
  align-items: ${(props) => {
    return props.alignContent || "";
  }};
  flex-wrap: nowrap;
  justify-content: ${(props) => {
    return props.justifyContent || "space-between";
  }};
  padding: ${(props) => {
    return props.barPadding || "";
  }};
  ${Slot} {
    &:only-child {
      padding: 0;
    }
  }
`;

function getPadding(left, right, center) {
  const padding = {
    left: null,
    right: null,
    center: null,
    justify: null,
  };

  padding.left = "0 0.5em 0 0";
  padding.right = "0 0 0 0.5em";
  if (left) {
    if (!right) padding.center = "0 0 0 0.5em";
    else padding.center = "0 0.5em 0 0.5em";
  } else if (right) {
    padding.center = "0 0.5em 0 0";
    padding.justify = center ? "space-between" : "flex-end";
  }

  return padding;
}

const paddingHash = {
  "none": "0",
  "2x": "1em 1.25em",
  "top": "1.5em 1em 0.5em",
  "3x": "1.5em 1.5em",
};

const alignHash = {
  center: "center",
  bottom: "flex-end",
  top: "flex-start",
};

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
  const slotPadding = getPadding(left, right, center);
  const barPadding = padding ? paddingHash[padding.toLowerCase()] : null;
  const alignContent = alignHash[contentAlign && contentAlign.toLowerCase()] || "flex-start";

  let alignItems;
  // let topPadding;
  let textAlign;
  switch (centerAlign && centerAlign.toLowerCase()) {
    case "left":
      alignItems = "flex-start";
      textAlign = "left";
      break;
    case "right":
      alignItems = "flex-end";
      textAlign = "right";
      break;
    case "center":
    default:
      alignItems = "center";
      textAlign = "center";
      break;
  }

  const barLayout = (
    <BarLayout
      id={id}
      justifyContent={slotPadding.justify}
      barPadding={barPadding}
      alignContent={alignContent}
      onClick={onClick}
      // topPadding={topPadding}
      className={className}
    >
      {left ? (
        <Slot
          setFlex="1 0 25%"
          widthMin={leftWidth}
          widthMax={leftWidth}
          setPadding={slotPadding.left}
        >
          {left}
        </Slot>
      ) : null}
      {center ? (
        <Slot
          alignItems={alignItems}
          textAlign={textAlign}
          setPadding={slotPadding.center}
        >
          {center}
        </Slot>
      ) : null}
      {right ? (
        <Slot
          setFlex="1 0 25%"
          widthMin={rightWidth}
          widthMax={rightWidth}
          alignItems="flex-end"
          textAlign="right"
          setPadding={slotPadding.right}
        >
          {right}
        </Slot>
      ) : null}
    </BarLayout>
  );

  return typeof disabled === "boolean" ? (
    <DisabledContext.Provider value={disabled}>
      {barLayout}
    </DisabledContext.Provider>
  ) : (
    barLayout
  );
}

Bar.propTypes = {
  id: PropTypes.string,
  /** Sets the vertical alignment of all content
   * Default: 'top'
   */
  contentAlign: PropTypes.oneOf(["center", "bottom", "top"]),
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
  centerAlign: PropTypes.oneOf(["left", "right", "center"]),
  /** Sets the padding of the Bar component */
  padding: PropTypes.oneOf(["none", "1x", "2x", "3x", "top"]),
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
