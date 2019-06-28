import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const screen = {
  small: `only screen and (max-width: 415px)`,
  medium: `only screen and (min-width: 416px) and (max-width: 960px)`,
  // medium: `only screen and (min-width: ${
  // viewport.medium
  // }) and (orientation: portrait)`,
  // medium_l: `only screen and (min-width: ${
  // viewport.medium
  // }) and (orientation: landscape)`,
  large: `only screen and (min-width: 961px)`
};

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid white;
  /* @media ${screen.small} {
    flex: 1;
  }
  @media ${screen.medium} {
    flex: 1;
  }
  @media ${screen.large} {
    flex: 9;
  } */
  flex: auto;
`;

function MainFlexWrapper({ id, children }) {
  return <WrapperContainer id={id}>{children}</WrapperContainer>;
}
MainFlexWrapper.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any
};

export default MainFlexWrapper;
