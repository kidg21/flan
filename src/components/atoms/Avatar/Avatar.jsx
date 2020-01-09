/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import Text from "base/Typography";

const TagContainer = styled.div`
  justify-content: center;
  vertical-align: center;
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  background-color: ${(props) => {
    return props.theme.palette[props.backgroundColor] || "";
  }};
  color: ${(props) => {
    return props.theme.palette[props.textColor] || "";
  }};
  text-transform: uppercase;
  border-radius: 100%;
`;

function Avatar({
  color, disabled, icon, id, label,
}) {
  let labelType;
  let iconType;
  let backgroundColor;
  let textColor;
  switch (color && color.toLowerCase()) {
    case "success":
      backgroundColor = "success";
      textColor = "successTint";
      break;
    case "warning":
      backgroundColor = "warning";
      textColor = "warningTint";
      break;
    case "alert":
      backgroundColor = "alert";
      textColor = "alertLight";
      break;
    case "info":
      backgroundColor = "info";
      textColor = "infoTint";
      break;
    case "primary":
      backgroundColor = "primary";
      textColor = "primaryTint";
      break;
    case "secondary":
      backgroundColor = "secondaryLight";
      textColor = "secondaryTint";
      break;
    default:
      backgroundColor = "primaryLight";
      textColor = "white";
      break;
  }
  if (disabled) {
    backgroundColor = "grey3";
  }
  if (icon) {
    iconType = <Icon icon={icon} size="lg" />;
  } else {
    labelType = <Text weight="bold" type="inverse" text={label} />;
  }

  return (
    <TagContainer
      backgroundColor={backgroundColor}
      icon={icon}
      id={id}
      label={label}
      textColor={textColor}
    >
      {iconType || labelType}
    </TagContainer>
  );
}

Avatar.propTypes = {
  /** Options: 'primary', 'secondary', 'info', 'success', 'warning', 'alert' */
  color: PropTypes.string,
  disabled: PropTypes.bool,
  /** Enter the name of the icon as the prop value. (ex. icon='circle' */
  icon: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};

Avatar.defaultProps = {
  color: null,
  disabled: false,
  icon: null,
  id: null,
  label: null,
};

export default Avatar;
