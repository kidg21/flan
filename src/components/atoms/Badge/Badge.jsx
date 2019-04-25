import React from "react"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors } from "Variables"
import PropTypes from "prop-types"

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.25em;
  height: 2.25em;
  background-color: ${props =>
    props.success
      ? colors.success
      : props.warning
      ? colors.warning
      : props.alert
      ? colors.alert
      : props.anchor
      ? colors.anchor
      : props.light
      ? colors.grey_light
      : props.inverse
      ? colors.black
      : colors.grey_60};
  color: ${props => (props.light ? colors.grey_80 : colors.white)};
  font-size: ${props =>
    props.tiny
      ? ".5em"
      : props.small
      ? ".75em"
      : props.large
      ? "1.25em"
      : props.xlarge
      ? "1.5em"
      : props.xxlarge
      ? "1.75em"
      : props.xxxlarge
      ? "2em"
      : "1em"};
  font-weight: 700;
  border: ${props => (props.light ? "2px solid" : null)};
  border-color: ${props => (props.light ? colors.grey_40 : null)};
  border-radius: 100%;
  text-transform: uppercase;
  line-height: normal;
  overflow: hidden;
`

const BadgeLabel = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const BadgeIcon = styled(FontAwesomeIcon)``

function Badge({
  id,
  label,
  icon,
  anchor,
  success,
  warning,
  alert,
  light,
  inverse,
  tiny,
  small,
  large,
  xlarge,
  xxlarge,
  xxxlarge,
  ...props
}) {
  return (
    <BadgeContainer
      id={id}
      label={label}
      icon={icon}
      anchor={anchor}
      success={success}
      warning={warning}
      alert={alert}
      light={light}
      inverse={inverse}
      tiny={tiny}
      small={small}
      large={large}
      xlarge={xlarge}
      xxlarge={xxlarge}
      xxxlarge={xxxlarge}
    >
      {icon ? <BadgeIcon icon={icon} /> : <BadgeLabel>{label}</BadgeLabel>}
    </BadgeContainer>
  )
}

Badge.defaultProps = {
  id: "",
  label: "",
  icon: "",
  anchor: false,
  success: false,
  warning: false,
  alert: false,
  inverse: false,
  light: false,
  tiny: false,
  small: false,
  large: false,
  xlarge: false,
  xxlarge: false,
  xxxlarge: false
}

Badge.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  anchor: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  alert: PropTypes.bool,
  inverse: PropTypes.bool,
  light: PropTypes.bool,
  tiny: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  xxlarge: PropTypes.bool,
  xxxlarge: PropTypes.bool
}

export { Badge as default }
