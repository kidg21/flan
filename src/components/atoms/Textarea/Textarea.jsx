import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { InputLabel, HelpText, ErrorText } from "layout/Form"
import { colors, shadows } from "Variables"

const TextareaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0.35rem;
  align-content: flex-start;
  color: ${props =>
    props.error ? colors.alert : props.disabled ? colors.grey_40 : ""};
`
const TextareaInput = styled.textarea`
  border: 1px solid ${colors.grey_20};
  border-bottom: 1px solid ${colors.grey_20};
  border-radius: 5px;
  border-color: ${props => (props.error ? colors.alert : "")};
  background-color: ${props => (props.error ? colors.alert_tint : "")};
  caret-color: ${props => (props.error ? colors.alert : "")};
  padding: 0.5rem 0.75rem;
  resize: vertical;
  ::placeholder {
    color: ${props => (props.error ? colors.alert : "")};
  }
  &:hover {
    border: 1px solid ${colors.anchor};
    border-color: ${props => (props.error ? colors.alert : "")};
  }
  &:focus {
    background-color: ${props => (props.error ? colors.alert_tint : "")};
    border-color: ${props => (props.error ? colors.alert : colors.anchor)};
    ::placeholder {
      color: ${props => (props.error ? colors.alert : colors.grey_60)};
    }
    ::selection {
      background-color: ${props => (props.error ? colors.alert : "")};
    }
  }
`

function Textarea({ id, inputLabel, isRequired, pattern, placeholder, name, type, value, helpText, error, disabled, errorText }) {
  return (
    <TextareaContainer
      id={id}
      disabled={disabled} // input attribute
      helpText={helpText}
      isRequired={isRequired}
      error={error}
    >
      <InputLabel inputLabel={inputLabel} isRequired={isRequired} />
      <TextareaInput
        name={name} // input attribute
        type={type} // input attribute
        value={value} // input attribute
        placeholder={placeholder} // input attribute
        pattern={pattern}
      />
      {/* Help Text */}
      {helpText ? <HelpText helpText={helpText} /> : null}
      {/* Error Message (required) */}
      {error ? <ErrorText errorText={errorText} /> : null}
    </TextareaContainer>
  )
}

Textarea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool
}

export { Textarea as default }
