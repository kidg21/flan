import React from "react"
import { storiesOf } from "@storybook/react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
import Panel, { PanelSection } from "../../layout/Panel/Panel"
import Form, { Section, SectionName } from "../../layout/Form/Form"
import Icon from "atoms/Icon"
import Input from "atoms/Input"
import InputNotes from "./Input.md"

// Input ( Standard )
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
        type={radios(
          "Type",
          {
            Text: "text",
            Number: "number"
          },
          "text"
        )}
        inputLabel={text("Input Label", "Input Label")}
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
        postfix={text("Postfix", "")}
        buttonLabel={text("Button Label", "")}
        twoInputs={boolean("2 Inputs", false)}
        threeInputs={boolean("3 Inputs", false)}
      />
    ))
  )
  // Text ( Standard )
  .add("Input ( Standard )", () => (
    <Input
      name="Say My Name!"
      value="Text Input"
      inputLabel="Text ( Standard )"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // Number ( Number )
  .add("Input ( Number )", () => (
    <Input
      type="number"
      inputLabel="Number ( Standard )"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // Input ( Required )
  .add("Input ( Required )", () => (
    <Input
      inputLabel="Input ( Required )"
      isRequired={true}
      helpText="This help text has been passed through a prop!"
    />
  ))
  // Input ( Disabled )
  .add("Input ( Disabled )", () => (
    <Input
      inputLabel="Input ( Disabled )"
      disabled={true}
      helpText="This help text has been passed through a prop!"
    />
  ))
  // Input ( Error )
  .add("Input ( Error )", () => (
    <Input
      inputLabel="Input ( Error )"
      helpText="This help text has been passed through a prop!"
      error={true}
      errorMessage="This error text has been passed through a prop!"
    />
  ))
  // Input ( Round )
  .add("Input ( Round )", () => (
    <Input
      inputLabel="Input ( Round )"
      helpText="This help text has been passed through a prop!"
      isRound={true}
    />
  ))
  // Input ( 2 Inputs )
  .add("Input ( 2 Inputs )", () => (
    <Input
      inputLabel="Input ( 2 Inputs )"
      twoInputs={true}
      helpText="This help text has been passed through a prop!"
    />
  ))
  // Input ( 3 Inputs )
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
  .add("Input ( Prefix Label )", () => (
    <Input
      inputLabel="Input ( Prefix )"
      prefix="http://"
      placeholder="This help text has been passed through a prop!"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // Input ( Prefix Icon )
  .add("Input ( Prefix Icon )", () => (
    <Input
      inputLabel="Input ( Prefix Icon )"
      prefix={<Icon icon={["fas", "user"]} size="lg" fixedWidth />}
      placeholder="This help text has been passed through a prop!"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // Input ( Pre-Select )
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
  .add("Input ( Postfix Label )", () => (
    <Input
      inputLabel="Input ( Postfix )"
      postfix=".com"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // Input ( Post-Select )
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
  .add("Input ( Post-Button )", () => (
    <Input
      inputLabel="Input ( Post-Button )"
      postButton={true}
      buttonLabel="Upload"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // Input ( Prefix / Postfix )
  .add("Input ( Prefix / Postfix )", () => (
    <Input
      inputLabel="Input ( Prefix / Postfix )"
      prefix="http://"
      postfix=".com"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // Input ( Prefix / Post-Select )
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
            prefix={<Icon icon={["fas", "user"]} size="lg" fixedWidth />}
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
            inputLabel="Input ( Post-Button )"
            postButton={true}
            buttonLabel="Upload"
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
