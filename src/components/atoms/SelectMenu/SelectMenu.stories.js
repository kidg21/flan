import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "../../_helpers/Display";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number
} from "@storybook/addon-knobs";
import Panel, { PanelSection } from "../../layout/Panel/Panel";
import Form, { Section, SectionName } from "../../layout/Form/Form";
import SelectMenu from "./SelectMenu";
import SelectMenuNotes from "./SelectMenu.md";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "pistachio", label: "Pistachio" },
  { value: "mint chocolate chip", label: "Mint Chocolate Chip" },
  { value: "cookie dough", label: "Cookie Dough" }
];

// SelectMenu ( Knobs )
storiesOf("Atoms|SelectMenu", module)
  .addParameters({
    info: {
      text: "Select Menu info goes here..."
    },
    notes: {
      markdown: SelectMenu
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => (
      <SelectMenu
        inputLabel={text("Input Label", "SelectMenu ( Knobs )")}
        placeholder={text("Placeholder Text", "I am just keeping things warm")}
        helpText={text("Help Text", "Have you been helped yet?")}
        multiSelect={boolean("Multi-Select", false)}
        isLoading={boolean("Loading", false)}
        disabled={boolean("Disabled", false)}
        error={boolean("Error", false)}
        errorMessage={text(
          "Error Text",
          "Stay with my, buddy...we can fix this!"
        )}
        options={options}
      />
    ))
  )

  // Single-Select (Standard)
  .add("Single-Select ( Standard )", () => (
    <SelectMenu
      inputLabel="Single-Select ( Standard )"
      placeholder="Choose..."
      helpText="Help text for the SelectMenu component"
      options={options}
    />
  ))

  // Single-Select (Required)
  .add("Single-Select ( Required )", () => (
    <SelectMenu
      inputLabel="Single-Select ( Required )"
      placeholder="You Must Choose..."
      helpText="Help text for the SelectMenu component"
      isRequired={true}
      options={options}
    />
  ))

  // Single-Select (Disabled)
  .add("Single-Select ( Disabled )", () => (
    <SelectMenu
      inputLabel="Single-Select ( Disabled )"
      placeholder="You Can't Choose..."
      helpText="Help text for the SelectMenu component"
      disabled={true}
      options={options}
    />
  ))

  // Single-Select (Error)
  .add("Single-Select ( Error )", () => (
    <SelectMenu
      inputLabel="Single-Select ( Error )"
      placeholder="You Chose Poorly..."
      helpText="Help text for the SelectMenu component"
      error={true}
      options={options}
    />
  ))

  // Single-Select (Loading)
  .add("Single-Select ( Loading )", () => (
    <SelectMenu
      inputLabel="Single-Select ( Loading )"
      placeholder="Give Me A Minute..."
      helpText="Help text for the SelectMenu component"
      isLoading={true}
      options={options}
    />
  ))

  // Single-Select (Multi-Select)
  .add("Multi-Select ( Multi-Select )", () => (
    <SelectMenu
      multiSelect={true}
      inputLabel="Multi-Select"
      placeholder="Choose One Or More..."
      helpText="Help text for the SelectMenu component"
      options={options}
    />
  ))
  .add("Searchable", () => (
    <SelectMenu isSearchable={true} placeholder="Search" options={options} />
  ));

// SelectMenu (The SelectMenu Family)
storiesOf("Atoms|SelectMenu", module).add("The SelectMenu Family", () => (
  <Panel>
    <PanelSection body>
      <Form>
        <Section>
          <SectionName>The SelectMenu Family</SectionName>
          <SelectMenu
            inputLabel="Single-Select ( Standard )"
            placeholder="Choose..."
            helpText="Help text for the SelectMenu component"
            options={options}
          />
          <SelectMenu
            inputLabel="Single-Select ( Required )"
            placeholder="You Must Choose..."
            helpText="Help text for the SelectMenu component"
            isRequired={true}
            options={options}
          />
          <SelectMenu
            inputLabel="Single-Select ( Disabled )"
            placeholder="You Can't Choose..."
            helpText="Help text for the SelectMenu component"
            disabled={true}
            options={options}
          />
          <SelectMenu
            inputLabel="Single-Select ( Error )"
            placeholder="You Chose Poorly..."
            helpText="Help text for the SelectMenu component"
            error={true}
            options={options}
          />
          <SelectMenu
            inputLabel="Single-Select ( Loading )"
            placeholder="Give Me A Minute..."
            helpText="Help text for the SelectMenu component"
            isLoading={true}
            options={options}
          />
          <SelectMenu
            multiSelect={true}
            inputLabel="Multi-Select"
            placeholder="Choose One Or More..."
            helpText="Help text for the SelectMenu component"
            options={options}
          />
        </Section>
      </Form>
    </PanelSection>
  </Panel>
));
