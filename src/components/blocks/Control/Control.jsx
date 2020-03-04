/* eslint-disable linebreak-style */
import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import Button from "atoms/Button";

const SegmentButton = styled(Button)`
  margin: ${(props) => { return props.margin || "0 -1px -1px 0"; }};
`;

const ControlWrapper = styled.section`
  display: grid;
  grid-gap: ${(props) => {
    return props.gap || "";
  }};
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  width: 100%;
  height: 100%;
  ${SegmentButton}:first-child {
    border-radius: 2rem 0 0 2rem;
  };
  ${SegmentButton}:last-child {
    border-radius: 0 2rem 2rem 0;
  };
`;

function ControlItem({
  disabled, icon, id, isSelected, label, onClick,
}) {
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  return (
    <Fragment>
      <SegmentButton
        disabled={isDisabled}
        icon={icon}
        id={id}
        label={label}
        onClick={onClick}
        solid={isSelected ? true : null}
      />
    </Fragment>
  );
}

function Control({
  children, data, disabled, id,
}) {
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  return (
    <DisabledContext.Provider value={isDisabled}>
      <ControlWrapper
        id={id}
        disabled={isDisabled}
      >
        {children ||
          data.map((item) => {
            return (
              <ControlItem
                disabled={item.disabled || isDisabled}
                icon={item.icon}
                id={item.id}
                isSelected={item.isSelected}
                label={item.label}
                onClick={item.onClick}
              />
            );
          })}
      </ControlWrapper>
    </DisabledContext.Provider>
  );
}

ControlItem.propTypes = {
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  icon: PropTypes.string,
  id: PropTypes.string,
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};
ControlItem.defaultProps = {
  disabled: null,
  icon: null,
  id: null,
  isSelected: false,
  label: null,
  onClick: null,
};

Control.propTypes = {
  children: PropTypes.node,
  data: PropTypes.arrayOf(PropTypes.shape(ControlItem.propTypes)),
  disabled: PropTypes.bool,
  id: PropTypes.string,
};
Control.defaultProps = {
  children: null,
  data: null,
  disabled: false,
  id: null,
};

export { Control as default, ControlItem };
