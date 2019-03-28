import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "../../_helpers/Display";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number
} from "@storybook/addon-knobs";
import Panel, { PanelBody } from "../../layout/Panel/Panel";
import Form, { Section, SectionName, InputGroup } from "../../layout/Form/Form";
import Textarea from "atoms/Textarea";

// Input ( Standard )
storiesOf("Atoms|Textarea", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Textarea ( with Knobs )", () => (
    <Textarea
      label={text("Textarea Label", "Textarea ( with Knobs )")}
      required={boolean("Required", false)}
      placeholder={text("Placeholder Text", "I am just keeping things warm")}
      helpText={text("Help Text", "Have you been helped yet?")}
      disabled={boolean("Disabled", false)}
      error={boolean("Error", false)}
      errorText={text("Error Text", "Stay with my, buddy...we can fix this!")}
    />
  ));

// Textarea ( Standard )
storiesOf("Atoms|Textarea", module)
  .addDecorator(Padding)
  .add("Textarea ( Standard )", () => (
    <Textarea
      label="Textarea ( Standard )"
      helpText="This help text has been passed through a prop!"
    />
  ));

// Textarea ( Required )
storiesOf("Atoms|Textarea", module)
  .addDecorator(Padding)
  .add("Textarea ( Required )", () => (
    <Textarea
      label="Textarea ( Required )"
      required={true}
      helpText="This help text has been passed through a prop!"
    />
  ));

// Textarea ( Disabled )
storiesOf("Atoms|Textarea", module)
  .addDecorator(Padding)
  .add("Textarea ( Disabled )", () => (
    <Textarea
      label="Textarea ( Disabled )"
      helpText="This help text has been passed through a prop!"
      disabled={true}
    />
  ));

// Textarea ( Error )
storiesOf("Atoms|Textarea", module)
  .addDecorator(Padding)
  .add("Textarea ( Error )", () => (
    <Textarea
      label="Textarea ( Error )"
      helpText="This help text has been passed through a prop!"
      error={true}
      errorText="This error text has been passed through a prop!"
    />
  ));

// Textarea ( The Textarea Family )
storiesOf("Atoms|Textarea", module).add("The Textarea Family", props => (
  <Panel>
    <PanelBody>
      <Form>
        <Section>
          <SectionName>The Textarea Family</SectionName>
          <InputGroup>
            <Textarea
              label="Textarea ( Standard )"
              helpText="This help text has been passed through a prop!"
            />
            <Textarea
              label="Textarea ( Standard )"
              required={true}
              helpText="This help text has been passed through a prop!"
            />
          </InputGroup>
          <Textarea
            label="Textarea ( Disabled )"
            helpText="This help text has been passed through a prop!"
            disabled={true}
          />
          <Textarea
            label="Textarea ( Error )"
            helpText="This help text has been passed through a prop!"
            error={true}
          />
        </Section>
      </Form>
    </PanelBody>
  </Panel>
));
