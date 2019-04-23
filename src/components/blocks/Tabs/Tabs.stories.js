import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import Tabs, { Tab } from "blocks/Tabs";
import Button from "atoms/Button";

// Buttons
storiesOf("Blocks|Tabs", module)
  .addDecorator(Padding)
  .add("Standard Tabs", () => (
    <Tabs>
      <Tab />
      <Tab isSelected />
      <Tab />
    </Tabs>
  ));
