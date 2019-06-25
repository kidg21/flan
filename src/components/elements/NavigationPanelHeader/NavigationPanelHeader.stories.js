import React from "react";
import { storiesOf } from "@storybook/react";
import NavigationPanelHeader from "./NavigationPanelHeader";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
// import Group from "./Group";

// Colors
storiesOf("Elements|Panel Headers/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Navigation", () => <NavigationPanelHeader title="Main Header" />);
