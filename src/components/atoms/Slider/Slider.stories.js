import React from "react";
import styled, { css } from "styled-components";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import Slider from "atoms/Slider";
import { withInfo } from "@storybook/addon-info";

const Space = styled.div`
  padding: 10px;
  width: 50%;
`;

storiesOf("Atoms|Slider", module)
  .addDecorator(withInfo)
  .addDecorator(Padding)
  .add("Slider", () => (
    <Space>
      <Slider />
    </Space>
  ));
