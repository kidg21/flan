/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import Form from "layout/Form";
import RangeSlider from "blocks/RangeSlider";


storiesOf("Blocks|Range Slider", module)

  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    () => {
      return (
        <RangeSlider
          id="documentation"
          label="Range Slider Label"
          minLabel="Min Label"
          maxLabel="Max Label"
          helpText="Hang in there, buddy, I'm here to help!"
        />
      );
    })
  .add("Knobs", () => {
    return (
      <RangeSlider
        id="knobs"
        label={text("label", "Range Slider Label", "Range Slider")}
        placeholderMin={text("min label", "Min", "Range Slider")}
        placeholderMax={text("max label", "Max", "Range Slider")}
        isRequired={boolean("required", false, "Range Slider")}
        helpText={text("help text", "Help text goes here...", "Range Slider")}
        error={text("error", null, "Range Slider")}
        disabled={boolean("disabled", false, "Range Slider")}
      />
    );
  })
  .add("States", () => {
    return (
      <Form columns="1">
        <RangeSlider
          id="standard"
          label="Standard Slider"
          minLabel="Min Label"
          maxLabel="Max Label"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <RangeSlider
          id="required"
          isRequired
          label="Required Slider"
          minLabel="Min Label"
          maxLabel="Max Label"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <RangeSlider
          id="disabled"
          disabled
          label="Disabled Slider"
          minLabel="Min Label"
          maxLabel="Max Label"
          helpText="Hang in there, buddy, I'm here to help!"
        />
      </Form>
    );
  });
