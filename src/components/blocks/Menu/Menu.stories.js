import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Grid from "layout/Grid";
import { Padding } from "helpers/Display";
import Menu from "blocks/Menu";
import Card from "layout/Card";
import Bar from "blocks/Bar";

const data = [
  { id: "a", onClickLink: () => { console.log("clicked Save"); }, name: "Save" },
  { id: "b", onClickLink: () => { console.log("clicked Filter"); }, name: "Filter" },
  { id: "c", onClickLink: () => { console.log("clicked Share"); }, name: "Share" },
  { id: "d", onClickLink: () => { console.log("clicked Refresh"); }, name: "Refresh" },
  { id: "e", onClickLink: () => { console.log("clicked Layer"); }, name: "Layer" },
];

const nestedData = [
  { id: "a", onClickLink: () => { console.log(`clicked a`) }, name: "Save" },
  {
    id: "b", onClickLink: () => { console.log(`clicked b`) }, name: "Filter",
    commands: [
      { id: "b.0", onClickLink: () => { console.log("clicked b.0") }, name: "Filter 0.0" },
      {
        id: "b.1", onClickLink: () => { console.log("clicked b.1") }, name: "Filter 1.0",
        commands: [{ id: "b.1.0", onClickLink: () => { console.log("clicked b.1.0") }, name: "Filter 1.1.1" }]
      },
    ]
  },
  { id: "c", onClickLink: () => { console.log(`clicked c`) }, name: "Share" },
  { id: "d", onClickLink: () => { console.log(`clicked d`) }, name: "Refresh" },
  { id: "e", onClickLink: () => { console.log(`clicked e`) }, name: "Layer" },
];

storiesOf("Blocks|Menu", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  // .add("Trial", () => <TrialMenu />)
  .add("Documentation", () => (
    <Card>
      <Bar
        right={<Menu data={data} position="bottomLeft"/>}
      />
    </Card>
  ))
  .add("Directions", () => (
    <Grid columns="3">
      <Menu data={data} position="bottomRight"  />
      <Menu
        data={data}
        position="bottomCenter"
      />
      <Menu data={data} position="bottomLeft" />
      <Menu data={data} position="topRight" />
      <Menu data={data} position="topCenter"  />
      <Menu data={data} position="topLeft" />
    </Grid>
  ))
  .add("Nested Menu Example", () => (
    <Card>
      <Menu data={nestedData} position="bottomRight" id="top" />
    </Card>
  ));
