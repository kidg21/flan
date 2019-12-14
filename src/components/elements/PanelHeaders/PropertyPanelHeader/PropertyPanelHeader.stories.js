/* eslint-disable linebreak-style */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
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
        APN="374-543-4227"
        onClick={() => {}}
      />
    );
  });
