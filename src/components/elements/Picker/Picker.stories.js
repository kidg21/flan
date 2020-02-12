/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import Picker from "./Picker";


storiesOf("Elements|Picker", module)
  .addDecorator(Padding)
  .add(
    "Documentation",
    () => {
      return (
        <Picker/>
      );
    });