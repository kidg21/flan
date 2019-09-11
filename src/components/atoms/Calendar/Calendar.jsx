import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";

const CalendarContainer = styled(Grid)`
  color: ${(props) => {
    return props.theme.palette[props.inputTextColor] || "";
  }};
`;

const Input = styled.input`
  border: 1px solid;
  border-color: ${(props) => {
    return props.theme.palette[props.inputBorderColor] || props.theme.divider;
  }};
  background-color: ${(props) => {
    return props.theme.palette[props.inputFillColor] || "";
  }};
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  &:hover {
    border-color: ${(props) => {
    return props.theme.palette[props.inputBorderColorHover] || props.theme.divider;
  }};
  }
  &:focus {
    border-color: ${(props) => {
    return props.theme.palette[props.inputBorderColorHover] || props.theme.palette.secondary;
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
      &:focus {
        background-color: ${(props) => {
    return props.theme.palette[props.inputSelectColor] || props.theme.palette.secondary;
  }};
      }
    }
  }
`;

function Calendar({
  className,
  disabled,
  errorText,
  helpText,
  id,
  label,
  isRequired,
  max,
  min,
  pattern,
  type,
  value,
}) {
  let inputFillColor;
  let inputBorderColor;
  let inputTextColor;
  let inputBorderColorHover;
  let inputSelectColor;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (errorText && !isDisabled) {
    inputTextColor = alert;
    inputBorderColor = alert;
    inputBorderColorHover = alert;
    inputSelectColor = alert;
  }
  const inputTypes = type.toLowerCase() === "datetime" ? ["date", "time"] : [type.toLowerCase()];
  const inputElements = inputTypes.map((currType) => {
    return (
      <Input
        disabled={isDisabled}
        id={id}
        inputBorderColor={inputBorderColor}
        inputBorderColorHover={inputBorderColorHover}
        inputFillColor={inputFillColor}
        inputSelectColor={inputSelectColor}
        min={min}
        max={max}
        name={id}
        pattern={pattern}
        type={currType}
        value={value}
      />
    );
  });

  let inputContainer = inputElements;
  if (inputTypes.length > 1) {
    inputContainer = <Grid columns="2">{inputElements}</Grid>;
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
      {label ? <InputLabel isRequired={isRequired} label={label} /> : null}
      {inputContainer}
      {helpText ? <HelpText>{helpText}</HelpText> : null}
      {errorText && !isDisabled ? <ErrorText>{errorText}</ErrorText> : null}
    </CalendarContainer>
  );
}

Calendar.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  /** Sets or returns the value of the max attribute of the date field */
  max: PropTypes.string,
  /** Sets or returns the value of the min attribute of the date field */
  min: PropTypes.string,
  pattern: PropTypes.string,
  type: PropTypes.oneOf(["date", "time", "datetime"]),
  value: PropTypes.string,
};

Calendar.defaultProps = {
  className: null,
  disabled: null,
  errorText: null,
  helpText: null,
  id: null,
  label: null,
  isRequired: false,
  max: null,
  min: null,
  pattern: null,
  type: "date",
  value: null,
};

export default Calendar;
