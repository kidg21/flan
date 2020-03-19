/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";


import { Padding } from "helpers/Display";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";

const data = [
  { id: "a", label: "Save" },
  { id: "b", label: "Filter" },
  { id: "c", label: "Something" },
  { id: "d", label: "Filter" },
  { id: "e", label: "Layer" },
];

storiesOf("Templates|Panel Headers/", module)
  .addDecorator(Padding)
  .add("Main", () => {
    return <MainPanelHeader title="Main Header" menuData={data} />;
  });
