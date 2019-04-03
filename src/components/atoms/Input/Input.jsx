import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { InputLabel, HelpText, ErrorText } from "../../layout/Form/Form"
import SelectMenu from "../SelectMenu"
import { colors, shadows } from "../../../attributes/Variables/Variables"

const TextInputContainer = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    /* 3 Inputs */
    props.threeInputs
      ? "repeat(3, 1fr)"
      : /* 2 Inputs */
      props.twoInputs
      ? "repeat(2, 1fr)"
      : /* Prefix Label (conditionals) */
      props.prefix
      ? props.postfix
        ? "minmax(auto, auto) minmax(auto, 3fr) minmax(auto, auto)"
        : props.postSelect
        ? "minmax(auto, auto) minmax(auto, 3fr) minmax(auto, 2fr)"
        : "minmax(auto, auto) minmax(auto, 3fr)"
      : /* Postfix Select (conditionals) */
      props.preSelect
      ? props.postfix
        ? "minmax(auto, 2fr) minmax(auto, 3fr) minmax(auto, auto)"
        : props.postSelect
        ? "minmax(auto, 2fr) minmax(auto, 3fr) minmax(auto, 2fr)"
        : "minmax(auto, 2fr) minmax(auto, 3fr)"
      : /* Postfix Label */
      props.postfix
      ? "minmax(auto, 3fr) minmax(auto, auto)"
      : /* Postfix Select */
      props.postSelect
      ? "minmax(auto, 3fr) minmax(auto, 2fr)"
      : /* Single Input (default) */
        "repeat(1, 1fr)"};
  grid-gap: 0.35rem;
  align-content: flex-start;
  color: ${props =>
    props.error ? colors.alert : props.disabled ? colors.grey_40 : ""};
`

const PrePostLabel = styled.label`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  // font-weight: bold;
  letter-spacing: 2px;
  text-transform: lowercase;
  color: ${colors.grey_60};
  background-color: ${colors.white};
  border: 1px solid ${colors.grey_20};
  border-bottom: 1px solid ${colors.grey_40};
  border-radius: 4px;
  padding: 0.25rem 1rem;
  white-space: nowrap;
`

const TextInput = styled.input`
  border: 1px solid ${colors.grey_20};
  border-bottom: 1px solid ${colors.grey_40};
  border-color: ${props => (props.error ? colors.alert : "")};
  background-color: ${props => (props.error ? "#f9ebeb" : "")};
  caret-color: ${props => (props.error ? colors.alert : "")};
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  ::placeholder {
    color: ${props => (props.error ? colors.alert : "")};
  }
  &:hover {
    border: 1px solid ${colors.success};
    border-color: ${props => (props.error ? colors.alert : "")};
  }
  &:focus {
    background-color: ${props => (props.error ? "#f9ebeb" : "")};
    border-color: ${props => (props.error ? colors.alert : colors.anchor)};
    ::placeholder {
      color: ${props => (props.error ? colors.alert : "")};
    }
  }
`

function Input({ inputLabel, isRequired, helpText, errorText, ...props }) {
  return (
    <TextInputContainer
      isRequired={isRequired}
      disabled={props.disabled} // input attribute
      error={props.error}
      prefix={props.prefix}
      preSelect={props.preSelect}
      postfix={props.postfix}
      postSelect={props.postSelect}
      twoInputs={props.twoInputs} // 2 inputs in a row
      threeInputs={props.threeInputs} // 3 inputs in a row
    >
      {/* Input Label */}
      <InputLabel inputLabel={inputLabel} isRequired={isRequired} />
      {/* Prefix Label (conditional) */}
      {props.prefix ? <PrePostLabel>{props.prefix}</PrePostLabel> : null}
      {/* Prefix Select Menu (conditional) */}
      {props.preSelect ? (
        <SelectMenu
          displayInline={true} // Grid Override
          inputLabel={null}
          name="Choose"
          isClearable={false}
          options={props.preSelect}
          defaultValue={props.preSelect[0]}
        />
      ) : null}
      <TextInput
        id={props.name} // input attribute
        name={props.name} // input attribute
        type={props.type} // input attribute
        value={props.value} // input attribute
        placeholder={props.placeholder} // input attribute
        pattern={props.pattern} // input attribute
        {...props}
      />
      {/* Column 2 (conditional) */}
      {props.twoInputs || props.threeInputs ? (
        <TextInput {...props} placeholder={props.placeholder_2} />
      ) : null}
      {/* Column 3 (conditional) */}
      {props.threeInputs ? (
        <TextInput {...props} placeholder={props.placeholder_3} />
      ) : null}
      {/* Postfix (conditional) */}
      {props.postfix ? <PrePostLabel>{props.postfix}</PrePostLabel> : null}
      {/* Postfix Select Menu (conditional) */}
      {props.postSelect ? (
        <SelectMenu
          displayInline={true} // Grid Override
          inputLabel={null}
          name="Choose"
          isClearable={false}
          options={props.postSelect}
          defaultValue={props.postSelect[0]}
        />
      ) : null}
      {/* Help Text */}
      {helpText ? <HelpText helpText={helpText} /> : null}
      {/* Error Message (required) */}
      {props.error ? <ErrorText errorText={errorText} /> : null}
    </TextInputContainer>
  )
}

Input.defaultProps = {
  name: "Input Name",
  type: "text",
  pattern: "alpha",
  placeholder: "Placeholder Text",
  disabled: false,
  error: false,
  errorText: "Error text for the Input component",
  twoInputs: false,
  placeholder_2: "Placeholder 2",
  threeInputs: false,
  placeholder_3: "Placeholder 3"
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.string,
  postfix: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  twoInputs: PropTypes.bool,
  placeholder_2: PropTypes.string,
  threeInputs: PropTypes.bool,
  placeholder_3: PropTypes.string,
  preSelect: PropTypes.array,
  postSelect: PropTypes.array
}

export { Input as default }
