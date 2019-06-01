import React from "react";
import { storiesOf } from "@storybook/react";
import MapLegend from "./MapLegend";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

storiesOf("Blocks|Map Legend", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Legend", () => <MapLegend />);
