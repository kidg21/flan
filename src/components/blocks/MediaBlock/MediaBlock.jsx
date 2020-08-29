/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Media from "atoms/Media";
import Text, { Title } from "base/Typography";
import Grid from "layout/Grid";
import ModernExterior1 from "images/residential/modern exterior 1.jpg";

const Block = styled(Grid)`
  grid-template-columns: ${(props) => {
    /* return props.gridColumns || "2fr 1fr"; */
    return props.gridColumns || `1fr minmax(0, ${props.mediaHeight || "6rem"})`;
  }};
  grid-template-rows: ${(props) => {
    return props.gridRows || "auto 1fr";
  }};
  grid-template-areas: ${(props) => {
    return props.gridTemplate
      || "'body media' '. media'";
  }};
  align-items: ${(props) => {
    return props.alignItems || "";
  }};
  padding: ${(props) => {
    return props.blockPadding || "";
    /* return props.blockPadding || "0.5rem 0.5rem 0.25rem"; */
  }};
`;

const MediaBox = styled.section`
  grid-area: media;
  background-image: ${(props) => {
    return `url("${props.background}")` || "";
  }};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 6rem;
  height: 6rem;
  border: ${(props) => {
    return `1px solid ${props.theme.palette.neutral60}`;
  }};
  border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
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
  border: ${(props) => {
    return "1px solid transparent";
    /* return `1px solid ${props.theme.palette.neutral60}`; */
  }};
  border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
  }};
  overflow: hidden;
  & > * {
    border-radius: ${(props) => {
    return props.isRound ? "100%" : null;
  }};
  }
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
  align,
  background,
  children,
  className,
  description,
  id,
  isReversed,
  isRound,
  media,
  onClick,
  title,
}) {
  let gridTemplate;
  let gridColumns;
  let blockPadding;
  let justify;
  let padding;
  let alignItems;
  let displayInline;
  switch (align && align.toLowerCase()) {
    case "vertical":
      gridColumns = "1fr";
      if (isReversed) {
        gridTemplate = " 'body body' 'media media'";
        padding = "0 0 1rem";
      } else {
        gridTemplate = "'media media' 'body body'";
        padding = "1rem 0 0";
      }
      break;
    case "inline":
      alignItems = "center";
      if (isReversed) {
        displayInline = true;
        gridColumns = "1fr 3fr";
        gridTemplate = "'media body'";
      } else {
        displayInline = true;
        gridColumns = "3fr 1fr";
        gridTemplate = "'body media'";
        padding = "0 1rem";
      }
      break;
    default:
      if (isReversed) {
        gridTemplate = "'media body'";
        gridColumns = "1fr 3fr";
        padding = "0";
      }
      break;
  }
  // reset grid if no media element is present
  if (!media) {
    gridColumns = "1fr";
    padding = "0";
  }

  return (
    <Block
      alignItems={alignItems}
      blockPadding={blockPadding}
      className={className}
      gridColumns={gridColumns}
      gridTemplate={gridTemplate}
      id={id}
      onClick={onClick}
    >
      {media ? (
        <MediaElement
          justify={justify}
          isRound={isRound}
          media={media}
          mediaDesc={title}
        />
      ) : null}
      {background ? (
        <MediaBox
          background={background}
          justify={justify}
          isRound={isRound}
          title={title}
        />
      ) : null}
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
        {children}
      </Body>
    </Block>
  );
}

MediaBlock.propTypes = {
  /** Sets the vertical alignment of all content
   * Default: 'top'
   */
  align: PropTypes.oneOf(["top", "vertical", "inline"]),
  /** Meant for use in nesting Media Blocks */
  children: PropTypes.node,
  /** className used for extending styles */
  className: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  isReversed: PropTypes.bool,
  isRound: PropTypes.bool,
  /** Used to define the content in the 'media' section */
  media: PropTypes.node,
  /** Used to 'flip' the Media and Body elements along the x-axis */
  onClick: PropTypes.func,
  title: PropTypes.string,
};

MediaBlock.defaultProps = {
  align: "top",
  children: null,
  className: null,
  description: null,
  id: null,
  isReversed: false,
  isRound: false,
  media: null,
  onClick: null,
  title: null,
};

export default MediaBlock;
