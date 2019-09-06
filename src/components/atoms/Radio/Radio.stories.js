/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import { withKnobs, text, boolean, optionsKnob as options } from "@storybook/addon-knobs";
import Radio, { RadioGroup } from "atoms/Radio";
import RadioNotes from "./Radio.md";
import RadioGroupNotes from "./RadioGroup.md";

const shortLabels = [
  {
    id: "radio-1",
    name: "radio-group",
    value: "1",
    label: "Radio 1",
  },
  {
    id: "radio-2",
    name: "radio-group",
    value: "2",
    label: "Radio 2 (disabled)",
    disabled: true,
  },
  {
    id: "radio-3",
    name: "radio-group",
    value: "3",
    label: "Radio 3",
  },
  {
    id: "radio-4",
    name: "radio-group",
    value: "4",
    label: "Radio 4",
  },
];
const longLabels = [
  {
    id: "radio_long",
    name: "radio-group",
    value: "5",
    label:
      "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself.",
  },
  {
    id: "radio_long2",
    name: "radio-group",
    value: "6",
    label: "Enough with these long labels already...put it on your blog, Shakespeare.",
  },
];

storiesOf("Atoms|Radio", module)
  .addParameters({
    info: {
      text: "Radio info goes here...",
    },
    notes: {
      markdown: RadioNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return <Radio id="radio1" label="Radio 1" name="radio-group" value="1" />;
    }),
  )
  .add("Skeleton", () => {
    return <Radio />;
  })
  .add("Knobs", () => {
    return (
      <Radio
        id="radio1"
        label={text("label", "Radio Label", "Radio")}
        name="radio-group"
        value="1"
        align={options(
          "align",
          {
            left: null,
            right: "right",
          },
          null,
          { display: "select" },
          "Radio",
        )}
        error={boolean("error", false, "Radio")}
        disabled={boolean("disabled", false, "Radio")}
      />
    );
  })
  .add("Radio (states)", () => {
    return (
      <RadioGroup>
        <Radio id="default" value="default" label="Default" name="states" />
        <Radio id="selected" value="selected" label="Selected" name="states" checked />
        <Radio id="error" value="error" label="Error" name="states" error />
        <Radio id="disabled" value="disabled" label="Disabled" name="states" disabled />
      </RadioGroup>
    );
  })
  .add("Radio (alignment)", () => {
    return (
      <RadioGroup>
        <Radio id="standard" value="standard" label="Standard" name="alignment" />
        <Radio
          id="align-right"
          value="align-right"
          label="Right Aligned"
          name="alignment"
          align="right"
        />
      </RadioGroup>
    );
  });

storiesOf("Blocks|Radio Group", module)
  .addParameters({
    info: {
      text: "Radio Group info goes here...",
    },
    notes: {
      markdown: RadioGroupNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <RadioGroup
          id="group1"
          label="Radio Group Label"
          data={shortLabels}
          helpText="This help text has been passed through a prop!"
        />
      );
    }),
  )
  .add("Knobs", () => {
    return (
      <RadioGroup
        id="group1"
        data={shortLabels}
        columns={options(
          "columns",
          {
            "auto ( default )": "default",
            one: "1",
            two: "2",
            three: "3",
            four: "4",
            five: "5",
            six: "6",
          },
          "default",
          { display: "select" },
          "Radio Group",
        )}
        isRequired={boolean("required", false, "Radio Group")}
        label={text("Input Label", "Input Label", "Radio Group")}
        helpText={text("Help Text", "Have you been helped yet?", "Radio Group")}
        align={options(
          "box align",
          {
            left: null,
            right: "right",
          },
          null,
          { display: "select" },
          "Radio Group",
        )}
        errorText={text("Error Text", "", "Radio Group")}
        disabled={boolean("disabled", false, "Radio Group")}
      />
    );
  })
  .add("Radio Group (responsive)", () => {
    return <RadioGroup data={shortLabels} />;
  })
  .add("Radio Group (2 columns)", () => {
    return <RadioGroup data={shortLabels} columns="2" />;
  })
  .add("Radio Group (3 columns)", () => {
    return <RadioGroup data={shortLabels} columns="3" />;
  })
  .add("Radio Group (mixed columns)", () => {
    return (
      <>
        <RadioGroup data={shortLabels} columns="2" />
        <RadioGroup data={longLabels} columns="1" />
      </>
    );
  })
  .add("Radio Group (right-aligned)", () => {
    return <RadioGroup data={shortLabels} columns="2" align="right" />;
  });
