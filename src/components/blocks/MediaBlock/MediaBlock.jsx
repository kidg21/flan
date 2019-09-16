import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Block = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 6rem) 1fr;
  grid-template-rows: min-content 1fr;
  grid-template-areas:
    "content body"
    "content-footer body"
    ". body";
  flex: auto;
  background: #fdfcfc;
`;

const Media = styled.div`
  grid-area: content;
  padding: 1px;
`;

function MediaBlock({ id, media, children, className }) {
  return (
    <Block id={id} className={className} media={media}>
      <Media media={media} />
      {children}
    </Block>
  );
}

MediaBlock.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any.isRequired,
  /** className used for extending styles */
  className: PropTypes.string,
};

export default MediaBlock;
