/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { fonts, colors, shadows } from "Variables";
import Grid from "layout/Grid";
import Label from "atoms/Label";
import Select, { Creatable } from "react-select";
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
    let bgColor = colors.white;
    if (!isFocused) bgColor = isDisabled ? colors.greyLight : colors.white;
    /** TODO: Get an 'alert' border working on the select input.
     * Need to handle all standard cases (default, focus, hover, error, and disabled)
     */
    let borderColor;
    if (isDisabled) {
      borderColor = colors.grey20;
    } else if (isFocused) {
      borderColor = `${colors.success}!important`;
    } else {
      borderColor = colors.grey2;
    }
    return {
      ...styles,
      "backgroundColor": bgColor,
      "borderColor": borderColor,
      "boxShadow": "none",
      "cursor": isDisabled ? "not-allowed" : "pointer",
      "flexWrap": "nowrap",
      "fontWeight": "normal",
      "letterSpacing": ".5px",
      "minHeight": "2.75rem",
      ":hover": {
        borderColor: colors.grey60,
      },
    };
  },
  placeholder: (styles, { isFocused }) => {
    return {
      ...styles,
      fontFamily: fonts.data,
      color: isFocused ? colors.grey60 : colors.grey60,
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
      color: isFocused ? colors.grey40 : colors.grey20,
    };
  },
  // pipe
  indicatorSeparator: (styles, { isDisabled }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? colors.grey20 : colors.grey40,
    };
  },
  // down arrow
  dropdownIndicator: (styles, { isDisabled }) => {
    return {
      ...styles,
      color: isDisabled ? colors.grey20 : colors.grey40,
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
      color: colors.grey80,
    };
  },
  // multi element 'x' background
  multiValueRemove: (styles) => {
    return {
      ...styles,
      ":hover": {
        backgroundColor: colors.grey40,
        color: colors.grey80,
      },
      "color": colors.grey60,
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
      borderColor: colors.grey40,
      boxShadow: shadows.dropShadow,
    };
  },

  menuList: (styles) => {
    return {
      ...styles,
      backgroundColor: "",
    };
  },
  // Menu Options
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    let color = colors.grey80;
    if (isDisabled) {
      color = colors.grey40;
    } else if (isSelected) {
      color = colors.grey20;
    } else if (isFocused) {
      color = colors.black;
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
    return props.theme.text[props.textColor] || props.theme.text.primary;
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
  options,
  selectOptions,
  disabled,
  error,
  warning,
  label,
  isRequired,
  helpText,
  isSearchable,
  isClearable,
  multiSelect,
  isLoading,
  isRtl,
  onChangeState,
  onCreateOption,
  onBlur,
  onFocus,
  isCreatable,
}) {
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let textColor;
  let errorText = "";
  if (isDisabled) {
    textColor = "disabled";
  } else if (error) {
    textColor = "alert";
    errorText = error;
  } else if (warning) {
    textColor = "warning";
    errorText = warning;
  }

  let selectedOpts = [];
  if (selectOptions) {
    selectedOpts =
      selectOptions instanceof Array ? selectOptions : [selectOptions];
    selectedOpts = options.filter((opt) => {
      if (opt.value instanceof Array) {
        for (let i = 0; i < selectedOpts.length; i++) {
          const targetOpts = multiSelect ? selectedOpts[i] : selectedOpts;
          if (
            targetOpts instanceof Array &&
            targetOpts.length === opt.value.length
          ) {
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

  const [state, setState] = useState({ selected: selectedOpts });
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

  function handleCreateOption(optionName) {
    onCreateOption(optionName, (newState) => {
      setState(Object.assign({}, state, newState));
    });
  }

  const selectProps = {
    id: id,
    name: name,
    placeholder: placeholder,
    styles: selectStyles,
    options: options,
    value: state.selected,
    isSearchable: isSearchable,
    isClearable: isClearable,
    isMulti: multiSelect,
    isDisabled: isDisabled,
    isLoading: isLoading,
    isRtl: isRtl,
    onChange: changeSelected,
    onCreateOption: onCreateOption ? handleCreateOption : null,
    onBlur: onBlur,
    onFocus: onFocus,
  };
  const select = (isCreatable || onCreateOption) ?
    <Creatable {...selectProps} /> : <Select {...selectProps} />;

  return (
    <SelectMenuContainer
      isRequired={isRequired}
      textColor={textColor}
      disabled={isDisabled} // input attribute
      columns="1"
      gap="tiny"
    >
      {label ? <Label weight="bold" isRequired={isRequired} text={label} /> : null}
      {select}
      {/* Help Text */}
      {helpText ? <Label size="sm" text={helpText} /> : null}
      {/* Error Message (required) */}
      {errorText ? <Label size="sm" text={errorText} /> : null}
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
  isRtl: PropTypes.bool,
  helpText: PropTypes.string,
  onChangeState: PropTypes.func,
  onCreateOption: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  isCreatable: PropTypes.bool,
  warning: PropTypes.string,
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
  isRtl: false,
  helpText: null,
  onChangeState: null,
  onCreateOption: null,
  onBlur: null,
  onFocus: null,
  isCreatable: false,
  warning: "",
};

export default SelectMenu;
