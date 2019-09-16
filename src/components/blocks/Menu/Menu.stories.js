import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Grid from "layout/Grid";
import { Padding } from "helpers/Display";
import DropdownMenu from "blocks/Menu";
import Card from "layout/Card";
import Bar from "blocks/Bar";
// import WhiteMenu from "../blocks/Menu/TrialMenu";

const data = [
  { id: "a", onClickLink: "", name: "Save" },
  { id: "b", onClickLink: "", name: "Filter" },
  { id: "c", onClickLink: "", name: "Share" },
  { id: "d", onClickLink: "", name: "Filter" },
  { id: "e", onClickLink: "", name: "Layer" },
];

storiesOf("Blocks|Menu", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  // .add("Trial", () => <TrialMenu />)
  .add("Documentation", () => (
    <Card>
      <Bar
        right={<DropdownMenu data={data} position="bottomLeft"/>}
      />
    </Card>
  ))
  .add("Directions", () => (
    <Grid columns="3">
      <DropdownMenu data={data} position="bottomRight"  />
      <DropdownMenu
        data={data}
        position="bottomCenter"
      />
      <DropdownMenu data={data} position="bottomLeft" />
      <DropdownMenu data={data} position="topRight" />
      <DropdownMenu data={data} position="topCenter"  />
      <DropdownMenu data={data} position="topLeft" />
    </Grid>
  ));
