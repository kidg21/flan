/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import NavigationPanelHeader from "elements/PanelHeaders/NavigationPanelHeader";
import Panel, { PanelSection } from "layout/Panel";
import DataRange from "blocks/DataRange";
import Form, { Section, CenteredSection, InputGroup, InputLabel } from "layout/Form";
import Checkbox, { CheckboxGroup } from "atoms/Checkbox";
import TextInput from "atoms/TextInput";
import Radio from "atoms/Radio";
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
const commercial = [
  {
    id: "cbox_9",
    label: "Auto Sales, Services",
  },
  {
    id: "cbox_10",
    label: "Cemeteries, Mortuaries",
  },
  {
    id: "cbox_11",
    label: "Restaurant or Bar",
  },
  {
    id: "cbox_12",
    label: "Hospitals",
  },
  {
    id: "cbox_13",
    label: "Mobile Home Park",
  },
  {
    id: "cbox_14",
    label: "Parking",
  },
];

const residential = [
  {
    id: "cbox_15",
    label: "Multi-Family",
  },
  {
    id: "cbox_16",
    label: "Mobile Homes",
  },
  {
    id: "cbox_17",
    label: "Multi-Family Dwelling",
  },
  {
    id: "cbox_18",
    label: "Condominium",
  },
  {
    id: "cbox_19",
    label: "Single-Family",
  },
  {
    id: "cbox_20",
    label: "Miscellaneous Residential",
  },
];

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "pistachio", label: "Pistachio" },
  { value: "mint chip", label: "Mint Chip" },
  { value: "cookie dough", label: "Cookie Dough" },
];

storiesOf("Templates|Panel/Property Filters", module)
  .add("Filter Details Panel", () => {
    return React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = (event) => {
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
                <InputLabel label="Last Sale Date" />
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
                <TextInput label="Seller Name" placeholder="i.e. Mary Williams" type="text" />
              </Section>
              <Section>
                <InputLabel label="Last Sale Deed Type" />
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
    });
  })

  .add("Filter Details Skeleton", () => {
    return React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = (event) => {
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
    });
  })

  .add("Property- Characteristics", () => {
    return React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = (event) => {
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
                  label="Zoning (Assessor)"
                  placeholder="i.e. Mary Williams"
                  type="text"
                />
              </Section>
              <Section>
                <InputLabel label="In Opportunity Zone" />
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
    });
  })

  .add("Property- New Characteristics", () => {
    return React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = (event) => {
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
                  label="Zoning (Assessor)"
                  placeholder="i.e. Mary Williams"
                  type="text"
                />
              </Section>
              <Section>
                <InputLabel label="In Opportunity Zone" />
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
    });
  })

  .add("Property- Aggregate", () => {
    return React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = (event) => {
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
                  label="Zoning (Assessor)"
                  placeholder="i.e. Mary Williams"
                  type="text"
                />
              </Section>
              <Section>
                <InputLabel label="In Opportunity Zone" />
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
    });
  })

  .add("Property- Value", () => {
    return React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = (event) => {
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
    });
  })

  .add("Property- Location", () => {
    return React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = (event) => {
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
                <TextInput label="Street Name" placeholder="i.e. Main St." type="text" />
                <TextInput label="City" placeholder="i.e. New York City" type="text" />
                <TextInput label="State" placeholder="i.e. New York" type="text" />
                <TextInput label="Zip" placeholder="i.e. 92614" type="text" />
                <TextInput label="Country" placeholder="i.e. United States" type="text" />
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
    });
  })

  .add("Property- Land Use", () => {
    return React.createElement(() => {
      const [checked, setChecked] = useState({ selectedValue: "" });

      const handleCheckboxChange = (event) => {
        setChecked({ selectedValue: event.target.value });
      };

      return (
        <Panel>
          <PanelSection>
            <NavigationPanelHeader title="Land Use" />
          </PanelSection>
          <PanelSection body>
            <Form>
              <CheckboxGroup
                id="Commercial"
                label="Commercial"
                data={commercial}
                helpText="Check all that apply"
                columns="2"
              />
              <CheckboxGroup
                id="Residential"
                label="Residential"
                data={residential}
                helpText="Check all that apply"
                columns="2"
              />
            </Form>
          </PanelSection>
          <PanelSection>
            <CenteredSection>
              <Button label="Apply" isRound="true" />
            </CenteredSection>
          </PanelSection>
        </Panel>
      );
    });
  });
