/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import SelectMenu from "atoms/SelectMenu";
import {Link} from "base/Typography";
import Button from "atoms/Button";
import Form from "layout/Form";
import Grid from "layout/Grid";
import TextInput from "atoms/TextInput";
import Command from "atoms/Command";
import Icon from "atoms/Icon";
import styled from "styled-components";
import InputBlock from "blocks/InputBlock";
import Card from "elements/Card";
import List, { ListItem } from "blocks/List";


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



const Results = (
    <Card>
        <List interactive>
            <ListItem title="Address" description="23928 Malibu Dr."/>
            <ListItem title="Address" description="23928 Malibu Dr."/>
            <ListItem title="Address" description="23928 Malibu Dr." isSelected/>
            <ListItem title="Address" description="23928 Malibu Dr."/>
        </List>
    </Card>
);


function Search({ showAdvanced, showResults

}) {


  return (
      <React.Fragment>
    <Bar
    padding="2x"
    contentAlign="center"
    centerAlign="left"
    left ={<Grid columns="2fr .3fr"><TextInput
        id="111"
        placeholder="Search Location"
        type="search"
      />
      <Button icon="search" solid/>
      </Grid>
    }
    center={
      <Link size="3x" text="Advanced" />}
      />
      { showResults ? <React.Fragment>{Results}</React.Fragment> : null}
      { showAdvanced ? <React.Fragment>{Advanced}</React.Fragment> : null}
      </React.Fragment>
  );
}

// Search.propTypes = {
// };

// Search.defaultProps = {

// };


export default Search;



