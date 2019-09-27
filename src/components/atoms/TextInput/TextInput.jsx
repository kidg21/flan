import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
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
    return props.inputBorderColor || colors.grey_20;
  }};
  background-color: ${(props) => {
    return props.inputFillColor || "";
  }};
  caret-color: ${(props) => {
    return props.inputCaretColor || "";
  }};
  width: 100%;
  min-height: 3.167rem;
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
  autocompleteList,
  children,
  className,
  disabled,
  error,
  helpText,
  id,
  isRequired,
  label,
  onChange,
  pattern,
  placeholder,
  readonly,
  size,
  title,
  type,
  value,
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
    inputTextColor = colors.alert;
    inputBorderColor = colors.alert_light;
    inputBorderColorHover = colors.alert_light;
    inputSelectColor = colors.alert;
  }
  if (type === "textarea") {
    as = "textarea";
    inputResize = "vertical";
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
      gap="tiny"
      columns="1"
      className={className}
    >
      {label ? <InputLabel isRequired={isRequired} label={label} /> : null}
      <Input
        as={as}
        disabled={isDisabled} // input attribute
        id={id} // input attribute
        inputBorderColor={inputBorderColor}
        inputBorderColorHover={inputBorderColorHover}
        inputCaretColor={inputCaretColor}
        inputFillColor={inputFillColor}
        inputResize={inputResize}
        inputSelectColor={inputSelectColor}
        list={autoCompleteDataListId}
        name={id} // input attribute
        onChange={onChange}
        pattern={pattern} // input attribute
        placeholder={placeholder} // input attribute
        placeholderColor={placeholderColor}
        readonly={readonly}
        size={size} // overriding this while developing so it's easier to see
        title={title} // input attribute
        type={type} // input attribute
        value={value}
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
  /** A disabled input field is unusable and un-clickable, and its value will not be sent when submitting the form */
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helpText: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  /** The readonly attribute specifies that the input field is read only (cannot be changed) */
  readonly: PropTypes.bool,
  size: PropTypes.string,
  /** The title attribute specifies extra information about an element.
   * The information is most often shown as a tooltip text when the mouse moves over the element.
   */
  title: PropTypes.string,
  type: PropTypes.oneOf([
    "date",
    "email",
    "hidden",
    "month",
    "number",
    "password",
    "search",
    "tel",
    "text (default)",
    "textarea",
    "time",
    "url",
  ]),
  /** The value attribute specifies the initial value for an input field */
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
  readonly: false,
  size: null,
  title: null,
  type: "text",
  value: null,
};

export { TextInput as default };
