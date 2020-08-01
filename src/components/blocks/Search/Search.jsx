/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Bar from "layout/Bar";
import Flex from "layout/Flex";
import Text from "base/Typography";
import Button from "atoms/Button";
import Container from "atoms/Container";
import Icon from "atoms/Icon";
import TextInput from "atoms/TextInput";
import { useId } from "utils/hooks";
import ResultContainer from "./Results.jsx";

const SearchContainer = styled.form`
  display: grid;
  grid-template-areas:
  "A"
  "B";
  grid-template-rows: auto 1fr;
  grid-row-gap: ${(props) => { return props.gridRowGap ? "0.25rem" : "0"; }};
  position: relative;
  padding: 0.5rem 0.5rem 0;
`;

const SearchInput = styled(Flex)`
  grid-area: A;
  background-color: ${(props) => {
    return props.theme.background.default;
  }};
  border: ${(props) => {
    return `1px solid ${props.theme.palette.neutral60}`;
  }};
  border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
  }};
  /* The padding gives the buttons space so they don't overlap the rounded corners of the container */
  padding: 2px;
  /* Necessary for the Menu List isn't cropped */
  overflow: visible;
`;

const SearchTextInput = styled(TextInput)`
  flex: auto;
  > * {
    border: none;
  }
`;

const SearchButton = styled(Button)`
  flex: none;
`;

const DropContainer = styled(Container)`
  grid-area: B;
  position: absolute;
  width: 100%;
  z-index: ${(props) => {
    return props.zIndex;
  }};
`;

const errorHash = {
  connection: "Check your internet connection",
  offline: "You are offline",
  default: "We recommend the following based on your key word search",
};

function Search({
  error,
  id,
  onChange,
  onKeyUp,
  onSearch,
  placeholder,
  results,
  value,
  zIndex,
}) {
  let searchVal = value;
  let setSearchValue = onChange;
  if (!setSearchValue) [searchVal, setSearchValue] = useState(value);

  const uId = useId(id);
  /**
   * Set state to current input value in search box.
   * Pass back input value to onChange function, if provided.
   * Use of onChange prop means you have to manage your own state.
   * @param {object} e - event object that contains input value.
   */
  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  /**
   * Pass back input value to onKeyUp function, if provided.
   * This is alternative to onChange that still lets <Search>
   * manage its own state.
   */
  const handleOnKeyUp = (e) => {
    if (typeof onKeyUp === "function") {
      onKeyUp(e.target.value);
    }
  };

  /**
   * Pass back input value to onSearch function, if provided.
   */
  const handleOnSearch = () => {
    if (typeof onSearch === "function") {
      onSearch(searchVal);
    }
  };

  const msg = errorHash[typeof error === "string" ? error.toLowerCase() : "default"];

  const message = (
    <React.Fragment>
      {msg !== errorHash.default ? <Bar padding="2x" center={<Icon icon="signal_none" size="3xl" />} /> : null}
      <Bar padding="2x" center={<Text text={msg} />} />
    </React.Fragment>
  );

  const Body = (
    <React.Fragment>
      {error ? <React.Fragment>{message}</React.Fragment> : null}
      {results ? <ResultContainer results={results} /> : null}
    </React.Fragment>
  );

  return (
    <SearchContainer
      id={uId}
      gridRowGap={error || results}
      onSubmit={(e) => {
        e.preventDefault();
        handleOnSearch();
      }}
    >
      <SearchInput flexDirection="row">
        <SearchButton
          id={`${uId}-search-button`}
          icon="search"
          isPlain
          onClick={handleOnSearch}
        />
        <SearchTextInput
          id={`${uId}-search-bar`}
          placeholder={placeholder}
          type="search"
          onChange={handleOnChange}
          onKeyUp={handleOnKeyUp}
          value={searchVal}
        />
      </SearchInput>
      {error || results
        ? (
          <DropContainer
            padding="0"
            id={`${uId}-results-container`}
            maxHeight="22rem"
            zIndex={zIndex}
          >
            {Body}
          </DropContainer>
        )
        : null}
    </SearchContainer>
  );
}

Search.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
  })),
  value: PropTypes.string,
  zIndex: PropTypes.number,
};

Search.defaultProps = {
  error: "",
  id: null,
  onChange: null,
  onKeyUp: null,
  onSearch: null,
  placeholder: null,
  results: null,
  value: "",
  zIndex: 1,
};

export default Search;
