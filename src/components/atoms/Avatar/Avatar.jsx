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
  type, icon, id, disabled, src, alt, image, label, onClick, size,
}) {
  let labelType;
  let iconType;

  const sizeHash = {
    "4x": {
      avatar: "5rem",
      font: "2.5em",
    },
    "3x": {
      avatar: "4rem",
      font: "2em",
    },
    "2x": {
      avatar: "3rem",
      font: "1.5em",
    },
    "1x": {
      avatar: "2.5rem",
      font: "1em",
    },
  };

  const avatarSize = (size && sizeHash[size.toLowerCase()]) || "2.5rem";
  const fontSize = (size && sizeHash[size.toLowerCase()]) || "1em";


  const typeHash = {
    success: "success",
    warning: "warning",
    alert: "alert",
    info: "info",
    primary: "primary",
    secondary: "secondary",
  };


  const backgroundColor = type ? (typeHash[type] || type.toLowerCase()) : "primaryLight";
  const textColor = type ? `${type.toLowerCase()}Tint` : "white";


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
