/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import mime from "mime";
import Image from "atoms/Image";
import Card, { CardSection } from "elements/Card";

const MediaContainer = styled.section`
  /* stuff */
`;

function Media({ media, mediaDesc }) {
  const mimeType = mime.getType(media);
  let mediaSection;
  if (mimeType) {
    if (mimeType.startsWith("image")) {
      mediaSection = (
        <Image
          src={media}
          alt={mediaDesc || mimeType}
          width="100%"
        />
      );
    }
  }

  return (
    <MediaContainer
      media={media}
      mediaDesc={mediaDesc}
    >
      {mediaSection}
    </MediaContainer>
  );
}

Media.propTypes = {
  // brand: PropTypes.string,
  // className: PropTypes.string,
  // hasBackground: PropTypes.bool,
  // icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  // id: PropTypes.string,
  // label: PropTypes.string,
  // variant: PropTypes.string,
};

Media.defaultProps = {
  // brand: null,
  // className: null,
  // hasBackground: true,
  // icon: null,
  // id: null,
  // label: null,
  // variant: null,
};

export default Media;
