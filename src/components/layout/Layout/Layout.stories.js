/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { screen } from "Variables";
import Tabs, { Tab } from "blocks/Tabs";
import Card, { CardList } from "layout/Card";
import Panel from "layout/Panel";
import Layout from "layout/Layout";
import Bar from "blocks/Bar";
import Button from "atoms/Button";
import NewLayout from "./NewLayout.jsx";
// import StaticLayout from "./StaticLayout.jsx";

const LayoutNotes = markdown.require("./Layout.md");

storiesOf("Layout |App Layout/", module)
  .addParameters({
    info: {
      text: "Layout info goes here...",
    },
    notes: {
      markdown: LayoutNotes,
    },
  })

  .add(
    "Documentation",
    withInfo()(() => {
      return <NewLayout />;
    }),
  )

  .add("Dynamic", () => {
    return (
      <NewLayout theme="dynamic" />
    );
  })
  .add("Static", () => {
    return (
      <NewLayout theme="static" />
    );
  });
