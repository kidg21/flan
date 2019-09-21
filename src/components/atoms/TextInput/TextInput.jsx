import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";
import Grid from "layout/Grid";

const TextInputContainer = styled(Grid)`
  color: ${(props) => {
    return props.inputTextColor || "";
  }};
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid;
  border-color: ${(props) => {
    return props.theme.palette[props.inputBorderColor] || props.theme.palette.border;
  }};
  background-color: ${(props) => {
    return props.theme.palette[props.inputFillColor] || "";
  }};
  caret-color: ${(props) => {
    return props.theme.palette[props.inputCaretColor] || "";
  }};
  width: 100%;
  min-height: 3.167rem;
  padding: 0.5rem 0.75rem;
  resize: ${(props) => {
    return props.inputResize || "";
  }};
  ::placeholder {
    color: ${(props) => {
    return props.theme.text[props.placeholderColor] || "";
  }};
  }
  &:hover {
    border-color: ${(props) => {
    return props.theme.palette[props.inputBorderColorHover] || props.theme.palette.border;
  }};
    }
  }
  &:focus {
    border-color: ${(props) => {
    return props.theme.palette[props.inputBorderColorHover] || props.theme.palette.success;
  }};
    ::selection {
      background-color: ${(props) => {
    return props.theme.palette[props.inputSelectColor] || props.theme.palette.success;
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
  error,
  disabled,
  children,
  onChange,
  autocompleteList,
  size,
  className,
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
  if (error && !disabled) {
    inputTextColor = "alert";
    inputBorderColor = "alertLight";
    inputBorderColorHover = "alertLight";
    inputSelectColor = "alert";
  }
  switch (type) {
    case "textarea":
      as = "textarea";
      inputResize = "vertical";
      break;
    case "search":
      inputBorderColor = "border";
      inputBorderColorHover = "success";
      placeholderColor = "border";
      inputSelectColor = "primary";
      break;
    default:
      break;
  }
  // construct datalist element for autocompletes if appropriate props passed in
  // the autocompleteListId is used to ensure each textinput only draws from its own datalist element
  let autocompleteDataList = null;
  let autoCompleteDataListId = null;
  if (autocompleteList) {
    autoCompleteDataListId = Dmp.Util.getGuid();
    const options = autocompleteList.map((item) => {
      return (
        <option key={Dmp.Util.getGuid()} value={item}>
          {item}
        </option>
      );
    });
    autocompleteDataList = <datalist id={autoCompleteDataListId}>{options}</datalist>;
  }
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  return (
    <TextInputContainer
      id={id}
      inputTextColor={inputTextColor}
      gap="small"
      columns="1"
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
        list={autoCompleteDataListId}
        size={size} // overriding this while developing so it's easier to see
      />
      {autocompleteDataList}
      {helpText ? <HelpText>{helpText}</HelpText> : null}
      {children}
      {typeof error === "string" && !disabled ? <ErrorText>{error}</ErrorText> : null}
    </TextInputContainer>
  );
}

TextInput.propTypes = {
  autocompleteList: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helpText: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  autocompleteList: null,
  children: null,
  className: null,
  disabled: null,
  error: null,
  helpText: null,
  id: null,
  label: null,
  isRequired: false,
  onChange: null,
  pattern: null,
  placeholder: null,
  size: null,
  type: null,
  value: null,
};

export { TextInput as default };
