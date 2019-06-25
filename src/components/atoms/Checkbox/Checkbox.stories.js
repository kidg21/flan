import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs";
import Checkbox, { CheckboxGroup } from "atoms/Checkbox";
import CheckboxNotes from "./Checkbox.md";

const cbox_1 = {
  id: "cbox_1",
  label: "Box 1"
};
const cbox_2 = {
  id: "cbox_2",
  label: "Box 2"
};
const cbox_3 = {
  id: "cbox_3",
  label: "Box 3"
};
const cbox_4 = {
  id: "cbox_4",
  label: "Box 4"
};
const cbox_long = {
  id: "cbox_long",
  label:
    "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself."
};

storiesOf("Atoms|Checkbox", module)
  .addParameters({
    info: {
      text: "Checkbox info goes here..."
    },
    notes: {
      markdown: CheckboxNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Documentation", withInfo()(() => <Checkbox {...cbox_1} />))
  .add("Knobs", () => (
    <CheckboxGroup
      columns={options(
        "columns",
        {
          "wrap ( default )": "default",
          one: "1",
          two: "2",
          three: "3",
          four: "4"
        },
        "default",
        { display: "radio" },
        "Checkbox Group"
      )}
    >
      <Checkbox
        {...cbox_1}
        type={options(
          "box 1 (state)",
          {
            default: "default",
            disabled: "disabled",
            error: "error"
          },
          "default",
          { display: "inline-radio" },
          "Box 1"
        )}
      />
      <Checkbox
        {...cbox_2}
        type={options(
          "box 2 (state)",
          {
            default: "default",
            disabled: "disabled",
            error: "error"
          },
          "default",
          { display: "inline-radio" },
          "Box 2"
        )}
      />
      <Checkbox
        {...cbox_3}
        type={options(
          "box 3 (state)",
          {
            default: "default",
            disabled: "disabled",
            error: "error"
          },
          "default",
          { display: "inline-radio" },
          "Box 3"
        )}
      />
      <Checkbox
        {...cbox_4}
        type={options(
          "box 4 (state)",
          {
            default: "default",
            disabled: "disabled",
            error: "error"
          },
          "default",
          { display: "inline-radio" },
          "Box 4"
        )}
      />
    </CheckboxGroup>
  ))
  .add("Checkbox (States)", () => (
    <CheckboxGroup>
      <Checkbox id="default" label="Default" />
      <Checkbox id="selected" label="Selected" checked />
      <Checkbox id="error" label="Error" type="error" />
      <Checkbox id="disabled" label="Disabled" type="disabled" />
    </CheckboxGroup>
  ))
  .add("Checkbox Group (Responsive)", () => (
    <CheckboxGroup>
      <Checkbox {...cbox_1} />
      <Checkbox {...cbox_2} />
      <Checkbox {...cbox_3} />
      <Checkbox {...cbox_4} />
      <Checkbox {...cbox_long} />
    </CheckboxGroup>
  ))
  .add("Checkbox Group (2 columns)", () => (
    <CheckboxGroup columns="2">
      <Checkbox {...cbox_1} />
      <Checkbox {...cbox_2} />
      <Checkbox {...cbox_3} />
      <Checkbox {...cbox_4} />
      <Checkbox {...cbox_long} />
    </CheckboxGroup>
  ))
  .add("Checkbox Group (3 columns)", () => (
    <CheckboxGroup columns="3">
      <Checkbox {...cbox_1} />
      <Checkbox {...cbox_2} />
      <Checkbox {...cbox_3} />
      <Checkbox {...cbox_4} />
      <Checkbox {...cbox_long} />
    </CheckboxGroup>
  ))
  .add("Checkbox Group (mixed columns)", () => (
    <>
      <CheckboxGroup columns="2">
        <Checkbox {...cbox_1} />
        <Checkbox {...cbox_2} />
        <Checkbox {...cbox_3} />
        <Checkbox {...cbox_4} />
      </CheckboxGroup>
      <CheckboxGroup columns="1">
        <Checkbox {...cbox_long} />
      </CheckboxGroup>
    </>
  ));
