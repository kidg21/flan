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


const DropContainer = styled(Container)`
position: fixed;
`;


function Search({
  id, error, results, onSearch, placeholder,
}) {
  const errorHash = {
    connection: "Check your internet connection",
    offline: "You are offline",
  };


  const msg = errorHash[error] || "We recommend the following based on your key word search";
  const message = (
    <React.Fragment>
      {error ? <Bar padding="2x" center={<Icon icon="signal_none" size="3x" />} /> : null}
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
    <Grid columns="1" gap="tiny">
      <Grid columns="9fr .5fr">
        <TextInput
          id={id}
          placeholder={placeholder}
          type="search"
        />
        <Button icon="search" solid onClick={onSearch} />
        {/* <Button icon="more" plain /> */}
      </Grid>
      { error || results ? <Grid columns="9fr .5fr"> <DropContainer maxHeight="24rem" > { Body }</DropContainer></Grid> : null}
      {/* { advance ? <Advanced inputs={inputs} /> : null} */}
    </Grid>
  );
}

Search.propTypes = {
  id: PropTypes.string,
  results: PropTypes.node,
  error: PropTypes.node,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  id: null,
  results: null,
  error: null,
  onSearch: null,
  placeholder: null,
};

export default Search;
