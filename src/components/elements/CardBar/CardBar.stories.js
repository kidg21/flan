import React from "react";
import { storiesOf } from "@storybook/react";
import CardBar from "./CardBar";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

// Colors
storiesOf("Elements|Card Bar", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Layer", () => <CardBar layer="true" title="Demographics" />)
  .add("Navigation", () => <CardBar navigation="true" title="Property" />)
  .add("Info", () => <CardBar info="true" title="Ownership" />);
