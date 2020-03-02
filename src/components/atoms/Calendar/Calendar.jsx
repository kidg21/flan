/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import { DisabledContext } from "States";
import Text, { Label } from "base/Typography";
import TextInput from "atoms/TextInput";
import { getGuid } from "helpers";

const CalendarContainer = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || props.theme.text.primary;
  }};
`;

function Calendar({
  className,
  date,
  disabled,
  error,
  helpText,
  id,
  isRequired,
  label,
  max,
  min,
  onBlur,
  onChange,
  onFocus,
  pattern,
  time,
  type,
  value,
  warning,
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
    inputBorderColor = "neutral40";
  } else if (error) {
    inputTextColor = "alert";
    inputBorderColor = "alert80";
    inputBorderColorHover = "alert80";
    inputSelectColor = "neutral60";
    if (typeof error === "string") errorText = error;
  } else if (warning) {
    inputTextColor = "warning";
    inputBorderColor = "warning80";
    inputBorderColorHover = "warning80";
    inputSelectColor = "neutral60";
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

  const uId = id || getGuid();
  const inputTypes =
    type.toLowerCase() === "datetime" ? ["date", "time"] : [type.toLowerCase()];
  const inputElements = inputTypes.map((currType) => {
    return (
      <TextInput
        disabled={isDisabled}
        error={!!error}
        id={`${uId}_${currType}`}
        inputBorderColor={inputBorderColor}
        inputBorderColorHover={inputBorderColorHover}
        inputFillColor={inputFillColor}
        inputSelectColor={inputSelectColor}
        key={`${currType}-${uId}`}
        max={max}
        min={min}
        name={id}
        onBlur={inputProps[currType].onBlur}
        onChange={inputProps[currType].onChange}
        onFocus={inputProps[currType].onFocus}
        pattern={pattern}
        placeholderColor={placeholderColor}
        type={currType}
        value={inputProps[currType].value}
        warning={!!warning}
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
      columns="1"
      disabled={isDisabled}
      error={error}
      gap="tiny"
      id={uId}
      inputTextColor={inputTextColor}
      isRequired={isRequired}
    >
      {label ? <Label size="2x" isRequired={isRequired} text={label} /> : null}
      {inputContainer}
      {helpText ? <Text size="1x" text={helpText} /> : null}
      {errorText ? <Text size="1x" text={errorText} /> : null}
    </CalendarContainer>
  );
}

Calendar.propTypes = {
  className: PropTypes.string,
  date: PropTypes.shape({
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helpText: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  /** Sets or returns the value of the max attribute of the date field */
  max: PropTypes.string,
  /** Sets or returns the value of the min attribute of the date field */
  min: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  pattern: PropTypes.string,
  time: PropTypes.shape({
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
  }),
  type: PropTypes.oneOf(["date", "time", "datetime"]),
  value: PropTypes.string,
  warning: PropTypes.string,
};

Calendar.defaultProps = {
  className: null,
  date: {
    onBlur: null,
    onChange: null,
    onFocus: null,
    value: null,
  },
  disabled: null,
  error: null,
  helpText: null,
  id: null,
  isRequired: false,
  label: null,
  max: null,
  min: null,
  onBlur: () => { },
  onChange: null,
  onFocus: () => { },
  pattern: null,
  time: {
    onBlur: null,
    onChange: null,
    onFocus: null,
    value: null,
  },
  type: "date",
  value: null,
  warning: null,
};

export default Calendar;
