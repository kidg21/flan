import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { Padding } from "helpers/Display"
import { Section, SectionName, InputGroup } from "layout/Form"
import Checkbox from "atoms/Checkbox"

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
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Standard Checkbox", () => <Checkbox {...cbox_1} />)
  .add("Check Block (Responsive)", () => (
    <Section>
      <SectionName>Check Block (Responsive)</SectionName>
      <InputGroup>
        <Checkbox {...cbox_1} />
        <Checkbox {...cbox_2} />
        <Checkbox {...cbox_3} />
        <Checkbox {...cbox_4} />
        <Checkbox {...cbox_long} />
      </InputGroup>
    </Section>
  ))
  .add("Check Block (2 columns)", () => (
    <Section>
      <SectionName>Check Block (2 columns)</SectionName>
      <InputGroup col_2>
        <Checkbox {...cbox_1} />
        <Checkbox {...cbox_2} />
        <Checkbox {...cbox_3} />
        <Checkbox {...cbox_4} />
      </InputGroup>
    </Section>
  ))
  .add("Check Block (3 columns)", () => (
    <Section>
      <SectionName>Check Block (3 columns)</SectionName>
      <InputGroup col_3>
        <Checkbox {...cbox_1} />
        <Checkbox {...cbox_2} />
        <Checkbox {...cbox_3} />
        <Checkbox {...cbox_4} />
      </InputGroup>
    </Section>
  ))
  .add("Check Block (mixed columns)", () => (
    <Section>
      <SectionName>Check Block (mixed columns)</SectionName>
      <InputGroup col_2>
        <Checkbox {...cbox_1} />
        <Checkbox {...cbox_2} />
        <Checkbox {...cbox_3} />
        <Checkbox {...cbox_4} />
      </InputGroup>
      <InputGroup>
        <Checkbox {...cbox_long} />
      </InputGroup>
    </Section>
  ))
