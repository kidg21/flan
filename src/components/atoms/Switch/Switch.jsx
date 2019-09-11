import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

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
`;

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
`;

const Toggle = ({ checked, onClick, onStateChange, ...props }) => {
  const [state, setState] = useState({ checked: checked || false });

  return (<SwitchContainer>
    <StyledSwitch checked={state.checked} onClick={(e) => {
      let oldState = Object.assign({}, state);
      let newState = Object.assign({}, state, { checked: !state.checked });
      setState(newState);
      if (typeof onClick === "function") {
        onClick( e);
      }
      if(typeof onStateChange === "function"){
        onStateChange(oldState, newState, setState, e);
      }
    }}>
      <Circle checked={state.checked} {...props} />
    </StyledSwitch>
  </SwitchContainer>);
};

const Switch = ({ checked, id, ...props }) => {
  return (
    <label>
      <Toggle checked={checked} id={id} {...props} />
    </label>
  );
};

Switch.propTypes = {
  id: PropTypes.string
};

export default Switch;
