import React from "react";
import { storiesOf } from "@storybook/react";
import TableExample from "./DisplayTable";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Icon from "atoms/Icon";

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
    return <TableExample data={Users} />;
  });
