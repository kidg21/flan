/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tag from "atoms/Tag";

const BadgeContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: ${(props) => {
    return props.badgeBottom || "";
  }};
  left: ${(props) => {
    return props.badgeLeft || "";
  }};
  transform: ${(props) => {
    return props.setTransform || "";
  }};
`;

const StyledBadge = styled(Tag)`
  border-radius: ${(props) => {
    return props.theme.borders.radiusMax;
  }};
`;

function Badge({
  hasBackground, icon, iconSize, id, label, onClick, position, size, variant,
}) {
  let badgeLeft;
  let badgeBottom;
  let setTransform;
  switch (position) {
    case "topLeft":
      badgeBottom = "100%";
      badgeLeft = "0";
      setTransform = "translate(-10%, 50%)";
      break;
    case "bottomRight":
      badgeBottom = "0";
      badgeLeft = "100%";
      setTransform = "translate(-90%, 50%)";
      break;
    case "bottomLeft":
      badgeBottom = "0";
      badgeLeft = "0";
      setTransform = "translate(-10%, 50%)";
      break;
    default:
    case "topRight":
      badgeBottom = "100%";
      badgeLeft = "100%";
      setTransform = "translate(-90%, 50%)";
      break;
  }
  return (
    <BadgeContainer
      badgeBottom={badgeBottom}
      badgeLeft={badgeLeft}
      id={id}
      setTransform={setTransform}
    >
      <StyledBadge hasBackground={hasBackground} label={label} variant={variant || "alert"} icon={icon} iconSize={iconSize} size={size} onClick={onClick} />
    </BadgeContainer>
  );
}

Badge.propTypes = {
  hasBackground: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  iconSize: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  /** Default position is top-right */
  position: PropTypes.oneOf([
    "topLeft",
    "topRight",
    "bottomRight",
    "bottomLeft",
  ]),
  size: PropTypes.string,
  variant: PropTypes.oneOf(["info", "success", "warning", "alert", "action"]),
};

Badge.defaultProps = {
  hasBackground: true,
  icon: null,
  iconSize: undefined,
  id: null,
  label: null,
  onClick: null,
  position: null,
  size: undefined,
  variant: null,
};

export default Badge;
