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
  width: ${(props) => {
    return props.setWidth || "100%";
  }};
  height: ${(props) => {
    return props.setHeight || "100%";
  }};

`;

function Tabs({
  id, children, style, vertical,
}) {
  let setColumns;
  let border;
  let borderRadius;
  let setPosition;
  let setWidth;
  let setHeight;
  let setOrientation;


  if (vertical) {
    setColumns = "none";
    setWidth = "auto";
    setHeight = "100%";
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
      style={style}
    >
      {children}
    </TabsWrapper>
  );
}

function Tab({
  id, icon, tabLabel, htmlFor, count, size, onClick, isSelected, disabled, type,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  return (
    <React.Fragment>
      {isSelected ? (
        <TabButton
          id={id}
          icon={icon}
          htmlFor={htmlFor}
          size={size}
          label={tabLabel}
          count={count}
          onClick={onClick}
          isSelected={isSelected}
          disabled={isDisabled}
          type={type}
          underlined
        />
      ) : (
          <TabButton
            id={id}
            icon={icon}
            htmlFor={htmlFor}
            size={size}
            label={tabLabel}
            count={count}
            onClick={onClick}
            isSelected={isSelected}
            disabled={isDisabled}
            type={type}
            plain
          />
        )}
    </React.Fragment>
  );
}

Tabs.propTypes = {
  id: PropTypes.string,
  vertical: PropTypes.bool,
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};

Tab.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  tabLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  count: PropTypes.string,
  disabled: PropTypes.bool,
  htmlFor: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
};

Tabs.defaultProps = {
  id: null,
  vertical: false,
  style: null,
};

Tab.defaultProps = {
  id: null,
  icon: false,
  htmlFor: null,
  count: null,
  isSelected: false,
  disabled: false,
  type: null,
  size: null,
  onClick: null,
};

export { Tabs as default, Tab };
