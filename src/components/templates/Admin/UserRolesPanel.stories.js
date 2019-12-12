// import React from "react";
// import { storiesOf } from "@storybook/react";
// import Button from "atoms/Button";
// import { UserRoles, RolePermissions } from "elements/UserRoles";

// const roles = [
//   { value: "Marketing", label: "Marketing" },
//   { value: "Acquisitions", label: "Acquisitions" },
//   { value: "Developer", label: "Builder / Developer" },
//   { value: "Admin", label: "Admin" },
// ];

// const userCommands = [
//   {
//     id: "manageRoles",
//     name: "View / Edit Roles",
//     onClickLink: () => {
//       alert("Manage Roles!");
//     },
//   },
// ];

// const roleCommands = [
//   {
//     id: "manageUsers",
//     name: "View / Edit Users",
//     onClickLink: () => {
//       alert("Manage Users!");
//     },
//   },
// ];

// const users = [
//   { name: "brodarte", roles: "Developer", enabled: true },
//   { name: "egallagher", roles: "Marketing", enabled: true },
//   { name: "esugimoto", roles: null, enabled: false },
//   { name: "mwalker", roles: "Admin", enabled: true },
//   { name: "pnguyen", roles: ["Developer", "Acquisitions"], enabled: true },
// ];

// const rolePermissions = [
//   {
//     role: "Marketing",
//     folders: [
//       {
//         folder: "BDE811.Marketing",
//         permissions: ["Read"],
//       },
//     ],
//   },
//   {
//     role: "Acquisitions",
//     folders: [
//       {
//         folder: "BDE811.Acquisitions",
//         permissions: ["Write"],
//       },
//     ],
//   },
//   {
//     role: "Builder / Developer",
//     folders: [
//       {
//         folder: "BDE811.Acquisitions",
//         permissions: ["Read"],
//       },
//       {
//         folder: "BDE811.Developer",
//         permissions: ["Read", "Write"],
//       },
//     ],
//   },
//   {
//     role: "Admin",
//     folders: [
//       {
//         folder: "BDE811.Public",
//         permissions: ["Read", "Write"],
//       },
//       {
//         folder: "BDE811.Marketing",
//         permissions: ["Read", "Write"],
//       },
//       {
//         folder: "BDE811.Acquisitions",
//         permissions: ["Read", "Write"],
//       },
//       {
//         folder: "BDE811.Developer",
//         permissions: ["Read", "Write"],
//       },
//     ],
//   },
// ];

// storiesOf("Templates|Admin", module)
//   .add("User Edit Roles", () => {
//     function userDetails(user) {
//       alert(`User "${user.name}" clicked!`);
//     }

//     function addUser() {
//       alert("Add User!");
//     }

//     return React.createElement(() => {
//       return (
//         <UserRoles
//           users={users}
//           roles={roles}
//           commands={userCommands}
//           right={<Button label="+Add User" onClick={addUser} />}
//           onClickUser={userDetails}
//         />
//       );
//     });
//   })
//   .add("Edit Roles Files", () => {
//     function addPermission(role) {
//       alert(`Add Permission to role "${role.role}"!`);
//     }

//     function addRole() {
//       alert("Add Role!");
//     }

//     const editRole = {
//       label: "+Add Permission",
//       onClick: addPermission,
//     };

//     return React.createElement(() => {
//       return (
//         <RolePermissions
//           roles={rolePermissions}
//           commands={roleCommands}
//           right={<Button label="+Add Role" onClick={addRole} />}
//           editRole={editRole}
//         />
//       );
//     });
//   });
