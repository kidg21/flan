/* eslint-disable linebreak-style */
/* eslint-disable complexity */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import { InputLabel, HelpText, ErrorText } from "layout/Form";
import Grid from "layout/Grid";
import TextInput from "atoms/TextInput";

const TextInputContainer = styled(Grid)`
color: ${(props) => {
  return props.theme.text[props.inputTextColor] || "";
}};
  width: 100%;
`;

const InputGroup = styled(Grid)`
  grid-template-columns: ${(props) => {
    return props.gridColumns || "";
  }};
`;

const PrePost = styled.section`
  width: 100%;
  height: 100%;
  > * {
    width: 100%;
    height: 100%;
  }
`;

function InputBlock({
  className,
  disabled,
  error,
  helpText,
  id,
  textInputs,
  isRequired,
  label,
  onChange,
  postfix,
  prefix,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let inputTextColor;
  if (error && !disabled) {
    inputTextColor = "alert";
  }
  const inputElements = textInputs.map((input) => {
    return (
      <TextInput
        disabled={isDisabled}
        error={!!error}
        id={input.id}
        name={input.id}
        onChange={onChange}
        pattern={input.pattern}
        placeholder={input.placeholder}
        readonly={input.readonly}
        title={input.title}
        type={input.type}
        value={input.value}
      />
    );
  });
  let inputContainer = inputElements;
  if (textInputs.length === 2) {
    inputContainer = (
      <Grid columns="2" gap="tiny">
        {inputElements}
      </Grid>
    );
  } else if (textInputs.length === 3) {
    inputContainer = (
      <Grid columns="3" gap="tiny">
        {inputElements}
      </Grid>
    );
  }
  let gridColumns;
  if (prefix && !postfix) {
    gridColumns = "minmax(auto, 1fr) minmax(auto, 3fr)";
  } else if (!prefix && postfix) {
    gridColumns = "minmax(auto, 3fr) minmax(auto, 1fr)";
  } else {
    /** If neither prefix/postfix or both (unsupported) */
    gridColumns = "repeat(1, 1fr)";
  }
  return (
    <DisabledContext.Provider value={isDisabled}>
      <TextInputContainer
        className={className}
        columns="1"
        disabled={isDisabled}
        error={error}
        gap="tiny"
        id={id}
        inputTextColor={inputTextColor}
        isRequired={isRequired}
        postfix={postfix}
        prefix={prefix}
      >
        {label ? <InputLabel isRequired={isRequired} label={label} /> : null}
        <InputGroup gridColumns={gridColumns} gap="tiny">
          {prefix && !postfix ? <PrePost>{prefix}</PrePost> : null}
          {inputContainer}
          {!prefix && postfix ? <PrePost>{postfix}</PrePost> : null}
        </InputGroup>
        {helpText ? <HelpText>{helpText}</HelpText> : null}
        {typeof error === "string" && !disabled ? <ErrorText>{error}</ErrorText> : null}
      </TextInputContainer>
    </DisabledContext.Provider>
  );
}

InputBlock.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helpText: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  postfix: PropTypes.string,
  prefix: PropTypes.string,
  textInputs: PropTypes.node.isRequired,
};
InputBlock.defaultProps = {
  className: null,
  disabled: null,
  error: null,
  helpText: null,
  id: null,
  isRequired: false,
  label: null,
  onChange: null,
  placeholder: null,
  postfix: null,
  prefix: null,
};

export { InputBlock as default };
