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
import Panel, { PanelSection } from "layout/Panel";
import Form, { Section, SectionName, InputGroup } from "layout/Form";
import Textarea from "atoms/Textarea";
import TextareaNotes from "./Textarea.md";

// Input ( Standard )
storiesOf("Atoms|Textarea", module)
  .addParameters({
    info: {
      text: "Text Area info goes here..."
    },
    notes: {
      markdown: TextareaNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => (
      <Textarea
        inputLabel={text("Textarea Label", "Textarea ( Knobs )")}
        isRequired={boolean("Required", false)}
        placeholder={text("Placeholder Text", "I am just keeping things warm")}
        helpText={text("Help Text", "Have you been helped yet?")}
        disabled={boolean("Disabled", false)}
        error={boolean("Error", false)}
        errorText={text("Error Text", "Stay with my, buddy...we can fix this!")}
      />
    ))
  )
  // Textarea ( Standard )
  .add("Textarea ( Standard )", () => (
    <Textarea
      name="Say My Name!"
      inputLabel="Textarea ( Standard )"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // Textarea ( Required )
  .add("Textarea ( Required )", () => (
    <Textarea
      inputLabel="Textarea ( Required )"
      isRequired={true}
      helpText="This help text has been passed through a prop!"
    />
  ))

  // Textarea ( Disabled )
  .add("Textarea ( Disabled )", () => (
    <Textarea
      inputLabel="Textarea ( Disabled )"
      helpText="This help text has been passed through a prop!"
      disabled={true}
    />
  ))

  // Textarea ( Error )
  .add("Textarea ( Error )", () => (
    <Textarea
      inputLabel="Textarea ( Error )"
      helpText="This help text has been passed through a prop!"
      error={true}
      errorText="This error text has been passed through a prop!"
    />
  ));

// Textarea ( The Textarea Family )
storiesOf("Atoms|Textarea", module).add("The Textarea Family", props => (
  <Panel>
    <PanelSection body>
      <Form>
        <Section>
          <SectionName>The Textarea Family</SectionName>
          <Textarea
            inputLabel="Textarea ( Standard )"
            helpText="This help text has been passed through a prop!"
          />
          <Textarea
            inputLabel="Textarea ( Required )"
            isRequired={true}
            helpText="This help text has been passed through a prop!"
          />
          <Textarea
            inputLabel="Textarea ( Disabled )"
            helpText="This help text has been passed through a prop!"
            disabled={true}
          />
          <Textarea
            inputLabel="Textarea ( Error )"
            helpText="This help text has been passed through a prop!"
            error={true}
          />
        </Section>
      </Form>
    </PanelSection>
  </Panel>
));
