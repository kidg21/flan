/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import SelectMenu from "atoms/SelectMenu";
import {Link} from "base/Typography";
import { viewport } from "Variables";
import Button from "atoms/Button";
import Text from "base/Typography";
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




function Search({ showAdvanced, message, moreResults, results, onClickMoreResults, onClickSearch, onClickAdvancedSearch, onClickReset, 
}) {



const Advanced = (
  <DropContainer maxHeight="25rem" >
      <Form>
         <TextInput
        label="Search by APN"
        placeholder="APN"
        type="search"
      />
         <TextInput
         label="Search by Owner"
        placeholder="Owner"
        type="search"
      />
      <Grid columns="6fr .5fr .5fr">
          <Link size="2x" text=""/>
      <Button label="Reset" plain onClick={onClickReset}/>
      <Button label="Search" solid onClick={onClickAdvancedSearch}/>
       </Grid>
       </Form>
      </DropContainer>
);



  const messages = (
    <Bar 
    padding="2x"
    center={<Text size="2x" text={message}/>}
    />
  );

  const more = (
    <Bar 
    padding="top"
    center={<Link size="2x" text="View More Results" onClick={onClickMoreResults}/>}
    />
  );

  const Results = (
    <DropContainer maxHeight="25rem" >
      { message ? <React.Fragment>{messages}</React.Fragment> : null}
        <List interactive>
          {results}
        </List>
        { moreResults ? <React.Fragment>{more}</React.Fragment> : null}
    </DropContainer>
);


  return (
      <SearchWrapper>
    <Grid columns="9fr .5fr .5fr">
      <TextInput
        id="111"
        placeholder="Search Location"
        type="search"
      >
        </TextInput>
    
    <Button icon="search" solid onClick={onClickSearch}/>
    <Icon icon="more"/>
    </Grid>
    { results ? <Grid columns="9fr .5fr .5fr">{Results}</Grid> : null}
      { showAdvanced ? <React.Fragment>{Advanced}</React.Fragment> : null}
      </SearchWrapper>
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



