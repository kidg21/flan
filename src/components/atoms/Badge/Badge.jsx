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
  font-size: ${props => props.badgeSize || ""};
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
`;

function Badge({ id, label, icon, type, position, style }) {
  let badgeColor = colors.alert;
  let badgeTextColor = colors.white;
  let badgeSize = ".6em";
  let badgePadding = "0.45em .8em";
  let badgeLeft;
  let badgeBottom;
  let badgeTransform;
  var labelType;
  let iconType;
  switch (type) {
    case "iconInfo":
      iconType = <Icon icon={icon} size="2x" />;
      badgeColor = "none";
      badgePadding = "0 0.25em";
      badgeTextColor = colors.anchor;
      break;
    case "iconSuccess":
      iconType = <Icon icon={icon} size="2x" />;
      badgeColor = "none";
      badgePadding = "0 0.25em";
      badgeTextColor = colors.success;
      break;
    case "iconWarning":
      iconType = <Icon icon={icon} size="2x" />;
      badgeColor = "none";
      badgePadding = "0 0.25em";
      badgeTextColor = colors.warning;
      break;
    case "iconAlert":
      iconType = <Icon icon={icon} size="2x" />;
      badgeColor = "none";
      badgePadding = "0 0.25em";
      badgeTextColor = colors.alert;
      break;
    case "iconDark":
      iconType = <Icon icon={icon} size="2x" />;
      badgeColor = "none";
      badgePadding = "0 0.25em";
      badgeTextColor = colors.grey_80;
      break;
    case "info":
      labelType = <BadgeLabel>{label}</BadgeLabel>;
      badgeColor = colors.anchor;
      break;
    case "success":
      labelType = <BadgeLabel>{label}</BadgeLabel>;
      badgeColor = colors.success;
      break;
    case "warning":
      labelType = <BadgeLabel>{label}</BadgeLabel>;
      badgeColor = colors.warning;
      break;
    case "alert":
      labelType = <BadgeLabel>{label}</BadgeLabel>;
      badgeColor = colors.alert;
      break;
    case "dark":
      labelType = <BadgeLabel>{label}</BadgeLabel>;
      badgeColor = colors.grey_80;
      break;
    case "max-10":
      labelType = <BadgeLabel>9+</BadgeLabel>;
      break;
    case "max-100":
      labelType = <BadgeLabel>99+</BadgeLabel>;
      break;
    case "max-1k":
      labelType = <BadgeLabel>999+</BadgeLabel>;
      break;
    case "max-10k":
      labelType = <BadgeLabel>9999+</BadgeLabel>;
      break;
    default:
      labelType = <BadgeLabel>{label}</BadgeLabel>;
      break;
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
      badgeSize={badgeSize}
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
    "iconDark",
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
};

Badge.defaultProps = {
  type: "alert",
  position: "topRight"
};

export { Badge as default };
