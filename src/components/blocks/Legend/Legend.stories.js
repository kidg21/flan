/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import Legend from "./Legend.jsx";

const options = [
  { name: "Category 0", value: "Value 0" },
  { name: "Category 1", value: "Value 1" },
  { name: "Category 2", value: "Value 2" },
  { name: "Category 3", value: "Value 3" },
  { name: "Category 4", value: "Value 4" },
  { name: "Category 5", value: "Value 5" },
];

storiesOf("Blocks|Legend", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return <Legend data={options} />;
    }),
  );
