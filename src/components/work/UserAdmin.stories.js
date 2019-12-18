/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Icon from "atoms/Icon";
import NewRoles from "elements/UserRoles/NewRoles";
import NewUsers from "elements/UserRoles/NewUsers";

const Columns = ["Roles", "Folders", "Action"];

function doNothing() {
  // do nothing
}

const Roles = [
  {
    roles: "Marketing",
    folders: "BDE811.Marketing",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    roles: "Acquisitions",
    folders: "BDE811.Acquisitions",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    roles: "Builder/Developer",
    folders: "BDE811.Acquisitions, BDE811.Marketing",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    roles: "Admin",
    folders:
      "BDE811.Acquisitions, BDE811.Marketing, BDE811.Public, BDE811.Marketing",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    roles: "Marketing",
    folders: "BDE811.Marketing",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    roles: "Acquisitions",
    folders: "BDE811.Acquisitions",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    roles: "Builder/Developer",
    folders: "BDE811.Acquisitions, BDE811.Marketing",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    roles: "Admin",
    folders:
      "BDE811.Acquisitions, BDE811.Marketing, BDE811.Public, BDE811.Marketing",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
];

const UserColumns = ["Name", "Roles", "Action"];

const Users = [
  {
    name: "brodarte",
    roles: "Developer",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    name: "egallagher",
    roles: "Marketing",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    name: "esugimoto",
    roles: null,
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    name: "mwalker",
    roles: "Admin",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    name: "pnguyen",
    roles: ["Developer", "Acquisitions"],
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    name: "brodarte",
    roles: "Developer",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    name: "egallagher",
    roles: "Marketing",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    name: "esugimoto",
    roles: null,
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    name: "mwalker",
    roles: "Admin",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    name: "pnguyen",
    roles: ["Developer", "Acquisitions"],
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    name: "brodarte",
    roles: "Developer",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    name: "egallagher",
    roles: "Marketing",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    name: "esugimoto",
    roles: null,
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    name: "mwalker",
    roles: "Admin",
    action: <Icon icon="edit" onClick={doNothing} />,
  },
  {
    name: "pnguyen",
    roles: ["Developer", "Acquisitions"],
    action: <Icon icon="edit" onClick={doNothing} />,
  },
];

storiesOf("Templates|UserRoles", module)
  .add("Edit Roles", () => {
    return <NewRoles columns={Columns} roles={Roles} />;
  })
  .add("Edit Users", () => {
    return <NewUsers columns={UserColumns} users={Users} />;
  });
