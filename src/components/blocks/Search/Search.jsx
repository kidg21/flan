/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import SelectMenu from "atoms/SelectMenu";
import {Link} from "base/Typography";
import { viewport } from "Variables";
import Button from "atoms/Button";
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

const ResultsContainer = styled(Container)`
position: relative;
z-index: 3;
margin-top: -1px;
display: block;
`;

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
    <Bar
    padding="2x"
    left={
    <Card 
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
          <Link size="2x" text="idk"/>
      <Button label="Reset" plain/>
      <Button label="Search" solid />
      </Grid>
      </Form>
    </Card>}
    />
);


const data = [
  {
    id: "a",
    onClick: () => {
      console.log("clicked Advanced");
    },
    label: "Advanced",
    icon: "Advanced",
  },
];


const Results = (
    <ResultsContainer>
        <List interactive>
            <ListItem title="Address" description="23928 Malibu Dr."/>
            <ListItem title="Address" description="23928 Malibu Dr."/>
            <ListItem title="Address" description="23928 Malibu Dr." isSelected/>
            <ListItem title="Address" description="23928 Malibu Dr."/>
        </List>
    </ResultsContainer>
);


function Search({ showAdvanced, showResults

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

  return (
      <React.Fragment>
    <Bar
    leftWidth={leftWidth}
    rightWidth={rightWidth}
    contentAlign="top"
    centerAlign="left"
    left ={<div style={{display: "block"}}><TextInput
    style={{margin: "0 auto"}}
        id="111"
        placeholder="Search Location"
        type="search"
      >
        { showResults ? <React.Fragment>{Results}</React.Fragment> : null}
        </TextInput>
        </div>
    }
    center={<Button icon="search" solid/>}
    right={rightContent}
      />
      { showAdvanced ? <React.Fragment>{Advanced}</React.Fragment> : null}
      </React.Fragment>
  );
}

// Search.propTypes = {
// };

// Search.defaultProps = {

// };


export default Search;



