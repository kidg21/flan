/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import Download from "elements/Download";


storiesOf("Elements|Download", module)
  .addDecorator(Padding)
  .add(
    "Default",() => {
      return (
        <Download      />
      );
    });