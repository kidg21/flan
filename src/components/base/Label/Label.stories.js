/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import Grid from "layout/Grid";
import Label from "./Label";

/** TODO: Add 'Documentation' and 'Knobs' stories */
storiesOf("Application|Style Guides/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Label", () => {
    return (
      <Grid columns="1">
        <Label text="Label" />
        <Label text="Label Cap" textTransform="uppercase" />
      </Grid>
    );
  });
