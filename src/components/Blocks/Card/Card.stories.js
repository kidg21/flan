import React from "react";
import { storiesOf } from "@storybook/react";
// import CardHeader from "./CardHeader"
import NavCard from "../../cards/Filter/NavCard";
import SelectCard from "./SelectCard";
import PopCard from "./PopCard";

// const navProps = {
//     nameProp: ["far", "angle-right"],
//     colorProp: "dimgray"
//   };

//  const infoSectionProps = {
//     nameProp: ["far", "angle-up"],
//     colorProp: "dimgray"
//   };

storiesOf("Blocks|Card", module)
  // .add("Header", () => <CardHeader title="Card Header"/>)
  .add("Nav Card", () => <NavCard title="Navigation Card" />)
  .add("Pop Card", () => (
    <PopCard
      title="Pop Out Alert"
      message="Something happened and this is the message about it. Hey how you doing? Good? That's nice. Okay Bye"
      action="Do it!"
    />
  ));
