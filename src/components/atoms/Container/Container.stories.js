import React from "react";
import { storiesOf } from "@storybook/react";
import Container from "./Container";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

// Colors
storiesOf("Atoms|Container", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Container", () => {
    return <Container setHeight="300px" />;
  });
