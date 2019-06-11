import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";

const CheckboxWrapper = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: ${props =>
    props.setColumns || "repeat(auto-fit, minmax(8rem, 1fr))"};
  margin-bottom: 1rem;
`;

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.75rem;
  align-items: inherit;
  color: ${props => props.checkboxColor || ""};
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }
`;

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  border: 1px solid;
  background-color: ${props => props.fillColor || colors.white};
  border-color: ${props => props.borderColor || colors.grey_40};
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${props =>
      props.fillColorChecked || colors.success_light};
    border-color: ${props => props.borderColorChecked || colors.success};
  }
  &:focus {
    outline: none;
  }
`;

const CheckboxLabel = styled.label`
  user-select: none;
  font-family: Arial;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.2;
  cursor: pointer;
`;

function CheckboxGroup({ id, columns, onChange, children }) {
  let setColumns;
  switch (columns) {
    case "1":
      setColumns = "repeat(1, 1fr)";
      break;
    case "2":
      setColumns = "repeat(2, 1fr)";
      break;
    case "3":
      setColumns = "repeat(3, 1fr)";
      break;
    case "4":
      setColumns = "repeat(4, 1fr)";
      break;
    default:
      break;
  }
  return (
    <CheckboxWrapper id={id} onChange={onChange} setColumns={setColumns}>
      {children}
    </CheckboxWrapper>
  );
}

function Checkbox({ id, label, type, checked, error, isDisabled }) {
  let checkboxColor;
  let fillColor;
  let borderColor;
  let fillColorChecked;
  let borderColorChecked;
  switch (type) {
    case "error":
      checkboxColor = colors.alert;
      fillColor = colors.alert_tint;
      borderColor = checkboxColor;
      fillColorChecked = colors.alert_tint;
      borderColorChecked = colors.alert;
      break;
    case "disabled":
      checkboxColor = colors.grey_40;
      fillColor = colors.grey_20;
      borderColor = checkboxColor;
      isDisabled = true;
      break;
    default:
      break;
  }
  return (
    <CheckboxContainer
      checkboxColor={checkboxColor}
      error={error}
      disabled={isDisabled}
    >
      <CheckboxInput
        disabled={isDisabled}
        id={id}
        checked={checked}
        fillColor={fillColor}
        borderColor={borderColor}
        fillColorChecked={fillColorChecked}
        borderColorChecked={borderColorChecked}
      />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
}

CheckboxGroup.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  columns: PropTypes.oneOf(["wrap (default)", "1", "2"])
};

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "disabled"])
};

export { Checkbox as default, CheckboxGroup };
