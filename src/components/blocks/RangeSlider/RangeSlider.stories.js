import React from "react";
import styled, { css } from "styled-components";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import RangeSlider from "blocks/RangeSlider";
import { withInfo } from "@storybook/addon-info";

storiesOf("Blocks|RangeSlider", module)
  .addDecorator(withInfo)
  .addDecorator(Padding)
  .add("RangeSlider", () => (
    <RangeSlider
      label="Range Slider Label"
      minLabel="Min Label"
      maxLabel="Max Label"
    />
  ))
  .add("Skeleton", () => <RangeSlider />);
