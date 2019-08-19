/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "atoms/Button";
import Grid from "layout/Grid";
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
      right={
        <Grid columns="2">
          <Button buttonLabel="Add User" />
          <Button buttonLabel="Add/Edit Roles" />
        </Grid>
      }
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
