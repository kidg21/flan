/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import Text from "base/Typography";
import { viewport } from "Variables";
import Button from "atoms/Button";
import Form from "layout/Form";
import Advanced from "./Advanced.jsx";
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
  advance, error, results, onSearch, placeholder, inputs,
}) {



  let message;

  switch (error) {
    case "connection":
      message = (
        <React.Fragment>
          <Bar
            padding="2x"
            center={<Icon icon="signal_none" size="3x" />}
          />
          <Bar
            padding="2x"
            center={<Text text="Check your internet connection" />}
          />
        </React.Fragment>
      );
      break;
    case "offline":
      message = (
        <React.Fragment>
          <Bar
            padding="2x"
            center={<Icon icon="signal_none" size="3x" />}
          />
          <Bar
            padding="2x"
            center={<Text text="You are offline" />}
          />
        </React.Fragment>
      );
      break;
    default:
      message = (
        <Bar
          padding="2x"
          center={<Text text="We recommend the following based on your key word search" />}
        />
      );
      break;
  }

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
          id="111"
          placeholder={placeholder}
          type="search"
        />
        <Button icon="search" solid onClick={onSearch} />
        {/* <Button icon="more" plain /> */}
      </Grid>
      { error || results ? <Grid columns="9fr .5fr"> <DropContainer maxHeight="24rem" > { Body }</DropContainer></Grid> : null}
      { advance ? <Advanced inputs={inputs} /> : null}
    </Grid>
  );
}

Search.propTypes = {
  id: PropTypes.string,
  results: PropTypes.node,
};

Search.defaultProps = {
  id: null,
  results: null,

};

export default Search;
