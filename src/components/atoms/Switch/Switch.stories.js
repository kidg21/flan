/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import Form from "layout/Form";
import Switch from "atoms/Switch";
import SwitchNotes from "./Switch.md";

storiesOf("Atoms|Switch", module)
  .addParameters({
    info: {
      text: "Switch info goes here...",
    },
    notes: {
      markdown: SwitchNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return <Switch label="Switch" />;
    }),
  )
  .add("Knobs", () => {
    return (
      <Switch
        id="switch1"
        label={text("label", "Switch Label", "Switch")}
        align={options(
          "align",
          {
            left: null,
            right: "right",
          },
          null,
          { display: "select" },
          "Switch",
        )}
        error={boolean("error", false, "Switch")}
        disabled={boolean("disabled", false, "Switch")}
      />
    );
  })
  .add("States", () => {
    return (
      <Form>
        <Switch id="inactive" label="Inactive" />
        <Switch id="active" label="Active" checked />
        <Switch id="error" label="Error" error />
        <Switch id="disabled" label="Disabled" disabled />
      </Form>
    );
  })
  .add("Alignment", () => {
    return (
      <Form>
        <Switch id="standard" label="Standard" />
        <Switch id="align-right" label="Right Aligned" align="right" />
      </Form>
    );
  });
