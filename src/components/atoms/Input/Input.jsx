import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { HelpText, ErrorText } from "../../layout/Form/Form"
import SelectMenu from "../SelectMenu"
import { colors, shadows } from "../../../attributes/Variables/Variables"

const TextInputContainer = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.threeInputs
      ? "repeat(3, 1fr)"
      : props.twoInputs
      ? "repeat(2, 1fr)"
      : props.prefix
      ? "minmax(auto, auto) minmax(auto, 3fr)"
      : props.postfix
      ? "minmax(auto, 3fr) minmax(auto, auto)"
      : props.preSelect
      ? "minmax(auto, 2fr) minmax(auto, 3fr)"
      : props.postSelect
      ? "minmax(auto, 3fr) minmax(auto, 2fr)"
      : "repeat(1, 1fr)"};
  grid-gap: 0.35rem;
  align-content: flex-start;
  color: ${props => (props.disabled ? colors.grey_40 : "")};
  /* margin-bottom: 0.5rem; */
`

const TextInputLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1 / -1;
  user-select: none;
  font-size: smaller;
  font-weight: 700;
  color: ${props => (props.disabled ? colors.grey_40 : "")};
  color: ${props => (props.error ? colors.alert : "")};
  cursor: pointer;
  &:after {
    content: "*";
    display: ${props => (props.required ? "" : "none")};
    line-height: 0;
    font-size: 1.5rem;
    color: ${colors.alert};
  }
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
  border-bottom: 1px solid ${colors.grey_20};
  padding: 0.25rem 0.5rem;
  white-space: nowrap;
`

const TextInput = styled.input.attrs({ type: "text" })`
  border: 1px solid ${colors.grey_20};
  border-bottom: 1px solid ${colors.grey_20};
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

function Input({ helpText, errorText, ...props }) {
  return (
    <TextInputContainer
      name={props.name} // input attribute
      placeholder={props.placeholder} // input attribute
      pattern="alpha" // input attribute
      disabled={props.disabled} // input attribute
      helpText={helpText}
      required={props.required}
      prefix={props.prefix}
      preSelect={props.preSelect}
      postfix={props.postfix}
      postSelect={props.postSelect}
      error={props.error}
      twoInputs={props.twoInputs} // 2 inputs in a row
      threeInputs={props.threeInputs} // 3 inputs in a row
    >
      <TextInputLabel {...props}>{props.label}</TextInputLabel>
      {/* Prefix Label (conditional) */}
      {props.prefix ? <PrePostLabel>{props.prefix}</PrePostLabel> : null}
      {/* Prefix Select Menu (conditional) */}
      {props.preSelect ? (
        <SelectMenu
          displayBlock={true} // Grid Override
          label={null}
          name="Choose"
          isClearable={false}
          options={props.preOptions}
          defaultValue={props.preOptions[0]}
        />
      ) : null}
      <TextInput {...props} />
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
          displayBlock={true} // Grid Override
          label={null}
          name="Choose"
          isClearable={false}
          options={props.postOptions}
          defaultValue={props.postOptions[0]}
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
  label: "Input Label",
  name: "Input Name",
  placeholder: "Placeholder Text",
  placeholder_2: "Placeholder 2",
  placeholder_3: "Placeholder 3",
  required: false,
  disabled: false,
  error: false,
  errorText: "Error text for the Input component",
  twotwoInputs: false,
  threeInputs: false,
  preSelect: false,
  preOptions: [
    { value: "sir", label: "Sir" },
    { value: "madam", label: "Madam" },
    { value: "my lord", label: "My Lord" }
  ],
  postSelect: false,
  postOptions: [
    { value: "com", label: ".com" },
    { value: "org", label: ".org" },
    { value: "gov", label: ".gov" }
  ]
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.string,
  postfix: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  twoInputs: PropTypes.bool,
  threeInputs: PropTypes.bool,
  preSelect: PropTypes.string,
  preOptions: PropTypes.array,
  postSelect: PropTypes.string,
  postOptions: PropTypes.array
}

export { Input as default }
