/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Padding } from "helpers/Display";
import Form, { Section } from "layout/Form";
import InputBlock from "blocks/InputBlock";

const button = {
  label: "upload",
  type: "",
  onClick: () => {},
  color: "",
  disabled: false,
};
const inputsOne = [
  {
    id: "ID 1",
    name: "ID 100",
    type: "text",
    placeholder: "Placeholder 1",
    pattern: "[A-Za-z]{3}",
  },
];
const inputsTwo = [
  {
    id: "ID 1",
    type: "text",
    placeholder: "Placeholder 1",
  },
  {
    id: "ID 2",
    type: "text",
    placeholder: "Placeholder 2",
  },
];
const inputsThree = [
  {
    id: "ID 1",
    type: "text",
    placeholder: "Placeholder 1",
  },
  {
    id: "ID 2",
    type: "text",
    placeholder: "Placeholder 2",
  },
  {
    id: "ID 3",
    type: "text",
    placeholder: "Placeholder 3",
  },
];

const titles = [
  { value: "mr", label: "Mr." },
  { value: "mrs", label: "Mrs." },
  { value: "ms", label: "Ms." },
  { value: "sir", label: "Sir" },
  { value: "madam", label: "Madam" },
  { value: "my lord", label: "Lord" },
  { value: "bmoc", label: "BMOC" },
];

const domains = [
  { value: "com", label: ".com" },
  { value: "org", label: ".org" },
  { value: "gov", label: ".gov" },
];

storiesOf("Blocks|Input Block", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    () => {
      return (
        <InputBlock
          id="input block"
          label="Input Block ( Defaults to a standard Text Input )"
          textInputs={[
            {
              id: "ID 1",
              name: "ID 100",
              type: "text",
              placeholder: "Placeholder 1",
              pattern: "[A-Za-z]{3}",
            },
          ]}
          helpText="Play with Knobs to see what this baby can do!"
        />
      );
    })
  .add("Knobs", () => {
    return (
      <InputBlock
        id="input block"
        label={text("input label", "Input Block Label", "Input Block")}
        isRequired={boolean("required", false, "Input Block")}
        helpText={text("help text", "Have you been helped yet?", "Input Block")}
        error={text("error", null, "Input Block")}
        disabled={boolean("disabled", false, "Input Block")}
        textInputs={object(
          "text inputs",
          [
            {
              id: "ID 1",
              name: "ID 100",
              type: "text",
              placeholder: "Placeholder 1",
              pattern: "[A-Za-z]{3}",
            },
          ],
          "Inputs",
        )}
        text={text("text", "", "Labels")}
        icon={options(
            "pre-icon",
            {
              none: null,
              user_circle: "user_circle",
              down: "down",
              bookmark: "bookmark_solid",
              plus: "plus",
              print: "print",
            },
            "user_circle",
            { display: "select" },
            "Icon",
          )
        }
        // button={text("button label", "Button", "Button")}
        button={object("button", button, "Button")}
        // options={titles}
        options={object("options", titles, "Options")}
        selectOptions={titles[0].value}
      />
    );
  })
  // Input Block ( Required )
  .add("Input Block ( Required )", () => {
    return (
      <InputBlock
        label="Input Block ( Required )"
        isRequired
        textInputs={inputsOne}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // // Input Block ( Error )
  .add("Input Block ( Error )", () => {
    return (
      <InputBlock
        label="Input Block ( Error )"
        textInputs={inputsOne}
        helpText="Hang in there, buddy, I'm here to help!"
        error="Don't sweat it...we can fix this!"
      />
    );
  })
  // // Input Block ( Disabled )
  .add("Input Block ( Disabled )", () => {
    return (
      <InputBlock
        label="Input Block ( Disabled )"
        disabled
        textInputs={inputsOne}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // // Input Block ( 2 Inputs )
  .add("Input Block ( 2 Inputs )", () => {
    return (
      <InputBlock
        label="Input Block ( 2 Inputs )"
        textInputs={inputsTwo}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // // Input Block ( 3 Inputs )
  .add("Input Block ( 3 Inputs )", () => {
    return (
      <InputBlock
        label="Input Block ( 3 Inputs )"
        textInputs={inputsThree}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Pre-Label )
  .add("Input Block ( Pre-Label )", () => {
    return (
      <InputBlock
        prefix
        label="Input Block ( Pre-Label )"
        text="prefix"
        textInputs={inputsOne}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Post-Label )
  .add("Input Block ( Post-Label )", () => {
    return (
      <InputBlock
        label="Input Block ( Post-Label )"
        textInputs={inputsOne}
        text="postfix"
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Pre-Icon )
  .add("Input Block ( Pre-Icon )", () => {
    return (
      <InputBlock
        prefix
        label="Input Block ( Pre-Icon )"
        icon="user"
        textInputs={inputsOne}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Post-Icon )
  .add("Input Block ( Post-Icon )", () => {
    return (
      <InputBlock
        label="Input Block ( Post-Icon )"
        icon="user"
        textInputs={inputsOne}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Pre-Select )
  .add("Input Block ( Pre-Select )", () => {
    return (
      <InputBlock
        prefix
        label="Input Block ( Pre-Select )"
        options={titles}
        selectOptions={titles[0].value}
        onChange={(prevState, newState, setState) => {
          alert(newState.selected.value);
          setState(newState);
        }}
        textInputs={inputsOne}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Post-Select )
  .add("Input Block ( Post-Select )", () => {
    return (
      <InputBlock
        label="Input Block ( Post-Select )"
        textInputs={inputsOne}
        options={domains}
        selectOptions={domains[0].value}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Pre-Button )
  .add("Input Block ( Pre-Button )", () => {
    return (
      <InputBlock
        prefix
        label="Input Block ( Pre-Button )"
        textInputs={inputsOne}
        button={button}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  })
  // Input Block ( Post-Button )
  .add("Input Block ( Post-Button )", () => {
    return (
      <InputBlock
        label="Input Block ( Post-Button )"
        textInputs={inputsOne}
        button={button}
        helpText="Hang in there, buddy, I'm here to help!"
      />
    );
  });

// Input Block ( The Input Block Family )
storiesOf("Blocks|Input Block", module).add(
  "The Input Block Block Family",
  () => {
    return (
      <Form title="The Input Block Family">
        <Section>
          <InputBlock
            label="Input Block ( standard )"
            textInputs={inputsOne}
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <InputBlock
            label="Input Block ( required )"
            isRequired
            textInputs={inputsOne}
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <InputBlock
            label="Input Block ( error )"
            textInputs={inputsOne}
            helpText="Hang in there, buddy, I'm here to help!"
            error="Don't sweat it...we can fix this!"
          />
          <InputBlock
            label="Input Block ( disabled )"
            textInputs={inputsOne}
            helpText="Hang in there, buddy, I'm here to help!"
            disabled
          />
          <InputBlock
            label="Input Block ( 2 inputs )"
            textInputs={inputsTwo}
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <InputBlock
            label="Input Block ( 3 inputs )"
            textInputs={inputsThree}
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <InputBlock
            label="Input Block ( pre-label )"
            prefix
            text="prefix"
            textInputs={inputsOne}
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <InputBlock
            label="Input Block ( post-label )"
            text="postfix"
            textInputs={inputsOne}
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <InputBlock
            label="Input Block ( pre-select )"
            prefix
            options={titles}
            selectOptions={titles[0].value}
            textInputs={inputsOne}
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <InputBlock
            label="Input Block ( post-select )"
            options={domains}
            selectOptions={domains[0].value}
            textInputs={inputsOne}
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <InputBlock
            label="Input Block ( pre-icon )"
            prefix
            icon="user"
            textInputs={inputsOne}
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <InputBlock
            label="Input Block ( post-icon )"
            icon="user"
            textInputs={inputsOne}
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <InputBlock
            prefix
            label="Input Block ( pre-button )"
            button={button}
            textInputs={inputsOne}
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <InputBlock
            label="Input Block ( post-button )"
            button={button}
            textInputs={inputsOne}
            helpText="Hang in there, buddy, I'm here to help!"
          />
        </Section>
      </Form>
    );
  },
);
