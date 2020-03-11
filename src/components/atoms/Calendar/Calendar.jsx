/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import TextInput from "atoms/TextInput";
import { getGuid } from "helpers";

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
        key={`${currType}-${uId}`}
        disabled={disabled}
        error={error}
        label={label}
        helpText={helpText}
        warning={warning}
        id={`${uId}_${currType}`}
        min={min}
        max={max}
        name={`${uId}_${currType}`}
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
      disabled={disabled}
      error={error}
      columns="1"
      gap="tiny"
      id={uId}
      isRequired={isRequired}
    >
      {inputContainer}
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
