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
    title: "White House",
    description: "123 Malibu Drive, CA 92660",
  },
  {
    title: "Orange House",
    description: "1224 Malibu Drive, CA 92660",
  },
  {
    title: "Red House",
    description: "123 Malibu Drive, CA 92660",
  },
  {
    title: "Green House",
    description: "123 Malibu Drive, CA 92660",
  },
  {
    title: "Black House",
    description: "123 Malibu Drive, CA 92660",
  },
  {
    title: "Blue House",
    description: "123 Malibu Drive, CA 92660",
  },
  {
    title: "Address",
    description: "123 Malibu Drive, CA 92660",
  },
  {
    title: "APN",
    description: "123 Malibu Drive, CA 92660",
  },
  {
    title: "Owner",
    description: "123 Malibu Drive, CA 92660",
  },
  {
    title: "Address",
    description: "123 Malibu Drive, CA 92660",
  },
  {
    title: "Address",
    description: "123 Malibu Drive, CA 92660",
  },
  {
    title: "APN",
    description: "123 Malibu Drive, CA 92660",
  },
  {
    title: "Owner",
    description: "123 Malibu Drive, CA 92660",
  },
  {
    title: "Address",
    description: "123 Malibu Drive, CA 92660",
  },

];

storiesOf("Blocks|Search", module)
  .add("Default", () => {
    return (
      <SearchBar placeholder="Search Location" />
    );
  })
  .add("Advanced Search", () => {
    return (
      <SearchBar placeholder="Search Location" advance inputs={AdvancedInputs} />
    );
  })
  .add("Results", () => {
    return (
        <SearchBar placeholder="Search Location" results={Data} />
    );
  })
  .add("Error Message", () => {
    return (
      <Grid columns="1">
        <SearchBar placeholder="Search Location" error results={Data}/>
        <SearchBar placeholder="Search Location" error="offline" />
        <SearchBar placeholder="Search Location" error="connection" />
      </Grid>
    );
  });

