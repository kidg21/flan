import React from "react"
import { storiesOf } from "@storybook/react"
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
import SelectMenu from "./SelectMenu"

// SelectMenu ( Knobs )
storiesOf("Atoms|SelectMenu", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("SelectMenu ( Knobs )", () => (
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
      options={[
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
        { value: "pistachio", label: "Pistachio" },
        { value: "mint chocolate chip", label: "Mint Chocolate Chip" },
        { value: "cookie dough", label: "Cookie Dough" }
      ]}
    />
  ))

// Single-Select (Standard)
storiesOf("Atoms|SelectMenu", module)
  .addDecorator(Padding)
  .add("Single-Select ( Standard )", () => (
    <SelectMenu
      inputLabel="Single-Select ( Standard )"
      placeholder="Choose..."
      helpText="Help text for the SelectMenu component"
      options={[
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
        { value: "pistachio", label: "Pistachio" },
        { value: "mint chocolate chip", label: "Mint Chocolate Chip" },
        { value: "cookie dough", label: "Cookie Dough" }
      ]}
    />
  ))

// Single-Select (Required)
storiesOf("Atoms|SelectMenu", module)
  .addDecorator(Padding)
  .add("Single-Select ( Required )", () => (
    <SelectMenu
      inputLabel="Single-Select ( Required )"
      placeholder="You Must Choose..."
      helpText="Help text for the SelectMenu component"
      isRequired={true}
    />
  ))

// Single-Select (Disabled)
storiesOf("Atoms|SelectMenu", module)
  .addDecorator(Padding)
  .add("Single-Select ( Disabled )", () => (
    <SelectMenu
      inputLabel="Single-Select ( Disabled )"
      placeholder="You Can't Choose..."
      helpText="Help text for the SelectMenu component"
      disabled={true}
    />
  ))

// Single-Select (Error)
storiesOf("Atoms|SelectMenu", module)
  .addDecorator(Padding)
  .add("Single-Select ( Error )", () => (
    <SelectMenu
      inputLabel="Single-Select ( Error )"
      placeholder="You Chose Poorly..."
      helpText="Help text for the SelectMenu component"
      error={true}
    />
  ))

// Single-Select (Loading)
storiesOf("Atoms|SelectMenu", module)
  .addDecorator(Padding)
  .add("Single-Select ( Loading )", () => (
    <SelectMenu
      inputLabel="Single-Select ( Loading )"
      placeholder="Give Me A Minute..."
      helpText="Help text for the SelectMenu component"
      isLoading={true}
    />
  ))

// Single-Select (Multi-Select)
storiesOf("Atoms|SelectMenu", module)
  .addDecorator(Padding)
  .add("Multi-Select ( Multi-Select )", () => (
    <SelectMenu
      multiSelect={true}
      inputLabel="Multi-Select"
      placeholder="Choose One Or More..."
      helpText="Help text for the SelectMenu component"
    />
  ))

// SelectMenu (The SelectMenu Family)
storiesOf("Atoms|SelectMenu", module).add("The SelectMenu Family", () => (
  <Panel>
    <PanelBody>
      <Form>
        <Section>
          <SectionName>The SelectMenu Family</SectionName>
          <SelectMenu
            inputLabel="Single-Select ( Standard )"
            placeholder="Choose..."
            helpText="Help text for the SelectMenu component"
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
              { value: "pistachio", label: "Pistachio" },
              { value: "mint chocolate chip", label: "Mint Chocolate Chip" },
              { value: "cookie dough", label: "Cookie Dough" }
            ]}
          />
          <SelectMenu
            inputLabel="Single-Select ( Required )"
            placeholder="You Must Choose..."
            helpText="Help text for the SelectMenu component"
            isRequired={true}
          />
          <SelectMenu
            inputLabel="Single-Select ( Disabled )"
            placeholder="You Can't Choose..."
            helpText="Help text for the SelectMenu component"
            disabled={true}
          />
          <SelectMenu
            inputLabel="Single-Select ( Error )"
            placeholder="You Chose Poorly..."
            helpText="Help text for the SelectMenu component"
            error={true}
          />
          <SelectMenu
            inputLabel="Single-Select ( Loading )"
            placeholder="Give Me A Minute..."
            helpText="Help text for the SelectMenu component"
            isLoading={true}
          />
          <SelectMenu
            multiSelect={true}
            inputLabel="Multi-Select"
            placeholder="Choose One Or More..."
            helpText="Help text for the SelectMenu component"
          />
        </Section>
      </Form>
    </PanelBody>
  </Panel>
))
