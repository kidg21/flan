import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Legend, { Item } from "./MapLegend";
import { withInfo } from "@storybook/addon-info";
import KeyItem from "./LegendItem";
import { Padding } from "helpers/Display";

// const data = [
//   { id: "a", color: "red", name: "Devin" },
//   { id: "b", color: "blue", name: "Gabe" },
//   { id: "c", color: "green", name: "Kim" }
// ];

const color = "yellow";
const name = "water";

storiesOf("Blocks|Map Legend", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Key Item", () => <KeyItem color={color} name={name} />)
  .add("Multi-Select", () =>
    React.createElement(() => {
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
    })
  );
