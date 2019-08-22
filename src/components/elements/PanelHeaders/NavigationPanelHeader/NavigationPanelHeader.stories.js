import React from "react";
import { storiesOf } from "@storybook/react";
import NavigationPanelHeader from "./NavigationPanelHeader";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
// import Group from "./Group";

const data = [
  { id: "a", name: "Save" },
  { id: "b", name: "Filter" },
  { id: "c", name: "Something" },
  { id: "d", name: "Filter" },
  { id: "e", name: "Layer" },
];

// Colors
storiesOf("Elements|Panel Headers/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Navigation", () => (
    <NavigationPanelHeader title="Main Header" menuData={data} />
  ));
