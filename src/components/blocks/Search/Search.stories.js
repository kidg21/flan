/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import SearchBar from "./Search.jsx";
import Grid from "layout/Grid";
import Panel from "layout/Panel";
import List, { ListItem } from "blocks/List";



const SmallData = [
  {
    title: "Address",
    description: "address",
  },
  {
    title: "APN",
    description: "apn",
  },

];

const AdvancedInputs = [
    {
      placeholder: "Owner",
    },
    {
      placeholder: "APN",
    },
  
  ];



const Data = [
  {
    title: "Address",
    description: "address",
  },
  {
    title: "APN",
    description: "apn",
  },
  {
    title: "Owner",
    description: "user",
  },
  {
    title: "Address",
    description: "address",
  },
  {
    title: "APN",
    description: "apn",
  },
  {
    title: "Owner",
    description: "user",
  },
  {
    title: "Address",
    description: "address",
  },
  {
    title: "APN",
    description: "apn",
  },
  {
    title: "Owner",
    description: "user",
  },
  {
    title: "Address",
    description: "address",
  },
  {
    title: "Address",
    description: "address",
  },
  {
    title: "APN",
    description: "apn",
  },
  {
    title: "Owner",
    description: "user",
  },
  {
    title: "Address",
    description: "address",
  },

];

storiesOf("Blocks|Search", module)
  .add("Default", () => {
    return (
      <SearchBar />
    );
  })
  .add("Advanced Search", () => {
    return (
      <SearchBar advance inputs={AdvancedInputs} />
    );
  })
  .add("Results", () => {
    return (
      <Grid columns="1">
        <SearchBar results={SmallData} />
        <SearchBar results={Data} />
      </Grid>
    );
  })
  .add("Error Message", () => {
    return (
      <Grid columns="1">
        <SearchBar error="offline" />
        <SearchBar error="connection" />
      </Grid>
    );
  });

