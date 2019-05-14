import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Group from "./Group";

// Colors
storiesOf("Blocks|Panel Headers", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Navigation", () => (
    <div>
      <Header title="Navigation Header" threeParts={true} />
    </div>
  ))
  .add("Property", () => (
    <div>
      <Header title="5201 California Ave. Irvine, California" property={true} />
    </div>
  ))
  .add("Regular (first)", () => (
    <div>
      <Header title="Filter" twoParts={true} />{" "}
    </div>
  ))
  .add("Group", () => (
    <div>
      <Group title="My DMP Layers" number="2" />
    </div>
  ));
