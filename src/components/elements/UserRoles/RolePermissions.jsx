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
  onAddPermission,
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

  return (
    <InformationCardBar title={<Title>{role.role} <Icon icon="delete" onClick={onDeleteRole} /></Title>}>
      {role.folders.map((folder) => {
        return (<FolderEntry
          folder={folder}
          onChange={onChangePermission}
          padding={folderPadding}
          selectWidth={selectWidth}
        />);
      })}
      {onAddPermission ? <Bar right={<Button label="+Add Permission" onClick={onAddPermission} />} /> : null}
    </InformationCardBar>
  );
}

RoleEntry.propTypes = {
  role: PropTypes.shape({
    role: PropTypes.string,
    folders: PropTypes.arrayOf(PropTypes.shape({
      folder: PropTypes.string,
      permissions: PropTypes.arrayOf(PropTypes.string),
    })),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onAddPermission: PropTypes.func,
  folderPadding: PropTypes.string,
  selectWidth: PropTypes.string,
};

RoleEntry.defaultProps = {
  onAddPermission: null,
  folderPadding: null,
  selectWidth: null,
};

function RolePermissions({
  roles,
  listHeight,
  onAddRole,
  onAddPermission,
  onChange,
  folderPadding,
  selectWidth,
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

  return (
    <Panel>
      <MainPanelHeader title="Role Permissions" />
      <PanelSection >
        <Bar
          left={<Search placeholder="Search for a Role" onChange={onSearch} />}
          right={onAddRole ? <Button label="+Add Role" onClick={onAddRole} /> : null}
        />
        <Container height={listHeight} >
          {visibleRoles.roles.map((role) => {
            return (<RoleEntry
              key={role.role}
              role={role}
              onChange={onRoleChange}
              onAddPermission={onAddPermission}
              folderPadding={folderPadding}
              selectWidth={selectWidth}
            />);
          })}
        </Container>
      </PanelSection>
    </Panel>
  );
}

RolePermissions.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.shape({
    role: PropTypes.string,
    folders: PropTypes.arrayOf(PropTypes.shape({
      folder: PropTypes.string,
      permissions: PropTypes.arrayOf(PropTypes.string),
    })),
  })),
  listHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onAddRole: PropTypes.func,
  onAddPermission: PropTypes.func,
  onChange: PropTypes.func,
  folderPadding: PropTypes.string,
  selectWidth: PropTypes.string,
};

RolePermissions.defaultProps = {
  roles: null,
  listHeight: "250px",
  onAddRole: null,
  onAddPermission: null,
  onChange: null,
  folderPadding: "3x",
  selectWidth: "20%",
};

export default RolePermissions;
