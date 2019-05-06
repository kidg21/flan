import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Header from "blocks/Panel/Header";
import Card from "blocks/Card/Card";
import Panel, { PanelSection } from "layout/Panel";
import Form, { Title, Section, SectionName, InputGroup } from "layout/Form";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Input from "atoms/Input";
import Radio from "atoms/Radio";
import Slider from "atoms/Slider";

const radio_1 = {
  id: "radio-1",

  name: "radio-group",

  value: "1",

  label: "Last 3 months"

  // checked: true
};

const radio_2 = {
  id: "radio-2",

  name: "radio-group",

  value: "2",

  label: "Last 6 months"
};

const radio_3 = {
  id: "radio-3",

  name: "radio-group",

  value: "3",

  label: "Last 12 months"
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

const cbox_1 = {
  id: "cbox_1",

  label: "First Checkbox"
};

const cbox_2 = {
  id: "cbox_2",

  label: "Second Checkbox"
};

const cbox_3 = {
  id: "cbox_3",

  label: "Little t abottle friend."
};

const cbox_4 = {
  id: "cbox_4",

  label: "Grant Deed / Deed of Trust"
};

const cbox_5 = {
  id: "cbox_5",

  label: "Warranty Deed"
};

const cbox_6 = {
  id: "cbox_6",

  label: "Land Contract"
};

storiesOf("Templates|Panel", module).add("Filter Details Panel", () =>
  React.createElement(() => {
    const [checked, setChecked] = useState({ selectedValue: "" });

    const handleCheckboxChange = event => {
      setChecked({ selectedValue: event.target.value });
    };

    return (
      <Panel>
        <PanelSection>
          <Header title="Last Market Sale" threeParts={true} />
        </PanelSection>
        <PanelSection body>
          <Form>
            <Section>
              <SectionName>Last Sale Date</SectionName>
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
              </InputGroup>
            </Section>
            <Section>
              <SectionName>Last Sale Price</SectionName>
              <Slider />
            </Section>
            <Section>
              <SectionName>Seller Name</SectionName>
              <Input placeholder="i.e. Mary Williams" type="text" />
            </Section>
            <Section>
              <SectionName>Last Sale Deed Type</SectionName>
              <InputGroup>
                <Checkbox {...cbox_4} />
                <Checkbox {...cbox_5} />
                <Checkbox {...cbox_6} />
              </InputGroup>
            </Section>
          </Form>
        </PanelSection>
      </Panel>
    );
  })
);
