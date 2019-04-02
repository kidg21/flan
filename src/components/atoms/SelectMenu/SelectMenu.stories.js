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
import { data } from "../../../attributes/Variables/Variables"
import SelectMenu from "./SelectMenu"

// Select Menu ( Knobs )
storiesOf("Atoms|Select Menu", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Select Menu ( Knobs )", () => (
    <SelectMenu
      label={text("Input Label", "Select Menu ( Knobs )")}
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
      options={data.iceCream}
    />
  ))

// Single-Select (Standard)
storiesOf("Atoms|Select Menu", module)
  .addDecorator(Padding)
  .add("Single-Select ( Standard )", () => (
    <SelectMenu
      label="Single-Select ( Standard )"
      placeholder="Choose..."
      helpText="Help text for the SelectMenu component"
      options={data.iceCream}
    />
  ))

// Single-Select (Required)
storiesOf("Atoms|Select Menu", module)
  .addDecorator(Padding)
  .add("Single-Select ( Required )", () => (
    <SelectMenu
      label="Single-Select ( Required )"
      placeholder="You Must Choose..."
      helpText="Help text for the SelectMenu component"
      required={true}
    />
  ))

// Single-Select (Disabled)
storiesOf("Atoms|Select Menu", module)
  .addDecorator(Padding)
  .add("Single-Select ( Disabled )", () => (
    <SelectMenu
      label="Single-Select ( Disabled )"
      placeholder="You Can't Choose..."
      helpText="Help text for the SelectMenu component"
      disabled={true}
    />
  ))

// Single-Select (Error)
storiesOf("Atoms|Select Menu", module)
  .addDecorator(Padding)
  .add("Single-Select ( Error )", () => (
    <SelectMenu
      label="Single-Select ( Error )"
      placeholder="You Chose Poorly..."
      helpText="Help text for the SelectMenu component"
      error={true}
    />
  ))

// Single-Select (Loading)
storiesOf("Atoms|Select Menu", module)
  .addDecorator(Padding)
  .add("Single-Select ( Loading )", () => (
    <SelectMenu
      label="Single-Select ( Loading )"
      placeholder="Give Me A Minute..."
      helpText="Help text for the SelectMenu component"
      isLoading={true}
    />
  ))

// Single-Select (Multi-Select)
storiesOf("Atoms|Select Menu", module)
  .addDecorator(Padding)
  .add("Multi-Select ( Multi-Select )", () => (
    <SelectMenu
      multiSelect={true}
      label="Multi-Select"
      placeholder="Choose One Or More..."
      helpText="Help text for the SelectMenu component"
    />
  ))

// Select Menu (The Select Menu Family)
storiesOf("Atoms|Select Menu", module).add("The SelectMenu Family", () => (
  <Panel>
    <PanelBody>
      <Form>
        <Section>
          <SectionName>The Select Menu Family</SectionName>
          <SelectMenu
            label="Single-Select ( Standard )"
            placeholder="Choose..."
            helpText="Help text for the SelectMenu component"
            options={data.iceCream}
          />
          <SelectMenu
            label="Single-Select ( Required )"
            placeholder="You Must Choose..."
            helpText="Help text for the SelectMenu component"
            required={true}
          />
          <SelectMenu
            label="Single-Select ( Disabled )"
            placeholder="You Can't Choose..."
            helpText="Help text for the SelectMenu component"
            disabled={true}
          />
          <SelectMenu
            label="Single-Select ( Error )"
            placeholder="You Chose Poorly..."
            helpText="Help text for the SelectMenu component"
            error={true}
          />
          <SelectMenu
            label="Single-Select ( Loading )"
            placeholder="Give Me A Minute..."
            helpText="Help text for the SelectMenu component"
            isLoading={true}
          />
          <SelectMenu
            multiSelect={true}
            label="Multi-Select"
            placeholder="Choose One Or More..."
            helpText="Help text for the SelectMenu component"
          />
        </Section>
      </Form>
    </PanelBody>
  </Panel>
))
