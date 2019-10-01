/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, radios } from "@storybook/addon-knobs";
import TextInput from "atoms/TextInput";
import Panel, { PanelSection } from "layout/Panel";
import Form, { Section } from "layout/Form";
import TextInputNotes from "./TextInput.md";

storiesOf("Atoms|Text Input", module)
  .addParameters({
    info: {
      text:
        "Text Inputs allow users to enter text into a UI. They typically appear in forms and dialogs",
    },
    notes: {
      markdown: TextInputNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <TextInput
          label="Text Input ( Standard )"
          placeholder="I am just keeping things warm"
          helpText="This help text has been passed through a prop!"
        />
      );
    }),
  )
  .add("Skeleton", () => {
    return <TextInput />;
  })
  .add(
    "Knobs",
    withInfo()(() => {
      return (
        <TextInput
          type={radios(
            "Type",
            {
              Text: "text",
              Number: "number",
              Textarea: "textarea",
            },
            "text",
          )}
          label={text("label", "Text Input Label", "Text Input")}
          isRequired={boolean("required", false, "Text Input")}
          placeholder={text("placeholder text", "I am just keeping things warm", "Text Input")}
          helpText={text("help text", "Have you been helped yet?", "Text Input")}
          error={
            boolean("error", false, "Text Input") &&
            text("error text", "Error message...", "Text Input")
          }
          disabled={boolean("disabled", false, "Text Input")}
        />
      );
    }),
  );
// Text Input ( The Text Input Family )
storiesOf("Atoms|Text Input", module).add("The Text Input Family", () => {
  return (
    <Panel>
      <PanelSection body>
        <Form title="The Text Input Family">
          <Section>
            <TextInput
              label="Text Input ( error boolean )"
              placeholder="I am just keeping things warm"
              helpText="This help text has been passed through a prop!"
              error
            />
            <TextInput
              label="Text Input ( error string )"
              placeholder="I am just keeping things warm"
              helpText="This help text has been passed through a prop!"
              error="Error Message"
            />
            <TextInput
              label="Text Input ( Standard )"
              placeholder="I am just keeping things warm"
              helpText="This help text has been passed through a prop!"
            />
            <TextInput
              type="number"
              label="Text Input ( Number )"
              helpText="This help text has been passed through a prop!"
            />
            <TextInput
              type="textarea"
              label="Text Input ( Text Area )"
              helpText="This help text has been passed through a prop!"
            />
            <TextInput
              label="Text Input ( Required )"
              placeholder="I am just keeping things warm"
              helpText="This help text has been passed through a prop!"
              isRequired
            />
            <TextInput
              label="Text Input ( Disabled )"
              placeholder="I am just keeping things warm"
              helpText="This help text has been passed through a prop!"
              disabled
            />
            <TextInput
              label="Text Input ( Error )"
              placeholder="I am just keeping things warm"
              helpText="This help text has been passed through a prop!"
              error="This error text has been passed through a prop!"
            />
          </Section>
        </Form>
      </PanelSection>
    </Panel>
  );
});
