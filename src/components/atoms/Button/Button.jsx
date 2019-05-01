import React from "react"
import styled, { css, keyframes } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors, shadows } from "Variables"
import PropTypes from "prop-types"

const StyledButton = styled.button`
  color: ${props =>
    props.isPrimary || props.isSecondary ? colors.white : colors.anchor};
  background-color: ${props =>
    props.isPrimary
      ? colors.anchor
      : props.isSecondary
      ? colors.success
      : colors.white};
  border: 1px solid;
  border-color: ${props =>
    props.isSecondary ? colors.success : colors.anchor};
  border-radius: ${props => (props.isRound ? "2rem" : "4px")};
  padding: 0.75rem 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  filter: ${props => (props.isFloating ? shadows.cardShadow : "")};
  transition: all 0.15s ease;
  &:hover {
    color: ${colors.white};
    background-color: ${props =>
      props.isSecondary ? colors.success_dark : colors.anchor_dark};
    border-color: ${props =>
      props.isSecondary ? colors.success_dark : colors.anchor_dark};
  }
  &:active {
    color: ${colors.white};
    background-color: ${props =>
      props.isSecondary ? colors.success_light : colors.anchor_light};
    border-color: ${props =>
      props.isSecondary ? colors.success_light : colors.anchor_light};
  }
  &[disabled] {
    color: ${colors.grey_40};
    border-color: ${colors.grey_40};
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }
`

const ButtonLabel = styled.label`
  font-size: inherit;
  user-select: none;
  cursor: pointer;
`

const ButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

function Button({
  id,
  name,
  type,
  label,
  icon,
  isPrimary,
  isSecondary,
  isRound,
  isFloating,
  isDisabled,
  onClick,
  ...props
}) {
  return (
    <StyledButton
      id={id}
      name={id}
      type={type}
      isPrimary={isPrimary}
      isSecondary={isSecondary}
      isRound={isRound}
      isFloating={isFloating}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon ? <ButtonIcon icon={icon} /> : null}
      <ButtonLabel>{label}</ButtonLabel>
    </StyledButton>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  /** button, file, reset, or submit. */
  type: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isPrimary: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isRound: PropTypes.bool,
  isFloating: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  id: "Button Name",
  type: "button",
  label: "Button Name"
}

export { Button as default }
