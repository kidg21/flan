import React, { useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import { DisabledContext } from "States";

const SwitchContainer = styled.div`
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
    return props.checked ? colors.white : colors.grey_light;
  }};
  border: 1px solid;
  border-color: ${(props) => {
    return props.checked ? colors.success : colors.grey_40;
  }};
  border-radius: 100%;
  width: 1.4em;
  height: 1.4em;
  line-height: normal;
  transition: transform 300ms ease-in-out;
  transform: ${(props) => {
    return props.checked ? "translateX(100%)" : "translateX(0)";
  }};
  &[disabled],
  &[readonly] {
    border-color: ${(props) => {
    return props.disabled ? colors.grey_40 : "";
  }};
  }
`;

const StyledSwitch = styled.div`
  display: block;
  width: 3.2em;
  height: 1.8em;
  border: 1px solid;
  border-color: ${(props) => {
    return props.checked ? colors.success : colors.grey_40;
  }};
  border-radius: 1em;
  background-image: ${(props) => {
    return props.checked
      ? `linear-gradient(${colors.success_tint}, ${colors.success_light})`
      : `linear-gradient(${colors.white}, ${colors.white})`;
  }};
  padding: 1px;
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
  grid-area: input;
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
  }
`;

function Toggle({ checked, disabled, onChange }) {
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
  grid-area: label;
  width: max-content;
  user-select: none;
  font-weight: 700;
  cursor: pointer;
`;

const ToggleContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  /* grid-template-areas: "one two"; */
  grid-template-areas: ${(props) => {
    return props.alignInput || "";
  }};
  grid-gap: 0.75rem;
  color: ${(props) => {
    return props.checkboxColor || "";
  }};
  align-items: center;
  line-height: normal;
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }
`;

function Switch({
  align, checked, disabled, id, isRequired, label, onChange,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let checkboxColor;
  let alignInput;
  if (isDisabled) {
    checkboxColor = colors.grey_40;
  }
  switch (align) {
    case "right":
      alignInput = "'label input'";
      break;
    default:
      alignInput = "'input label'";
      break;
  }
  return (
    <ToggleContainer
      isRequired={isRequired}
      checkboxColor={checkboxColor}
      alignInput={alignInput}
      disabled={isDisabled}
    >
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
  align: PropTypes.oneOf(["default", "right"]),
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  align: null,
  id: null,
  checked: false,
  disabled: false,
  isRequired: false,
  label: null,
  onChange: null,
};

export default Switch;
