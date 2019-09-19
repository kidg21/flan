import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import TextInput from "atoms/TextInput";
import { colors } from "Variables";

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
    padding: 0.5em;
    cursor: pointer;
  }
`;




function Search({ id, onStartLocate, ...inputProps }) {
  return (
    <SearchContainer id={id} >
      <form onSubmit={onStartLocate}>
        <TextInput placeholder="Search" state="search" {...inputProps} >
          <IconWrapper>
            <Icon icon={"search"} type="info" onClick={onStartLocate} />
          </IconWrapper>
        </TextInput>
      </form>
    </SearchContainer >
  );
}

Search.propTypes = {
  id: PropTypes.string,
  onStartLocate: PropTypes.func,
  value: PropTypes.string.isRequired,
  autocompleteList: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.string,
  onClick: PropTypes.func,
};

Search.defaultProps = {
  id: null,
  onClick: null,
};

export default Search;

// this one will need more work on setting up for logic like Autocomplete and everything else
