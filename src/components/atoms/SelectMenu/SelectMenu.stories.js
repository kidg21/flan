/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
} from "@storybook/addon-knobs";
import Panel, { PanelSection } from "layout/Panel";
import Form, { Section, SectionName } from "layout/Form";
import SelectMenu from "./SelectMenu";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "pistachio", label: "Pistachio" },
  { value: "mint chocolate chip", label: "Mint Chocolate Chip" },
  { value: "cookie dough", label: "Cookie Dough" },
];

// SelectMenu ( Knobs )
storiesOf("Atoms|SelectMenu", module)
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
          label={text("Input Label", "SelectMenu ( Knobs )")}
          placeholder={text("Placeholder Text", "I am just keeping things warm")}
          helpText={text("Help Text", "Have you been helped yet?")}
          multiSelect={boolean("Multi-Select", false)}
          isLoading={boolean("Loading", false)}
          disabled={boolean("Disabled", false)}
          error={boolean("Error", false)}
          errorMessage={text(
            "Error Text",
            "Stay with my, buddy...we can fix this!",
          )}
          options={options}
        />
      );
    }),
  )
  .add("Skeleton", () => { return <SelectMenu />; })

  // Single-Select (Standard)
  .add("Single-Select ( Standard )", () => {
    return (
      <SelectMenu
        label="Single-Select ( Standard )"
        placeholder="Choose..."
        helpText="Help text for the SelectMenu component"
        options={options}
      />
    );
  })

  // Single-Select (Required)
  .add("Single-Select ( Required )", () => {
    return (
      <Panel>
        <PanelSection body>
          <Form>
            <Section>
              <SelectMenu
                label="Single-Select ( Required )"
                placeholder="You Must Choose..."
                helpText="Help text for the SelectMenu component"
                isRequired
                isClearable={false}
                options={options}
              />
              <SelectMenu
                label="Single-Select ( Required w/ Clearable )"
                helpText="Help text for the SelectMenu component"
                isRequired
                options={options}
                selectOptions={options[0].value}
              />
            </Section>
          </Form>
        </PanelSection>
      </Panel>
    );
  })

  // Single-Select (Disabled)
  .add("Single-Select ( Disabled )", () => {
    return (
      <SelectMenu
        label="Single-Select ( Disabled )"
        placeholder="You Can't Choose..."
        helpText="Help text for the SelectMenu component"
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
        helpText="Help text for the SelectMenu component"
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
        helpText="Help text for the SelectMenu component"
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
        helpText="Help text for the SelectMenu component"
        options={options}
      />
    );
  })

  // Multi-Select (Required)
  .add("Multi-Select ( Required )", () => {
    return (
      <Panel>
        <PanelSection body>
          <Form>
            <Section>
              <SelectMenu
                multiSelect
                isRequired
                label="Multi-Select ( Required )"
                placeholder="You Must Choose..."
                helpText="Help text for the SelectMenu component"
                isClearable={false}
                options={options}
              />
              <SelectMenu
                multiSelect
                isRequired
                label="Multi-Select ( Required w/ Clearable )"
                helpText="Help text for the SelectMenu component"
                options={options}
                selectOptions={[options[0].value, options[2].value]}
              />
            </Section>
          </Form>
        </PanelSection>
      </Panel>
    );
  })

  // Searchable
  .add("Searchable", () => {
    return (
      <SelectMenu isSearchable placeholder="Search" options={options} />
    );
  });

// SelectMenu (The SelectMenu Family)
storiesOf("Atoms|SelectMenu", module).add("The SelectMenu Family", () => {
  return (
    <Panel>
      <PanelSection body>
        <Form>
          <Section>
            <SectionName>The SelectMenu Family</SectionName>
            <SelectMenu
              label="Single-Select ( Standard )"
              placeholder="Choose..."
              helpText="Help text for the SelectMenu component"
              options={options}
            />
            <SelectMenu
              label="Single-Select ( Required )"
              placeholder="You Must Choose..."
              helpText="Help text for the SelectMenu component"
              isRequired
              options={options}
            />
            <SelectMenu
              label="Single-Select ( Disabled )"
              placeholder="You Can't Choose..."
              helpText="Help text for the SelectMenu component"
              disabled
              options={options}
            />
            <SelectMenu
              label="Single-Select ( Error )"
              placeholder="You Chose Poorly..."
              helpText="Help text for the SelectMenu component"
              error="Error: Invalid Selection!"
              options={options}
            />
            <SelectMenu
              label="Single-Select ( Loading )"
              placeholder="Give Me A Minute..."
              helpText="Help text for the SelectMenu component"
              isLoading
              options={options}
            />
            <SelectMenu
              multiSelect
              label="Multi-Select"
              placeholder="Choose One Or More..."
              helpText="Help text for the SelectMenu component"
              options={options}
            />
          </Section>
        </Form>
      </PanelSection>
    </Panel>
  );
});
