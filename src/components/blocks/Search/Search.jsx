/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Bar from "layout/Bar";
import Flex from "layout/Flex";
import Text from "base/Typography";
import Button from "atoms/Button";
import Menu from "blocks/Menu";
import Container from "atoms/Container";
import Icon from "atoms/Icon";
import TextInput from "atoms/TextInput";
import { useId } from "helpers";
import ResultContainer from "./Results.jsx";

const SearchContainer = styled.form`
  display: grid;
  grid-template-areas:
  "A"
  "B";
  grid-template-rows: auto 1fr;
  grid-row-gap: 0.25rem;
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
  padding: 1px;
  /* Necessary for the Menu List isn't cropped */
  overflow: visible;
`;

const NewTextInput = styled(TextInput)`
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
  /* opacity: 0.5; */
`;

const errorHash = {
  connection: "Check your internet connection",
  offline: "You are offline",
  default: "We recommend the following based on your key word search",
};

function Search({
  error,
  hasOptions,
  id,
  options,
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
      <SearchInput flexDirection="row">
        <SearchButton
          id={`${uId}-search-button`}
          icon="search"
          isPlain
          onClick={handleOnSearch}
        />
        <NewTextInput
          id={`${uId}-search-bar`}
          placeholder={placeholder}
          type="search"
          onChange={handleOnChange}
          onKeyPress={handleOnKeyPress}
        />
        {hasOptions
          ? (
            <Menu
              icon="down"
              position="bottomLeft"
              data={options}
            >
              <Button
                id={`${uId}-search-options`}
                icon="down"
                isPlain
              />
            </Menu>
          ) : null}
      </SearchInput>
      {error || results
        ? (
          <DropContainer
            padding="0"
            id={`${uId}-results-container`}
            maxHeight="22rem"
          >
            {Body}
          </DropContainer>
        )
        : null}
    </SearchContainer>
  );
}

const itemShape = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Search.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  hasOptions: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onSearch: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape(itemShape)),
  placeholder: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
  })),
};

Search.defaultProps = {
  error: "",
  hasOptions: false,
  id: null,
  onChange: null,
  onKeyPress: null,
  onSearch: null,
  options: [],
  placeholder: null,
  results: null,
};

export default Search;
