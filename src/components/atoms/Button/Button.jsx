import React from "react"
import styled, { css } from "styled-components"
import { colors, shadows } from "Variables"
import PropTypes from "prop-types"

const StyledButton = styled.button`
  color: ${props => (props.secondary ? colors.success : colors.anchor)};
  background: ${colors.white};
  border: 1px solid;
  border-color: ${props => (props.secondary ? colors.success : colors.anchor)};
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: ${props => (props.floating ? shadows.dropShadow : "")};
  transition: opacity 0.15s;
  &:hover {
    background-color: ${props =>
      props.secondary ? colors.success : colors.anchor};
    color: ${colors.white};
  }
  &:active {
    background-color: ${props =>
      props.secondary ? colors.success : colors.anchor};
  }
`

function Button({ label, secondary, disabled, floating, onClick }) {
  return (
    <StyledButton
      type="button"
      secondary={secondary}
      disabled={disabled}
      floating={floating}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  )
}

const propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}
Button.propTypes = propTypes

const defaultProps = {
  label: "Button Label",
  disabled: false
}
Button.defaultProps = defaultProps

export default Button
