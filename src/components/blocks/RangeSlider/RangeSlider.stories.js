/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import Grid from "layout/Grid";
import RangeSlider from "blocks/RangeSlider";

storiesOf("Blocks|Range Slider", module)
  .addDecorator(withInfo)
  .addDecorator(Padding)
  .add("Range Slider", () => {
    return (
      <Grid columns="1" gap="xxlarge">
        <RangeSlider
          label="Range Slider Label"
          minLabel="Min Label"
          maxLabel="Max Label"
          helpText="This help text has been passed through a prop!"
        />
        <RangeSlider
          isRequired
          label="Range Slider Label"
          minLabel="Min Label"
          maxLabel="Max Label"
          helpText="This help text has been passed through a prop!"
        />
        <RangeSlider
          label="Range Slider Label"
          minLabel="Min Label"
          maxLabel="Max Label"
          helpText="This help text has been passed through a prop!"
          errorText="Out of range!"
        />
        <RangeSlider
          disabled
          label="Range Slider Label"
          minLabel="Min Label"
          maxLabel="Max Label"
          helpText="This help text has been passed through a prop!"
        />
      </Grid>
    );
  });
