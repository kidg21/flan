import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";

const TextInputContainer = styled.div`
  display: grid;
  grid-gap: 0.35rem;
  align-content: flex-start;
  color: ${(props) => {
    return props.inputTextColor || "";
  }};
`;

const Input = styled.input`
  border: 1px solid;
  border-color: ${(props) => {
    return props.inputBorderColor || colors.grey_20;
  }};
  background-color: ${(props) => {
    return props.inputFillColor || "";
  }};
  caret-color: ${(props) => {
    return props.inputCaretColor || "";
  }};
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  resize: ${(props) => {
    return props.inputResize || "";
  }};
  ::placeholder {
    color: ${(props) => {
    return props.placeholderColor || "";
  }};
  }
  &:hover {
    border-color: ${(props) => {
    return props.inputBorderColorHover || colors.grey_40;
  }};
    }
  }
  &:focus {
    border-color: ${(props) => {
    return props.inputBorderColorHover || colors.success;
  }};
    ::selection {
      background-color: ${(props) => {
    return props.inputSelectColor || colors.success;
  }};
    }
  }
`;

function TextInput({
  id,
  type,
  pattern,
  value,
  label,
  isRequired,
  placeholder,
  helpText,
  errorText,
  disabled,
  children,
  className,
  onChange,
}) {
  let as;
  let inputTextColor;
  let inputFillColor;
  let inputBorderColor;
  let inputBorderColorHover;
  let inputCaretColor;
  let inputResize;
  let placeholderColor;
  let inputSelectColor;
  if (errorText && !disabled) {
    inputTextColor = colors.alert;
    inputBorderColor = colors.alert_light;
    inputBorderColorHover = colors.alert_light;
    inputSelectColor = colors.alert;
  }
  switch (type) {
    case "textarea":
      as = "textarea";
      inputResize = "vertical";
      break;
    default:
      break;
  }

  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  return (
    <TextInputContainer
      id={id}
      inputTextColor={inputTextColor}
      className={className}
    >
      {label ? <InputLabel isRequired={isRequired} label={label} /> : null}
      <Input
        id={id} // input attribute
        as={as}
        name={id} // input attribute
        type={type} // input attribute
        value={value} // input attribute
        placeholder={placeholder} // input attribute
        pattern={pattern} // input attribute
        disabled={isDisabled} // input attribute
        inputFillColor={inputFillColor}
        inputBorderColor={inputBorderColor}
        inputBorderColorHover={inputBorderColorHover}
        placeholderColor={placeholderColor}
        inputCaretColor={inputCaretColor}
        inputResize={inputResize}
        inputSelectColor={inputSelectColor}
        onChange={onChange}
      />
      {helpText ? <HelpText>{helpText}</HelpText> : null}
      {errorText && !disabled ? <ErrorText>{errorText}</ErrorText> : null}
      {children}
    </TextInputContainer>
  );
}

TextInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  errorText: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  id: null,
  type: null,
  pattern: null,
  value: null,
  inputLabel: null,
  isRequired: false,
  placeholder: null,
  helpText: null,
  errorText: null,
  state: null,
  style: null,
  disabled: null,
  children: null,
  onChange: null,
};
TextInput.defaultProps = {
  id: null,
  type: null,
  pattern: null,
  value: null,
  label: null,
  isRequired: false,
  placeholder: null,
  helpText: null,
  errorText: null,
  className: null,
  disabled: false,
  children: null,
};

export { TextInput as default };
