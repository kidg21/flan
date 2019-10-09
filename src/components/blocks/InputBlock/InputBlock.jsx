/* eslint-disable linebreak-style */
/* eslint-disable complexity */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText, Label } from "layout/Form";
import Grid from "layout/Grid";
import TextInput from "atoms/TextInput";
import SelectMenu from "atoms/SelectMenu";
import Icon from "atoms/Icon";
import Button from "atoms/Button";

const TextInputContainer = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || "";
  }};
  width: 100%;
`;

function InputBlock({
  button,
  className,
  disabled,
  error,
  helpText,
  icon,
  id,
  isRequired,
  label,
  onChange,
  options,
  postfix,
  prefix,
  selectOptions,
  textInputs,
  type,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let inputTextColor;
  if (error && !isDisabled) {
    inputTextColor = "alert";
  }
  const inputElements = textInputs.map((input) => {
    return (
      <TextInput
        disabled={isDisabled}
        error={!!error}
        id={input.id}
        name={input.id}
        onChange={onChange}
        pattern={input.pattern}
        placeholder={input.placeholder}
        readonly={input.readonly}
        title={input.title}
        type={input.type}
        value={input.value}
      />
    );
  });
  let inputContainer = inputElements;
  switch (type) {
    case "inputs_2":
      inputContainer = (
        <Grid columns="2" gap="tiny">
          {inputElements[0]}
          {inputElements[1]}
        </Grid>
      );
      break;
    case "inputs_3":
      inputContainer = (
        <Grid columns="3" gap="tiny">
          {inputElements[0]}
          {inputElements[1]}
          {inputElements[2]}
        </Grid>
      );
      break;
    case "pre_label":
      inputContainer = (
        <Grid columns="minmax(0, 1fr) minmax(auto, 3fr)" gap="tiny">
          <Label>{prefix}</Label>
          {inputElements[0]}
        </Grid>
      );
      break;
    case "pre_select":
      inputContainer = (
        <Grid columns="minmax(auto, 1fr) minmax(auto, 3fr)" gap="tiny">
          <SelectMenu options={options} selectOptions={selectOptions} isClearable={false} />
          {inputElements[0]}
        </Grid>
      );
      break;
    case "pre_icon":
      inputContainer = (
        <Grid columns="auto 1fr" gap="tiny">
          <Label>
            <Icon icon={icon} size="lg" />
          </Label>
          {inputElements[0]}
        </Grid>
      );
      break;
    case "post_label":
      inputContainer = (
        <Grid columns="minmax(auto, 3fr) minmax(auto, 1fr)" gap="tiny">
          {inputElements[0]}
          <Label>{postfix}</Label>
        </Grid>
      );
      break;
    case "post_select":
      inputContainer = (
        <Grid columns="minmax(auto, 3fr) minmax(auto, 1fr)" gap="tiny">
          {inputElements[0]}
          <SelectMenu options={options} selectOptions={selectOptions} isClearable={false} />
        </Grid>
      );
      break;
    case "post_button":
      inputContainer = (
        <Grid columns="1fr auto" gap="tiny">
          {inputElements[0]}
          <Button label={button} />
        </Grid>
      );
      break;
    default:
      inputContainer = inputElements[0];
      break;
  }
  return (
    <DisabledContext.Provider value={isDisabled}>
      <TextInputContainer
        className={className}
        columns="1"
        disabled={isDisabled}
        error={error}
        gap="tiny"
        id={id}
        inputTextColor={inputTextColor}
        isRequired={isRequired}
        postfix={postfix}
        prefix={prefix}
      >
        {label ? <InputLabel isRequired={isRequired} label={label} /> : null}
        {inputContainer}
        {helpText ? <HelpText>{helpText}</HelpText> : null}
        {typeof error === "string" && !isDisabled ? <ErrorText>{error}</ErrorText> : null}
      </TextInputContainer>
    </DisabledContext.Provider>
  );
}

InputBlock.propTypes = {
  button: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helpText: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.string,
  postfix: PropTypes.string,
  prefix: PropTypes.string,
  selectOptions: PropTypes.string,
  textInputs: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    "default",
    "inputs_2",
    "inputs_3",
    "pre_label",
    "pre_select",
    "pre_icon",
    "post_label",
    "post_select",
    "post_button",
  ]),
};
InputBlock.defaultProps = {
  button: "button",
  className: null,
  disabled: null,
  error: null,
  helpText: null,
  icon: "user",
  id: null,
  isRequired: false,
  label: null,
  onChange: null,
  options: null,
  postfix: "postfix",
  prefix: "prefix",
  selectOptions: null,
  type: null,
};

export { InputBlock as default };
