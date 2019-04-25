import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { colors, shadows } from "Variables"

const RadioContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.5rem;
  align-items: inherit;
`

const RadioInput = styled.input.attrs({ type: "radio" })`
  background-color: ${colors.white};
  border: 1px solid ${colors.grey_40};
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 100%;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${colors.anchor};
  }
  &:focus {
    outline: none;
  }
`

const RadioLabel = styled.label`
  user-select: none;
  font-size: smaller;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.4;
  cursor: pointer;
`

function Radio({ id, name, label, value, ...props }) {
  return (
    <RadioContainer>
      <RadioInput id={id} name={name} value={value} {...props} />
      <RadioLabel htmlFor={id}>{label}</RadioLabel>
    </RadioContainer>
  )
}

Radio.defaultProps = {
  id: "r1",
  label: "Radio Label",
  name: "radio",
  value: "1"
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
