import React, { useState } from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { colors, fonts, fontSize, shadows } from "Variables"

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.75rem;
  align-items: inherit;
`

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  background-color: ${colors.white};
  border: 1px solid ${colors.grey_40};
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${colors.success};
  }
  &:focus {
    outline: none;
  }
`

const CheckboxLabel = styled.label`
  user-select: none;
  line-height: 1.2;
  cursor: pointer;
`

function Checkbox({ ...props }) {
  const [checked, setChecked] = useState(false)
  const handleCheckboxChange = event => {
    setChecked(event.target.checked)
  }
  return (
    <CheckboxContainer>
      <CheckboxInput
        id={props.id}
        checked={checked}
        onChange={handleCheckboxChange}
        {...props}
      />
      <CheckboxLabel htmlFor={props.id}>{props.label}</CheckboxLabel>
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
