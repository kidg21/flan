import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import NavigationPanelHeader from "elements/PanelHeaders/NavigationPanelHeader";
import Panel, { PanelSection } from "layout/Panel";
import DataRange from "blocks/DataRange";
import Form, {
  Title,
  Section,
  CenteredSection,
  SectionName,
  InputGroup,
  InputLabel,
} from "layout/Form";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Command from "atoms/Command";
import TextInput from "atoms/TextInput";
import Radio from "atoms/Radio";
import Slider from "atoms/Slider";
import RangeSlider from "blocks/RangeSlider";
import Button from "atoms/Button";

const radio_1 = {
  id: "radio-1",
  name: "radio-group",
  value: "1",
  label: "Last 3 months",
  // checked: true
};
const radio_2 = {
  id: "radio-2",
  name: "radio-group",
  value: "2",
  label: "Last 6 months",
};
const radio_3 = {
  id: "radio-3",
  name: "radio-group",
  value: "3",
  label: "Last 12 months",
};
const radio_4 = {
  id: "radio-4",
  name: "radio-group",
  value: "4",
  label: "Radio 4",
};

const radio_long = {
  id: "radio-5",
  name: "radio-group",
  value: "5",
  label:
    "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself.",
};
const cbox_1 = {
  id: "cbox_1",
  label: "First Checkbox",
};
const cbox_2 = {
  id: "cbox_2",
  label: "Second Checkbox",
};
const cbox_3 = {
  id: "cbox_3",
  label: "Little t abottle friend.",
};
const cbox_4 = {
  id: "cbox_4",
  label: "Grant Deed / Deed of Trust",
};
const cbox_5 = {
  id: "cbox_5",
  label: "Warranty Deed",
};
const cbox_6 = {
  id: "cbox_6",
  label: "Land Contract",
};
const cbox_7 = {
  id: "cbox_7",
  label: "Yes",
};
const cbox_8 = {
  id: "cbox_8",
  label: "No",
};
const cbox_9 = {
  id: "cbox_9",
  label: "Auto Sales, Services",
};
const cbox_10 = {
  id: "cbox_10",
  label: "Cemeteries, Mortuaries",
};
const cbox_11 = {
  id: "cbox_11",
  label: "Restaurant or Bar",
};
const cbox_12 = {
  id: "cbox_12",
  label: "Hospitals",
};
const cbox_13 = {
  id: "cbox_13",
  label: "Mobile Home Park",
};
const cbox_14 = {
  id: "cbox_14",
  label: "Parking",
};
const cbox_15 = {
  id: "cbox_15",
  label: "Multi-Family",
};
const cbox_16 = {
  id: "cbox_16",
  label: "Mobile Homes",
};
const cbox_17 = {
  id: "cbox_17",
  label: "Multi-Family Dwelling",
};
const cbox_18 = {
  id: "cbox_18",
  label: "Condominium",
};
const cbox_19 = {
  id: "cbox_19",
  label: "Single-Family",
};
const cbox_20 = {
  id: "cbox_20",
  label: "Miscellaneous Residential",
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "pistachio", label: "Pistachio" },
  { value: "mint chip", label: "Mint Chip" },
  { value: "cookie dough", label: "Cookie Dough" },
];

storiesOf("Templates|Panel/Property Filters", module)
  .add("Filter Details Panel", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = event => {
        setChecked({ selectedValue: event.target.value });
      };

      return (
        <Panel>
          <PanelSection>
            <NavigationPanelHeader title="Last Market Sale" />
          </PanelSection>
          <PanelSection body>
            <Form>
              {/* <Bar type="one" right={<a> Reset </a>} /> */}
              {/* <Label right grey content="Reset" /> */}
              <Section>
                <InputLabel inputLabel="Last Sale Date" />
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
                <RangeSlider label="Last Sale Price" />
              </Section>
              <Section>
                <TextInput
                  inputLabel="Seller Name"
                  placeholder="i.e. Mary Williams"
                  type="text"
                />
              </Section>
              <Section>
                <InputLabel inputLabel="Last Sale Deed Type" />
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
              <Button label="Apply" isRound="true" />
            </CenteredSection>
          </PanelSection>
        </Panel>
      );
    }),
  )

  .add("Filter Details Skeleton", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = event => {
        setChecked({ selectedValue: event.target.value });
      };

      return (
        <Panel>
          <PanelSection>
            <NavigationPanelHeader />
          </PanelSection>
          <PanelSection body>
            <Form>
              {/* <Bar type="one" right={<a> Reset </a>} /> */}
              {/* <Label right grey content="Reset" /> */}
              <Section>
                <InputLabel />
                <InputGroup>
                  <Radio />

                  <Radio />

                  <Radio />
                </InputGroup>
                <DataRange />
              </Section>
              <Section>
                <RangeSlider />
              </Section>
              <Section>
                <TextInput />
              </Section>
              <Section>
                <InputLabel />
                <InputGroup>
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                </InputGroup>
              </Section>
            </Form>
          </PanelSection>
          <PanelSection>
            <CenteredSection>
              <Button />
            </CenteredSection>
          </PanelSection>
        </Panel>
      );
    }),
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
            <NavigationPanelHeader title="Characteristics" />
          </PanelSection>
          <PanelSection body>
            <Form>
              {/* <Bar type="one" right={<a> Reset </a>} /> */}
              <Section>
                <RangeSlider label="Year Built" />
                <RangeSlider label="Number of Units" />
                <RangeSlider label="Lot Size (Acre)" />
                <RangeSlider label="Lot Size (ft2)" />
              </Section>
              <Section>
                <TextInput
                  inputLabel="Zoning (Assessor)"
                  placeholder="i.e. Mary Williams"
                  type="text"
                />
              </Section>
              <Section>
                <InputLabel inputLabel="In Opportunity Zone" />
                <InputGroup>
                  <Checkbox {...cbox_7} />
                  <Checkbox {...cbox_8} />
                </InputGroup>
              </Section>
            </Form>
          </PanelSection>
          <PanelSection>
            <CenteredSection>
              <Button label="Apply" isRound="true" />
            </CenteredSection>
          </PanelSection>
        </Panel>
      );
    }),
  )

  .add("Property- New Characteristics", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = event => {
        setChecked({ selectedValue: event.target.value });
      };

      return (
        <Panel>
          <PanelSection>
            <NavigationPanelHeader title="New Last Market Sale" />
          </PanelSection>
          <PanelSection body>
            <Form>
              {/* <Bar onePart={true} secondSlot={<a> Reset </a>} /> */}
              <Section>
                <DataRange
                  firstOptions={options}
                  secondOptions={options}
                  label="Year Built"
                  labelMin="Min"
                  labelMax="Max"
                />
                <DataRange
                  firstOptions={options}
                  secondOptions={options}
                  label="Number of Units"
                  labelMin="Min"
                  labelMax="Max"
                />
                <DataRange
                  firstOptions={options}
                  secondOptions={options}
                  label="Range 3"
                  labelMin="Min"
                  labelMax="Max"
                />
                <DataRange
                  firstOptions={options}
                  secondOptions={options}
                  label="Range 4"
                  labelMin="Min"
                  labelMax="Max"
                />

                <TextInput
                  inputLabel="Zoning (Assessor)"
                  placeholder="i.e. Mary Williams"
                  type="text"
                />
              </Section>
              <Section>
                <InputLabel inputLabel="In Opportunity Zone" />
                <InputGroup>
                  <Checkbox {...cbox_7} />
                  <Checkbox {...cbox_8} />
                </InputGroup>
              </Section>
            </Form>
          </PanelSection>
          <PanelSection>
            <CenteredSection>
              <Button label="Apply" isRound="true" />
            </CenteredSection>
          </PanelSection>
        </Panel>
      );
    }),
  )

  .add("Property- Aggregate", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = event => {
        setChecked({ selectedValue: event.target.value });
      };

      return (
        <Panel>
          <PanelSection>
            <NavigationPanelHeader title="Aggregate Property" />
          </PanelSection>
          <PanelSection body>
            <Form>
              {/* <Bar type="one" right={<a> Reset </a>} /> */}
              <Section>
                <RangeSlider label="Aggregate Acreage" />
                <RangeSlider label="Aggregate Lot Count" />
                <RangeSlider label="Aggregated Lot Width Median" />
              </Section>
              <Section>
                <TextInput
                  inputLabel="Zoning (Assessor)"
                  placeholder="i.e. Mary Williams"
                  type="text"
                />
              </Section>
              <Section>
                <InputLabel inputLabel="In Opportunity Zone" />
                <InputGroup>
                  <Checkbox {...cbox_7} />
                  <Checkbox {...cbox_8} />
                </InputGroup>
              </Section>
            </Form>
          </PanelSection>
          <PanelSection>
            <CenteredSection>
              <Button label="Apply" isRound="true" />
            </CenteredSection>
          </PanelSection>
        </Panel>
      );
    }),
  )

  .add("Property- Value", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = event => {
        setChecked({ selectedValue: event.target.value });
      };

      return (
        <Panel>
          <PanelSection>
            <NavigationPanelHeader title="Property Value" />
          </PanelSection>
          <PanelSection body>
            <Form>
              {/* <Bar type="one" right={<a> Reset </a>} /> */}
              <Section>
                <RangeSlider label="Assessed Value" />
                <RangeSlider label="Improvement Percentage" />
                <RangeSlider label="Assessed Land Value" />
                <RangeSlider label="Assessed Improvement Value" />
              </Section>
            </Form>
          </PanelSection>
          <PanelSection>
            <CenteredSection>
              <Button label="Apply" isRound="true" />
            </CenteredSection>
          </PanelSection>
        </Panel>
      );
    }),
  )

  .add("Property- Location", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = event => {
        setChecked({ selectedValue: event.target.value });
      };

      return (
        <Panel>
          <PanelSection>
            <NavigationPanelHeader title="Location" />
          </PanelSection>
          <PanelSection body>
            <Form>
              {/* <Bar type="one" right={<a> Reset </a>} /> */}
              <Section>
                <TextInput
                  inputLabel="Street Name"
                  placeholder="i.e. Main St."
                  type="text"
                />
                <TextInput
                  inputLabel="City"
                  placeholder="i.e. New York City"
                  type="text"
                />
                <TextInput
                  inputLabel="State"
                  placeholder="i.e. New York"
                  type="text"
                />
                <TextInput
                  inputLabel="Zip"
                  placeholder="i.e. 92614"
                  type="text"
                />
                <TextInput
                  inputLabel="Country"
                  placeholder="i.e. United States"
                  type="text"
                />
              </Section>
            </Form>
          </PanelSection>
          <PanelSection>
            <CenteredSection>
              <Button label="Apply" isRound="true" />
            </CenteredSection>
          </PanelSection>
        </Panel>
      );
    }),
  )

  .add("Property- Land Use", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = event => {
        setChecked({ selectedValue: event.target.value });
      };

      return (
        <Panel>
          <PanelSection>
            <NavigationPanelHeader title="Land Use" />
          </PanelSection>
          <PanelSection body>
            <Form>
              {/* <Bar type="one" right={<a> Reset </a>} /> */}
              <Section>
                <SectionName>Commercial</SectionName>
                <InputGroup col_2>
                  <Checkbox {...cbox_9} />
                  <Checkbox {...cbox_10} />
                  <Checkbox {...cbox_11} />
                  <Checkbox {...cbox_12} />
                  <Checkbox {...cbox_13} />
                  <Checkbox {...cbox_14} />
                </InputGroup>
                <SectionName>Residential</SectionName>
                <InputGroup col_2>
                  <Checkbox {...cbox_15} />
                  <Checkbox {...cbox_16} />
                  <Checkbox {...cbox_17} />
                  <Checkbox {...cbox_18} />
                  <Checkbox {...cbox_19} />
                  <Checkbox {...cbox_20} />
                </InputGroup>
              </Section>
            </Form>
          </PanelSection>
          <PanelSection>
            <CenteredSection>
              <Button label="Apply" isRound="true" />
            </CenteredSection>
          </PanelSection>
        </Panel>
      );
    }),
  );
