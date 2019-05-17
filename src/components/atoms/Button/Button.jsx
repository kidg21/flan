import React from "react"
import styled, { css, keyframes } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors, shadows } from "Variables"
import PropTypes from "prop-types"

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props =>
    props.isSolid
      ? colors.white
      : props.isSecondary
      ? colors.success
      : colors.anchor};
  background-color: ${props =>
    props.isSolid && !props.isSecondary
      ? colors.anchor
      : props.isSolid && props.isSecondary
      ? colors.success
      : colors.white};
  border: 1px solid;
  border-color: ${props =>
    props.isSecondary ? colors.success : colors.anchor};
  border-radius: ${props => (props.isRound ? "2rem" : "4px")};
  font-weight: 600;
  width: auto;
  padding: 0.65rem 1rem;
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
  line-height: normal;
  font-size: inherit;
  user-select: none;
  cursor: pointer;
`

const ButtonIcon = styled(FontAwesomeIcon)`
  font-size: 1.2em;
  margin-bottom: 0.35rem;
`

function Button({
  id,
  name,
  type,
  buttonLabel,
  icon,
  isSolid,
  isSecondary,
  isRound,
  isFloating,
  isDisabled,
  onClick
}) {
  return (
    <StyledButton
      id={id}
      name={id}
      type={type}
      isSolid={isSolid}
      isSecondary={isSecondary}
      isRound={isRound}
      isFloating={isFloating}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon ? <ButtonIcon icon={icon} /> : null}
      <ButtonLabel>{buttonLabel}</ButtonLabel>
    </StyledButton>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  name: PropTypes.string,
  /** button, file, reset, or submit. */
  type: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isSolid: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isRound: PropTypes.bool,
  isFloating: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}
export { Button as default }
