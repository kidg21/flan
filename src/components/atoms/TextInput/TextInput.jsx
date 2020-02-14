/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import Text, { Label } from "base/Typography";
import Grid from "layout/Grid";
import { getGuid } from "helpers";

const TextInputContainer = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || props.theme.text.secondary;
  }};
  width: 100%;
`;

const Input = styled.input`
  color: inherit;
  border: 1px solid;
  font-family: ${(props) => { return props.theme.typography.primary; }};
  border-color: ${(props) => {
    return (
      props.theme.palette[props.inputBorderColor] || props.theme.palette.neutral60
    );
  }};
  background-color: ${(props) => {
    return (
      props.theme.background[props.inputFillColor] || props.theme.background.default
    );
  }};
  caret-color: ${(props) => {
    return props.theme.palette[props.inputCaretColor] || "";
  }};
  width: 100%;
  min-height: 2.7rem;
  padding: 0.3rem 0.75rem;
  resize: ${(props) => {
    return props.inputResize || "";
  }};
  ::placeholder {
    font-weight: initial;
    font-size: 0.876em;
    letter-spacing: .5px;
    color: ${(props) => {
    return (
      props.theme.text[props.placeholderColor] || props.theme.text.secondary
    );
  }};
  }
  &:hover {
    border-color: ${(props) => {
    return (
      props.theme.palette[props.inputBorderColorHover] ||
      props.theme.palette.neutral80
    );
  }};
    }
  &:focus {
    border-color: ${(props) => {
    return (
      props.theme.palette[props.inputBorderColorHover] ||
      props.theme.palette.selected
    );
  }};
    ::selection {
      color: ${(props) => {
    return props.theme.text.selected;
  }};
      background-color: ${(props) => {
    return (
      props.theme.palette[props.inputSelectColor] ||
      props.theme.palette.selected
    );
  }};
    }
  }
`;

// eslint-disable-next-line complexity
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
  onKeyPress,
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
  }
  // else if (type === "search") {
  // }

  // construct datalist element for autocompletes if appropriate props passed in
  // the autocompleteListId is used to ensure each textinput only draws from its own datalist element
  let autocompleteDataList = null;
  let autoCompleteDataListId = null;
  if (autocompleteList) {
    autoCompleteDataListId = getGuid();
    const options = autocompleteList.map((item) => {
      let itemValue = item;
      let itemLabel = item;
      if (typeof item !== "string") {
        itemValue = item.value;
        itemLabel = item.label || item.value;
      }
      return (
        <option key={getGuid()} value={itemValue}>
          {itemLabel}
        </option>
      );
    });
    autocompleteDataList = (
      <datalist id={autoCompleteDataListId}>{options}</datalist>
    );
  }
  let errorText;
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    inputBorderColor = "neutral40";
    inputFillColor = "disabled";
    inputTextColor = "disabled";
  } else if (error) {
    inputBorderColor = "alert60";
    inputBorderColorHover = "alert40";
    inputSelectColor = "alert60";
    inputTextColor = "alert";
    placeholderColor = "secondary";
    errorText = typeof error === "string" ? error : "";
  } else if (warning) {
    inputBorderColor = "warning60";
    inputBorderColorHover = "warning40";
    inputSelectColor = "warning60";
    inputTextColor = "warning";
    placeholderColor = "secondary";
    errorText = typeof warning === "string" ? warning : "";
  }

  return (
    <TextInputContainer
      id={id}
      inputTextColor={inputTextColor}
      gap="tiny"
      columns="1"
      className={className}
    >
      {label ? (
        <Label size="2x" isRequired={isRequired} text={label} />
      ) : null}
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
        onKeyPress={onKeyPress}
        rows={rows} // textarea attribute
        cols={cols} // textarea attribute
        autoComplete={autocompleteList && autocompleteList.length > 0 ? "on" : "off"}
      />
      {autocompleteDataList}
      {helpText ? <Text size="1x" text={helpText} /> : null}
      {children}
      {errorText ? <Text size="1x" text={errorText} /> : null}
    </TextInputContainer>
  );
}

TextInput.propTypes = {
  autocompleteList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })])),
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
  onKeyPress: PropTypes.func,
  name: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  warning: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
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
  onBlur: null,
  onFocus: null,
  onKeyPress: null,
  name: "",
  rows: "",
  cols: "",
  warning: "",
};

export default TextInput;
