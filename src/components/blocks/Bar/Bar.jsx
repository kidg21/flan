/* eslint-disable complexity */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
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
    return props.barPadding || "0.5em 1em";
  }};
  ${Slot} {
    &:only-child {
      padding: 0;
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
  let justifyContent;
  let alignContent;
  let alignItems;
  let topPadding;
  let barPadding;
  let textAlign;
  const leftPadding = "0 0.5em 0 0";
  let centerPadding;
  const rightPadding = "0 0 0 0.5em";
  if (left) {
    if (!right) centerPadding = "0 0 0 0.5em";
    else centerPadding = "0 0.5em 0 0.5em";
  } else if (right) {
    centerPadding = "0 0.5em 0 0";
  }
  if (right) {
    if (!left) {
      if (!center) justifyContent = "flex-end";
      else justifyContent = "space-between";
    }
  }
  switch (padding && padding.toLowerCase()) {
    case "none":
      barPadding = "0";
      break;
    case "2x":
      barPadding = "1em 1.25em";
      break;
    case "top":
      barPadding = "1.5em 1em 0.5em";
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
      justifyContent={justifyContent}
      barPadding={barPadding}
      alignContent={alignContent}
      onClick={onClick}
      topPadding={topPadding}
      className={className}
    >
      {left ? (
        <Slot
          setFlex="1 0 25%"
          widthMin={leftWidth}
          widthMax={leftWidth}
          setPadding={leftPadding}
        >
          {left}
        </Slot>
      ) : null}
      {center ? (
        <Slot
          alignItems={alignItems}
          textAlign={textAlign}
          setPadding={centerPadding}
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
          setPadding={rightPadding}
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
