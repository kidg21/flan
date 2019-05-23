import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import LayerCard from "./LayerCard";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import CardBar from "elements/CardBar/CardBar";
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
  label: "Box 1"
};

const cbox_2 = {
  id: "cbox_2",
  label: "Box 2"
};

// Colors
storiesOf("Elements|Layer Card", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Layer Card", () => (
    <LayerCard
      layer={<CardBar layer="true" title="Demographics" />}
      legend={<MapLegend />}
    />
  ))
  .add("Layer Card with Options", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState(checked);
      const handleCheckboxChange = event => {
        setChecked(event.target.value);
      };
      return (
        <LayerCard
          layer={<CardBar layer="true" title="Demographics" />}
          legend={<MapLegend />}
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
