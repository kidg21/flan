import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Search from "blocks/Search";
import { screen } from "Variables";

const IconWrapper = styled.span`
  /* Needed for passing properties to children (animation, etc.) */
`;

const SearchContainer = styled.div`
  display: flex;
  padding: 1em;
  width: 100vw;
  flex-direction: column;
  z-index: 1002;
  position: absolute;

  ${IconWrapper} {
    position: absolute;
    right: 0;
    background-color: ${(props) => {
    return props.theme.background.default;
  }};
    margin: 0.2em;
    padding: 0.7em;
    cursor: pointer;
  }

  @media ${screen.small} {
    width: 100vw;
  }

  @media ${screen.medium} {
    width: 40vw;
  }
  @media ${screen.large} {
    width: 30vw;
  }
`;

function MapSearch({ id, ...searchProps }) {
  return (
    <SearchContainer id={id}>
      <Search {...searchProps} />
    </SearchContainer>
  );
}

MapSearch.propTypes = {
  id: PropTypes.string,
  tabs: PropTypes.string,
};

export default MapSearch;
