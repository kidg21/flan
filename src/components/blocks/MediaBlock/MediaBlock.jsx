/* eslint-disable linebreak-style */
/* eslint-disable complexity */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Media from "atoms/Media";
import Text, { Title } from "base/Typography";
import Grid from "layout/Grid";

const Block = styled(Grid)`
  grid-template-columns: ${(props) => { return props.gridColumns; }};
  grid-template-areas: ${(props) => {
    return props.gridTemplate
      || "'body media'";
  }};
  grid-gap: ${(props) => { return props.gridGap || "1.25rem"; }};
  align-items: ${(props) => {
    return props.alignItems || "";
  }};
  padding: ${(props) => {
    return props.blockPadding || "";
  }};
`;

const MediaTitle = styled(Title)`
  line-height: 1;
`;

const MediaElement = styled(Media)`
  grid-area: media;
  display: flex;
  justify-content: ${(props) => {
    return props.justify || "";
  }};
  width: 100%;
  height: auto;
  padding: 0;
  border-radius: ${(props) => {
    return props.borderRadius || "0.25rem";
  }};
  overflow: hidden;
`;

const MediaThumb = styled.section`
  grid-area: media;
  background-image: ${(props) => {
    return `url("${props.media}")` || "";
  }};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: ${(props) => {
    return props.mediaSize;
  }};
  height: ${(props) => {
    return props.mediaSize;
  }};
  border: ${(props) => { return `1px solid ${props.theme.palette.neutral60}`; }};
  border-radius: ${(props) => {
    return props.mediaRound ? "50%" : "0.25rem";
  }};
`;

const Body = styled(Grid)`
  grid-area: body;
  padding: ${(props) => {
  return props.bodyPadding || "";
  }};
  overflow: hidden;
  display: ${(props) => {
    return props.displayInline ? "none" : "";
  }};
  width: inherit;
  display: ${(props) => {
    return props.displayInline ? "block" : "";
  }};
  white-space: ${(props) => {
    return props.displayInline ? "nowrap" : "normal";
  }};
  margin-bottom: ${(props) => {
    return props.displayInline ? "0" : "";
  }};
  > * {
  overflow: ${(props) => {
    return props.displayInline ? "hidden" : "";
  }};
  text-overflow: ${(props) => {
    return props.displayInline ? "ellipsis" : "";
  }};
  }
  &:only-child {
    margin-bottom: 0;
  }
  ${Block} {
    padding: 1rem 0 0;
  }
`;

function MediaBlock({
  className,
  description,
  id,
  mediaReverse,
  media,
  mediaRound,
  mediaSquare,
  onClick,
  title,
}) {
  let alignItems;
  let blockPadding;
  let bodyPadding;
  let borderRadius;
  let displayInline;
  let gridColumns;
  let gridGap;
  let gridTemplate;
  let justify;
  let mediaSection;
  const mediaSize = "6rem";

  if (media) {
    if (mediaReverse) {
      gridTemplate = "'media body'";
      gridColumns = `minmax(0, ${mediaSize}) 1fr`;
    } else {
      gridColumns = `1fr minmax(0, ${mediaSize})`;
    }
    if (mediaSquare || mediaRound) {
      mediaSection = (
        <MediaThumb
          borderRadius={borderRadius}
          justify={justify}
          media={media}
          mediaRound={mediaRound}
          mediaSize={mediaSize}
          title={title}
        />
      );
    } else {
      mediaSection = (
        <MediaElement
          justify={justify}
          media={media}
          mediaDesc={title}
        />
      );
    }
  } else {
    gridTemplate = "'body'";
    gridColumns = "1fr";
    bodyPadding = "0";
  }

  return (
    <Block
      alignItems={alignItems}
      blockPadding={blockPadding}
      className={className}
      gridColumns={gridColumns}
      gridGap={gridGap}
      gridTemplate={gridTemplate}
      id={id}
      mediaRound={mediaRound}
      mediaSize={mediaSize}
      mediaSquare={mediaSquare}
      onClick={onClick}
    >
      <Body
        bodyPadding={bodyPadding}
        columns="1"
        displayInline={displayInline}
        gap=""
      >
        <Grid columns="1" gap="xs">
          {title ? <MediaTitle text={title} size="lg" weight="bold" /> : null}
          {description ? (<Text text={description} />
          ) : null}
        </Grid>
      </Body>
      {media ? mediaSection : null}
    </Block>
  );
}

MediaBlock.propTypes = {
  /** className used for extending styles */
  className: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  /** Used to define the content in the 'media' section */
  media: PropTypes.node,
  /** Used to 'flip' the Media and Body elements along the x-axis */
  mediaReverse: PropTypes.bool,
  mediaRound: PropTypes.bool,
  mediaSquare: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

MediaBlock.defaultProps = {
  className: null,
  description: null,
  id: null,
  media: null,
  mediaReverse: false,
  mediaRound: false,
  mediaSquare: false,
  onClick: null,
  title: null,
};

export default MediaBlock;
