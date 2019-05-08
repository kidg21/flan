import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Header from "blocks/Panel/Header";
import Card, { CardList } from "layout/Card";
import Panel, { PanelSection } from "layout/Panel";
import Form, {
  Title,
  Section,
  CenteredSection,
  SectionName,
  InputGroup
} from "layout/Form";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Input from "atoms/Input";
import Radio from "atoms/Radio";
import Slider from "atoms/Slider";
import Button from "atoms/Button";
import Label from "atoms/Label";

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

const cbox_7 = {
  id: "cbox_7",

  label: "Yes"
};

const cbox_8 = {
  id: "cbox_8",

  label: "No"
};

storiesOf("Templates|Panel", module)
  .add("Filter Details Panel", () =>
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
              <Label right grey content="Reset" />
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
                <SectionName>Seller Information</SectionName>
                <Input
                  inputLabel="Seller Name"
                  placeholder="i.e. Mary Williams"
                  type="text"
                />
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
          <PanelSection>
            <CenteredSection>
              <Button label="Apply" isRound={true} isExtraSmall={true} />
            </CenteredSection>
          </PanelSection>
        </Panel>
      );
    })
  )

  .add("Property- Characteristics", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = event => {
        setChecked({ selectedValue: event.target.value });
      };

      return (
        <Panel>
          <PanelSection>
            <Header title="Characteristics" threeParts={true} />
          </PanelSection>
          <PanelSection body>
            <Form>
              <Label right grey content="Reset" />
              <Section>
                <SectionName>Year Built</SectionName>
                <Slider />
                <SectionName>Number of Units</SectionName>
                <Slider />
                <SectionName>Lot Size (Acre)</SectionName>
                <Slider />
                <SectionName>Lot Size (ft2)</SectionName>
                <Slider />
                <SectionName>Zoning (Assessor)</SectionName>
                <Input
                  inputLabel="Assessor"
                  placeholder="i.e. Mary Williams"
                  type="text"
                />
              </Section>
              <Section>
                <SectionName>In Opportunity Zone</SectionName>
                <InputGroup>
                  <Checkbox {...cbox_7} />
                  <Checkbox {...cbox_8} />
                </InputGroup>
              </Section>
            </Form>
          </PanelSection>
          <PanelSection>
            <CenteredSection>
              <Button label="Apply" isRound={true} isExtraSmall={true} />
            </CenteredSection>
          </PanelSection>
        </Panel>
      );
    })
  );
