import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "Variables";
import Icon from "atoms/Icon";

const BadgeContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.badgeColor || ""};
  color: ${props => props.badgeTextColor || ""};
  font-size: 0.55em;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: ${props => props.badgePadding || ""};
  border-radius: 10em;
  bottom: ${props => props.badgeBottom || ""};
  left: ${props => props.badgeLeft || ""};
  transform: ${props => props.badgeTransform || ""};
`;

const BadgeLabel = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  user-select: none;
`;

function Badge({ id, label, icon, type, position, style }) {
  let badgeColor;
  let badgeTextColor;
  let badgePadding;
  let badgeLeft;
  let badgeBottom;
  let badgeTransform;
  let labelType;
  let iconType;
  if (icon) {
    iconType = <Icon icon={icon} size="2x" />;
    badgePadding = "0 0.25em";
    switch (type) {
      case "info":
        badgeTextColor = colors.anchor;
        break;
      case "success":
        badgeTextColor = colors.success;
        break;
      case "warning":
        badgeTextColor = colors.warning;
        break;
      case "alert":
        badgeTextColor = colors.alert;
        break;
      case "dark":
        badgeTextColor = colors.grey_80;
        break;
      default:
        badgeTextColor = colors.grey_80;
        break;
    }
  } else {
    labelType = <BadgeLabel>{label}</BadgeLabel>;
    badgeColor = colors.alert;
    badgeTextColor = colors.white;
    badgePadding = "0.45em .8em";
    switch (type) {
      case "info":
        badgeColor = colors.anchor;
        break;
      case "success":
        badgeColor = colors.success;
        break;
      case "warning":
        badgeColor = colors.warning;
        break;
      case "alert":
        badgeColor = colors.alert;
        break;
      case "dark":
        badgeColor = colors.grey_80;
        break;
      default:
        badgeColor = colors.alert;
        break;
    }
  }
  switch (position) {
    case "topLeft":
      badgeBottom = "100%";
      badgeLeft = "0";
      badgeTransform = "translate(-10%, 50%)";
      break;
    case "topRight":
      badgeBottom = "100%";
      badgeLeft = "100%";
      badgeTransform = "translate(-90%, 50%)";
      break;
    case "bottomRight":
      badgeBottom = "0";
      badgeLeft = "100%";
      badgeTransform = "translate(-90%, 50%)";
      break;
    case "bottomLeft":
      badgeBottom = "0";
      badgeLeft = "0";
      badgeTransform = "translate(-10%, 50%)";
      break;
    default:
      break;
  }
  return (
    <BadgeContainer
      id={id}
      label={label}
      icon={icon}
      badgeColor={badgeColor}
      badgeTextColor={badgeTextColor}
      // badgeSize={badgeSize}
      badgeTransform={badgeTransform}
      badgeLeft={badgeLeft}
      badgeBottom={badgeBottom}
      badgePadding={badgePadding}
      style={style}
    >
      {iconType ? iconType : labelType}
    </BadgeContainer>
  );
}

Badge.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.oneOf([
    "info",
    "iconInfo",
    "success",
    "iconSuccess",
    "warning",
    "iconWarning",
    "alert",
    "iconAlert",
    "dark",
    "iconDark"
  ]),
  position: PropTypes.oneOf([
    "topLeft",
    "topRight",
    "bottomRight",
    "bottomLeft"
  ]),
  style: PropTypes.string
};

Badge.defaultProps = {
  type: "alert",
  position: "topRight"
};

export { Badge as default };
