import React from "react";
import { storiesOf } from "@storybook/react";
import NavCard from "./NavCard";
import FilterHeader from "./FilterHeader";

const navProps = {
    nameProp: ["far", "angle-left"],
    colorProp: "dimgray"
  };

//  const infoSectionProps = {
//     nameProp: ["far", "angle-up"],
//     colorProp: "dimgray"
//   };


storiesOf("Cards|Filter", module)
.add("Nav Card", () => <NavCard title="Navigation Card"/>)
.add("Filter Header 1st", () => <FilterHeader navProps="" layer="Data Overlay" title="Filter Header"/> )
.add("Filter Header 2nd or 3rd", () => <FilterHeader navProps={navProps} layer="Data Overlay" title="Filter Header"/> );