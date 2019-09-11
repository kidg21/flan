/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, radios } from "@storybook/addon-knobs";
import Form, { Section } from "layout/Form";
import RangeSlider from "blocks/RangeSlider";
import RangeSliderNotes from "./RangeSlider.md";

storiesOf("Blocks|Range Slider", module)
  .addParameters({
    info: {
      text: "Range Slider info goes here...",
    },
    notes: {
      markdown: RangeSliderNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <RangeSlider
          label="Range Slider Label"
          minLabel="Min Label"
          maxLabel="Max Label"
          helpText="This help text has been passed through a prop!"
        />
      );
    }),
  )
  .add("Knobs", () => {
    return (
      <RangeSlider
        label={text("label", "Range Slider Label", "Range Slider")}
        placeholderMin={text("min label", "Min", "Range Slider")}
        placeholderMax={text("max label", "Max", "Range Slider")}
        isRequired={boolean("required", false, "Range Slider")}
        errorText={text("error text", "", "Range Slider")}
        disabled={boolean("disabled", false, "Range Slider")}
      />
    );
  })
  .add("States", () => {
    return (
      <Form title="States" columns="1" gap="xxlarge">
        <RangeSlider
          label="Range Slider Label (standard)"
          minLabel="Min Label"
          maxLabel="Max Label"
          helpText="This help text has been passed through a prop!"
        />
        <RangeSlider
          isRequired
          label="Range Slider Label (required)"
          minLabel="Min Label"
          maxLabel="Max Label"
          helpText="This help text has been passed through a prop!"
        />
        <RangeSlider
          label="Range Slider Label (error)"
          minLabel="Min Label"
          maxLabel="Max Label"
          helpText="This help text has been passed through a prop!"
          errorText="Out of range!"
        />
        <RangeSlider
          disabled
          label="Range Slider Label (disabled)"
          minLabel="Min Label"
          maxLabel="Max Label"
          helpText="This help text has been passed through a prop!"
        />
      </Form>
    );
  });
