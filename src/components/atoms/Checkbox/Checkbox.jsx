/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import Text, { Label } from "base/Typography";
import Grid from "layout/Grid";

const CheckboxWrapper = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || "";
  }};

  &:last-child {
    margin-bottom: 1rem;
  }
`;

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-areas: ${(props) => {
    return props.gridAreas || "";
  }};
  grid-template-columns: ${(props) => {
    return props.gridColumns || "auto 1fr";
  }};
  grid-gap: ${(props) => {
    return props.gridGap || "0.75rem";
  }};
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || props.theme.text.primary;
  }};
  line-height: initial;
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
    return (
      props.theme.palette[props.fillColor] || props.theme.background.default
    );
  }};
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.neutral80;
  }};
  width: 1rem;
  height: 1rem;
  margin-top: 1px;
  border-radius: 2px;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${(props) => {
    return (
      props.theme.palette[props.fillColorChecked]
      || props.theme.palette.selected
    );
  }};
    border-color: ${(props) => {
    return (
      props.theme.palette[props.borderColor] || props.theme.palette.selected
    );
  }};
  &:after {
    content: '✔';
    position: relative;
    display: block;
    padding-left: 2px;
    padding-top: 1px;
    font-size: 10px;
    color: white;
  }
  }
  &:focus {
    outline-color: ${(props) => {
    return (
      props.theme.palette[props.outlineColor] || props.theme.palette.selected
    );
  }};
  }
`;

const InputGroup = styled(Grid)`
  grid-template-columns: ${(props) => {
    return props.setColumns || "";
  }};
`;

function Checkbox({
  align,
  checked,
  disabled,
  error,
  id,
  label,
  onBlur,
  onChange,
  onFocus,
}) {
  let borderColor;
  let borderColorChecked;
  let fillColor;
  let fillColorChecked;
  let gridAreas;
  let gridColumns;
  let gridGap;
  let inputTextColor;
  let outlineColor;
  let tabIndex;
  if (!label) {
    gridColumns = "1fr";
    gridGap = "0";
  }
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    borderColor = "neutral80";
    fillColor = "neutral40";
    fillColorChecked = "neutral40";
    inputTextColor = "disabled";
    tabIndex = "-1";
  } else if (error) {
    borderColor = "alert80";
    borderColorChecked = "alert80";
    fillColor = "alert60";
    fillColorChecked = "alert60";
    inputTextColor = "alert";
    outlineColor = "alert60";
  }

  switch (align) {
    case "right":
      gridAreas = "'label input'";
      break;
    case "left":
    default:
      gridAreas = "'input label'";
      break;
  }
  return (
    <CheckboxContainer
      gridAreas={gridAreas}
      disabled={isDisabled}
      gridColumns={gridColumns}
      gridGap={gridGap}
      inputTextColor={inputTextColor}
    >
      <CheckboxInput
        borderColor={borderColor}
        borderColorChecked={borderColorChecked}
        checked={checked}
        fillColor={fillColor}
        fillColorChecked={fillColorChecked}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        outlineColor={outlineColor}
        tabIndex={tabIndex}
      />
      {label ? <Label htmlFor={id} text={label} /> : null}
    </CheckboxContainer>
  );
}

function CheckboxGroup({
  align,
  children,
  columns,
  data,
  disabled,
  error,
  helpText,
  id,
  isRequired,
  label,
  onChange,
}) {
  let inputTextColor;
  let errorText;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (!isDisabled) {
    if (error) {
      inputTextColor = "alert";
      if (typeof error === "string") errorText = error;
    }
  }

  return (
    <CheckboxWrapper
      columns="1"
      disabled={isDisabled}
      id={id}
      inputTextColor={inputTextColor}
    >
      {label ? (
        <Label size="sm" isRequired={isRequired} text={label} />
      ) : null}
      {helpText ? <Text size="xs" text={helpText} /> : null}
      <InputGroup columns={columns}>
        {children
          || data.map((item) => {
            return (
              <Checkbox
                align={align}
                checked={item.checked}
                disabled={item.disabled || isDisabled}
                error={!!error}
                id={item.id}
                isRequired={item.isRequired}
                key={item.id}
                label={item.label}
                onBlur={item.onBlur}
                onChange={item.onChange || onChange}
                onFocus={item.onFocus}
              />
            );
          })}
      </InputGroup>
      {errorText ? <Text size="xs" text={errorText} /> : null}
    </CheckboxWrapper>
  );
}

Checkbox.propTypes = {
  align: PropTypes.oneOf(["left", "right"]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.node,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

Checkbox.defaultProps = {
  align: "left",
  checked: null,
  disabled: false,
  error: null,
  id: null,
  label: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
};

CheckboxGroup.propTypes = {
  align: PropTypes.oneOf(["left", "right"]),
  children: PropTypes.node,
  columns: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]),
  data: PropTypes.arrayOf(PropTypes.shape({
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
  })),
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helpText: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

CheckboxGroup.defaultProps = {
  align: "left",
  children: null,
  columns: null,
  data: [],
  disabled: false,
  error: null,
  helpText: null,
  id: null,
  isRequired: false,
  label: null,
  onChange: null,
};

export { Checkbox as default, CheckboxGroup };
