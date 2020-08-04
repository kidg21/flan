/* eslint-disable linebreak-style */
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Line = styled.hr`
  width: 100%;
  height: 0;
  margin: 1rem 0;
  border-top: 1px solid
    ${(props) => {
    return props.theme.palette.neutral20;
  }};
   ${(props) => {
    return props.isVertical
      && css`
        width: 0;
        height: 100%;
        margin: 0 1rem;
        border-top: none;
        border-right:  ${() => {
          return `1px solid ${props.theme.palette.neutral20
            }`;
        }};
     `;
  }}
`;

function Divider({ isVertical }) {
  return <Line isVertical={isVertical} />;
}

Divider.propTypes = {
  isVertical: PropTypes.bool,
};

Divider.defaultProps = {
  isVertical: false,
};
export default Divider;
