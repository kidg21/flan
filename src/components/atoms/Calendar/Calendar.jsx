import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import Grid from "layout/Grid";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";

const CalendarContainer = styled(Grid)`
  color: ${(props) => {
    return props.inputTextColor || "";
  }};
`;

const Input = styled.input`
  border: 1px solid;
  border-color: ${(props) => {
    return props.inputBorderColor || "";
  }};
  background-color: ${(props) => {
    return props.inputFillColor || "";
  }};
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  color: inherit;
  &:hover {
    border-color: ${(props) => {
    return props.inputBorderColorHover || colors.grey_40;
  }};
  }
  &:focus {
    border-color: ${(props) => {
    return props.inputBorderColorHover || colors.success;
  }};
    &::-webkit-datetime-edit-day-field,
    &::-webkit-datetime-edit-week-field,
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-year-field,
    &::-webkit-datetime-edit-hour-field,
    &::-webkit-datetime-edit-minute-field,
    &::-webkit-datetime-edit-second-field,
    &::-webkit-datetime-edit-millisecond-field,
    &::-webkit-datetime-edit-ampm-field,
    &::-webkit-datetime-edit-text {
      color: ${(props) => {
    return props.inputFieldColor || "";
  }};
      &:focus {
        background-color: ${(props) => {
    return props.inputSelectColor || "";
  }};
      }
    }
  }
  &[disabled] {
    color: ${(props) => {
    return props.inputFieldColor || "";
  }};
  }
`;

function Calendar({
  className,
  disabled,
  errorText,
  helpText,
  id,
  inputLabel,
  isRequired,
  max,
  min,
  pattern,
  state,
  type,
  value,
}) {
  let inputFillColor;
  let inputBorderColor;
  let inputTextColor;
  let inputBorderColorHover;
  let inputFieldColor;
  let inputSelectColor;
  switch (state) {
    case "error":
      inputTextColor = colors.alert;
      inputFillColor = colors.alert_tint;
      inputBorderColor = colors.alert_light;
      inputBorderColorHover = colors.alert;
      inputSelectColor = colors.alert;
      break;
    default:
      inputBorderColor = colors.grey_20;
      inputSelectColor = colors.success;
      break;
  }
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    inputTextColor = colors.grey_40;
    inputFillColor = colors.grey_20;
    inputBorderColor = colors.grey_20;
    inputFieldColor = colors.grey_40;
  }
  const inputTypes = type.toLowerCase() === "datetime" ? ["date", "time"] : [type.toLowerCase()];
  let inputElements = inputTypes.map((currType) => {
    return (
      <Input
        disabled={isDisabled}
        id={id}
        inputBorderColor={inputBorderColor}
        inputBorderColorHover={inputBorderColorHover}
        inputFieldColor={inputFieldColor}
        inputFillColor={inputFillColor}
        inputSelectColor={inputSelectColor}
        min={min}
        max={max}
        name={id}
        pattern={pattern}
        state={state}
        type={currType}
        value={value}
      />
    );
  });
  
  let inputContainer = inputElements;
  if (inputTypes.length > 1) {
    inputContainer = (
      <Grid columns="2">
        {inputElements}
      </Grid>
    );
  }
  return (
    <CalendarContainer
      className={className}
      disabled={isDisabled}
      gap="small"
      id={id}
      inputTextColor={inputTextColor}
      isRequired={isRequired}
    >
      {inputLabel ? <InputLabel inputLabel={inputLabel} isRequired={isRequired} /> : null}
      {inputContainer}
      {helpText ? <HelpText helpText={helpText} /> : null}
      {state === "error" && !disabled ? <ErrorText errorText={errorText} /> : null}
    </CalendarContainer>
  );
}

Calendar.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string,
  inputLabel: PropTypes.string,
  isRequired: PropTypes.bool,
  /** Sets or returns the value of the max attribute of the date field */
  max: PropTypes.string,
  /** Sets or returns the value of the min attribute of the date field */
  min: PropTypes.string,
  pattern: PropTypes.string,
  state: PropTypes.oneOf(["error"]),
  type: PropTypes.oneOf(["date", "time", "datetime"]),
  value: PropTypes.string,
};

Calendar.defaultProps = {
  className: null,
  disabled: null,
  errorText: null,
  helpText: null,
  id: null,
  inputLabel: null,
  isRequired: false,
  max: null,
  min: null,
  pattern: null,
  state: null,
  type: "date",
  value: null,
};

export default Calendar;
