import React from "react";
import { storiesOf } from "@storybook/react";
// import CardHeader from "./CardHeader"
import LayerHeader from "./LayerHeader";
import CardHeader from "./CardHeader";

const navProps = {
    nameProp: ["far", "angle-right"],
    colorProp: "dimgray"
  };

//  const infoSectionProps = {
//     nameProp: ["far", "angle-up"],
//     colorProp: "dimgray"
//   };


storiesOf("Cards|Layer", module)
.add("Layer Card", () => <CardHeader title="Card Header"/>)
.add("Layer Header", () => <LayerHeader title="Layer Header"/> );