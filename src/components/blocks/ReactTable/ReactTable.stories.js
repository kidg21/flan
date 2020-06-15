/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import ReactTable from "./ReactTable.jsx";



storiesOf("Blocks|ReactTable", module)

  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    () => {
      return <ReactTable />;
    });
