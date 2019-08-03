import React from "react";
import { storiesOf } from "@storybook/react";
import MainPanelHeader from "./MainPanelHeader";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
// import Group from "./Group";

// Colors
storiesOf("Elements|Panel Headers/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Main", () => <MainPanelHeader title="Main Header" />);
