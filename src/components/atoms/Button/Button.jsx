/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import { Lighten } from "Variables";
import { DisabledContext } from "States";
import PropTypes from "prop-types";
import Tag from "atoms/Tag";
import Icon from "atoms/Icon";
import { Skeleton } from "helpers";
import Label from "atoms/Label";

/** TODO: move these to Variables */


const StyledButton = styled.button`
display: ${(props) => {
    return props.count ? "grid" : "flex";
  }};
grid-gap: ${(props) => {
    return props.count ? "1rem" : "";
  }};
grid-template-columns: ${(props) => {
    return props.count ? "auto" : "";
  }};
grid-template-areas: ${(props) => {
    return props.count ? "'icon name'" : "";
  }};
  flex: auto;
  z-index: 0;
  flex-direction: row;
  width: ${(props) => {
    return props.fullWidth ? "100%" : "auto";
  }};
  height: 100%;
  padding: ${(props) => {
    return props.buttonPadding || "0.5rem 0.7rem";
  }};
  justify-content: center;
  align-items: center;
  color: ${(props) => {
    return props.theme.palette[props.fontColor] || props.theme.text.primary;
  }};
  background-color: ${(props) => {
    return (
      props.theme.palette[props.backgroundColor] ||
      props.theme.background.default
    );
  }};
  border: ${(props) => {
    return props.border || "1px solid";
  }};
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || "";
  }};
  border-radius: ${(props) => {
    return props.borderRadius || "4px";
  }};
  font-size: ${(props) => {
    return props.labelSize || "inherit";
  }};
  font-weight: ${(props) => {
    return props.fontWeight || "400";
  }};
  cursor: pointer;
  border-bottom: ${(props) => {
    return props.borderBottom || "";
  }};
  border-bottom-color: ${(props) => {
    return props.theme.palette[props.underlineColor];
  }};
  transition: all 0.15s ease;

  &:focus,
  &:hover { 
    background-color: ${(props) => {
    return (
      props.theme.palette[props.hoverColor]);
  }};
    border-bottom: ${(props) => {
    return props.borderBottom || "";
  }};
    border-bottom-color: ${(props) => {
    return props.theme.palette[props.underlineColor];
  }};
  }

  &:empty {
    ${Skeleton};
    border: 1px solid;
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
grid-area: icon;
margin-right: 0.5em;
`;

const ButtonTag = styled(Tag)`
grid-area: icon;
margin-left: 0.5em;
`;

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
  count,
  disabled,
  htmlFor,
  fullWidth,
  icon,
  id,
  label,
  onClick,
  underlineColor,
  type,
}) {
  let backgroundColor;
  let borderBottom;
  let borderRadius;
  let hoverColor;
  let borderColor;
  let buttonColor;
  let buttonPadding;
  let fontColor;
  let fontWeight;
  let shadeColor;
  let labelSize;
  let tintColor;

  switch (color && color.toLowerCase()) {
    case "success":
      buttonColor = "success";
      fontColor = buttonColor;
      tintColor = "successTint";
      shadeColor = "successDark";
      break;
    case "warning":
      buttonColor = "warning";
      fontColor = buttonColor;
      tintColor = "warningTint";
      shadeColor = "warningDark";
      break;
    case "alert":
      buttonColor = "alert";
      fontColor = buttonColor;
      tintColor = "alertTint";
      shadeColor = "alertDark";
      break;
    case "info":
      buttonColor = "info";
      fontColor = buttonColor;
      tintColor = "infoTint";
      shadeColor = "infoDark";
      break;
    case "primary":
      buttonColor = "primary";
      fontColor = buttonColor;
      tintColor = "primaryTint";
      shadeColor = "primaryDark";
      break;
    case "secondary":
      buttonColor = "secondary";
      fontColor = buttonColor;
      tintColor = "secondaryTint";
      shadeColor = "secondaryDark";
      break;
    case "grey":
      buttonColor = "grey";
      fontColor = buttonColor;
      break;
    default:
      buttonColor = "primary";
      fontColor = buttonColor;
      tintColor = "primaryTint";
      shadeColor = "primaryDark";
      break;
  }


  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  let borderStyle = border;
  let underline = underlineColor;
  if (type) {
    if (type.toLowerCase() === "underlined") {
      borderStyle = "2px solid transparent";
      backgroundColor = "default";
      fontWeight = "700";
      borderRadius = "2px";
      fontColor = buttonColor;
      hoverColor = tintColor;
      borderBottom = "2px solid";
      underline = fontColor;
    } else if (type.toLowerCase() === "plain") {
      borderStyle = "2px solid transparent";
      fontWeight = "700";
      hoverColor = tintColor;
      backgroundColor = "default";
    } else if (type.toLowerCase() === "round") {
      fontWeight = "700";
      borderRadius = "20px";
      backgroundColor = "default";
      hoverColor = tintColor;
    } else if (type.toLowerCase() === "roundsolid") {
      fontWeight = "700";
      borderRadius = "20px";
      fontColor = "white";
      hoverColor = shadeColor;
      borderColor = buttonColor;
      backgroundColor = buttonColor;
    } else if (type.toLowerCase() === "solid") {
      fontColor = "white";
      borderColor = buttonColor;
      hoverColor = shadeColor;
      backgroundColor = buttonColor;
    }
  } else {
    hoverColor = tintColor;
  }
  if (isDisabled) {
    fontColor = "white";
    backgroundColor = "grey4";
  }

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      border={borderStyle}
      borderBottom={borderBottom}
      htmlFor={htmlFor}
      underlineColor={underline}
      disabled={isDisabled}
      borderRadius={borderRadius}
      hoverColor={hoverColor}
      borderColor={borderColor}
      buttonColor={buttonColor}
      buttonPadding={buttonPadding}
      className={className}
      fontColor={fontColor}
      fontWeight={fontWeight}
      fullWidth={fullWidth}
      id={id}
      labelSize={labelSize}
      name={id}
      onClick={onClick}
      tabIndex={disabled ? "-1" : "1"}
      type={type}
    >
      {icon ? <ButtonIcon icon={icon} size="lg" /> : null}
      {label ? <Label letterSpacing="0.075em" weight="semibold" text={label} /> : null}
      {count ? <ButtonTag label={count} /> : null}
    </StyledButton>
  );
}

Button.propTypes = {
  border: PropTypes.string,
  htmlFor: PropTypes.node,
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
  count: PropTypes.string,
  onClick: PropTypes.func,
  underlineColor: PropTypes.string,
  type: PropTypes.oneOf(["underlined", "inline", "solid"]),
};

Button.defaultProps = {
  border: "1px solid",
  className: null,
  htmlFor: null,
  color: null,
  disabled: false,
  fullWidth: false,
  icon: null,
  count: null,
  id: null,
  label: null,
  onClick: null,
  type: null,
  underlineColor: null,
};

export default Button;
