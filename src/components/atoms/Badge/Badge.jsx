import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { colors } from "Variables"
import Icon from "atoms/Icon"

const BadgeContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.badgeColor || ""};
  color: ${props => props.badgeText || ""};
  font-size: ${props => props.badgeSize || ""};
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: ${props => props.badgePadding || ""};
  border-radius: 10em;
  bottom: ${props => props.badgeBottom || ""};
  left: ${props => props.badgeLeft || ""};
  transform: ${props => props.badgeTransform || ""};
`

const BadgeLabel = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`

const BadgeIcon = styled(Icon)``

function Badge({ id, as, label, icon, type, size, position, style, ...props }) {
  let badgeColor = colors.alert
  let badgeText = colors.white
  let badgeSize = ".6em"
  let badgePadding = "0.45em .8em"
  let badgeLeft = "100%"
  let badgeBottom = "100%"
  let badgeTransform = "translate(-90%, 50%)"
  switch (type) {
    case "info":
      as = "a"
      icon
        ? (badgeText = colors.anchor) &&
          (badgeColor = "none") &&
          (badgeSize = "1.25em") &&
          (badgePadding = ".25em")
        : (badgeColor = colors.anchor)
      break
    case "success":
      icon
        ? (badgeColor = "none") &&
          (badgeText = colors.success) &&
          (badgeSize = "1.25em") &&
          (badgePadding = ".25em")
        : (badgeColor = colors.success)
      break
    case "warning":
      icon
        ? (badgeColor = "none") &&
          (badgeText = colors.warning) &&
          (badgeSize = "1.25em") &&
          (badgePadding = ".25em")
        : (badgeColor = colors.warning)
      break
    case "alert":
      icon
        ? (badgeColor = "none") &&
          (badgeText = colors.alert) &&
          (badgeSize = "1.25em") &&
          (badgePadding = ".25em")
        : (badgeColor = colors.alert)
      break
    case "dark":
      icon
        ? (badgeColor = "none") &&
          (badgeText = colors.grey_80) &&
          (badgeSize = "1.25em") &&
          (badgePadding = ".25em")
        : (badgeColor = colors.grey_80)
      break
    default:
      ""
  }
  switch (position) {
    case "topLeft":
      badgeLeft = "0"
      badgeTransform = "translate(-10%, 50%)"
      break
    case "topRight":
      ""
      break
    case "bottomRight":
      badgeBottom = "0"
      break
    case "bottomLeft":
      badgeBottom = "0"
      badgeLeft = "0"
      badgeTransform = "translate(-10%, 50%)"
      break
    default:
      ""
  }
  return (
    <BadgeContainer
      id={id}
      label={label}
      icon={icon}
      as={as}
      badgeColor={badgeColor}
      badgeText={badgeText}
      badgeSize={badgeSize}
      badgeTransform={badgeTransform}
      badgeLeft={badgeLeft}
      badgeBottom={badgeBottom}
      badgePadding={badgePadding}
      style={style}
    >
      {icon ? (
        <BadgeIcon icon={icon} badgeText={badgeText} />
      ) : (
        <BadgeLabel>{label}</BadgeLabel>
      )}
    </BadgeContainer>
  )
}

Badge.defaultProps = {
  type: "alert",
  position: "topRight"
}

Badge.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.oneOf([
    "info",
    "success",
    "warning",
    "alert",
    "dark",
    "notify",
    "max10",
    "max100",
    "max1K",
    "max10K"
  ]),
  position: PropTypes.oneOf([
    "topLeft",
    "topRight",
    "bottomRight",
    "bottomLeft"
  ]),
  style: PropTypes.string
}

export { Badge as default }
