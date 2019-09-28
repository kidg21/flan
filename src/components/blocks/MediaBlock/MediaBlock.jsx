/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Block = styled.div`
  display: grid;
  grid-template-columns: ${(props) => {
    return props.gridColumns || "auto 1fr";
  }};
  padding: 1rem;
  grid-template-areas: ${(props) => {
    return props.gridTemplate || "'content body' '. body'";
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
  > * {
    max-width: 100%;
    height: 100%;
  }
`;

const Body = styled.section`
  grid-area: body;
  padding: ${(props) => {
    return props.bodyPadding || "0.5rem 1rem 0.5rem 1.5rem";
  }};
`;

function MediaBlock({
  body, className, id, media, layout,
}) {
  let gridTemplate;
  let gridColumns;
  let mediaPadding;
  let justifyMedia;
  let bodyPadding;
  switch (layout && layout.toLowerCase()) {
    case "flip":
      gridTemplate = "'body content' 'body .'";
      gridColumns = " 1fr auto";
      bodyPadding = "0.5rem 1.5rem 0.5rem 1rem ";
      justifyMedia = "flex-end";
      break;
    case "vertical":
      gridTemplate = "'content content' 'body body'";
      bodyPadding = "1rem 0 0.5rem";
      break;
    default:
      break;
  }

  return (
    <Block id={id} className={className} gridTemplate={gridTemplate} gridColumns={gridColumns}>
      {media ? (
        <Media mediaPadding={mediaPadding} justifyMedia={justifyMedia}>
          {media}
        </Media>
      ) : null}
      {body ? <Body bodyPadding={bodyPadding}>{body}</Body> : null}
    </Block>
  );
}

MediaBlock.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any.isRequired,
  /** className used for extending styles */
  className: PropTypes.string,
};

export { MediaBlock as default };
