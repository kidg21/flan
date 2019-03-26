import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { HelpText, ErrorText } from "../../layout/Form/Form";
import { colors, shadows } from "../../../attributes/Variables/Variables";

const TextInputContainer = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.three
      ? "repeat(3, 1fr)"
      : props.two
      ? "repeat(2, 1fr)"
      : props.prefix
      ? "minmax(auto, 1fr) minmax(auto, 3fr)"
      : props.postfix
      ? "minmax(auto, 3fr) minmax(auto, 1fr)"
      : "repeat(1, 1fr)"};
  grid-gap: 0.35rem;
  margin-bottom: 0.5rem;
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
  color: ${props => (props.error ? colors.alert : "")};
  cursor: pointer;
  &:after {
    content: "*";
    display: ${props => (props.required ? "" : "none")};
    height: 1rem;
    font-size: 1.5rem;
    color: ${colors.alert};
  }
`;

const PrePostLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: small;
  letter-spacing: 1px;
  text-transform: lowercase;
  color: ${colors.grey_80};
  background-color: ${colors.grey_light};
  border: 1px solid ${colors.grey_40};
  padding: 0 0.5rem;
  white-space: nowrap;
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
    <TextInputContainer
      name={props.name}
      placeholder={props.placeholder}
      pattern="alpha"
      required={props.required}
      prefix={props.prefix}
      postfix={props.postfix}
      disabled={props.disabled}
      error={props.error}
      two={props.two}
      three={props.three}
    >
      <TextInputLabel {...props}>{props.label}</TextInputLabel>
      {props.prefix ? <PrePostLabel>{props.pre_label}</PrePostLabel> : null}
      <TextInput {...props} />
      {props.two || props.three ? (
        <TextInput {...props} placeholder={props.placeholder_2} />
      ) : null}
      {props.three ? (
        <TextInput {...props} placeholder={props.placeholder_3} />
      ) : null}
      {props.postfix ? <PrePostLabel>{props.post_label}</PrePostLabel> : null}
      {helpText ? <HelpText helpText={helpText} /> : null}
      {props.error ? <ErrorText errorText={errorText} /> : null}
    </TextInputContainer>
  );
}

// function Input_2_Column({ helpText, errorText, ...props }) {
//   return (
//     <TextInputContainer two>
//       <TextInputLabel error={props.error} required={props.required}>
//         {props.label}
//       </TextInputLabel>
//       <TextInput
//         name={props.name}
//         placeholder={props.placeholder}
//         pattern="alpha"
//         disabled={props.disabled}
//         error={props.error}
//       />
//       <TextInput
//         name={props.name}
//         placeholder={props.placeholder}
//         pattern="alpha"
//         disabled={props.disabled}
//         error={props.error}
//       />
//       {helpText ? <HelpText helpText={helpText} /> : null}
//       {props.error ? <ErrorText errorText={errorText} /> : null}
//     </TextInputContainer>
//   );
// }

// function Input_3_Column({ helpText, errorText, ...props }) {
//   return (
//     <TextInputContainer three>
//       <TextInputLabel error={props.error} required={props.required}>
//         {props.label}
//       </TextInputLabel>
//       <TextInput
//         name={props.name}
//         placeholder={props.placeholder}
//         pattern="alpha"
//         disabled={props.disabled}
//         error={props.error}
//       />
//       <TextInput
//         name={props.name}
//         placeholder={props.placeholder}
//         pattern="alpha"
//         disabled={props.disabled}
//         error={props.error}
//       />
//       <TextInput
//         name={props.name}
//         placeholder={props.placeholder}
//         pattern="alpha"
//         disabled={props.disabled}
//         error={props.error}
//       />
//       {helpText ? <HelpText helpText={helpText} /> : null}
//       {props.error ? <ErrorText errorText={errorText} /> : null}
//     </TextInputContainer>
//   );
// }

Input.defaultProps = {
  two: false,
  three: false,
  label: "Input Label",
  name: "Input Name",
  placeholder: "Placeholder Text",
  placeholder_2: "Placeholder 2",
  placeholder_3: "Placeholder 3",
  prefix: false,
  pre_label: "Pre",
  postfix: false,
  post_label: "Post",
  required: false,
  disabled: false,
  error: false,
  helpText: "Help text for the Input component",
  errorText: "Error text for the Input component"
};

Input.propTypes = {
  two: PropTypes.bool,
  three: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.bool,
  pre_label: PropTypes.string.isRequired,
  postfix: PropTypes.bool,
  post_label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool
};

// Input_2_Column.defaultProps = Input.defaultProps;
// Input_2_Column.propTypes = Input.defaultProps;

// Input_3_Column.defaultProps = Input.defaultProps;
// Input_3_Column.propTypes = Input.defaultProps;

export {
  Input as default
  // Input_2_Column,
  // Input_3_Column
  // Input_Prefix,
  // Input_Postfix
};
