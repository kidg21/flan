import React from "react";
import { storiesOf } from "@storybook/react";
import PanelHeader from "./PanelHeader";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
// import Group from "./Group";

// Colors
storiesOf("Elements|Panel Headers", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Default Header", () => <PanelHeader main="true" title="Main Header" />)
  .add("Navigation Header", () => (
    <PanelHeader navigation="true" title="Navigation Header" />
  ))
  .add("Property Header", () => (
    <PanelHeader
      property="true"
      title="5201 California Avenue, Irvine, CA 92617"
    />
  ));
