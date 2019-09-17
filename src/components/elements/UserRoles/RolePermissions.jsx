import React, { useState } from "react";
import PropTypes from "prop-types";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Bar from "blocks/Bar";
import Container from "atoms/Container";
import Panel, { PanelSection } from "layout/Panel";
import Search from "blocks/Search";
import SelectMenu from "atoms/SelectMenu";
import InformationCardBar from "elements/CardBars/InformationCardBar";
import Button from "atoms/Button";
import Icon from "atoms/Icon";
import Title from "base/Typography";

const permissions = [
  { value: "Read", label: "Read" },
  { value: "Write", label: "Write" },
  { value: ["Read", "Write"], label: "Read / Write" },
];

function FolderEntry({
  folder,
  padding,
  selectWidth,
  onChange,
}) {
  function onDeletePermission() {
    onChange({ ...folder, permissions: null });
  }

  function onChangePermissions(currState, newState, setState) {
    const value = newState.selected.value;
    onChange({ ...folder, permissions: value instanceof Array ? value : [value] });
    setState(newState);
  }

  return (<Bar
    padding={padding}
    left={<Title>{folder.folder} <Icon icon="delete" onClick={onDeletePermission} /></Title>}
    right={<SelectMenu
      options={permissions}
      selectOptions={folder.permissions}
      isClearable={false}
      onChangeState={onChangePermissions}
    />}
    rightWidth={selectWidth}
  />);
}

FolderEntry.propTypes = {
  folder: PropTypes.shape({
    folder: PropTypes.string,
    permissions: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  padding: PropTypes.string,
  selectWidth: PropTypes.string,
};

FolderEntry.defaultProps = {
  padding: null,
  selectWidth: null,
};

function RoleEntry({
  role,
  editRole,
  onChange,
  folderPadding,
  selectWidth,
}) {
  function onDeleteRole(e) {
    e.stopPropagation();
    onChange({ ...role, folders: null });
  }

  function onChangePermission(folder) {
    if (!folder.permissions) {
      onChange({
        ...role,
        folders: role.folders.filter((folderPermissions) => {
          return folder.folder !== folderPermissions.folder;
        }),
      });
    } else {
      onChange({
        ...role,
        folders: role.folders.map((folderPermissions) => {
          return folder.folder === folderPermissions.folder ? folder : folderPermissions;
        }),
      });
    }
  }

  function addRolePermission() {
    editRole.onClick(role);
  }

  return (
    <InformationCardBar title={<Title>{role.name} <Icon icon="delete" onClick={onDeleteRole} /></Title>}>
      {role.folders.map((folder) => {
        return (<FolderEntry
          folder={folder}
          onChange={onChangePermission}
          padding={folderPadding}
          selectWidth={selectWidth}
        />);
      })}
      {editRole
        ? <Bar right={<Button label={editRole.label} onClick={addRolePermission} />} /> : null}
    </InformationCardBar>
  );
}

RoleEntry.propTypes = {
  role: PropTypes.shape({
    role: PropTypes.string,
    name: PropTypes.string,
    folders: PropTypes.arrayOf(PropTypes.shape({
      folder: PropTypes.string,
      permissions: PropTypes.arrayOf(PropTypes.string),
    })),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  editRole: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }),
  folderPadding: PropTypes.string,
  selectWidth: PropTypes.string,
};

RoleEntry.defaultProps = {
  editRole: null,
  folderPadding: null,
  selectWidth: null,
};

function RolePermissions({
  roles,
  commands,
  listHeight,
  right,
  children,
  editRole,
  onChange,
  folderPadding,
  selectWidth,
  title,
}) {
  let activeRoles = roles;
  let setRoles = onChange;
  if (!onChange) [activeRoles, setRoles] = useState(roles);

  const [visibleRoles, setVisibleRoles] = useState({
    roles: activeRoles,
    searchCriteria: null,
  });

  function filterRoles(currRoles, searchCriteria) {
    if (searchCriteria) {
      setVisibleRoles({
        roles: currRoles.filter((role) => {
          return role.role.toLowerCase().includes(searchCriteria);
        }),
        searchCriteria: searchCriteria,
      });
    } else {
      setVisibleRoles({
        roles: currRoles,
        searchCriteria: null,
      });
    }
  }

  function onRoleChange(role) {
    let currRoles = null;
    if (role.folders) {
      currRoles = activeRoles.map((rolePermissions) => {
        return role.role === rolePermissions.role ? role : rolePermissions;
      });
    } else {
      currRoles = activeRoles.filter((rolePermissions) => {
        return role.role !== rolePermissions.role;
      });
    }

    setRoles(currRoles);
    filterRoles(currRoles, visibleRoles.searchCriteria);
  }

  function onSearch(e) {
    filterRoles(activeRoles, e.target.value.toLowerCase());
  }

  const childElements = (!children || children instanceof Array) ? children : [children];
  return (
    <Panel>
      <MainPanelHeader title={title} menuData={commands} />
      <PanelSection body>
        <Bar
          left={<Search placeholder="Search for a Role" onChange={onSearch} />}
          right={right}
        />
        <Container height={listHeight} >
          {visibleRoles.roles.map((role) => {
            return (<RoleEntry
              key={role.role}
              role={role}
              onChange={onRoleChange}
              editRole={editRole}
              folderPadding={folderPadding}
              selectWidth={selectWidth}
            />);
          })}
        </Container>
      </PanelSection>
      {childElements ? childElements.map((child) => {
        return (
          <PanelSection>
            {child}
          </PanelSection>
        );
      }) : null}
    </Panel>
  );
}

RolePermissions.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.shape({
    role: PropTypes.string,
    name: PropTypes.string,
    folders: PropTypes.arrayOf(PropTypes.shape({
      folder: PropTypes.string,
      permissions: PropTypes.arrayOf(PropTypes.string),
    })),
  })),
  commands: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    onClickLink: PropTypes.func,
  })),
  listHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  right: PropTypes.node,
  children: PropTypes.node,
  editRole: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }),
  onChange: PropTypes.func,
  folderPadding: PropTypes.string,
  selectWidth: PropTypes.string,
  title: PropTypes.string,
};

RolePermissions.defaultProps = {
  roles: null,
  commands: null,
  listHeight: "250px",
  right: null,
  children: null,
  editRole: null,
  onChange: null,
  folderPadding: "3x",
  selectWidth: "20%",
  title: "Role Permissions",
};

export default RolePermissions;
