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
  padding: ${(props) => {
    return props.buttonPadding || "0.5rem 0.7rem";
  }};
  justify-content: center;
  align-items: center;
  color: ${(props) => {
    return props.theme[props.textColor] || props.theme.primary;
  }};
  background-color: ${(props) => {
    return props.theme[props.backgroundColor] || props.theme.background;
  }};
  border: 1px solid;
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
  id, label, icon, color, type, size, fullWidth, disabled, onClick, style,
}) {
  let buttonColor;
  let textColor;
  let backgroundColor;
  let buttonPadding;
  let labelSize;
  switch (color) {
    case "success":
      buttonColor = "success";
      textColor = buttonColor;
      break;
    case "warning":
      buttonColor = "warning";
      textColor = buttonColor;
      break;
    case "alert":
      buttonColor = "alert";
      textColor = buttonColor;
      break;
    case "info":
      buttonColor = "info";
      textColor = buttonColor;
      break;
    case "primary":
      buttonColor = "primary";
      textColor = buttonColor;
      break;
    case "secondary":
      buttonColor = "secondary";
      textColor = buttonColor;
      break;
    case "alert":
      buttonColor = "alert";
      textColor = buttonColor;
      break;
    default:
      buttonColor = "primary";
      break;
  }

  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    textColor = "textColorInverse";
    backgroundColor = "disabled";
  } else if (type && type.toLowerCase() === "solid") {
    textColor = "textColorInverse";
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
      onClick={onClick}
      buttonColor={buttonColor}
      textColor={textColor}
      backgroundColor={backgroundColor}
      buttonPadding={buttonPadding}
      labelSize={labelSize}
      style={style}
    >
      {icon ? <ButtonIcon icon={icon} /> : null}
      <ButtonLabel>{label}</ButtonLabel>
    </StyledButton>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.string,
  color: PropTypes.oneOf(["success", "warning", "alert", "info", "primary", "secondary"]),
  size: PropTypes.oneOf(["small", "large"]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
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
