/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";
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
    return props.theme.palette[props.fillColor] || props.theme.background.default;
  }};
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.border;
  }};
  width: 1rem;
  height: 1rem;
  margin-top: 1px;
  border-radius: 2px;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${(props) => {
    return props.theme.palette[props.fillColorChecked] || props.theme.background.selected;
  }};
    border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.background.selected;
  }};
  }
  &:focus {
    outline-color: ${(props) => {
    return props.theme.palette[props.outlineColor] || props.theme.palette.secondaryLight;
  }};
  }
`;

const CheckboxLabel = styled.label`
  grid-area: label;
  color: inherit;
  width: fit-content;
  user-select: none;
  cursor: pointer;
`;

const InputGroup = styled(Grid)`
  grid-template-columns: ${(props) => {
    return props.setColumns || "";
  }};
`;

function Checkbox({
  align, checked, error, disabled, id, label, onChange,
}) {
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
    borderColor = "grey4";
    fillColor = "grey5";
    fillColorChecked = "grey5";
    inputTextColor = "disabled";
    tabIndex = "-1";
  }
  if (error && !isDisabled) {
    borderColor = "alert";
    borderColorChecked = "alert";
    fillColor = "alertLight";
    fillColorChecked = "alertLight";
    inputTextColor = "alert";
    outlineColor = "alertLight";
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
      error={error}
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
  helpText,
  id,
  label,
  isRequired,
  onChange,
}) {
  let inputTextColor;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (error && !isDisabled) {
    inputTextColor = "alert";
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
      {label ? <InputLabel isRequired={isRequired}>{label}</InputLabel> : null}
      {helpText ? <HelpText>{helpText}</HelpText> : null}
      <InputGroup columns={columns}>
        {children ||
          data.map((item) => {
            return (
              <Checkbox
                align={align}
                disabled={item.disabled || isDisabled}
                error={!!error}
                id={item.id}
                key={item.id}
                label={item.label}
                onChange={onChange}
              />
            );
          })}
      </InputGroup>
      {error && !isDisabled ? <ErrorText>{error}</ErrorText> : null}
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
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  align: null,
  checked: null,
  disabled: false,
  error: null,
  id: null,
  onChange: null,
};

CheckboxGroup.propTypes = {
  align: PropTypes.oneOf(["default", "right"]),
  children: PropTypes.node,
  columns: PropTypes.oneOf(["auto (default)", "1", "2", "3", "4", "5", "6"]),
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
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
};

export { Checkbox as default, CheckboxGroup };
