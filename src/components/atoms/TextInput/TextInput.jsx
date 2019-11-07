/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";
import Grid from "layout/Grid";

const TextInputContainer = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || props.theme.text.primary;
  }};
  width: 100%;
`;


const Input = styled.input`
  line-height: normal;
  border: 1px solid;
  border-color: ${(props) => {
    return props.theme.palette[props.inputBorderColor] || props.theme.palette.grey5;
  }};
  background-color: ${(props) => {
    return props.theme.palette[props.inputFillColor] || props.theme.background.default;
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
    return props.theme.text[props.placeholderColor] || props.theme.text.secondary;
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
    return props.theme.palette[props.inputBorderColorHover] || props.theme.palette.secondary;
  }};
    ::selection {
      background-color: ${(props) => {
    return props.theme.palette[props.inputSelectColor] || props.theme.palette.grey5;
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
  onBlur,
  onFocus,
  name,
  rows,
  cols,
  warning,
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
  if (type === "textarea") {
    as = "textarea";
    inputResize = "vertical";
  } else if (type === "search") {
    inputBorderColor = "primaryLight";
    inputBorderColorHover = "primary";
  }
  // construct datalist element for autocompletes if appropriate props passed in
  // the autocompleteListId is used to ensure each textinput only draws from its own datalist element
  let autocompleteDataList = null;
  let autoCompleteDataListId = null;
  if (autocompleteList) {
    autoCompleteDataListId = Dmp.Util.getGuid();
    const options = autocompleteList.map((item) => {
      let itemValue = item;
      let itemLabel = item;
      if (typeof item !== "string") {
        itemValue = item.value;
        itemLabel = item.label || item.value;
      }
      return (
        <option key={Dmp.Util.getGuid()} value={itemValue}>
          {itemLabel}
        </option>
      );
    });
    autocompleteDataList = <datalist id={autoCompleteDataListId}>{options}</datalist>;
  }
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    inputTextColor = "disabled";
    inputFillColor = "disabled";
    inputBorderColor = "grey5";
    inputTextColor = "disabled";
  }

  if (error && !disabled) {
    inputTextColor = "alert";
    inputBorderColor = "alertTint";
    inputBorderColorHover = "alert";
    inputSelectColor = "alert";
  }

  const errorText = typeof error === "string" ? error : "";
  const warningText = typeof warning === "string" ? warning : "";
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
        name={name || id} // input attribute
        onChange={onChange}
        pattern={pattern} // input attribute
        placeholder={placeholder} // input attribute
        placeholderColor={placeholderColor}
        readonly={readonly}
        size={size} // overriding this while developing so it's easier to see
        title={title} // input attribute
        type={type} // input attribute
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        rows={rows} // textarea attribute
        cols={cols} // textarea attribute
      />
      {autocompleteDataList}
      {helpText ? <HelpText>{helpText}</HelpText> : null}
      {children}
      {!disabled ? <ErrorText warning={warningText}>{errorText}</ErrorText> : null}
    </TextInputContainer>
  );
}

TextInput.propTypes = {
  autocompleteList: PropTypes.arrayOf(PropTypes.string || PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
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
    "color",
    "date",
    "datetime-local",
    "email",
    "hidden",
    "month",
    "number",
    "password",
    "search",
    "tel",
    "text", // default
    "textarea",
    "time",
    "url",
    "week",
  ]),
  /** The value attribute specifies the initial value for an input field */
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  name: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  warning: PropTypes.string,
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
  value: "",
  onBlur: null,
  onFocus: null,
  name: "",
  rows: "",
  cols: "",
  warning: "",
};

export { TextInput as default };
