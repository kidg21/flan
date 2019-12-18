/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Padding } from "helpers/Display";

import Grid from "layout/Grid";
import Label from "./Label.jsx";

/** TODO: Add 'Documentation' and 'Knobs' stories */
storiesOf("Atoms/Label", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Label", () => {
    return (
      <Grid columns="1">
        <Label text="Label" />
        <Label text="Label Cap" textTransform="uppercase" />
        <Label />
      </Grid>
    );
  });
