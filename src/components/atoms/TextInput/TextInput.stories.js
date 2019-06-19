import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number
} from "@storybook/addon-knobs";
import Panel, { PanelSection } from "../../layout/Panel/Panel";
import Form, { Section, SectionName } from "../../layout/Form/Form";
import TextInput from "atoms/TextInput";
import TextInputNotes from "./TextInput.md";

storiesOf("Atoms|TextInput", module)
  .addParameters({
    info: {
      text:
        "TextInputs allow users to enter text into a UI. They typically appear in forms and dialogs"
    },
    notes: {
      markdown: TextInputNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => (
      <TextInput
        inputLabel="TextInput ( Standard )"
        placeholder="I am just keeping things warm"
        helpText="This help text has been passed through a prop!"
      />
    ))
  )
  .add(
    "Knobs",
    withInfo()(() => (
      <TextInput
        type={radios(
          "Type",
          {
            Text: "text",
            Number: "number",
            Textarea: "textarea"
          },
          "text"
        )}
        inputLabel={text("TextInput Label", "TextInput Label")}
        isRequired={boolean("Required", false)}
        placeholder={text("Placeholder Text", "I am just keeping things warm")}
        helpText={text("Help Text", "Have you been helped yet?")}
        errorMessage={text(
          "Error Text",
          "Stay with my, buddy...we can fix this!"
        )}
        state={radios(
          "State",
          {
            Standard: "default",
            Error: "error",
            Disabled: "disabled"
          },
          "default"
        )}
      />
    ))
  );
// TextInput ( The TextInput Family )
storiesOf("Atoms|TextInput", module).add("The TextInput Family", props => (
  <Panel>
    <PanelSection body>
      <Form>
        <Section>
          <SectionName>The TextInput Family</SectionName>
          <TextInput
            inputLabel="TextInput ( Standard )"
            placeholder="I am just keeping things warm"
            helpText="This help text has been passed through a prop!"
          />
          <TextInput
            type="number"
            inputLabel="TextInput ( Number )"
            helpText="This help text has been passed through a prop!"
          />
          <TextInput
            inputLabel="TextInput ( Required )"
            placeholder="I am just keeping things warm"
            helpText="This help text has been passed through a prop!"
            isRequired={true}
          />
          <TextInput
            inputLabel="TextInput ( Disabled )"
            placeholder="I am just keeping things warm"
            helpText="This help text has been passed through a prop!"
            state="disabled"
          />
          <TextInput
            inputLabel="TextInput ( Error )"
            placeholder="I am just keeping things warm"
            helpText="This help text has been passed through a prop!"
            errorMessage="This error text has been passed through a prop!"
            state="error"
          />
        </Section>
      </Form>
    </PanelSection>
  </Panel>
));