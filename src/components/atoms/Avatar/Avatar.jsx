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
  margin: 0px 0px 0em;
`;

const TagContainer = styled.div`
  justify-content: center;
  vertical-align: center;
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
  color, disabled, icon, id, src, alt, image, label, size,
}) {
  let labelType;
  let iconType;
  let backgroundColor;
  let textColor;
  let avatarSize;


  switch (size && size.toLowerCase()) {
    case "4x":
      avatarSize = "5rem";
      break;
    case "3x":
      avatarSize = "4rem";
      break;
    case "2x":
      avatarSize = "3rem";
      break;
    case "1x":
      avatarSize = "2.5rem";
      break;
    default:
      avatarSize = "2.5rem";
      break;
  }

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
  if (image) {
    iconType = (<Image
      circle
      src={src}
      width={avatarSize}
      alt={alt}
    />);
  } else if (icon) {
    iconType = <Icon icon={icon} size="lg" />;
  } else {
    labelType = <AvatarText weight="semibold" size="lg" text={label.substring(0, 2)} />;
  }

  return (
    <div>
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
      >
        {iconType || labelType}
      </TagContainer>
    </div >
  );
}

Avatar.propTypes = {
  /** Options: 'primary', 'secondary', 'info', 'success', 'warning', 'alert' */
  color: PropTypes.string,
  disabled: PropTypes.bool,
  /** Enter the name of the icon as the prop value. (ex. icon='circle' */
  icon: PropTypes.string,
  image: PropTypes.node,
  src: PropTypes.node,
  alt: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.node,
  label: PropTypes.string,
};

Avatar.defaultProps = {
  color: null,
  disabled: false,
  image: null,
  src: null,
  alt: null,
  size: null,
  icon: null,
  id: null,
  label: null,
};

export default Avatar;
