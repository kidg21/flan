/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
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
    return props.circle ? "100%" : "3px";
  }};
    box-shadow: ${(props) => {
    return props.border ? `0 0 0 2px ${props.theme.border}` : "";
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
      overflow: ${(props) => {
    return props.displayInline ? "hidden" : "";
  }};
      text-overflow: ${(props) => {
    return props.displayInline ? "ellipsis" : "";
  }};
      margin-bottom: ${(props) => {
    return props.displayInline ? "0" : "";
  }};
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
  border,
  children,
  circle,
  className,
  id,
  media,
  onClick,
  reverse,
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
      if (reverse) {
        gridTemplate = " 'body body' 'content content'";
        padding = "0 0.25rem 1rem";
      } else {
        gridTemplate = "'content content' 'body body'";
        padding = "1rem 0.25rem 0";
      }
      break;
    case "inline":
      alignItems = "center";
      if (reverse) {
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
      if (reverse) {
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
        <Media justify={justify} border={border} circle={circle}>
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
  border: PropTypes.boolean,
  /** Meant for use in nesting Media Blocks */
  children: PropTypes.node,
  circle: PropTypes.boolean,
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
  align: "top",
  body: null,
  border: false,
  children: null,
  circle: false,
  className: null,
  id: null,
  media: null,
  onClick: null,
  reverse: false,
};

export { MediaBlock as default };
