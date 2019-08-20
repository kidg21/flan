import React from "react";
import { storiesOf } from "@storybook/react";
import PropertyPanelHeader from "./PropertyPanelHeader";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

const data = [
  { id: "a", name: "Save" },
  { id: "b", name: "Filter" },
  { id: "c", name: "Something" },
  { id: "d", name: "Filter" },
  { id: "e", name: "Layer" },
];

storiesOf("Elements|Panel Headers/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Property", () => (
    <PropertyPanelHeader
      title="5201 California Ave, Irvine, CA 92614"
      menuData={data}
      APN="374-543-4227"
    />
  ));
