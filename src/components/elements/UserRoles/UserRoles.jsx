/* eslint-disable linebreak-style */
import React, { useState } from "react";
import PropTypes from "prop-types";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Bar from "blocks/Bar";
import Container from "atoms/Container";
import Panel from "layout/Panel";
import TextInput from "atoms/TextInput";
import SelectMenu from "atoms/SelectMenu";
import Command from "atoms/Command";
import Switch from "atoms/Switch";

function UserEntry({
  user,
  roles,
  toggleWidth,
  selectWidth,
  onChange,
  onClick,
}) {
  let isEnabled = user.enabled;
  let setEnabled = onChange;
  if (!onChange) [isEnabled, setEnabled] = useState(user.enabled);

  function toggleEnabled() {
    const newState = onChange ? { ...user, enabled: !isEnabled } : !isEnabled;
    setEnabled(newState);
  }

  function onCommandClick() {
    if (onClick) onClick(user);
  }

  function onChangeRoles(currState, newState, setState) {
    if (onChange) {
      let selectedRoles = newState.selected || [];
      selectedRoles = selectedRoles instanceof Array
        ? selectedRoles.map((entry) => {
          return typeof entry === "string" ? entry : entry.value;
        }) : [typeof selectedRoles === "string" ? selectedRoles : selectedRoles.value];
      onChange({ ...user, roles: selectedRoles });
    }
    setState(newState);
  }

  return (<Bar
    disabled={!isEnabled}
    left={<Switch checked={isEnabled} onChange={toggleEnabled} />}
    leftWidth={toggleWidth}
    center={<Command onClick={onCommandClick} label={user.name} />}
    centerAlign="left"
    right={<SelectMenu
      options={roles}
      selectOptions={user.roles}
      onChangeState={onChangeRoles}
      multiSelect
    />}
    rightWidth={selectWidth}
  />);
}

UserEntry.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    enabled: PropTypes.bool,
    roles: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
  }).isRequired,
  roles: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    }),
    PropTypes.string,
  ])),
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  toggleWidth: PropTypes.string,
  selectWidth: PropTypes.string,
};

UserEntry.defaultProps = {
  roles: null,
  onChange: null,
  onClick: null,
  toggleWidth: "5%",
  selectWidth: "50%",
};

const userTypes = [
  { value: null, label: "All Users" },
  { value: true, label: "Enabled" },
  { value: false, label: "Disabled" },
];

const UserRoles = React.forwardRef(({
  style,
  panelStyle,
  users,
  roles,
  commands,
  right,
  children,
  onClickUser,
  onChange,
  listHeight,
  searchWidth,
  title,
}, ref) => {
  let activeUsers = users;
  let setUsers = onChange;
  if (!onChange) [activeUsers, setUsers] = useState(users);

  const [filterState, setFilter] = useState({
    name: null,
    enabled: null,
    role: null,
  });

  function filterUserName(e) {
    setFilter({ ...filterState, name: e.target.value.toLowerCase() });
  }

  function filterUserTypes(currState, newState, setState) {
    const isEnabled = newState.selected && newState.selected instanceof Array
      ? newState.selected[0].value : newState.selected.value;
    setState(newState);
    setFilter({ ...filterState, enabled: isEnabled });
  }

  function filterUserRoles(currState, newState, setState) {
    const role = newState.selected && newState.selected instanceof Array
      ? newState.selected[0].value : newState.selected.value;
    setState(newState);
    setFilter({ ...filterState, role });
  }

  function onUserChange(userProps) {
    const currUsers = activeUsers.map((user) => {
      return user.name === userProps.name ? userProps : user;
    });
    setUsers(currUsers);
  }

  const rolesFilter = [{
    value: null, label: "All Roles",
  }].concat(roles);

  let childElements = children;
  if (childElements && !(childElements instanceof Array)) childElements = [childElements];

  return (
    <Panel
      style={panelStyle}
      header={<MainPanelHeader title={title} menuData={commands} />}
    >
      {right ? <Bar right={right} /> : null}
      <Bar
        left={<TextInput type="search" placeholder="Search for a User" onChange={filterUserName} inputStyle={{ boxSizing: "border-box" }} />}
        leftWidth={searchWidth}
        center={
          <SelectMenu
            options={userTypes}
            selectOptions={[null]}
            onChangeState={filterUserTypes}
            isClearable={false}
          />
        }
        right={
          <SelectMenu
            options={rolesFilter}
            selectOptions={[null]}
            onChangeState={filterUserRoles}
            isClearable={false}
          />
        }
      />
      <Container height={listHeight} ref={ref}>
        {activeUsers.filter((user) => {
          const userRoles = (user.roles && !(user.roles instanceof Array)) ?
            [user.roles] : user.roles || [];
          return (typeof filterState.enabled !== "boolean" || user.enabled === filterState.enabled)
            && (!filterState.name || user.name.toLowerCase().includes(filterState.name))
            && (!filterState.role || userRoles.includes(filterState.role));
        }).map((user) => {
          return (<UserEntry
            key={user.name}
            user={user}
            roles={roles}
            onClick={onClickUser}
            onChange={onUserChange}
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

UserRoles.propTypes = {
  style: PropTypes.object,
  panelStyle: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    enabled: PropTypes.bool,
    roles: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
  })),
  roles: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    }),
    PropTypes.string,
  ])),
  commands: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
  })),
  right: PropTypes.node,
  children: PropTypes.node,
  onClickUser: PropTypes.func,
  onChange: PropTypes.func,
  listHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  searchWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  title: PropTypes.string,
};

UserRoles.defaultProps = {
  style: null,
  panelStyle: null,
  users: null,
  roles: null,
  commands: null,
  right: null,
  children: null,
  onClickUser: null,
  onChange: null,
  listHeight: "250px",
  searchWidth: "25%",
  title: "User Roles",
};
export { UserRoles as default, UserEntry };
