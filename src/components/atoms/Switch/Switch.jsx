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
    return props.checkboxColor || "";
  }};
  background-color: ${(props) => {
    return props.theme.palette[props.fillColor] || props.theme.background.default;
  }};
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.text.secondary;
  }};
  align-items: center;
  line-height: normal;
  width: max-content;
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
  width: 3rem;
  height: 1.5rem;
  border: 1px solid;
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.border;
  }};
  border-radius: 1em;
  background-image: ${(props) => {
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
    return props.checked ? props.theme.background.default : props.theme.palette.border;
  }};
  border: 1px solid;
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.border;
  }};
  border-radius: 100%;
  width: 1.2rem;
  height: 1.2rem;
  z-index: 1;
  margin: 1px;
  transition: transform 300ms ease-in-out;
  transform: ${(props) => {
    return props.checked ? "translateX(100%)" : "translateX(0)";
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
    return props.theme.text[props.labelColor] || "";
  }};
  user-select: none;
  font-weight: 700;
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
  }
  if (error && !isDisabled) {
    checkboxColor = "alert";
    fillColor = `linear-gradient(${props.theme.palette.alertLight}, ${props.theme.palette.alert})`;
    borderColor = props.theme.palette.alert;
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
    fillColor = `linear-gradient(${props.theme.palette.successLight}, ${props.theme.palette.success})`;
    borderColor = "success";
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
        <SwitchLabel onChange={onChange} disabled={isDisabled}>
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
