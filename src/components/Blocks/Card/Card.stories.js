import React from "react";
import { storiesOf } from "@storybook/react";
import CardHeader from "./CardHeader"
import NavCard from "./NavCard";
import SelectCard from "./SelectCard";

// const navProps = {
//     nameProp: ["far", "angle-right"],
//     colorProp: "dimgray"
//   };

//  const infoSectionProps = {
//     nameProp: ["far", "angle-up"],
//     colorProp: "dimgray"
//   };


storiesOf("Blocks|Card", module)
.add("Header", () => <CardHeader title="Card Header"/>)
.add("Nav Card", () => <NavCard 
title="Navigation Card"/>);