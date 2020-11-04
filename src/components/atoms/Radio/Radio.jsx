/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext, PointerEventsContext } from "States";
import Text, { Label } from "base/Typography";
import Grid from "layout/Grid";

const RadioWrapper = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || "inherit";
  }};
  &:last-child {
    margin-bottom: 1rem;
  }
`;

const RadioContainer = styled.div`
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
  pointer-events: ${(props) => {
    return props.disabled || props.readonly ? "none" : props.mouseEvents;
  }};
  line-height: initial;
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    user-select: none;
  }
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  grid-area: input;
  border: 1px solid;
  background-color: ${(props) => {
    return (
      props.theme.palette[props.fillColor] || props.theme.background.default
    );
  }};
  border-color: ${(props) => {
    return props.theme.palette[props.outlineColor] || props.theme.palette.neutral80;
  }};
  width: 1rem;
  height: 1rem;
  margin-top: 1px;
  border-radius: 100%;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    border: 0.32em solid ${(props) => {
    return (
      props.theme.palette.selected
    );
  }};
  &:before {
    margin: 0 -0.1em 0em 0;
    width: 0.89em;
    height: 0.89em;
    border-radius: 100%;
    display: inline-block;
    content: "";
  }
  }
  &:focus {
    border-color: ${(props) => {
    return (
      props.theme.palette[props.outlineColor] || props.theme.palette.selected
    );
  }};
    outline: none;
  }
`;

const InputGroup = styled(Grid)`
  grid-template-columns: ${(props) => {
    return props.setColumns || "";
  }};
`;

function Radio({
  align,
  checked,
  disabled,
  error,
  id,
  inputTextColor,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  size,
  value,
}) {
  let fillColor;
  let fillColorChecked;
  let gridAreas;
  let gridColumns;
  let gridGap;
  let _inputTextColor = inputTextColor;
  let outlineColor;
  let tabIndex;
  if (!label) {
    gridColumns = "1fr";
    gridGap = "0";
  }
  const isAncestorDisabled = useContext(DisabledContext);
  const pointerEvents = useContext(PointerEventsContext);
  const isDisabled = typeof disabled === "boolean" ? disabled : isAncestorDisabled;
  if (isDisabled) {
    fillColor = "neutral40";
    fillColorChecked = "neutral40";
    _inputTextColor = "disabled";
    outlineColor = "neutral80";
    tabIndex = "-1";
  } else if (error) {
    fillColor = "alert60";
    fillColorChecked = "alert60";
    _inputTextColor = "alert";
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
    <RadioContainer
      gridAreas={gridAreas}
      disabled={isDisabled}
      gridColumns={gridColumns}
      gridGap={gridGap}
      inputTextColor={_inputTextColor}
      mouseEvents={pointerEvents}
    >
      <RadioInput
        checked={checked}
        fillColor={fillColor}
        fillColorChecked={fillColorChecked}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        outlineColor={outlineColor}
        tabIndex={tabIndex}
        value={value}
      />
      {label ? <Label htmlFor={id} size={size} text={label} /> : null}
    </RadioContainer>
  );
}

function RadioGroup({
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
  inputTextColor,
}) {
  let _inputTextColor = inputTextColor;
  let errorText;
  const isAncestorDisabled = useContext(DisabledContext);
  const isDisabled = typeof disabled === "boolean" ? disabled : isAncestorDisabled;
  if (!isDisabled) {
    if (error) {
      _inputTextColor = "alert";
      if (typeof error === "string") errorText = error;
    }
  }

  return (
    <RadioWrapper
      disabled={isDisabled}
      columns="1"
      inputTextColor={_inputTextColor}
      id={id}
    >
      {label ? (
        <Label size="sm" isRequired={isRequired} text={label} />
      ) : null}
      {helpText ? <Text size="xs" text={helpText} /> : null}
      <InputGroup columns={columns}>
        {children || data.map((item) => {
          return (
            <Radio
              align={align}
              disabled={item.disabled || isDisabled}
              error={!!error}
              id={item.id}
              key={item.id}
              label={item.label}
              name={item.name}
              onChange={onChange}
              value={item.value}
            />
          );
        })}
      </InputGroup>
      {errorText ? <Text size="xs" text={errorText} /> : null}
    </RadioWrapper>
  );
}

Radio.propTypes = {
  align: PropTypes.oneOf(["left", "right"]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  id: PropTypes.string,
  inputTextColor: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  /** The name property sets or returns the value of the name attribute of a radio button.
   * You define radio button groups with the name property (radio buttons with the same name belong to the same group). */
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  /** The value property sets or returns the value of the value attribute of the radio button.
   * Define different values for radio buttons in the same group, to identify (on the server side) which one was checked.  */
  value: PropTypes.string,
};

Radio.defaultProps = {
  align: "left",
  checked: null,
  disabled: false,
  error: false,
  id: null,
  inputTextColor: null,
  label: null,
  name: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  size: "sm",
  value: undefined,
};

RadioGroup.propTypes = {
  align: PropTypes.oneOf(["left", "right"]),
  children: PropTypes.node,
  columns: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]),
  data: PropTypes.arrayOf(PropTypes.shape({
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
  })),
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string,
  inputTextColor: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

RadioGroup.defaultProps = {
  align: "left",
  children: null,
  columns: null,
  data: [],
  disabled: false,
  error: null,
  helpText: null,
  id: null,
  inputTextColor: null,
  isRequired: false,
  label: null,
  onChange: null,
};

export { Radio as default, RadioGroup };
