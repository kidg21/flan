import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import Grid from "layout/Grid";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";

const CalendarContainer = styled(Grid)`
  /* display: grid;
  grid-gap: 0.35rem;
  align-content: flex-start; */
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
  caret-color: ${(props) => {
    return props.inputCaretColor || "";
  }};
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  resize: vertical;
  ::placeholder {
    color: ${(props) => {
    return props.placeholderColor || "";
  }};
  }
  &:hover {
    border-color: ${(props) => {
    return props.inputBorderColorHover || colors.grey_40;
  }};
    }
  }
  &:focus {
    border-color: ${(props) => {
    return props.inputBorderColorHover || colors.success;
  }};
  /* ::-webkit-datetime-edit-day-field:focus,
::-webkit-datetime-edit-month-field:focus,
::-webkit-datetime-edit-year-field:focus, */
    ::selection {
      background-color: ${(props) => {
    return props.inputSelectColor || "";
  }};
      color: ${(props) => {
    return props.inputTextColor || colors.white;
  }};
    }
  }
`;

function Calendar({
  id,
  date,
  time,
  type,
  pattern,
  value,
  helpText,
  label,
  // inputLabel,
  isRequired,
  placeholder,
  // helpText,
  // errorText,
  state,
  disabled,
  // children,
  className,
}) {
  let InputType;
  let inputFillColor;
  let inputBorderColor;
  let inputTextColor;
  let inputBorderColorHover;
  let inputCaretColor;
  let placeholderColor;
  let inputSelectColor;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    inputTextColor = colors.grey_40;
    inputFillColor = colors.grey_20;
    inputBorderColor = colors.grey_20;
    placeholderColor = colors.grey_40;
  }
  switch (state) {
    case "error":
      inputTextColor = colors.alert;
      inputFillColor = colors.alert_tint;
      inputBorderColor = colors.alert_light;
      inputBorderColorHover = colors.alert;
      inputCaretColor = colors.alert;
      placeholderColor = colors.alert_light;
      inputSelectColor = colors.alert;
      break;
    default:
      inputBorderColor = colors.grey_20;
      inputSelectColor = colors.success;
      break;
  }
  switch (type) {
    case "date":
      InputType = (
        <Input
          id={id}
          name={id}
          type="date"
          state={state}
          disabled={isDisabled}
          inputFillColor={inputFillColor}
          inputBorderColor={inputBorderColor}
          inputBorderColorHover={inputBorderColorHover}
          placeholderColor={placeholderColor}
          inputCaretColor={inputCaretColor}
          inputSelectColor={inputSelectColor}
        />
      );
      break;
    case "time":
      InputType = (
        <Input
          id={id}
          name={id}
          type="time"
          state={state}
          disabled={isDisabled}
          inputFillColor={inputFillColor}
          inputBorderColor={inputBorderColor}
          inputBorderColorHover={inputBorderColorHover}
          placeholderColor={placeholderColor}
          inputCaretColor={inputCaretColor}
          inputSelectColor={inputSelectColor}
        />
      );
      break;
    case "datetime":
      InputType = (
        <Grid columns="2">
          <Input
            id={id}
            name={id}
            type="date"
            state={state}
            disabled={isDisabled}
            inputFillColor={inputFillColor}
            inputBorderColor={inputBorderColor}
            inputBorderColorHover={inputBorderColorHover}
            placeholderColor={placeholderColor}
            inputCaretColor={inputCaretColor}
            inputSelectColor={inputSelectColor}
          />
          <Input
            id={id}
            name={id}
            type="time"
            state={state}
            disabled={isDisabled}
            inputFillColor={inputFillColor}
            inputBorderColor={inputBorderColor}
            inputBorderColorHover={inputBorderColorHover}
            placeholderColor={placeholderColor}
            inputCaretColor={inputCaretColor}
            inputSelectColor={inputSelectColor}
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
      id={id}
      gap="small"
      disabled={isDisabled}
      InputType={InputType}
      inputTextColor={inputTextColor}
    >
      {label ? <InputLabel inputLabel={label} isRequired={isRequired} /> : null}
      {InputType}
      {helpText ? <HelpText helpText={helpText} /> : null}
    </CalendarContainer>
  );
}

Calendar.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["date", "type", "datetime"]),
};

Calendar.defaultProps = {
  id: null,
  type: "date",
};

export default Calendar;
