import React from "react"
import styled, { css, keyframes } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors, shadows } from "Variables"
import PropTypes from "prop-types"

const StyledButton = styled.button`
  color: ${props => (props.isPrimary ? colors.white : colors.anchor)};
  background: ${props => (props.isPrimary ? colors.anchor : colors.white)};
  border: 1px solid ${colors.anchor};
  border-radius: ${props => (props.isRound ? "2rem" : "")};
  padding: 0.5rem 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  filter: ${props => (props.isFloating ? shadows.cardShadow : "")};
  transition: all 0.15s ease;
  &:hover {
    color: ${props => (props.isPrimary ? colors.white : colors.success)};
    background-color: ${props => (props.isPrimary ? colors.success : "")};
    border-color: ${colors.success};
  }
  &:active {
    color: ${colors.white};
    background-color: ${colors.success};
    border-color: ${colors.success};
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
`

const ButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

function Button({
  label,
  isPrimary,
  isRound,
  isDisabled,
  isFloating,
  icon,
  onClick
}) {
  return (
    <StyledButton
      type="button"
      isPrimary={isPrimary}
      disabled={isDisabled}
      isRound={isRound}
      isFloating={isFloating}
      onClick={onClick}
    >
      {icon ? <ButtonIcon icon={icon} /> : null}
      <ButtonLabel>{label}</ButtonLabel>
    </StyledButton>
  )
}

const propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  isPrimary: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRound: PropTypes.bool,
  isFloating: PropTypes.bool,
  icon: PropTypes.array,
  onClick: PropTypes.func.isRequired
}
Button.propTypes = propTypes

const defaultProps = {
  label: "Button Name"
}
Button.defaultProps = defaultProps

export { Button as default }
