// /* eslint-disable linebreak-style */
// /* eslint-disable react/jsx-filename-extension */
// import React, { useState } from "react";
// import { storiesOf } from "@storybook/react";
// import { Padding } from "helpers/Display";
// import Control, { ControlItem } from "blocks/Control";



// export default {
//     title: "Blocks/Control/Tests",
//     component: Control,
//     parameters: {
//       docs: { page: null },
//     },
//     includeStories: ["Knobs"],
//     decorators: [Padding, withKnobs],
//   };


// export const Knobs = () => {
//     return (
//         <Control
//         disabled={boolean("disable", false, "Control")}
//       >
//         <ControlItem
//           icon={select(
//             "icon 1",
//             {
//               "no icon": null,
//               "info": "info",
//               "clone": "clone",
//               "search": "search",
//               "draw": "draw",
//               "list": "list",
//             },
//             null,
//             "Item 1",
//           )}
//           label={text("Item 1", "Item 1", "Item 1")}
//           disabled={boolean("Disable 1", false, "Item 1")}
//         />
//         <ControlItem
//           icon={select(
//             "icon 2",
//             {
//               "no icon": null,
//               "info": "info",
//               "clone": "clone",
//               "search": "search",
//               "draw": "draw",
//               "list": "list",
//             },
//             null,
//             "Item 2",
//           )}
//           label={text("Item 2", "Item 2", "Item 2")}
//           disabled={boolean("Disable 2", false, "Item 2")}
//         />
//         <ControlItem
//           icon={select(
//             "icon 3",
//             {
//               "no icon": null,
//               "info": "info",
//               "clone": "clone",
//               "search": "search",
//               "draw": "draw",
//               "list": "list",
//             },
//             null,
//             "Item 3",
//           )}
//           label={text("Item 3", "Item 3", "Item 3")}
//           disabled={boolean("Disable 3", false, "Item 3")}
//         />
//         <ControlItem
//           icon={select(
//             "icon 4",
//             {
//               "no icon": null,
//               "info": "info",
//               "clone": "clone",
//               "search": "search",
//               "draw": "draw",
//               "list": "list",
//             },
//             null,
//             "Item 4",
//           )}
//           label={text("Item 4", "Item 4", "Item 4")}
//           disabled={boolean("Disable 4", false, "Item 4")}
//         />
//         <ControlItem
//           icon={select(
//             "icon 5",
//             {
//               "no icon": null,
//               "info": "info",
//               "clone": "clone",
//               "search": "search",
//               "draw": "draw",
//               "list": "list",
//             },
//             null,
//             "Item 5",
//           )}
//           label={text("Item 5", "Item 5", "Item 5")}
//           disabled={boolean("Disable 5", false, "Item 5")}
//         />
//       </Control>
//     );
//   };
//   Knobs.story = {
//     parameters: {
//       parameters: {
//         viewMode: "story",
//       },
//     },
//   };




// const segmentNames = [
//   {
//     id: "segment_1",
//     label: "Item 1",
//   },
//   {
//     id: "segment_2",
//     label: "Item 2",
//     disabled: true,
//   },
//   {
//     id: "segment_3",
//     label: "Item 3",
//   },
//   {
//     id: "segment_4",
//     label: "Item 4",
//     isSelected: true,
//   },
// ];

// storiesOf("Blocks|Control", module)
//   .addDecorator(Padding)
//   .add(
//     "Documentation",
//     () => {
//       return (
//         <Control >
//           <ControlItem label="Active" isSelected />
//           <ControlItem label="Inactive" />
//           <ControlItem label="Inactive" />
//         </Control>
//       );
//     },
//   )
//   .add(
//     "Passed via Array",
//     () => {
//       return (
//         <Control data={segmentNames} />
//       );
//     },
//   )
//   .add(
//     "Disabled (Control)",
//     () => {
//       return (
//         <Control disabled >
//           <ControlItem label="Item 1" isSelected />
//           <ControlItem label="Item 2" />
//           <ControlItem label="Item 3" />
//         </Control>
//       );
//     },
//   )
//   .add(
//     "Disabled (ControlItem)",
//     () => {
//       return (
//         <Control>
//           <ControlItem label="Item 1" isSelected />
//           <ControlItem label="Item 2" disabled />
//           <ControlItem label="Item 3" />
//         </Control>
//       );
//     },
//   );

// storiesOf("Blocks|Control", module)
//   .addDecorator(Padding)
//   .addDecorator(withKnobs)
//   .add("Knobs", () => {
//     return (
//       <Control
//         disabled={boolean("disable", false, "Control")}
//       >
//         <ControlItem
//           icon={select(
//             "icon 1",
//             {
//               "no icon": null,
//               "info": "info",
//               "clone": "clone",
//               "search": "search",
//               "draw": "draw",
//               "list": "list",
//             },
//             null,
//             "Item 1",
//           )}
//           label={text("Item 1", "Item 1", "Item 1")}
//           disabled={boolean("Disable 1", false, "Item 1")}
//         />
//         <ControlItem
//           icon={select(
//             "icon 2",
//             {
//               "no icon": null,
//               "info": "info",
//               "clone": "clone",
//               "search": "search",
//               "draw": "draw",
//               "list": "list",
//             },
//             null,
//             "Item 2",
//           )}
//           label={text("Item 2", "Item 2", "Item 2")}
//           disabled={boolean("Disable 2", false, "Item 2")}
//         />
//         <ControlItem
//           icon={select(
//             "icon 3",
//             {
//               "no icon": null,
//               "info": "info",
//               "clone": "clone",
//               "search": "search",
//               "draw": "draw",
//               "list": "list",
//             },
//             null,
//             "Item 3",
//           )}
//           label={text("Item 3", "Item 3", "Item 3")}
//           disabled={boolean("Disable 3", false, "Item 3")}
//         />
//         <ControlItem
//           icon={select(
//             "icon 4",
//             {
//               "no icon": null,
//               "info": "info",
//               "clone": "clone",
//               "search": "search",
//               "draw": "draw",
//               "list": "list",
//             },
//             null,
//             "Item 4",
//           )}
//           label={text("Item 4", "Item 4", "Item 4")}
//           disabled={boolean("Disable 4", false, "Item 4")}
//         />
//         <ControlItem
//           icon={select(
//             "icon 5",
//             {
//               "no icon": null,
//               "info": "info",
//               "clone": "clone",
//               "search": "search",
//               "draw": "draw",
//               "list": "list",
//             },
//             null,
//             "Item 5",
//           )}
//           label={text("Item 5", "Item 5", "Item 5")}
//           disabled={boolean("Disable 5", false, "Item 5")}
//         />
//       </Control>
//     );
//   });

// storiesOf("Blocks|Control", module)
//   .addDecorator(Padding)
//   .add("Default", () => {
//     return (
//       <Control>
//         <ControlItem label="Item 1" />
//         <ControlItem label="Item 2" />
//         <ControlItem label="Item 3" />
//       </Control>
//     );
//   })
//   .add("Icon Controls", () => {
//     return (
//       <Control>
//         <ControlItem label="Item 1" icon="user" />
//         <ControlItem label="Item 2" icon="user" />
//         <ControlItem label="Item 3" icon="user" />
//       </Control>
//     );
//   });

// storiesOf("Blocks|Control", module)
//   .addDecorator(Padding)
//   .add("Single-Select", () => {
//     return React.createElement(() => {
//       const [activeSingleControl, setActiveSingleControl] = useState("Control1");
//       return (
//         <Control>
//           <ControlItem
//             label="Item 1"
//             isSelected={activeSingleControl === "Control1"}
//             onClick={() => {
//               setActiveSingleControl("Control1");
//             }}
//           />
//           <ControlItem
//             label="Item 2"
//             isSelected={activeSingleControl === "Control2"}
//             onClick={() => {
//               setActiveSingleControl("Control2");
//             }}
//           />
//           <ControlItem
//             label="Item 3"
//             isSelected={activeSingleControl === "Control3"}
//             onClick={() => {
//               setActiveSingleControl("Control3");
//             }}
//           />
//         </Control>
//       );
//     });
//   })
//   .add("Toggle-Select", () => {
//     return React.createElement(() => {
//       const [activeToggleControl, setActiveToggleControl] = useState("");
//       return (
//         <Control>
//           <ControlItem
//             label="Item 1"
//             isSelected={activeToggleControl === "Control1"}
//             onClick={() => {
//               if (activeToggleControl === "Control1") {
//                 setActiveToggleControl("");
//               } else {
//                 setActiveToggleControl("Control1");
//               }
//               return false;
//             }}
//           />
//           <ControlItem
//             label="Item 2"
//             isSelected={activeToggleControl === "Control2"}
//             onClick={() => {
//               if (activeToggleControl === "Control2") {
//                 setActiveToggleControl("");
//               } else {
//                 setActiveToggleControl("Control2");
//               }
//               return false;
//             }}
//           />
//           <ControlItem
//             label="Item 3"
//             isSelected={activeToggleControl === "Control3"}
//             onClick={() => {
//               if (activeToggleControl === "Control3") {
//                 setActiveToggleControl("");
//               } else {
//                 setActiveToggleControl("Control3");
//               }
//               return false;
//             }}
//           />
//         </Control>
//       );
//     });
//   })
//   .add("Multi-Select", () => {
//     return React.createElement(() => {
//       const [activeMultiControl, setActiveMultiControl] = useState(false);
//       const [activeMultiControl2, setActiveMultiControl2] = useState(false);
//       const [activeMultiControl3, setActiveMultiControl3] = useState(false);
//       return (
//         <Control>
//           <ControlItem
//             label="Item 1"
//             isSelected={activeMultiControl}
//             onClick={() => {
//               setActiveMultiControl(!activeMultiControl);
//             }}
//           />
//           <ControlItem
//             label="Item 2"
//             isSelected={activeMultiControl2}
//             onClick={() => {
//               setActiveMultiControl2(!activeMultiControl2);
//             }}
//           />
//           <ControlItem
//             label="Item 3"
//             isSelected={activeMultiControl3}
//             onClick={() => {
//               setActiveMultiControl3(!activeMultiControl3);
//             }}
//           />
//         </Control>
//       );
//     });
//   });
