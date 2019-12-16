/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { Fragment, useContext } from "react";
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
    return props.borderRadius || "0px";
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
  id, children, columns, align, style,
}) {
  let setColumns;
  let border;
  let borderRadius;
  let setPosition;
  let setWidth;
  let setHeight;
  let setOrientation;
  let alignRight;
  let alignBottom;
  switch (columns) {
    case "wrap":
      setColumns = "repeat(auto-fit, minmax(8rem, 1fr))";
      break;
    case "1":
      setColumns = "repeat(1, 1fr)";
      break;
    case "2":
      setColumns = "repeat(2, 1fr)";
      break;
    case "3":
      setColumns = "repeat(3, 1fr)";
      break;
    case "4":
      setColumns = "repeat(4, 1fr)";
      break;
    case "5":
      setColumns = "repeat(5, 1fr)";
      break;
    default:
      break;
  }
  switch (align) {
    case "bottom":
      // setPosition = "absolute";
      alignBottom = "0";
      break;
    case "vertical":
      setColumns = "none";
      // setPosition = "absolute";
      setWidth = "auto";
      setHeight = "auto";
      setOrientation = "flex";
      alignBottom = "0";
      break;
    default:
      break;
  }
  return (
    <TabsWrapper
      id={id}
      border={border}
      borderRadius={borderRadius}
      setColumns={setColumns}
      setPosition={setPosition}
      setWidth={setWidth}
      setHeight={setHeight}
      setOrientation={setOrientation}
      alignRight={alignRight}
      alignBottom={alignBottom}
      style={style}
    >
      {children}
    </TabsWrapper>
  );
}

function Tab({
  id, icon, tabLabel, size, onClick, isSelected, type, disabled, color,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  return (
    <Fragment>
      {isSelected ? (
        <Button
          id={id}
          icon={icon}
          size={size}
          label={tabLabel}
          onClick={onClick}
          isSelected={isSelected}
          disabled={isDisabled}
          color={color}
          type={type && type.toLowerCase() === "solid" ? "solid" : "underlined"}
        />
      ) : (
        <Button
            id={id}
            icon={icon}
            size={size}
            label={tabLabel}
            onClick={onClick}
            isSelected={isSelected}
            disabled={isDisabled}
            color="grey"
            type="plain"
          />
        )}
    </Fragment>
  );
}

Tabs.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  columns: PropTypes.oneOf(["default", "wrap", "1", "2", "3", "4", "5"]),
  align: PropTypes.oneOf(["bottom", "left", "right"]),
  style: PropTypes.string,
};

Tab.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  tabLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
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
};

Tab.defaultProps = {
  id: null,
  icon: false,
  isSelected: false,
  disabled: false,
  color: null,
  type: null,
  size: null,
};

export { Tabs as default, Tab };
