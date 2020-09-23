/* eslint-disable linebreak-style */
/* eslint-disable complexity */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Media from "atoms/Media";
import Icon from "atoms/Icon";
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

const MediaIcon = styled(Icon)`
  font-size: ${(props) => { return `${props.mediaSize}em`; }};
`;

const MediaThumb = styled.section`
  grid-area: media;
  background-image: ${(props) => {
    return `url("${props.media}")` || "";
  }};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  width: ${(props) => { return `${props.mediaSize}em`; }};
  height: ${(props) => { return `${props.mediaSize}em`; }};
  border: ${(props) => { return props.icon ? "" : `1px solid ${props.theme.palette.neutral80}`; }};
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

const ChildWrapper = styled.section`
  grid-column: 1/-1;
  padding-left: 1rem;
  ${Block} {
    grid-template-columns: ${(props) => { return props.nestedColumns; }};
  }
  > section {
    padding-bottom: 1.25rem;
    &:last-of-type {
      padding-bottom: 0.25rem;
    }
  }
`;

const MediaTitle = styled(Title)`
  font-size: inherit;
`;

const MediaDescription = styled(Text)`
  font-size: inherit;
`;

function MediaBlock({
  children,
  className,
  description,
  icon,
  id,
  mediaReverse,
  media,
  mediaRound,
  mediaSquare,
  onClick,
  size,
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

  let mediaSize;
  const _mediaSize = 2;
  switch (size) {
    case "xs":
      mediaSize = `${_mediaSize}`;
      break;
    case "sm":
      mediaSize = `${_mediaSize * 2}`;
      break;
    default:
      mediaSize = `${_mediaSize * 3}`;
      break;
    case "lg":
      mediaSize = `${_mediaSize * 4}`;
      break;
    case "xl":
      mediaSize = `${_mediaSize * 5}`;
      break;
  }

  let nestedColumns;
  const _nestedColumns = `${mediaSize * 0.5}`;
  if (media || icon) {
    if (mediaReverse) {
      gridTemplate = "'media body'";
      gridColumns = `minmax(0, ${mediaSize}em) 1fr`;
      nestedColumns = `minmax(0, ${_nestedColumns}em) 1fr`;
    } else {
      gridColumns = `1fr minmax(0, ${mediaSize}em)`;
      nestedColumns = `1fr minmax(0, ${_nestedColumns}em)`;
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

  if (icon && typeof icon === "string") {
    mediaSection = (
      <MediaThumb
        borderRadius={borderRadius}
        justify={justify}
        media={icon}
        mediaRound={mediaRound}
        mediaSize={mediaSize}
        title={title}
        icon={icon}
      >
        <MediaIcon icon={icon} mediaSize={mediaSize} brand="brand1" />
      </MediaThumb>
    );
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
          {description ? (<MediaDescription text={description} />
          ) : null}
        </Grid>
      </Body>
      {media || icon ? mediaSection : null}
      {children ? (
        <ChildWrapper nestedColumns={nestedColumns}>
          {children}
        </ChildWrapper>
      ) : null}
    </Block>
  );
}

MediaBlock.propTypes = {
  children: PropTypes.node,
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
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "xs",
      "sm",
      "lg",
      "xl",
    ]),
  ]),
  title: PropTypes.string,
};

MediaBlock.defaultProps = {
  children: null,
  className: null,
  description: null,
  id: null,
  media: null,
  mediaReverse: false,
  mediaRound: false,
  mediaSquare: false,
  onClick: null,
  size: null,
  title: null,
};

export default MediaBlock;
