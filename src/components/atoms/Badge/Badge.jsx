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
  /* max-width: 5em; */
  height: 2.25em;
  background-color: ${props => props.badgeColor || colors.grey_20};
  color: ${props => props.badgeText || colors.grey_80};
  font-size: ${props => props.badgeSize || "1em"};
  font-weight: 700;
  border-radius: 10em;
  text-transform: uppercase;
  position: ${props => props.badgePosition || ""};
  bottom: ${props => props.badgeBottom || ""};
  left: ${props => props.badgeLeft || ""};
  padding: ${props => props.badgePadding || ".5em"};
  transform: ${props => props.badgeTransform || ""};
  letter-spacing: 1px;
  overflow: hidden;
`

const BadgeLabel = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`

const BadgeIcon = styled(Icon)``

function Badge({ id, as, label, icon, type, size, position, style, ...props }) {
  let badgeSize
  let badgeColor
  let badgeText
  let badgePosition
  let badgeLeft
  let badgeBottom
  let badgePadding
  let badgeTransform
  switch (type) {
    case "link":
      as = "a"
      badgeColor = colors.anchor
      badgeText = colors.white
      break
    case "success":
      badgeColor = colors.success
      badgeText = colors.white
      break
    case "warning":
      badgeColor = colors.warning
      badgeText = colors.white
      break
    case "alert":
      badgeColor = colors.alert
      badgeText = colors.white
      break
    case "dark":
      badgeColor = colors.grey_80
      badgeText = colors.white
      break
    case "notify":
      position = position || "topRight"
      badgePadding = "0 0.75em"
      icon
        ? (badgeColor = "none") &&
          (badgeText = colors.alert) &&
          (size = "large")
        : (badgeColor = colors.alert) &&
          (badgeText = colors.white) &&
          (size = "tiny")
      break
    case "max10":
      position = position || "topRight"
      badgePadding = "0 0.75em"
      badgeColor = colors.alert
      badgeText = colors.white
      size = "tiny"
      label = "9+"
      break
    case "max100":
      position = position || "topRight"
      badgePadding = "0 0.75em"
      badgeColor = colors.alert
      badgeText = colors.white
      size = "tiny"
      label = "99+"
      break
    case "max1K":
      position = position || "topRight"
      badgePadding = "0 0.75em"
      badgeColor = colors.alert
      badgeText = colors.white
      size = "tiny"
      label = "999+"
      break
    case "max10K":
      position = position || "topRight"
      badgePadding = "0 0.75em"
      badgeColor = colors.alert
      badgeText = colors.white
      size = "tiny"
      label = "9999+"
      break
    default:
      ""
  }
  switch (position) {
    case "topLeft":
      badgePosition = "absolute"
      badgeBottom = "100%"
      badgeLeft = "0"
      badgeTransform = "translate(-25%, 50%)"
      break
    case "topRight":
      badgePosition = "absolute"
      badgeBottom = "100%"
      badgeLeft = "100%"
      badgeTransform = "translate(-75%, 50%)"
      break
    case "bottomRight":
      badgePosition = "absolute"
      badgeBottom = "0"
      badgeLeft = "100%"
      badgeTransform = "translate(-75%, 50%)"
      break
    case "bottomLeft":
      badgePosition = "absolute"
      badgeBottom = "0"
      badgeLeft = "0"
      badgeTransform = "translate(-25%, 50%)"
      break
    default:
      ""
  }
  switch (size) {
    case "tiny":
      badgeSize = ".6em"
      break
    case "small":
      badgeSize = ".75em"
      break
    case "large":
      badgeSize = "1.25em"
      break
    case "xlarge":
      badgeSize = "1.5em"
      break
    case "xxlarge":
      badgeSize = "1.75em"
      break
    case "xxxlarge":
      badgeSize = "2em"
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
      badgePosition={badgePosition}
      badgeTransform={badgeTransform}
      badgeLeft={badgeLeft}
      badgeBottom={badgeBottom}
      badgePadding={badgePadding}
      style={style}
    >
      {icon ? <BadgeIcon icon={icon} /> : <BadgeLabel>{label}</BadgeLabel>}
    </BadgeContainer>
  )
}

Badge.defaultProps = {
  id: "",
  label: "",
  icon: ""
}

Badge.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  // badgeSize: PropTypes.oneOf([
  //   "tiny",
  //   "small",
  //   "large",
  //   "xlarge",
  //   "xlarge",
  //   "xxxlarge"
  // ]),
  type: PropTypes.oneOf([
    "link",
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
