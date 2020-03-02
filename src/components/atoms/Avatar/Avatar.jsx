/* eslint-disable complexity */
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
  alt, brand, icon, id, label, onClick, size, type,
}) {
  let labelType;
  let iconType;

  const sizeHash = {
    "4x": {
      avatar: "5em",
      font: "2.5em",
    },
    "3x": {
      avatar: "4em",
      font: "2em",
    },
    "2x": {
      avatar: "3em",
      font: "1.5em",
    },
    "1x": {
      avatar: "2.5em",
      font: "1em",
    },
  };

  const selectedSize = size && sizeHash[size.toLowerCase()];
  const avatarSize = selectedSize ? selectedSize.avatar : "2.5rem";
  const fontSize = selectedSize ? selectedSize.font : "1em";

  const typeHash = {
    success: "success80",
    warning: "warning80",
    alert: "alert80",
    info: "info80",
    action: "action80",
  };

  let backgroundColor = type ? (typeHash[type] || type.toLowerCase()) : "action40";
  const textColor = "inverse";

  let media = null;
  try {
    media = new URL(icon);
  } catch (ex) {
    media = null;
  }

  if (media) {
    iconType = (
      <Image
        alt={alt}
        circle
        height={avatarSize}
        src={media}
        width={avatarSize}
      />
    );
  } else if (icon) {
    iconType = <Icon icon={icon} size="lg" />;
  } else {
    labelType = <AvatarText weight="semibold" fontSize={fontSize} text={label.substring(0, 2)} />;
  }

  if (!type) {
    if (brand === "research") {
      backgroundColor = "research";
    } if (brand === "bi") {
      backgroundColor = "bi";
    } if (brand === "jobs") {
      backgroundColor = "jobs";
    } if (brand === "broker") {
      backgroundColor = "broker";
    } if (brand === "brand1") {
      backgroundColor = "brand1";
    } if (brand === "brand2") {
      backgroundColor = "brand2";
    } if (brand === "brand3") {
      backgroundColor = "brand3";
    } if (brand === "brand4") {
      backgroundColor = "brand4";
    }
  }

  return (
    <TagContainer
      alt={alt}
      avatarSize={avatarSize}
      backgroundColor={backgroundColor}
      brand={brand}
      icon={icon}
      id={id}
      label={label}
      media={media}
      onClick={onClick}
      textColor={textColor}
    >
      {iconType || labelType}
    </TagContainer>
  );
}

Avatar.propTypes = {
  alt: PropTypes.string,
  brand: PropTypes.string,
  /** Option 1:
   * <br>
   * Enter the name of the icon as the prop value. (ex. icon="circle"
   *  Option 2:
   * <br>
   * Enter an image URL. (ex. icon="http://path/to/image/image.png") */
  icon: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.node,
  size: PropTypes.node,
  /** Options: 'action',  'info', 'success', 'warning', 'alert' */
  type: PropTypes.string,
};

Avatar.defaultProps = {
  alt: null,
  brand: null,
  icon: null,
  id: null,
  label: null,
  onClick: null,
  size: null,
  type: null,
};

export default Avatar;
