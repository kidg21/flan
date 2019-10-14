/* eslint-disable linebreak-style */
/* eslint-disable complexity */
import React, { useState, useContext } from "react";
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
  prefix,
  selectOptions,
  text,
  textInputs,
}) {
  const [state, setState] = useState({
    input: textInputs.reduce((inputMap, input) => {
      inputMap[input.id] = input.value;
      return inputMap;
    }, {}),
    selected: selectOptions,
  });

  function handleChange(e) {
    const newState = { ...state, input: { ...state.input, [e.target.id]: e.target.value } };
    if (onChange) {
      onChange(state, newState, setState);
    } else {
      setState(newState);
    }
  }

  function handleSelectChange(prevState, currState, setSelectState) {
    if (onChange) {
      const newState = { ...state, selected: currState.selected };
      onChange(state, newState, (updatedState) => {
        setSelectState({ selected: updatedState.selected });
        if (updatedState.input !== newState.input) setState(updatedState);
      });
    } else {
      setSelectState(currState);
    }
  }

  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let inputTextColor;
  let buttonColor;
  if (error && !isDisabled) {
    inputTextColor = "alert";
    buttonColor = "alert";
  }
  const inputElements = textInputs.map((input) => {
    return (
      <TextInput
        disabled={isDisabled}
        error={!!error}
        key={input.id}
        id={input.id}
        name={input.id}
        onChange={handleChange}
        pattern={input.pattern}
        placeholder={input.placeholder}
        readonly={input.readonly}
        title={input.title}
        type={input.type}
        value={state.input[input.id]}
      />
    );
  });
  let inputContainer = inputElements;
  let gridColumns;
  if (prefix) {
    gridColumns = `${icon ? "auto" : "minmax(0, 1fr)"} minmax(auto, 3fr)`;
  } else {
    gridColumns = `minmax(auto, 3fr) ${icon ? "auto" : "minmax(0, 1fr)"}`;
  }
  if (inputElements.length > 1) {
    const numInputs = Math.min(inputElements.length, 3);
    inputContainer = (
      <Grid columns={numInputs} gap="tiny">
        {inputElements.slice(0, numInputs)}
      </Grid>
    );
  } else if (text) {
    inputContainer = (
      <Grid columns={gridColumns} gap="tiny">
        {prefix ? <Label>{text}</Label> : null}
        {inputElements}
        {!prefix ? <Label>{text}</Label> : null}
      </Grid>
    );
  } else if (options) {
    inputContainer = (
      <Grid columns={gridColumns} gap="tiny">
        {prefix ? (
          <SelectMenu
            options={options}
            selectOptions={selectOptions}
            isClearable={false}
            onChange={handleSelectChange}
          />
        ) : null}
        {inputElements}
        {!prefix ? (
          <SelectMenu
            options={options}
            selectOptions={selectOptions}
            isClearable={false}
            onChange={handleSelectChange}
          />
        ) : null}
      </Grid>
    );
  } else if (icon) {
    inputContainer = (
      <Grid columns={gridColumns} gap="tiny">
        {prefix ? (
          <Label>
            <Icon icon={icon} size="lg" />
          </Label>
        ) : null}
        {inputElements}
        {!prefix ? (
          <Label>
            <Icon icon={icon} size="lg" />
          </Label>
        ) : null}
      </Grid>
    );
  } else if (button) {
    const buttonElement = (
      <Button
        label={button.label}
        type={button.type}
        onClick={button.onClick}
        color={buttonColor || button.color}
        disabled={isDisabled || button.disabled}
      />
    );
    inputContainer = (
      <Grid columns={gridColumns} gap="tiny">
        {prefix ? buttonElement : null}
        {inputElements}
        {!prefix ? buttonElement : null}
      </Grid>
    );
  } else {
    inputContainer = (
      <Grid columns="1" gap="tiny">
        {inputElements}
      </Grid>
    );
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
        prefix={prefix}
        text={text}
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
  button: PropTypes.shape({
    color: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
  }),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helpText: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any,
  })),
  prefix: PropTypes.bool,
  selectOptions: PropTypes.arrayOf(PropTypes.any),
  text: PropTypes.string,
  textInputs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    pattern: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    readonly: PropTypes.bool,
  })).isRequired,
};
InputBlock.defaultProps = {
  button: null,
  className: null,
  disabled: null,
  error: null,
  helpText: null,
  icon: null,
  id: null,
  isRequired: false,
  label: null,
  onChange: null,
  options: null,
  prefix: false,
  selectOptions: null,
  text: null,
};

export { InputBlock as default };
