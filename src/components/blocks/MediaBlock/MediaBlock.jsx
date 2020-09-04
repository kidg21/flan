/* eslint-disable linebreak-style */
/* eslint-disable complexity */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Media from "atoms/Media";
import Text, { Title } from "base/Typography";
import Grid from "layout/Grid";

const Block = styled(Grid)`
  grid-template-columns: ${(props) => {
    return props.gridColumns || `1fr minmax(0, ${props.mediaHeight || "6rem"})`;
  }};
  grid-template-rows: ${(props) => {
    return props.gridRows || "";
  }};
  grid-template-areas: ${(props) => {
    return props.gridTemplate
      || "'body media'";
  }};
  grid-gap: ${(props) => {
    return props.gridGap || "1rem";
  }};
  align-items: ${(props) => {
    return props.alignItems || "";
  }};
  padding: ${(props) => {
    return props.blockPadding || "";
  }};
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
  width: 100%;
  height: 100%;
  border: ${(props) => {
    return `1px solid ${props.theme.palette.neutral60}`;
  }};
  border-radius: ${(props) => {
    return props.mediaRound ? "50%" : "0.25rem";
  }};
`;

const Body = styled(Grid)`
  grid-area: body;
  padding: ${(props) => {
    return props.padding || "";
    /* return props.padding || "0 0 0 0.5rem"; */
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
  let borderRadius;
  let displayInline;
  let gridColumns;
  let gridGap;
  let gridRows;
  let gridTemplate;
  let justify;
  let mediaSection;
  let padding;

  if (media) {
    if (mediaReverse) {
      gridTemplate = "'media body'";
      gridColumns = "minmax(0,6rem) 1fr";
    } else {
      gridColumns = "1fr minmax(0,6rem)";
    }
    gridRows = "minmax(6rem,0)";
    if (mediaSquare || mediaRound) {
      mediaSection = (
        <MediaThumb
          borderRadius={borderRadius}
          justify={justify}
          media={media}
          mediaRound={mediaRound}
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
    padding = "0";
  }

  return (
    <Block
      alignItems={alignItems}
      blockPadding={blockPadding}
      className={className}
      gridColumns={gridColumns}
      gridGap={gridGap}
      gridRows={gridRows}
      gridTemplate={gridTemplate}
      id={id}
      mediaRound={mediaRound}
      mediaSquare={mediaSquare}
      onClick={onClick}
    >
      {media ? mediaSection : null}
      <Body
        columns="1"
        gap=""
        padding={padding}
        displayInline={displayInline}
      >
        <Grid columns="1" gap="xs">
          {title ? <Title text={title} size="lg" weight="bold" /> : null}
          {description ? (<Text text={description} weight="" />
          ) : null}
        </Grid>
      </Body>
    </Block>
  );
}

MediaBlock.propTypes = {
  /** className used for extending styles */
  className: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  mediaReverse: PropTypes.bool,
  /** Used to define the content in the 'media' section */
  media: PropTypes.node,
  mediaRound: PropTypes.bool,
  mediaSquare: PropTypes.bool,
  /** Used to 'flip' the Media and Body elements along the x-axis */
  onClick: PropTypes.func,
  title: PropTypes.string,
};

MediaBlock.defaultProps = {
  className: null,
  description: null,
  id: null,
  mediaReverse: false,
  media: null,
  mediaRound: false,
  mediaSquare: false,
  onClick: null,
  title: null,
};

export default MediaBlock;
