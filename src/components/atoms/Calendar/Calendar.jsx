/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import { DisabledContext } from "States";
import Label from "atoms/Label";
import Text from "base/Typography";
import TextInput from "atoms/TextInput";

const CalendarContainer = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || props.theme.text.primary;
  }};
`;

function Calendar({
  className,
  disabled,
  error,
  helpText,
  id,
  label,
  isRequired,
  max,
  min,
  pattern,
  type,
  value,
  onChange,
  warning,
  onBlur,
  onFocus,
  date,
  time,
}) {
  let inputFillColor;
  let placeholderColor;
  let inputBorderColor;
  let inputTextColor;
  let inputBorderColorHover;
  let inputSelectColor;
  let errorText;
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    inputTextColor = "disabled";
    inputFillColor = "disabled";
    inputBorderColor = "grey5";
  } else if (error) {
    inputTextColor = "alert";
    inputBorderColor = "alert";
    inputBorderColorHover = "alert";
    inputSelectColor = "grey4";
    if (typeof error === "string") errorText = error;
  } else if (warning) {
    inputTextColor = "warning";
    inputBorderColor = "warning";
    inputBorderColorHover = "warning";
    inputSelectColor = "grey4";
    errorText = warning;
  }

  // datetime might have different props to use
  // if date/time prop is not passed, uses value/onChange/etc props
  const inputProps = {
    date: {
      value,
      onChange,
      onFocus,
      onBlur,
      ...date,
    },
    time: {
      value,
      onChange,
      onFocus,
      onBlur,
      ...time,
    },
  };
  const inputTypes =
    type.toLowerCase() === "datetime" ? ["date", "time"] : [type.toLowerCase()];
  const inputElements = inputTypes.map((currType) => {
    return (
      <TextInput
        key={`${currType}-${id}`}
        disabled={isDisabled}
        error={!!error}
        warning={!!warning}
        id={id}
        placeholderColor={placeholderColor}
        inputBorderColor={inputBorderColor}
        inputBorderColorHover={inputBorderColorHover}
        inputFillColor={inputFillColor}
        inputSelectColor={inputSelectColor}
        min={min}
        max={max}
        name={id}
        onChange={inputProps[currType].onChange}
        pattern={pattern}
        type={currType}
        value={inputProps[currType].value}
        onBlur={inputProps[currType].onBlur}
        onFocus={inputProps[currType].onFocus}
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
      error={error}
      columns="1"
      gap="tiny"
      id={id}
      inputTextColor={inputTextColor}
      isRequired={isRequired}
    >
      {label ? <Text size="overline" isRequired={isRequired} text={label} /> : null}
      {inputContainer}
      {helpText ? <Text size="underline" text={helpText} /> : null}
      {errorText ? <Text size="underline" text={errorText} /> : null}
    </CalendarContainer>
  );
}

Calendar.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  warning: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  /** Sets or returns the value of the max attribute of the date field */
  max: PropTypes.string,
  /** Sets or returns the value of the min attribute of the date field */
  min: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  pattern: PropTypes.string,
  type: PropTypes.oneOf(["date", "time", "datetime"]),
  value: PropTypes.string,
  date: PropTypes.shape({}),
  time: PropTypes.shape({}),
};

Calendar.defaultProps = {
  className: null,
  disabled: null,
  error: null,
  helpText: null,
  id: null,
  label: null,
  onChange: null,
  isRequired: false,
  max: null,
  min: null,
  pattern: null,
  type: "date",
  value: null,
  onBlur: () => { },
  onFocus: () => { },
  warning: null,
  date: {},
  time: {},
};

export default Calendar;
