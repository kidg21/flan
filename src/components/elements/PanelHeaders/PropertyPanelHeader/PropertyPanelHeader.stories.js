/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import PropertyPanelHeader from "elements/PanelHeaders/PropertyPanelHeader";

const data = [
  { id: "a", label: "Save" },
  { id: "b", label: "Filter" },
  { id: "c", label: "Something" },
  { id: "d", label: "Filter" },
  { id: "e", label: "Layer" },
];

storiesOf("Templates|Headers/", module)
  .addDecorator(Padding)
  .add("Property", () => {
    return (
      <PropertyPanelHeader
        id="Property_Header"
        title="5201 California Ave, Irvine, CA 92614"
        menuData={data}
        onClick={() => { }}
      />
    );
  });

