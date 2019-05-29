import React, { Fragment } from "react";
import styled from "styled-components";
import { colors, shadows } from "Variables";
import PropTypes from "prop-types";
import Button from "atoms/Button";

const TabsWrapper = styled.section`
  position: ${props => props.setPosition || ""};
  display: ${props => props.setOrientation || "grid"};
  grid-template-columns: ${props =>
    props.setColumns || "repeat(auto-fit, minmax(0, 1fr))"};
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

function Tabs({ id, children, display, align, isFloating, style }) {
  let setColumns;
  let setPosition;
  let setWidth;
  let setHeight;
  let setOrientation;
  let alignRight;
  let alignBottom;
  switch (display) {
    case "wrap":
      setColumns = "repeat(auto-fit, minmax(8rem, 1fr))";
      break;
    case "col_1":
      setColumns = "repeat(1, 1fr)";
      break;
    case "col_2":
      setColumns = "repeat(2, 1fr)";
      break;
    case "col_3":
      setColumns = "repeat(3, 1fr)";
      break;
    case "col_4":
      setColumns = "repeat(4, 1fr)";
      break;
    case "col_5":
      setColumns = "repeat(5, 1fr)";
      break;
    case "vertical":
      setColumns = "none";
      setPosition = "absolute";
      setWidth = "min-content";
      setHeight = "100%";
      setOrientation = "flex";
      break;
    default:
      break;
  }
  switch (align) {
    case "bottom":
      setPosition = "absolute";
      alignBottom = "0";
      break;
    case "right":
      setPosition = "absolute";
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
      style={style}
    >
      {children}
    </TabsWrapper>
  );
}

function Tab({ id, icon, tabLabel, onClick, isSelected, isDisabled }) {
  return (
    <Fragment>
      {isSelected ? (
        <Button
          id={id}
          icon={icon}
          buttonLabel={tabLabel}
          onClick={onClick}
          isSelected={isSelected}
          isDisabled={isDisabled}
          isSolid={true}
          isSecondary={true}
        />
      ) : (
        <Button
          id={id}
          icon={icon}
          buttonLabel={tabLabel}
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
  display: PropTypes.oneOf([
    "default",
    "wrap",
    "col_1",
    "col_2",
    "col_3",
    "col_4",
    "col_5",
    "vertical"
  ]),
  align: PropTypes.oneOf(["bottom", "right"]),
  isFloating: PropTypes.bool,
  style: PropTypes.string
};

Tab.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  tabLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool
};

export { Tabs as default, Tab };
