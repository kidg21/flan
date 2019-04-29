import React from "react";
import { storiesOf } from "@storybook/react";
import Banner from "./Banner";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

storiesOf("Blocks|Banner", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Error", () => (
    <div>
      <Banner error title={"This is a notification telling you stuff."} />
    </div>
  ))
  .add("Warning", () => (
    <div>
      <Banner warning title={"This is a notification telling you stuff."} />
    </div>
  ))
  .add("General Info", () => (
    <div>
      <Banner info title={"This is a notification telling you stuff."} />
    </div>
  ))
  .add("Success", () => (
    <div>
      <Banner success title={"This is a notification telling you stuff."} />
    </div>
  ));
