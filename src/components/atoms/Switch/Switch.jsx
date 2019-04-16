import React, { useState } from "react"
import styled from "styled-components"

const SwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`
const HiddenSwitch = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  /* clipath: inset(50%); */
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`

const Circle = styled.div`
  position: absolute;
  z-index: 1;
  background: ${props => (props.checked ? "white" : "white")};
  border: ${props =>
    props.checked ? "1px solid #75ab3f" : "1px solid darkgray"};
  border-radius: 40px;
  width: 15px;
  line-height: normal;
  height: 15px;
  transition: transform 300ms ease-in-out;
  transform: ${props =>
    props.checked ? "translateX(14px)" : "translateX(0px)"};
`

const StyledSwitch = styled.div`
  width: 30px;
  display: block;
  height: 16.5px;
  border-radius: 23px;
  border: ${props =>
    props.checked ? "1px solid #94d850" : "1px solid darkgray"};
  background-image: ${props =>
    props.checked ? "linear-gradient(#75ab3f, #94d850);" : "white"};
  transition: 0.4s ease;
  cursor: pointer;
`


const Toggle = ({ className, checked, ...props }) => (
  <SwitchContainer className={className}>
    <HiddenSwitch checked={checked} {...props} />
    <StyledSwitch checked={checked}>
      <Circle checked={checked} {...props} />
    </StyledSwitch>
  </SwitchContainer>
)

const Switch = () => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = event => {
    setChecked(event.target.checked)
  }
  return (
    <label>
      <Toggle checked={checked} onChange={handleCheckboxChange} />
    </label>
  )
}

export default Switch
