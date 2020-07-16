/* eslint-disable linebreak-style */
import React, { useContext, useMemo } from "react";
import { DisabledContext } from "States";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "atoms/Button";

const TabsContext = React.createContext({});

const TabButton = styled(Button)`
  border-width: 0 0 2px 0;
  border-color: ${(props) => {
    return props.hasUnderline || "transparent";
  }};
`;

const TabsWrapper = styled.section`
  display: flex;
  flex-direction: row;
`;

function TabItem({
  alignCenter, count, disabled, htmlFor, icon, id, isSelected, label, onClick,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  // context from tab component
  const tabsContext = useContext(TabsContext);
  const _alignCenter = typeof alignCenter === "boolean" ? alignCenter : tabsContext.alignCenter;

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
        variant={isSelected ? "" : "neutral"}
        isPlain
        hasUnderline={isSelected ? true : null}
        alignCenter={_alignCenter}
      />
    </React.Fragment>
  );
}

function Tabs({
  alignCenter, children, data, disabled, id, isVertical,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
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
    };
  }, [alignCenter]);

  return (
    <DisabledContext.Provider value={disabled}>
      <TabsContext.Provider value={tabsValue}>
        <TabsWrapper
          disabled={isDisabled}
          id={id}
          setColumns={setColumns}
          setWidth={setWidth}
        >
          {children || data.map((item, index) => {
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
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};
TabItem.defaultProps = {
  alignCenter: null,
  count: null,
  disabled: null,
  htmlFor: null,
  icon: null,
  id: null,
  isSelected: false,
  label: null,
  onClick: null,
};

Tabs.propTypes = {
  alignCenter: PropTypes.bool,
  children: PropTypes.node,
  data: PropTypes.arrayOf(PropTypes.shape(TabItem.propTypes)),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  isVertical: PropTypes.bool,
};
Tabs.defaultProps = {
  alignCenter: null,
  children: null,
  data: null,
  disabled: false,
  id: null,
  isVertical: false,
};

export { Tabs as default, TabItem };
