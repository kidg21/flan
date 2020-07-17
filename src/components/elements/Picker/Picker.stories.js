/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { useState } from "hooks";
import { Padding } from "helpers/Display";
import Picker, { ColorSwatch } from "elements/Picker";


export default {
  title: "Elements/Color Picker/Tests",
  component: Picker,
  parameters: {
    docs: { page: null },
  },
  includeStories: ["Actions"],
  decorators: [Padding],
};

export const Actions = () => {
  const [activeToggleTab, setActiveToggleTab] = useState("");
  return (
    <Picker id="toggleSelect" label="Standard Swatches" columns="4">
      <ColorSwatch
        color="#E4423A"
        isSelected={activeToggleTab === "tab1"}
        onClick={() => {
          if (activeToggleTab === "tab1") {
            setActiveToggleTab("");
          } else {
            setActiveToggleTab("tab1");
          }
          return false;
        }}
      />
      <ColorSwatch
        color="#14A939"
        isSelected={activeToggleTab === "tab2"}
        onClick={() => {
          if (activeToggleTab === "tab2") {
            setActiveToggleTab("");
          } else {
            setActiveToggleTab("tab2");
          }
          return false;
        }}
      />
      <ColorSwatch
        color="#2F98EE"
        isSelected={activeToggleTab === "tab3"}
        onClick={() => {
          if (activeToggleTab === "tab3") {
            setActiveToggleTab("");
          } else {
            setActiveToggleTab("tab3");
          }
          return false;
        }}
      />
    </Picker>);
};
Actions.story = {
  parameters: {
    viewMode: "story",
  },
};


// storiesOf("Elements|Picker", module)
//   .addDecorator(Padding)
//   .add(
//     "Picker",
//     () => {
//       return (
//         <Picker id="standard" label="Draw Tools Color Picker" columns="3">
//           <ColorSwatch color="#E4423A" />
//           <ColorSwatch color="#FF8000" />
//           <ColorSwatch isSelected color="#FFBF00" />
//           <ColorSwatch color="#14A939" />
//           <ColorSwatch color="#2F98EE" />
//         </Picker>
//       );
//     },
//   )
//   .add("Toggle-Select", () => {
//     return React.createElement(() => {
//       const [activeToggleTab, setActiveToggleTab] = useState("");
//       return (
//         <Picker id="toggleSelect" label="Standard Swatches" columns="4">
//           <ColorSwatch
//             color="#E4423A"
//             isSelected={activeToggleTab === "tab1"}
//             onClick={() => {
//               if (activeToggleTab === "tab1") {
//                 setActiveToggleTab("");
//               } else {
//                 setActiveToggleTab("tab1");
//               }
//               return false;
//             }}
//           />
//           <ColorSwatch
//             color="#14A939"
//             isSelected={activeToggleTab === "tab2"}
//             onClick={() => {
//               if (activeToggleTab === "tab2") {
//                 setActiveToggleTab("");
//               } else {
//                 setActiveToggleTab("tab2");
//               }
//               return false;
//             }}
//           />
//           <ColorSwatch
//             color="#2F98EE"
//             isSelected={activeToggleTab === "tab3"}
//             onClick={() => {
//               if (activeToggleTab === "tab3") {
//                 setActiveToggleTab("");
//               } else {
//                 setActiveToggleTab("tab3");
//               }
//               return false;
//             }}
//           />
//         </Picker>
//       );
//     });
//   })

//   .add("Square ", () => {
//     return React.createElement(() => {
//       const [activeToggleTab, setActiveToggleTab] = useState("");
//       return (
//         <Picker id="square" label="Square Swatches" columns="4">
//           <ColorSwatch
//             square
//             color="#E4423A"
//             isSelected={activeToggleTab === "tab1"}
//             onClick={() => {
//               if (activeToggleTab === "tab1") {
//                 setActiveToggleTab("");
//               } else {
//                 setActiveToggleTab("tab1");
//               }
//               return false;
//             }}
//           />
//           <ColorSwatch
//             square
//             color="#14A939"
//             isSelected={activeToggleTab === "tab2"}
//             onClick={() => {
//               if (activeToggleTab === "tab2") {
//                 setActiveToggleTab("");
//               } else {
//                 setActiveToggleTab("tab2");
//               }
//               return false;
//             }}
//           />
//           <ColorSwatch
//             square
//             color="#2F98EE"
//             isSelected={activeToggleTab === "tab3"}
//             onClick={() => {
//               if (activeToggleTab === "tab3") {
//                 setActiveToggleTab("");
//               } else {
//                 setActiveToggleTab("tab3");
//               }
//               return false;
//             }}
//           />
//         </Picker>
//       );
//     });
//   });
