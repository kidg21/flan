import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Search from "blocks/Search";
import Tabs, { Tab } from "blocks/Tabs";
import { colors, shadows } from "Variables";

const IconWrapper = styled.span`
  /* Needed for passing properties to children (animation, etc.) */
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${IconWrapper} {
    position: absolute;
    right: 0;
    background-color: ${colors.white};
    margin: 0.2em;
    padding: 0.7em;
    cursor: pointer;
  }
`;

function MapSearch({ id, ...searchProps }) {
  const [activeSingleTab, setActiveSingleTab] = useState("tab1");
  return (
    <SearchContainer id={id}>
      <Search {...searchProps} />
    </SearchContainer>
  );
}

MapSearch.propTypes = {
  id: PropTypes.string,
};

export default MapSearch;

///this one will need more work on setting up for logic like Autocomplete and everything else
