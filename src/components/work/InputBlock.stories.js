import React from "react";
import { storiesOf } from "@storybook/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
} from "@storybook/addon-knobs";
import Panel, { PanelSection } from "layout/Panel";
import Form, { Section, SectionName } from "layout/Form";
import Icon from "atoms/Icon";
import InputBlock from "blocks/InputBlock";
import InputBlockNotes from "blocks/InputBlock/InputBlock.md";

// Input ( Standard )
storiesOf("Work|Blocks/InputBlock", module)
  .addParameters({
    info: {
      text:
        "Input Blocks allow users to enter text into a UI. They typically appear in forms and dialogs",
    },
    notes: {
      markdown: InputBlockNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => (
      <InputBlock
        type={radios(
          "Type",
          {
            Text: "text",
            Number: "number",
          },
          "text",
        )}
        inputLabel={text("Input Label", "Input Label")}
        isRequired={boolean("Required", false)}
        placeholder={text("Placeholder Text", "I am just keeping things warm")}
        helpText={text("Help Text", "Have you been helped yet?")}
        disabled={boolean("Disabled", false)}
        error={boolean("Error", false)}
        errorMessage={text(
          "Error Text",
          "Stay with my, buddy...we can fix this!",
        )}
        prefix={text("Prefix", "")}
        postfix={text("Postfix", "")}
        buttonLabel={text("Button Label", "")}
        twoInputs={boolean("2 Inputs", false)}
        threeInputs={boolean("3 Inputs", false)}
      />
    )),
  )
  // Text ( Standard )
  .add("InputBlock ( Standard )", () => (
    <InputBlock
      name="Say My Name!"
      value="Text Input"
      inputLabel="Text ( Standard )"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // Number ( Number )
  .add("InputBlock ( Number )", () => (
    <InputBlock
      type="number"
      inputLabel="Number ( Standard )"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // InputBlock ( Required )
  .add("InputBlock ( Required )", () => (
    <InputBlock
      inputLabel="Input ( Required )"
      isRequired={true}
      helpText="This help text has been passed through a prop!"
    />
  ))
  // InputBlock ( Disabled )
  .add("InputBlock ( Disabled )", () => (
    <InputBlock
      inputLabel="Input ( Disabled )"
      disabled={true}
      helpText="This help text has been passed through a prop!"
    />
  ))
  // InputBlock ( Error )
  .add("InputBlock ( Error )", () => (
    <InputBlock
      inputLabel="Input ( Error )"
      helpText="This help text has been passed through a prop!"
      error={true}
      errorMessage="This error text has been passed through a prop!"
    />
  ))
  // InputBlock ( Round )
  .add("InputBlock ( Round )", () => (
    <InputBlock
      inputLabel="Input ( Round )"
      helpText="This help text has been passed through a prop!"
      isRound={true}
    />
  ))
  // InputBlock ( 2 Inputs )
  .add("InputBlock ( 2 Inputs )", () => (
    <InputBlock
      inputLabel="Input ( 2 Inputs )"
      twoInputs={true}
      helpText="This help text has been passed through a prop!"
    />
  ))
  // InputBlock ( 3 Inputs )
  .add("InputBlock ( 3 Inputs )", () => (
    <InputBlock
      inputLabel="Input ( 3 Inputs )"
      threeInputs={true}
      placeholder_2="Two!!"
      placeholder_3="Three!!!"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // InputBlock ( Prefix )
  .add("InputBlock ( Prefix Label )", () => (
    <InputBlock
      inputLabel="Input ( Prefix )"
      prefix="http://"
      placeholder="This help text has been passed through a prop!"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // InputBlock ( Prefix Icon )
  .add("InputBlock ( Prefix Icon )", () => (
    <InputBlock
      inputLabel="Input ( Prefix Icon )"
      prefix={<Icon icon="user" size="lg" fixedWidth />}
      placeholder="This help text has been passed through a prop!"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // InputBlock ( Pre-Select )
  .add("InputBlock ( Pre-Select )", () => (
    <InputBlock
      inputLabel="Input ( Pre-Select )"
      preSelect={[
        { value: "sir", label: "Sir" },
        { value: "madam", label: "Madam" },
        { value: "my lord", label: "My Lord" },
      ]}
      helpText="This help text has been passed through a prop!"
    />
  ))
  // InputBlock ( Postfix )
  .add("InputBlock ( Postfix Label )", () => (
    <InputBlock
      inputLabel="Input ( Postfix )"
      postfix=".com"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // InputBlock ( Post-Select )
  .add("InputBlock ( Post-Select )", () => (
    <InputBlock
      inputLabel="Input ( Post-Select )"
      postSelect={[
        { value: "com", label: ".com" },
        { value: "org", label: ".org" },
        { value: "gov", label: ".gov" },
      ]}
      helpText="This help text has been passed through a prop!"
    />
  ))
  // InputBlock ( Post-Button )
  .add("InputBlock ( Post-Button )", () => (
    <InputBlock
      inputLabel="Input ( Post-Button )"
      postButton={true}
      buttonLabel="Upload"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // InputBlock ( Prefix / Postfix )
  .add("InputBlock ( Prefix / Postfix )", () => (
    <InputBlock
      inputLabel="Input ( Prefix / Postfix )"
      prefix="http://"
      postfix=".com"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // InputBlock ( Prefix / Post-Select )
  .add("InputBlock ( Prefix / Post-Select )", () => (
    <InputBlock
      inputLabel="Input ( Prefix / Post-Select )"
      prefix="http://"
      postSelect={[
        { value: "com", label: ".com" },
        { value: "org", label: ".org" },
        { value: "gov", label: ".gov" },
      ]}
      helpText="This help text has been passed through a prop!"
    />
  ))
  // InputBlock ( Pre-Select / Postfix )
  .add("InputBlock ( Pre-Select / Postfix )", () => (
    <InputBlock
      inputLabel="Input ( Pre-Select / Postfix )"
      preSelect={[
        { value: "sir", label: "Sir" },
        { value: "madam", label: "Madam" },
        { value: "my lord", label: "My Lord" },
      ]}
      postfix=".com"
      helpText="This help text has been passed through a prop!"
    />
  ))
  // InputBlock ( Pre / Post-Select )
  .add("InputBlock ( Pre / Post-Select )", () => (
    <InputBlock
      inputLabel="Input ( Pre / Post-Select )"
      preSelect={[
        { value: "sir", label: "Sir" },
        { value: "madam", label: "Madam" },
        { value: "my lord", label: "My Lord" },
      ]}
      postSelect={[
        { value: "com", label: ".com" },
        { value: "org", label: ".org" },
        { value: "gov", label: ".gov" },
      ]}
      helpText="This help text has been passed through a prop!"
    />
  ));
// InputBlock ( The InputBlock Family )
storiesOf("Work|Blocks/InputBlock", module).add(
  "The InputBlock Block Family",
  () => (
    <Panel>
      <PanelSection body>
        <Form>
          <Section>
            <SectionName>The InputBlock Family</SectionName>
            <InputBlock
              inputLabel="Input ( Standard )"
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              inputLabel="Input ( Required )"
              isRequired={true}
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              inputLabel="Input ( Disabled )"
              disabled={true}
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              inputLabel="Input ( Error )"
              helpText="This help text has been passed through a prop!"
              error={true}
              errorMessage="This error text has been passed through a prop!"
            />
            <InputBlock
              inputLabel="Input ( 2 Inputs )"
              twoInputs={true}
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              inputLabel="Input ( 3 Inputs )"
              threeInputs={true}
              helpText="This help text has been passed through a prop!"
              placeholder_2="Two!!"
              placeholder_3="Three!!!"
            />
            <InputBlock
              inputLabel="Input ( Prefix Label )"
              prefix="http://"
              placeholder="This help text has been passed through a prop!"
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              inputLabel="Input ( Prefix Icon )"
              prefix={<Icon icon="user" size="lg" fixedWidth />}
              placeholder="This help text has been passed through a prop!"
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              inputLabel="Input ( Pre-Select )"
              preSelect={[
                { value: "sir", label: "Sir" },
                { value: "madam", label: "Madam" },
                { value: "my lord", label: "My Lord" },
              ]}
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              inputLabel="Input ( Postfix Label )"
              postfix=".com"
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              inputLabel="Input ( Post-Select )"
              postSelect={[
                { value: "com", label: ".com" },
                { value: "org", label: ".org" },
                { value: "gov", label: ".gov" },
              ]}
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              inputLabel="Input ( Post-Button )"
              postButton={true}
              buttonLabel="Upload"
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              inputLabel="Input ( Prefix / Postfix )"
              prefix="http://"
              postfix=".com"
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              inputLabel="Input ( Prefix / Post-Select )"
              prefix="http://"
              postSelect={[
                { value: "com", label: ".com" },
                { value: "org", label: ".org" },
                { value: "gov", label: ".gov" },
              ]}
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              inputLabel="Input ( Pre-Select / Postfix )"
              preSelect={[
                { value: "sir", label: "Sir" },
                { value: "madam", label: "Madam" },
                { value: "my lord", label: "My Lord" },
              ]}
              postfix=".com"
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              inputLabel="Input ( Pre / Post-Select )"
              preSelect={[
                { value: "sir", label: "Sir" },
                { value: "madam", label: "Madam" },
                { value: "my lord", label: "My Lord" },
              ]}
              postSelect={[
                { value: "com", label: ".com" },
                { value: "org", label: ".org" },
                { value: "gov", label: ".gov" },
              ]}
              helpText="This help text has been passed through a prop!"
            />
          </Section>
        </Form>
      </PanelSection>
    </Panel>
  ),
);
