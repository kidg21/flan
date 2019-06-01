import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { Padding } from "helpers/Display"
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs"
import { Section, SectionName, InputGroup } from "layout/Form"
import Checkbox from "atoms/Checkbox"
import CheckboxNotes from "./Checkbox.md"

const cbox_1 = {
  id: "cbox_1",
  label: "Box 1"
}
const cbox_2 = {
  id: "cbox_2",
  label: "Box 2"
}
const cbox_3 = {
  id: "cbox_3",
  label: "Box 3"
}
const cbox_4 = {
  id: "cbox_4",
  label: "Box 4"
}
const cbox_long = {
  id: "cbox_long",
  label:
    "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself."
}

storiesOf("Atoms|Checkbox", module)
  .addParameters({
    info: {
      text: "Checkbox info goes here..."
    },
    notes: {
      markdown: CheckboxNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Documentation", withInfo()(() => <Checkbox {...cbox_1} />))
  .add("Radio (States)", () => (
    <Section>
      <SectionName>Radio Group (States)</SectionName>
      <InputGroup>
        <Checkbox label="Default" checked={false} />
        <Checkbox label="Selected" checked={true} />
        <Checkbox label="Error" error={true} />
        <Checkbox label="Disabled" disabled={true} />
      </InputGroup>
    </Section>
  ))
  .add("Checkbox Group (Responsive)", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState(checked)
      const handleCheckboxChange = event => {
        setChecked(event.target.value)
      }
      return (
        <Section>
          <SectionName>Checkbox Group (Responsive)</SectionName>
          <InputGroup>
            <Checkbox
              {...cbox_1}
              checked={cbox_1.value}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              {...cbox_2}
              checked={cbox_2.value}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              {...cbox_3}
              checked={cbox_3.value}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              {...cbox_4}
              checked={cbox_4.value}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              {...cbox_long}
              checked={cbox_long.value}
              onChange={handleCheckboxChange}
            />
          </InputGroup>
        </Section>
      )
    })
  )
  .add("Checkbox Group (2 columns)", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState(checked)
      const handleCheckboxChange = event => {
        setChecked(event.target.value)
      }
      return (
        <Section>
          <SectionName>Checkbox Group (2 columns)</SectionName>
          <InputGroup col_2>
            <Checkbox
              {...cbox_1}
              checked={cbox_1.value}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              {...cbox_2}
              checked={cbox_2.value}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              {...cbox_3}
              checked={cbox_3.value}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              {...cbox_4}
              checked={cbox_4.value}
              onChange={handleCheckboxChange}
            />
          </InputGroup>
        </Section>
      )
    })
  )
  .add("Checkbox Group (3 columns)", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState(checked)
      const handleCheckboxChange = event => {
        setChecked(event.target.value)
      }
      return (
        <Section>
          <SectionName>Checkbox Group (3 columns)</SectionName>
          <InputGroup col_3>
            <Checkbox
              {...cbox_1}
              checked={cbox_1.value}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              {...cbox_2}
              checked={cbox_2.value}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              {...cbox_3}
              checked={cbox_3.value}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              {...cbox_4}
              checked={cbox_4.value}
              onChange={handleCheckboxChange}
            />
          </InputGroup>
        </Section>
      )
    })
  )
  .add("Checkbox Group (mixed columns)", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState(checked)
      const handleCheckboxChange = event => {
        setChecked(event.target.value)
      }
      return (
        <Section>
          <SectionName>Checkbox Group (mixed columns)</SectionName>
          <InputGroup col_3>
            <Checkbox
              {...cbox_1}
              checked={cbox_1.value}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              {...cbox_2}
              checked={cbox_2.value}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              {...cbox_3}
              checked={cbox_3.value}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              {...cbox_4}
              checked={cbox_4.value}
              onChange={handleCheckboxChange}
            />
          </InputGroup>
          <InputGroup>
            <Checkbox
              {...cbox_long}
              checked={cbox_long.value}
              onChange={handleCheckboxChange}
            />
          </InputGroup>
        </Section>
      )
    })
  )
