import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";
import Grid from "layout/Grid";

const CheckboxWrapper = styled(Grid)`
  color: ${props => {
    return props.inputTextColor || "";
  }};
  margin-bottom: 1rem;
`;

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.75rem;
  grid-template-areas: ${props => {
    return props.alignInput || "";
  }};
  align-items: inherit;
  color: ${props => {
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
  background-color: ${props => {
    return props.fillColor || colors.white;
  }};
  border-color: ${props => {
    return props.borderColor || colors.grey_40;
  }};
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${props => {
      return props.fillColorChecked || colors.success_light;
    }};
    border-color: ${props => {
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

function Checkbox({ align, checked, disabled, id, label, type }) {
  let inputTextColor;
  let fillColor;
  let borderColor;
  let fillColorChecked;
  let borderColorChecked;
  let alignInput;
  let tabIndex;
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
    fillColorChecked = colors.grey_20;
    borderColorChecked = colors.grey_40;
    tabIndex = "-1";
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
    <CheckboxContainer
      inputTextColor={inputTextColor}
      disabled={isDisabled}
      alignInput={alignInput}
      tabIndex={tabIndex}
    >
      <CheckboxInput
        id={id}
        checked={checked}
        tabIndex={tabIndex}
        fillColor={fillColor}
        borderColor={borderColor}
        fillColorChecked={fillColorChecked}
        borderColorChecked={borderColorChecked}
      />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
}

function CheckboxGroup({
  align,
  children,
  columns,
  data,
  disabled,
  error,
  errorText,
  helpText,
  id,
  inputLabel,
  isRequired,
  onChange,
}) {
  return (
    <CheckboxWrapper
      align={align}
      columns={columns}
      disabled={disabled}
      error={error}
      id={id}
      onChange={onChange}
    >
      {inputLabel ? <InputLabel inputLabel={inputLabel} isRequired={isRequired} /> : null}
      {helpText ? <HelpText helpText={helpText} /> : null}
      {children ||
        data.map(item => {
          return (
            <>
              {error ? (
                <Checkbox
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  htmlFor={item.id}
                  align={align}
                  type="error"
                  disabled={item.disabled || disabled}
                />
              ) : (
                <Checkbox
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  htmlFor={item.id}
                  align={align}
                  disabled={item.disabled || disabled}
                />
              )}
            </>
          );
        })}
      {error && !disabled ? <ErrorText errorText={errorText} /> : null}
    </CheckboxWrapper>
  );
}

Checkbox.propTypes = {
  align: PropTypes.oneOf(["default", "right"]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Checkbox.defaultProps = {
  align: null,
  checked: null,
  disabled: false,
  id: null,
  type: null,
};

CheckboxGroup.propTypes = {
  align: PropTypes.oneOf(["default", "right"]),
  children: PropTypes.node,
  columns: PropTypes.oneOf(["auto (default)", "1", "2", "3", "4", "5", "6"]),
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string,
  inputLabel: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckboxGroup.defaultProps = {
  align: null,
  children: null,
  columns: null,
  data: null,
  disabled: false,
  error: false,
  errorText: null,
  helpText: null,
  id: null,
  inputLabel: null,
  isRequired: false,
  onChange: null,
};

export { Checkbox as default, CheckboxGroup };
