// /* eslint-disable linebreak-style */
// /* eslint-disable react/jsx-filename-extension */
// import React from "react";
// import List, { ListItem } from "blocks/List";

// storiesOf("Blocks|List", module)
//   .addDecorator(withKnobs)
//   .add(
//     "Documentation",
//     () => {
//       return (
//         <List isDivided>
//           <ListItem title="List Item" />
//           <ListItem title="List Item" />
//           <ListItem title="List Item" />
//         </List>
//       );
//     },
//   )
//   .add("Knobs", () => {
//     return (
//       <List
//         isInteractive={boolean("Interactive", false, "List")}
//       >
//         <ListItem
//           title={text("1 - Title", "Item 1", "Item 1")}
//           description={text("1 - Description", "", "Item 1")}
//           pre={select(
//             "1 - Pre",
//             {
//               default: null,
//               icon: { icon: "home" },
//               label: { label: "AB" },
//             },
//             null,
//             "Item 1",
//           )}
//           post={select(
//             "1 - Post",
//             {
//               default: null,
//               checkbox: { type: "checkbox", label: "Checkbox" },
//               toggle: { type: "toggle", label: "Toggle" },
//               label: { type: "label", label: "Label" },
//             },
//             null,
//             "Item 1",
//           )}
//           isSelected={boolean("1 - Selected", false, "Item 1")}
//           disabled={boolean("1 - Disabled", false, "Item 1")}
//         />
//         <ListItem
//           title={text("1 - Label", "Item 2", "Item 2")}
//           description={text("2 - Description", "", "Item 2")}
//           pre={select(
//             "2 - Pre",
//             {
//               default: null,
//               icon: { icon: "home" },
//               label: { label: "AB" },
//             },
//             null,
//             "Item 2",
//           )}
//           post={select(
//             "2 - Post",
//             {
//               default: null,
//               checkbox: { type: "checkbox", label: "Checkbox" },
//               toggle: { type: "toggle", label: "Toggle" },
//               label: { type: "label", label: "Label" },
//             },
//             null,
//             "Item 2",
//           )}
//           isSelected={boolean("2 - Selected", false, "Item 2")}
//           disabled={boolean("2 - Disabled", false, "Item 2")}
//         />
//         <ListItem
//           title={text("3 - Label", "Item 3", "Item 3")}
//           description={text("3 - Description", "", "Item 3")}
//           pre={select(
//             "3 - Pre",
//             {
//               default: null,
//               icon: { icon: "home" },
//               label: { label: "AB" },
//             },
//             null,
//             "Item 3",
//           )}
//           post={select(
//             "3 - Post",
//             {
//               default: null,
//               checkbox: { type: "checkbox", label: "Checkbox" },
//               toggle: { type: "toggle", label: "Toggle" },
//               label: { type: "label", label: "Label" },
//             },
//             null,
//             "Item 3",
//           )}
//           isSelected={boolean("3 - Selected", false, "Item 3")}
//           disabled={boolean("3 - Disabled", false, "Item 3")}
//         />
//       </List>
//     );
//   })
//   .add("States", () => {
//     return (
//       <List>
//         <ListItem
//           title="List Item (standard)"
//           description="This is the description"
//         />
//         <ListItem
//           title="List Item (selected)"
//           description="This is the description"
//           isSelected
//         />
//         <ListItem
//           title="List Item (disabled)"
//           description="This is the description"
//           disabled
//         />

//       </List>
//     );
//   })
//   .add("Interactive", () => {
//     return (
//       <List isInteractive>
//         <ListItem title="List Item" description="This is the description" />
//         <ListItem title="List Item" description="This is the description" />
//         <ListItem title="List Item" description="This is the description" />
//         <ListItem
//           title="List Item (interaction disabled)"
//           description="This is the description"
//           isInteractive={false}
//         />
//         <ListItem title="List Item" description="This is the description" />

//       </List>
//     );
//   })
//   .add("Pre-Label", () => {
//     return (
//       <List isInteractive>
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           pre={{ label: "AB" }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           pre={{ label: "CD" }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           pre={{ label: "EF" }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           pre={{ label: "GH" }}
//         />
//       </List>
//     );
//   })
//   .add("Post-Toggle", () => {
//     return (
//       <List isInteractive>
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "toggle", label: "Toggle 1" }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "toggle", label: "Toggle 2" }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "toggle" }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "toggle", label: "Toggle 4" }}
//         />
//       </List>
//     );
//   })
//   .add("Post-Label", () => {
//     return (
//       <List isInteractive>
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "label", label: "Label" }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "label", label: "6" }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "label", label: "NEW!" }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "label", label: "9" }}
//         />
//       </List>
//     );
//   })
//   .add("Post-Checkbox", () => {
//     return (
//       <List isInteractive>
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "checkbox", label: "Box 1" }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "checkbox", label: "Box 2" }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "checkbox", label: "Box 3" }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "checkbox", label: "Box 4" }}
//         />
//       </List>
//     );
//   })
//   .add("Post-Icon", () => {
//     return (
//       <List isInteractive>
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "icon", icon: "right" }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "icon", icon: "info" }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "icon", icon: "home", onClick: true }}
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           post={{ type: "icon", icon: "bookmark", onClick: true }}
//         />
//       </List>
//     );
//   })
//   .add("List with onClick", () => {
//     return (
//       <List isInteractive>
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           onClick
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           onClick
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           onClick
//         />
//         <ListItem
//           title="List Item"
//           description="This is the description"
//           onClick
//         />
//       </List>
//     );
//   });
