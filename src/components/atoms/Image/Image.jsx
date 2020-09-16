/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Placeholder from "images/placeholders/placeholder-photo.png";

const ImageWrapper = styled.img`
  width: ${(props) => {
    return props.width || "100%";
  }};
  height: auto;
  border-radius: ${(props) => {
    return props.isRound ? "100%" : "";
  }};
  cursor: ${(props) => {
    return props.onClick ? "pointer" : "";
  }};
`;

function Image({
  alt, isRound, className, onClick, src, width,
}) {
  return (
    <ImageWrapper
      alt={alt}
      isRound={isRound}
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
  isRound: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
Image.defaultProps = {
  isRound: false,
  className: null,
  onClick: null,
  src: "",
  width: null,
};

export default Image;
