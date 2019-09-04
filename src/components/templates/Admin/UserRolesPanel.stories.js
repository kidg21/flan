/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Bar from "blocks/Bar";
import InformationCardBar from "elements/CardBars/InformationCardBar";
import Container from "atoms/Container";
import Button from "atoms/Button";
import Panel, { PanelSection } from "layout/Panel";
import Search from "blocks/Search";
import SelectMenu from "atoms/SelectMenu";
import Command from "atoms/Command";
import Icon from "atoms/Icon";
import Title from "base/Typography";
import Switch from "atoms/Switch";

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

const commands = [
  { id: "manageRoles", name: "View / Edit Roles", onClickLink: () => { alert("Manage Roles!"); } },
];

const users = [
  { name: "Ben", roles: "Developer", enabled: true },
  { name: "Erica", roles: null },
  { name: "Liz", roles: "Marketing", enabled: true },
  { name: "Mark", roles: "Admin", enabled: true },
  { name: "Patrick", roles: ["Developer", "Acquisitions"], enabled: true },
];

const rolePermissions = [{
  role: "Marketing",
  folders: [{
    folder: "BDE811.Marketing",
    permissions: ["Read"]
  }]
}, {
  role: "Acquisitions",
  folders: [{
    folder: "BDE811.Acquisitions",
    permissions: ["Write"],
  }]
}, {
  role: "Builder / Developer",
  folders: [{
    folder: "BDE811.Acquisitions",
    permissions: ["Read"],
  }, {
    folder: "BDE811.Developer",
    permissions: [["Read", "Write"]]
  }]
}, {
  role: "Admin",
  folders: [{
    folder: "BDE811.Public",
    permissions: [["Read", "Write"]]
  }, {
    folder: "BDE811.Marketing",
    permissions: [["Read", "Write"]]
  }, {
    folder: "BDE811.Acquisitions",
    permissions: [["Read", "Write"]]
  }, {
    folder: "BDE811.Developer",
    permissions: [["Read", "Write"]]
  }]
}];

storiesOf("Templates|Admin", module).add("User Edit Roles", () => {
  function userDetails() {
    alert("User Details!");
  }

  function addUser() {
    alert("Add User!");
  }

  return React.createElement(() => {
    return (
      <Panel>
        <MainPanelHeader title="User Roles" menuData={commands} />
        <PanelSection body>
          <Bar
            left={<Search placeholder="Search for a User" />}
            right={<Button label="+Add User" onClick={addUser} />}
          />
          <Container height="250px" >
            {users.map((user) => {
              const [isEnabled, setEnabled] = useState(user.enabled);
              function toggleEnabled() {
                setEnabled((enabled) => { return !enabled; });
              }

              return <Bar disabled={!isEnabled} left={<Command onClick={userDetails} label={user.name} />} leftWidth="5%" center={<Switch checked={isEnabled} onChange={toggleEnabled} />} centerAlign="left" right={<SelectMenu options={roles} selectOptions={user.roles} multiSelect />} rightWidth="50%" />;
            })}
          </Container>
        </PanelSection>
      </Panel>
    );
  });
})
  .add("Edit Roles Files", () => {
    function deleteRole(e) {
      e.stopPropagation();
      alert("Role Deleted!");
    }

    function deletePermission() {
      alert("Permission Removed!");
    }

    function addPermission() {
      alert("Permission Added!");
    }

    function addRole() {
      alert("Add Role!");
    }

    return React.createElement(() => {
      return (
        <Panel>
          <MainPanelHeader title="Role Permissions" />
          <PanelSection >
            <Bar
              left={<Search placeholder="Search for a Role" />}
              right={<Button label="+Add Role" onClick={addRole} />}
            />
            <Container height="250px" >
              {rolePermissions.map((role) => {
                return (
                  <InformationCardBar title={<Title>{role.role} <Icon icon="delete" onClick={deleteRole} /></Title>}>
                    {role.folders.map((folder) => {
                      return <Bar padding="3x" left={<Title>{folder.folder} <Icon icon="delete" onClick={deletePermission} /></Title>} right={<SelectMenu options={permissions} selectOptions={folder.permissions} isClearable={false} />} rightWidth="20%" />
                    })}
                  </InformationCardBar>
                );
              })}
            </Container>
          </PanelSection>
        </Panel>
      );
    });
  });

