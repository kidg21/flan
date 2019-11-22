/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Form, { Section } from "layout/Form";
import RangeSlider from "blocks/RangeSlider";
import RangeSliderNotes from "./RangeSlider.md";

storiesOf("Blocks|Range Slider", module)
  .addParameters({
    info: {
      text: "Range Slider info goes here..."
    },
    notes: {
      markdown: RangeSliderNotes
    }
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
    })
  )
  .add("Knobs", () => {
    return (
      <RangeSlider
        label={text("label", "Range Slider Label", "Range Slider")}
        placeholderMin={text("min label", "Min", "Range Slider")}
        placeholderMax={text("max label", "Max", "Range Slider")}
        isRequired={boolean("required", false, "Range Slider")}
        helpText={text("help text", "Help text goes here...", "Range Slider")}
        error={
          boolean("error", false, "Range Slider") &&
          text("error text", "Error message...", "Range Slider")
        }
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
