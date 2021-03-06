/* eslint-disable linebreak-style */
/* eslint-disable complexity */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PointerEventsContext } from "States";
import Media from "atoms/Media";
import Icon from "atoms/Icon";
import Text, { Title } from "base/Typography";
import Grid from "layout/Grid";

const Block = styled(Grid)`
  grid-template-columns: ${(props) => {
    return props.gridColumns;
  }};
  grid-template-areas: ${(props) => { return props.gridTemplate || ""; }};
  grid-gap: ${(props) => {
    return props.gridGap || "1.25rem";
  }};
  align-items: ${(props) => {
    return props.alignItems || "";
  }};
  padding: ${(props) => {
    return props.blockPadding || "";
  }};
  pointer-events: ${(props) => {
    return props.mouseEvents;
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
  display: flex;
  justify-content: center;
  border-radius: ${(props) => {
    return props.mediaRound ? "50%" : "0.25rem";
  }};
  font-size: ${(props) => { return props.icon ? `${props.mediaSize}em` : ""; }};
  width: ${(props) => { return props.icon ? "100%" : `${props.mediaSize}em`; }};
  height: ${(props) => { return props.icon ? "100%" : `${props.mediaSize}em`; }};
  border: ${(props) => { return props.icon ? "" : `1px solid ${props.theme.palette.neutral80}`; }};
`;

const Body = styled(Grid)`
  grid-area: body;
  width: inherit;
  padding: ${(props) => {
    return props.bodyPadding || "";
  }};
  overflow: hidden;
  &:only-child {
    margin-bottom: 0;
  }
  ${Block} {
    padding: 1rem 0 0;
  }
`;

const MediaTitle = styled(Title)`
  font-size: inherit;
`;

const MediaDescription = styled(Text)`
  font-size: inherit;
`;

const MediaIcon = styled(Icon)`
  font-size: inherit;
`;

const ChildWrapper = styled.section`
  grid-column: 1/-1;
  padding-left: 1rem;
  ${Block} {
    grid-template-areas: ${(props) => { return props.nestedTemplate; }};
    grid-template-columns: ${(props) => { return props.nestedColumns; }};
  }
  > section {
    ${MediaIcon} {
      font-size: 0.5em;
    }
    padding-bottom: 1.25rem;
    &:last-of-type {
      padding-bottom: 0.25rem;
    }
  }
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
  let gridGap;
  let justify;
  let mediaSection;

  const pointerEvents = useContext(PointerEventsContext);

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
    case "2xl":
      mediaSize = `${_mediaSize * 6}`;
      break;
  }

  const _nestedColumns = `${mediaSize * 0.5}`;
  const iconSize = `${mediaSize * 0.5}`;
  const nestedIcons = `${iconSize * 0.5}`;

  let gridTemplate = "'body media'";
  let nestedTemplate = gridTemplate;
  let gridColumns = ["1fr", `minmax(0, ${icon && typeof icon === "string" ? iconSize : mediaSize}em)`];
  let nestedColumns = ["1fr", `minmax(0, ${icon && typeof icon === "string" ? nestedIcons : _nestedColumns}em)`];

  if (media || icon) {
    if (mediaReverse) {
      gridTemplate = "'media body'";
      gridColumns.reverse();
      nestedTemplate = gridTemplate;
      nestedColumns.reverse();
    }
    gridColumns = gridColumns.join(" ");
    nestedColumns = nestedColumns.join(" ");
    if ((mediaSquare || mediaRound) && !icon) {
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
    } else if (icon && typeof icon === "string") {
      mediaSection = (
        <MediaThumb
          icon={icon}
          justify={justify}
          mediaSize={iconSize}
          title={title}
        >
          <MediaIcon icon={icon} iconSize={iconSize} brand="brand1" />
        </MediaThumb>
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
      mouseEvents={pointerEvents}
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
        <ChildWrapper nestedTemplate={nestedTemplate} nestedColumns={nestedColumns}>
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
  /** Enter the name of the icon as the prop value. (ex. icon="circle" */
  icon: PropTypes.string,
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
      "2xl",
    ]),
  ]),
  title: PropTypes.string,
};

MediaBlock.defaultProps = {
  children: null,
  className: null,
  description: null,
  icon: null,
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
