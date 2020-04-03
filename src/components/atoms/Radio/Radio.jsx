/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import Text, { Label } from "base/Typography";
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
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || "";
  }};
  line-height: initial;
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
    return props.theme.palette[props.outlineColor] || props.theme.palette.neutral80;
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
      props.theme.palette.selectedLight
    );
  }};
    border-color: ${(props) => {
    return (
      props.theme.palette[props.outlineColor] || props.theme.palette.selected
    );
  }};
  }
  &:focus {
    border-color: ${(props) => {
    return (
      props.theme.palette[props.outlineColor] || props.theme.palette.selected
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
  name,
  onBlur,
  onChange,
  onFocus,
  value,
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
    fillColor = "neutral40";
    fillColorChecked = "neutral40";
    inputTextColor = "disabled";
    outlineColor = "neutral80";
    tabIndex = "-1";
  } else if (error) {
    fillColor = "alert60";
    fillColorChecked = "alert60";
    inputTextColor = "alert";
    outlineColor = "alert60";
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
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        outlineColor={outlineColor}
        tabIndex={tabIndex}
        value={value}
      />
      {label ? <Label weight="bold" htmlFor={id} text={label} /> : null}
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
  let errorText;
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (!isDisabled) {
    if (error) {
      inputTextColor = "alert";
      if (typeof error === "string") errorText = error;
    }
  }

  return (
    <RadioWrapper
      disabled={isDisabled}
      columns="1"
      inputTextColor={inputTextColor}
      id={id}
    >
      {label ? (
        <Label weight="bold" isRequired={isRequired} text={label} />
      ) : null}
      {helpText ? <Text size="sm" weight="bold" text={helpText} /> : null}
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
                name={item.name}
                onChange={onChange}
                value={item.value}
              />
            );
          })}
      </InputGroup>
      {errorText ? <Text size="sm" weight="bold" text={errorText} /> : null}
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
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
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
  label: null,
  name: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  value: null,
};

RadioGroup.propTypes = {
  align: PropTypes.oneOf(["left", "right"]),
  children: PropTypes.node,
  columns: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]),
  data: PropTypes.arrayOf(PropTypes.shape({
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
  })),
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
  data: {
    checked: false,
    disabled: false,
    id: null,
    label: null,
    name: null,
    onBlur: null,
    onChange: null,
    onFocus: null,
    value: null,
  },
  disabled: false,
  error: null,
  helpText: null,
  id: null,
  isRequired: false,
  label: null,
  onChange: null,
};

export { Radio as default, RadioGroup };
