import React from "react";
import { storiesOf } from "@storybook/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Padding } from "helpers/Display";
import Icon from "atoms/Icon";
import NewRoles from "elements/UserRoles/NewRoles";
import NewUsers from "elements/UserRoles/NewUsers";

const Columns = ["Roles", "Folders", "Action"];

const Roles = [
  {
    roles: "Marketing",
    folders: "BDE811.Marketing",
    action: <Icon icon="edit" onClick="interactive" />,
  },
  {
    roles: "Acquisitions",
    folders: "BDE811.Acquisitions",
    action: <Icon icon="edit" onClick="interactive" />,
  },
  {
    roles: "Builder/Developer",
    folders: "BDE811.Acquisitions, BDE811.Marketing",
    action: <Icon icon="edit" onClick="interactive" />,
  },
  {
    roles: "Admin",
    folders: "BDE811.Acquisitions, BDE811.Marketing, BDE811.Public, BDE811.Marketing",
    action: <Icon icon="edit" onClick="interactive" />,
  },
  {
    roles: "Marketing",
    folders: "BDE811.Marketing",
    action: <Icon icon="edit" onClick="interactive" />,
  },
  {
    roles: "Acquisitions",
    folders: "BDE811.Acquisitions",
    action: <Icon icon="edit" onClick="interactive" />,
  },
  {
    roles: "Builder/Developer",
    folders: "BDE811.Acquisitions, BDE811.Marketing",
    action: <Icon icon="edit" onClick="interactive" />,
  },
  {
    roles: "Admin",
    folders: "BDE811.Acquisitions, BDE811.Marketing, BDE811.Public, BDE811.Marketing",
    action: <Icon icon="edit" onClick="interactive" />,
  },
];

const UserColumns = ["Name", "Roles", "Action"];

const Users = [
  { name: "brodarte", roles: "Developer", action: <Icon icon="edit" onClick="interactive" /> },
  { name: "egallagher", roles: "Marketing", action: <Icon icon="edit" onClick="interactive" /> },
  { name: "esugimoto", roles: null, action: <Icon icon="edit" onClick="interactive" /> },
  { name: "mwalker", roles: "Admin", action: <Icon icon="edit" onClick="interactive" /> },
  {
    name: "pnguyen",
    roles: ["Developer", "Acquisitions"],
    action: <Icon icon="edit" onClick="interactive" />,
  },
  { name: "brodarte", roles: "Developer", action: <Icon icon="edit" onClick="interactive" /> },
  { name: "egallagher", roles: "Marketing", action: <Icon icon="edit" onClick="interactive" /> },
  { name: "esugimoto", roles: null, action: <Icon icon="edit" onClick="interactive" /> },
  { name: "mwalker", roles: "Admin", action: <Icon icon="edit" onClick="interactive" /> },
  {
    name: "pnguyen",
    roles: ["Developer", "Acquisitions"],
    action: <Icon icon="edit" onClick="interactive" />,
  },
  { name: "brodarte", roles: "Developer", action: <Icon icon="edit" onClick="interactive" /> },
  { name: "egallagher", roles: "Marketing", action: <Icon icon="edit" onClick="interactive" /> },
  { name: "esugimoto", roles: null, action: <Icon icon="edit" onClick="interactive" /> },
  { name: "mwalker", roles: "Admin", action: <Icon icon="edit" onClick="interactive" /> },
  {
    name: "pnguyen",
    roles: ["Developer", "Acquisitions"],
    action: <Icon icon="edit" onClick="interactive" />,
  },
];

storiesOf("Templates|UserRoles", module)
  .add("Edit Roles", () => {
    return <NewRoles columns={Columns} roles={Roles} />;
  })
  .add("Edit Users", () => {
    return <NewUsers columns={UserColumns} users={Users} />;
  });
