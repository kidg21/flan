import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Bar from "./Bar";

storiesOf("Blocks|Bar", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)

  .add("Two Part", () => <Bar left="two part" type="two" right="try" />)
  .add("Three Part", () => (
    <Bar left="three part" type="three" middle="first" right="try" />
  ))
  .add("One Part", () => <Bar type="one" right="x" />);
