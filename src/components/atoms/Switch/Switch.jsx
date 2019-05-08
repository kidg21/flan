import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types";

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
  height: 14px;
  transition: transform 300ms ease-in-out;
  transform: ${props =>
    props.checked ? "translateX(15px)" : "translateX(-1px)"};
`

const StyledSwitch = styled.div`
  width: 30px;
  display: block;
  height: 16px;
  border-radius: 23px;
  border: ${props =>
    props.checked ? "1px solid #94d850" : "1px solid darkgray"};
  background-image: ${props =>
    props.checked ? "linear-gradient(#75ab3f, #94d850);" : "white"};
  transition: 0.4s ease;
  cursor: pointer;
`


const Toggle = ({ checked, ...props }) => (
  <SwitchContainer>
    <HiddenSwitch checked={checked} {...props} />
    <StyledSwitch checked={checked}>
      <Circle checked={checked} {...props} />
    </StyledSwitch>
  </SwitchContainer>
)

const Switch = ({checked, id, ...props}) => {
  return (
    <label>
      <Toggle checked={checked} id={id} {...props} />
    </label>
  );
}

Switch.defaultProps = {
  id: "default",
};

Switch.propTypes = {
  id: PropTypes.string,
};


export { Switch as default };
