/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import Image from "atoms/Image";
import Title from "base/Typography";

const AvatarText = styled(Title)`
  color: inherit;
  font-size: ${(props) => {
    return props.fontSize || "inherit";
  }};
  margin: 0;
`;

const TagContainer = styled.div`
  justify-content: center;
  vertical-align: center;
  cursor: ${(props) => {
    return props.onClick ? "pointer" : "";
  }};
  display: flex;
  width: ${(props) => {
    return props.avatarSize;
  }};
  height: ${(props) => {
    return props.avatarSize;
  }};
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
  type, disabled, icon, id, src, alt, image, label, onClick, size,
}) {
  let labelType;
  let iconType;
  let backgroundColor;
  let fontSize;
  let textColor;
  let avatarSize;


  switch (size && size.toLowerCase()) {
    case "4x":
      avatarSize = "5rem";
      fontSize = "2.5em";
      break;
    case "3x":
      avatarSize = "4rem";
      fontSize = "2em";
      break;
    case "2x":
      avatarSize = "3rem";
      fontSize = "1.5em";
      break;
    case "1x":
      avatarSize = "2.5rem";
      fontSize = "1em";
      break;
    default:
      avatarSize = "2.5rem";
      fontSize = "1em";
      break;
  }

  switch (type && type.toLowerCase()) {
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
      textColor = "alertTint";
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
  if (image) {
    iconType = (<Image
      circle
      src={src}
      width={avatarSize}
      alt={alt}
    />);
    backgroundColor = "white";
  } else if (icon) {
    iconType = <Icon icon={icon} size="lg" />;
  } else {
    labelType = <AvatarText weight="semibold" fontSize={fontSize} text={label.substring(0, 2)} />;
  }

  return (
    <TagContainer
      backgroundColor={backgroundColor}
      icon={icon}
      src={src}
      alt={alt}
      image={image}
      avatarSize={avatarSize}
      id={id}
      label={label}
      textColor={textColor}
      onClick={onClick}
    >
      {iconType || labelType}
    </TagContainer>
  );
}

Avatar.propTypes = {
  /** Options: 'primary', 'secondary', 'info', 'success', 'warning', 'alert' */
  type: PropTypes.string,
  disabled: PropTypes.bool,
  /** Enter the name of the icon as the prop value. (ex. icon='circle' */
  icon: PropTypes.string,
  image: PropTypes.node,
  src: PropTypes.node,
  alt: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.node,
  size: PropTypes.node,
  label: PropTypes.string,
};

Avatar.defaultProps = {
  type: null,
  disabled: false,
  image: null,
  src: null,
  alt: null,
  size: null,
  onClick: null,
  icon: null,
  id: null,
  label: null,
};

export default Avatar;
