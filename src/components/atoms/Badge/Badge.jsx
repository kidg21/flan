/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
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

function Badge({
 id, label, icon, type, position 
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
      id={id}
      setTransform={setTransform}
      badgeLeft={badgeLeft}
      badgeBottom={badgeBottom}
    >
      <Tag label={label} type={type || "alert"} icon={icon} />
    </BadgeContainer>
  );
}

Badge.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
  label: PropTypes.string,
  /** Default position is top-right */
  position: PropTypes.oneOf([
    "topLeft",
    "topRight",
    "bottomRight",
    "bottomLeft",
  ]),
  type: PropTypes.oneOf(["info", "success", "warning", "alert"]),
};

Badge.defaultProps = {
  icon: null,
  id: null,
  label: null,
  position: null,
  type: null,
};

export { Badge as default };
