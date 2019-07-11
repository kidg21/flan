import React, { Fragment } from "react";
import styled from "styled-components";
import { colors, shadows } from "Variables";
import PropTypes from "prop-types";
import Button from "atoms/Button";

const TabsWrapper = styled.section`
  position: ${props => props.setPosition || ""};
  display: ${props => props.setOrientation || "grid"};
  grid-gap: ${props => (props.isSearch ? "" : "2px")};
  grid-template-columns: ${props => props.setColumns || "repeat(auto-fit, minmax(0, 1fr))"};
  flex-direction: column;
  bottom: ${props => props.alignBottom || ""};
  right: ${props => (props.alignRight ? "0" : "")};
  width: ${props => props.setWidth || "100%"};
  height: ${props => props.setHeight || ""};
  padding: ${props => (props.isFloating ? ".25rem" : "")};
  z-index: ${props => (props.isFloating ? "1001" : "")};
  filter: ${props => (props.isFloating ? shadows.cardShadow : "")};
  > * {
    margin: ${props => (props.isFloating ? ".5rem" : "")};
    border-radius: ${props => (props.isFloating ? ".5rem" : "0")};
  }
`;

function Tabs({ id, children, columns, align, isFloating, style, isSearch }) {
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
      setPosition = "absolute";
      alignBottom = "0";
      break;
    case "left":
      setColumns = "none";
      setPosition = "absolute";
      setWidth = "auto";
      setHeight = "100%";
      setOrientation = "flex";
      alignBottom = "0";
      break;
    case "right":
      setColumns = "none";
      setPosition = "absolute";
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

function Tab({ id, icon, tabLabel, onClick, isSelected, halfSize, isDisabled }) {
  return (
    <Fragment>
      {isSelected ? (
        <Button
          id={id}
          halfSize={halfSize}
          icon={icon}
          buttonLabel={tabLabel}
          onClick={onClick}
          isSelected={isSelected}
          isDisabled={isDisabled}
          type="solid"
          color="success"
        />
      ) : isDisabled ? (
        <Button
          id={id}
          halfSize={halfSize}
          icon={icon}
          buttonLabel={tabLabel}
          onClick={onClick}
          isSelected={isSelected}
          isDisabled={isDisabled}
          type="disabled"
        />
      ) : (
        <Button
          id={id}
          icon={icon}
          buttonLabel={tabLabel}
          halfSize={halfSize}
          onClick={onClick}
          isSelected={isSelected}
          isDisabled={isDisabled}
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
  halfSize: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

export { Tabs as default, Tab };
