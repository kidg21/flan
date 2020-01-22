/* eslint-disable react/jsx-filename-extension */
import React from "react";

import NavigationPanelHeader from "elements/PanelHeaders/NavigationPanelHeader";
import Panel from "layout/Panel";
import DataRange from "blocks/DataRange";
import Form from "layout/Form";
import Checkbox, { CheckboxGroup } from "atoms/Checkbox";
import TextInput from "atoms/TextInput";
import Radio, { RadioGroup } from "atoms/Radio";
import RangeSlider from "blocks/RangeSlider";
import Button from "atoms/Button";

const radio1 = {
  id: "radio-1",
  name: "radio-group",
  value: "1",
  label: "Last 3 months",
  // checked: true
};
const radio2 = {
  id: "radio-2",
  name: "radio-group",
  value: "2",
  label: "Last 6 months",
};
const radio3 = {
  id: "radio-3",
  name: "radio-group",
  value: "3",
  label: "Last 12 months",
};
const cbox4 = {
  id: "cbox_4",
  label: "Grant Deed / Deed of Trust",
};
const cbox5 = {
  id: "cbox_5",
  label: "Warranty Deed",
};
const cbox6 = {
  id: "cbox_6",
  label: "Land Contract",
};
const cbox7 = {
  id: "cbox_7",
  label: "Yes",
};
const cbox8 = {
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
    return (
      <Panel
        header={<NavigationPanelHeader title="Last Market Sale" />}
        footer={<Button label="Apply" />}
      >
        <Form>
          <RadioGroup label="Last Sale Date">
            <Radio {...radio1} />
            <Radio {...radio2} />
            <Radio {...radio3} />
          </RadioGroup>
          <RangeSlider label="Last Sale Price" />
          <TextInput label="Seller Name" placeholder="i.e. Mary Williams" type="text" />
          <CheckboxGroup label="Last Sale Deed Type">
            <Checkbox {...cbox4} />
            <Checkbox {...cbox5} />
            <Checkbox {...cbox6} />
          </CheckboxGroup>
        </Form>
      </Panel>
    );
  })

  .add("Property- Characteristics", () => {
    return (
      <Panel
        header={<NavigationPanelHeader title="Characteristics" />}
        footer={<Button label="Apply" />}
      >
        <Form>
          <RangeSlider label="Year Built" />
          <RangeSlider label="Number of Units" />
          <RangeSlider label="Lot Size (Acre)" />
          <RangeSlider label="Lot Size (ft2)" />
          <TextInput label="Zoning (Assessor)" placeholder="i.e. Mary Williams" type="text" />
          <CheckboxGroup label="In Opportunity Zone">
            <Checkbox {...cbox7} />
            <Checkbox {...cbox8} />
          </CheckboxGroup>
        </Form>
      </Panel>
    );
  })

  .add("Property- New Characteristics", () => {
    return (
      <Panel
        header={<NavigationPanelHeader title="New Last Market Sale" />}
        footer={<Button label="Apply" />}
      >
        <Form>
          <DataRange
            label="Year Built"
            min={{
              label: "Min",
              options: options,
            }}
            max={{
              label: "Max",
              options: options,
            }}
          />
          <DataRange
            label="Number of Units"
            min={{
              label: "Min",
              options: options,
            }}
            max={{
              label: "Max",
              options: options,
            }}
          />
          <DataRange
            label="Range 3"
            min={{
              label: "Min",
              options: options,
            }}
            max={{
              label: "Max",
              options: options,
            }}
          />
          <DataRange
            label="Range 4"
            min={{
              label: "Min",
              options: options,
            }}
            max={{
              label: "Max",
              options: options,
            }}
          />
          <TextInput label="Zoning (Assessor)" placeholder="i.e. Mary Williams" type="text" />
          <CheckboxGroup label="In Opportunity Zone">
            <Checkbox {...cbox7} />
            <Checkbox {...cbox8} />
          </CheckboxGroup>
        </Form>
      </Panel>
    );
  })

  .add("Property- Aggregate", () => {
    return (
      <Panel
        header={<NavigationPanelHeader title="Aggregate Property" />}
        footer={<Button label="Apply" />}
      >
        <Form>
          <RangeSlider label="Aggregate Acreage" />
          <RangeSlider label="Aggregate Lot Count" />
          <RangeSlider label="Aggregated Lot Width Median" />
          <TextInput label="Zoning (Assessor)" placeholder="i.e. Mary Williams" type="text" />
          <CheckboxGroup label="In Opportunity Zone">
            <Checkbox {...cbox7} />
            <Checkbox {...cbox8} />
          </CheckboxGroup>
        </Form>
      </Panel>
    );
  })

  .add("Property- Value", () => {
    return (
      <Panel
        header={<NavigationPanelHeader title="Property Value" />}
        footer={<Button label="Apply" />}
      >
        <Form>
          <RangeSlider label="Assessed Value" />
          <RangeSlider label="Improvement Percentage" />
          <RangeSlider label="Assessed Land Value" />
          <RangeSlider label="Assessed Improvement Value" />
        </Form>
      </Panel>
    );
  })

  .add("Property- Location", () => {
    return (
      <Panel
        header={<NavigationPanelHeader title="Location" />}
        footer={<Button label="Apply" />}
      >
        <Form>
          <TextInput label="Street Name" placeholder="i.e. Main St." type="text" />
          <TextInput label="City" placeholder="i.e. New York City" type="text" />
          <TextInput label="State" placeholder="i.e. New York" type="text" />
          <TextInput label="Zip" placeholder="i.e. 92614" type="text" />
          <TextInput label="Country" placeholder="i.e. United States" type="text" />
        </Form>
      </Panel>
    );
  })

  .add("Property- Land Use", () => {
    return (
      <Panel
        header={<NavigationPanelHeader title="Land Use" />}
        footer={<Button label="Apply" />}
      >
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
      </Panel>
    );
  });
