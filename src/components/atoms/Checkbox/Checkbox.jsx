/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import Label from "atoms/Label";
import Grid from "layout/Grid";

const CheckboxWrapper = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || "";
  }};

  &:last-child {
    margin-bottom: 1rem;
  }
`;

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.75rem;
  grid-template-areas: ${(props) => {
    return props.alignInput || "";
  }};
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || props.theme.text.primary;
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
    return (
      props.theme.palette[props.fillColor] || props.theme.background.default
    );
  }};
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.grey;
  }};
  width: 1rem;
  height: 1rem;
  margin-top: 1px;
  border-radius: 2px;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${(props) => {
    return (
      props.theme.palette[props.fillColorChecked] ||
      props.theme.palette.secondaryLight
    );
  }};
    border-color: ${(props) => {
    return (
      props.theme.palette[props.borderColor] ||
      props.theme.palette.secondary
    );
  }};
  }
  &:focus {
    outline-color: ${(props) => {
    return (
      props.theme.palette[props.outlineColor] ||
      props.theme.palette.secondary
    );
  }};
  }
`;

const InputGroup = styled(Grid)`
  grid-template-columns: ${(props) => {
    return props.setColumns || "";
  }};
`;

function Checkbox({
  align, checked, error, disabled, id, label, onChange, isRequired, onFocus, onBlur, warning,
}) {
  let inputTextColor;
  let fillColor;
  let borderColor;
  let outlineColor;
  let fillColorChecked;
  let borderColorChecked;
  let alignInput;
  let tabIndex;
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    borderColor = "grey2";
    fillColor = "grey5";
    fillColorChecked = "grey5";
    inputTextColor = "disabled";
    tabIndex = "-1";
  } else if (error) {
    borderColor = "alert";
    borderColorChecked = "alert";
    fillColor = "alertBright";
    fillColorChecked = "alertBright";
    inputTextColor = "alert";
    outlineColor = "alertBright";
  } else if (warning) {
    borderColor = "warning";
    borderColorChecked = "warning";
    fillColor = "warningBright";
    fillColorChecked = "warningBright";
    inputTextColor = "warning";
    outlineColor = "warningBright";
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
      alignInput={alignInput}
      disabled={isDisabled}
      inputTextColor={inputTextColor}
    >
      <CheckboxInput
        borderColor={borderColor}
        borderColorChecked={borderColorChecked}
        checked={checked}
        fillColor={fillColor}
        fillColorChecked={fillColorChecked}
        id={id}
        onChange={onChange}
        outlineColor={outlineColor}
        tabIndex={tabIndex}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {label ? <Label htmlFor={id} isRequired={isRequired} text={label} /> : null}
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
  helpText,
  id,
  label,
  isRequired,
  onChange,
  warning,
}) {
  let inputTextColor;
  let errorText;
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (!isDisabled) {
    if (error) {
      inputTextColor = "alert";
      errorText = error;
    } else if (warning) {
      inputTextColor = "warning";
      errorText = warning;
    }
  }

  return (
    <CheckboxWrapper
      align={align}
      disabled={isDisabled}
      columns="1"
      gap="small"
      inputTextColor={inputTextColor}
      id={id}
    >
      {label ? <Label weight="bold" isRequired={isRequired} text={label} /> : null}
      {helpText ? <Label size="sm" text={helpText} /> : null}
      <InputGroup columns={columns}>
        {children ||
          data.map((item) => {
            return (
              <Checkbox
                align={align}
                disabled={item.disabled || isDisabled}
                error={!!error}
                warning={!!warning}
                id={item.id}
                key={item.id}
                label={item.label}
                onChange={item.onChange || onChange}
                isRequired={item.isRequired}
                onBlur={item.onBlur}
                onFocus={item.onFocus}
                checked={item.checked}
              />
            );
          })}
      </InputGroup>
      {errorText ? <Label size="sm" text={errorText} /> : null}
    </CheckboxWrapper>
  );
}

Checkbox.propTypes = {
  align: PropTypes.oneOf(["default", "right"]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.node,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  isRequired: PropTypes.bool,
};

Checkbox.defaultProps = {
  align: null,
  checked: null,
  disabled: false,
  label: null,
  error: null,
  warning: false,
  id: null,
  onChange: null,
  onBlur: null,
  onFocus: null,
  isRequired: false,
};

CheckboxGroup.propTypes = {
  align: PropTypes.oneOf(["default", "right"]),
  children: PropTypes.node,
  columns: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]),
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helpText: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  warning: PropTypes.string,
};

CheckboxGroup.defaultProps = {
  align: null,
  children: null,
  columns: null,
  data: null,
  disabled: false,
  error: null,
  helpText: null,
  id: null,
  isRequired: false,
  label: null,
  onChange: null,
  warning: "",
};

export { Checkbox as default, CheckboxGroup };
