/* eslint-disable security/detect-object-injection */
/* eslint-disable complexity */
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
    return props.theme.text[props.inputTextColor] || "";
  }};
  width: 100%;
`;

const MessageContainer = styled.section`
color: ${(props) => {
    return props.theme.text[props.messageColor] || "";
  }};
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
  /* min-height: 1.875rem; */
  min-height: ${(props) => {
    return props.inputHeight || "1.875rem";
  }};
  height: 2.4rem;
  padding: 0.125rem 0.5rem;
  resize: ${(props) => {
    return props.inputResize || "";
  }};
  ::placeholder {
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    /* TODO: placeholder color is being overridden by an !important tag.  Need to find. */
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
    return props.theme.text.inverse;
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
function TextInput({
  autocompleteList,
  children,
  className,
  columns,
  disabled,
  error,
  transparent,
  helpText,
  id,
  isRequired,
  label,
  onBlur,
  onChange,
  onFocus,
  onKeyPress,
  pattern,
  placeholder,
  readonly,
  rows,
  type,
  value,
  warning,
}) {
  let as;
  let inputTextColor;
  let inputFillColor;
  let inputBorderColor;
  let inputBorderColorHover;
  let inputCaretColor;
  let messageColor;
  let inputResize;
  let placeholderColor;
  let inputSelectColor;
  let inputHeight;
  if (type === "textarea") {
    as = "textarea";
    inputResize = "vertical";
    inputHeight = "4.75rem";
  }

  const uId = id || getGuid();

  // construct datalist element for autocompletes if appropriate props passed in
  // the autocompleteListId is used to ensure each textinput only draws from its own datalist element
  let autocompleteDataList = null;
  let autoCompleteDataListId = null;
  if (autocompleteList) {
    const itemHash = {};
    autoCompleteDataListId = `${uId}_dataList`;
    const options = autocompleteList.map((item) => {
      let itemValue = item;
      let itemLabel = item;
      if (typeof item !== "string") {
        itemValue = item.value;
        itemLabel = item.label || item.value;
      }

      const key = `${itemValue && itemValue.toUpperCase()}_${itemLabel && itemLabel.toUpperCase()}`;
      if (!itemHash[key]) {
        itemHash[key] = true;
        return (
          <option key={key} value={itemValue}>
            {itemLabel}
          </option>
        );
      }

      return null;
    });
    autocompleteDataList = (
      <datalist id={autoCompleteDataListId}>{options}</datalist>
    );
  }
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let errorText = "";
  if (isDisabled) {
    inputBorderColor = "neutral40";
    inputFillColor = "disabled";
    inputTextColor = "disabled";
  } else if (transparent) {
    inputBorderColor = "inverse";
    inputBorderColorHover = "inverse";
  } else if (error) {
    inputBorderColor = "alert60";
    messageColor = "alert";
    inputBorderColorHover = "alert40";
    inputSelectColor = "alert60";
    inputTextColor = "alert";
    placeholderColor = "secondary";
    if (typeof error === "string") errorText = error;
  } else if (warning) {
    placeholderColor = "secondary";
    messageColor = "alert";
  }


  return (
    <TextInputContainer
      className={className}
      columns="1"
      gap="xs"
      id={`${uId}_container`}
      inputTextColor={inputTextColor}
    >
      {label ? (
        <Label isRequired={isRequired} text={label} />
      ) : null}
      <Input
        as={as}
        autoComplete={autocompleteList && autocompleteList.length > 0 ? "on" : "off"}
        cols={columns} // textarea attribute
        disabled={isDisabled} // input attribute
        id={uId} // input attribute
        inputBorderColor={inputBorderColor}
        inputBorderColorHover={inputBorderColorHover}
        inputCaretColor={inputCaretColor}
        inputFillColor={inputFillColor}
        inputHeight={inputHeight}
        inputResize={inputResize}
        inputSelectColor={inputSelectColor}
        list={autoCompleteDataListId}
        name={uId} // input attribute
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        pattern={pattern} // input attribute
        placeholder={placeholder} // input attribute
        placeholderColor={placeholderColor}
        readonly={readonly}
        rows={rows} // textarea attribute
        type={type} // input attribute
        value={value || ""}
      />
      {autocompleteDataList}
      {helpText ? <Text size="sm" weight="bold" text={helpText} /> : null}
      {children}
      {errorText || warning ? <MessageContainer messageColor={messageColor}><Text size="sm" weight="bold" text={errorText || warning} /></MessageContainer> : null}
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
  columns: PropTypes.string,
  /** A disabled input field is unusable and un-clickable, and its value will not be sent when submitting the form */
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helpText: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  /** The readonly attribute specifies that the input field is read only (cannot be changed) */
  readonly: PropTypes.bool,
  rows: PropTypes.string,
  transparent: PropTypes.bool,
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
  warning: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

TextInput.defaultProps = {
  autocompleteList: null,
  children: null,
  className: null,
  columns: "",
  disabled: null,
  error: "",
  helpText: null,
  id: null,
  isRequired: false,
  label: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  onKeyPress: null,
  pattern: null,
  placeholder: null,
  readonly: false,
  rows: "",
  transparent: false,
  type: "text",
  value: null,
  warning: "",
};

export default TextInput;
