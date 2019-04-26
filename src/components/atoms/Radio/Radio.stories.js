import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import { Section, SectionName, InputGroup } from "../../layout/Form/Form";
import Radio from "atoms/Radio";

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
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .addDecorator(story => <div style={{ padding: "2rem" }}>{story()}</div>)

  .add("Standard Radio", () => (
    <Radio
      label="Radio 1"
      id="radio-1"
      name="radio-group"
      value="1"
      checked={true}
    />
  ))
  .add("Radio Block (Responsive)", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });
      const handleCheckboxChange = event => {
        setChecked({ selectedValue: event.target.value });
      };
      return (
        <Section>
          <SectionName>Radio Block (Responsive)</SectionName>
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
  .add("Radio Block (2 columns)", () => (
    <Section>
      <SectionName>Radio Block (2 columns)</SectionName>
      <InputGroup twoColumns>
        <Radio {...radio_1} />
        <Radio {...radio_2} />
        <Radio {...radio_3} />
        <Radio {...radio_4} />
      </InputGroup>
    </Section>
  ))
  .add("Radio Block (3 columns)", () => (
    <Section>
      <SectionName>Radio Block (3 columns)</SectionName>
      <InputGroup threeColumns>
        <Radio {...radio_1} />
        <Radio {...radio_2} />
        <Radio {...radio_3} />
        <Radio {...radio_4} />
      </InputGroup>
    </Section>
  ))
  .add("Radio Block (mixed columns)", () => (
    <Section>
      <SectionName>Radio Block (mixed columns)</SectionName>
      <InputGroup threeColumns>
        <Radio {...radio_1} />
        <Radio {...radio_2} />
        <Radio {...radio_3} />
        <Radio {...radio_4} />
      </InputGroup>
      <InputGroup oneColumn>
        <Radio {...radio_long} />
      </InputGroup>
    </Section>
  ));
