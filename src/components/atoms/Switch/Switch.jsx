import React, { useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";

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

function Toggle({ checked, disabled }) {
  let checkboxColor;
  let fillColor;
  let borderColor;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    checkboxColor = colors.grey_40;
    fillColor = colors.grey_20;
    borderColor = checkboxColor;
  }
  const [isChecked, setChecked] = useState(checked);
  const { onChange, ...remainingProps } = (checked, disabled);
  function onClick(e) {
    setChecked((state) => {
      return !state;
    });
    e.preventDefault();
    if (onChange) onChange(e);
  }
  return (
    <SwitchContainer checked={isChecked} onClick={onClick} disabled={isDisabled} {...remainingProps}>
      <StyledSwitch
        fillColor={fillColor}
        borderColor={borderColor}
        checked={isChecked}
        disabled={disabled}
      >
        <Circle checked={isChecked} disabled={isDisabled} {...remainingProps} />
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
  checked, disabled, id, isRequired, inputLabel
}) {
  return (
    <ToggleContainer inputLabel={inputLabel} isRequired={isRequired}>
      <ToggleWrapper id={id} disabled={disabled}>
        <Toggle id={id} checked={checked} disabled={disabled} />
      </ToggleWrapper>
      {inputLabel ? <ToggleLabel htmlFor={id} inputLabel={inputLabel} disabled={disabled} /> : null}
    </ToggleContainer>
  );
}

Toggle.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
Toggle.defaultProps = {
  id: null,
  checked: false,
  disabled: false,
  onChange: null,
};

Switch.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};
Switch.defaultProps = {
  id: null,
  checked: false,
  disabled: false,
};

export default Switch;
