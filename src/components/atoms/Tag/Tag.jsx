/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import Label from "atoms/Label";

const TagContainer = styled.div`
  justify-content: center;
  display: flex;
  width: fit-content;
  align-items: center;
  background-color: ${(props) => {
    return props.theme.palette[props.badgeColor];
  }};
  color: ${(props) => {
    return props.theme.text[props.badgeTextColor];
  }};
  text-transform: uppercase;
  padding: ${(props) => {
    return props.badgePadding || "";
  }};
  border-radius: 5em;
`;

function Tag({
  id, label, icon, style, type,
}) {
  let badgeColor;
  let badgeTextColor;
  let badgePadding;
  let labelType;
  let iconType;
  if (icon) {
    iconType = <Icon icon={icon} size="2x" type={type} />;
    badgePadding = "0 0.25em";
  } else {
    labelType = <Label type="bold" size="12px" text={label} />;
    badgeTextColor = "inverse";
    badgePadding = "0.105em .58em";
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
      case "blue":
        badgeColor = "primaryLight";
        break;
      case "lightgreen":
        badgeColor = "secondaryLight";
        break;
      case "green":
        badgeColor = "secondary";
        break;
      case "darkgreen":
        badgeColor = "secondaryDark";
        break;
      case "darkblue":
        badgeColor = "primaryDark";
        break;
      default:
        badgeColor = "primary";
        break;
    }
  }

  return (
    <TagContainer
      id={id}
      label={label}
      icon={icon}
      badgeColor={badgeColor}
      badgeTextColor={badgeTextColor}
      badgePadding={badgePadding}
      style={style}
    >
      {iconType || labelType}
    </TagContainer>
  );
}

Tag.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  style: PropTypes.string,
};

Tag.defaultProps = {
  label: null,
  id: null,
  type: null,
  icon: null,
  style: null,
};

export default Tag;
