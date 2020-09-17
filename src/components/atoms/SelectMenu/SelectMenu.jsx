/* eslint-disable linebreak-style, react/jsx-props-no-spreading, security/detect-object-injection */
import React, {
  useContext,
  useMemo,
  useCallback,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { fonts, colors, shadows } from "Variables";
import Grid from "layout/Grid";
import Text, { Label } from "base/Typography";
import Select from "react-select";
import Creatable from "react-select/creatable";
import { Skeleton } from "helpers/Skeleton";
import { DisabledContext } from "States";
import { withOnChangeState } from "utils/hocs";

const MessageContainer = styled.section`
color: ${(props) => {
    return props.theme.text[props.messageColor] || props.theme.text.secondary;
  }};
`;

const selectStyles = {
  // Wrapper
  container: (styles) => {
    return {
      ...styles,
      fontFamily: fonts.body,
    };
  },
  // Toggle UI
  control: (styles, { isDisabled, isFocused }) => {
    let bgColor = colors.white60;
    if (!isFocused) bgColor = isDisabled ? colors.grey10 : colors.white60;
    /** TODO: Get an 'alert' border working on the select input.
     * Need to handle all standard cases (default, focus, hover, error, and disabled)
     */
    let borderColor;
    if (isDisabled) {
      borderColor = colors.grey30;
    } else if (isFocused) {
      borderColor = `${colors.navy80}!important`;
    } else {
      borderColor = colors.grey30;
    }
    return {
      ...styles,
      "minHeight": "1.875rem",
      "height": "2.4rem",
      "backgroundColor": bgColor,
      "borderColor": borderColor,
      "boxShadow": "none",
      "cursor": isDisabled ? "not-allowed" : "pointer",
      "flexWrap": "nowrap",
      "fontWeight": "normal",
      "letterSpacing": ".5px",
      ":hover": {
        borderColor: colors.grey40,
      },
    };
  },
  placeholder: (styles, { isFocused }) => {
    return {
      ...styles,
      fontFamily: fonts.body,
      color: isFocused ? colors.black : colors.black,
      fontSize: "0.875rem",
    };
  },
  // selected option
  singleValue: (styles, { isDisabled }) => {
    return {
      ...styles,
      fontFamily: fonts.body,
      opacity: isDisabled ? 0.5 : 1,
      color: colors.black,
      transition: "opacity 300ms",
      fontSize: "0.90rem",
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
      fontFamily: fonts.body,
      fontSize: "0.876rem",
      textAlign: "left",
      border: "1px solid",
      borderColor: colors.grey20,
      boxShadow: shadows.shadow0,
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
    let color = colors.black;
    if (isDisabled) {
      color = colors.grey40;
    } else if (isSelected) {
      color = colors.grey20;
    } else if (isFocused) {
      color = colors.grey110;
    }

    return {
      ...styles,
      backgroundColor: null,
      color: color,
      cursor: isDisabled ? "not-allowed" : "pointer",
    };
  },
};


const LabelWrapper = styled.section`
  color: ${(props) => {
    return props.theme.text[props.textColor] || props.theme.text.light;
  }};
  `;

const SelectMenuContainer = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.textColor] || "inherit";
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
  disabled,
  error,
  helpText,
  id,
  isClearable,
  isCreatable,
  isLoading,
  isRequired,
  isRtl,
  isSearchable,
  label,
  maxMenuHeight,
  menuPlacement,
  menuPortalTarget,
  multiSelect,
  onBlur,
  onChange,
  onChangeState, // deprecated
  onCreateOption,
  onFocus,
  options,
  placeholder,
  selectOptions,
  warning,
}) {
  const [portalTarget, setPortalTarget] = useState(null);
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let textColor;
  let errorText = "";
  let messageColor;
  if (isDisabled) {
    textColor = "disabled";
  } else if (error) {
    textColor = "alert";
    messageColor = "alert";
    if (typeof error === "string") errorText = error;
  } else if (warning) {
    messageColor = "alert";
  }

  // places drop down menu part in a portal
  useEffect(() => {
    let target = menuPortalTarget;
    // passed in a string id for the portal target
    if (typeof menuPortalTarget === "string") {
      target = document.getElementById(menuPortalTarget);
    }
    if (target) {
      setPortalTarget(target);
    }
  }, [menuPortalTarget]);

  // get validated selectedOptions in [{ value, label }] format to pass to react-select
  const selectedOptsValue = useMemo(() => {
    let selectedOpts = [];
    if (selectOptions) {
      selectedOpts = selectOptions instanceof Array ? selectOptions : [selectOptions];
      selectedOpts = options.filter((opt) => {
        if (opt.value instanceof Array) {
          for (let i = 0; i < selectedOpts.length; i++) {
            const targetOpts = multiSelect ? selectedOpts[i] : selectedOpts;
            if (
              targetOpts instanceof Array && targetOpts.length === opt.value.length
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
        }

        if (selectedOpts.length > 1 && !multiSelect) {
          // If the input would select multiple, but that is not allowed, skip it.
          return false;
        }

        return selectedOpts.includes(opt.value);
      });
    }
    return selectedOpts;
  }, [selectOptions, options]);

  const changeSelected = useCallback((pNewSelection) => {
    let newSelection = pNewSelection;
    if ((!newSelection || newSelection.length === 0) && isRequired) {
      newSelection = selectedOptsValue;
    }

    // deprecated onChangeState, selected: { value, label }
    if (onChangeState) {
      onChangeState({}, { selected: newSelection }, () => {});
    }

    // convert back to value for selectOption prop input
    let newSelectionValue;
    if (newSelection instanceof Array) {
      newSelectionValue = newSelection.map((val) => { return val.value; });
    } else {
      newSelectionValue = newSelection ? newSelection.value : undefined;
    }
    if (onChange) onChange(newSelectionValue);
  }, [selectedOptsValue, onChange, onChangeState]);

  const selectProps = {
    id: id,
    isClearable: isClearable,
    isDisabled: isDisabled,
    isLoading: isLoading,
    isMulti: multiSelect,
    isRtl: isRtl,
    isSearchable: isSearchable,
    name: id,
    maxMenuHeight: maxMenuHeight,
    menuPlacement: menuPlacement,
    onBlur: onBlur,
    onChange: changeSelected,
    onCreateOption: onCreateOption,
    onFocus: onFocus,
    options: options,
    placeholder: placeholder,
    styles: selectStyles,
    value: selectedOptsValue,
    menuPortalTarget: portalTarget,
  };
  const select = (isCreatable || onCreateOption)
    ? <Creatable {...selectProps} /> : <Select {...selectProps} />;

  return (
    <SelectMenuContainer
      columns="1"
      disabled={isDisabled} // input attribute
      gap="xs"
      isRequired={isRequired}
      textColor={textColor}
    >
      {label ? <LabelWrapper textColor={textColor}><Label size="sm" isRequired={isRequired} text={label} /></LabelWrapper> : null}
      {select}
      {helpText ? <Text size="xs" text={helpText} /> : null}
      {errorText || warning ? <MessageContainer messageColor={messageColor}><Text size="xs" text={errorText || warning} /></MessageContainer> : null}
    </SelectMenuContainer>
  );
}

const selectMenuPropTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  helpText: PropTypes.string,
  id: PropTypes.string,
  isClearable: PropTypes.bool,
  isCreatable: PropTypes.bool,
  isLoading: PropTypes.bool,
  isRequired: PropTypes.bool,
  isRtl: PropTypes.bool,
  isSearchable: PropTypes.bool,
  label: PropTypes.string,
  /** maximum height of the menu before scrolling */
  maxMenuHeight: PropTypes.number,
  /** placement of the drop down menu in relation to the control */
  menuPlacement: PropTypes.oneOf(["auto", "bottom", "top"]),
  /** portal id or html element for menu */
  menuPortalTarget: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Element)]),
  multiSelect: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onChangeState: PropTypes.func, // deprecated
  onCreateOption: PropTypes.func,
  onFocus: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    }),
  ])),
  placeholder: PropTypes.string,
  selectOptions: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.any]),
  warning: PropTypes.string,
};

const selectMenuDefaultProps = {
  disabled: null,
  error: null,
  helpText: null,
  id: null,
  isClearable: true,
  isCreatable: false,
  isLoading: false,
  isRequired: false,
  isRtl: false,
  isSearchable: true,
  label: null,
  maxMenuHeight: undefined,
  menuPlacement: undefined,
  menuPortalTarget: undefined,
  multiSelect: false,
  onBlur: null,
  onChange: null,
  onChangeState: null, // deprecated
  onCreateOption: null,
  onFocus: null,
  options: null,
  placeholder: null,
  selectOptions: null,
  warning: "",
};

SelectMenu.propTypes = selectMenuPropTypes;
SelectMenu.defaultProps = selectMenuDefaultProps;

// create select menu that keeps track of selectOptions when onChange event is invoked
const StatefulSelectMenu = withOnChangeState(SelectMenu, "selectOptions");

const SelectMenuComp = (props) => {
  // if an onChange is not passed in, the select menu will handle the state changes
  const { onChange } = props;
  return onChange ? <SelectMenu {...props} /> : <StatefulSelectMenu {...props} />;
};
// populate storybook props table
SelectMenuComp.defaultProps = selectMenuDefaultProps;
SelectMenuComp.propTypes = selectMenuPropTypes;

export default SelectMenuComp;
