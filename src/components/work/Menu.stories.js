import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Grid from "layout/Grid";
import { Padding } from "helpers/Display";
import DropdownMenu from "blocks/Menu";
import Title from "base/Typography";
import Bar from "blocks/Bar";
// import WhiteMenu from "../blocks/Menu/TrialMenu";

const data = [
  { id: "a", name: "Save" },
  { id: "b", name: "Filter" },
  { id: "c", name: "Share" },
  { id: "d", name: "Filter" },
  { id: "e", name: "Layer" },
];

storiesOf("Work|Menu", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  // .add("Trial", () => <TrialMenu />)
  .add("Documentation", () => (
    <Bar
      // left={<DropdownMenu data={data} position="bottomRight" type="black" />}
      center={<DropdownMenu data={data} position="bottomLeft" type="edit" />}
    />
  ))
  .add("Directions", () => (
    <Grid>
      <div>
        <span>Bottom Right</span>
        <DropdownMenu data={data} position="bottomRight" type="edit" />
      </div>
      <div>
        <span>Top Right</span>
        <DropdownMenu data={data} position="topRight" type="edit" />
      </div>
      <div>
        <span>Bottom Left</span>
        <DropdownMenu data={data} position="bottomLeft" type="edit" />
      </div>
      <div>
        <span>Top Left</span>
        <DropdownMenu data={data} position="topLeft" type="edit" />
      </div>
      <div>
        <span>Bottom Center</span>
        <DropdownMenu data={data} position="bottomCenter" type="edit" />
      </div>
      <div>
        <span>Top Center</span>
        <DropdownMenu data={data} position="topCenter" type="edit" />
      </div>
    </Grid>
  ));
