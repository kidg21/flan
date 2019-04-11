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
      <CheckboxLabel for={props.id}>{props.label}</CheckboxLabel>
    </CheckboxContainer>
  )
}

// const StyledCheckboxContainer = styled.div`
//   display: inline-block;
//   vertical-align: middle;
// `

// const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
//   border: 0;
//   clip: rect(0 0 0 0);
//   clippath: inset(50%);
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   white-space: nowrap;
//   width: 1px;
// `

// const StyledCheckbox = styled.div`
//   display: inline-block;
//   width: 16px;
//   height: 16px;
//   border-radius: 3px;
//   background: ${props => (props.checked ? "salmon" : "papayawhip")};
//   border-radius: 3px;
//   transition: all 150ms;

//   ${HiddenCheckbox}:focus + & {
//     box-shadow: 0 0 0 3px pink;
//   }
// `

// const CheckboxCustom = ({ className, checked, ...props }) => (
//   <StyledCheckboxContainer className={className}>
//     <HiddenCheckbox checked={checked} {...props} />
//     <StyledCheckbox checked={checked} />
//   </StyledCheckboxContainer>
// )

// const CustomCheckbox = () => {
//   const [checked, setChecked] = useState(false)
//   const handleCheckboxChange = event => {
//     setChecked(event.target.checked)
//   }
//   return (
//     <React.Fragment>
//       <label>
//         <CheckboxCustom checked={checked} onChange={handleCheckboxChange} />
//         <span>Label Text</span>
//       </label>
//     </React.Fragment>
//   )
// }

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

// export { Checkbox as default, CustomCheckbox }
export { Checkbox as default };
