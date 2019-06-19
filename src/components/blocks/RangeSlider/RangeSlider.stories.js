import React from "react";
import styled, { css } from "styled-components";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import RangeSlider from "blocks/RangeSlider";
import { withInfo } from "@storybook/addon-info";

const Space = styled.div`
  padding: 10px;
  width: 50%;
`;

storiesOf("Blocks|RangeSlider", module)
  .addDecorator(withInfo)
  .addDecorator(Padding)
  .add("Slider", () => (
    <Space>
      <RangeSlider label="Range Slider" />
    </Space>
  ));
