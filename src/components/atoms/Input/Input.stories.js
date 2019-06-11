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
import Input from "atoms/Input";
import InputNotes from "./Input.md";

storiesOf("Atoms|Input", module)
  .addParameters({
    info: {
      text:
        "Inputs allow users to enter text into a UI. They typically appear in forms and dialogs"
    },
    notes: {
      markdown: InputNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => (
      <Input
        inputLabel="Input ( Standard )"
        placeholder="I am just keeping things warm"
        helpText="This help text has been passed through a prop!"
      />
    ))
  )
  .add(
    "Knobs",
    withInfo()(() => (
      <Input
        type={radios(
          "Type",
          {
            Text: "text",
            Number: "number",
            Textarea: "textarea"
          },
          "text"
        )}
        inputLabel={text("Input Label", "Input Label")}
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
// Input ( The Input Family )
storiesOf("Atoms|Input", module).add("The Input Family", props => (
  <Panel>
    <PanelSection body>
      <Form>
        <Section>
          <SectionName>The Input Family</SectionName>
          <Input
            inputLabel="Input ( Standard )"
            placeholder="I am just keeping things warm"
            helpText="This help text has been passed through a prop!"
          />
          <Input
            type="number"
            inputLabel="Input ( Number )"
            helpText="This help text has been passed through a prop!"
          />
          <Input
            inputLabel="Input ( Required )"
            placeholder="I am just keeping things warm"
            helpText="This help text has been passed through a prop!"
            isRequired={true}
          />
          <Input
            inputLabel="Input ( Disabled )"
            placeholder="I am just keeping things warm"
            helpText="This help text has been passed through a prop!"
            state="disabled"
          />
          <Input
            inputLabel="Input ( Error )"
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
