/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Block = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  justify-content: space-between;
`;

function IconBlock({
  id, children, style, className,
}) {
  return (
    <Block id={id} style={style} className={className}>
      {children}
    </Block>
  );
}

IconBlock.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  /** Currently needed for stories
   * TODO: retructre stories and remove 'style' prop
   */
  style: PropTypes.object,
  /** className used for extending styles */
  className: PropTypes.string,
};


IconBlock.defaultProps = {
  id: null,
  style: null,
  className: null,
};

export default IconBlock;
