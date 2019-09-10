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
          label={text("Text Input Label", "Text Input Label")}
          isRequired={boolean("Required", false)}
          placeholder={text("Placeholder Text", "I am just keeping things warm")}
          helpText={text("Help Text", "Have you been helped yet?")}
          errorText={text("Error Text", "")}
          disabled={boolean("Disabled", false)}
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
              errorText="This error text has been passed through a prop!"
            />
          </Section>
        </Form>
      </PanelSection>
    </Panel>
  );
});
