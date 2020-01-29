/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Placeholder from "images/placeholders/placeholder-photo.png";

const ImageWrapper = styled.img`
  width: ${(props) => {
    return props.width || "inherit";
  }};
  height: auto;
  border-radius: ${(props) => {
    return props.circle ? "100%" : "";
  }};
  filter: ${(props) => {
    return props.border ? props.theme.shadows.shadow1 : "";
  }};
  cursor: ${(props) => {
    return props.onClick ? "pointer" : "";
  }};
`;

function Image({
  alt, border, circle, className, onClick, src, width,
}) {
  return (
    <ImageWrapper
      alt={alt}
      border={border}
      circle={circle}
      className={className}
      onClick={onClick}
      src={src || Placeholder}
      title={alt}
      width={width}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  border: PropTypes.bool,
  circle: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
Image.defaultProps = {
  border: false,
  circle: false,
  className: null,
  onClick: null,
  src: null,
  width: null,
};

export default Image;
