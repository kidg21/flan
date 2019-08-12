import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Menu from "blocks/Menu";
import Card from "layout/Card";
import Bar from "blocks/Bar";
import List, { ListItem } from "blocks/List";
// import TrialMenu from "./TrialMenu";

const data = [
  { id: "a", name: "Save" },
  { id: "b", name: "Filter" },
  { id: "c", name: "Something" },
  { id: "d", name: "Filter" },
  { id: "e", name: "Layer" },
];

storiesOf("Work|Menu", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Default", () => (
    <Card>
      <Bar center={<Menu data={data} position="bottomRight" />} />{" "}
    </Card>
  ))

  .add("Directions", () => (
    <div>
      <div>
        <span>Bottom Right</span>
        <Menu data={data} position="bottomRight" />
      </div>
      <div>
        <span>Top Right</span>
        <Menu data={data} position="topRight" />
      </div>
      <div>
        <span>Bottom Left</span>
        <Menu data={data} position="bottomLeft" />
      </div>
      <div>
        <span>Top Left</span>
        <Menu data={data} position="topLeft" />
      </div>
      <div>
        <span>Bottom Center</span>
        <Menu data={data} position="bottomCenter" />
      </div>
      <div>
        <span>Top Center</span>
        <Menu data={data} position="topCenter" />
      </div>
    </div>
  ));
