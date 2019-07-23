import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors, shadows } from "Variables";

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  // position: ${props => (props.stacked ? "relative" : "")};
  width: ${props => (props.stacked ? "100%" : "7rem")};
  // justify-content: ${props => (props.stacked ? "center" : "space-between")};
  // align-items: ${props => (props.stacked ? "center" : "")};
  // > * {
  //   position: ${props => (props.stacked ? "absolute" : "")};
`;

function IconBlock({ id, stacked, children, style, className }) {
  return (
    <Block id={id} stacked={stacked} style={style} className={className}>
      {children}
    </Block>
  );
}

IconBlock.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any.isRequired,
  /** className used for extending styles */
  className: PropTypes.string,
};

export default IconBlock;
