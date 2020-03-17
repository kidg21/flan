/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import Legend from "./Legend.jsx";

const options = [
  { label: "Category 0", value: "Value 0" },
  { label: "Category 1", value: "Value 1" },
  { label: "Category 2", value: "Value 2" },
  { label: "Category 3", value: "Value 3" },
  { label: "Category 4", value: "Value 4" },
  { label: "Category 5", value: "Value 5" },
];

storiesOf("Blocks|Legend", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    () => {
      return <Legend title="Legend" data={options} />;
    });
