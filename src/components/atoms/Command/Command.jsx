import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { colors } from "Variables"
import Icon from "atoms/Icon"

const CommandContainer = styled.a`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: ${props =>
    props.iconRight ? "'name icon'" : "'icon name'"};
  grid-gap: 0.5rem;
  align-items: center;
  width: max-content;
  font-size: ${props =>
    props.small
      ? ".8em"
      : props.large
      ? "1.4em"
      : props.xlarge
      ? "1.6em"
      : props.xxlarge
      ? "1.8em"
      : props.xxxlarge
      ? "2em"
      : "inherit"};
  color: ${props =>
    props.success
      ? colors.success
      : props.warning
      ? colors.warning
      : props.alert
      ? colors.alert
      : props.isDisabled
      ? colors.grey_40
      : ""};
  user-select: none;
  cursor: ${props => (props.isDisabled ? "not-allowed" : "")};
  pointer-events: ${props => (props.isDisabled ? "none" : "")};
  transition: all 0.3s ease;
  &:hover {
    color: ${props =>
      props.success
        ? colors.success_dark
        : props.warning
        ? colors.warning_dark
        : props.alert
        ? colors.alert_dark
        : colors.anchor_dark};
  }
  &:active {
    color: ${props =>
      props.success
        ? colors.success_light
        : props.warning
        ? colors.warning_light
        : props.alert
        ? colors.alert_light
        : colors.anchor_light};
  }
`

const CommandName = styled.h6`
  grid-area: name;
  font-size: inherit;
  line-height: inherit;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`

const CommandIcon = styled(Icon)`
  grid-area: icon;
`

function Command({
  id,
  label,
  icon,
  iconRight,
  success,
  warning,
  alert,
  isDisabled,
  small,
  large,
  xlarge,
  xxlarge,
  xxxlarge,
  style,
  className
}) {
  return (
    <CommandContainer
      id={id}
      label={label}
      icon={icon}
      iconRight={iconRight}
      success={success}
      warning={warning}
      alert={alert}
      isDisabled={isDisabled}
      small={small}
      large={large}
      xlarge={xlarge}
      xxlarge={xxlarge}
      xxxlarge={xxxlarge}
      style={style}
      className={className}
    >
      {icon ? <CommandIcon icon={icon} /> : null}
      <CommandName>{label}</CommandName>
    </CommandContainer>
  )
}

Command.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  iconRight: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  alert: PropTypes.bool,
  isDisabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  xxlarge: PropTypes.bool,
  xxxlarge: PropTypes.bool,
  xxxlarge: PropTypes.bool,
  style: PropTypes.string,
  className: PropTypes.string
}
export { Command as default }
