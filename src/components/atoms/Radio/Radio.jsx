/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import Label from "atoms/Label";
import Grid from "layout/Grid";

const RadioWrapper = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || "inherit";
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
    return props.theme.text[props.inputTextColor] || props.theme.text.primary;
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
    return (
      props.theme.palette[props.fillColor] || props.theme.background.default
    );
  }};
  border-color: ${(props) => {
    return props.theme.palette[props.outlineColor] || props.theme.palette.grey;
  }};
  width: 1rem;
  height: 1rem;
  margin-top: 1px;
  border-radius: 100%;
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
      props.theme.palette[props.outlineColor] || props.theme.palette.secondary
    );
  }};
  }
  &:focus {
    border-color: ${(props) => {
    return (
      props.theme.palette[props.outlineColor] || props.theme.palette.secondary
    );
  }};
    outline: none;
  }
`;

const InputGroup = styled(Grid)`
  grid-template-columns: ${(props) => {
    return props.setColumns || "";
  }};
`;

function Radio({
  align,
  checked,
  disabled,
  error,
  id,
  label,
  onChange,
  name,
  value,
  onFocus,
  onBlur,
  warning,
}) {
  let inputTextColor;
  let fillColor;
  let outlineColor;
  let fillColorChecked;
  let alignInput;
  let tabIndex;
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    fillColor = "grey5";
    fillColorChecked = "grey5";
    inputTextColor = "disabled";
    outlineColor = "grey2";
    tabIndex = "-1";
  } else if (error) {
    fillColor = "alertBright";
    fillColorChecked = "alertBright";
    inputTextColor = "alert";
    outlineColor = "alertBright";
  } else if (warning) {
    fillColor = "warningBright";
    fillColorChecked = "warningBright";
    inputTextColor = "warning";
    outlineColor = "warningBright";
  }

  switch (align) {
    case "right":
      alignInput = "'label input'";
      break;
    case "left":
    default:
      alignInput = "'input label'";
      break;
  }
  return (
    <RadioContainer
      alignInput={alignInput}
      disabled={isDisabled}
      inputTextColor={inputTextColor}
    >
      <RadioInput
        checked={checked}
        fillColor={fillColor}
        fillColorChecked={fillColorChecked}
        id={id}
        name={name}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        outlineColor={outlineColor}
        tabIndex={tabIndex}
        value={value}
      />
      {label ? <Label htmlFor={id} text={label} /> : null}
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
  warning,
}) {
  let inputTextColor;
  let errorText;
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (!isDisabled) {
    if (error) {
      inputTextColor = "alert";
      if (typeof error === "string") errorText = error;
    } else if (warning) {
      inputTextColor = "warning";
      errorText = warning;
    }
  }

  return (
    <RadioWrapper
      disabled={isDisabled}
      columns="1"
      gap="small"
      inputTextColor={inputTextColor}
      id={id}
    >
      {label ? (
        <Label isRequired={isRequired} weight="bold" text={label} />
      ) : null}
      {helpText ? <Label text={helpText} size="sm" /> : null}
      <InputGroup columns={columns}>
        {children ||
          data.map((item) => {
            return (
              <Radio
                align={align}
                disabled={item.disabled || isDisabled}
                error={!!error}
                warning={!!warning}
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
      {errorText ? <Label size="sm" text={errorText} /> : null}
    </RadioWrapper>
  );
}

Radio.propTypes = {
  align: PropTypes.oneOf(["left", "right"]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  /** The name property sets or returns the value of the name attribute of a radio button.
   * You define radio button groups with the name property (radio buttons with the same name belong to the same group). */
  name: PropTypes.string,
  onChange: PropTypes.func,
  /** The value property sets or returns the value of the value attribute of the radio button.
   * Define different values for radio buttons in the same group, to identify (on the server side) which one was checked.  */
  value: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  warning: PropTypes.bool,
};

Radio.defaultProps = {
  align: null,
  checked: null,
  label: null,
  name: null,
  disabled: false,
  error: false,
  id: null,
  onChange: null,
  value: null,
  onFocus: null,
  onBlur: null,
  warning: false,
};

RadioGroup.propTypes = {
  align: PropTypes.oneOf(["left", "right"]),
  children: PropTypes.node,
  columns: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]),
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  warning: PropTypes.string,
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
  warning: null,
};

export { Radio as default, RadioGroup };
