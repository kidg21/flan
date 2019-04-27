import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { InputLabel, HelpText, ErrorText } from "layout/Form"
import { colors, shadows } from "Variables"

const TextAreaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0.35rem;
  align-content: flex-start;
  color: ${props =>
    props.error ? colors.alert : props.disabled ? colors.grey_40 : ""};
`
const TextAreaInput = styled.textarea`
  border: 1px solid ${colors.grey_20};
  border-bottom: 1px solid ${colors.grey_20};
  border-radius: 5px;
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
      color: ${props => (props.error ? colors.alert : colors.grey_40)};
    }
    ::selection {
      background-color: ${props =>
        props.error ? colors.alert : colors.success};
    }
  }
`

function Textarea({ inputLabel, isRequired, helpText, errorText, ...props }) {
  return (
    <TextAreaContainer
      disabled={props.disabled} // input attribute
      helpText={helpText}
      isRequired={isRequired}
      error={props.error}
    >
      <InputLabel inputLabel={inputLabel} isRequired={isRequired} />
      <TextAreaInput
        id={props.name} // input attribute
        name={props.name} // input attribute
        type={props.type} // input attribute
        value={props.value} // input attribute
        placeholder={props.placeholder} // input attribute
        pattern={props.pattern}
        {...props}
      />
      {/* Help Text */}
      {helpText ? <HelpText helpText={helpText} /> : null}
      {/* Error Message (required) */}
      {props.error ? <ErrorText errorText={errorText} /> : null}
    </TextAreaContainer>
  )
}

Textarea.defaultProps = {
  name: "TextArea Name",
  pattern: "alpha",
  placeholder: "Placeholder Text",
  disabled: false,
  error: false,
  errorText: "Error text for the Text Area component"
}

Textarea.propTypes = {
  name: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool
}

export { Textarea as default };
