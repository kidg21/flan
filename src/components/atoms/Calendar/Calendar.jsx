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
  id,
  type,
  pattern,
  value,
  inputLabel,
  isRequired,
  helpText,
  errorText,
  state,
  disabled,
  className,
}) {
  let InputType;
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
  switch (type) {
    case "date":
      InputType = (
        <Input
          disabled={isDisabled}
          id={id}
          inputBorderColor={inputBorderColor}
          inputBorderColorHover={inputBorderColorHover}
          inputFieldColor={inputFieldColor}
          inputFillColor={inputFillColor}
          inputSelectColor={inputSelectColor}
          name={id}
          pattern={pattern}
          state={state}
          type="date"
          value={value}
        />
      );
      break;
    case "time":
      InputType = (
        <Input
          disabled={isDisabled}
          id={id}
          inputBorderColor={inputBorderColor}
          inputBorderColorHover={inputBorderColorHover}
          inputFieldColor={inputFieldColor}
          inputFillColor={inputFillColor}
          inputSelectColor={inputSelectColor}
          name={id}
          pattern={pattern}
          state={state}
          type="time"
          value={value}
        />
      );
      break;
    case "datetime":
      InputType = (
        <Grid columns="2">
          <Input
            disabled={isDisabled}
            id={id}
            inputBorderColor={inputBorderColor}
            inputBorderColorHover={inputBorderColorHover}
            inputFieldColor={inputFieldColor}
            inputFillColor={inputFillColor}
            inputSelectColor={inputSelectColor}
            name={id}
            state={state}
            type="date"
            pattern={pattern}
            value={value}
          />
          <Input
            disabled={isDisabled}
            id={id}
            inputBorderColor={inputBorderColor}
            inputBorderColorHover={inputBorderColorHover}
            inputFieldColor={inputFieldColor}
            inputFillColor={inputFillColor}
            inputSelectColor={inputSelectColor}
            name={id}
            state={state}
            type="time"
            pattern={pattern}
            value={value}
          />
        </Grid>
      );
      break;
    default:
      inputBorderColor = colors.grey_20;
      inputSelectColor = colors.success;
      break;
  }
  return (
    <CalendarContainer
      className={className}
      disabled={isDisabled}
      gap="small"
      id={id}
      inputTextColor={inputTextColor}
      InputType={InputType}
      isRequired={isRequired}
    >
      {inputLabel ? <InputLabel inputLabel={inputLabel} isRequired={isRequired} /> : null}
      {InputType}
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
  pattern: null,
  state: null,
  type: "date",
  value: null,
};

export default Calendar;
