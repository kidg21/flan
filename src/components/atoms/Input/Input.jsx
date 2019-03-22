import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { HelpText, ErrorText } from "../../layout/Form/Form";
import { colors, shadows } from "../../base/Variables/Variables";

const TextInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0.35rem;
  margin-bottom: 0.5rem;
`;

// const Blob = styled.div`
//   display: ${props => (props.required ? "block" : "none")};
//   position: absolute;
//   width: 1rem;
//   height: 1rem;
//   background-color: red;
// `;
const TextInputLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1 / -1;
  user-select: none;
  font-size: smaller;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${props => (props.error ? colors.alert : "")};
  cursor: pointer;
  &:after {
    content: "*";
    /* content: ${props => (props.required ? "*" : "")}; */
    display: ${props => (props.required ? "" : "none")};
    height: 1rem;
    font-size: 1.5rem;
    color: ${colors.alert};
  }
`;

const TextInput = styled.input.attrs({ type: "text" })`
  border: 1px solid transparent;
  border-bottom: 1px solid ${colors.grey_40};
  border-color: ${props => (props.error ? colors.alert : "")};
  background-color: ${props => (props.error ? "#f9ebeb" : "")};
  caret-color: ${props => (props.error ? colors.alert : "")};
  padding: 0.5rem 0.75rem;
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

function Input({ helpText, errorText, ...props }) {
  return (
    <TextInputContainer>
      {/* <Blob /> */}
      <TextInputLabel error={props.error} required={props.required}>
        {props.label}
      </TextInputLabel>
      <TextInput
        name={props.name}
        placeholder={props.placeholder}
        pattern="alpha"
        disabled={props.disabled}
        error={props.error}
      />
      {helpText ? <HelpText helpText={helpText} /> : null}
      {props.error ? <ErrorText errorText={errorText} /> : null}
    </TextInputContainer>
  );
}

Input.defaultProps = {
  label: "Input Label",
  name: "Input Name",
  placeholder: "Placeholder Text",
  required: false,
  disabled: false,
  error: false,
  helpText: "Help text for the Input component",
  errorText: "Error text for the Input component"
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool
};

export default Input;
