import React from "react";
import { storiesOf } from "@storybook/react";
import TableExample from "./DisplayTable";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

storiesOf("Work|Table", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Simple", () => {
    return <TableExample />;
  });
