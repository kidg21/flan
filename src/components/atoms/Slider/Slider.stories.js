/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import Grid from "layout/Grid";
import Slider from "atoms/Slider";

storiesOf("Atoms|Slider", module)
  .addDecorator(withInfo)
  .addDecorator(Padding)
  .add("Slider", () => {
    return (
      <Grid columns="1" gap="xxlarge">
        <Slider />
        <Slider error />
        <Slider disabled />
      </Grid>
    );
  });
