import React from "react";
import { storiesOf } from "@storybook/react";
import Banner from "./Banner";

storiesOf("Blocks|Banner", module).add("Default", () => (
  <div>
    <Banner error title={"This is a notification telling you stuff."} />
    <div style={{ padding: "5px" }} />
    <Banner warning title={"This is a notification telling you stuff."} />
    <div style={{ padding: "5px" }} />
    <Banner info title={"This is a notification telling you stuff."} />
    <div style={{ padding: "5px" }} />
    <Banner success title={"This is a notification telling you stuff."} />
  </div>
));
