import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";

const CheckboxWrapper = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: ${(props) => {
    return props.setColumns || "repeat(auto-fit, minmax(8rem, 1fr))";
  }};
  margin-bottom: 1rem;
`;

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.75rem;
  grid-template-areas: ${(props) => {
    return props.alignInput || "";
  }};
  align-items: inherit;
  color: ${(props) => {
    return props.theme[props.checkboxColor];
  }};
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }
`;

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  grid-area: input;
  border: 1px solid;
  background-color: ${(props) => {
    return props.theme.palette[props.fillColor] || props.theme.background.default;
  }};
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.disabled;
  }};
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${(props) => {
    return props.theme.palette[props.fillColorChecked] || props.theme.palette.secondary;
  }};
    border-color: ${(props) => {
    return props.theme.palette[props.borderColorChecked] || props.theme.palette.secondary;
  }};
  }
  &:focus {
    border: 1px solid
      ${(props) => {
    return props.theme.palette.info;
  }};
    outline: none;
  }
`;

const CheckboxLabel = styled.label`
  grid-area: label;
  tab-index: 0;
  user-select: none;
  font-family: Arial;
  font-size: 13px;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

function CheckboxGroup({
  id, columns, onChange, children,
}) {
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

function Checkbox({
  id, label, type, align, checked, disabled,
}) {
  let checkboxColor;
  let fillColor;
  let borderColor;
  let fillColorChecked;
  let borderColorChecked;
  let alignInput;
  switch (type) {
    case "error":
      checkboxColor = "alert";
      fillColor = "alert";
      borderColor = checkboxColor;
      fillColorChecked = "alert";
      borderColorChecked = "alert";
      break;
    default:
      break;
  }

  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    checkboxColor = "disabled";
    fillColor = "disabled";
    borderColor = checkboxColor;
  }

  switch (align) {
    case "right":
      alignInput = "'label input'";
      break;
    default:
      alignInput = "'input label'";
      break;
  }
  return (
    <CheckboxContainer checkboxColor={checkboxColor} disabled={isDisabled} alignInput={alignInput}>
      <CheckboxInput
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
  columns: PropTypes.oneOf(["wrap (default)", "1", "2", "3", "4"]),
  children: PropTypes.node,
};

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  align: PropTypes.oneOf(["default", "right"]),
  checked: PropTypes.boolean,
  disabled: PropTypes.boolean,
};

export { Checkbox as default, CheckboxGroup };
