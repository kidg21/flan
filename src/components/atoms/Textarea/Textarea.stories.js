import React from "react"
import { storiesOf } from "@storybook/react"
import { Padding } from "../../_helpers/Display"
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number
} from "@storybook/addon-knobs"
import Panel, { PanelBody } from "../../layout/Panel/Panel"
import Form, { Section, SectionName, InputGroup } from "../../layout/Form/Form"
import Textarea from "atoms/Textarea"

// Input ( Standard )
storiesOf("Atoms|Textarea", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Textarea ( Knobs )", () => (
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

// Textarea ( Standard )
storiesOf("Atoms|Textarea", module)
  .addDecorator(Padding)
  .add("Textarea ( Standard )", () => (
    <Textarea
      inputLabel="Textarea ( Standard )"
      helpText="This help text has been passed through a prop!"
    />
  ))

// Textarea ( Required )
storiesOf("Atoms|Textarea", module)
  .addDecorator(Padding)
  .add("Textarea ( Required )", () => (
    <Textarea
      inputLabel="Textarea ( Required )"
      isRequired={true}
      helpText="This help text has been passed through a prop!"
    />
  ))

// Textarea ( Disabled )
storiesOf("Atoms|Textarea", module)
  .addDecorator(Padding)
  .add("Textarea ( Disabled )", () => (
    <Textarea
      inputLabel="Textarea ( Disabled )"
      helpText="This help text has been passed through a prop!"
      disabled={true}
    />
  ))

// Textarea ( Error )
storiesOf("Atoms|Textarea", module)
  .addDecorator(Padding)
  .add("Textarea ( Error )", () => (
    <Textarea
      inputLabel="Textarea ( Error )"
      helpText="This help text has been passed through a prop!"
      error={true}
      errorText="This error text has been passed through a prop!"
    />
  ))

// Textarea ( The Textarea Family )
storiesOf("Atoms|Textarea", module).add("The Textarea Family", props => (
  <Panel>
    <PanelBody>
      <Form>
        <Section>
          <SectionName>The Textarea Family</SectionName>
          <InputGroup>
            <Textarea
              inputLabel="Textarea ( Standard )"
              helpText="This help text has been passed through a prop!"
            />
            <Textarea
              inputLabel="Textarea ( Standard )"
              isRequired={true}
              helpText="This help text has been passed through a prop!"
            />
          </InputGroup>
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
    </PanelBody>
  </Panel>
))
