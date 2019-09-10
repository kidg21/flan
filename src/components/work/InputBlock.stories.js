import React from "react";
import { storiesOf } from "@storybook/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, radios, select, number } from "@storybook/addon-knobs";
import Panel, { PanelSection } from "layout/Panel";
import Form, { Section } from "layout/Form";
import Icon from "atoms/Icon";
import InputBlock from "blocks/InputBlock";
import InputBlockNotes from "blocks/InputBlock/InputBlock.md";

// Input ( Standard )
storiesOf("Work|Blocks/Input Block", module)
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
    withInfo()(() => {
      return (
        <InputBlock
          type={radios(
          "Type",
          {
            Text: "text",
            Number: "number",
          },
          "text",
        )}
          label={text("Input Label", "Input Label")}
          isRequired={boolean("Required", false)}
          placeholder={text("Placeholder Text", "I am just keeping things warm")}
          helpText={text("Help Text", "Have you been helped yet?")}
          disabled={boolean("Disabled", false)}
          error={boolean("Error", false)}
          errorText={text("Error Text", "Stay with my, buddy...we can fix this!")}
          prefix={text("Prefix", "")}
          postfix={text("Postfix", "")}
          buttonLabel={text("Button Label", "")}
          twoInputs={boolean("2 Inputs", false)}
          threeInputs={boolean("3 Inputs", false)}
        />
      );
    }),
  )
  // Text ( Standard )
  .add("Input Block ( Standard )", () => {
    return (
      <InputBlock
        name="Say My Name!"
        value="Text Input"
        label="Text ( Standard )"
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Number ( Number )
  .add("Input Block ( Number )", () => {
    return (
      <InputBlock
        type="number"
        label="Number ( Standard )"
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Input Block ( Required )
  .add("Input Block ( Required )", () => {
    return (
      <InputBlock
        label="Input ( Required )"
        isRequired
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Input Block ( Disabled )
  .add("Input Block ( Disabled )", () => {
    return (
      <InputBlock
        label="Input ( Disabled )"
        disabled
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Input Block ( Error )
  .add("Input Block ( Error )", () => {
    return (
      <InputBlock
        label="Input ( Error )"
        helpText="This help text has been passed through a prop!"
        error
        errorText="This error text has been passed through a prop!"
      />
    );
  })
  // Input Block ( Round )
  .add("Input Block ( Round )", () => {
    return (
      <InputBlock
        label="Input ( Round )"
        helpText="This help text has been passed through a prop!"
        isRound
      />
    );
  })
  // Input Block ( 2 Inputs )
  .add("Input Block ( 2 Inputs )", () => {
    return (
      <InputBlock
        label="Input ( 2 Inputs )"
        twoInputs
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Input Block ( 3 Inputs )
  .add("Input Block ( 3 Inputs )", () => {
    return (
      <InputBlock
        label="Input ( 3 Inputs )"
        threeInputs
        placeholder_2="Two!!"
        placeholder_3="Three!!!"
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Input Block ( Prefix )
  .add("Input Block ( Prefix Label )", () => {
    return (
      <InputBlock
        label="Input ( Prefix )"
        prefix="http://"
        placeholder="This help text has been passed through a prop!"
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Input Block ( Prefix Icon )
  .add("Input Block ( Prefix Icon )", () => {
    return (
      <InputBlock
        label="Input ( Prefix Icon )"
        prefix={<Icon icon="user" size="lg" fixedWidth />}
        placeholder="This help text has been passed through a prop!"
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Input Block ( Pre-Select )
  .add("Input Block ( Pre-Select )", () => {
    return (
      <InputBlock
        label="Input ( Pre-Select )"
        preSelect={[
        { value: "sir", label: "Sir" },
        { value: "madam", label: "Madam" },
        { value: "my lord", label: "My Lord" },
      ]}
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Input Block ( Postfix )
  .add("Input Block ( Postfix Label )", () => {
    return (
      <InputBlock
        label="Input ( Postfix )"
        postfix=".com"
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Input Block ( Post-Select )
  .add("Input Block ( Post-Select )", () => {
    return (
      <InputBlock
        label="Input ( Post-Select )"
        postSelect={[
        { value: "com", label: ".com" },
        { value: "org", label: ".org" },
        { value: "gov", label: ".gov" },
      ]}
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Input Block ( Post-Button )
  .add("Input Block ( Post-Button )", () => {
    return (
      <InputBlock
        label="Input ( Post-Button )"
        postButton
        buttonLabel="Upload"
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Input Block ( Prefix / Postfix )
  .add("Input Block ( Prefix / Postfix )", () => {
    return (
      <InputBlock
        label="Input ( Prefix / Postfix )"
        prefix="http://"
        postfix=".com"
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Input Block ( Prefix / Post-Select )
  .add("Input Block ( Prefix / Post-Select )", () => {
    return (
      <InputBlock
        label="Input ( Prefix / Post-Select )"
        prefix="http://"
        postSelect={[
        { value: "com", label: ".com" },
        { value: "org", label: ".org" },
        { value: "gov", label: ".gov" },
      ]}
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Input Block ( Pre-Select / Postfix )
  .add("Input Block ( Pre-Select / Postfix )", () => {
    return (
      <InputBlock
        label="Input ( Pre-Select / Postfix )"
        preSelect={[
        { value: "sir", label: "Sir" },
        { value: "madam", label: "Madam" },
        { value: "my lord", label: "My Lord" },
      ]}
        postfix=".com"
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  // Input Block ( Pre / Post-Select )
  .add("Input Block ( Pre / Post-Select )", () => {
    return (
      <InputBlock
        label="Input ( Pre / Post-Select )"
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
    );
  });
// Input Block ( The Input Block Family )
storiesOf("Work|Blocks/Input Block", module).add("The Input Block Block Family", () => {
  return (
    <Panel>
      <PanelSection body>
        <Form>
          <Section title="The Input Block Family">
            <InputBlock
              label="Input ( Standard )"
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              label="Input ( Required )"
              isRequired
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              label="Input ( Disabled )"
              disabled
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              label="Input ( Error )"
              helpText="This help text has been passed through a prop!"
              error
              errorText="This error text has been passed through a prop!"
            />
            <InputBlock
              label="Input ( 2 Inputs )"
              twoInputs
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              label="Input ( 3 Inputs )"
              threeInputs
              helpText="This help text has been passed through a prop!"
              placeholder_2="Two!!"
              placeholder_3="Three!!!"
            />
            <InputBlock
              label="Input ( Prefix Label )"
              prefix="http://"
              placeholder="This help text has been passed through a prop!"
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              label="Input ( Prefix Icon )"
              prefix={<Icon icon="user" size="lg" fixedWidth />}
              placeholder="This help text has been passed through a prop!"
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              label="Input ( Pre-Select )"
              preSelect={[
              { value: "sir", label: "Sir" },
              { value: "madam", label: "Madam" },
              { value: "my lord", label: "My Lord" },
            ]}
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              label="Input ( Postfix Label )"
              postfix=".com"
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              label="Input ( Post-Select )"
              postSelect={[
              { value: "com", label: ".com" },
              { value: "org", label: ".org" },
              { value: "gov", label: ".gov" },
            ]}
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              label="Input ( Post-Button )"
              postButton
              buttonLabel="Upload"
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              label="Input ( Prefix / Postfix )"
              prefix="http://"
              postfix=".com"
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              label="Input ( Prefix / Post-Select )"
              prefix="http://"
              postSelect={[
              { value: "com", label: ".com" },
              { value: "org", label: ".org" },
              { value: "gov", label: ".gov" },
            ]}
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              label="Input ( Pre-Select / Postfix )"
              preSelect={[
              { value: "sir", label: "Sir" },
              { value: "madam", label: "Madam" },
              { value: "my lord", label: "My Lord" },
            ]}
              postfix=".com"
              helpText="This help text has been passed through a prop!"
            />
            <InputBlock
              label="Input ( Pre / Post-Select )"
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
  );
});
