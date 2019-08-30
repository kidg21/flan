import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import { DisabledContext } from "States";
import Grid from "layout/Grid";

const CheckboxWrapper = styled(Grid)`
  margin-bottom: 1rem;
`;

const CheckboxContainer = styled.div`
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

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
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
  border-radius: 2px;
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
    outline-color: ${colors.success};
  }
`;

const CheckboxLabel = styled.label`
  grid-area: label;
  color: inherit;
  user-select: none;
  cursor: pointer;
`;

function CheckboxGroup({
  id, columns, onChange, children,
}) {
  return (
    <CheckboxWrapper id={id} columns={columns} onChange={onChange}>
      {children}
    </CheckboxWrapper>
  );
}

function Checkbox({
  id, label, type, align, checked, disabled,
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
    <CheckboxContainer label={label} inputTextColor={inputTextColor} disabled={isDisabled} alignInput={alignInput}>
      <CheckboxInput
        id={id}
        checked={checked}
        fillColor={fillColor}
        borderColor={borderColor}
        fillColorChecked={fillColorChecked}
        borderColorChecked={borderColorChecked}
      />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
}

CheckboxGroup.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  columns: PropTypes.oneOf(["auto (default)", "1", "2", "3", "4", "5", "6"]),
  children: PropTypes.node,
};

CheckboxGroup.defaultProps = {
  id: null,
  onChange: null,
  columns: null,
  children: null,
};

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  align: PropTypes.oneOf(["default", "right"]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  id: null,
  type: null,
  align: null,
  checked: null,
  disabled: false,
};

export { Checkbox as default, CheckboxGroup };
