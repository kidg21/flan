/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import CardAccordion from "blocks/Accordion";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import LayerCardBar from "elements/CardBars/LayerCardBar";
import Table from "blocks/Table";

const data = [
  { id: "a", color: "Owners/Units", name: "Multiple Owners (2 Units)" },
  { id: "b", color: "Master Parcel No.", name: "387483675638" },
  { id: "c", color: "Zoning", name: "No Zone" },
];

storiesOf("Elements|Card Accordion", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Information ", () => {
    return React.createElement(() => {
      return (
        <CardAccordion header={<LayerCardBar text="Ownership" />}>
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
                },
              }}
            />
          }
        />
      );
    });
  });
