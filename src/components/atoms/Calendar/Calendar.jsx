import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import Grid from "layout/Grid";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";
import TextInput from "atoms/TextInput";

const CalendarContainer = styled(Grid)`
  color: ${(props) => {
    return props.inputTextColor || "";
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
}) {
  let inputFillColor;
  let inputBorderColor;
  let inputTextColor;
  let inputBorderColorHover;
  let inputSelectColor;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (error && !isDisabled) {
    inputTextColor = colors.alert;
    inputBorderColor = colors.alert_light;
    inputBorderColorHover = colors.alert_light;
    inputSelectColor = colors.alert;
  }
  const inputTypes = type.toLowerCase() === "datetime" ? ["date", "time"] : [type.toLowerCase()];
  const inputElements = inputTypes.map((currType) => {
    return (
      <TextInput
        disabled={isDisabled}
        error={!!error}
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
      error={error}
      columns="1"
      gap="small"
      id={id}
      inputTextColor={inputTextColor}
      isRequired={isRequired}
    >
      {label ? <InputLabel isRequired={isRequired} label={label} /> : null}
      {inputContainer}
      {helpText ? <HelpText>{helpText}</HelpText> : null}
      {error && !isDisabled ? <ErrorText>{error}</ErrorText> : null}
    </CalendarContainer>
  );
}

Calendar.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
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
  error: null,
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
