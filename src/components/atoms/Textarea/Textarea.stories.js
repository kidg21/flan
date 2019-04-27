import React from "react"
import { storiesOf } from "@storybook/react"
import { Padding } from "helpers/Display"
import { withInfo } from "@storybook/addon-info"
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number
} from "@storybook/addon-knobs"
import Panel, { PanelBody } from "layout/Panel"
import Form, { Section, SectionName, InputGroup } from "layout/Form"
import TextArea from "atoms/TextArea"

// Input ( Standard )
storiesOf("Atoms|TextArea", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add("TextArea ( Knobs )", () => (
    <Textarea
      inputLabel={text("TextArea Label", "TextArea ( Knobs )")}
      isRequired={boolean("Required", false)}
      placeholder={text("Placeholder Text", "I am just keeping things warm")}
      helpText={text("Help Text", "Have you been helped yet?")}
      disabled={boolean("Disabled", false)}
      error={boolean("Error", false)}
      errorText={text("Error Text", "Stay with my, buddy...we can fix this!")}
    />
  ))

// TextArea ( Standard )
storiesOf("Atoms|TextArea", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add("TextArea ( Standard )", () => (
    <Textarea
      name="Say My Name!"
      inputLabel="TextArea ( Standard )"
      helpText="This help text has been passed through a prop!"
    />
  ))

// TextArea ( Required )
storiesOf("Atoms|TextArea", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add("TextArea ( Required )", () => (
    <Textarea
      inputLabel="TextArea ( Required )"
      isRequired={true}
      helpText="This help text has been passed through a prop!"
    />
  ))

// TextArea ( Disabled )
storiesOf("Atoms|TextArea", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add("TextArea ( Disabled )", () => (
    <Textarea
      inputLabel="TextArea ( Disabled )"
      helpText="This help text has been passed through a prop!"
      disabled={true}
    />
  ))

// TextArea ( Error )
storiesOf("Atoms|TextArea", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add("TextArea ( Error )", () => (
    <Textarea
      inputLabel="TextArea ( Error )"
      helpText="This help text has been passed through a prop!"
      error={true}
      errorText="This error text has been passed through a prop!"
    />
  ))

// TextArea ( The TextArea Family )
storiesOf("Atoms|TextArea", module).add("The TextArea Family", props => (
  <Panel>
    <PanelBody>
      <Form>
        <Section>
          <SectionName>The TextArea Family</SectionName>
          <Textarea
            inputLabel="TextArea ( Standard )"
            helpText="This help text has been passed through a prop!"
          />
          <Textarea
            inputLabel="TextArea ( Standard )"
            isRequired={true}
            helpText="This help text has been passed through a prop!"
          />
          <Textarea
            inputLabel="TextArea ( Disabled )"
            helpText="This help text has been passed through a prop!"
            disabled={true}
          />
          <Textarea
            inputLabel="TextArea ( Error )"
            helpText="This help text has been passed through a prop!"
            error={true}
          />
        </Section>
      </Form>
    </PanelBody>
  </Panel>
))
