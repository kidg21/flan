/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import { DisabledContext } from "States";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "atoms/Button";

const TabButton = styled(Button)`
  border-width: 0 0 2px 0;
  border-color: ${(props) => {
    return props.hasUnderline || "transparent";
  }};
  ${(props) => {
    if(props.float){
      return `float: ${props.float};`
    }
  }}
`;

const TabsWrapper = styled.section`
  ${(props) => {
    if(props.setWrap){
      return `overflow: auto;`
    }else{
      return `
          display: grid;
          grid-gap: 2px;
          grid-template-columns: ${props.setColumns || "repeat(auto-fit, minmax(0, 1fr))"};
          width: ${props.setWidth || "100%"};
      `;
    }
  }}
`;
function TabItem({
  count, disabled, htmlFor, icon, id, isSelected, label, onClick, float
}) {
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  return (
    <React.Fragment>
      <TabButton
        count={count}
        disabled={isDisabled}
        htmlFor={htmlFor}
        icon={icon}
        id={id}
        isSelected={isSelected}
        label={label}
        onClick={onClick}
        isPlain
        hasUnderline={isSelected ? true : null}
        float={float}
      />
    </React.Fragment>
  );
}

function Tabs({
  children, data, disabled, id, isVertical, wrapItems
}) {
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let setColumns;
  let setWidth;

  if (isVertical) {
    setColumns = "none";
    setWidth = "auto";
  }

  return (
    <DisabledContext.Provider value={disabled}>
      <TabsWrapper
        disabled={isDisabled}
        id={id}
        setColumns={setColumns}
        setWidth={setWidth}
        setWrap={wrapItems}
      >
        {
          children
          ? (wrapItems ? children.map((ele) => React.cloneElement(ele, {float:'left'})) : children)
          : data.map((item) => {
            return (
              <TabItem
                count={item.count}
                disabled={item.disabled || isDisabled}
                htmlFor={item.htmlFor}
                icon={item.icon}
                id={item.id}
                label={item.label}
                onClick={item.onClick}
                isSelected={item.isSelected}
              />
            );
          })}
      </TabsWrapper>
    </DisabledContext.Provider>
  );
}

TabItem.propTypes = {
  count: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  htmlFor: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  float: PropTypes.string,
};
TabItem.defaultProps = {
  count: null,
  disabled: null,
  htmlFor: null,
  icon: null,
  id: null,
  isSelected: false,
  label: null,
  onClick: null,
  float: null,
};

Tabs.propTypes = {
  children: PropTypes.node,
  data: PropTypes.arrayOf(PropTypes.shape(TabItem.propTypes)),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  isVertical: PropTypes.bool,
  wrapItems: PropTypes.bool,
};
Tabs.defaultProps = {
  children: null,
  data: null,
  disabled: false,
  id: null,
  isVertical: false,
  wrapItems: false,
};

export { Tabs as default, TabItem };
