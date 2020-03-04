/* eslint-disable linebreak-style */
import React, { useState } from "react";
import PropTypes from "prop-types";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Bar from "blocks/Bar";
import Container from "atoms/Container";
import Panel from "layout/Panel";
import TextInput from "atoms/TextInput";
import SelectMenu from "atoms/SelectMenu";
import Button from "atoms/Button";
import Icon from "atoms/Icon";
import Title from "base/Typography";

const permissions = [
  { value: "read", label: "Read" },
  { value: "write", label: "Write" },
  { value: ["read", "write"], label: "Read / Write" },
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
    right={{
      content: <SelectMenu
        options={permissions}
        selectOptions={folder.permissions}
        isClearable={false}
        onChangeState={onChangePermissions}
      />,
      width: selectWidth,
    }}
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

  function onChangeVisible(open) {
    onChange({ ...role, open });
  }

  function addRolePermission() {
    editRole.onClick(role);
  }

  return (
    <Bar open={role.open} onClick={onChangeVisible} left={<Title>{role.name} <Icon icon="delete" onClick={onDeleteRole} /></Title>}>
      {role.folders.map((folder) => {
        return (<FolderEntry
          key={folder.folder}
          folder={folder}
          onChange={onChangePermission}
          padding={folderPadding}
          selectWidth={selectWidth}
        />);
      })}
      {editRole
        ? <Bar right={<Button label={editRole.label} onClick={addRolePermission} />} /> : null}
    </Bar>
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
    open: PropTypes.bool,
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

const RolePermissions = React.forwardRef(({
  style,
  panelStyle,
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
}, ref) => {
  let activeRoles = roles;
  let setRoles = onChange;
  if (!onChange) [activeRoles, setRoles] = useState(roles);
  const [filter, setFilter] = useState(null);

  function onRoleChange(role) {
    let currRoles = null;
    let isChange = true;
    if (role.folders) {
      currRoles = activeRoles.map((rolePermissions) => {
        if (role.role === rolePermissions.role) {
          if (role.open !== rolePermissions.open) isChange = false;
          return role;
        }
        return rolePermissions;
      });
    } else {
      currRoles = activeRoles.filter((rolePermissions) => {
        return role.role !== rolePermissions.role;
      });
    }

    setRoles(currRoles, isChange);
  }

  function onSearch(e) {
    setFilter(e.target.value.toLowerCase());
  }

  let childElements = children;
  if (childElements && !(childElements instanceof Array)) childElements = [childElements];

  return (
    <Panel
      style={panelStyle}
      header={<MainPanelHeader title={title} menuData={commands} />}
    >
      <Bar
        left={<TextInput type="search" placeholder="Search for a Role" onChange={onSearch} inputStyle={{ boxSizing: "border-box " }} />}
        right={right}
      />
      <Container height={listHeight} ref={ref} >
        {activeRoles.filter((role) => {
          return filter ? role.name.toLowerCase().includes(filter) : true;
        }).map((role) => {
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
      {childElements ? childElements.map((child) => {
        return (
          { child }
        );
      }) : null}
    </Panel>
  );
});

RolePermissions.propTypes = {
  style: PropTypes.string,
  panelStyle: PropTypes.string,
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
    onClick: PropTypes.func,
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
  style: null,
  panelStyle: null,
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
