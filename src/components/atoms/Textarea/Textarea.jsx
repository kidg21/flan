import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
// import { Grid_2, inputGrid } from "../../_helpers/Grid";
import { HelpText, ErrorText } from "../../layout/Form/Form";
import { colors, shadows } from "../../../attributes/Variables/Variables";

const TextInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0.35rem;
  align-content: flex-start;
  margin-bottom: 0.5rem;
  color: ${props => (props.disabled ? colors.grey_40 : "")};
`;

const TextInputLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1 / -1;
  user-select: none;
  font-size: smaller;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${props => (props.disabled ? colors.grey_40 : "")};
  color: ${props => (props.error ? colors.alert : "")};
  cursor: pointer;
  &:after {
    content: "*";
    display: ${props => (props.required ? "" : "none")};
    line-height: 0;
    font-size: 1.5rem;
    color: ${colors.alert};
  }
`;

const TextInput = styled.textarea`
  border: 1px solid ${colors.grey_20};
  border-radius: 5px;
  border-bottom: 1px solid ${colors.grey_40};
  border-color: ${props => (props.error ? colors.alert : "")};
  background-color: ${props => (props.error ? "#f9ebeb" : "")};
  caret-color: ${props => (props.error ? colors.alert : "")};
  padding: 0.5rem 0.75rem;
  resize: vertical;
  ::placeholder {
    color: ${props => (props.error ? colors.alert : "")};
  }
  &:focus {
    background-color: ${props => (props.error ? "#f9ebeb" : "#f1f8eb")};
    border-color: ${props => (props.error ? colors.alert : colors.success)};
    ::placeholder {
      color: ${props => (props.error ? colors.alert : colors.success)};
    }
    ::selection {
      background-color: ${props =>
        props.error ? colors.alert : colors.success};
    }
  }
`;

function Textarea({ helpText, errorText, ...props }) {
  return (
    <TextInputContainer
      name={props.name} // input attribute
      placeholder={props.placeholder} // input attribute
      pattern="alpha" // input attribute
      disabled={props.disabled} // input attribute
      helpText={helpText}
      required={props.required}
      error={props.error}
    >
      <TextInputLabel {...props}>{props.label}</TextInputLabel>
      <TextInput {...props} />
      {/* Help Text */}
      {helpText ? <HelpText helpText={helpText} /> : null}
      {/* Error Message (required) */}
      {props.error ? <ErrorText errorText={errorText} /> : null}
    </TextInputContainer>
  );
}

Textarea.defaultProps = {
  label: "Input Label",
  name: "Input Name",
  placeholder: "Placeholder Text",
  required: false,
  disabled: false,
  error: false,
  errorText: "Error text for the Input component"
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool
};

export { Textarea as default };
