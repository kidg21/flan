// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
// import Bar from "blocks/Bar";
// import Container from "atoms/Container";
// import Panel, { PanelSection } from "layout/Panel";
// import Search from "blocks/Search";
// import SelectMenu from "atoms/SelectMenu";
// import Command from "atoms/Command";
// import Switch from "atoms/Switch";

// function UserEntry({
//   user,
//   roles,
//   labelWidth,
//   selectWidth,
//   onChange,
//   onClick,
// }) {
//   const [isEnabled, setEnabled] = useState(user.enabled);

//   function toggleEnabled() {
//     setEnabled((enabled) => {
//       if (onChange) onChange({ ...user, enabled: !enabled });
//       return !enabled;
//     });
//   }

//   function onCommandClick() {
//     if (onClick) onClick(user);
//   }

//   function onChangeRoles(currState, newState, setState) {
//     if (onChange) {
//       let selectedRoles = newState.selected || [];
//       selectedRoles = selectedRoles instanceof Array
//         ? selectedRoles.map((entry) => {
//           return entry.value;
//         }) : [selectedRoles.value];
//       onChange({ ...user, roles: selectedRoles });
//     }
//     setState(newState);
//   }

//   return (<Bar
//     disabled={!isEnabled}
//     left={<Command onClick={onCommandClick} label={user.name} />}
//     leftWidth={labelWidth}
//     center={<Switch checked={isEnabled} onChange={toggleEnabled} />}
//     centerAlign="left"
//     right={<SelectMenu
//       options={roles}
//       selectOptions={user.roles}
//       onChangeState={onChangeRoles}
//       multiSelect
//     />}
//     rightWidth={selectWidth}
//   />);
// }

// UserEntry.propTypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string,
//     enabled: PropTypes.bool,
//     roles: PropTypes.oneOfType([
//       PropTypes.arrayOf(PropTypes.string),
//       PropTypes.string,
//     ]),
//   }).isRequired,
//   roles: PropTypes.arrayOf(PropTypes.shape({
//     label: PropTypes.string,
//     value: PropTypes.any,
//   })),
//   onClick: PropTypes.func,
//   onChange: PropTypes.func,
//   labelWidth: PropTypes.string,
//   selectWidth: PropTypes.string,
// };

// UserEntry.defaultProps = {
//   roles: null,
//   onChange: null,
//   onClick: null,
//   labelWidth: "10%",
//   selectWidth: "50%",
// };

// const userTypes = [
//   { value: null, label: "All Users" },
//   { value: true, label: "Enabled" },
//   { value: false, label: "Disabled" },
// ];

// function UserRoles({
//   users,
//   roles,
//   commands,
//   right,
//   onClickUser,
//   onChange,
//   listHeight,
//   searchWidth,
// }) {
//   let activeUsers = users;
//   let setUsers = onChange;
//   if (!onChange) [activeUsers, setUsers] = useState(users);

//   const [filterState, setFilter] = useState({
//     name: null,
//     enabled: null,
//     role: null,
//     users: activeUsers,
//   });
//   function filterUsers(currUsers, state) {
//     state.users = currUsers.filter((user) => {
//       const userRoles = (user.roles && !(user.roles instanceof Array))
//         ? [user.roles] : user.roles || [];
//       return (typeof state.enabled !== "boolean" || user.enabled === state.enabled)
//         && (!state.name || user.name.toLowerCase().includes(state.name))
//         && (!state.role || userRoles.includes(state.role));
//     });
//     setFilter(state);
//   }

//   function setNameFilter(e) {
//     // nameFilter = e.target.value.toLowerCase();
//     filterUsers(activeUsers, { ...filterState, name: e.target.value.toLowerCase() });
//   }

//   function filterUserTypes(currState, newState, setState) {
//     const isEnabled = newState.selected && newState.selected instanceof Array
//       ? newState.selected[0].value : newState.selected.value;
//     setState(newState);
//     filterUsers(activeUsers, { ...filterState, enabled: isEnabled });
//   }

//   function filterUserRoles(currState, newState, setState) {
//     const role = newState.selected && newState.selected instanceof Array
//       ? newState.selected[0].value : newState.selected.value;
//     setState(newState);
//     filterUsers(activeUsers, { ...filterState, role });
//   }

//   function onUserChange(userProps) {
//     const currUsers = activeUsers.map((user) => {
//       return user.name === userProps.name ? userProps : user;
//     });
//     setUsers(currUsers);
//     filterUsers(currUsers, filterState);
//   }

//   const rolesFilter = [{
//     value: null, label: "All Roles",
//   }].concat(roles);

//   return (
//     <Panel>
//       <MainPanelHeader title="User Roles" menuData={commands} />
//       <PanelSection body>
//         {right ? <Bar right={right} /> : null}
//         <Bar
//           left={<Search placeholder="Search for a User" onChange={setNameFilter} />}
//           leftWidth={searchWidth}
//           center={
//             <SelectMenu
//               options={userTypes}
//               selectOptions={[null]}
//               onChangeState={filterUserTypes}
//               isClearable={false}
//             />
//           }
//           right={
//             <SelectMenu
//               options={rolesFilter}
//               selectOptions={[null]}
//               onChangeState={filterUserRoles}
//               isClearable={false}
//             />
//           }
//         />
//         <Container height={listHeight}>
//           {filterState.users.map((user) => {
//             return (<UserEntry
//               key={user.name}
//               user={user}
//               roles={roles}
//               onClick={onClickUser}
//               onChange={onUserChange}
//             />);
//           })}
//         </Container>
//       </PanelSection>
//     </Panel>
//   );
// }

// UserRoles.propTypes = {
//   users: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string,
//     enabled: PropTypes.bool,
//     roles: PropTypes.oneOfType([
//       PropTypes.arrayOf(PropTypes.string),
//       PropTypes.string,
//     ]),
//   })),
//   roles: PropTypes.arrayOf(PropTypes.shape({
//     label: PropTypes.string,
//     value: PropTypes.any,
//   })),
//   commands: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//     onClickLink: PropTypes.func,
//   })),
//   right: PropTypes.node,
//   onClickUser: PropTypes.func,
//   onChange: PropTypes.func,
//   listHeight: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]),
//   searchWidth: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]),
// };

// UserRoles.defaultProps = {
//   users: null,
//   roles: null,
//   commands: null,
//   right: null,
//   onClickUser: null,
//   onChange: null,
//   listHeight: "250px",
//   searchWidth: "25%",
// };
// export { UserRoles as default, UserEntry };
