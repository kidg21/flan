/* eslint-disable security/detect-object-injection */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Bar from "layout/Bar";
import Text from "base/Typography";
import Button from "atoms/Button";
// import Grid from "layout/Grid";
import Container from "atoms/Container";
import Icon from "atoms/Icon";
import TextInput from "atoms/TextInput";
import { useId } from "helpers";
import ResultContainer from "./Results.jsx";

// const SearchContainer = styled.div`

const SearchContainer = styled.form`
  /* display: flex; */
  display: grid;
  grid-template-areas:
  "A B"
  "C C";
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  position: relative;
  padding: 0.5rem 0.5rem 0;
  /* align-items: center; */
  /* flex-direction: row; */
  /* border: 1px solid; */
  /* border-radius: 4px; */
  /* border-color: ${(props) => {
    return (props.theme.palette.neutral60
    );
  }}; */
  /* &:hover {
    border-color: ${(props) => {
    return (
      props.theme.palette.selected
    );
  }};
  } */
  /* &:selected {
    border-color: ${(props) => {
    return (
      props.theme.palette.selected
    );
  }};
  } */
`;

// const NewTextInput = styled.input`
const NewTextInput = styled(TextInput)`
  grid-area: A;
  /* flex-grow: 2; */
  /* border: none; */
  /* min-height: 1.875rem; */
  /* height: 2.4rem; */
  /* padding: 0.125rem 0.5rem; */
  /* font-family: ${(props) => { return props.theme.typography.primary; }}; */
  /* ::placeholder {
    font-weight: initial;
    font-size: 0.90em;
    letter-spacing: 0.5px;
    color: ${(props) => {
    return (
      props.theme.text[props.placeholderColor] || props.theme.text.secondary
    );
  }};
  } */
`;

const SearchButton = styled(Button)`
  grid-area: B;
`;

const DropContainer = styled(Container)`
  /* position: fixed; */
  grid-area: C;
  position: absolute;
  width: 100%;
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
  onKeyPress,
  onSearch,
  placeholder,
  results,
}) {
  const searchVal = useRef("");
  const uId = useId(id);
  /**
   * Set state to current input value in search box.
   * Pass back input value to onChange function, if provided.
   * @param {object} e - event object that contains input value.
   */
  const handleOnChange = (e) => {
    const currVal = e.target.value;

    searchVal.current = currVal;

    if (typeof onChange === "function") {
      onChange(searchVal.current);
    }
  };

  /**
   * If "enter" key was pressed, pass back current search value.
   * @param {object} e - event object that contains key press info.
   */
  const handleOnKeyPress = (e) => {
    if (e && e.key.toLowerCase() === "enter" && typeof onKeyPress === "function") {
      e.preventDefault();
      onKeyPress(searchVal.current);
    }
  };

  /**
   * Pass back input value to onSearch function, if provided.
   */
  const handleOnSearch = () => {
    if (typeof onSearch === "function") {
      onSearch(searchVal.current);
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
    <SearchContainer id={uId}>
      <NewTextInput
        id={`${uId}-search-bar`}
        placeholder={placeholder}
        type="search"
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
      />
      <SearchButton icon="search" isPlain onClick={handleOnSearch} />
      {error || results ?
        <DropContainer
          padding="0"
          id={`${uId}-results-container`}
          maxHeight="22rem"
        >
          {Body}
        </DropContainer>
        : null}
    </SearchContainer>
  );
}

Search.propTypes = {
  id: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
  })),
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  id: null,
  results: null,
  error: "",
  onChange: null,
  onKeyPress: null,
  onSearch: null,
  placeholder: null,
};

export default Search;
