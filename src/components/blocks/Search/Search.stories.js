/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import SearchBar from "./Search.jsx";
import Panel from "layout/Panel";
import List, {ListItem} from "blocks/List";

const Results = (
  <React.Fragment>
  <ListItem title="Address" description="23928 Malibu Dr."/>
  <ListItem title="Address" description="23928 Malibu Dr."/>
  <ListItem title="Address" description="23928 Malibu Dr." isSelected/>
  <ListItem title="Address" description="23928 Malibu Dr."/>
  </React.Fragment>
);




const data = [
    {
      id: "a",
      onClick: () => {
        console.log("clicked Save");
      },
      label: "Address",
      icon: "address",
    },
    {
      id: "b",
      onClick: () => {
        console.log("clicked Filter");
      },
      label: "APN",
      icon: "apn",
    },
    {
      id: "c",
      onClick: () => {
        console.log("clicked Share");
      },
      label: "Owner",
      icon: "user",
    },
    
  ];

storiesOf("Blocks|Search", module)
    .add("Default", () => {
        return (
            <SearchBar/>
        );
    })
    .add("Advance", () => {
        return (
            <SearchBar showAdvanced/>
        );
    })
    .add("Results", () => {
        return (
            <SearchBar results={Results}/>
        );
    })
    .add("Error Message", () => {
      return (
          <SearchBar results={Results} message="We reommend the following based on your key word search" />
      );
  })
  .add("More results", () => {
    return (
        <SearchBar results={Results} moreResults/>

    );
});

