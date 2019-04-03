import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { InputLabel, HelpText, ErrorText } from "../../layout/Form/Form"
import { colors, shadows } from "../../../attributes/Variables/Variables"

const TextInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0.35rem;
  align-content: flex-start;
  color: ${props => (props.disabled ? colors.grey_40 : "")};
`

// const TextInputLabel = styled.label`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   grid-column: 1 / -1;
//   user-select: none;
//   font-size: 11px;
//   font-weight: 700;
//   letter-spacing: 1px;
//   color: ${props => (props.disabled ? colors.grey_40 : "")};
//   color: ${props => (props.error ? colors.alert : "")};
//   cursor: pointer;
//   &:after {
//     content: "*";
//     display: ${props => (props.required ? "" : "none")};
//     line-height: 0;
//     font-size: 1.5rem;
//     color: ${colors.alert};
//   }
// `

const TextInput = styled.textarea`
  border: 1px solid ${colors.grey_20};
  border-radius: 5px;
  border-bottom: 1px solid ${colors.grey_20};
  border-color: ${props => (props.error ? colors.alert : "")};
  background-color: ${props => (props.error ? "#f9ebeb" : "")};
  caret-color: ${props => (props.error ? colors.alert : "")};
  padding: 0.5rem 0.75rem;
  resize: vertical;
  ::placeholder {
    color: ${props => (props.error ? colors.alert : "")};
  }
  &:hover {
    border: 1px solid ${colors.anchor};
  }
  &:focus {
    background-color: ${props => (props.error ? "#f9ebeb" : "")};
    border-color: ${props => (props.error ? colors.alert : colors.anchor)};
    ::placeholder {
      color: ${props => (props.error ? colors.alert : colors.grey_60)};
    }
    ::selection {
      background-color: ${props =>
        props.error ? colors.alert : ""};
    }
  }
`

function Textarea({ inputLabel, isRequired, helpText, errorText, ...props }) {
  return (
    <TextInputContainer
      name={props.name} // input attribute
      placeholder={props.placeholder} // input attribute
      pattern="alpha" // input attribute
      disabled={props.disabled} // input attribute
      helpText={helpText}
      isRequired={isRequired}
      error={props.error}
    >
      <InputLabel inputLabel={inputLabel} isRequired={isRequired} />
      <TextInput {...props} />
      {/* Help Text */}
      {helpText ? <HelpText helpText={helpText} /> : null}
      {/* Error Message (required) */}
      {props.error ? <ErrorText errorText={errorText} /> : null}
    </TextInputContainer>
  )
}

Textarea.defaultProps = {
  name: "Input Name",
  placeholder: "Placeholder Text",
  disabled: false,
  error: false,
  errorText: "Error text for the Textarea component"
}

Textarea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool
}

export { Textarea as default }
