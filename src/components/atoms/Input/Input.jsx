import React from "react"
import styled, { css } from "styled-components"
import GlobalStyles from "GlobalStyles"
import PropTypes from "prop-types"
import { colors, shadows } from "Variables"
import { InputLabel, HelpText, ErrorText } from "layout/Form"
import SelectMenu from "atoms/SelectMenu"
import Button from "atoms/Button"

const TextInputContainer = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    /* 3 Inputs */
    props.threeInputs
      ? "repeat(3, 1fr)"
      : /* 2 Inputs */
      props.twoInputs
      ? "repeat(2, 1fr)"
      : /* Prefix Label (conditionals) */
      props.prefix
      ? props.postfix || props.buttonLabel
        ? "minmax(auto, auto) minmax(auto, 3fr) minmax(auto, auto)"
        : props.postSelect
        ? "minmax(auto, auto) minmax(auto, 3fr) minmax(auto, 2fr)"
        : "minmax(auto, auto) minmax(auto, 3fr)"
      : /* Postfix Select (conditionals) */
      props.preSelect
      ? props.postfix || props.buttonLabel
        ? "minmax(auto, 2fr) minmax(auto, 3fr) minmax(auto, auto)"
        : props.postSelect
        ? "minmax(auto, 2fr) minmax(auto, 3fr) minmax(auto, 2fr)"
        : "minmax(auto, 2fr) minmax(auto, 3fr)"
      : /* Postfix Label */
      props.postfix || props.buttonLabel
      ? "minmax(auto, 3fr) minmax(auto, auto)"
      : /* Postfix Select */
      props.postSelect
      ? "minmax(auto, 3fr) minmax(auto, 2fr)"
      : /* Single Input (default) */
        "repeat(1, 1fr)"};
  grid-gap: 0.35rem;
  align-content: flex-start;
  color: ${props =>
    props.error ? colors.alert : props.disabled ? colors.grey_40 : ""};
`

const PrePostLabel = styled.label`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: lowercase;
  color: ${colors.grey_60};
  background-color: ${colors.grey_light};
  border: 1px solid ${colors.grey_20};
  border-bottom: 1px solid ${colors.grey_20};
  border-radius: 4px;
  padding: 0.25rem 1rem;
  white-space: nowrap;
`

const TextInput = styled.input`
  border: 1px solid ${colors.grey_20};
  border-bottom: 1px solid ${colors.grey_20};
  border-color: ${props => (props.error ? colors.alert : props.slider ? colors.white : "")};
  border-radius: ${props => (props.isRound ? "10rem !important" : "")};
  background-color: ${props => (props.error ? colors.alert_tint : "")};
  caret-color: ${props => (props.error ? colors.alert : "")};
  min-height: 2.75rem;
  padding: ${props => (props.isRound ? "0.75rem 1rem" : props.slider ? "0rem .8rem" : "0.5rem 0.75rem")};

  ::placeholder {
    color: ${props => (props.error ? colors.alert : props.slider ? colors.success :  "")};
    // font-weight: ${props => (props.slider ? "bold" : "normal")};
    font-size: ${props => (props.slider ? "11px" : null )};
  }
  &:hover {
    border: 1px solid ${colors.grey_40};
    border-color: ${props => (props.error ? colors.alert : props.slider ? colors.grey_20 : "")};
    }
  }
  &:focus {
    background-color: ${props => (props.error ? colors.alert_tint : "")};
    border-color: ${props => (props.error ? colors.alert : props.slider ? colors.grey_20 : colors.success)};
    color: ${props => (props.slider ? colors.success : null )};
    font-size: ${props => (props.slider ? "11px" : null )};
    ::placeholder {
      color: ${props => (props.error ? colors.alert : props.slider? colors.success : colors.grey_60)};
    }
    ::selection {
      background-color: ${props => (props.error ? colors.alert : "")};
      
    }
  }
`

function Input({
  id,
  type,
  pattern,
  value,
  inputLabel, // Label prop
  placeholder,
  helpText,
  isRequired, // Label prop
  disabled,
  isRound,
  slider,
  twoInputs,
  id_2,
  type_2,
  value_2,
  pattern_2,
  placeholder_2,
  threeInputs,
  id_3,
  type_3,
  value_3,
  pattern_3,
  placeholder_3,
  prefix,
  postfix,
  preSelect,
  postSelect,
  buttonLabel,
  isPrimary, // Button prop
  error,
  errorText,
  style,
  ...props
}) {
  return (
    <TextInputContainer
      id={id}
      isRequired={isRequired}
      disabled={disabled} // input attribute
      error={error}
      prefix={prefix}
      postfix={postfix}
      preSelect={preSelect}
      postSelect={postSelect}
      buttonLabel={buttonLabel}
      twoInputs={twoInputs} // 2 inputs in a row
      threeInputs={threeInputs} // 3 inputs in a row
      style={style}
    >
      {/* Input Label */}
      <InputLabel inputLabel={inputLabel} isRequired={isRequired} />
      {/* Prefix Label (conditional) */}
      {prefix ? <PrePostLabel>{prefix}</PrePostLabel> : null}
      {/* Prefix Select Menu (conditional) */}
      {preSelect ? (
        <SelectMenu
          displayInline={true} // Grid Override
          inputLabel={null}
          name="Choose"
          isClearable={false}
          options={preSelect}
          defaultValue={preSelect[0]}
        />
      ) : null}
      <TextInput
        id={id} // input attribute
        name={id} // input attribute
        type={type} // input attribute
        slider={slider}
        value={value} // input attribute
        placeholder={placeholder} // input attribute
        pattern={pattern} // input attribute
        disabled={disabled} // input attribute
        error={error}
        isRound={isRound}
        {...props}
      />
      {/* Column 2 (conditional) */}
      {twoInputs || threeInputs ? (
        <TextInput
          id={id_2} // input attribute
          name={id_2} // input attribute
          type={type_2} // input attribute
          value={value_2} // input attribute
          placeholder={placeholder_2} // input attribute
          pattern={pattern_2} // input attribute
          disabled={disabled} // input attribute
          error={error}
          isRound={isRound}
          {...props}
        />
      ) : null}
      {/* Column 3 (conditional) */}
      {threeInputs ? (
        <TextInput
          id={id_3} // input attribute
          name={id_3} // input attribute
          type={type_3} // input attribute
          value={value_3} // input attribute
          placeholder={placeholder_3} // input attribute
          pattern={pattern_3} // input attribute
          disabled={disabled} // input attribute
          error={error}
          isRound={isRound}
          {...props}
        />
      ) : null}
      {/* Postfix (conditional) */}
      {postfix ? <PrePostLabel>{postfix}</PrePostLabel> : null}
      {/* Postfix Button (conditional) */}
      {buttonLabel ? (
        <Button buttonLabel={buttonLabel} buttonPrimary={true} />
      ) : null}
      {/* Postfix Select Menu (conditional) */}
      {postSelect ? (
        <SelectMenu
          displayInline={true} // Grid Override
          inputLabel={null}
          name="Choose"
          isClearable={false}
          options={postSelect}
          defaultValue={postSelect[0]}
        />
      ) : null}
      {/* Help Text */}
      {helpText ? <HelpText helpText={helpText} /> : null}
      {/* Error Message (required) */}
      {error ? <ErrorText errorText={errorText} /> : null}
    </TextInputContainer>
  )
}

Input.defaultProps = {
  id: "",
  type: "text",
  pattern: "alpha",
  placeholder: "Placeholder Text",
  disabled: false,
  error: false,
  isRound: false,
  errorText: "Error text for the Input component",
  twoInputs: false,
  placeholder_2: "Placeholder 2",
  threeInputs: false,
  placeholder_3: "Placeholder 3",
  slider: false,
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  value: PropTypes.string,
  inputLabel: PropTypes.string,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  isRound: PropTypes.bool,
  twoInputs: PropTypes.bool,
  id_2: PropTypes.string,
  type_2: PropTypes.string,
  value_2: PropTypes.string,
  pattern_2: PropTypes.string,
  placeholder_2: PropTypes.string,
  threeInputs: PropTypes.bool,
  id_3: PropTypes.string,
  type_3: PropTypes.string,
  value_3: PropTypes.string,
  pattern_3: PropTypes.string,
  placeholder_3: PropTypes.string,
  prefix: PropTypes.string,
  postfix: PropTypes.string,
  preSelect: PropTypes.array,
  postSelect: PropTypes.array,
  buttonLabel: PropTypes.string,
  error: PropTypes.bool,
  slider: PropTypes.bool,
  errorText: PropTypes.string,
  style: PropTypes.string
}

export { Input as default }
