import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import CardAccordion from "./CardAccordion";
import CardBar from "elements/CardBar/CardBar";
import Table from "blocks/Table";
import Checkbox from "atoms/Checkbox";
import MapLegend from "blocks/MapLegend";
import Form, {
  Title,
  Section,
  SectionName,
  InputGroup
} from "layout/Form/Form";

const cbox_1 = {
  id: "cbox_1",
  label: "Option 1"
};

const cbox_2 = {
  id: "cbox_2",
  label: "Option 2"
};

storiesOf("Elements|Card Accordion", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Information ", () =>
    React.createElement(() => {
      return (
        <CardAccordion
          header={<CardBar info="true" title="Ownership" />}
          body={<Table />}
        />
      );
    })
  )
  .add("Layer ", () =>
    React.createElement(() => {
      const [switchChecked, setSwitchChecked] = useState("");
      return (
        <CardAccordion
          header={
            <CardBar
              layer="true"
              title="Demographics"
              switchProps={{
                checked: switchChecked,
                onChange: () => {
                  setSwitchChecked(!switchChecked);
                }
              }}
            />
          }
          body={<MapLegend />}
        />
      );
    })
  )
  .add("Layer with Options ", () =>
    React.createElement(() => {
      const [switchChecked, setSwitchChecked] = useState("");
      const [checked, setChecked] = useState(checked);
      const handleCheckboxChange = event => {
        setChecked(event.target.value);
      };
      return (
        <CardAccordion
          header={
            <CardBar
              layer="true"
              title="Demographics"
              switchProps={{
                checked: switchChecked,
                onChange: () => {
                  setSwitchChecked(!switchChecked);
                }
              }}
            />
          }
          body={<MapLegend />}
          hasOptions="true"
          options={
            <Section>
              <SectionName>Demographic Options</SectionName>
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
              </InputGroup>
            </Section>
          }
        />
      );
    })
  );