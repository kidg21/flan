import React from "react"
import { storiesOf } from "@storybook/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Padding } from "helpers/Display"
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number
} from "@storybook/addon-knobs"
import Panel, { PanelSection, PanelBody } from "../../layout/Panel/Panel"
import Form, { Section, SectionName } from "../../layout/Form/Form"
import Input from "atoms/Input"

// Input ( Standard )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Input ( Knobs )", () => (
    <Input
      type={radios(
        "Type",
        {
          Text: "text",
          Number: "number"
        },
        "text"
      )}
      inputLabel={text("Input Label", "Input ( Knobs )")}
      isRequired={boolean("Required", false)}
      placeholder={text("Placeholder Text", "I am just keeping things warm")}
      helpText={text("Help Text", "Have you been helped yet?")}
      disabled={boolean("Disabled", false)}
      error={boolean("Error", false)}
      errorMessage={text(
        "Error Text",
        "Stay with my, buddy...we can fix this!"
      )}
      prefix={text("Prefix", "")}
      // preSelect={boolean("Pre-Select", false)}
      postfix={text("Postfix", "")}
      // postSelect={boolean("Post-Select", false)}
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

// Text ( Standard )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Text ( Standard )", () => (
    <Input
      name="Say My Name!"
      value="Text Input"
      inputLabel="Text ( Standard )"
      helpText="This help text has been passed through a prop!"
    />
  ))

// Number ( Standard )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Number ( Standard )", () => (
    <Input
      type="number"
      inputLabel="Number ( Standard )"
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Required )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Required )", () => (
    <Input
      inputLabel="Input ( Required )"
      isRequired={true}
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Disabled )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Disabled )", () => (
    <Input
      inputLabel="Input ( Disabled )"
      disabled={true}
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Error )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Error )", () => (
    <Input
      inputLabel="Input ( Error )"
      helpText="This help text has been passed through a prop!"
      error={true}
      errorMessage="This error text has been passed through a prop!"
    />
  ))

// Input ( 2 Inputs )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( 2 Inputs )", () => (
    <Input
      inputLabel="Input ( 2 Inputs )"
      twoInputs={true}
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( 3 Inputs )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( 3 Inputs )", () => (
    <Input
      inputLabel="Input ( 3 Inputs )"
      threeInputs={true}
      placeholder_2="Two!!"
      placeholder_3="Three!!!"
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Prefix )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Prefix Label )", () => (
    <Input
      inputLabel="Input ( Prefix )"
      prefix="http://"
      placeholder="This help text has been passed through a prop!"
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Prefix Icon )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Prefix Icon )", () => (
    <Input
      inputLabel="Input ( Prefix Icon )"
      prefix={<FontAwesomeIcon icon={["fas", "user"]} size="lg" fixedWidth />}
      placeholder="This help text has been passed through a prop!"
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Pre-Select )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Pre-Select )", () => (
    <Input
      inputLabel="Input ( Pre-Select )"
      preSelect={[
        { value: "sir", label: "Sir" },
        { value: "madam", label: "Madam" },
        { value: "my lord", label: "My Lord" }
      ]}
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Postfix )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Postfix Label )", () => (
    <Input
      inputLabel="Input ( Postfix )"
      postfix=".com"
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Post-Select )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Post-Select )", () => (
    <Input
      inputLabel="Input ( Post-Select )"
      postSelect={[
        { value: "com", label: ".com" },
        { value: "org", label: ".org" },
        { value: "gov", label: ".gov" }
      ]}
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Post-Button )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Post-Button )", () => (
    <Input
      inputLabel="Input ( Post-Button )"
      postButton={true}
      buttonLabel="Upload"
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Prefix / Postfix )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Prefix / Postfix )", () => (
    <Input
      inputLabel="Input ( Prefix / Postfix )"
      prefix="http://"
      postfix=".com"
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Prefix / Post-Select )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Prefix / Post-Select )", () => (
    <Input
      inputLabel="Input ( Prefix / Post-Select )"
      prefix="http://"
      postSelect={[
        { value: "com", label: ".com" },
        { value: "org", label: ".org" },
        { value: "gov", label: ".gov" }
      ]}
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Pre-Select / Postfix )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Pre-Select / Postfix )", () => (
    <Input
      inputLabel="Input ( Pre-Select / Postfix )"
      preSelect={[
        { value: "sir", label: "Sir" },
        { value: "madam", label: "Madam" },
        { value: "my lord", label: "My Lord" }
      ]}
      postfix=".com"
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( Pre / Post-Select )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Pre / Post-Select )", () => (
    <Input
      inputLabel="Input ( Pre / Post-Select )"
      preSelect={[
        { value: "sir", label: "Sir" },
        { value: "madam", label: "Madam" },
        { value: "my lord", label: "My Lord" }
      ]}
      postSelect={[
        { value: "com", label: ".com" },
        { value: "org", label: ".org" },
        { value: "gov", label: ".gov" }
      ]}
      helpText="This help text has been passed through a prop!"
    />
  ))

// Input ( The Input Family )
storiesOf("Atoms|Input", module).add("The Input Family", props => (
  <Panel>
    <PanelSection body>
      <Form>
        <Section>
          <SectionName>The Input Family</SectionName>
          <Input
            inputLabel="Input ( Standard )"
            helpText="This help text has been passed through a prop!"
          />
          <Input
            inputLabel="Input ( Required )"
            isRequired={true}
            helpText="This help text has been passed through a prop!"
          />
          <Input
            inputLabel="Input ( Disabled )"
            disabled={true}
            helpText="This help text has been passed through a prop!"
          />
          <Input
            inputLabel="Input ( Error )"
            helpText="This help text has been passed through a prop!"
            error={true}
            errorMessage="This error text has been passed through a prop!"
          />
          <Input
            inputLabel="Input ( 2 Inputs )"
            twoInputs={true}
            helpText="This help text has been passed through a prop!"
          />
          <Input
            inputLabel="Input ( 3 Inputs )"
            threeInputs={true}
            helpText="This help text has been passed through a prop!"
            placeholder_2="Two!!"
            placeholder_3="Three!!!"
          />
          <Input
            inputLabel="Input ( Prefix Label )"
            prefix="http://"
            placeholder="This help text has been passed through a prop!"
            helpText="This help text has been passed through a prop!"
          />
          <Input
            inputLabel="Input ( Prefix Icon )"
            prefix={
              <FontAwesomeIcon icon={["fas", "user"]} size="lg" fixedWidth />
            }
            placeholder="This help text has been passed through a prop!"
            helpText="This help text has been passed through a prop!"
          />
          <Input
            inputLabel="Input ( Pre-Select )"
            preSelect={[
              { value: "sir", label: "Sir" },
              { value: "madam", label: "Madam" },
              { value: "my lord", label: "My Lord" }
            ]}
            helpText="This help text has been passed through a prop!"
          />
          <Input
            inputLabel="Input ( Postfix Label )"
            postfix=".com"
            helpText="This help text has been passed through a prop!"
          />
          <Input
            inputLabel="Input ( Post-Select )"
            postSelect={[
              { value: "com", label: ".com" },
              { value: "org", label: ".org" },
              { value: "gov", label: ".gov" }
            ]}
            helpText="This help text has been passed through a prop!"
          />
          <Input
            inputLabel="Input ( Prefix / Postfix )"
            prefix="http://"
            postfix=".com"
            helpText="This help text has been passed through a prop!"
          />
          <Input
            inputLabel="Input ( Prefix / Post-Select )"
            prefix="http://"
            postSelect={[
              { value: "com", label: ".com" },
              { value: "org", label: ".org" },
              { value: "gov", label: ".gov" }
            ]}
            helpText="This help text has been passed through a prop!"
          />
          <Input
            inputLabel="Input ( Pre-Select / Postfix )"
            preSelect={[
              { value: "sir", label: "Sir" },
              { value: "madam", label: "Madam" },
              { value: "my lord", label: "My Lord" }
            ]}
            postfix=".com"
            helpText="This help text has been passed through a prop!"
          />
          <Input
            inputLabel="Input ( Pre / Post-Select )"
            preSelect={[
              { value: "sir", label: "Sir" },
              { value: "madam", label: "Madam" },
              { value: "my lord", label: "My Lord" }
            ]}
            postSelect={[
              { value: "com", label: ".com" },
              { value: "org", label: ".org" },
              { value: "gov", label: ".gov" }
            ]}
            helpText="This help text has been passed through a prop!"
          />
        </Section>
      </Form>
    </PanelSection>
  </Panel>
))
