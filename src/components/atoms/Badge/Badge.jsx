import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { colors } from "Variables"
import Icon from "atoms/Icon"

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 2.25em;
  width: min-content;
  max-width: 5em;
  height: 2.25em;
  background-color: ${props =>
    props.success
      ? colors.success
      : props.warning
      ? colors.warning
      : props.anchor
      ? colors.anchor
      : props.light
      ? colors.grey_light
      : props.grey
      ? colors.grey_40
      : props.dark
      ? colors.black
      : props.notification && props.icon
      ? ""
      : colors.alert};
  color: ${props =>
    props.light || props.grey
      ? colors.grey_dark
      : props.notification && props.icon
      ? colors.alert
      : colors.white};
  font-size: ${props =>
    props.tiny || (props.notification && !props.icon)
      ? ".6em"
      : props.small
      ? ".75em"
      : props.large
      ? "1.25em"
      : props.xlarge || (props.notification && props.icon)
      ? "1.5em"
      : props.xxlarge
      ? "1.75em"
      : props.xxxlarge
      ? "2em"
      : "1em"};
  font-weight: 700;
  border: ${props => (props.light ? "2px solid" : null)};
  border-color: ${props => (props.light ? colors.grey_40 : null)};
  border-radius: 10em;
  text-transform: uppercase;
  position: ${props => (props.notification ? "absolute" : "")};
  bottom: ${props => (props.bottomLeft || props.bottomRight ? "0" : "100%")};
  left: ${props => (props.topLeft || props.bottomLeft ? "0%" : "100%")};
  margin: ${props =>
    props.notification && !props.icon
      ? "-1em"
      : props.notification && props.icon
      ? "-1.25em -.25em"
      : ""};
  padding: ${props => (props.notification ? "0 .75em" : ".5em")};
  transform: ${props =>
    props.topLeft || props.bottomLeft
      ? "translate(50%, 0%)"
      : props.notification
      ? "translate(-50%, 0%)"
      : ""};
  letter-spacing: 1px;
  overflow: hidden;
`

const BadgeLabel = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const BadgeIcon = styled(Icon)``

function Badge({
  id,
  label,
  icon,
  anchor,
  success,
  warning,
  alert,
  light,
  grey,
  dark,
  tiny,
  small,
  large,
  xlarge,
  xxlarge,
  xxxlarge,
  notification,
  left,
  topLeft,
  bottomLeft,
  bottomRight,
  maxCount,
  style,
  className,
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
      grey={grey}
      dark={dark}
      tiny={tiny}
      small={small}
      large={large}
      xlarge={xlarge}
      xxlarge={xxlarge}
      xxxlarge={xxxlarge}
      notification={notification}
      left={left}
      topLeft={topLeft}
      bottomLeft={bottomLeft}
      bottomRight={bottomRight}
      maxCount={maxCount}
      style={style}
      className={className}
    >
      {icon ? (
        <BadgeIcon icon={icon} />
      ) : maxCount ? (
        <BadgeLabel>99+</BadgeLabel>
      ) : (
        <BadgeLabel>{label}</BadgeLabel>
      )}
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
  dark: false,
  light: false,
  grey: false,
  tiny: false,
  small: false,
  large: false,
  xlarge: false,
  xxlarge: false,
  xxxlarge: false,
  notification: false,
  topLeft: false,
  bottomLeft: false,
  bottomRight: false,
  maxCount: false
}

Badge.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  anchor: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  alert: PropTypes.bool,
  dark: PropTypes.bool,
  light: PropTypes.bool,
  grey: PropTypes.bool,
  tiny: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  xxlarge: PropTypes.bool,
  xxxlarge: PropTypes.bool,
  notification: PropTypes.bool,
  topLeft: PropTypes.bool,
  bottomLeft: PropTypes.bool,
  bottomRight: PropTypes.bool,
  maxCount: PropTypes.bool,
  style: PropTypes.string,
  className: PropTypes.string
}

export { Badge as default }
