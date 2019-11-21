/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import CardAccordion from "elements/CardAccordion";
import LayerCardBar from "elements/CardBars/LayerCardBar";
import InformationCardBar from "elements/CardBars/InformationCardBar";
import Table from "blocks/Table";
import Checkbox from "atoms/Checkbox";
import MapLegend from "blocks/MapLegend";
import Form, { Section } from "layout/Form";

const cbox_1 = {
  id: "cbox_1",
  label: "Option 1"
};

const cbox_2 = {
  id: "cbox_2",
  label: "Option 2"
};

const data = [
  { id: "a", color: "Owners/Units", name: "Multiple Owners (2 Units)" },
  { id: "b", color: "Master Parcel No.", name: "387483675638" },
  { id: "c", color: "Zoning", name: "No Zone" }
];

storiesOf("Elements|Card Accordion", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Information ", () => {
    return React.createElement(() => {
      return (
        <CardAccordion header={<InformationCardBar text="Ownership" />}>
          <Table data={data} />
        </CardAccordion>
      );
    });
  })
  .add("Layer ", () => {
    return React.createElement(() => {
      const [switchChecked, setSwitchChecked] = useState("");
      return (
        <CardAccordion
          header={
            <LayerCardBar
              text="Demographics"
              switchProps={{
                checked: switchChecked,
                onChange: () => {
                  setSwitchChecked(!switchChecked);
                }
              }}
            />
          }
        >
          <MapLegend />
        </CardAccordion>
      );
    });
  })
  .add("Layer with Options ", () => {
    return React.createElement(() => {
      const [switchChecked, setSwitchChecked] = useState("");
      const [checked, setChecked] = useState(checked);
      const handleCheckboxChange = event => {
        setChecked(event.target.value);
      };
      return (
        <CardAccordion
          header={
            <LayerCardBar
              text="Demographics"
              switchProps={{
                checked: switchChecked,
                onChange: () => {
                  setSwitchChecked(!switchChecked);
                }
              }}
            />
          }
          hasOptions="true"
          options={
            <Form>
              <Section title="Demographic Options">
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
              </Section>
            </Form>
          }
        >
          <MapLegend />
        </CardAccordion>
      );
    });
  });
