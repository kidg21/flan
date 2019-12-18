/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import { Lighten, Darken } from "Variables";
import { DisabledContext } from "States";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import { Skeleton } from "helpers";
import Label from "atoms/Label";

/** TODO: move these to Variables */

const StyledButton = styled.button.attrs((props) => {
  return {
    width: props.fullWidth ? "100%" : "auto",
    padding: "0.5rem 0.7rem",
    borderRadius: "4px",
    fontSize: "inherit",
  };
})`
  display: flex;
  flex: auto;
  flex-direction: column;
  width: ${(props) => { return props.width; }};
  height: 100%;
  padding: ${(props) => { return props.padding; }};
  justify-content: center;
  align-items: center;
  color: ${(props) => { return props.theme.palette[props.fontColor] || props.theme.text.primary; }};
  background-color: ${(props) => { return props.theme.palette[props.backgroundColor] || props.theme.background.default; }};
  border: ${(props) => { return props.border; }};
  border-radius: ${(props) => { return props.borderRadius; }};
  font-size: ${(props) => { return props.fontSize; }};
  font-weight: ${(props) => { return props.fontWeight; }};
  overflow: hidden;
  cursor: pointer;
  border-bottom: ${(props) => { return props.borderBottom || ""; }};
  border-bottom-color: ${(props) => { return props.theme.palette[props.underlineColor]; }};
  transition: all 0.15s ease;

  &:focus,
  &:hover {
    ${Darken};
    border-bottom: ${(props) => { return props.borderBottom || ""; }};
    border-bottom-color: ${(props) => { return props.theme.palette[props.underlineColor]; }};
  }

  &:empty {
    ${Skeleton};
    border: 0px solid white;
    }};
  }
}

  &:active {
    ${Lighten};
  }

  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }
`;
StyledButton.displayName = "Button";

const ButtonIcon = styled(Icon)`
  margin: 0.25em 0;
`;

const buttonType = {
  success: "success",
  warning: "warning",
  alert: "alert",
  info: "info",
  secondary: "secondary",
  grey: "grey3",
  primary: "primary",
};

/**
 * ( This documentaion is written using 'JSdoc'. This method allows us to use comments written in the Component file. )
 *
 * Usage
 *
 * Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:
 *
- Dialogs
- Modal windows
- Forms
- Cards
- Toolbars
  *
  * Principles
  *
- Identifiable: Buttons should indicate that they can trigger an action.
- Findable: Buttons should be easy to find among other elements, including other buttons.
- Clear: A button’s action and state should be clear.
* */
function Button({
  border,
  className,
  color,
  disabled,
  fullWidth,
  icon,
  id,
  label,
  onClick,
  type,
}) {
  let backgroundColor;
  let borderBottom;
  const buttonColor = buttonType[color ? color.toLowerCase() : "primary"] || "primary";
  let fontColor = buttonColor;
  let fontWeight = "400";

  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let borderStyle = border;
  let underline = null;
  let noBackground = false;
  if (type) {
    if (type.toLowerCase() === "underlined") {
      borderStyle = "2px solid transparent";
      backgroundColor = "default";
      fontWeight = "700";
      borderBottom = "3px solid";
      underline = fontColor;
      noBackground = true;
    } else if (type.toLowerCase() === "inline") {
      borderStyle = "2px solid transparent";
      fontWeight = "700";
      backgroundColor = "default";
      noBackground = true;
    } else if (type.toLowerCase() === "solid") {
      fontColor = "white";
      backgroundColor = buttonColor;
    }
  }
  if (isDisabled) {
    if (noBackground) {
      fontColor = "grey4";
      if (underline) underline = fontColor;
    } else {
      fontColor = "white";
      backgroundColor = "grey4";
    }
  }

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      border={borderStyle}
      borderBottom={borderBottom}
      className={className}
      disabled={isDisabled}
      fontColor={fontColor}
      fontWeight={fontWeight}
      fullWidth={fullWidth}
      id={id}
      name={id}
      onClick={onClick}
      tabIndex={disabled ? "-1" : "1"}
      underlineColor={underline}
    >
      {icon ? <ButtonIcon icon={icon} size="lg" /> : null}
      {label ? (
        <Label letterSpacing="0.075em" weight="semibold" text={label} />
      ) : null}
    </StyledButton>
  );
}
Button.displayName = "ButtonWrapper";

Button.propTypes = {
  border: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "success",
    "warning",
    "alert",
    "info",
    "primary",
    "secondary",
  ]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["underlined", "inline", "solid"]),
};

Button.defaultProps = {
  border: "1px solid",
  className: null,
  color: "primary",
  disabled: false,
  fullWidth: false,
  icon: null,
  id: null,
  label: null,
  onClick: null,
  type: null,
};

export default Button;
