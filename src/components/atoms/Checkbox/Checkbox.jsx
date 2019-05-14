import React, { useState } from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { colors, fonts, fontSize, shadows } from "Variables"

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.75rem;
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

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  border: 1px solid;
  border-color: ${props => (props.error ? colors.alert_light : colors.grey_40)};
  background-color: ${props =>
    props.disabled ? colors.grey_20 : colors.white};
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
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

const CheckboxLabel = styled.label`
  user-select: none;
  font-family: Arial;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.2;
  cursor: pointer;
`

function Checkbox({ id, label, error, disabled, ...props }) {
  return (
    <CheckboxContainer
      disabled={disabled} // input attribute>
      error={error} // input attribute>
      {...props}
    >
      <CheckboxInput
        id={id}
        disabled={disabled}
        error={error} // input attribute>
        {...props}
      />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxContainer>
  )
}

Checkbox.defaultProps = {
  id: "c1",
  label: "Checkbox Label"
}

Checkbox.propTypes = {
  /** This is the Left nav command. */
  id: PropTypes.string,
  /** This is nav Title.  It is required. */
  label: PropTypes.string.isRequired
}

export { Checkbox as default }
