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
  color: ${(props) => { return props.inputTextColor || ""; }};
`;

const Input = styled.input`
  border: 1px solid;
  border-color: ${(props) => { return props.inputBorderColor || ""; }};
  background-color: ${(props) => { return props.inputFillColor || ""; }};
  caret-color: ${(props) => { return props.inputCaretColor || ""; }};
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  resize: vertical;
  ::placeholder {
    color: ${(props) => { return props.placeholderColor || ""; }};
  }
  &:hover {
    border-color: ${(props) => { return props.inputBorderColorHover || colors.grey_40; }};
    }
  }
  &:focus {
    border-color: ${(props) => { return props.inputBorderColorHover || colors.success; }};
    ::selection {
      background-color: ${(props) => { return props.inputSelectColor || ""; }};
    }
  }
`;

function TextInput({
  id,
  type,
  pattern,
  value,
  inputLabel,
  isRequired,
  placeholder,
  helpText,
  errorText,
  state,
  disabled,
  children,
  style,
}) {
  let as;
  let inputTextColor;
  let inputFillColor;
  let inputBorderColor;
  let inputBorderColorHover;
  let inputCaretColor;
  let placeholderColor;
  let inputSelectColor;
  switch (type) {
    case "textarea":
      as = "textarea";
      break;
    default:
      break;
  }
  switch (state) {
    case "error":
      inputTextColor = colors.alert;
      inputFillColor = colors.alert_tint;
      inputBorderColor = colors.alert_light;
      inputBorderColorHover = colors.alert;
      inputCaretColor = colors.alert;
      placeholderColor = colors.alert_light;
      inputSelectColor = colors.alert;
      disabled = false;
      break;
    case "search":
      inputBorderColor = colors.grey_20;
      inputBorderColorHover = colors.grey_20;
      placeholderColor = colors.grey_40;
      inputSelectColor = colors.anchor;
      break;
    default:
      inputBorderColor = colors.grey_20;
      inputSelectColor = colors.success;
      break;
  }

  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    inputTextColor = colors.grey_40;
    inputFillColor = colors.grey_20;
    inputBorderColor = colors.grey_20;
    placeholderColor = colors.grey_40;
  }

  return (
    <TextInputContainer
      id={id}
      isRequired={isRequired}
      disabled={isDisabled}
      inputTextColor={inputTextColor}
      style={style}
    >
      {inputLabel ? (
        <InputLabel inputLabel={inputLabel} isRequired={isRequired} />
      ) : null}
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
        inputSelectColor={inputSelectColor}
      />
      {helpText ? <HelpText helpText={helpText} /> : null}
      {errorText ? <ErrorText errorText={errorText} /> : null}
      {children}
    </TextInputContainer>
  );
}

TextInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  value: PropTypes.string,
  inputLabel: PropTypes.string,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  errorText: PropTypes.string,
  state: PropTypes.string,
  style: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export { TextInput as default };
