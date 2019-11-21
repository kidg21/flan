/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
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
    return props.circle ? "100%" : "5px";
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
  border: PropTypes.boolean,
  circle: PropTypes.boolean,
  className: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number,
};
Image.defaultProps = {
  border: false,
  circle: false,
  className: null,
  src: null,
  width: null,
};

export default Image;
