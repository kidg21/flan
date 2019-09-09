import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";

const RadioContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.5rem;
  align-items: inherit;
  color: ${(props) => {
    return props.error ? props.theme.alert : "";
  }};
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    color: ${(props) => {
    return props.theme.textColor;
  }};
  }
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  border: 1px solid;
  border-color: ${(props) => {
    return props.error ? props.theme.alert : props.theme.disabled;
  }};
  background-color: ${(props) => {
    return props.disabled ? props.theme.disabled : props.theme.background;
  }};
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${(props) => {
    return props.error ? props.theme.alert : props.theme.secondary;
  }};
    border-color: ${(props) => {
    return props.error ? props.theme.alert : props.theme.secondary;
  }};
  }
  &:focus {
    border: 1px solid
      ${(props) => {
    return props.theme.primary;
  }};
    outline: none;
  }
`;

const RadioLabel = styled.label`
  user-select: none;
  font-family: Arial;
  font-size: 13px;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

function Radio({
  id, name, label, value, error, onChange, checked, disabled,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  return (
    <RadioContainer
      disabled={isDisabled} // input attribute>
      error={error} // input attribute>
    >
      <RadioInput
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
        value={value}
        disabled={isDisabled}
        error={error} // input attribute>
      />
      <RadioLabel htmlFor={id}>{label}</RadioLabel>
    </RadioContainer>
  );
}
Radio.propTypes = {
  /** This is the Left nav command. */
  id: PropTypes.string,

  /** This is nav Title.  It is required. */
  label: PropTypes.string.isRequired,
  /** This is the Right nav command. */
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

export { Radio as default };
