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
  background-color: ${(props) => {
    return props.theme[props.badgeColor];
  }};
  color: ${(props) => {
    return props.theme[props.badgeTextColor];
  }};
  font-size: 0.55em;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: ${(props) => {
    return props.badgePadding || "";
  }};
  border-radius: 10em;
  bottom: ${(props) => {
    return props.badgeBottom || "";
  }};
  left: ${(props) => {
    return props.badgeLeft || "";
  }};
  transform: ${(props) => {
    return props.badgeTransform || "";
  }};
`;

const BadgeLabel = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  user-select: none;
`;

function Badge({
  id, label, icon, type, position, style,
}) {
  let badgeColor;
  let badgeTextColor;
  let badgePadding;
  let badgeLeft;
  let badgeBottom;
  let badgeTransform;
  let labelType;
  let iconType;
  if (icon) {
    iconType = <Icon icon={icon} size="2x" type={type} />;
    badgePadding = "0 0.25em";
  } else {
    labelType = <BadgeLabel>{label}</BadgeLabel>;
    badgeColor = "alert";
    badgeTextColor = "textColorInverse";
    badgePadding = "0.45em .8em";
    switch (type) {
      case "info":
        badgeColor = "info";
        break;
      case "success":
        badgeColor = "success";
        break;
      case "warning":
        badgeColor = "warning";
        break;
      case "alert":
        badgeColor = "alert";
        break;
      case "dark":
        badgeColor = "textColor";
        break;
      default:
        badgeColor = "alert";
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
    case "topRight":
      badgeBottom = "100%";
      badgeLeft = "100%";
      badgeTransform = "translate(-90%, 50%)";
      break;
  }
  return (
    <BadgeContainer
      id={id}
      label={label}
      icon={icon}
      badgeColor={badgeColor}
      badgeTextColor={badgeTextColor}
      badgeTransform={badgeTransform}
      badgeLeft={badgeLeft}
      badgeBottom={badgeBottom}
      badgePadding={badgePadding}
      style={style}
    >
      {iconType || labelType}
    </BadgeContainer>
  );
}

Badge.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.oneOf(["info", "success", "warning", "alert", "dark"]),
  position: PropTypes.oneOf(["topLeft", "topRight", "bottomRight", "bottomLeft"]),
  style: PropTypes.string,
};

export default Badge;
