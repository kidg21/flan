import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import UserRoles, { UserEntry } from "elements/UserRoles";
import Card, { Piece } from "layout/Card";
import Bar from "blocks/Bar";
import Button from "atoms/Button";
import Panel, { PanelSection } from "layout/Panel";

const Options = [
  { value: "View", label: "View" },
  { value: "Edit/View", label: "Edit/View" },
  { value: "Execute", label: "Execute" },
  { value: "Admin", label: "Admin" },
];

storiesOf("Templates|Admin", module).add("User Edit Roles", () =>
  React.createElement(() => {
    return (
      <Panel>
        <MainPanelHeader title="User Roles / Permissions" />
        <PanelSection body>
          <UserRoles>
            <UserEntry user="Bob" options={Options} />
            <UserEntry user="Bob" options={Options} />
            <UserEntry user="Bob" options={Options} />
            <UserEntry user="Bob" options={Options} />
            <UserEntry user="Bob" options={Options} />
            <UserEntry user="Bob" options={Options} />
          </UserRoles>
        </PanelSection>
        <PanelSection>
          <Bar center={<Button buttonLabel="Apply" />} />
        </PanelSection>
      </Panel>
    );
  }),
);
