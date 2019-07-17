import React from "react";
import { storiesOf } from "@storybook/react";
import styled, { css } from "styled-components";
import { Padding } from "helpers/Display";
import Grid from "helpers/Grid";
import { withInfo } from "@storybook/addon-info";
import NoData from "./NoData";

storiesOf("Atoms|NoData", module)
  .addDecorator(Padding)
  .add("Documentation", () => <NoData />);
