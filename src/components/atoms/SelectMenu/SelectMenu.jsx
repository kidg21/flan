import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { fonts, colors, shadows } from "Variables";
import { InputLabel, HelpText, ErrorText } from "../../layout/Form/Form";
import Select from "react-select";

const selectStyles = {
  // Wrapper
  container: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontFamily: fonts.data
  }),
  // Toggle UI
  control: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isFocused
      ? ""
      : isDisabled
      ? colors.grey_20
      : colors.white,
    borderColor: isFocused ? colors.anchor + "!important" : colors.grey_20,
    borderBottomColor: colors.grey_20,
    fontWeight: "normal",
    letterSpacing: "1px",
    minHeight: "2.75rem",
    cursor: isDisabled ? "not-allowed" : "pointer",
    ":hover": {
      borderColor: colors.anchor
    },
    boxShadow: "none"
  }),
  placeholder: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontFamily: fonts.data,
    color: isFocused ? colors.grey_60 : colors.grey_60,
    letterSpacing: "1px",
    fontWeight: 400
  }),
  // selected option
  singleValue: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontFamily: fonts.data,
    opacity: isDisabled ? 0.5 : 1,
    transition: "opacity 300ms"
  }),
  // 'X' to clear current selection
  clearIndicator: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: isFocused ? colors.grey_40 : colors.grey_20
  }),
  // pipe
  indicatorSeparator: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isDisabled ? colors.grey_40 : colors.grey_20
  }),
  // down arrow
  dropdownIndicator: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: isFocused ? colors.grey_60 : colors.grey_60
  }),
  // multi element background
  multiValue: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontFamily: fonts.data,
    fontWeight: "normal",
    letterSpacing: "1px"
  }),
  // multi element label background
  multiValueLabel: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontFamily: fonts.data,
    color: colors.grey_80
  }),
  // multi element 'x' background
  multiValueRemove: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    ":hover": {
      backgroundColor: colors.grey_40,
      color: colors.grey_80
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
      backgroundColor: null,
      color: isDisabled
        ? colors.grey_40
        : isSelected
        ? colors.black
        : isFocused
        ? colors.anchor
        : colors.grey_80,
      cursor: isDisabled ? "not-allowed" : "pointer"
    };
  }
};

const SelectMenuContainer = styled.div`
  display: ${props => (props.displayInline ? "inline-block" : "grid")};
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
  /* color: ${props => (props.disabled ? colors.grey_40 : "")}; */
  color: ${props =>
    props.error ? colors.alert : props.disabled ? colors.grey_40 : ""};
`;
function SelectMenu({
  id,
  name,
  placeholder,
  displayInline,
  error,
  options,
  disabled,
  inputLabel,
  isRequired,
  helpText,
  isSearchable,
  isClearable,
  multiSelect,
  isLoading,
  isRtl,
  errorText
}) {
  return (
    <SelectMenuContainer
      isRequired={isRequired}
      disabled={disabled} // input attribute
      error={error}
      displayInline={displayInline}
    >
      {/* Input Label (required) */}
      <InputLabel inputLabel={inputLabel} isRequired={isRequired} />
      <Select
        id={id} // input attribute
        name={name} // input attribute
        placeholder={placeholder} // input attribute
        styles={selectStyles}
        options={options}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isMulti={multiSelect}
        isDisabled={disabled}
        isLoading={isLoading}
        isRtl={isRtl}
      />
      {/* Help Text */}
      {helpText ? <HelpText helpText={helpText} /> : null}
      {/* Error Message (required) */}
      {error ? <ErrorText errorText={errorText} /> : null}
    </SelectMenuContainer>
  );
}

SelectMenu.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  inputLabel: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  multiSelect: PropTypes.bool,
  error: PropTypes.bool,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isLoading: PropTypes.bool,
  displayInline: PropTypes.bool,
  isRtl: PropTypes.bool
};

export default SelectMenu;
