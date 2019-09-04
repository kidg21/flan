/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  radios,
} from "@storybook/addon-knobs";
import TextInput from "atoms/TextInput";
import Panel, { PanelSection } from "layout/Panel";
import Form, { Section, SectionName } from "layout/Form";
import TextInputNotes from "./TextInput.md";

storiesOf("Atoms|TextInput", module)
  .addParameters({
    info: {
      text:
        "TextInputs allow users to enter text into a UI. They typically appear in forms and dialogs",
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
          label="TextInput ( Standard )"
          placeholder="I am just keeping things warm"
          helpText="This help text has been passed through a prop!"
        />
      );
    }),
  )
  .add("Skeleton", () => { return <TextInput />; })
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
          label={text("TextInput Label", "TextInput Label")}
          isRequired={boolean("Required", false)}
          placeholder={text("Placeholder Text", "I am just keeping things warm")}
          helpText={text("Help Text", "Have you been helped yet?")}
          errorText={text(
            "Error Text",
            "",
          )}
          disabled={boolean("Disabled", false)}
        />
      );
    }),
  );
// TextInput ( The TextInput Family )
storiesOf("Atoms|TextInput", module).add("The TextInput Family", () => {
  return (
    <Panel>
      <PanelSection body>
        <Form>
          <Section>
            <SectionName>The TextInput Family</SectionName>
            <TextInput
              label="TextInput ( Standard )"
              placeholder="I am just keeping things warm"
              helpText="This help text has been passed through a prop!"
            />
            <TextInput
              type="number"
              label="TextInput ( Number )"
              helpText="This help text has been passed through a prop!"
            />
            <TextInput
              type="textarea"
              label="TextInput ( Text Area )"
              helpText="This help text has been passed through a prop!"
            />
            <TextInput
              label="TextInput ( Required )"
              placeholder="I am just keeping things warm"
              helpText="This help text has been passed through a prop!"
              isRequired
            />
            <TextInput
              label="TextInput ( Disabled )"
              placeholder="I am just keeping things warm"
              helpText="This help text has been passed through a prop!"
              disabled
            />
            <TextInput
              label="TextInput ( Error )"
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
