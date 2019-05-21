import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { colors, shadows } from "Variables"

const RadioContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.5rem;
  align-items: inherit;
  color: ${props => (props.error ? colors.alert : "")};
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    color: ${colors.grey_40};
  }
`

const RadioInput = styled.input.attrs({ type: "radio" })`
  border: 1px solid;
  border-color: ${props => (props.error ? colors.alert_light : colors.grey_40)};
  background-color: ${props =>
    props.disabled ? colors.grey_20 : colors.white};
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${props =>
      props.error ? colors.alert_tint : colors.success_tint};
    border-color: ${props =>
      props.error ? colors.alert_light : colors.success};
  }
  &:focus {
    outline: none;
  }
`

const RadioLabel = styled.label`
  user-select: none;
  font-family: Arial;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.2;
  cursor: pointer;
`

function Radio({ id, name, label, value, error, disabled }) {
  return (
    <RadioContainer
      disabled={disabled} // input attribute>
      error={error} // input attribute>
    >
      <RadioInput
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        error={error} // input attribute>
      />
      <RadioLabel htmlFor={id}>{label}</RadioLabel>
    </RadioContainer>
  )
}
Radio.propTypes = {
  /** This is the Left nav command. */
  id: PropTypes.string,

  /** This is nav Title.  It is required. */
  label: PropTypes.string.isRequired,
  /** This is the Right nav command. */
  name: PropTypes.string.isRequired,
  value: PropTypes.string
}

export { Radio as default }
