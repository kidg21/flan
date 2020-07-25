/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import TextInput from "atoms/TextInput";
import { useId } from "utils/hooks";

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

  const uId = useId(id);
  const inputTypes =
    type.toLowerCase() === "datetime" ? ["date", "time"] : [type.toLowerCase()];
  const inputElements = inputTypes.map((currType) => {
    return (
      <TextInput
        disabled={disabled}
        error={error}
        helpText={helpText}
        id={`${uId}_${currType}`}
        key={`${currType}-${uId}`}
        label={label}
        max={max}
        min={min}
        name={`${uId}_${currType}`}
        onBlur={inputProps[currType].onBlur}
        onChange={inputProps[currType].onChange}
        onFocus={inputProps[currType].onFocus}
        pattern={pattern}
        type={currType}
        value={inputProps[currType].value}
        warning={warning}
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
      disabled={disabled}
      error={error}
      gap="xs"
      id={uId}
      isRequired={isRequired}
    >
      {inputContainer}
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
