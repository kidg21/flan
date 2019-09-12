/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import { withKnobs, text, boolean, optionsKnob as options } from "@storybook/addon-knobs";
import { Section } from "layout/Form";
import Checkbox, { CheckboxGroup } from "atoms/Checkbox";
import CheckboxNotes from "./Checkbox.md";
import CheckboxGroupNotes from "./CheckboxGroup.md";

const shortLabels = [
  {
    id: "cbox_1",
    label: "Box 1",
  },
  {
    id: "cbox_2",
    label: "Box 2 (disabled)",
    disabled: true,
  },
  {
    id: "cbox_3",
    label: "Box 3",
  },
  {
    id: "cbox_4",
    label: "Box 4",
  },
];
const longLabels = [
  {
    id: "cbox_long",
    label:
      "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself.",
  },
  {
    id: "cbox_long2",
    label: "Enough with these long labels already...put it on your blog, Shakespeare.",
  },
];

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
  .add(
    "Documentation",
    withInfo()(() => {
      return <Checkbox id="cbox1" label="Box 1" />;
    }),
  )
  .add("Skeleton", () => {
    return <Checkbox id="default" />;
  })
  .add("Knobs", () => {
    return (
      <Checkbox
        id="cbox1"
        label={text("label", "Checkbox Label", "Checkbox")}
        align={options(
          "align",
          {
            left: null,
            right: "right",
          },
          null,
          { display: "select" },
          "Checkbox",
        )}
        error={boolean("error", false, "Checkbox")}
        disabled={boolean("disabled", false, "Checkbox")}
      />
    );
  })
  .add("Checkbox (states)", () => {
    return (
      <CheckboxGroup>
        <Checkbox id="default" label="Default" />
        <Checkbox id="selected" label="Selected" checked />
        <Checkbox id="error" label="Error" error />
        <Checkbox id="disabled" label="Disabled" disabled />
      </CheckboxGroup>
    );
  })
  .add("Checkbox (alignment)", () => {
    return (
      <CheckboxGroup>
        <Checkbox id="standard" label="Standard" />
        <Checkbox id="align-right" label="Right Aligned" align="right" />
      </CheckboxGroup>
    );
  });

storiesOf("Blocks|Checkbox Group", module)
  .addParameters({
    info: {
      text: "Checkbox Group info goes here...",
    },
    notes: {
      markdown: CheckboxGroupNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <CheckboxGroup
          id="group1"
          label="Checkbox Group Label"
          data={shortLabels}
          helpText="This help text has been passed through a prop!"
        />
      );
    }),
  )
  .add("Knobs", () => {
    return (
      <CheckboxGroup
        id="group1"
        data={shortLabels}
        columns={options(
          "columns",
          {
            "auto ( default )": "default",
            "one": "1",
            "two": "2",
            "three": "3",
            "four": "4",
            "five": "5",
            "six": "6",
          },
          "default",
          { display: "select" },
          "Checkbox Group",
        )}
        isRequired={boolean("required", false, "Checkbox Group")}
        label={text("Input Label", "Input Label", "Checkbox Group")}
        helpText={text("Help Text", "Have you been helped yet?", "Checkbox Group")}
        align={options(
          "box align",
          {
            left: null,
            right: "right",
          },
          null,
          { display: "select" },
          "Checkbox Group",
        )}
        errorText={text("Error Text", "", "Checkbox Group")}
        disabled={boolean("disabled", false, "Checkbox Group")}
      />
    );
  })
  .add("Checkbox Group (responsive)", () => {
    return <CheckboxGroup data={shortLabels} />;
  })
  .add("Checkbox Group (2 columns)", () => {
    return <CheckboxGroup data={shortLabels} columns="2" />;
  })
  .add("Checkbox Group (3 columns)", () => {
    return <CheckboxGroup data={shortLabels} columns="3" />;
  })
  .add("Checkbox Group (mixed columns)", () => {
    return (
      <Section>
        <CheckboxGroup data={shortLabels} columns="2" />
        <CheckboxGroup data={longLabels} columns="1" />
      </Section>
    );
  })
  .add("Checkbox Group (right-aligned)", () => {
    return <CheckboxGroup data={shortLabels} columns="2" align="right" />;
  });
