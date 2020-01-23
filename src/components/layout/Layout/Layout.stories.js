/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Panel from "layout/Panel";
import List, { ListItem } from "blocks/List";
import Layout from "./Layout.jsx";

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
    () => {
      return <Layout />;
    },
  )

  .add(
    "Example",
    () => {
      return (<Layout
        left={{
          content: (
            <Panel >
              <List interactive>
                <ListItem
                  label="Dashboard"
                  icon="draw"
                />
                <ListItem
                  label="Create"
                  icon="report"
                />
                <ListItem
                  label="Jobs"
                  icon="list"
                />
                <ListItem
                  label="RFPs"
                  icon="user"
                />
                <ListItem
                  label="Tasks"
                  icon="file"
                />
              </List>
            </Panel>),
        }}
      />);
    },
  );
