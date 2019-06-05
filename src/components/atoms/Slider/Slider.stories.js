import React from "react";
import styled, { css } from "styled-components";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import Slider from "atoms/Slider";
import { withInfo } from "@storybook/addon-info";

storiesOf("Atoms|Slider", module)
  .addDecorator(withInfo)
  .addDecorator(Padding)
  .add("Slider", () => <Slider />);
