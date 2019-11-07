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

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  grid-area: input;
  border: 1px solid;
  background-color: ${(props) => {
    return props.theme.palette[props.fillColor] || props.theme.background.default;
  }};
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.border;
  }};
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${(props) => {
    return props.theme.palette[props.fillColorChecked] || props.theme.palette.secondaryLight;
  }};
    border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.secondary;
  }};
  }
  &:focus {
    outline-color: ${(props) => {
    return props.theme.palette[props.outlineColor] || props.theme.palette.secondary;
  }};
  }
`;

const CheckboxLabel = styled.label`
  grid-area: label;
  font-weight: 600;
  line-height: 1rem;
  color: inherit;
  width: max-content;
  user-select: none;
  cursor: pointer;
  &:after {
    display: ${props => (props.isRequired ? "" : "none")};
    content: "*";
    color: ${props => {
      return props.theme.palette.alert;
    }};
    font-size: 1.25rem;
    line-height: 0;
    vertical-align: middle;
    padding-left: 0.25em;
  }
`;

const InputGroup = styled(Grid)`
  grid-template-columns: ${(props) => {
    return props.setColumns || "";
  }};
`;

function Checkbox({
  align, checked, error, disabled, id, label, onChange, isRequired, onFocus, onBlur
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
    fillColor = "disabled";
    fillColorChecked = "disabled";
    inputTextColor = "disabled";
    tabIndex = "-1";
  }
  if (error && !isDisabled) {
    inputTextColor = "alert";
    fillColor = "alert";
    borderColor = "alertDark";
    outlineColor = "alertLight";
    fillColorChecked = "alert";
    borderColorChecked = "alertDark";
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
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <CheckboxLabel htmlFor={id} isRequired={isRequired}>{label}</CheckboxLabel>
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
  warningText,
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
      {!isDisabled ? <ErrorText warningText={warningText}>{error}</ErrorText> : null}
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
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

Checkbox.defaultProps = {
  align: null,
  checked: null,
  disabled: false,
  error: null,
  id: null,
  onChange: null,
  onBlur: null,
  onFocus: null,
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
  warningText: PropTypes.string,
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
  warningText: "",
};

export { Checkbox as default, CheckboxGroup };
