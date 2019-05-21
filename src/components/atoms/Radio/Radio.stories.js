import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { Section, SectionName, InputGroup } from "../../layout/Form/Form";
import Radio from "atoms/Radio";
import RadioNotes from "./Radio.md";

const radio_1 = {
  id: "radio-1",
  name: "radio-group",
  value: "1",
  label: "Radio 1"
  // checked: true
};
const radio_2 = {
  id: "radio-2",
  name: "radio-group",
  value: "2",
  label: "Radio 2"
};
const radio_3 = {
  id: "radio-3",
  name: "radio-group",
  value: "3",
  label: "Radio 3"
};
const radio_4 = {
  id: "radio-4",
  name: "radio-group",
  value: "4",
  label: "Radio 4"
};
const radio_long = {
  id: "radio-5",
  name: "radio-group",
  value: "5",
  label:
    "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself."
};

storiesOf("Atoms|Radio", module)
  .addParameters({
    info: {
      text: "Radio info goes here..."
    },
    notes: {
      markdown: RadioNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Documentation", withInfo()(() => <Radio {...radio_1} />))
  .add("Radio (States)", () => (
    <Section>
      <SectionName>Checkbox Group (States)</SectionName>
      <InputGroup>
        <Radio label="Default" checked={false} />
        <Radio label="Selected" checked={true} />
        <Radio label="Error" error={true} />
        <Radio label="Disabled" disabled={true} />
      </InputGroup>
    </Section>
  ))
  .add("Radio Group (Responsive)", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });
      const handleCheckboxChange = event => {
        setChecked({ selectedValue: event.target.value });
      };
      return (
        <Section>
          <SectionName>Radio Group (Responsive)</SectionName>
          <InputGroup>
            <Radio
              {...radio_1}
              checked={checked.selectedValue === radio_1.value}
              onChange={handleCheckboxChange}
            />
            <Radio
              {...radio_2}
              checked={checked.selectedValue === radio_2.value}
              onChange={handleCheckboxChange}
            />
            <Radio
              {...radio_3}
              checked={checked.selectedValue === radio_3.value}
              onChange={handleCheckboxChange}
            />
            <Radio
              {...radio_4}
              checked={checked.selectedValue === radio_4.value}
              onChange={handleCheckboxChange}
            />
            <Radio
              {...radio_long}
              checked={checked.selectedValue === radio_long.value}
              onChange={handleCheckboxChange}
            />
          </InputGroup>
        </Section>
      );
    })
  )
  .add("Radio Group (2 columns)", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });
      const handleCheckboxChange = event => {
        setChecked({ selectedValue: event.target.value });
      };
      return (
        <Section>
          <SectionName>Radio Group (2 columns)</SectionName>
          <InputGroup col_2>
            <Radio
              {...radio_1}
              checked={checked.selectedValue === radio_1.value}
              onChange={handleCheckboxChange}
            />
            <Radio
              {...radio_2}
              checked={checked.selectedValue === radio_2.value}
              onChange={handleCheckboxChange}
            />
            <Radio
              {...radio_3}
              checked={checked.selectedValue === radio_3.value}
              onChange={handleCheckboxChange}
            />
            <Radio
              {...radio_4}
              checked={checked.selectedValue === radio_4.value}
              onChange={handleCheckboxChange}
            />
          </InputGroup>
        </Section>
      );
    })
  )
  .add("Radio Group (3 columns)", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });
      const handleCheckboxChange = event => {
        setChecked({ selectedValue: event.target.value });
      };
      return (
        <Section>
          <SectionName>Radio Group (3 columns)</SectionName>
          <InputGroup col_3>
            <Radio
              {...radio_1}
              checked={checked.selectedValue === radio_1.value}
              onChange={handleCheckboxChange}
            />
            <Radio
              {...radio_2}
              checked={checked.selectedValue === radio_2.value}
              onChange={handleCheckboxChange}
            />
            <Radio
              {...radio_3}
              checked={checked.selectedValue === radio_3.value}
              onChange={handleCheckboxChange}
            />
            <Radio
              {...radio_4}
              checked={checked.selectedValue === radio_4.value}
              onChange={handleCheckboxChange}
            />
          </InputGroup>
        </Section>
      );
    })
  )
  .add("Radio Group (mixed columns)", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });
      const handleCheckboxChange = event => {
        setChecked({ selectedValue: event.target.value });
      };
      return (
        <Section>
          <SectionName>Radio Group (mixed columns)</SectionName>
          <InputGroup col_2>
            <Radio
              {...radio_1}
              checked={checked.selectedValue === radio_1.value}
              onChange={handleCheckboxChange}
            />
            <Radio
              {...radio_2}
              checked={checked.selectedValue === radio_2.value}
              onChange={handleCheckboxChange}
            />
            <Radio
              {...radio_3}
              checked={checked.selectedValue === radio_3.value}
              onChange={handleCheckboxChange}
            />
            <Radio
              {...radio_4}
              checked={checked.selectedValue === radio_4.value}
              onChange={handleCheckboxChange}
            />
          </InputGroup>
          <InputGroup>
            <Radio
              {...radio_long}
              checked={checked.selectedValue === radio_long.value}
              onChange={handleCheckboxChange}
            />
          </InputGroup>
        </Section>
      );
    })
  );
