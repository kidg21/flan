import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import { shadows } from "Variables";
import { DisabledContext } from "States";
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
    return props.isSearch ? "" : "2px";
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
  padding: ${(props) => {
    return props.isFloating ? ".25rem" : "";
  }};
  z-index: ${(props) => {
    return props.isFloating ? "1001" : "";
  }};
  filter: ${(props) => {
    return props.isFloating ? shadows.cardShadow : "";
  }};
  > * {
    margin: ${(props) => {
    return props.isFloating ? ".5rem" : "";
  }};
    border-radius: ${(props) => {
    return props.isFloating ? ".5rem" : "0";
  }};
  }
`;

function Tabs({
  id, children, columns, align, isFloating, style, isSearch,
}) {
  let setColumns;
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
    default:
      break;
  }
  return (
    <TabsWrapper
      id={id}
      setColumns={setColumns}
      setPosition={setPosition}
      setWidth={setWidth}
      setHeight={setHeight}
      setOrientation={setOrientation}
      alignRight={alignRight}
      alignBottom={alignBottom}
      isFloating={isFloating}
      isSearch={isSearch}
      style={style}
    >
      {children}
    </TabsWrapper>
  );
}

function Tab({
  id,
  icon,
  tabLabel,
  onClick,
  noBorder,
  isSelected,
  disabled,
  color,
  selectedColor,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  return (
    <Fragment>
      {isSelected ? (
        <Button
          id={id}
          icon={icon}
          label={tabLabel}
          onClick={onClick}
          isSelected={isSelected}
          disabled={isDisabled}
          color={selectedColor}
          type='solid'
          noBorder={noBorder}
        />
      ) : (
        <Button
          id={id}
          icon={icon}
          label={tabLabel}
          onClick={onClick}
          isSelected={isSelected}
          disabled={isDisabled}
          color={color}
          noBorder={noBorder}
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
  isFloating: PropTypes.bool,
  isSearch: PropTypes.bool,
  style: PropTypes.string,
};

Tab.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  tabLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  disabled: PropTypes.bool,
};

export { Tabs as default, Tab };
