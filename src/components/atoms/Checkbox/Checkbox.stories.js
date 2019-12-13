/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import { Padding } from "helpers/Display";
import Form, { Section } from "layout/Form";
import Checkbox, { CheckboxGroup } from "atoms/Checkbox";

const CheckboxNotes = markdown.require("./Checkbox.md");
const CheckboxGroupNotes = markdown.require("./CheckboxGroup.md");

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
    label:
      "Enough with these long labels already...put it on your blog, Shakespeare.",
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
        <Checkbox id="warning" label="Warning" warning />
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
        <Form>
          <Section>
            <CheckboxGroup
              id="group1"
              label="Checkbox Group Label"
              data={shortLabels}
              helpText="Hang in there, buddy, I'm here to help!"
            />
          </Section>
        </Form>
      );
    }),
  )
  .add("Knobs", () => {
    return (
      <Form>
        <Section title="Knobs">
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
            helpText={text(
              "Help Text",
              "Have you been helped yet?",
              "Checkbox Group",
            )}
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
            error={
              boolean("error", false, "Checkbox Group") &&
              text("error text", "Error message...", "Checkbox Group")
            }
            disabled={boolean("disabled", false, "Checkbox Group")}
          />
        </Section>
      </Form>
    );
  })
  .add("Checkbox Group (responsive)", () => {
    return (
      <Form>
        <Section title="Checkbox Group (responsive)">
          <CheckboxGroup data={shortLabels} />
        </Section>
      </Form>
    );
  })
  .add("Checkbox Group (2 columns)", () => {
    return (
      <Form>
        <Section title="Checkbox Group (2 columns)">
          <CheckboxGroup data={shortLabels} columns="2" />
        </Section>
      </Form>
    );
  })
  .add("Checkbox Group (3 columns)", () => {
    return (
      <Form>
        <Section title="Checkbox Group (3 columns)">
          <CheckboxGroup data={shortLabels} columns="3" />
        </Section>
      </Form>
    );
  })
  .add("Checkbox Group (mixed columns)", () => {
    return (
      <Form>
        <Section title="Checkbox Group (mixed columns)">
          <CheckboxGroup data={shortLabels} columns="2" />
          <CheckboxGroup data={longLabels} columns="1" />
        </Section>
      </Form>
    );
  })
  .add("Checkbox Group (right-aligned)", () => {
    return (
      <Form>
        <Section title="Checkbox Group (right-aligned)">
          <CheckboxGroup data={shortLabels} columns="2" align="right" />
        </Section>
      </Form>
    );
  });
