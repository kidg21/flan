/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Padding } from "helpers/Display";
import Form, { Section } from "layout/Form";
import SelectMenu from "atoms/SelectMenu";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "pistachio", label: "Pistachio" },
  { value: "mint chocolate chip", label: "Mint Chocolate Chip" },
  { value: "cookie dough", label: "Cookie Dough" },
];

// Select Menu ( Knobs )
storiesOf("Atoms|Select Menu", module)
  .addParameters({
    info: {
      text: "Select Menu info goes here...",
    },
    notes: {
      markdown: SelectMenu,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <SelectMenu
          label={text("Input Label", "Select Menu ( Knobs )")}
          placeholder={text(
            "Placeholder Text",
            "I am just keeping things warm",
          )}
          helpText={text("Help Text", "Have you been helped yet?")}
          multiSelect={boolean("Multi-Select", false)}
          isLoading={boolean("Loading", false)}
          disabled={boolean("Disabled", false)}
          error={text("Error Text", null)}
          options={options}
        />
      );
    }),
  )
  .add("Skeleton", () => {
    return <SelectMenu options={options} />;
  })

  // Single-Select (Standard)
  .add("Single-Select ( Standard )", () => {
    return (
      <SelectMenu
        label="Single-Select ( Standard )"
        placeholder="Choose..."
        helpText="Help text for the Select Menu component"
        options={options}
      />
    );
  })

  // Single-Select (Required)
  .add("Single-Select ( Required )", () => {
    return (
      <Form>
        <Section>
          <SelectMenu
            label="Single-Select ( Required )"
            placeholder="You Must Choose..."
            helpText="Help text for the Select Menu component"
            isRequired
            isClearable={false}
            options={options}
          />
          <SelectMenu
            label="Single-Select ( Required w/ Clearable )"
            helpText="Help text for the Select Menu component"
            isRequired
            options={options}
            selectOptions={options[0].value}
          />
        </Section>
      </Form>
    );
  })

  // Single-Select (Disabled)
  .add("Single-Select ( Disabled )", () => {
    return (
      <SelectMenu
        label="Single-Select ( Disabled )"
        placeholder="You Can't Choose..."
        helpText="Help text for the Select Menu component"
        disabled
        options={options}
      />
    );
  })

  // Single-Select (Error)
  .add("Single-Select ( Error )", () => {
    return (
      <SelectMenu
        label="Single-Select ( Error )"
        placeholder="You Chose Poorly..."
        helpText="Help text for the Select Menu component"
        error="Error: Invalid Selection!"
        options={options}
      />
    );
  })

  // Single-Select (Loading)
  .add("Single-Select ( Loading )", () => {
    return (
      <SelectMenu
        label="Single-Select ( Loading )"
        placeholder="Give Me A Minute..."
        helpText="Help text for the Select Menu component"
        isLoading
        options={options}
      />
    );
  })

  // Multi-Select (Multi-Select)
  .add("Multi-Select ( Multi-Select )", () => {
    return (
      <SelectMenu
        multiSelect
        label="Multi-Select"
        placeholder="Choose One Or More..."
        helpText="Help text for the Select Menu component"
        options={options}
      />
    );
  })

  // Multi-Select (Multi-Select)
  .add("Multi-Select and Creatable", () => {
    return (
      <SelectMenu
        multiSelect
        label="Multi-Select"
        placeholder="Choose One Or More..."
        helpText="Help text for the Select Menu component"
        onCreateOption={(optionName, setState) => { alert(`New option entered: ${optionName}`); }}
        options={options}
      />
    );
  })

  // Multi-Select (Required)
  .add("Multi-Select ( Required )", () => {
    return (
      <Form>
        <Section>
          <SelectMenu
            multiSelect
            isRequired
            label="Multi-Select ( Required )"
            placeholder="You Must Choose..."
            helpText="Help text for the Select Menu component"
            isClearable={false}
            options={options}
          />
          <SelectMenu
            multiSelect
            isRequired
            label="Multi-Select ( Required w/ Clearable )"
            helpText="Help text for the Select Menu component"
            options={options}
            selectOptions={[options[0].value, options[2].value]}
          />
        </Section>
      </Form>
    );
  })

  // Searchable
  .add("Searchable", () => {
    return <SelectMenu isSearchable placeholder="Search" options={options} />;
  });

// Select Menu (The Select Menu Family)
storiesOf("Atoms|Select Menu", module).add("The Select Menu Family", () => {
  return (
    <Form title="The Select Menu Family">
      <Section>
        <SelectMenu
          label="Single-Select ( Standard )"
          placeholder="Choose..."
          helpText="Help text for the Select Menu component"
          options={options}
        />
        <SelectMenu
          label="Single-Select ( Required )"
          placeholder="You Must Choose..."
          helpText="Help text for the Select Menu component"
          isRequired
          options={options}
        />
        <SelectMenu
          label="Single-Select ( Disabled )"
          placeholder="You Can't Choose..."
          helpText="Help text for the Select Menu component"
          disabled
          options={options}
        />
        <SelectMenu
          label="Single-Select ( Error )"
          placeholder="You Chose Poorly..."
          helpText="Help text for the Select Menu component"
          error="Error: Invalid Selection!"
          options={options}
        />
        <SelectMenu
          label="Single-Select ( Loading )"
          placeholder="Give Me A Minute..."
          helpText="Help text for the Select Menu component"
          isLoading
          options={options}
        />
        <SelectMenu
          multiSelect
          label="Multi-Select"
          placeholder="Choose One Or More..."
          helpText="Help text for the Select Menu component"
          options={options}
        />
      </Section>
    </Form>
  );
});
