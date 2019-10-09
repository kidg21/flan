import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Lighten, Darken } from "Variables";
import { DisabledContext } from "States";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";

/** TODO: move these to Variables */

const StyledButton = styled.button`
  display: flex;
  flex: auto;
  flex-direction: column;
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
    return props.theme.palette[props.backgroundColor] || props.theme.background.default;
  }};
  border: ${(props) => {
    return props.noBorder ? "0px solid" : "1px solid";
  }};
  border-radius: 4px;
  font-size: ${(props) => {
    return props.labelSize || "inherit";
  }};
  font-weight: 600;
  letter-spacing: 1px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    ${Darken}
  }

  &:active {
    ${Lighten}
  }

  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }
`;

const ButtonLabel = styled.label`
  line-height: normal;
  font-size: inherit;
  font-weight: inherit;
  user-select: none;
  cursor: pointer;
`;

const ButtonIcon = styled(Icon)`
  margin: 0.25em 0;
`;

function Button({
  id,
  label,
  icon,
  color,
  noBorder,
  type,
  size,
  fullWidth,
  disabled,
  onClick,
  style,
  className,
}) {
  let buttonColor;
  let fontColor;
  let backgroundColor;
  let buttonPadding;
  let labelSize;
  switch (color) {
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
    case "disabled":
      buttonColor = "disabled";
      fontColor = buttonColor;
      break;
    // case "grey":
    //     buttonColor = "grey";
    //     fontColor = buttonColor;
    //     break;
    case "alert":
      buttonColor = "alert";
      fontColor = buttonColor;
      break;
    default:
      buttonColor = "primary";
      fontColor = buttonColor;
      break;
  }
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    fontColor = "white";
    backgroundColor = "grey3";
  } else if (type && type.toLowerCase() === "solid") {
    fontColor = "white";
    backgroundColor = buttonColor;
  }

  switch (size) {
    case "small":
      buttonPadding = "0.4rem 0.6rem";
      labelSize = ".8em";
      break;
    case "large":
      buttonPadding = "0.6rem 0.8rem";
      labelSize = "1.2em";
      break;
    default:
      break;
  }
  return (
    <StyledButton
      id={id}
      name={id}
      fullWidth={fullWidth}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
      noBorder={noBorder}
      buttonColor={buttonColor}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      buttonPadding={buttonPadding}
      labelSize={labelSize}
      style={style}
      className={className}
    >
      {icon ? <ButtonIcon icon={icon} type={fontColor} size="lg" /> : null}
      {label ? <ButtonLabel>{label}</ButtonLabel> : null}
    </StyledButton>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.string,
  color: PropTypes.oneOf(["success", "warning", "alert", "info", "primary", "secondary"]),
  size: PropTypes.oneOf(["small", "large"]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.string,
};

Button.defaultProps = {
  id: null,
  icon: null,
  type: null,
  color: null,
  size: null,
  fullWidth: false,
  disabled: false,
  style: null,
};

export { Button as default };
