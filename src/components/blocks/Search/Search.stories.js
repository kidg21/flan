/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Search from "./Search.jsx";



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
            <Search/>
        );
    })
    .add("Advance", () => {
        return (
            <Search showAdvanced/>
        );
    })
    .add("Results", () => {
        return (
            <Search showResults/>
        );
    });

