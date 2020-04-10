/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Block = styled.div`
  display: grid;
  grid-template-columns: ${(props) => {
    return props.gridColumns || "1fr 4fr";
  }};
  padding: ${(props) => {
    return props.blockPadding || "0";
  }};
  grid-template-areas: ${(props) => {
    return props.gridTemplate || "'content body' '. body'";
  }};
  align-items: ${(props) => {
    return props.alignItems || "";
  }};
`;

const Media = styled.section`
  grid-area: content;
  display: flex;
  justify-content: ${(props) => {
    return props.justify || "";
  }};
  padding: 0;
  width: 100%;
  height: auto;
  & > * {
    border-radius: ${(props) => {
    return props.isRound ? "100%" : "3px";
  }};
  filter: ${(props) => {
    return props.border ? props.theme.shadows.shadow1 : "";
  }};
  }
`;

const Body = styled.section`
  grid-area: body;
  padding: ${(props) => {
    return props.padding || "0 0 0 1rem";
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
  body,
  children,
  isRound,
  className,
  id,
  media,
  onClick,
  isReversed,
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
        gridTemplate = " 'body body' 'content content'";
        padding = "0 0.25rem 1rem";
      } else {
        gridTemplate = "'content content' 'body body'";
        padding = "1rem 0.25rem 0";
      }
      break;
    case "inline":
      alignItems = "center";
      if (isReversed) {
        displayInline = true;
        gridColumns = "1fr 3rem";
        gridTemplate = "'body content'";
        padding = "0 1rem 0 0";
      } else {
        displayInline = true;
        gridColumns = "3rem 1fr";
        gridTemplate = "'content body'";
        padding = "0 1rem";
      }
      break;
    default:
      if (isReversed) {
        gridTemplate = "'body content' 'body .'";
        gridColumns = "4fr 1fr";
        padding = "0 1rem 0 0";
        justify = "flex-end";
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
        <Media justify={justify} isRound={isRound}>
          {media}
        </Media>
      ) : null}
      {body || children ? (
        <Body padding={padding} displayInline={displayInline}>
          {body}
          {children}
        </Body>
      ) : null}
    </Block>
  );
}

MediaBlock.propTypes = {
  /** Sets the vertical alignment of all content
   * Default: 'top'
   */
  align: PropTypes.oneOf(["top", "vertical", "inline"]),
  /** Used to define the content in the 'body' section */
  body: PropTypes.node,
  /** Meant for use in nesting Media Blocks */
  children: PropTypes.node,
  /** className used for extending styles */
  className: PropTypes.string,
  id: PropTypes.string,
  isReversed: PropTypes.bool,
  isRound: PropTypes.bool,
  /** Used to define the content in the 'media' section */
  media: PropTypes.node,
  /** Used to 'flip' the Media and Body elements along the x-axis */
  onClick: PropTypes.func,
};

MediaBlock.defaultProps = {
  align: "top",
  body: null,
  children: null,
  className: null,
  id: null,
  isReversed: false,
  isRound: false,
  media: null,
  onClick: null,
};

export default MediaBlock;
