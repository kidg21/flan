/* eslint-disable linebreak-style */
import React, { useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import { Label } from "base/Typography";

const SwitchContainer = styled.div`
  display: grid;
  align-items: center;
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
    return props.theme.text[props.inputTextColor] || "";
  }};
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.neutral80;
  }};
  line-height: initial;
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }
`;

const StyledSwitch = styled.div`
  grid-area: input;
  align-self: center;
  width: 2.2rem;
  border: 1px solid;
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.neutral80;
  }};
  border-radius: 1rem;
  background-color: ${(props) => {
    return props.theme.palette[props.fillColor] || props.theme.palette.neutral80;
  }};
  cursor: pointer;
  &[disabled],
  &[readonly] {
    background-color: ${(props) => {
    return props.disabled ? props.theme.palette.neutral60 : "";
  }};
  }
`;

const Circle = styled.div`
  background: ${(props) => {
    return props.disabled
      ? props.theme.palette.neutral40
      : props.theme.palette.inverse;
  }};
  border: 1px solid;
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.neutral80;
  }};
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  z-index: 1;
  transition: transform 300ms ease-in-out;
  transform: ${(props) => {
    return props.checked ? "translateX(100%)" : "translateX(1%)";
  }};
  &[disabled],
  &[readonly] {
    border-color: ${(props) => {
    return props.theme.palette[props.disabled] || "";
  }};
  }
`;

function Switch({
  align, checked, disabled, error, id, label, onChange,
}) {
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let inputTextColor;
  let fillColor;
  let borderColor;
  let alignInput;
  if (isDisabled) {
    inputTextColor = "disabled";
    fillColor = "neutral60";
    borderColor = "neutral60";
  }
  if (error && !isDisabled) {
    inputTextColor = "alert";
    fillColor = "alert60";
    borderColor = "alert80";
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
    fillColor = "selectedLight";
    borderColor = "selected";
  }
  return (
    <SwitchContainer
      alignInput={alignInput}
      disabled={isDisabled}
      error={error}
      id={id}
      inputTextColor={inputTextColor}
      label={label}
      onClick={onClick}
    >
      <StyledSwitch
        borderColor={borderColor}
        checked={isChecked}
        disabled={isDisabled}
        fillColor={fillColor}
        onChange={onChange}
      >
        <Circle
          borderColor={borderColor}
          checked={isChecked}
          disabled={isDisabled}
        />
      </StyledSwitch>
      {label ? (
        <Label
          disabled={isDisabled}
          htmlFor={id}
          onChange={onChange}
          size="sm"
          text={label}
          weight="bold"
        />
      ) : null}
    </SwitchContainer>
  );
}

Switch.propTypes = {
  align: PropTypes.oneOf(["default", "right"]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  align: null,
  checked: false,
  disabled: false,
  error: false,
  id: null,
  label: null,
  onChange: null,
};

export default Switch;
