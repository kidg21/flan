import React from "react"
import { storiesOf } from "@storybook/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
import Form, { Section, SectionName } from "../../layout/Form/Form"
import Input from "atoms/Input"

// Input ( Standard )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Input ( Knobs )", () => (
    <Input
      label={text("Input Label", "Input ( Knobs )")}
      required={boolean("Required", false)}
      placeholder={text("Placeholder Text", "I am just keeping things warm")}
      helpText={text("Help Text", "Have you been helped yet?")}
      disabled={boolean("Disabled", false)}
      error={boolean("Error", false)}
      errorMessage={text(
        "Error Text",
        "Stay with my, buddy...we can fix this!"
      )}
      prefix={text("Prefix", "")}
      preSelect={boolean("Pre-Select", false)}
      postfix={text("Postfix", "")}
      postSelect={boolean("Post-Select", false)}
      twoInputs={boolean("2 Inputs", false)}
      threeInputs={boolean("3 Inputs", false)}
      // disabled={radios(
      //   "Disabled",
      //   {
      //     yes: "true",
      //     no: ""
      //   },
      //   ""
      // )}
    />
  ))

// Input ( Standard )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Standard )", () => (
    <Input
      label="Input ( Standard )"
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Required )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Required )", () => (
    <Input
      label="Input ( Required )"
      required={true}
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Disabled )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Disabled )", () => (
    <Input
      label="Input ( Disabled )"
      helpText="This help text has been passed through a prop!"
      disabled={true}
    />
  ))

// Input ( Error )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Error )", () => (
    <Input
      label="Input ( Error )"
      helpText="This help text has been passed through a prop!"
      error={true}
      errorMessage="This error text has been passed through a prop!"
    />
  ))

// Input ( Prefix )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Prefix Label )", () => (
    <Input
      label="Input ( Prefix )"
      prefix="http://"
      helpText="This help text has been passed through a prop!"
      placeholder="This help text has been passed through a prop!"
    />
  ))

// Input ( Prefix Icon )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Prefix Icon )", () => (
    <Input
      label="Input ( Prefix Icon )"
      prefix={<FontAwesomeIcon icon={["fas", "user"]} size="lg" fixedWidth />}
      helpText="This help text has been passed through a prop!"
      placeholder="This help text has been passed through a prop!"
    />
  ))

// Input ( Pre-Select )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Pre-Select )", () => (
    <Input
      label="Input ( Pre-Select )"
      helpText="This help text has been passed through a prop!"
      preSelect={true}
    />
  ))

// Input ( Postfix )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Postfix Label )", () => (
    <Input
      label="Input ( Postfix )"
      postfix=".com"
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Post-Select )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Post-Select )", () => (
    <Input
      postSelect={true}
      label="Input ( Post-Select )"
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( 2 Inputs )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( 2 Inputs )", () => (
    <Input
      label="Input ( 2 Inputs )"
      twoInputs={true}
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( 3 Inputs )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( 3 Inputs )", () => (
    <Input
      label="Input ( 3 Inputs )"
      threeInputs={true}
      placeholder_2="Two!!"
      placeholder_3="Three!!!"
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( The Input Family )
storiesOf("Atoms|Input", module).add("The Input Family", props => (
  <Panel>
    <PanelBody>
      <Form>
        <Section>
          <SectionName>The Input Family</SectionName>
          <Input
            label="Input ( Standard )"
            helpText="This help text has been passed through a prop!"
          />
          <Input
            label="Input ( Required )"
            required={true}
            helpText="This help text has been passed through a prop!"
          />
          <Input
            label="Input ( Disabled )"
            disabled={true}
            helpText="This help text has been passed through a prop!"
          />
          <Input
            label="Input ( Error )"
            required={true}
            error={true}
            errorMessage="This error text has been passed through a prop!"
            helpText="This help text has been passed through a prop!"
          />
          <Input
            label="Input ( Prefix Label )"
            prefix="http://"
            helpText="This help text has been passed through a prop!"
            placeholder="This help text has been passed through a prop!"
          />
          <Input
            label="Input ( Prefix Icon )"
            prefix={
              <FontAwesomeIcon icon={["fas", "user"]} size="lg" fixedWidth />
            }
            helpText="This help text has been passed through a prop!"
            placeholder="This help text has been passed through a prop!"
          />
          <Input
            preSelect={true}
            label="Input ( Pre-Select )"
            helpText="This help text has been passed through a prop!"
          />
          <Input
            label="Input ( Postfix Label )"
            postfix=".com"
            helpText="This help text has been passed through a prop!"
          />
          <Input
            postSelect={true}
            label="Input ( Post-Select )"
            helpText="This help text has been passed through a prop!"
          />
          <Input
            label="Input ( 2 Inputs )"
            twoInputs={true}
            helpText="This help text has been passed through a prop!"
          />
          <Input
            label="Input ( 3 Inputs )"
            helpText="This help text has been passed through a prop!"
            threeInputs={true}
            placeholder_2="Two!!"
            placeholder_3="Three!!!"
          />
        </Section>
      </Form>
    </PanelBody>
  </Panel>
))
