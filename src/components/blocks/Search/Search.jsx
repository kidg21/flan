/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import SelectMenu from "atoms/SelectMenu";
import Text, { Title, Link } from "base/Typography";
import { viewport } from "Variables";
import Button from "atoms/Button";
import Tabs, { Tab } from "blocks/Tabs";
import Divider from "atoms/Divider";
import Form from "layout/Form";
import Grid from "layout/Grid";
import Menu from "blocks/Menu";
import TextInput from "atoms/TextInput";
import Container from "atoms/Container";
import Icon from "atoms/Icon";
import styled from "styled-components";
import InputBlock from "blocks/InputBlock";
import Card from "elements/Card";
import List, { ListItem } from "blocks/List";

const SearchWrapper = styled.section`
padding: 1rem;
`;


const DropContainer = styled(Container)`
position: fixed;
`;


function Search({
  showAdvanced, error, moreResults, results, onClickMoreResults, onClickSearch, onClickAdvancedSearch, onClickReset,
}) {
  const Advanced = (
    <DropContainer maxHeight="25rem" >
      <Form>
        <Tabs>
          <Tab label="Owner" isSelected/>
          <Tab label="APN" />
        </Tabs>
        <TextInput
          label="Search by Owner"
          placeholder="Owner"
          type="search"
        />
        <Grid columns="6fr .5fr .5fr">
          <Text size="2x" text="" />
          <Button label="Reset" plain onClick={onClickReset} />
          <Button label="Search" solid onClick={onClickAdvancedSearch} />
        </Grid>
      </Form>
    </DropContainer>
  );


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
            center={<Text text="You are offline" />}
          />
        </React.Fragment>
      );
      break;
    default:
      message = (
        <Bar
          padding="2x"
          center={<Text text="We reommend the following based on your key word search" />}
        />
      );
      break;
  }


  const more = (
    <Bar
      padding="top"
      center={<Link size="2x" text="View More Results" onClick={onClickMoreResults} />}
    />
  );

  const Results = (
    <List interactive>
      {results}
    </List>
  );

  const Body = (
    <React.Fragment>
      { message ? <React.Fragment>{message}</React.Fragment> : null}
      { results ? <React.Fragment>{ Results }</React.Fragment> : null}
      { moreResults ? <React.Fragment>{more}</React.Fragment> : null}
    </React.Fragment>
  );


  return (
    <Grid columns="1" gap="tiny">
      <Grid columns="9fr .5fr .5fr">
        <TextInput
          id="111"
          placeholder="Search Location"
          type="search"
        />

        <Button icon="search" solid onClick={onClickSearch} />
        <Button icon="more" plain />
      </Grid>
      { error || results ? <Grid columns="9fr .5fr .5fr"> <DropContainer maxHeight="25rem" >{Body}</DropContainer></Grid> : null}
      { showAdvanced ? <React.Fragment>{Advanced}</React.Fragment> : null}
    </Grid>
  );
}

Search.propTypes = {
  id: PropTypes.string,
  onClickSearch: PropTypes.func,
  results: PropTypes.node,
};

Search.defaultProps = {
  id: null,

};

export default Search;
