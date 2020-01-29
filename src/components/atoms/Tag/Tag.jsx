/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import Text from "base/Typography";


const TagContainer = styled.div`
  justify-content: center;
  display: flex;
  width: fit-content;
  align-items: center;
  weight: 600;
  background-color: ${(props) => {
    return props.theme.palette[props.badgeColor];
  }};
  color: ${(props) => {
    return props.theme.text[props.badgeTextColor];
  }};
  text-align: center;
  text-transform: uppercase;
  padding: ${(props) => {
    return props.badgePadding || "";
  }};
  border: ${(props) => {
    return `2px solid ${props.theme.text.inverse}`;
  }};
  border-radius: ${(props) => {
    return props.theme.borders.radiusMax;
  }};
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
  } else if (label) {
    labelType = <Text size="2x" weight="bold" text={label} />;
    badgeTextColor = "inverse";
    badgePadding = "0.105em .58em";
  } else {
    badgePadding = "0.35rem";
  }

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
