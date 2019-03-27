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
import Form, { Section, SectionName } from "../../layout/Form/Form";
import Input from "atoms/Input";

// Input ( Standard )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Input ( with Knobs )", () => (
    <Input
      label={text("Input Label", "Input ( with Knobs )")}
      required={boolean("Required", false)}
      placeholder={text("Placeholder Text", "I am just keeping things warm")}
      helpText={text("Help Text", "Have you been helped yet?")}
      disabled={boolean("Disabled", false)}
      error={boolean("Error", false)}
      errorText={text("Error Text", "Stay with my, buddy...we can fix this!")}
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
  ));

// Input ( Standard )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Standard )", () => (
    <Input
      label="Input ( Standard )"
      helpText="This help text has been passed through a prop!"
    />
  ));

// Input ( Required )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Required )", () => (
    <Input
      label="Input ( Required )"
      required={true}
      helpText="This help text has been passed through a prop!"
    />
  ));

// Input ( Disabled )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Disabled )", () => (
    <Input
      label="Input ( Disabled )"
      helpText="This help text has been passed through a prop!"
      disabled={true}
    />
  ));

// Input ( Error )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Error )", () => (
    <Input
      label="Input ( Error )"
      helpText="This help text has been passed through a prop!"
      error={true}
      errorText="This error text has been passed through a prop!"
    />
  ));

// Input ( Prefix )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Prefix )", () => (
    <Input
      label="Input ( Prefix )"
      prefix="http://"
      helpText="This help text has been passed through a prop!"
      placeholder="This help text has been passed through a prop!"
    />
  ));

// Input ( Postfix )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( Postfix )", () => (
    <Input
      label="Input ( Postfix )"
      postfix=".com"
      helpText="This help text has been passed through a prop!"
    />
  ));

// Input ( 2 Inputs )
storiesOf("Atoms|Input", module)
  .addDecorator(Padding)
  .add("Input ( 2 Inputs )", () => (
    <Input
      label="Input ( 2 Inputs )"
      twoInputs={true}
      helpText="This help text has been passed through a prop!"
    />
  ));

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
  ));

// Input ( The Input Family )
storiesOf("Atoms|Input", module).add("The Input Family", props => (
  <Panel>
    <PanelBody>
      <Form>
        <Section>
          <SectionName>The Input Family</SectionName>
          <Input label="Input ( Standard )" />
          <Input
            label="Input ( Required )"
            required={true}
            helpText="This help text has been passed through a prop!"
          />
          <Input label="Input ( Disabled )" disabled={true} />
          <Input
            label="Input ( Invalid )"
            required={true}
            error={true}
            errorText="This error text has been passed through a prop!"
          />
          <Input
            label="Input ( Prefix )"
            prefix="http://"
            helpText="This help text has been passed through a prop!"
            placeholder="This help text has been passed through a prop!"
          />
          <Input
            label="Input ( Postfix )"
            postfix=".com"
            helpText="This help text has been passed through a prop!"
          />
          <Input label="Input ( 2 Inputs )" twoInputs={true} />
          <Input
            label="Input ( 3 Inputs )"
            threeInputs={true}
            placeholder_2="Two!!"
            placeholder_3="Three!!!"
          />
        </Section>
      </Form>
    </PanelBody>
  </Panel>
));
