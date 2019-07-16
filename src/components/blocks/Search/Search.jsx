import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import TextInput from "atoms/TextInput";
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




function Search({ id, onBtnClick, ...inputProps }) {
  return (
    <SearchContainer id={id} >
      <TextInput placeholder="Search" state="search" {...inputProps} >
        <IconWrapper>
          <Icon icon={["far", "search"]} type="info" onClick={onBtnClick}/>
        </IconWrapper>
      </TextInput>
    </SearchContainer >
  );
}

Search.propTypes = {
  id: PropTypes.string,
  onBtnClick: PropTypes.func
};

export default Search;

// this one will need more work on setting up for logic like Autocomplete and everything else
