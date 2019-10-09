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
import Panel, { PanelSection } from "layout/Panel";
import Form, { Section } from "layout/Form";
import InputBlock from "blocks/InputBlock";
import InputBlockNotes from "blocks/InputBlock/InputBlock.md";

const inputsOne = [
  {
    id: "ID 1",
    name: "ID 100",
    type: "text",
    placeholder: "Placeholder 1",
    pattern: "[A-Za-z]{3}",
  },
];
const inputsTwo = [
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
const inputsThree = [
  {
    id: "ID 1",
    // type: "text",
    type: "date",
    placeholder: "Placeholder 1",
  },
  {
    id: "ID 2",
    // type: "text",
    type: "search",
    placeholder: "Placeholder 2",
  },
  {
    id: "ID 3",
    // type: "text",
    type: "password",
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
        id="input block"
        type={options(
          "type",
          {
            "Standard": null,
            "2 Inputs": "inputs_2",
            "3 Inputs": "inputs_3",
            "Pre-Label": "pre_label",
            "Pre-Select": "pre_select",
            "Pre-Icon": "pre_icon",
            "Post-Label": "post_label",
            "Post-Select": "post_select",
            "Post-Button": "post_button",
          },
          null,
          { display: "select" },
          "Input Block",
        )}
        label={text("input label", "Input Block Label", "Input Block")}
        isRequired={boolean("required", false, "Input Block")}
        helpText={text("help text", "Have you been helped yet?", "Input Block")}
        error={
          boolean("error", false, "Input Block") &&
          text("error text", "Error message...", "Input Block")
        }
        disabled={boolean("disabled", false, "Input Block")}
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
            {
              id: "ID 2",
              name: "ID 200",
              type: "text",
              placeholder: "Placeholder 2",
              pattern: "[A-Za-z]{3}",
            },
            {
              id: "ID 3",
              name: "ID 300",
              type: "text",
              placeholder: "Placeholder 3",
              pattern: "[A-Za-z]{3}",
            },
          ],
          "Inputs",
        )}
        prefix={text("pre-label", "prefix", "Labels")}
        postfix={text("post-label", "postfix", "Labels")}
        icon={options(
          "pre-icon",
          {
            user_circle: "user_circle",
            down: "down",
            bookmark: "bookmark_solid",
            plus: "plus",
            print: "print",
          },
          "user_circle",
          { display: "select" },
          "Icon",
        )}
        button={text("button label", "Button", "Button")}
        options={titles}
        selectOptions={titles[0].value}
      />
    );
  })
  // Input Block ( Required )
  .add("Input Block ( Required )", () => {
    return (
      <InputBlock
        label="Input Block ( Required )"
        isRequired
        textInputs={inputsOne}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // // Input Block ( Error )
  .add("Input Block ( Error )", () => {
    return (
      <InputBlock
        label="Input Block ( Error )"
        textInputs={inputsOne}
        helpText="Hang in there, buddy, I'm here to help!"
        error="Don't sweat it...we can fix this!"
      />
    );
  })
  // // Input Block ( Disabled )
  .add("Input Block ( Disabled )", () => {
    return (
      <InputBlock
        label="Input Block ( Disabled )"
        disabled
        textInputs={inputsOne}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // // Input Block ( 2 Inputs )
  .add("Input Block ( 2 Inputs )", () => {
    return (
      <InputBlock
        type="inputs_2"
        label="Input Block ( 2 Inputs )"
        textInputs={inputsTwo}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // // Input Block ( 3 Inputs )
  .add("Input Block ( 3 Inputs )", () => {
    return (
      <InputBlock
        type="inputs_3"
        label="Input Block ( 3 Inputs )"
        textInputs={inputsThree}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // // Input Block ( Pre-Label )
  .add("Input Block ( Prefix Label )", () => {
    return (
      <InputBlock
        type="pre_label"
        label="Input Block ( Pre-Label )"
        prefix="Prefix"
        textInputs={inputsOne}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // // Input Block ( Pre-Icon )
  .add("Input Block ( Prefix Icon )", () => {
    return (
      <InputBlock
        type="pre_icon"
        label="Input Block ( Pre-Icon )"
        icon="user"
        textInputs={inputsOne}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // // Input Block ( Pre-Select )
  .add("Input Block ( Pre-Select )", () => {
    return (
      <InputBlock
        type="pre_select"
        label="Input Block ( Pre-Select )"
        options={titles}
        selectOptions={titles[0].value}
        textInputs={inputsOne}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // // Input Block ( Postfix )
  .add("Input Block ( Post-Label )", () => {
    return (
      <InputBlock
        type="post_label"
        label="Input Block ( Post-Label )"
        textInputs={inputsOne}
        postfix="Postfix"
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // // Input Block ( Post-Select )
  .add("Input Block ( Post-Select )", () => {
    return (
      <InputBlock
        type="post_select"
        label="Input Block ( Post-Select )"
        textInputs={inputsOne}
        options={domains}
        selectOptions={domains[0].value}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // // Input Block ( Post-Button )
  .add("Input Block ( Post-Button )", () => {
    return (
      <InputBlock
        type="post_button"
        label="Input Block ( Post-Button )"
        textInputs={inputsOne}
        button="Upload"
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  });

// Input Block ( The Input Block Family )
storiesOf("Work|Blocks/Input Block", module).add("The Input Block Block Family", () => {
  return (
    <Panel>
      <PanelSection body>
        <Form title="The Input Block Family">
          <Section>
            <InputBlock
              label="Input Block ( standard )"
              textInputs={inputsOne}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              label="Input Block ( required )"
              isRequired
              textInputs={inputsOne}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              label="Input Block ( error )"
              textInputs={inputsOne}
              helpText="Hang in there, buddy, I'm here to help!"
              error="Don't sweat it...we can fix this!"
            />
            <InputBlock
              label="Input Block ( disabled )"
              textInputs={inputsOne}
              helpText="Hang in there, buddy, I'm here to help!"
              disabled
            />
            <InputBlock
              type="inputs_2"
              label="Input Block ( 2 inputs )"
              textInputs={inputsTwo}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              type="inputs_3"
              label="Input Block ( 3 inputs )"
              textInputs={inputsThree}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              type="pre_label"
              label="Input Block ( pre-label )"
              prefix="prefix"
              textInputs={inputsOne}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              type="post_label"
              label="Input Block ( post-label )"
              postfix="postfix"
              textInputs={inputsOne}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              type="pre_select"
              label="Input Block ( pre-select )"
              options={titles}
              selectOptions={titles[0].value}
              textInputs={inputsOne}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              type="post_select"
              label="Input Block ( post-select )"
              options={domains}
              selectOptions={domains[0].value}
              textInputs={inputsOne}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              type="pre_icon"
              label="Input Block ( pre-icon )"
              icon="user"
              textInputs={inputsOne}
              helpText="Hang in there, buddy, I'm here to help!"
            />
            <InputBlock
              type="post_button"
              label="Input Block ( post-button )"
              button="upload"
              textInputs={inputsOne}
              helpText="Hang in there, buddy, I'm here to help!"
            />
          </Section>
        </Form>
      </PanelSection>
    </Panel>
  );
});
