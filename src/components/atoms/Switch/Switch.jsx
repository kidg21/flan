import React, { useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import { DisabledContext } from "States";

const SwitchContainer = styled.div`
  background-color: ${(props) => {
    return props.theme.palette[props.fillColor] || props.theme.background.default;
  }};
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.text.secondary;
  }};
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

const Circle = styled.div`
  position: absolute;
  z-index: 1;
  background: ${(props) => {
    return props.checked ? props.theme.palette.white : props.theme.background.default;
  }};
  border: 1px solid;
  border-color: ${(props) => {
    return props.checked ? props.theme.palette.secondary : props.theme.text.secondary;
  }};
  border-radius: 40px;
  width: 15px;
  line-height: normal;
  height: 14px;
  transition: transform 300ms ease-in-out;
  transform: ${(props) => {
    return props.checked ? "translateX(12px)" : "translateX(0)";
  }};
  &[disabled],
  &[readonly] {
    border-color: ${(props) => {
    return props.disabled ? props.theme.palette.disabled : "";
  }};
  }
`;

const StyledSwitch = styled.div`
  width: 30px;
  display: block;
  height: 16px;
  border: 1px solid;
  border-color: ${(props) => {
    return props.checked ? props.theme.palette.secondary : props.theme.text.secondary;
  }};
  border-radius: 23px;
  transition: 300ms ease-in-out;
  background-color: ${(props) => {
    return props.checked ? props.theme.palette.secondary : props.theme.background.default;
  }};
  cursor: pointer;
  &[disabled],
  &[readonly] {
    background-image: ${(props) => {
    return props.disabled ? "none" : "";
  }};
    background: ${(props) => {
    return props.disabled ? props.theme.palette.disabled : "";
  }};
  }
`;

const ToggleWrapper = styled.label`
  grid-area: one;
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
  }
`;

function Toggle({ checked, disabled, onChange }) {
  // let checkboxColor;
  // let fillColor;
  // let borderColor;
  if (disabled) {
    // checkboxColor = colors.alert;
    // fillColor = colors.alert;
    // borderColor = checkboxColor;
    // borderColor = colors.grey_40;
  }
  // let borderColor;
  let isChecked = checked;
  let onClick = onChange;
  if (!onClick) {
    let setChecked = null;
    [isChecked, setChecked] = useState(checked);
    onClick = () => {
      setChecked(!isChecked);
    };
  }

  return (
    <SwitchContainer onClick={onClick}>
      <StyledSwitch checked={isChecked} disabled={disabled}>
        <Circle checked={isChecked} disabled={disabled} />
      </StyledSwitch>
    </SwitchContainer>
  );
}

const ToggleLabel = styled.label`
  grid-area: two;
  user-select: none;
  font-family: Arial;
  font-size: 13px;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const ToggleContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "one two";
  grid-gap: 0.75rem;
  align-content: flex-start;
  color: ${(props) => {
    return props.theme.palette[props.checkboxColor] || "";
  }};
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }
`;

function Switch({
  checked, disabled, id, isRequired, label, onChange,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let checkboxColor;
  if (disabled) {
    checkboxColor = props.theme.palette.disabled;
  }
  return (
    <ToggleContainer isRequired={isRequired} checkboxColor={checkboxColor} disabled={isDisabled}>
      <ToggleWrapper disabled={isDisabled}>
        <Toggle id={id} checked={checked} disabled={isDisabled} onChange={onChange} />
      </ToggleWrapper>
      {label ? (
        <ToggleLabel htmlFor={id} onChange={onChange} disabled={isDisabled}>
          {label}
        </ToggleLabel>
      ) : null}
    </ToggleContainer>
  );
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
Toggle.defaultProps = {
  checked: false,
  disabled: false,
  onChange: null,
};

Switch.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  id: null,
  checked: false,
  disabled: false,
  isRequired: false,
  label: null,
  onChange: null,
};

export default Switch;
