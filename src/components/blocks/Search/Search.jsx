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


const AdvancedCard = styled(Card)`
margin-top: 0.5rem;
`;






function Search({ showAdvanced, message, moreResults, results, onClickMoreResults, onClickSearch, onClickAdvancedSearch, onClickReset, 
}) {
  const screenMedium = window.matchMedia(`(min-width: ${viewport.medium})`);
  const screenLarge = window.matchMedia(`(min-width: ${viewport.large})`);
  let rightContent;
  let leftWidth;
  let rightWidth;

  if (screenLarge.matches || screenMedium.matches) {
    leftWidth = "25%";
    rightContent = (
      <Link size="3x" text="Advanced" />
    )
  } else {
    leftWidth = "88%";
  }

  const inputsAPN = [
    {
      id: "ID 1",
      type: "text",
      placeholder: "APN",
    },
    {
      id: "ID 2",
      type: "text",
      placeholder: "Location",
    },
  ];

  const inputsOwner = [
    {
      id: "ID 1",
      type: "text",
      placeholder: "Owner",
    },
    {
      id: "ID 2",
      type: "text",
      placeholder: "Location",
    },
  ];

const Advanced = (
    <AdvancedCard 
    description="Advanced Search">
        <Form>
        <InputBlock
      label="Search by APN"
      textInputs={inputsAPN}
    />
         <InputBlock
      label="Search by Owner"
      textInputs={inputsOwner}
    />
      <Grid columns="6fr .5fr .5fr">
          <Link size="2x" text=""/>
      <Button label="Reset" plain onClick={onClickReset}/>
      <Button label="Search" solid onClick={onClickAdvancedSearch}/>
      </Grid>
      </Form>
    </AdvancedCard>
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
    <Container maxHeight="25rem" >
      { message ? <React.Fragment>{messages}</React.Fragment> : null}
        <List interactive>
          {results}
        </List>
        { moreResults ? <React.Fragment>{more}</React.Fragment> : null}
    </Container>
);


  return (
      <SearchWrapper>
    <Bar
    padding="none"
    leftWidth={leftWidth}
    rightWidth={rightWidth}
    contentAlign="top"
    centerAlign="left"
    left ={<TextInput
        id="111"
        placeholder="Search Location"
        type="search"
      >
        { results ? <React.Fragment>{Results}</React.Fragment> : null}
        </TextInput>
    }
    center={<Button icon="search" solid onClick={onClickSearch}/>}
    right={rightContent}
      />
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



