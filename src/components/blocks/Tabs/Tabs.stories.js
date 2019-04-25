// import React, { useState } from "react";
// import { storiesOf } from "@storybook/react";
// import { Padding } from "helpers/Display";
// import Tabs, { Tab } from "blocks/Tabs";
// import Button from "atoms/Button";

// // Buttons
// storiesOf("Blocks|Tabs", module)
//   .addDecorator(Padding)
//   .add("Standard Tabs", () =>
//     React.createElement(() => {
//       const [selected, setSelected] = useState("");

//       return (
//         <div>
//           <Tabs>
//             <Tab
//               selected={selected === "tab1"}
//               onClick={() => {
//                 setSelected("tab1");
//               }}
//             />
//             <Tab
//               selected={selected === "tab2"}
//               onClick={() => {
//                 setSelected("tab2");
//               }}
//             />
//             <Tab
//               selected={selected === "tab3"}
//               onClick={() => {
//                 setSelected("tab3");
//               }}
//             />
//           </Tabs>
//         </div>
//       );
//     })
//   );
