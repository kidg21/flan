import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "./Table";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Icon from "atoms/Icon";

const data = [
  { id: "a", name: "Owners/Units", value: "Multiple Owners (2 Units)" },
  { id: "b", name: "Master Parcel No.", value: "387483675638" },
  { id: "c", name: "Zoning", value: "No Zone" },
];

const Columns = ["Name", "Roles", "Action"];

const Users = [
  { name: "brodarte", roles: "Developer", action: <Icon icon="edit" /> },
  { name: "egallagher", roles: "Marketing", action: <Icon icon="edit" /> },
  { name: "esugimoto", roles: null, action: <Icon icon="edit" /> },
  { name: "mwalker", roles: "Admin", action: <Icon icon="edit" /> },
  { name: "pnguyen", roles: ["Developer", "Acquisitions"], action: <Icon icon="edit" /> },
  { name: "brodarte", roles: "Developer", action: <Icon icon="edit" /> },
  { name: "egallagher", roles: "Marketing", action: <Icon icon="edit" /> },
  { name: "esugimoto", roles: null, action: <Icon icon="edit" /> },
  { name: "mwalker", roles: "Admin", action: <Icon icon="edit" /> },
  { name: "pnguyen", roles: ["Developer", "Acquisitions"], action: <Icon icon="edit" /> },
  { name: "brodarte", roles: "Developer", action: <Icon icon="edit" /> },
  { name: "egallagher", roles: "Marketing", action: <Icon icon="edit" /> },
  { name: "esugimoto", roles: null, action: <Icon icon="edit" /> },
  { name: "mwalker", roles: "Admin", action: <Icon icon="edit" /> },
  { name: "pnguyen", roles: ["Developer", "Acquisitions"], action: <Icon icon="edit" /> },
];

storiesOf("Work|Table", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Simple", () => {
    return <Table data={data} style="legend" />;
  })
  .add("Data Table", () => {
    return <Table columns={Columns} data={Users} scroll header />;
  });
