/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import Form, { Section } from "layout/Form";
import RangeSlider from "blocks/RangeSlider";

const RangeSliderNotes = markdown.require("./RangeSlider.md");

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
          helpText="Hang in there, buddy, I'm here to help!"
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
        helpText={text("help text", "Help text goes here...", "Range Slider")}
        error={text("error", null, "Range Slider")}
        disabled={boolean("disabled", false, "Range Slider")}
      />
    );
  })
  .add("States", () => {
    return (
      <Form title="States" columns="1">
        <Section title="Standard">
          <RangeSlider
            label="Range Slider Label"
            minLabel="Min Label"
            maxLabel="Max Label"
            helpText="Hang in there, buddy, I'm here to help!"
          />
        </Section>
        <Section title="Required">
          <RangeSlider
            isRequired
            label="Range Slider Label"
            minLabel="Min Label"
            maxLabel="Max Label"
            helpText="Hang in there, buddy, I'm here to help!"
          />
        </Section>
        <Section title="Disabled">
          <RangeSlider
            disabled
            label="Range Slider Label"
            minLabel="Min Label"
            maxLabel="Max Label"
            helpText="Hang in there, buddy, I'm here to help!"
          />
        </Section>
      </Form>
    );
  });
