/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Grid from "layout/Grid";
import { Padding } from "helpers/Display";
import Menu from "blocks/Menu";
import Card from "elements/Card";
import Bar from "blocks/Bar";

const data = [
  {
    id: "a",
    onClickLink: () => {
      console.log("clicked Save");
    },
    label: "Save",
  },
  {
    id: "b",
    onClickLink: () => {
      console.log("clicked Filter");
    },
    label: "Filter",
  },
  {
    id: "c",
    onClickLink: () => {
      console.log("clicked Share");
    },
    label: "Share",
    disabled: true,
  },
  {
    id: "d",
    onClickLink: () => {
      console.log("clicked Refresh");
    },
    label: "Refresh",
  },
  {
    id: "e",
    onClickLink: () => {
      console.log("clicked Layer");
    },
    label: "Layer",
  },
];

const nestedData = [
  {
    id: "a",
    onClickLink: () => {
      console.log(`clicked a`);
    },
    label: "Save",
  },
  {
    id: "b",
    onClickLink: () => {
      console.log(`clicked b`);
    },
    label: "Filter",
    commands: [
      {
        id: "b.0",
        onClickLink: () => {
          console.log("clicked b.0");
        },
        label: "Filter 0.0",
      },
      {
        id: "b.1",
        onClickLink: () => {
          console.log("clicked b.1");
        },
        label: "Filter 1.0",
        commands: [
          {
            id: "b.1.0",
            onClickLink: () => {
              console.log("clicked b.1.0");
            },
            label: "Filter 1.1.1",
          },
        ],
      },
    ],
  },
  {
    id: "c",
    onClickLink: () => {
      console.log(`clicked c`);
    },
    label: "Share",
  },
  {
    id: "d",
    onClickLink: () => {
      console.log(`clicked d`);
    },
    label: "Refresh",
  },
  {
    id: "e",
    onClickLink: () => {
      console.log(`clicked e`);
    },
    label: "Layer",
  },
  {
    id: "f",
    onClickLink: () => {
      console.log(`clicked b`);
    },
    label: "Filter",
    commands: [
      {
        id: "f.0",
        onClickLink: () => {
          console.log("clicked b.0");
        },
        label: "Filter 0.0",
      },
      {
        id: "f.1",
        onClickLink: () => {
          console.log("clicked b.1");
        },
        label: "Filter 1.0",
      },
    ],
  },
];

storiesOf("Blocks|Menu", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  // .add("Trial", () => <TrialMenu />)
  .add("Documentation", () => {
    return (
      <Card>
        <Bar right={<Menu data={data} position="bottomLeft" />} />
      </Card>
    );
  })
  .add("Directions", () => {
    return (
      <Grid columns="3">
        <Menu data={data} position="bottomRight" />
        <Menu data={data} position="bottomCenter" />
        <Menu data={data} position="bottomLeft" />
        <Menu data={data} position="topRight" />
        <Menu data={data} position="topCenter" />
        <Menu data={data} position="topLeft" />
      </Grid>
    );
  })
  .add("Nested Menu Example", () => {
    return (
      <Card>
        <Bar
          center={<Menu data={nestedData} position="bottomRight" id="top" />}
        />
      </Card>
    );
  });
