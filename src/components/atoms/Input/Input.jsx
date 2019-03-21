import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors, shadows } from "../../base/Variables/Variables";

// const Input = styled.input`
//   padding: 8px;
//   width: 30%;
//   font-size: 14px;
//   border: 1px solid #ddd;
//   border-radius: 3px;
//   transition: border .25s ease-in;
//   background: ${props => (props.Grey ? "#F2F3F4" : "white")};

//   &:focus {
//     border: DodgerBlue}
//   }
// `;

const TextInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0.5rem;
`;

const TextInputLabel = styled.label`
  grid-column: 1 / -1;
  user-select: none;
  font-size: smaller;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${props => (props.error ? "red" : "")};
  line-height: 1.4;
  cursor: pointer;
`;

const Input = styled.input.attrs({ type: "text" })`
  border: 1px solid transparent;
  border-bottom: 2px solid ${colors.grey_40};
  border-color: ${props => (props.error ? colors.alert : "")};
  background-color: ${props => (props.error ? "#f9ebeb" : "")};
  /* caret-color: ${props => (props.error ? colors.alert : "")}; */
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.25rem;
  ::placeholder {
    color: ${props => (props.error ? colors.alert : "")};
  }
  &:focus {
    /* background-color: #f1f8eb; */
    /* border: 1px solid #c8e1af; */
    background-color: ${props => (props.error ? "#f9ebeb" : "#f1f8eb")};
    border-color: ${props => (props.error ? colors.alert : colors.success)};
    /* border-bottom: 2px solid ${colors.success}; */
  }
`;

function TextInput({ ...props }) {
  return (
    <TextInputContainer>
      <TextInputLabel error={props.error}>{props.label}</TextInputLabel>
      <Input
        name={props.name}
        placeholder={props.placeholder}
        pattern="alpha"
        disabled={props.disabled}
        error={props.error}
      />
    </TextInputContainer>
  );
}

TextInput.defaultProps = {
  label: "Input Label",
  name: "Input Name",
  placeholder: "Placeholder Text",
  disabled: false,
  error: false
};

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool
  // onClick: PropTypes.func.isRequired
};

export default TextInput;
