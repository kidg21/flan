/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "atoms/Button";
import UserRoles, { UserEntry } from "./UserRoles";

const Options = [
  { value: "Marketing", label: "Marketing" },
  { value: "Acquisitions", label: "Acquisitions" },
  { value: "Developer", label: "Builder / Developer" },
  { value: "Admin", label: "Admin" },
];

storiesOf("Elements|User Roles", module).add("Default", () => {
  return (
    <UserRoles
      left={<Button width="20%" fulLWidth buttonLabel="Add User" type="solid" />}
      right={<Button width="20%" fullWidth buttonLabel="Add / Edit Roles" type="solid" />}
    >
      <UserEntry user="Bob" options={Options} />
      <UserEntry user="Bob 1" options={Options} />
      <UserEntry user="Bob 2" options={Options} />
      <UserEntry user="Bob 3" options={Options} />
      <UserEntry user="Bob 4" options={Options} />
      <UserEntry user="Bob 5" options={Options} />
    </UserRoles>
  );
});
