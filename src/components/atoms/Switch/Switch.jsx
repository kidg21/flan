import React, { useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";

const SwitchContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => {
    return props.label ? "auto 1fr" : "";
  }};
  grid-gap: ${(props) => {
    return props.label ? "0.75rem" : "";
  }};
  grid-template-areas: ${(props) => {
    return props.alignInput || "";
  }};
  color: ${(props) => {
    return props.theme.palette[props.checkboxColor] || props.theme.text.primary;
  }};
  background-color: ${(props) => {
    return props.theme.palette[props.fillColor] || props.theme.background.default;
  }};
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.text.secondary;
  }};
  width: max-content;
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }
`;

const StyledSwitch = styled.div`
  grid-area: input;
  width: 2.35rem;
  height: 1.2rem;
  border: 1px solid;
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.border;
  }};
  border-radius: 1em;
  background-color: ${(props) => {
    return props.theme.palette[props.fillColor] || "";
  }};
  cursor: pointer;
  &[disabled],
  &[readonly] {
    background: ${(props) => {
    return props.disabled ? props.theme.palette.disabled : "";
  }};
  }
`;

const Circle = styled.div`
  position: absolute;
  background: ${(props) => {
    return props.checked ? props.theme.background.default : props.theme.background.default;
  }};
  border: 1px solid;
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.border;
  }};
  border-radius: 100%;
  width: 1rem;
  height: 1rem;
  z-index: 1;
  transition: transform 300ms ease-in-out;
  transform: ${(props) => {
    return props.checked ? "translateX(120%)" : "translateX(1%)";
  }};
  &[disabled],
  &[readonly] {
    border-color: ${(props) => {
    return props.theme.palette[props.disabled] || "";
  }};
  }
`;

const SwitchLabel = styled.label`
  grid-area: label;
  color: ${(props) => {
    return props.disabled ? props.theme.text.disabled : "inherit";
  }};
  user-select: none;
  cursor: pointer;
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }
`;

function Switch({
  align, checked, disabled, error, id, label, onChange,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let checkboxColor;
  let fillColor;
  let borderColor;
  let alignInput;
  if (isDisabled) {
    checkboxColor = "disabled";
    borderColor = "grey3";
  }
  if (error && !isDisabled) {
    checkboxColor = "alertDark";
    fillColor = "alert";
    borderColor = "alertDark";
  }
  switch (align) {
    case "right":
      alignInput = "'label input'";
      break;
    default:
      alignInput = "'input label'";
      break;
  }
  let isChecked = checked;
  let onClick = onChange;
  if (!onClick) {
    let setChecked = null;
    [isChecked, setChecked] = useState(checked);
    onClick = () => {
      setChecked(!isChecked);
    };
  }
  if (isChecked && !error) {
    fillColor = "secondaryLight";
    borderColor = "secondary";
  }
  return (
    <SwitchContainer
      alignInput={alignInput}
      checkboxColor={checkboxColor}
      error={error}
      disabled={isDisabled}
      id={id}
      label={label}
      onClick={onClick}
    >
      <StyledSwitch
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
        fillColor={fillColor}
        borderColor={borderColor}
      >
        <Circle checked={isChecked} borderColor={borderColor} />
      </StyledSwitch>
      {label ? (
        <SwitchLabel htmlFor={id} onChange={onChange} disabled={isDisabled}>
          {label}
        </SwitchLabel>
      ) : null}
    </SwitchContainer>
  );
}

Switch.propTypes = {
  align: PropTypes.oneOf(["default", "right"]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  align: null,
  checked: false,
  disabled: false,
  id: null,
  label: null,
  onChange: null,
};

export { Switch as default };
