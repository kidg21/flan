/* eslint-disable complexity */
/* eslint-disable no-nested-ternary */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";
import Grid from "layout/Grid";
import TextInput from "atoms/TextInput";
import SelectMenu from "atoms/SelectMenu";
import Button from "atoms/Button";

const TextInputContainer = styled(Grid)`
  color: ${(props) => {
    return props.inputTextColor || "";
  }};
  width: 100%;
  /* grid-template-columns: ${(props) => {
    return props.threeInputs
      ? "repeat(3, 1fr)"
      : props.twoInputs
        ? "repeat(2, 1fr)"
        : props.prefix
          ? props.postfix || props.label
            ? "minmax(auto, auto) minmax(auto, 3fr) minmax(auto, auto)"
            : props.postSelect
              ? "minmax(auto, auto) minmax(auto, 3fr) minmax(auto, 2fr)"
              : "minmax(auto, auto) minmax(auto, 3fr)"
          : props.preSelect
            ? props.postfix || props.label
              ? "minmax(auto, 2fr) minmax(auto, 3fr) minmax(auto, auto)"
              : props.postSelect
                ? "minmax(auto, 2fr) minmax(auto, 3fr) minmax(auto, 2fr)"
                : "minmax(auto, 2fr) minmax(auto, 3fr)"
            : props.postfix || props.label
              ? "minmax(auto, 3fr) minmax(auto, auto)"
              : props.postSelect
                ? "minmax(auto, 3fr) minmax(auto, 2fr)"
                : "repeat(1, 1fr)";
  }}; */
`;

const PrePostLabel = styled.label`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-inputs: center;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: lowercase;
  color: ${colors.grey_60};
  background-color: ${colors.grey_light};
  border: 1px solid ${colors.grey_20};
  border-bottom: 1px solid ${colors.grey_20};
  border-radius: 4px;
  padding: 0.25rem 1rem;
  white-space: nowrap;
`;

function InputBlock({
  id,
  type,
  pattern,
  value,
  label,
  placeholder,
  helpText,
  disabled,
  isRequired,
  prefix,
  postfix,
  preSelect,
  postSelect,
  buttonLabel,
  error,
  children,
  inputType,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  const inputElements = inputType.map((input) => {
    return (
      <TextInput
        disabled={isDisabled}
        error={!!error}
        id={input.id}
        name={input.id}
        pattern={input.pattern}
        placeholder={input.placeholder || placeholder}
        type={input.type}
      />
    );
  });
  let inputContainer = inputElements;
  if (inputType.length === 2) {
    inputContainer = <Grid columns="2">{inputElements}</Grid>;
  } else if (inputType.length === 3) {
    inputContainer = <Grid columns="3">{inputElements}</Grid>;
  }
  return (
    <DisabledContext.Provider value={isDisabled}>
      <TextInputContainer
        id={id}
        isRequired={isRequired}
        disabled={isDisabled}
        error={error}
        prefix={prefix}
        postfix={postfix}
        preSelect={preSelect}
        postSelect={postSelect}
        label={buttonLabel}
      >
        {label ? <InputLabel isRequired={isRequired} label={label} /> : null}
        {prefix ? <PrePostLabel>{prefix}</PrePostLabel> : null}
        {preSelect ? (
          <SelectMenu
            displayInline // Grid Override
            label={null}
            name="Choose"
            isClearable={false}
            options={preSelect}
            defaultValue={preSelect[0]}
          />
        ) : null}
        {inputContainer || children}
        {postfix ? <PrePostLabel>{postfix}</PrePostLabel> : null}
        {buttonLabel ? <Button label={buttonLabel} isPrimary /> : null}
        {postSelect ? (
          <SelectMenu
            displayInline // Grid Override
            label={null}
            name="Choose"
            isClearable={false}
            options={postSelect}
            defaultValue={postSelect[0]}
          />
        ) : null}
        {helpText ? <HelpText>{helpText}</HelpText> : null}
        {typeof error === "string" && !disabled ? <ErrorText>{error}</ErrorText> : null}
      </TextInputContainer>
    </DisabledContext.Provider>
  );
}

InputBlock.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  postfix: PropTypes.string,
  preSelect: PropTypes.array,
  postSelect: PropTypes.array,
  buttonLabel: PropTypes.string,
  error: PropTypes.bool,
};

export { InputBlock as default };
