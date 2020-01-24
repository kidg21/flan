/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";


import { Padding } from "helpers/Display";
import NavigationPanelHeader from "elements/PanelHeaders/NavigationPanelHeader";

const data = [
  { id: "a", label: "Save" },
  { id: "b", label: "Filter" },
  { id: "c", label: "Something" },
  { id: "d", label: "Filter" },
  { id: "e", label: "Layer" },
];

storiesOf("Elements|Panel Headers/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Navigation", () => {
    return (
      <NavigationPanelHeader
        title="Main Header"
        menuData={data}
        onClick={() => { }}
      />
    );
  });
