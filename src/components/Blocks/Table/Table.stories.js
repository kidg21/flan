import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "blocks/Table";
import DataTable from "./DataTable";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

storiesOf("Blocks|Table", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Simple Table", () => <Table />)
  .add("Data Table", () => <DataTable />);
