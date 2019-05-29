import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Bar from "./Bar";

storiesOf("Blocks|Bar", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)

  .add("Two Part", () => (
    <Bar firstSlot="two part" twoParts={true} secondSlot="try" />
  ))
  .add("Three Part", () => (
    <Bar
      secondSlot="three part"
      threeParts={true}
      firstSlot="first"
      thirdSlot="try"
    />
  ))
  .add("One Part", () => <Bar onePart={true} secondSlot="x" />);
