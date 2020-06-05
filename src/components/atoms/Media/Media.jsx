/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import mime from "mime";
import Image from "atoms/Image";

const MediaContainer = styled.section`
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled(Image)`
  width: 100%;
  max-width: inherit;
  height: 100%;
  object-fit: cover;
`;

const Audio = styled.audio`
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const Video = styled.video`
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const Frame = styled.iframe`
  width: 100%;
  height: inherit;
  max-height: 100%;
`;

function Media({
  className,
  id,
  media,
  mediaDesc,
  onClick,
}) {
  const mimeType = mime.getType(media);
  let mediaSection;
  if (mimeType) {
    if (mimeType.startsWith("image")) {
      mediaSection = (
        <ImageWrapper
          src={media}
          alt={mediaDesc || mimeType}
          width="100%"
        />
      );
    } else if (mimeType.startsWith("video")) {
      mediaSection = (
        <Video width="100%" title={mediaDesc || mimeType} controls>
          <source
            src={media}
            type="video/mp4"
          />
          <source
            src={media}
            type="video/webm"
          />
          <source
            src={media}
            type="video/ogg"
          />
          Your browser does not support the video element.
        </Video>
      );
    } else if (mimeType.startsWith("audio")) {
      mediaSection = (
        <Audio title={mediaDesc || mimeType} controls>
          <source
            src={media}
            type="audio/mp3"
          />
          <source
            src={media}
            type="audio/ogg"
          />
          <source
            src={media}
            type="audio/wav"
          />
          Your browser does not support the audio element.
        </Audio>
      );
      // Currently redundant to the 'else' case
      // but captured should we need to handle
      // supported mime-types in a specific way
    } else if (mimeType.startsWith("text")
      || mimeType.startsWith("application")) {
      mediaSection = (
        <Frame src={media} title={mediaDesc || mimeType} width="100%" frameBorder="0" allow="fullscreen" allowFullScreen />
      );
    }
    // Fallback for Youtube, Vimeo and other unsupported mime-types
  } else {
    mediaSection = (
      <Frame src={media} title={mediaDesc || "iframe"} width="100%" height="100vh" frameBorder="0" allow="fullscreen" allowFullScreen />
    );
  }

  return (
    <MediaContainer
      className={className}
      onClick={onClick}
      id={id}
      mediaDesc={mediaDesc}
    >
      {mediaSection}
    </MediaContainer>
  );
}

Media.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  media: PropTypes.string,
  mediaDesc: PropTypes.string,
  onClick: PropTypes.func,
};

Media.defaultProps = {
  className: null,
  id: null,
  media: null,
  mediaDesc: null,
  onClick: null,
};

export default Media;
