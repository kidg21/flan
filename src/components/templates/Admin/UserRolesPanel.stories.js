/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Bar from "blocks/Bar";
import InformationCardBar from "elements/CardBars/InformationCardBar";
import Container from "atoms/Container";
import Button from "atoms/Button";
import Panel, { PanelSection } from "layout/Panel";
import Search from "blocks/Search";
import SelectMenu from "atoms/SelectMenu";

const roles = [
  { value: "Marketing", label: "Marketing" },
  { value: "Acquisitions", label: "Acquisitions" },
  { value: "Developer", label: "Builder / Developer" },
  { value: "Admin", label: "Admin" },
];

const permissions = [
  { value: "Read", label: "Read" },
  { value: "Write", label: "Write" },
  { value: ["Read", "Write"], label: "Read / Write" },
];

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
          <Container height="250px" >
            <Bar left="Ben" right={<SelectMenu options={roles} selectOptions={["Developer"]} multiSelect />} rightWidth="50%" />
            <Bar left="Erica" right={<SelectMenu options={roles} multiSelect />} rightWidth="50%" />
            <Bar left="Liz" right={<SelectMenu options={roles} selectOptions={["Marketing"]} multiSelect />} rightWidth="50%" />
            <Bar left="Mark" right={<SelectMenu options={roles} selectOptions={["Admin"]} multiSelect />} rightWidth="50%" />
            <Bar left="Patrick" right={<SelectMenu options={roles} selectOptions={["Developer", "Acquisitions"]} multiSelect />} rightWidth="50%" />
          </Container>
        </PanelSection>
      </Panel>
    );
  });
})
  .add("Edit Roles Files", () => {
    return React.createElement(() => {
      return (
        <Panel>
          <MainPanelHeader title="Role Permissions" />
          <PanelSection >
            <Bar
              left={<Search placeholder="Search for a Role" />}
              right={<Button buttonLabel="+Add Role" />}
            />
            <Container height="250px" >
              <InformationCardBar title="Marketing" size="large">
                <Bar padding="3x" left="BDE811.Marketing" right={<SelectMenu options={permissions} selectOptions={["Read"]} />} rightWidth="20%" />
              </InformationCardBar>
              <InformationCardBar title="Acquisitions" size="large">
                <Bar padding="3x" left="BDE811.Acquisitions" right={<SelectMenu options={permissions} selectOptions={["Write"]} />} rightWidth="20%" />
              </InformationCardBar>
              <InformationCardBar title="Builder / Developer" size="large">
                <Bar padding="3x" left="BDE811.Acquisitions" right={<SelectMenu options={permissions} selectOptions={["Read"]} />} rightWidth="20%" />
                <Bar padding="3x" left="BDE811.Developer" right={<SelectMenu options={permissions} selectOptions={[["Read", "Write"]]} />} rightWidth="20%" />
              </InformationCardBar>
              <InformationCardBar title="Admin" size="large">
                <Bar padding="3x" left="BDE811.Public" right={<SelectMenu options={permissions} selectOptions={[["Read", "Write"]]} />} rightWidth="20%" />
                <Bar padding="3x" left="BDE811.Marketing" right={<SelectMenu options={permissions} selectOptions={[["Read", "Write"]]} />} rightWidth="20%" />
                <Bar padding="3x" left="BDE811.Acquisitions" right={<SelectMenu options={permissions} selectOptions={[["Read", "Write"]]} />} rightWidth="20%" />
                <Bar padding="3x" left="BDE811.Developer" right={<SelectMenu options={permissions} selectOptions={[["Read", "Write"]]} />} rightWidth="20%" />
              </InformationCardBar>
            </Container>
          </PanelSection>
        </Panel>
      );
    });
  });

