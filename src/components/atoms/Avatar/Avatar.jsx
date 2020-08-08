/* eslint-disable complexity */
/* eslint-disable security/detect-object-injection */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import Image from "atoms/Image";
import Text from "base/Typography";

const AvatarText = styled(Text)`
  color: inherit;
  user-select: none;
  font-size: ${(props) => {
    return props.fontSize || "inherit";
  }};
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
    avatar: "1.8em",
    font: "0.8em",
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
  neutral: "neutral100",
};

function Avatar({
  alt, icon, id, label, onClick, size, variant,
}) {
  let labelType;
  let iconType;

  const selectedSize = size && sizeHash[size.toLowerCase()];
  const avatarSize = selectedSize ? selectedSize.avatar : "2.2rem";
  const fontSize = selectedSize ? selectedSize.font : "0.876rem";

  const backgroundColor = variant ? (variantHash[variant] || variant.toLowerCase()) : "action60";
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
    iconType = <Icon icon={icon} size={size} />;
  } else {
    labelType = <AvatarText weight="medium" fontSize={fontSize} text={label && label.substring(0, 2)} />;
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
  icon: null,
  id: null,
  label: null,
  onClick: null,
  size: null,
  variant: null,
};

export default Avatar;
