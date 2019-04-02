import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { fonts, colors, shadows } from "../../../attributes/Variables/Variables"
import { HelpText, ErrorText } from "../../layout/Form/Form"
import Select from "react-select"

const selectStyles = {
  // Wrapper
  container: (styles, { isDisabled, isFocused, isSelected, ...props }) => ({
    ...styles,
    fontFamily: fonts.data
  }),
  // Toggle UI
  control: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isFocused
      ? "#f1f8eb"
      : isDisabled
      ? colors.grey_20
      : colors.white,
    borderColor: isFocused ? colors.success + "!important" : colors.grey_20,
    borderBottomColor: colors.grey_40,
    fontWeight: "700",
    letterSpacing: "2px",
    minHeight: "2.75rem",
    ":hover": {
      borderColor: colors.success
    },
    boxShadow: "none"
  }),
  placeholder: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontFamily: fonts.data,
    color: isFocused ? colors.success : colors.grey_60,
    letterSpacing: "1px",
    fontWeight: 400
  }),
  // selected option
  singleValue: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    opacity: isDisabled ? 0.5 : 1,
    transition: "opacity 300ms"
  }),
  // 'X' to clear current selection
  clearIndicator: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: isFocused ? colors.success : colors.grey_60
  }),
  // pipe
  indicatorSeparator: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isDisabled ? colors.grey_40 : colors.grey_20
  }),
  // down arrow
  dropdownIndicator: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: isFocused ? colors.success : colors.grey_60
  }),
  // multi element background
  multiValue: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontWeight: "bold",
    letterSpacing: "1px"
  }),
  // multi element label background
  multiValueLabel: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: colors.grey_80
  }),
  // multi element 'x' background
  multiValueRemove: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    ":hover": {
      backgroundColor: colors.alert,
      color: colors.white
    },
    color: colors.grey_60
  }),
  // options menu
  menu: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontFamily: fonts.data,
    letterSpacing: "1px",
    margin: ".25rem 0",
    boxShadow: shadows.dropShadow
  }),
  // Menu Options
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? colors.success
        : isFocused
        ? colors.anchor
        : null,
      color: isDisabled
        ? colors.grey_40
        : isSelected
        ? colors.white
        : isFocused
        ? colors.white
        : colors.grey_80,
      cursor: isDisabled ? "not-allowed" : "default"
    }
  }
}

const TextInputContainer = styled.div`
  /* display: grid; */
  display: ${props => (props.displayBlock ? "inline-block" : "grid")};
  grid-template-columns: ${props =>
    props.threeInputs
      ? "repeat(3, 1fr)"
      : props.twoInputs
      ? "repeat(2, 1fr)"
      : props.prefix
      ? "minmax(auto, auto) minmax(auto, 3fr)"
      : props.postfix
      ? "minmax(auto, 3fr) minmax(auto, auto)"
      : "repeat(1, 1fr)"};
  grid-gap: 0.35rem;
  align-content: flex-start;
  color: ${props => (props.disabled ? colors.grey_40 : "")};
`

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
`

const SelectMenu = ({ helpText, errorText, ...props }) => (
  <TextInputContainer
    name={props.name}
    placeholder={props.placeholder}
    required={props.required}
    error={props.error}
    displayBlock={props.displayBlock}
  >
    <TextInputLabel {...props}>{props.label}</TextInputLabel>
    <Select
      {...props}
      styles={selectStyles}
      options={props.options}
      isSearchable={props.isSearchable}
      isClearable={props.isClearable}
      isMulti={props.multiSelect}
      isDisabled={props.disabled}
      isLoading={props.isLoading}
      isRtl={props.isRtl}
    />
    {/* Help Text */}
    {helpText ? <HelpText helpText={helpText} /> : null}
    {/* Error Message (required) */}
    {props.error ? <ErrorText errorText={errorText} /> : null}
  </TextInputContainer>
)

SelectMenu.defaultProps = {
  label: "SelectMenu Label",
  name: "SelectMenu Name",
  placeholder: "Select Something...",
  required: false,
  options: [
    { value: "one", label: "Option #1" },
    { value: "two", label: "Option #2" },
    { value: "three", label: "Option #3" }
  ],
  disabled: false,
  multiSelect: false,
  error: false,
  errorText: "Error text for the SelectMenu component",
  isClearable: true,
  isSearchable: true,
  isLoading: false,
  displayBlock: false,
  isRtl: false
}

SelectMenu.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  helpText: PropTypes.string.isRequired,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  multiSelect: PropTypes.bool,
  error: PropTypes.bool,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isLoading: PropTypes.bool,
  displayBlock: PropTypes.bool,
  isRtl: PropTypes.bool
}

export default SelectMenu
