import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";
import TextInput from "atoms/TextInput";

const CalendarContainer = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || "";
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
}) {
  let inputFillColor;
  let placeholderColor;
  let inputBorderColor;
  let inputTextColor;
  let inputBorderColorHover;
  let inputSelectColor;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    inputTextColor = "disabled";
    inputFillColor = "disabled";
    inputBorderColor = "grey5";
  }

  if (error && !isDisabled) {
    inputTextColor = "alert";
    inputBorderColor = "alert";
    inputBorderColorHover = "alert";
    inputSelectColor = "grey4";
  }
  const inputTypes = type.toLowerCase() === "datetime" ? ["date", "time"] : [type.toLowerCase()];
  const inputElements = inputTypes.map((currType) => {
    return (
      <TextInput
        disabled={isDisabled}
        error={!!error}
        id={id}
        placeholderColor={placeholderColor}
        inputBorderColor={inputBorderColor}
        inputBorderColorHover={inputBorderColorHover}
        inputFillColor={inputFillColor}
        inputSelectColor={inputSelectColor}
        min={min}
        max={max}
        name={id}
        onChange={onChange}
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
      error={error}
      columns="1"
      gap="tiny"
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
  onChange: PropTypes.func,
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
