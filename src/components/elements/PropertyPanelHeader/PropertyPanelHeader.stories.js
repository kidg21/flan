import React from "react";
import { storiesOf } from "@storybook/react";
import PropertyPanelHeader from "./PropertyPanelHeader";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

storiesOf("Elements|Panel Headers/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Property", () => (
    <PropertyPanelHeader title="5201 California Ave, Irvine, CA 92614" />
  ));
