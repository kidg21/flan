import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { colors } from "Variables";
import { DisabledContext } from "States";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";

/** TODO: move these to Variables */
const buttonHover = css`
  filter: brightness(85%) contrast(150%);
`;
const buttonActive = css`
  filter: brightness(105%);
`;

const StyledButton = styled.button`
  display: flex;
  flex: auto;
  flex-direction: column;
  width: ${(props) => {
    return props.fullWidth ? "100%" : "auto";
  }};
  height: inherit;
  padding: ${(props) => {
    return props.buttonPadding || "0.5rem 0.7rem";
  }};
  justify-content: center;
  align-items: center;
  color: ${(props) => {
    return props.textColor || colors.anchor;
  }};
  background-color: ${(props) => {
    return props.backgroundColor || colors.white;
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
    ${buttonHover}
  }

  &:active {
  ${buttonActive}
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
      buttonColor = colors.success;
      textColor = buttonColor;
      break;
    case "warning":
      buttonColor = colors.warning;
      textColor = buttonColor;
      break;
    case "alert":
      buttonColor = colors.alert;
      textColor = buttonColor;
      break;
    default:
      buttonColor = colors.anchor;
      break;
  }

  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) {
    textColor = colors.grey_60;
    backgroundColor = colors.grey_20;
  } else if (type && type.toLowerCase() === "solid") {
    textColor = colors.white;
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
  color: PropTypes.oneOf(["success", "warning", "alert"]),
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
