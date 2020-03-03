/* eslint-disable linebreak-style */
/* eslint-disable complexity */
import React, { useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import Grid from "layout/Grid";
import Text, { Label } from "base/Typography";
import TextInput from "atoms/TextInput";
import SelectMenu from "atoms/SelectMenu";
import Icon from "atoms/Icon";
import Button from "atoms/Button";

const TextInputContainer = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || props.theme.text.primary;
  }};
  align-items: center;
  width: 100%;
`;

const PrePost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    return props.theme.palette.neutral20;
  }};
  border: ${(props) => {
    return `1px solid ${props.theme.palette.neutral60}`;
  }};
  border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
  }};
  text-transform: lowercase;
  height: 100%;
  padding: 0.25rem 1rem;
  cursor: default;
  > * {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: 1px;
  }
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
  onBlur,
  onFocus,
  onKeyPress,
  warning,
}) {
  const [state, setState] = useState({
    input: textInputs.reduce((inputMap, input) => {
      inputMap[input.id] = input.value;
      return inputMap;
    }, {}),
    selected: null,
  });

  function handleChange(e) {
    const newState = {
      ...state,
      input: { ...state.input, [e.target.id]: e.target.value },
    };
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

  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let inputTextColor;
  let errorText;
  if (error && !isDisabled) {
    inputTextColor = "alert";
    errorText = typeof error === "string" ? error : "";
  } else if (warning && !isDisabled) {
    inputTextColor = "warning";
    errorText = typeof warning === "string" ? warning : "";
  }
  const inputElements = textInputs.map((input) => {
    return (
      <TextInput
        disabled={isDisabled}
        error={!!error}
        warning={!!warning}
        key={input.id}
        id={input.id}
        name={input.name || input.id}
        onChange={handleChange}
        pattern={input.pattern}
        placeholder={input.placeholder}
        readonly={input.readonly}
        title={input.title}
        type={input.type}
        value={state.input[input.id]}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        onFocus={onFocus}
        autocompleteList={input.autocompleteList}
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
        {prefix ? <PrePost><Label text={text} /></PrePost> : null}
        {inputElements}
        {!prefix ? <PrePost><Label text={text} /></PrePost> : null}
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
            onChangeState={handleSelectChange}
          />
        ) : null}
        {inputElements}
        {!prefix ? (
          <SelectMenu
            options={options}
            selectOptions={selectOptions}
            isClearable={false}
            onChangeState={handleSelectChange}
          />
        ) : null}
      </Grid>
    );
  } else if (icon) {
    inputContainer = (
      <Grid columns={gridColumns} gap="tiny">
        {prefix ? (
          <PrePost><Icon icon={icon} fixedWidth /></PrePost>
        ) : null}
        {inputElements}
        {!prefix ? (
          <PrePost><Icon icon={icon} fixedWidth /></PrePost>
        ) : null}
      </Grid>
    );
  } else if (button) {
    const buttonElement = (
      <Button
        label={button.label}
        type={button.type}
        onClick={(e) => { if (button.onClick) button.onClick(e, state); }}
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
        gap="tiny"
        id={id}
        inputTextColor={inputTextColor}
        isRequired={isRequired}
        prefix={prefix}
        text={text}
      >
        {label ? <Label size="2x" isRequired={isRequired} text={label} /> : null}
        {inputContainer}
        {helpText ? <Text size="1x" text={helpText} /> : null}
        {errorText ? <Text size="1x" text={errorText} /> : null}
      </TextInputContainer>
    </DisabledContext.Provider>
  );
}

InputBlock.propTypes = {
  button: PropTypes.shape({
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
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any,
  })),
  prefix: PropTypes.bool,
  selectOptions: PropTypes.string,
  text: PropTypes.string,
  textInputs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    pattern: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    readonly: PropTypes.bool,
  })),
  warning: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
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
  onBlur: null,
  onChange: null,
  onFocus: null,
  onKeyPress: null,
  options: null,
  prefix: false,
  selectOptions: null,
  text: null,
  textInputs: {
    id: null,
    placeholder: null,
    type: null,
    pattern: null,
    title: null,
    value: null,
    readonly: false,
  },
  warning: false,
};

export default InputBlock;
