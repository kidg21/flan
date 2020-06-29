/* eslint-disable linebreak-style */
/* eslint-disable complexity */
import React, { useContext } from "react";
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
    return props.theme.text[props.inputTextColor] || "";
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

const MessageContainer = styled.section`
color: ${(props) => {
    return props.theme.text[props.messageColor] || props.theme.text.secondary;
  }};
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
  onBlur,
  onChange,
  onFocus,
  onKeyPress,
  options,
  hasPrefix,
  selectOptions,
  text,
  textInputs,
  warning,
}) {
  const getValues = () => {
    let selected = null;
    if (options instanceof Array) {
      options.forEach((option) => {
        if (option.value === selectOptions) {
          selected = option;
        }
      });
    }
    return {
      input: textInputs.reduce((inputMap, input) => {
        inputMap[input.id] = input.value;
        return inputMap;
      }),
      selected: selected,
    };
  };

  function _handleTextChange(e) {
    const oldValues = getValues();
    const newValues = {
      input: {
        ...oldValues.input,
        [e.target.id]: e.target.value,
      },
      selected: oldValues.selected,
    };
    onChange(oldValues, newValues, () => { });
  }

  function _handleSelectChange(prevState, currState) {
    const oldValues = getValues();
    const newValues = { input: { ...oldValues.input }, selected: currState.selected };
    onChange(oldValues, newValues, () => { });
  }

  const { handleTextChange, handleSelectChange } = typeof onChange === "function"
    ? { handleSelectChange: _handleSelectChange, handleTextChange: _handleTextChange }
    : { handleTextChange: null, handleSelectChange: null };

  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let inputTextColor;
  let messageColor;
  let errorText;
  if (error && !isDisabled) {
    inputTextColor = "alert";
    messageColor = "alert";
    errorText = typeof error === "string" ? error : "";
  } else if (warning && !isDisabled) {
    messageColor = "alert";
    errorText = typeof warning === "string" ? warning : "";
  }
  const inputElements = textInputs.map((input) => {
    return (
      <TextInput
        autocompleteList={input.autocompleteList}
        disabled={isDisabled}
        error={!!error}
        id={input.id}
        key={input.id}
        name={input.name || input.id}
        onBlur={onBlur}
        onChange={handleTextChange}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        pattern={input.pattern}
        placeholder={input.placeholder}
        readonly={input.readonly}
        title={input.title}
        type={input.type}
        value={input.value}
        warning={!!warning}
      />
    );
  });
  let inputContainer = inputElements;
  let gridColumns;
  if (hasPrefix) {
    gridColumns = `${icon ? "auto" : "minmax(0, 1fr)"} minmax(auto, 3fr)`;
  } else {
    gridColumns = `minmax(auto, 3fr) ${icon ? "auto" : "minmax(0, 1fr)"}`;
  }
  if (inputElements.length > 1) {
    const numInputs = Math.min(inputElements.length, 3);
    inputContainer = (
      <Grid columns={numInputs} gap="xs">
        {inputElements.slice(0, numInputs)}
      </Grid>
    );
  } else if (text) {
    inputContainer = (
      <Grid columns={gridColumns} gap="xs">
        {hasPrefix ? <PrePost><Label text={text} /></PrePost> : null}
        {inputElements}
        {!hasPrefix ? <PrePost><Label text={text} /></PrePost> : null}
      </Grid>
    );
  } else if (options) {
    inputContainer = (
      <Grid columns={gridColumns} gap="xs">
        {hasPrefix ? (
          <SelectMenu
            options={options}
            selectOptions={selectOptions}
            isClearable={false}
            onChangeState={handleSelectChange}
          />
        ) : null}
        {inputElements}
        {!hasPrefix ? (
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
      <Grid columns={gridColumns} gap="xs">
        {hasPrefix ? (
          <PrePost><Icon icon={icon} fixedWidth /></PrePost>
        ) : null}
        {inputElements}
        {!hasPrefix ? (
          <PrePost><Icon icon={icon} fixedWidth /></PrePost>
        ) : null}
      </Grid>
    );
  } else if (button) {
    const buttonElement = (
      <Button
        label={button.label}
        variant={button.variant}
        onClick={(e) => { if (button.onClick) button.onClick(e, getValues()); }}
        disabled={isDisabled || button.disabled}
      />
    );
    inputContainer = (
      <Grid columns={gridColumns} gap="xs">
        {hasPrefix ? buttonElement : null}
        {inputElements}
        {!hasPrefix ? buttonElement : null}
      </Grid>
    );
  } else {
    inputContainer = (
      <Grid columns="1" gap="xs">
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
        gap="xs"
        hasPrefix={hasPrefix}
        id={id}
        inputTextColor={inputTextColor}
        isRequired={isRequired}
        text={text}
      >
        {label ? (
          <Label isRequired={isRequired} text={label} />
        ) : null}

        {inputContainer}
        {helpText ? <Text size="sm" weight="bold" text={helpText} /> : null}
        {errorText ? <MessageContainer messageColor={messageColor}><Text size="sm" weight="bold" text={errorText} /></MessageContainer> : null}
      </TextInputContainer>
    </DisabledContext.Provider>
  );
}

InputBlock.propTypes = {
  button: PropTypes.shape({
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.string,
  }),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  hasPrefix: PropTypes.bool,
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
  hasPrefix: false,
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
  selectOptions: null,
  text: null,
  textInputs: [{
    id: null,
    placeholder: null,
    type: null,
    pattern: null,
    title: null,
    value: null,
    readonly: false,
  }],
  warning: false,
};


export default InputBlock;
