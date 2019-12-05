/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import Title from "base/Typography";

const AvatarText = styled(Title)`
  color: inherit;
  margin: 0px 0px 0em;
`;

const TagContainer = styled.div`
  justify-content: center;
  vertical-align: center;
  display: flex;
  width: 2.7rem;
  height: 2.7rem;
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
 id, label, icon, color, style, disabled 
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
    labelType = <AvatarText weight="semibold" size="lg" text={label} />;
  }

  return (
    <TagContainer
      id={id}
      label={label}
      icon={icon}
      backgroundColor={backgroundColor}
      textColor={textColor}
      style={style}
    >
      {iconType || labelType}
    </TagContainer>
  );
}

Avatar.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  color: PropTypes.node,
  style: PropTypes.node,
};

Avatar.defaultProps = {
  disabled: false,
  label: null,
  id: null,
  icon: null,
  color: null,
  style: null,
};

export { Avatar as default };
