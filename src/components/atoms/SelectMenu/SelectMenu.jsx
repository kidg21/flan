import React, { useContext, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { fonts, shadows } from "Variables";
import Grid from "layout/Grid";
import { InputLabel, HelpText, ErrorText } from "layout/Form";
import Select from "react-select";
import { Skeleton } from "helpers";
import { DisabledContext } from "States";

const selectStyles = {
  // Wrapper
  container: (styles) => {
    return {
      ...styles,
      fontFamily: fonts.data,
    };
  },
  // Toggle UI
  control: (styles, { isDisabled, isFocused }) => {
    let bgColor = "";
    if (!isFocused) bgColor = isDisabled ? props.theme.palette.disabled : props.theme.background.default;

    return {
      ...styles,
      "backgroundColor": bgColor,
      "borderColor": isFocused
        ? `${props.theme.palette.successLight}!important`
        : props.theme.palette.border,
      "borderBottomColor": props.theme.palette.border,
      "fontWeight": "normal",
      "letterSpacing": ".5px",
      "minHeight": "2.75rem",
      "cursor": isDisabled ? "not-allowed" : "pointer",
      ":hover": {
        borderColor: props.theme.palette.disabled,
      },
      "boxShadow": "none",
    };
  },
  placeholder: (styles, { isFocused }) => {
    return {
      ...styles,
      fontFamily: fonts.data,
      color: isFocused ? props.theme.text.primary : props.theme.palette.border,
      letterSpacing: ".5px",
      fontWeight: 400,
    };
  },
  // selected option
  singleValue: (styles, { isDisabled }) => {
    return {
      ...styles,
      fontFamily: fonts.data,
      opacity: isDisabled ? 0.5 : 1,
      transition: "opacity 300ms",
    };
  },
  // 'X' to clear current selection
  clearIndicator: (styles, { isFocused }) => {
    return {
      ...styles,
      color: isFocused ? props.theme.text.primary : props.theme.palette.border,
    };
  },
  // pipe
  indicatorSeparator: (styles, { isDisabled }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? props.theme.text.disabled : props.theme.palette.disabled,
    };
  },
  // down arrow
  dropdownIndicator: (styles, { isFocused }) => {
    return {
      ...styles,
      color: isFocused ? props.theme.text.primary : props.theme.palette.border,
    };
  },
  // multi element background
  multiValue: (styles) => {
    return {
      ...styles,
      fontFamily: fonts.data,
      fontWeight: "normal",
      letterSpacing: "1px",
    };
  },
  // multi element label background
  multiValueLabel: (styles) => {
    return {
      ...styles,
      fontFamily: fonts.data,
      color: props.theme.palette.border,
    };
  },
  // multi element 'x' background
  multiValueRemove: (styles) => {
    return {
      ...styles,
      ":hover": {
        backgroundColor: props.theme.palette.disabled,
        color: props.theme.palette.border,
      },
      "color": props.theme.palette.border,
    };
  },
  // options menu
  menu: (styles) => {
    return {
      ...styles,
      fontFamily: fonts.data,
      textAlign: "left",
      letterSpacing: ".5px",
      margin: ".25rem 0",
      border: "1px solid",
      borderColor: props.theme.palette.border,
      boxShadow: shadows.dropShadow,
    };
  },
  // Menu Options
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    let color = props.theme.palette.primary;
    if (isDisabled) {
      color = props.theme.palette.border
    } else if (isSelected) {
      color = props.theme.text.primary
    } else if (isFocused) {
      color = props.theme.palette.success;
    }

    return {
      ...styles,
      backgroundColor: null,
      color: color,
      cursor: isDisabled ? "not-allowed" : "pointer",
    };
  },
};

const SelectMenuContainer = styled(Grid)`
  color: ${(props) => {
    let color = "";
    if (props.error) color = props.theme.palette.alert;
    else if (props.disabled) color = props.theme.palette.disabled;
    return color;
  }};
  width: 100%;
  &:empty {
    &:before {
      ${Skeleton};
      height: 1.3em;
      width: 10rem;
    }
  }
`;
function SelectMenu({
  id,
  name,
  placeholder,
  displayInline,
  options,
  selectOptions,
  disabled,
  error,
  label,
  isRequired,
  helpText,
  isSearchable,
  isClearable,
  multiSelect,
  isLoading,
  isRtl,
  onChangeState,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let selectedOpts = [];
  if (selectOptions) {
    selectedOpts = selectOptions instanceof Array ? selectOptions : [selectOptions];
    selectedOpts = options.filter((opt) => {
      if (opt.value instanceof Array) {
        for (let i = 0; i < selectedOpts.length; i++) {
          const targetOpts = multiSelect ? selectedOpts[i] : selectedOpts;
          if (targetOpts instanceof Array && targetOpts.length === opt.value.length) {
            let isMatch = true;
            for (let j = 0; j < targetOpts.length; j++) {
              if (!opt.value.includes(targetOpts[j])) {
                isMatch = false;
                break;
              }
            }
            if (isMatch) return true;
          }
        }
        return false;
      } else if (selectedOpts.length > 1 && !multiSelect) {
        // If the input would select multiple, but that is not allowed, skip it.
        return false;
      }

      return selectedOpts.includes(opt.value);
    });
  }

  const [state, setState] = useState({ selected: selectedOpts, error: error });
  function changeSelected(pNewSelection, { action }) {
    // If this would leave us with no selection, default to initial value.
    let newSelection = pNewSelection;
    if ((!newSelection || newSelection.length === 0) && isRequired) {
      if (multiSelect && action !== "clear") {
        newSelection = state.selected;
      } else {
        newSelection = selectedOpts;
      }
    }

    if (onChangeState) {
      onChangeState(state, { ...state, selected: newSelection }, setState);
    } else {
      setState({ ...state, selected: newSelection });
    }
  }

  return (
    <SelectMenuContainer
      isRequired={isRequired}
      disabled={isDisabled} // input attribute
      error={state.error !== null}
      displayInline={displayInline}
      columns="1"
      gap="small"
    >
      {label ? <InputLabel label={label} isRequired={isRequired} /> : null}
      <Select
        id={id} // input attribute
        name={name} // input attribute
        placeholder={placeholder} // input attribute
        styles={selectStyles}
        options={options}
        value={state.selected}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isMulti={multiSelect}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isRtl={isRtl}
        onChange={changeSelected}
      />
      {/* Help Text */}
      {helpText ? <HelpText>{helpText}</HelpText> : null}
      {/* Error Message (required) */}
      {state.error ? <ErrorText>{state.error}</ErrorText> : null}
    </SelectMenuContainer>
  );
}

SelectMenu.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    }),
  ])).isRequired,
  selectOptions: PropTypes.any,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  multiSelect: PropTypes.bool,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isLoading: PropTypes.bool,
  displayInline: PropTypes.bool,
  isRtl: PropTypes.bool,
  helpText: PropTypes.string,
  onChangeState: PropTypes.func,
};

SelectMenu.defaultProps = {
  id: null,
  name: null,
  placeholder: null,
  selectOptions: null,
  label: null,
  isRequired: false,
  disabled: null,
  error: null,
  multiSelect: false,
  isClearable: true,
  isSearchable: true,
  isLoading: false,
  displayInline: false,
  isRtl: false,
  helpText: null,
  onChangeState: null,
};

export default SelectMenu;
