import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import List, { Item } from "atoms/List";
import MapInfo from "./MapInfo.jsx";

const data = [
  { id: "a", onClickLink: "", name: "Map Summary" },
  { id: "b", onClickLink: "", name: "Filter" },
  { id: "c", onClickLink: "", name: "Share" },

  { id: "d", onClickLink: "", name: "Filter" },
  { id: "e", onClickLink: "", name: "Layer" },
];

storiesOf("Blocks|MapInfo", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Map Info", () => {
    return React.createElement(() => {
      return <MapInfo results="100,400" />;
    });
  });
