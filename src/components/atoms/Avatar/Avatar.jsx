/* eslint-disable complexity */
/* eslint-disable security/detect-object-injection */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import Image from "atoms/Image";
import { Title } from "base/Typography";

const AvatarText = styled(Title)`
  color: inherit;
  font-size: ${(props) => {
    return props.fontSize || "inherit";
  }};
  font-weight: bold;
`;

const AvatarImage = styled(Image)`
  height: inherit;
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

const sizeHash = {
  xs: {
    avatar: "1.5em",
    font: "0.5em",
  },
  sm: {
    avatar: "2em",
    font: "0.75em",
  },
  lg: {
    avatar: "3em",
    font: "1.25em",
  },
  xl: {
    avatar: "3.5em",
    font: "1.5em",
  },
};

const variantHash = {
  success: "success80",
  warning: "warning80",
  alert: "alert80",
  info: "info80",
  action: "action80",
};

function Avatar({
  alt, brand, icon, id, label, onClick, size, variant,
}) {
  let labelType;
  let iconType;

  const selectedSize = size && sizeHash[size.toLowerCase()];
  const avatarSize = selectedSize ? selectedSize.avatar : "2.5rem";
  const fontSize = selectedSize ? selectedSize.font : "1em";

  let backgroundColor = variant ? (variantHash[variant] || variant.toLowerCase()) : "action40";
  const textColor = "inverse";

  let media = null;
  try {
    if (icon && icon.search(/[/\\.]/) >= 0) {
      media = new URL(icon, window.location.origin);
    }
  } catch (ex) {
    media = null;
  }

  if (media) {
    iconType = (
      <AvatarImage
        alt={alt}
        isRound
        src={media}
        width={avatarSize}
      />
    );
  } else if (icon && typeof icon === "string") {
    iconType = <Icon icon={icon} size="lg" />;
  } else {
    labelType = <AvatarText weight="semibold" fontSize={fontSize} text={label && label.substring(0, 2)} />;
  }

  if (!variant && brand) {
    backgroundColor = brand;
  }

  return (
    <TagContainer
      avatarSize={avatarSize}
      backgroundColor={backgroundColor}
      id={id}
      onClick={onClick}
      textColor={textColor}
    >
      {iconType || labelType}
    </TagContainer>
  );
}

Avatar.propTypes = {
  alt: PropTypes.string,
  brand: PropTypes.oneOf("research", "jobs", "bi", "broker", "brand1", "brand2", "brand3", "brand4"),
  /** Option 1:
   * <br>
   * Enter the name of the icon as the prop value. (ex. icon="circle"
   *  Option 2:
   * <br>
   * Enter an image URL. (ex. icon="http://path/to/image/image.png") */
  icon: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  /** Options: 'xs',  'sm', 'lg', 'xl' */
  size: PropTypes.string,
  /** Options: 'action',  'info', 'success', 'warning', 'alert' */
  variant: PropTypes.string,
};

Avatar.defaultProps = {
  alt: null,
  brand: null,
  icon: null,
  id: null,
  label: null,
  onClick: null,
  size: null,
  variant: null,
};

export default Avatar;
