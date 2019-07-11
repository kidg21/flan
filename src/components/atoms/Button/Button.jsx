import React from "react";
import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors, shadows } from "Variables";
import PropTypes from "prop-types";

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
  /* width: auto; */
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  padding: ${props => props.buttonPadding || "0.5rem 0.7rem"};
  justify-content: center;
  align-items: center;
  color: ${props => props.textColor || colors.anchor};
  background-color: ${props => props.backgroundColor || colors.white};
  border: 1px solid;
  border-radius: 4px;
  font-size: ${props => props.labelSize || "inherit"};
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

const ButtonIcon = styled(FontAwesomeIcon)`
  margin: 0.25em 0;
`;

function Button({
  id,
  buttonLabel,
  icon,
  color,
  type,
  size,
  fullWidth,
  isDisabled,
  onClick,
  style,
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
  switch (type) {
    case "solid":
      backgroundColor = buttonColor;
      textColor = colors.white;
      break;
    case "disabled":
      textColor = colors.grey_60;
      backgroundColor = colors.grey_20;
      isDisabled = true;
      break;
    default:
      break;
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
      <ButtonLabel>{buttonLabel}</ButtonLabel>
    </StyledButton>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  buttonLabel: PropTypes.any.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.oneOf(["solid", "disabled"]),
  color: PropTypes.oneOf(["success", "warning", "alert"]),
  size: PropTypes.oneOf(["small", "large"]),
  fullWidth: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.string,
};

export { Button as default };
