/* eslint-disable linebreak-style */
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
  "3x": "1.5em 1.5em",
};

const alignHash = {
  center: "center",
  bottom: "flex-end",
  top: "flex-start",
};

function Bar({
  center,
  centerAlign,
  className,
  contentAlign,
  disabled,
  id,
  left,
  leftWidth,
  onClick,
  padding,
  right,
  rightWidth,
}) {
  const slotPadding = getPadding(left, right, center);
  const barPadding = padding ? paddingHash[padding.toLowerCase()] : null;
  const alignContent = alignHash[contentAlign && contentAlign.toLowerCase()] || "flex-start";

  let alignItems;
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
      alignContent={alignContent}
      barPadding={barPadding}
      className={className}
      id={id}
      justifyContent={slotPadding.justify}
      onClick={onClick}
    >
      {left ? (
        <Slot
          setFlex="1 0 25%"
          setPadding={slotPadding.left}
          widthMax={leftWidth}
          widthMin={leftWidth}
        >
          {left}
        </Slot>
      ) : null}
      {center ? (
        <Slot
          alignItems={alignItems}
          setPadding={slotPadding.center}
          textAlign={textAlign}
        >
          {center}
        </Slot>
      ) : null}
      {right ? (
        <Slot
          alignItems="flex-end"
          setFlex="1 0 25%"
          setPadding={slotPadding.right}
          textAlign="right"
          widthMax={rightWidth}
          widthMin={rightWidth}
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
  /** Used to define the content in the center 'slot' */
  center: PropTypes.node,
  /** Sets the horizontal alignment of 'center' content
   * Default: 'center'
   */
  centerAlign: PropTypes.oneOf(["left", "right", "center"]),
  className: PropTypes.string,
  /** Sets the vertical alignment of all content
   * Default: 'top'
   */
  contentAlign: PropTypes.oneOf(["center", "bottom", "top"]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  /** Used to define the content in the left 'slot' */
  left: PropTypes.node,
  /** Used to override the default flex ratio of the left 'slot' by increasing the setting of 'min-width' and 'max-width'.
   * Value should be in percentage (%)
   */
  leftWidth: PropTypes.string,
  onClick: PropTypes.func,
  /** Sets the padding of the Bar component */
  padding: PropTypes.oneOf(["none", "2x", "3x"]),
  /** Used to define the content in the right 'slot' */
  right: PropTypes.node,
  /** Used to override the default flex ratio of the right 'slot' by increasing the setting of 'min-width' and 'max-width'.
   * Value should be in percentage (%)
   */
  rightWidth: PropTypes.string,
};

Bar.defaultProps = {
  center: null,
  centerAlign: null,
  className: null,
  contentAlign: null,
  disabled: null,
  id: null,
  left: null,
  leftWidth: null,
  onClick: null,
  padding: null,
  right: null,
  rightWidth: null,
};

export default Bar;
