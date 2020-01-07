/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";


import { Padding } from "helpers/Display";
import PropertyPanelHeader from "elements/PanelHeaders/PropertyPanelHeader";

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
  .add("Property", () => {
    return (
      <PropertyPanelHeader
        title="5201 California Ave, Irvine, CA 92614"
        menuData={data}
        onClick={() => {}}
      />
    );
  });
