import React from "react";
import styled, { css } from "styled-components";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import DataRange from "./DataRange";
import { withInfo } from "@storybook/addon-info";

const options = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" }
];

storiesOf("Blocks|Data Range", module)
  .addDecorator(withInfo)
  .addDecorator(Padding)
  .add("Default", () => (
    <DataRange
      label="Default Data Range"
      labelMin="Min"
      optionsMin={options}
      labelMax="Max"
      optionsMax={options}
    />
  ))
  .add("Skeleton", () => <DataRange />);
