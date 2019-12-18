/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import { DisabledContext } from "States";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "atoms/Button";

const TabsWrapper = styled.section`
  position: ${(props) => {
    return props.setPosition || "";
  }};
  display: ${(props) => {
    return props.setOrientation || "grid";
  }};
  grid-gap: ${(props) => {
    return props.gap || "2px";
  }};
  grid-template-columns: ${(props) => {
    return props.setColumns || "repeat(auto-fit, minmax(0, 1fr))";
  }};
  flex-direction: column;
  bottom: ${(props) => {
    return props.alignBottom || "";
  }};
  right: ${(props) => {
    return props.alignRight ? "0" : "";
  }};
  width: ${(props) => {
    return props.setWidth || "100%";
  }};
  height: ${(props) => {
    return props.setHeight || "100%";
  }};

  > * {
    margin: ${(props) => {
    return props.margin || "";
  }};
    border: ${(props) => {
    return props.border || "";
  }};
    border-radius: ${(props) => {
    return props.borderRadius || "";
  }};
    background-color: ${(props) => {
    return props.theme.background[props.backgroundColor] || "";
  }};
    color: ${(props) => {
    return props.theme.palette[props.fontColor] || "";
  }};
  }
`;

function Tabs({
  id, children, columns, align, style, margin, gap,
}) {
  let setColumns;
  let border;
  let borderRadius;
  let setPosition;
  let setWidth;
  let backgroundColor;
  let fontColor;
  let setHeight;
  let setOrientation;
  let alignRight;
  let alignBottom;

  if (columns) {
    const numColumns = parseInt(columns, 10);
    if (!isNaN(numColumns) && columns > 0 && columns < 6) {
      setColumns = `repeat(${columns}, 1fr)`;
    } else if (columns === "wrap") {
      setColumns = "repeat(auto-fit, minmax(8rem, 1fr))";
    }
  }

  switch (align) {
    case "bottom":
      // setPosition = "absolute";
      alignBottom = "0";
      break;
    case "left":
      setColumns = "none";
      // setPosition = "absolute";
      setWidth = "auto";
      setHeight = "100%";
      setOrientation = "flex";
      alignBottom = "0";
      break;
    case "right":
      setColumns = "none";
      // setPosition = "absolute";
      setWidth = "auto";
      setHeight = "100%";
      setOrientation = "flex";
      alignRight = "0";
      break;
    case "top":
    default:
      break;
  }
  return (
    <TabsWrapper
      id={id}
      gap={gap}
      border={border}
      borderRadius={borderRadius}
      setColumns={setColumns}
      setPosition={setPosition}
      backgroundColor={backgroundColor}
      setWidth={setWidth}
      setHeight={setHeight}
      setOrientation={setOrientation}
      alignRight={alignRight}
      alignBottom={alignBottom}
      style={style}
      margin={margin}
      fontColor={fontColor}
    >
      {children}
    </TabsWrapper>
  );
}

function Tab({
  id, icon, tabLabel, size, onClick, type, isSelected, disabled, color,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  let buttonColor = color;
  if (!isSelected && type && type.toLowerCase() === "inactive") {
    buttonColor = "grey";
  }

  let buttonType = type;
  if (isSelected) {
    buttonType = type && type.toLowerCase() === "inline" ? "underlined" : "solid";
  }

  return (
    <Button
      id={id}
      icon={icon}
      size={size}
      label={tabLabel}
      onClick={onClick}
      isSelected={isSelected}
      disabled={isDisabled}
      color={buttonColor}
      type={buttonType}
    />
  );
}

Tabs.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  columns: PropTypes.oneOf(["wrap", "1", "2", "3", "4", "5"]),
  align: PropTypes.oneOf(["bottom", "left", "right", "top"]),
  style: PropTypes.string,
  margin: PropTypes.string,
  gap: PropTypes.string,
};

Tab.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  tabLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
};


Tabs.defaultProps = {
  id: null,
  columns: null,
  align: null,
  style: null,
  margin: null,
  gap: null,
};

Tab.defaultProps = {
  id: null,
  icon: null,
  isSelected: false,
  disabled: false,
  color: null,
  type: null,
  size: null,
  onClick: null,
};

export { Tabs as default, Tab };
