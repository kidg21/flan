import React, { useState } from "react"
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
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 100%;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${colors.success};
    box-shadow: ${shadows.radioShadow};
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

function Radio({ ...props }) {
  const [checked, setChecked] = useState({ selectedValue: "" })
  const handleCheckboxChange = event => {
    setChecked({ selectedValue: event.target.value })
  }
  return (
    <RadioContainer>
      <RadioInput
        id={props.id}
        name={props.name}
        value={props.value}
        checked={checked.selectedValue === props.value}
        onChange={handleCheckboxChange}
        {...props}
      />
      <RadioLabel for={props.id}>{props.label}</RadioLabel>
    </RadioContainer>
  )
}

const StyledRadioContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  border: 0;
  clip: rect(0 0 0 0);
  /* clippath: inset(50%); */
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledRadioInput = styled.div`
  display: inline-block;
  width: 14px;
  border: 1px solid darkgray;
  height: 14px;
  background: ${props => (props.checked ? "dodgerblue" : "white")};
  border-radius: 30px;
  transition: all 150ms;
  cursor: pointer;
`

const StyledRadio = ({ className, checked, ...props }) => (
  <StyledRadioContainer className={className}>
    <HiddenRadio checked={checked} {...props} />
    <StyledRadioInput checked={checked} />
  </StyledRadioContainer>
)

const CustomRadio = props => {
  const [checked, setChecked] = useState(false)
  const handleCheckboxChange = event => {
    setChecked({ selectedValue: event.target.value })
  }
  return (
    <React.Fragment>
      <label>
        <StyledRadio
          checked={checked.selectedValue === props.value}
          onChange={handleCheckboxChange}
          value={props.value}
        />
        <span style={{ marginLeft: 8, fontSize: 14, fontFamily: "arial" }}>
          Label Text
        </span>
      </label>
    </React.Fragment>
  )
}

Radio.defaultProps = {
  id: "r1",
  label: "Radio Label",
  name: "radio"
}

Radio.propTypes = {
  /** This is the Left nav command. */
  id: PropTypes.string,
  /** This is nav Title.  It is required. */
  label: PropTypes.string.isRequired,
  /** This is the Right nav command. */
  name: PropTypes.string.isRequired
}

export { Radio as default, CustomRadio }
