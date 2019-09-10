import React, { useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import { DisabledContext } from "States";
import { InputLabel } from "layout/Form";

const SwitchContainer = styled.div`
  color: ${(props) => {
    return props.checkboxColor || "";
  }};
  background-color: ${(props) => {
    return props.fillColor || colors.white;
  }};
  border-color: ${(props) => {
    return props.borderColor || colors.grey_40;
  }};
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

const Circle = styled.div`
  position: absolute;
  z-index: 1;
  background: ${(props) => {
    return props.checked ? colors.success_tint : colors.grey_light;
  }};
  border: 1px solid;
  border-color: ${(props) => {
    return props.checked ? colors.success : colors.grey_40;
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
    return props.disabled ? colors.grey_40 : "";
  }};
  }
`;

const StyledSwitch = styled.div`
  width: 30px;
  display: block;
  height: 16px;
  border: 1px solid;
  border-color: ${(props) => {
    return props.checked ? colors.success : colors.grey_40;
  }};
  border-radius: 23px;
  transition: 3000ms ease-in-out;
  background-image: ${(props) => {
    return props.checked
      ? `linear-gradient(${colors.success_tint}, ${colors.success_light})`
      : colors.white;
  }};
  cursor: pointer;
  &[disabled],
  &[readonly] {
    background-image: ${(props) => {
    return props.disabled ? "none" : "";
  }};
    background: ${(props) => {
    return props.disabled ? colors.grey_20 : "";
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
  let checkboxColor;
  let fillColor;
  let borderColor;
  if (disabled) {
    checkboxColor = colors.grey_40;
    fillColor = colors.grey_20;
    borderColor = checkboxColor;
  }

  let isChecked = checked;
  let onClick = onChange;
  if (!onClick) {
    let setChecked = null;
    [isChecked, setChecked] = useState(checked);
    onClick = () => { setChecked(!isChecked); };
  }

  return (
    <SwitchContainer
      onClick={onClick}
      checkboxColor={checkboxColor}
      fillColor={fillColor}
      borderColor={borderColor}
    >
      <StyledSwitch checked={isChecked} disabled={disabled}>
        <Circle checked={isChecked} disabled={disabled} />
      </StyledSwitch>
    </SwitchContainer>
  );
}

const ToggleLabel = styled(InputLabel)`
  grid-area: two;
`;

const ToggleContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'one two';
  grid-gap: 0.75rem;
  align-content: flex-start;
`;

function Switch({
  checked, disabled, id, isRequired, inputLabel, onChange,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  return (
    <ToggleContainer isRequired={isRequired}>
      <ToggleWrapper id={id} disabled={isDisabled}>
        <Toggle checked={checked} disabled={isDisabled} onChange={onChange} />
      </ToggleWrapper>
      {inputLabel ? <ToggleLabel htmlFor={id} label={inputLabel} disabled={isDisabled} /> : null}
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
  inputLabel: PropTypes.string,
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  id: null,
  checked: false,
  disabled: false,
  isRequired: false,
  inputLabel: null,
  onChange: null,
};

export default Switch;
