/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import { DisabledContext } from "States";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "atoms/Button";

const TabButton = styled(Button)`
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
`;


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

`;

function Tabs({
  id, children, align, style,
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
  switch (align) {
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
  id, icon, tabLabel, size, onClick, isSelected, disabled, color,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  return (
    <React.Fragment>
      {isSelected ? (
        <TabButton
          id={id}
          icon={icon}
          size={size}
          label={tabLabel}
          onClick={onClick}
          isSelected={isSelected}
          disabled={isDisabled}
          color={color}
          type="underlined"
        />
      ) : (
          <TabButton
            id={id}
            icon={icon}
            size={size}
            label={tabLabel}
            onClick={onClick}
            isSelected={isSelected}
            disabled={isDisabled}
            color={color}
            type="plain"
          />
        )}
    </React.Fragment>
  );
}

Tabs.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(["bottom", "left", "right"]),
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
