/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import KeyItem from "./LegendItem";
import Legend, { Item } from "./Legend";

const color = "yellow";
const name = "water";

storiesOf("Blocks|Map Legend", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Key Item", () => {
    return <KeyItem color={color} name={name} />;
  })
  .add("Multi-Select", () => {
    return React.createElement(() => {
      const [activeMultiTab, setActiveMultiTab] = useState(false);
      const [activeMultiTab2, setActiveMultiTab2] = useState(false);
      const [activeMultiTab3, setActiveMultiTab3] = useState(false);
      return (
        <Legend title="Map Legend">
          <Item
            name="water"
            color="#CD5C5C"
            isSelected={activeMultiTab}
            onClick={() => {
              setActiveMultiTab(!activeMultiTab);
            }}
          />
          <Item
            name="grass"
            color="#FF9999"
            isSelected={activeMultiTab2}
            onClick={() => {
              setActiveMultiTab2(!activeMultiTab2);
            }}
          />
          <Item
            name="sun"
            color="#E9967A"
            isSelected={activeMultiTab3}
            onClick={() => {
              setActiveMultiTab3(!activeMultiTab3);
            }}
          />
          <Item
            name="s4"
            color="#E9967A"
            isSelected={activeMultiTab3}
            onClick={() => {
              setActiveMultiTab3(!activeMultiTab3);
            }}
          />
          <Item
            name="s5"
            color="#FFA07A"
            isSelected={activeMultiTab3}
            onClick={() => {
              setActiveMultiTab3(!activeMultiTab3);
            }}
          />
        </Legend>
      );
    });
  });
