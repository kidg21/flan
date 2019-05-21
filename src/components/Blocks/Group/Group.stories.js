import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Group from "./Group";

// Colors
storiesOf("Blocks|Panel Group", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Group", () => <Group title="My DMP Layers" number="2" />);
