/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import { Lighten, Darken } from "Variables";
import { DisabledContext } from "States";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import { Skeleton } from "helpers";
import Label from "base/Label";

/** TODO: move these to Variables */

const StyledButton = styled.button`
  display: flex;
  flex: auto;
  flex-direction: column;
  width: ${props => {
    return props.fullWidth ? "100%" : "auto";
  }};
  height: 100%;
  padding: ${props => {
    return props.buttonPadding || "0.5rem 0.7rem";
  }};
  justify-content: center;
  align-items: center;
  color: ${props => {
    return props.theme.palette[props.fontColor] || props.theme.text.primary;
  }};
  background-color: ${props => {
    return (
      props.theme.palette[props.backgroundColor] ||
      props.theme.background.default
    );
  }};
  border: ${props => {
    return props.border || "1px solid";
  }};
  border-radius: ${props => {
    return props.borderRadius || "4px";
  }};
  font-size: ${props => {
    return props.labelSize || "inherit";
  }};
  font-weight: ${props => {
    return props.fontWeight || "400";
  }};
  overflow: hidden;
  cursor: pointer;
  border-bottom: ${props => {
    return props.borderBottom || "";
  }};
  border-bottom-color: ${props => {
    return props.theme.palette[props.underlineColor];
  }};
  transition: all 0.15s ease;

  &:focus,
  &:hover {
    ${Darken};
    border-bottom: ${props => {
      return props.borderBottom || "";
    }};
    border-bottom-color: ${props => {
      return props.theme.palette[props.underlineColor];
    }};
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

// const ButtonLabel = styled.label`
//   line-height: normal;
//   font-size: inherit;
//   font-weight: inherit;
//   user-select: none;
//   cursor: pointer;
// `;

const ButtonIcon = styled(Icon)`
  margin: 0.25em 0;
`;

function Button({
  className,
  color,
  disabled,
  fullWidth,
  icon,
  id,
  label,
  onClick,
  underlineColor,
  border,
  size,
  style,
  type
}) {
  let backgroundColor;
  let borderBottom;
  let borderRadius;
  let buttonColor;
  let buttonPadding;
  let fontColor;
  let fontWeight;
  let labelSize;

  switch (color && color.toLowerCase()) {
    case "success":
      buttonColor = "success";
      fontColor = buttonColor;
      break;
    case "warning":
      buttonColor = "warning";
      fontColor = buttonColor;
      break;
    case "alert":
      buttonColor = "alert";
      fontColor = buttonColor;
      break;
    case "info":
      buttonColor = "info";
      fontColor = buttonColor;
      break;
    case "primary":
      buttonColor = "primary";
      fontColor = buttonColor;
      break;
    case "secondary":
      buttonColor = "secondary";
      fontColor = buttonColor;
      break;
    case "grey":
      buttonColor = "grey3";
      fontColor = buttonColor;
      break;
    default:
      buttonColor = "primary";
      fontColor = buttonColor;
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
      fontColor = buttonColor;
      borderBottom = "3px solid";
      underline = fontColor;
    } else if (type.toLowerCase() === "inline") {
      borderStyle = "2px solid transparent";
      fontWeight = "700";
      backgroundColor = "default";
    } else if (type.toLowerCase() === "solid") {
      fontColor = "white";
      backgroundColor = buttonColor;
    }
  }
  if (isDisabled) {
    fontColor = "white";
    backgroundColor = "grey4";
  }

  // switch (size && size.toLowerCase()) {
  //   case "small":
  //     buttonPadding = "0.4rem 0.6rem";
  //     labelSize = ".675em";
  //     break;
  //   case "large":
  //     buttonPadding = "0.6rem 0.8rem";
  //     labelSize = "1.2em";
  //     break;
  //   default:
  //     buttonPadding = ".5em 3rem";
  //     break;
  // }

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      border={borderStyle}
      borderBottom={borderBottom}
      underlineColor={underline}
      disabled={isDisabled}
      borderRadius={borderRadius}
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
      style={style}
      tabIndex={disabled ? "-1" : "1"}
      type={type}
    >
      {icon ? <ButtonIcon icon={icon} size="lg" /> : null}
      {label ? <Label weight="semibold" text={label} /> : null}
    </StyledButton>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "success",
    "warning",
    "alert",
    "info",
    "primary",
    "secondary"
  ]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "large"]),
  underlineColor: PropTypes.string,
  border: PropTypes.string,
  style: PropTypes.string,
  type: PropTypes.oneOf(["underlined", "inline", "solid"])
};

Button.defaultProps = {
  className: null,
  color: null,
  disabled: false,
  fullWidth: false,
  icon: null,
  id: null,
  label: null,
  onClick: null,
  size: null,
  style: null,
  type: null,
  underlineColor: null,
  border: null
};

export { Button as default };
