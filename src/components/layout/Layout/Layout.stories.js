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
import ActionLayout from "./ActionLayout.jsx";
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
      return <Layout height="25%" />;
    }),
  )

  .add("New1", () => {
    return (
      <ActionLayout leftContent={<h4>hello im a side</h4>} />
    );
  })
  // .add("New2", () => {
  //   return (
  //     <StaticLayout leftContent={<h4>hello im a side</h4>} rightContent={<h4>hello im right</h4>} mainContent={<h1>hello im main</h1>} />
  //   );
  // })
  .add("New3", () => {
    return (
      <NewLayout theme="static" />
    );
  })


  .add("2 Panel - Row", () => {
    return (
      <Layout>
        <Layout width="70%" />
        <Layout width="30%" right="0" backgroundColor="lightyellow" />
      </Layout>
    );
  })

  .add("2 Panel - Column", () => {
    return (
      <Layout>
        <Layout height="60%" />
        <Layout height="40%" top="60%" backgroundColor="lightgreen" />
      </Layout>
    );
  })

  .add("3 Panel", () => {
    return (
      <Layout>
        <Layout width="70%" height="60%" />
        <Layout
          width="70%"
          height="40%"
          top="60%"
          backgroundColor="lightgreen"
        />
        <Layout width="30%" right="0" backgroundColor="lightyellow" />
      </Layout>
    );
  });
