/* eslint-disable no-nested-ternary */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";
import SelectMenu from "atoms/SelectMenu";
import Button from "atoms/Button";

const TextInputContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => {
    /* 3 Inputs */
    return props.threeInputs
      ? "repeat(3, 1fr)"
      : /* 2 Inputs */
      props.twoInputs
      ? "repeat(2, 1fr)"
      : /* Prefix Label (conditionals) */
      props.prefix
      ? props.postfix || props.label
        ? "minmax(auto, auto) minmax(auto, 3fr) minmax(auto, auto)"
        : props.postSelect
        ? "minmax(auto, auto) minmax(auto, 3fr) minmax(auto, 2fr)"
        : "minmax(auto, auto) minmax(auto, 3fr)"
      : /* Postfix Select (conditionals) */
      props.preSelect
      ? props.postfix || props.label
        ? "minmax(auto, 2fr) minmax(auto, 3fr) minmax(auto, auto)"
        : props.postSelect
        ? "minmax(auto, 2fr) minmax(auto, 3fr) minmax(auto, 2fr)"
        : "minmax(auto, 2fr) minmax(auto, 3fr)"
      : /* Postfix Label */
      props.postfix || props.label
      ? "minmax(auto, 3fr) minmax(auto, auto)"
      : /* Postfix Select */
      props.postSelect
      ? "minmax(auto, 3fr) minmax(auto, 2fr)"
      : /* Single Input (default) */
        "repeat(1, 1fr)";
  }};
  grid-gap: ${props => {
    return props.slider ? "0.15rem" : "0.35rem";
  }};
  align-content: flex-start;
  color: ${props => {
    return props.error ? props.theme.palette.alert : props.disabled ? props.theme.palette.disabled : "";
  }};
`;

const PrePostLabel = styled.label`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: lowercase;
  color: ${(props) => {
    return props.theme.text.primary; }};
  background-color: ${(props) => {
    return props.theme.divider; }};
  border: 1px solid ${(props) => {
    return props.theme.divider; }};
  border-bottom: 1px solid ${(props) => {
    return props.theme.divider; }};
  border-radius: 4px;
  padding: 0.25rem 1rem;
  white-space: nowrap;
`;

const TextInput = styled.input`
  border: 1px solid ${props => {
    return props.theme.palette.border}};
  border-bottom: 1px solid ${props => {
    return props.theme.palette.border}};
  border-color: ${props => {
    return props.error ? props.theme.palette.alert : "";
  }};
  border-radius: ${props => {
    return props.isRound ? "10rem !important" : "";
  }};
  caret-color: ${props => {
    return props.error ? props.theme.palette.alert : "";
  }};
  min-height: 2.75rem;
  padding: ${props => {
    return props.isRound ? "0.75rem 1rem" : "0.5rem 0.75rem";
  }};

  ::placeholder {
    color: ${props => {
      return props.error ? props.theme.palette.alert : "";
    }};
  }
  &:hover {
    border: 1px solid ${props => { return props.theme.palette.border;}}
    border-color: ${props => {
      return props.error ? props.theme.palette.alert : "";
    }};
    }
  }
  &:focus {
    background-color: ${props => {
      return props.error ? props.theme.palette.alertLight : "";
    }};
    border-color: ${props => {
      return props.error ? props.theme.palette.alert : props.theme.palette.successLight;
    }};
    ::placeholder {
      color: ${props => {
        return props.error ? props.theme.palette.alert : props.theme.palette.border;
      }};
    }
    ::selection {
      background-color: ${props => {
        return props.error ? props.theme.palette.alert : "";
      }};
      
    }
  }
`;

function InputBlock({
  id,
  type,
  pattern,
  value,
  label, // Label prop
  placeholder,
  helpText,
  disabled,
  isRequired,
  isRound,
  twoInputs,
  id_2,
  type_2,
  value_2,
  pattern_2,
  placeholder_2,
  threeInputs,
  id_3,
  type_3,
  value_3,
  pattern_3,
  placeholder_3,
  prefix,
  postfix,
  preSelect,
  postSelect,
  buttonLabel,
  error,
  style,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  return (
    <DisabledContext.Provider value={isDisabled}>
      <TextInputContainer
        id={id}
        isRequired={isRequired}
        disabled={isDisabled} // input attribute
        error={error}
        prefix={prefix}
        postfix={postfix}
        preSelect={preSelect}
        postSelect={postSelect}
        label={buttonLabel}
        twoInputs={twoInputs} // 2 inputs in a row
        threeInputs={threeInputs} // 3 inputs in a row
        style={style}
      >
        {/* Input Label */}
        {label ? <InputLabel isRequired={isRequired} label={label} /> : null}
        {/* Prefix Label (conditional) */}
        {prefix ? <PrePostLabel>{prefix}</PrePostLabel> : null}
        {/* Prefix Select Menu (conditional) */}
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
        <TextInput
          id={id} // input attribute
          name={id} // input attribute
          type={type} // input attribute
          value={value} // input attribute
          placeholder={placeholder} // input attribute
          pattern={pattern} // input attribute
          disabled={isDisabled} // input attribute
          error={error}
          isRound={isRound}
        />
        {/* Column 2 (conditional) */}
        {twoInputs || threeInputs ? (
          <TextInput
            id={id_2} // input attribute
            name={id_2} // input attribute
            type={type_2} // input attribute
            value={value_2} // input attribute
            placeholder={placeholder_2} // input attribute
            pattern={pattern_2} // input attribute
            disabled={isDisabled} // input attribute
            error={error}
            isRound={isRound}
          />
        ) : null}
        {/* Column 3 (conditional) */}
        {threeInputs ? (
          <TextInput
            id={id_3} // input attribute
            name={id_3} // input attribute
            type={type_3} // input attribute
            value={value_3} // input attribute
            placeholder={placeholder_3} // input attribute
            pattern={pattern_3} // input attribute
            disabled={isDisabled} // input attribute
            error={error}
            isRound={isRound}
          />
        ) : null}
        {/* Postfix (conditional) */}
        {postfix ? <PrePostLabel>{postfix}</PrePostLabel> : null}
        {/* Postfix Button (conditional) */}
        {buttonLabel ? <Button label={buttonLabel} /> : null}
        {/* Postfix Select Menu (conditional) */}
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
        {/* Help Text */}
        {helpText ? <HelpText>{helpText}</HelpText> : null}
        {/* Error Message (required) */}
        {typeof error === "string" && !isDisabled ? <ErrorText>{error}</ErrorText> : null}
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
  isRound: PropTypes.bool,
  twoInputs: PropTypes.bool,
  id_2: PropTypes.string,
  type_2: PropTypes.string,
  value_2: PropTypes.string,
  pattern_2: PropTypes.string,
  placeholder_2: PropTypes.string,
  threeInputs: PropTypes.bool,
  id_3: PropTypes.string,
  type_3: PropTypes.string,
  value_3: PropTypes.string,
  pattern_3: PropTypes.string,
  placeholder_3: PropTypes.string,
  prefix: PropTypes.string,
  postfix: PropTypes.string,
  preSelect: PropTypes.array,
  postSelect: PropTypes.array,
  buttonLabel: PropTypes.string,
  error: PropTypes.bool,
  style: PropTypes.string,
};

export { InputBlock as default };
