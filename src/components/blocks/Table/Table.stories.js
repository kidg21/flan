import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "blocks/Table";
import DataTable from "./DataTable";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

const data = [
  { id: "a", color: "Owners/Units", name: "Multiple Owners (2 Units)" },
  { id: "b", color: "Master Parcel No.", name: "387483675638" },
  { id: "c", color: "Zoning", name: "No Zone" }
];

const data2 = [
  { id: "a", color: "", name: "" },
  { id: "b", color: "", name: "" },
  { id: "c", color: "", name: "" }
];

storiesOf("Blocks|Table", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Simple", () => <Table data={data} />)
  .add("Skeleton", () => <Table data={data2} />)
  .add("Heavy Data", () => <DataTable />);
