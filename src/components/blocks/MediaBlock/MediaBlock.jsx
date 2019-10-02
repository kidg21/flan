/* eslint-disable linebreak-style */
/* eslint-disable displayInlinebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Block = styled.div`
  display: grid;
  grid-template-columns: ${(props) => {
    return props.gridColumns || "1fr 6fr";
  }};
  padding: ${(props) => {
    return props.blockPadding || "1rem";
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
    return props.justifyMedia || "";
  }};
  padding: ${(props) => {
    return props.mediaPadding || "";
  }};
`;

const Body = styled.section`
  grid-area: body;
  padding: ${(props) => {
    return props.bodyPadding || "0 0 0 1.5rem";
  }};
  overflow: hidden;
  > * {
    white-space: normal;
    display: ${(props) => {
    return props.displayInline ? "none" : "";
  }};
    &:first-child {
      display: ${(props) => {
    return props.displayInline ? "block" : "";
  }};
      white-space: ${(props) => {
    return props.displayInline ? "nowrap" : "";
  }};
      overflow: ${(props) => {
    return props.displayInline ? "hidden" : "";
  }};
      text-overflow: ${(props) => {
    return props.displayInline ? "ellipsis" : "";
  }};
  margin-bottom: ${(props) => {
    return props.displayInline ? "0" : "";
  }};
    }
    &:only-child {
      margin-bottom: 0;
    }
  }
  ${Block} {
    padding: 1rem 0 0;
  }
`;

function MediaBlock({
  align, body, children, className, id, media, onClick, reverse,
}) {
  let gridTemplate;
  let gridColumns;
  let blockPadding;
  let mediaPadding;
  let justifyMedia;
  let bodyPadding;
  let alignItems;
  let displayInline;
  switch (align && align.toLowerCase()) {
    case "center":
      alignItems = "center";
      gridTemplate = "'content body' 'content body'";
      break;
    case "vertical":
      gridTemplate = "'content content' 'body body'";
      gridColumns = "1fr";
      bodyPadding = "1rem 0.25rem 0";
      break;
    case "inline":
      displayInline = true;
      alignItems = "center";
      gridColumns = "3rem 1fr";
      blockPadding = "1px 0 1px 1px";
      break;
    default:
      break;
  }
  // flips media and body sections
  if (reverse) {
    gridTemplate = "'body content' 'body .'";
    gridColumns = "6fr 1fr";
    bodyPadding = "0 1.5rem 0 0";
    justifyMedia = "flex-end";
  }
  if (reverse && align === "center") {
    alignItems = "center";
    gridTemplate = "'body content' 'body content'";
  }
  if (reverse && align === "vertical") {
    gridTemplate = " 'body body' 'content content'";
    bodyPadding = "0 0.25rem 1rem";
  }
  if (reverse && align === "inline") {
    alignItems = "center";
    gridColumns = "1fr 3rem";
    blockPadding = "1px 1px 1px 1rem";
  }
  // reset grid if no media element is present
  if (!media) {
    gridColumns = "1fr";
    bodyPadding = "0";
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
      reverse={reverse}
    >
      {media ? (
        <Media mediaPadding={mediaPadding} justifyMedia={justifyMedia}>
          {media}
        </Media>
      ) : null}
      {body ? (
        <Body bodyPadding={bodyPadding} displayInline={displayInline}>
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
  align: PropTypes.oneOf(["default (top)", "center", "vertical", "displayInline"]),
  /** Used to define the content in the 'body' section */
  body: PropTypes.node,
  /** Meant for use in nesting Media Blocks */
  children: PropTypes.node,
  /** className used for extending styles */
  className: PropTypes.string,
  id: PropTypes.string,
  /** Used to define the content in the 'media' section */
  media: PropTypes.node,
  /** Used to 'flip' the Media and Body elements along the x-axis */
  onClick: PropTypes.func,
  reverse: PropTypes.bool,
};

MediaBlock.defaultProps = {
  align: null,
  body: null,
  children: null,
  className: null,
  id: null,
  media: null,
  onClick: null,
  reverse: false,
};

export { MediaBlock as default };
