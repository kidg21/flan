/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ImageWrapper = styled.img`
  width: ${(props) => {
    return props.width || "inherit";
  }};
  height: auto;
  border-radius: ${(props) => {
    return props.circle ? "100%" : "5px";
  }};
  box-shadow: ${(props) => {
    return props.border ? `0 0 0 2px ${props.theme.palette.border}` : "";
  }};
`;

function Image({
  alt, border, circle, src, width,
}) {
  return (
    <ImageWrapper alt={alt} border={border} circle={circle} src={src} title={alt} width={width} />
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  border: PropTypes.boolean,
  circle: PropTypes.boolean,
  src: PropTypes.string,
  width: PropTypes.number,
};
Image.defaultProps = {
  src: null,
  border: false,
  circle: false,
  width: null,
};

export default Image;
