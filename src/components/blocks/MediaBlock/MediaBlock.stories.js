import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import MediaBlock from "blocks/MediaBlock";

// const data = [
//   { id: "a", color: "Owners/Units", name: "Multiple Owners (2 Units)" },
//   { id: "b", color: "Master Parcel No.", name: "387483675638" },
//   { id: "c", color: "Zoning", name: "No Zone" }
// ];

const image = (
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
    width="50px"
    height="50px"
  />
);

storiesOf("Work|Blocks/MediaBlock", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Simple", () => (
    <MediaBlock media="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE" />
  ));
