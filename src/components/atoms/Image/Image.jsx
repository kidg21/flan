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
  box-shadow: ${(props) => {
    return props.border ? `0 0 0 2px ${props.theme.border}` : "";
  }};
`;

function Image({
  alt, border, circle, className, src, width,
}) {
  return (
    <ImageWrapper
      alt={alt}
      border={border}
      circle={circle}
      className={className}
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
  src: PropTypes.string,
  width: PropTypes.node,
};
Image.defaultProps = {
  border: false,
  circle: false,
  className: null,
  src: null,
  width: null,
};

export default Image;
