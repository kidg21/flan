/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "base/Typography";

const ImageContainer = styled.div`
  position: relative;
  width: min-content;
  /* height: auto; */
  height: 100%;
`;

const ImageLabel = styled(Title)`
  /* color: red; */
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: white;
  /* margin-bottom: 1em; */
  padding: .25em;
  text-align: center;
  max-height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ImageWrapper = styled.img`
  border-radius: ${(props) => {
    return props.borderRadius || "";
  }};
  width: ${(props) => {
    return props.width || "inherit";
  }};
  height: ${(props) => {
    return props.height || "inherit";
  }};
  &:after {
    content: "";
  }
`;

function Image({
  src, width, height, type, label,
}) {
  let borderRadius;
  switch (type) {
    case "circle":
      borderRadius = "100%";
      break;
    case "thumb":
      width = "75px";
      height = "75px";
      break;
    default:
      break;
  }

  return (
    <ImageContainer>
      <ImageWrapper
        src={src}
        width={width}
        height={height}
        borderRadius={borderRadius}
        // label={label}
      />
      <ImageLabel>{label}</ImageLabel>
    </ImageContainer>
  );
}

Image.propTypes = {
  src: PropTypes.string,
};
Image.defaultProps = {
  src: null,
};

export default Image;
