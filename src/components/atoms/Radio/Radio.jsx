import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import { DisabledContext } from "States";
import Grid from "layout/Grid";

const RadioWrapper = styled(Grid)`
  margin-bottom: 1rem;
`;

const RadioContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.75rem;
  grid-template-areas: ${(props) => {
    return props.alignInput || "";
  }};
  align-items: inherit;
  color: ${(props) => {
    return props.inputTextColor || "";
  }};
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  grid-area: input;
  border: 1px solid;
  background-color: ${(props) => {
    return props.fillColor || colors.white;
  }};
  border-color: ${(props) => {
    return props.borderColor || colors.grey_40;
  }};
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${(props) => {
    return props.fillColorChecked || colors.success_light;
  }};
    border-color: ${(props) => {
    return props.borderColorChecked || colors.success;
  }};
  }
  &:focus {
    border-color: ${colors.success};
    outline: none;
  }
`;

const RadioLabel = styled.label`
  grid-area: label;
  color: inherit;
  user-select: none;
  cursor: pointer;
`;

function RadioGroup({
  id, columns, onChange, children,
}) {
  return (
    <RadioWrapper id={id} columns={columns} onChange={onChange}>
      {children}
    </RadioWrapper>
  );
}

function Radio({
  id, label, name, value, type, align, checked, disabled,
}) {
  let inputTextColor;
  let fillColor;
  let borderColor;
  let fillColorChecked;
  let borderColorChecked;
  let alignInput;
  switch (type) {
    case "error":
      inputTextColor = colors.alert;
      fillColor = colors.alert_tint;
      borderColor = inputTextColor;
      fillColorChecked = colors.alert_tint;
      borderColorChecked = colors.alert;
      break;
    default:
      break;
  }
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    inputTextColor = colors.grey_40;
    fillColor = colors.grey_20;
    borderColor = inputTextColor;
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
    <RadioContainer inputTextColor={inputTextColor} disabled={isDisabled} alignInput={alignInput}>
      <RadioInput
        id={id}
        name={name}
        value={value}
        checked={checked}
        fillColor={fillColor}
        borderColor={borderColor}
        fillColorChecked={fillColorChecked}
        borderColorChecked={borderColorChecked}
      />
      <RadioLabel htmlFor={id}>{label}</RadioLabel>
    </RadioContainer>
  );
}

RadioGroup.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  columns: PropTypes.oneOf(["auto (default)", "1", "2", "3", "4", "5", "6"]),
  children: PropTypes.node,
};

RadioGroup.defaultProps = {
  id: null,
  onChange: null,
  columns: null,
  children: null,
};

Radio.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  /** The name property sets or returns the value of the name attribute of a radio button.
   * You define radio button groups with the name property (radio buttons with the same name belong to the same group). */
  name: PropTypes.string.isRequired,
  /** The value property sets or returns the value of the value attribute of the radio button.
   * Define different values for radio buttons in the same group, to identify (on the server side) which one was checked.  */
  value: PropTypes.string,
  type: PropTypes.string,
  align: PropTypes.oneOf(["default", "right"]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  id: null,
  value: null,
  type: null,
  align: null,
  checked: null,
  disabled: false,
};

export { Radio as default, RadioGroup };
