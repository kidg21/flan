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
  type, icon, id, src, alt, image, label, brand, onClick, size,
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


  if (image) {
    iconType = (<Image
      circle
      src={src}
      height={avatarSize}
      width={avatarSize}
      alt={alt}
    />);
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
    } else { null; }
  }
  


  return (
    <TagContainer
      backgroundColor={backgroundColor}
      icon={icon}
      src={src}
      alt={alt}
      brand={brand}
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
  /** Options: 'action',  'info', 'success', 'warning', 'alert' */
  type: PropTypes.string,
  /** Enter the name of the icon as the prop value. (ex. icon='circle' */
  icon: PropTypes.string,
  image: PropTypes.node,
  src: PropTypes.node,
  brand: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.node,
  size: PropTypes.node,
  label: PropTypes.string,
};

Avatar.defaultProps = {
  type: null,
  image: null,
  src: null,
  brand: null,
  alt: null,
  size: null,
  onClick: null,
  icon: null,
  id: null,
  label: null,
};

export default Avatar;
