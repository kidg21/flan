/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import Panel, { PanelSection } from "layout/Panel";
import Form, { Section } from "layout/Form";
import TextInput from "atoms/TextInput";
import { CheckboxGroup } from "atoms/Checkbox";
import { RadioGroup } from "atoms/Radio";
import SelectMenu from "atoms/SelectMenu";

const shortBoxes = [
  {
    id: "box-1",
    label: "Label 1",
  },
  {
    id: "box-2",
    label: "Label 2 (disabled)",
    disabled: true,
  },
  {
    id: "box-3",
    label: "Label 3",
  },
  {
    id: "box-4",
    label: "Label 4",
  },
];
const longBoxes = [
  {
    id: "box_long",
    label:
      "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself.",
  },
  {
    id: "box_long2",
    label:
      "Enough with these long labels already...put it on your blog, Shakespeare.",
  },
];
const shortRadios = [
  {
    id: "radio-1",
    name: "radio-group",
    value: "1",
    label: "Label 1",
  },
  {
    id: "radio-2",
    name: "radio-group",
    value: "2",
    label: "Label 2 (disabled)",
    disabled: true,
  },
  {
    id: "radio-3",
    name: "radio-group",
    value: "3",
    label: "Label 3",
  },
  {
    id: "radio-4",
    name: "radio-group",
    value: "4",
    label: "Label 4",
  },
];
const longRadios = [
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
    label:
      "Enough with these long labels already...put it on your blog, Shakespeare.",
  },
];
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "pistachio", label: "Pistachio" },
  { value: "mint chocolate chip", label: "Mint Chocolate Chip" },
  { value: "cookie dough", label: "Cookie Dough" },
];

storiesOf("Layout|Form", module).add("Form Layout", () => {
  return (
    <Panel>
      <PanelSection body>
        <Form
          title="Form Header"
          subtitle="This is the subtitle"
          description="Just think about these things in your mind - then bring them into your world. Isn't that fantastic?  All you need to paint is a few tools, a little instruction, and a vision in your mind."
        >
          <Section title="Group 1">
            <TextInput
              label="First Name"
              placeholder="John"
              helpText="The one that your parents gave you"
            />
            <TextInput
              label="Last Name"
              placeholder="Williams"
              helpText="The one that comes after.."
            />
          </Section>
          <Section title="Group 2">
            <CheckboxGroup
              id="Section Name"
              label="Checkbox Group Label"
              data={shortBoxes}
              helpText="Hang in there, buddy, I'm here to help!"
              columns="2"
            />
            <CheckboxGroup data={longBoxes} columns="1" />
            <SelectMenu
              multiSelect
              label="Multi-Select"
              placeholder="Choose One Or More..."
              helpText="Help text for the SelectMenu component"
              options={options}
            />
          </Section>
          <Section title="Group 3">
            <RadioGroup
              id="Section Name"
              label="Radio Group Label"
              data={shortRadios}
              helpText="Hang in there, buddy, I'm here to help!"
              columns="2"
            />
            <RadioGroup data={longRadios} columns="1" />
          </Section>
        </Form>
      </PanelSection>
    </Panel>
  );
});
