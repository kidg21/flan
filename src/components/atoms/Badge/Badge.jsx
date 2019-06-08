import React, { Fragment } from "react";
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
  let badgeLeft = "100%";
  let badgeBottom = "100%";
  let badgeTransform = "translate(-90%, 50%)";
  let labelType;
  let iconType;
  switch (type) {
    case "info":
      if (icon) {
        iconType = <Icon icon={icon} size="lg" fixedWidth type="info" />;
        badgePadding = "0 0.25em";
      } else {
        labelType = <BadgeLabel>{label}</BadgeLabel>;
        badgeColor = colors.anchor;
      }
      break;
    case "success":
      if (icon) {
        iconType = <Icon icon={icon} size="lg" fixedWidth type="success" />;
        badgePadding = "0 0.25em";
      } else {
        labelType = <BadgeLabel>{label}</BadgeLabel>;
        badgeColor = colors.success;
      }
      break;
    case "warning":
      if (icon) {
        iconType = <Icon icon={icon} size="lg" type="warning" />;
        badgePadding = "0 0.25em";
      } else {
        labelType = <BadgeLabel>{label}</BadgeLabel>;
        badgeColor = colors.warning;
      }
      break;
    case "alert":
      if (icon) {
        iconType = <Icon icon={icon} size="lg" type="alert" />;
        badgePadding = "0 0.25em";
      } else {
        labelType = <BadgeLabel>{label}</BadgeLabel>;
        badgeColor = colors.alert;
      }
      break;
    case "dark":
      if (icon) {
        iconType = <Icon icon={icon} size="lg" />;
        badgePadding = "0 0.25em";
      } else {
        labelType = <BadgeLabel>{label}</BadgeLabel>;
        badgeColor = colors.grey_80;
      }
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
    <Fragment>
      {icon ? (
        <BadgeContainer
          id={id}
          icon={icon}
          badgeTransform={badgeTransform}
          badgeLeft={badgeLeft}
          badgeBottom={badgeBottom}
          badgePadding={badgePadding}
          style={style}
        >
          {iconType}
        </BadgeContainer>
      ) : (
        <BadgeContainer
          id={id}
          label={label}
          badgeColor={badgeColor}
          badgeTextColor={badgeTextColor}
          badgeSize={badgeSize}
          badgeTransform={badgeTransform}
          badgeLeft={badgeLeft}
          badgeBottom={badgeBottom}
          badgePadding={badgePadding}
          style={style}
        >
          {labelType}
        </BadgeContainer>
      )}
    </Fragment>
  );
}

Badge.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
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
