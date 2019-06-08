import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Grid from "helpers/Grid";
import { Padding } from "helpers/Display";
import DropdownMenu from "./EditMenu";
import WhiteMenu from "./TrialMenu";

const data = [
  { id: "a", name: "Save" },
  { id: "b", name: "Filter" },
  { id: "c", name: "Something" },
  { id: "d", name: "Filter" },
  { id: "e", name: "Layer" }
];

storiesOf("Blocks|Menu", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  // .add("Trial", () => <TrialMenu />)
  .add("Documentation", () => (
    <DropdownMenu data={data} position="bottomRight" />
  ))
  .add("white menu", () => <WhiteMenu data={data} position="bottomRight" />)
  .add("Directions", () => (
    <Grid col_4>
      <div>
        <span>Bottom Right</span>
        <DropdownMenu data={data} position="bottomRight" />
      </div>
      <div>
        <span>Top Right</span>
        <DropdownMenu data={data} position="topRight" />
      </div>
      <div>
        <span>Bottom Left</span>
        <DropdownMenu data={data} position="bottomLeft" />
      </div>
      <div>
        <span>Top Left</span>
        <DropdownMenu data={data} position="topLeft" />
      </div>
      <div>
        <span>Bottom Center</span>
        <DropdownMenu data={data} position="bottomCenter" />
      </div>
      <div>
        <span>Top Center</span>
        <DropdownMenu data={data} position="topCenter" />
      </div>
    </Grid>
  ));
