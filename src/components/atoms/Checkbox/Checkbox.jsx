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
  &:last-child {
    margin-bottom: 1rem;
  }
`;

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.75rem;
  grid-template-areas: ${props => {
    return props.alignInput || "";
  }};
  line-height: initial;
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
      return props.borderColor || colors.success;
    }};
  }
  &:focus {
    outline-color: ${props => {
      return props.outlineColor || colors.success;
    }};
  }
`;

const CheckboxLabel = styled.label`
  grid-area: label;
  font-weight: 700;
  color: inherit;
  user-select: none;
  cursor: pointer;
`;

function Checkbox({ align, checked, error, disabled, id, label }) {
  let inputTextColor;
  let fillColor;
  let borderColor;
  let outlineColor;
  let fillColorChecked;
  let borderColorChecked;
  let alignInput;
  let tabIndex;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    fillColor = colors.grey_20;
    fillColorChecked = colors.grey_20;
    inputTextColor = colors.grey_60;
    tabIndex = "-1";
  }
  if (error && !isDisabled) {
    inputTextColor = colors.alert;
    fillColor = colors.alert_tint;
    borderColor = colors.alert_light;
    outlineColor = colors.alert_light;
    fillColorChecked = colors.alert_tint;
    borderColorChecked = colors.alert;
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
      error={error}
      alignInput={alignInput}
    >
      <CheckboxInput
        id={id}
        checked={checked}
        tabIndex={tabIndex}
        fillColor={fillColor}
        borderColor={borderColor}
        outlineColor={outlineColor}
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
  errorText,
  helpText,
  id,
  label,
  isRequired,
  onChange,
}) {
  let inputTextColor;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (errorText && !isDisabled) {
    inputTextColor = colors.alert;
  }
  return (
    <CheckboxWrapper
      align={align}
      columns={columns}
      disabled={isDisabled}
      inputTextColor={inputTextColor}
      id={id}
      onChange={onChange}
    >
      {label ? <InputLabel isRequired={isRequired}>{label}</InputLabel> : null}
      {helpText ? <HelpText>{helpText}</HelpText> : null}
      {children ||
        data.map(item => {
          return (
            <>
              {errorText ? (
                <Checkbox
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  htmlFor={item.id}
                  align={align}
                  error
                  disabled={item.disabled || isDisabled}
                />
              ) : (
                <Checkbox
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  htmlFor={item.id}
                  align={align}
                  disabled={item.disabled || isDisabled}
                />
              )}
            </>
          );
        })}
      {errorText && !isDisabled ? <ErrorText>{errorText}</ErrorText> : null}
    </CheckboxWrapper>
  );
}

Checkbox.propTypes = {
  align: PropTypes.oneOf(["default", "right"]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
  align: null,
  checked: null,
  disabled: false,
  error: null,
  id: null,
};

CheckboxGroup.propTypes = {
  align: PropTypes.oneOf(["default", "right"]),
  children: PropTypes.node,
  columns: PropTypes.oneOf(["auto (default)", "1", "2", "3", "4", "5", "6"]),
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckboxGroup.defaultProps = {
  align: null,
  children: null,
  columns: null,
  data: null,
  disabled: false,
  errorText: null,
  helpText: null,
  id: null,
  label: null,
  isRequired: false,
  onChange: null,
};

export { Checkbox as default, CheckboxGroup };
