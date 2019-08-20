import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import { DisabledContext } from "States";

const RadioContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.5rem;
  align-items: inherit;
  color: ${props => {
    return props.error ? colors.alert : "";
  }};
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    color: ${colors.grey_40};
  }
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  border: 1px solid;
  border-color: ${props => {
    return props.error ? colors.alert_light : colors.grey_40;
  }};
  background-color: ${props => {
    return props.disabled ? colors.grey_20 : colors.white;
  }};
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${props => {
      return props.error ? colors.alert_tint : colors.success_light;
    }};
    border-color: ${props => {
      return props.error ? colors.alert_light : colors.success;
    }};
  }
  &:focus {
    border: 1px solid ${colors.anchor};
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

function Radio({ id, name, label, value, error, onChange, checked, disabled }) {
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
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
