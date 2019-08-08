/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import {
  withKnobs,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import Checkbox, { CheckboxGroup } from "atoms/Checkbox";
import CheckboxNotes from "./Checkbox.md";

const cbox1 = {
  id: "cbox_1",
  label: "Box 1",
};
const cbox2 = {
  id: "cbox_2",
  label: "Box 2",
};
const cbox3 = {
  id: "cbox_3",
  label: "Box 3",
};
const cbox4 = {
  id: "cbox_4",
  label: "Box 4",
};
const cboxLong = {
  id: "cbox_long",
  label:
    "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself.",
};

storiesOf("Atoms|Checkbox", module)
  .addParameters({
    info: {
      text: "Checkbox info goes here...",
    },
    notes: {
      markdown: CheckboxNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Documentation", withInfo()(() => { return <Checkbox {...cbox1} />; }))
  .add("Skeleton", () => { return <Checkbox id="default" />; })
  .add("Knobs", () => {
    return (
      <CheckboxGroup
        columns={options(
          "columns",
          {
            "wrap ( default )": "default",
            "one": "1",
            "two": "2",
            "three": "3",
            "four": "4",
          },
          "default",
          { display: "radio" },
          "Checkbox Group",
        )}
      >
        <Checkbox
          {...cbox1}
          type={options(
            "box 1 (state)",
            {
              default: "default",
              error: "error",
            },
            "default",
            { display: "inline-radio" },
            "Box 1",
          )}
        />
        <Checkbox
          {...cbox2}
          type={options(
            "box 2 (state)",
            {
              default: "default",
              error: "error",
            },
            "default",
            { display: "inline-radio" },
            "Box 2",
          )}
        />
        <Checkbox
          {...cbox3}
          type={options(
            "box 3 (state)",
            {
              default: "default",
              error: "error",
            },
            "default",
            { display: "inline-radio" },
            "Box 3",
          )}
        />
        <Checkbox
          {...cbox4}
          type={options(
            "box 4 (state)",
            {
              default: "default",
              error: "error",
            },
            "default",
            { display: "inline-radio" },
            "Box 4",
          )}
        />
      </CheckboxGroup>
    );
  })
  .add("Checkbox (States)", () => {
    return (
      <CheckboxGroup>
        <Checkbox id="default" label="Default" />
        <Checkbox id="selected" label="Selected" checked />
        <Checkbox id="error" label="Error" type="error" />
        <Checkbox id="disabled" label="Disabled" disabled />
      </CheckboxGroup>
    );
  })
  .add("Checkbox (Alignment)", () => {
    return (
      <CheckboxGroup>
        <Checkbox {...cbox1} align="right" />
        <Checkbox {...cbox2} align="right" />
        <Checkbox {...cbox3} align="right" />
        <Checkbox {...cbox4} align="right" />
      </CheckboxGroup>
    );
  })
  .add("Checkbox Group (Responsive)", () => {
    return (
      <CheckboxGroup>
        <Checkbox {...cbox1} />
        <Checkbox {...cbox2} />
        <Checkbox {...cbox3} />
        <Checkbox {...cbox4} />
        <Checkbox {...cboxLong} />
      </CheckboxGroup>
    );
  })
  .add("Checkbox Group (2 columns)", () => {
    return (
      <CheckboxGroup columns="2">
        <Checkbox {...cbox1} />
        <Checkbox {...cbox2} />
        <Checkbox {...cbox3} />
        <Checkbox {...cbox4} />
        <Checkbox {...cboxLong} />
      </CheckboxGroup>
    );
  })
  .add("Checkbox Group (3 columns)", () => {
    return (
      <CheckboxGroup columns="3">
        <Checkbox {...cbox1} />
        <Checkbox {...cbox2} />
        <Checkbox {...cbox3} />
        <Checkbox {...cbox4} />
        <Checkbox {...cboxLong} />
      </CheckboxGroup>
    );
  })
  .add("Checkbox Group (mixed columns)", () => {
    return (
      <>
        <CheckboxGroup columns="2">
          <Checkbox {...cbox1} />
          <Checkbox {...cbox2} />
          <Checkbox {...cbox3} />
          <Checkbox {...cbox4} />
        </CheckboxGroup>
        <CheckboxGroup columns="1">
          <Checkbox {...cboxLong} />
        </CheckboxGroup>
      </>
    );
  });
