import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "Variables";
import Icon from "atoms/Icon";

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
`;

const BadgeLabel = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`;

const BadgeIcon = styled(Icon)``;

function Badge({ id, as, label, icon, type, size, position, style }) {
  let badgeColor = colors.alert;
  let badgeText = colors.white;
  let badgeSize = ".6em";
  let badgePadding = "0.45em .8em";
  let badgeLeft = "100%";
  let badgeBottom = "100%";
  let badgeTransform = "translate(-90%, 50%)";
  switch (type) {
    case "info":
      as = "a";
      if (icon) {
        badgeColor = "none";
        badgeSize = "1.25em";
        badgePadding = ".25em";
        badgeText = colors.anchor;
      } else {
        badgeColor = colors.anchor;
      }
      break;
    case "success":
      if (icon) {
        badgeColor = "none";
        badgeSize = "1.25em";
        badgePadding = ".25em";
        badgeText = colors.success;
      } else {
        badgeColor = colors.success;
      }
      break;
    case "warning":
      if (icon) {
        badgeColor = "none";
        badgeSize = "1.25em";
        badgePadding = ".25em";
        badgeText = colors.warning;
      } else {
        badgeColor = colors.warning;
      }
      break;
    case "alert":
      if (icon) {
        badgeColor = "none";
        badgeSize = "1.25em";
        badgePadding = ".25em";
        badgeText = colors.alert;
      } else {
        badgeColor = colors.alert;
      }
      break;
    case "dark":
      if (icon) {
        badgeColor = "none";
        badgeSize = "1.25em";
        badgePadding = ".25em";
        badgeText = colors.grey_80;
      } else {
        badgeColor = colors.grey_80;
      }
      break;
    default:
      break;
  }
  switch (position) {
    case "topLeft":
      badgeLeft = "0";
      badgeTransform = "translate(-10%, 50%)";
      break;
    case "topRight":
      break;
    case "bottomRight":
      badgeBottom = "0";
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
  );
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
};

Badge.defaultProps = {
  type: "alert",
  position: "topRight"
};

export { Badge as default };
