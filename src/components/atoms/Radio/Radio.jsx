import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";
import Grid from "layout/Grid";

const RadioWrapper = styled(Grid)`
  color: ${(props) => {
    return props.inputTextColor || "";
  }};
  &:last-child {
    margin-bottom: 1rem;
  }
`;

const RadioContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.75rem;
  grid-template-areas: ${(props) => {
    return props.alignInput || "";
  }};
  width: max-content;
  line-height: initial;
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
    return props.outlineColor || colors.grey_40;
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
    return props.outlineColor || colors.success;
  }};
  }
  &:focus {
    border-color: ${(props) => {
    return props.outlineColor || colors.success;
  }};
    outline: none;
  }
`;

const RadioLabel = styled.label`
  grid-area: label;
  font-weight: 700;
  color: inherit;
  user-select: none;
  cursor: pointer;
`;

const InputGroup = styled(Grid)`
  grid-template-columns: ${(props) => {
    return props.setColumns || "";
  }};
`;

function Radio({
  align, checked, disabled, error, id, label, onChange, name, value,
}) {
  let inputTextColor;
  let fillColor;
  let outlineColor;
  let fillColorChecked;
  let alignInput;
  let tabIndex;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    fillColor = colors.grey_20;
    fillColorChecked = colors.grey_20;
    inputTextColor = colors.grey_60;
    outlineColor = colors.grey_40;
    tabIndex = "-1";
  }
  if (error && !isDisabled) {
    inputTextColor = colors.alert;
    fillColor = colors.alert_tint;
    outlineColor = colors.alert_light;
    fillColorChecked = colors.alert_tint;
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
    <RadioContainer
      alignInput={alignInput}
      disabled={isDisabled}
      error={error}
      inputTextColor={inputTextColor}
    >
      <RadioInput
        checked={checked}
        fillColor={fillColor}
        fillColorChecked={fillColorChecked}
        id={id}
        name={name}
        onChange={onChange}
        outlineColor={outlineColor}
        tabIndex={tabIndex}
        value={value}
      />
      <RadioLabel htmlFor={id}>{label}</RadioLabel>
    </RadioContainer>
  );
}

function RadioGroup({
  align,
  children,
  columns,
  data,
  disabled,
  error,
  helpText,
  id,
  isRequired,
  label,
  onChange,
}) {
  let inputTextColor;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (error && !isDisabled) {
    inputTextColor = colors.alert;
  }
  return (
    <RadioWrapper
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
              <Radio
                align={align}
                disabled={item.disabled || isDisabled}
                error={!!error}
                id={item.id}
                key={item.id}
                label={item.label}
                onChange={onChange}
                name={item.name}
                value={item.value}
              />
            );
          })}
      </InputGroup>
      {error && !isDisabled ? <ErrorText>{error}</ErrorText> : null}
    </RadioWrapper>
  );
}

Radio.propTypes = {
  align: PropTypes.oneOf(["default", "right"]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  /** The name property sets or returns the value of the name attribute of a radio button.
   * You define radio button groups with the name property (radio buttons with the same name belong to the same group). */
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  /** The value property sets or returns the value of the value attribute of the radio button.
   * Define different values for radio buttons in the same group, to identify (on the server side) which one was checked.  */
  value: PropTypes.string,
};

Radio.defaultProps = {
  align: null,
  checked: null,
  disabled: false,
  error: false,
  id: null,
  onChange: null,
  value: null,
};

RadioGroup.propTypes = {
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

RadioGroup.defaultProps = {
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

export { Radio as default, RadioGroup };
