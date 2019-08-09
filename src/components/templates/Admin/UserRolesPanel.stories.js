/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import UserRoles, { UserEntry } from "elements/UserRoles";
import Bar from "blocks/Bar";
import Button from "atoms/Button";
import Grid from "layout/Grid";
import Panel, { PanelSection } from "layout/Panel";

const Options = [
  { value: "Marketing", label: "Marketing" },
  { value: "Acquisitions", label: "Acquisitions" },
  { value: "Developer", label: "Builder / Developer" },
  { value: "Admin", label: "Admin" },
];

storiesOf("Templates|Admin", module).add("User Edit Roles", () => {
  return React.createElement(() => {
    return (
      <Panel>
        <MainPanelHeader title="User Roles / Permissions" />
        <PanelSection body>
          <UserRoles
            right={
              <Grid columns="2">
                <Button buttonLabel="Add User" />
                <Button buttonLabel="Add/Edit Roles" />
              </Grid>
            }
          >
            <UserEntry user="Bob" options={Options} />
            <UserEntry user="Carol" options={Options} />
            <UserEntry user="Jane" options={Options} />
            <UserEntry user="Mark" options={Options} />
            <UserEntry user="Ben" options={Options} />
            <UserEntry user="Doug" options={Options} />
          </UserRoles>
        </PanelSection>
        <PanelSection>
          <Bar center={<Button buttonLabel="Apply" />} />
        </PanelSection>
      </Panel>
    );
  });
});
