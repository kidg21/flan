import React from "react";
import { storiesOf } from "@storybook/react";
import MapSearch from "elements/MapSearch";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

storiesOf("Elements|MapSearch", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Default", () => <MapSearch placeholder="What are you looking for?" />);
