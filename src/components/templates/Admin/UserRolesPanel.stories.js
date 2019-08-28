/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Bar from "blocks/Bar";
import Container from "atoms/Container";
import Card, { Piece } from "layout/Card";
import Button from "atoms/Button";
import Grid from "layout/Grid";
import Panel, { PanelSection } from "layout/Panel";
import Search from "blocks/Search";

// const Options = [
//   { value: "Marketing", label: "Marketing" },
//   { value: "Acquisitions", label: "Acquisitions" },
//   { value: "Developer", label: "Builder / Developer" },
//   { value: "Admin", label: "Admin" },
// ];

storiesOf("Templates|Admin", module).add("User Edit Roles", () => {
  return React.createElement(() => {
    return (
      <Panel>
        <MainPanelHeader title="User Roles" />
        <PanelSection >
          <Bar
            left={<Search placeholder="Search for a User" />}
            right={<Button buttonLabel="+Add User" />}
          />
          <Container setHeight="100px" >
            <Bar left="Name" />
            <Bar left="Name" />
            <Bar left="Name" />
            <Bar left="Name" />
            <Bar left="Name" />
          </Container>
        </PanelSection>
      </Panel>
    );
  });
});
