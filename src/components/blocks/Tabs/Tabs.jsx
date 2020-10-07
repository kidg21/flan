/* eslint-disable linebreak-style */
import React, { useContext, useMemo } from "react";
import { DisabledContext } from "States";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import Button from "atoms/Button";

const TabsContext = React.createContext({});

const TabButton = styled(Button)`
  border-width: ${(props) => {
    return props.isUnderline ? "0 0 2px 0" : null;
  }};
  border-radius: ${(props) => {
    return props.isUnderline ? "0px" : null;
  }};
  background-color: ${(props) => {
    return props.setBackground;
  }};
  margin: ${(props) => {
    return props.setMargin;
  }}; 
  ${(props) => {
    if (props.float) {
      return `float: ${props.float};`;
    }
  }}
`;

const TabsWrapper = styled.section`
  ${(props) => {
    if (!props.setTruncate) {
      return `overflow: auto;`;
    }
    return `
        display: flex;
        flex-direction: row;
      `;
  }}
`;

function TabItem({
  alignCenter, count, disabled, htmlFor, icon, id, isFolder, isSelected, label, float, onClick,
}) {
  const isAncestorDisabled = useContext(DisabledContext);
  const isDisabled = typeof disabled === "boolean" ? disabled : isAncestorDisabled;
  // context from tab component
  const tabsContext = useContext(TabsContext);
  const _alignCenter = typeof alignCenter === "boolean" ? alignCenter : tabsContext.alignCenter;
  const _isFolder = typeof isFolder === "boolean" ? isFolder : tabsContext.isFolder;

  return (
    <React.Fragment>
      <TabButton
        count={count}
        setMargin={_isFolder ? "0 0.5rem 0 0" : "0 -1px -1px 0"}
        setBackground={_isFolder && !isSelected ? colors.white20 : null}
        isPlain={!_isFolder || !isSelected}
        isUnderline={!_isFolder && isSelected}
        isFolder={_isFolder}
        isSolid={_isFolder && isSelected}
        disabled={isDisabled}
        htmlFor={htmlFor}
        icon={icon}
        id={id}
        isSelected={isSelected}
        label={label}
        onClick={onClick}
        variant={isSelected ? "" : "neutral"}
        alignCenter={_alignCenter}
        float={float}
      />
    </React.Fragment>
  );
}

function Tabs({
  alignCenter, children, data, disabled, id, truncateItems, isVertical, isFolder,
}) {
  const isAncestorDisabled = useContext(DisabledContext);
  const isDisabled = typeof disabled === "boolean" ? disabled : isAncestorDisabled;
  let setColumns;
  let setWidth;

  if (isVertical) {
    setColumns = "none";
    setWidth = "auto";
  }

  // tabs context value to pass to each tab item
  const tabsValue = useMemo(() => {
    return {
      alignCenter: !!alignCenter,
      isFolder: !!isFolder,
    };
  }, [alignCenter, isFolder]);

  return (
    <DisabledContext.Provider value={disabled}>
      <TabsContext.Provider value={tabsValue}>
        <TabsWrapper
          disabled={isDisabled}
          id={id}
          setColumns={setColumns}
          setWidth={setWidth}
          setTruncate={truncateItems}
        >
          {children
            ? (truncateItems ? children : children.map((ele) => { return React.cloneElement(ele, { float: "left" }); }))
            : data.map((item, index) => {
              const itemKey = item.id
              || (item.label && item.label.substr(0, 50).replace(/\s+/g, "_").replace(/\W+/g, ""))
              || (item.icon && item.icon.substr(0, 50).replace(/\s+/g, "_").replace(/\W+/g, ""))
              || index;
              return (
                <TabItem
                  count={item.count}
                  disabled={item.disabled || isDisabled}
                  htmlFor={item.htmlFor}
                  icon={item.icon}
                  id={item.id}
                  key={itemKey}
                  label={item.label}
                  onClick={item.onClick}
                  isSelected={item.isSelected}
                />
              );
            })}
        </TabsWrapper>
      </TabsContext.Provider>
    </DisabledContext.Provider>
  );
}

TabItem.propTypes = {
  alignCenter: PropTypes.bool,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  htmlFor: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  isFolder: PropTypes.bool,
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  float: PropTypes.string,
};
TabItem.defaultProps = {
  alignCenter: null,
  count: null,
  disabled: null,
  htmlFor: null,
  icon: null,
  id: null,
  isFolder: null,
  isSelected: false,
  label: null,
  onClick: null,
  float: null,
};

Tabs.propTypes = {
  alignCenter: PropTypes.bool,
  children: PropTypes.node,
  data: PropTypes.arrayOf(PropTypes.shape(TabItem.propTypes)),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  isVertical: PropTypes.bool,
  isFolder: PropTypes.bool,
  truncateItems: PropTypes.bool,
};
Tabs.defaultProps = {
  alignCenter: null,
  children: null,
  data: null,
  disabled: false,
  id: null,
  isFolder: false,
  isVertical: false,
  truncateItems: true,
};

export { Tabs as default, TabItem };
