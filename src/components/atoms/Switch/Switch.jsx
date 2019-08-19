import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;
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
`;

const Circle = styled.div`
  position: absolute;
  z-index: 1;
  background: ${(props) => { return (props.checked ? "white" : "white"); }};
  border: ${(props) => { return props.checked ? "1px solid #75ab3f" : "1px solid darkgray"; }};
  border-radius: 40px;
  width: 15px;
  line-height: normal;
  height: 14px;
  transition: transform 300ms ease-in-out;
  transform: ${(props) => { return props.checked ? "translateX(15px)" : "translateX(-1px)"; }};
`;

const StyledSwitch = styled.div`
  width: 30px;
  display: block;
  height: 16px;
  border-radius: 23px;
  border: ${(props) => { return props.checked ? "1px solid #94d850" : "1px solid darkgray"; }};
  background-image: ${(props) => { return props.checked ? "linear-gradient(#75ab3f, #94d850);" : "white"; }};
  transition: 0.4s ease;
  cursor: pointer;
`;

const Toggle = ({ checked, ...props }) => {
  const [isChecked, setChecked] = useState(checked);

  const { onChange, ...remainingProps } = props;
  function onClick(e) {
    setChecked((state) => { return !state; });
    e.preventDefault();
    if (onChange) onChange(e);
  }

  return (
    <SwitchContainer>
      <HiddenSwitch checked={isChecked} onClick={onClick} {...remainingProps} />
      <StyledSwitch checked={isChecked}>
        <Circle checked={isChecked} {...remainingProps} />
      </StyledSwitch>
    </SwitchContainer>
  );
};

Toggle.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

const Switch = ({ checked, id, ...props }) => {
  return (
    <label>
      <Toggle checked={checked} id={id} {...props} />
    </label>
  );
};

Switch.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
};

export default Switch;
