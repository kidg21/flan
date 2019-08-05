import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
`;

function IconBlock({ id, children, style, className }) {
  return (
    <Block id={id} style={style} className={className}>
      {children}
    </Block>
  );
}

IconBlock.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any.isRequired,
  /** Currently needed for stories
   * TODO: retructre stories and remove 'style' prop
   */
  style: PropTypes.string,
  /** className used for extending styles */
  className: PropTypes.string,
};

export default IconBlock;
