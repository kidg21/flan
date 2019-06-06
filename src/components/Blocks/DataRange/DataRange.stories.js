import React from "react";
import styled, { css } from "styled-components";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import DataRange from "./DataRange";
import { withInfo } from "@storybook/addon-info";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "pistachio", label: "Pistachio" },
  { value: "mint chocolate chip", label: "Mint Chocolate Chip" },
  { value: "cookie dough", label: "Cookie Dough" }
];

storiesOf("Blocks|Data Range", module)
  .addDecorator(withInfo)
  .addDecorator(Padding)
  .add("Default", () => (
    <DataRange
      label="Default Data Range"
      firstOptions={options}
      secondOptions={options}
    />
  ));
