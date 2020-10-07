/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PointerEventsContext } from "States";
import Placeholder from "images/placeholders/placeholder-photo.png";

const ImageWrapper = styled.img`
  width: ${(props) => {
    return props.width || "100%";
  }};
  height: ${(props) => {
    return props.height || "auto";
}};
  border-radius: ${(props) => {
    return props.isRound ? "100%" : "";
  }};
  cursor: ${(props) => {
    return props.onClick ? "pointer" : "";
  }};
  pointer-events: ${(props) => {
    return props.mouseEvents;
  }};
`;

function Image({
  alt, className, height, isRound, onClick, src, width,
}) {
  return (
    <ImageWrapper
      alt={alt}
      height={height}
      isRound={isRound}
      className={className}
      onClick={onClick}
      src={src || Placeholder}
      title={alt}
      width={width}
      mouseEvents={useContext(PointerEventsContext)}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isRound: PropTypes.bool,
  onClick: PropTypes.func,
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
Image.defaultProps = {
  className: null,
  height: null,
  isRound: false,
  onClick: null,
  src: "",
  width: null,
};

export default Image;
