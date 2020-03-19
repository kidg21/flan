/* eslint-disable security/detect-object-injection */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import Text from "base/Typography";
import Button from "atoms/Button";
import Grid from "layout/Grid";
import ResultContainer from "./Results.jsx";
import TextInput from "atoms/TextInput";
import Container from "atoms/Container";
import Icon from "atoms/Icon";
import styled from "styled-components";

const SearchContainer = styled.div`
  border: 1px solid;
  min-width: 12rem;
  border-radius: 4px;
  border-color: ${(props) => {
    return ( props.theme.palette.neutral60
    );
  }};
  &:hover {
    border-color: ${(props) => {
    return (
      props.theme.palette.selected
    );
  }};
    }
  &:selected {
    border-color: ${(props) => {
    return (
      props.theme.palette.selected
    );
  }};
}
}
`;

const DropContainer = styled(Container)`
position: fixed;
`;


const errorHash = {
  connection: "Check your internet connection",
  offline: "You are offline",
  default: "We recommend the following based on your key word search",
};

function Search({
  id, error, results, onSearch, placeholder,
}) {
  const msg = errorHash[typeof error === "string" ? error.toLowerCase() : "default"];

  const message = (
    <React.Fragment>
      { msg !== errorHash.default ? <Bar padding="2x" center={<Icon icon="signal_none" size="3x" />} /> : null}
      <Bar padding="2x" center={<Text text={msg} />} />
    </React.Fragment>
  );

  const Body = (
    <React.Fragment>
      { error ? <React.Fragment>{message}</React.Fragment> : null}
      { results ? <ResultContainer results={results} /> : null}
    </React.Fragment>
  );

  return (
    <Grid columns="1" gap="tiny" id={id}>
      <SearchContainer>
      <Grid columns="9fr .5fr">
        <TextInput
          transparent
          id="my-search-bar"
          placeholder={placeholder}
          type="search"
        />
        <Button icon="search" plain onClick={onSearch} />
        {/* <Button icon="more" plain /> */}
      </Grid>
      </SearchContainer>
      { error || results ? <DropContainer id="results-container" maxHeight="22rem" > { Body }</DropContainer>: null}
      {/* { advance ? <Advanced inputs={inputs} /> : null} */}
    </Grid>
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
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  id: null,
  results: "",
  error: "",
  onSearch: null,
  placeholder: null,
};

export default Search;
