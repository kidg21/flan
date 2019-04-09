import React from "react";
import { storiesOf } from "@storybook/react";
// import CardHeader from "./CardHeader"
import PropertyInfo from "./PropertyInfo";
import InfoHeader from "./InfoHeader";

const navProps = {
    nameProp: ["far", "angle-right"],
    colorProp: "dimgray"
  };

//  const infoSectionProps = {
//     nameProp: ["far", "angle-up"],
//     colorProp: "dimgray"
//   };


storiesOf("Cards|Property", module)
.add("Property Section Card", () => <PropertyInfo title="Ownership"/>)
.add("Property Info Header", () => <InfoHeader street="5201 California Ave." city="Irvine, CA 92614"/> );