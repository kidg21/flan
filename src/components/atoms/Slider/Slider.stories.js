/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import Form, { Section } from "layout/Form";
import Slider from "atoms/Slider";



storiesOf("Atoms|Slider", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    () => {
      return <Slider />;
    })
  .add("Knobs", () => {
    return (
      <Slider
        error={boolean("error", false, "Slider")}
        disabled={boolean("disabled", false, "Slider")}
      />
    );
  })
  .add("States", () => {
    return (
      <Form title="States" columns="1">
        <Section title="Standard">
          <Slider />
        </Section>
        <Section title="Error">
          <Slider error />
        </Section>
        <Section title="Disabled">
          <Slider disabled />
        </Section>
      </Form>
    );
  });
