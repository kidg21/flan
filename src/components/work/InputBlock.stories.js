/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  array,
  text,
  boolean,
  object,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import Grid from "layout/Grid";
import Panel, { PanelSection } from "layout/Panel";
import Form, { Section, Label } from "layout/Form";
import Button from "atoms/Button";
import SelectMenu from "atoms/SelectMenu";
import Icon from "atoms/Icon";
import InputBlock from "blocks/InputBlock";
import InputBlockNotes from "blocks/InputBlock/InputBlock.md";

const oneInput = [
  {
    id: "ID 1",
    name: "ID 100",
    type: "text",
    placeholder: "Placeholder 1",
    pattern: "[A-Za-z]{3}",
  },
];
const twoInputs = [
  {
    id: "ID 1",
    type: "text",
    placeholder: "Placeholder 1",
  },
  {
    id: "ID 2",
    type: "text",
    placeholder: "Placeholder 2",
  },
];
const threeInputs = [
  {
    id: "ID 1",
    type: "text",
    placeholder: "Placeholder 1",
  },
  {
    id: "ID 2",
    type: "text",
    placeholder: "Placeholder 2",
  },
  {
    id: "ID 3",
    type: "text",
    placeholder: "Placeholder 3",
  },
];

const titles = [
  { value: "mr", label: "Mr." },
  { value: "mrs", label: "Mrs." },
  { value: "ms", label: "Ms." },
  { value: "sir", label: "Sir" },
  { value: "madam", label: "Madam" },
  { value: "my lord", label: "Lord" },
  { value: "bmoc", label: "BMOC" },
];

const domains = [
  { value: "com", label: ".com" },
  { value: "org", label: ".org" },
  { value: "gov", label: ".gov" },
];

// Input ( Standard )
storiesOf("Work|Blocks/Input Block", module)
  .addParameters({
    info: {
      text: "Input Block info goes here...",
    },
    notes: {
      markdown: InputBlockNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <InputBlock
          label="Input Block ( Defaults to a standard Text Input )"
          textInputs={[
            {
              id: "ID 1",
              name: "ID 100",
              type: "text",
              placeholder: "Placeholder 1",
              pattern: "[A-Za-z]{3}",
            },
          ]}
          helpText="Play with Knobs to see what this baby can do!"
        />
      );
    }),
  )
  .add("Knobs", () => {
    return (
      <InputBlock
        label={text("label", "Input Block Label", "Input Block")}
        isRequired={boolean("required", false, "Input Block")}
        prefix={
          boolean("prefix", false, "Input Block") &&
          object("label", <Label label="Prefix" />, "Input Block")
        }
        textInputs={object(
          "text inputs",
          [
            {
              id: "ID 1",
              name: "ID 100",
              type: "text",
              placeholder: "Placeholder 1",
              pattern: "[A-Za-z]{3}",
            },
          ],
          "Input Block",
        )}
        helpText={text("help text", "Have you been helped yet?", "Input Block")}
        error={
          boolean("error", false, "Input Block") &&
          text("error text", "Error message...", "Input Block")
        }
        disabled={boolean("disabled", false, "Input Block")}
        postfix={
          boolean("postfix", false, "Input Block") &&
          object(
            "select",
            <SelectMenu options={domains} selectOptions={domains[0].value} isClearable={false} />,
            "Input Block",
          )
        }
      />
    );
  })
  // Input Block ( Required )
  .add("Input Block ( Required )", () => {
    return (
      <InputBlock
        label="Input Block ( Required )"
        isRequired
        textInputs={oneInput}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Error )
  .add("Input Block ( Error )", () => {
    return (
      <InputBlock
        label="Input Block ( Error )"
        textInputs={oneInput}
        helpText="Hang in there, buddy, I'm here to help!"
        error="Don't sweat it...we can fix this!"
      />
    );
  })
  // Input Block ( Disabled )
  .add("Input Block ( Disabled )", () => {
    return (
      <InputBlock
        label="Input Block ( Disabled )"
        disabled
        textInputs={oneInput}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( 2 Inputs )
  .add("Input Block ( 2 Inputs )", () => {
    return (
      <InputBlock
        label="Input Block ( 2 Inputs )"
        textInputs={twoInputs}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( 3 Inputs )
  .add("Input Block ( 3 Inputs )", () => {
    return (
      <InputBlock
        label="Input Block ( 3 Inputs )"
        textInputs={threeInputs}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Prefix )
  .add("Input Block ( Prefix Label )", () => {
    return (
      <InputBlock
        label="Input Block ( Prefix Label )"
        prefix={<Label label="Prefix" />}
        textInputs={oneInput}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Prefix Icon )
  .add("Input Block ( Prefix Icon )", () => {
    return (
      <InputBlock
        label="Input Block ( Prefix Icon )"
        prefix={
          <Label>
            <Icon icon="user" size="lg" />
          </Label>
        }
        textInputs={oneInput}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Pre-Select )
  .add("Input Block ( Pre-Select )", () => {
    return (
      <InputBlock
        label="Input Block ( Pre-Select )"
        prefix={<SelectMenu options={titles} selectOptions={titles[0].value} isClearable={false} />}
        textInputs={oneInput}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Postfix )
  .add("Input Block ( Postfix Label )", () => {
    return (
      <InputBlock
        label="Input Block ( Postfix )"
        textInputs={oneInput}
        postfix={<Label label="Postfix" />}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Post-Select )
  .add("Input Block ( Post-Select )", () => {
    return (
      <InputBlock
        label="Input Block ( Post-Select )"
        textInputs={oneInput}
        postfix={
          <SelectMenu options={domains} selectOptions={domains[0].value} isClearable={false} />
        }
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Post-Button )
  .add("Input Block ( Post-Button )", () => {
    return (
      <InputBlock
        label="Input Block ( Post-Button )"
        textInputs={oneInput}
        postfix={<Button label="Upload" />}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  });

// Input Block ( The Input Block Family )
storiesOf("Work|Blocks/Input Block", module).add("The Input Block Block Family", () => {
  return (
    <Panel>
      <PanelSection body>
        <Form>
          <Section title="The Input Block Family">
            <InputBlock
              label="Input Block ( Required )"
              isRequired
              textInputs={oneInput}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              label="Input Block ( Error )"
              textInputs={oneInput}
              helpText="Hang in there, buddy, I'm here to help!"
              error="Don't sweat it...we can fix this!"
            />
            <InputBlock
              label="Input Block ( Disabled )"
              disabled
              textInputs={oneInput}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              label="Input Block ( 2 Inputs )"
              textInputs={twoInputs}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              label="Input Block ( 3 Inputs )"
              textInputs={threeInputs}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              label="Input Block ( Prefix Label )"
              prefix={<Label label="Prefix" />}
              textInputs={oneInput}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              label="Input Block ( Prefix Icon )"
              prefix={
                <Label>
                  <Icon icon="user" size="lg" />
                </Label>
              }
              textInputs={oneInput}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              label="Input Block ( Pre-Select )"
              prefix={
                <SelectMenu options={titles} selectOptions={titles[0].value} isClearable={false} />
              }
              textInputs={oneInput}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              label="Input Block ( Postfix Label )"
              textInputs={oneInput}
              postfix={<Label label="Postfix" />}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              label="Input Block ( Post-Select )"
              textInputs={oneInput}
              postfix={
                <SelectMenu
                  options={domains}
                  selectOptions={domains[0].value}
                  isClearable={false}
                />
              }
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              label="Input Block ( Post-Button )"
              textInputs={oneInput}
              postfix={<Button label="Upload" />}
              helpText="Hang in there, buddy, I'm here to help!"
            />
          </Section>
        </Form>
      </PanelSection>
    </Panel>
  );
});
