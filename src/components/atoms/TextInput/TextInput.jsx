import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors, shadows } from "Variables";
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
background - color: ${(props) => { return props.inputFillColor || ""; }};
caret - color: ${(props) => { return props.inputCaretColor || ""; }};
min - height: 2.75rem;
padding: 0.5rem 0.75rem;
resize: vertical;
  :: placeholder {
  color: ${(props) => { return props.placeholderColor || ""; }};
}
  &: hover {
  border - color: ${(props) => { return props.inputBorderColorHover || colors.grey_40; }};
}
  }
  &: focus {
  border - color: ${(props) => { return props.inputBorderColorHover || colors.success; }};
    :: selection {
    background - color: ${(props) => { return props.inputSelectColor || ""; }};
  }
}
`;

function TextInput({
  id,
  type,
  as,
  pattern,
  value,
  inputLabel,
  isRequired,
  placeholder,
  helpText,
  errorText,
  state,
  isDisabled,
  children,
  style,
  onChange,
  autocompleteList,
  autocompleteListId,
}) {
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
      break;
    case "search":
      inputBorderColor = colors.grey_20;
      inputBorderColorHover = colors.grey_20;
      placeholderColor = colors.grey_40;
      inputSelectColor = colors.anchor;
      break;
    case "disabled":
      inputTextColor = colors.grey_40;
      inputFillColor = colors.grey_20;
      inputBorderColor = colors.grey_20;
      placeholderColor = colors.grey_40;
      isDisabled = true;
      break;
    default:
      inputBorderColor = colors.grey_20;
      inputSelectColor = colors.success;
      break;
  }
  // construct datalist element for autocompletes if appropriate props passed in
  // the autocompleteListId is used to ensure each textinput only draws from its own datalist element
  let autocompleteDataList = null;
  if (autocompleteList && autocompleteListId) {
    const options = autocompleteList.map((item) => { return (<option key={item.key || item.value} value={item.value}>{item.value}</option>); });
    autocompleteDataList = (<datalist id={autocompleteListId}>{options}</datalist>);
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
        name={id} // input attribute
        type={type} // input attribute
        as={as}
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
        onChange={onChange}
        size={"50"}  // temp while developing Locate
        list={autocompleteListId}
      />
      {autocompleteDataList}
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
  onChange: PropTypes.func,
  autocompleteDataList: PropTypes.arrayOf(PropTypes.object),
  autocompleteListId: PropTypes.string,
};

export { TextInput as default };
