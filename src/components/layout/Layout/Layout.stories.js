/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { screen } from "Variables";
import Tabs, { Tab } from "blocks/Tabs";
import Card, { CardList } from "layout/Card";
import Layout from "layout/Layout";
import MobileLayout from "./MobileLayout.jsx";
import Panel, { PanelSection } from "layout/Panel";
import Form, { Section } from "layout/Form";
import TextInput from "atoms/TextInput";
import NewLayout from "./NewLayout.jsx";
import { CheckboxGroup } from "atoms/Checkbox";
import { RadioGroup } from "atoms/Radio";
import SelectMenu from "atoms/SelectMenu";

const LayoutNotes = markdown.require("./Layout.md");

storiesOf("Layout |App Layout/", module)
  .addParameters({
    info: {
      text: "Layout info goes here...",
    },
    notes: {
      markdown: LayoutNotes,
    },
  })

  .add(
    "Documentation",
    withInfo()(() => {
      return <Layout height="25%" />;
    }),
  )

  .add("New1", () => {
    return (
      <NewLayout />
    );
  })
  .add("New2", () => {
    return (
      <NewLayout theme="one" />
    );
  })
  .add("New3", () => {
    return (
      <NewLayout theme="two" />
    );
  })


  .add("2 Panel - Row", () => {
    return (
      <Layout>
        <Layout width="70%" />
        <Layout width="30%" right="0" backgroundColor="lightyellow" />
      </Layout>
    );
  })

  .add("2 Panel - Column", () => {
    return (
      <Layout>
        <Layout height="60%" />
        <Layout height="40%" top="60%" backgroundColor="lightgreen" />
      </Layout>
    );
  })

  .add("3 Panel", () => {
    return (
      <Layout>
        <Layout width="70%" height="60%" />
        <Layout
          width="70%"
          height="40%"
          top="60%"
          backgroundColor="lightgreen"
        />
        <Layout width="30%" right="0" backgroundColor="lightyellow" />
      </Layout>
    );
  })

  .add("New", () => {
    return (
      <MobileLayout />
    );
  })

  .add("Standard Layout (Containers)", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("tab1");

      return (
        <Layout id="outer" type="outerWrapper">

          <Layout id="controls" type="controlsWrapper">
            <Tabs>
              <Tab
                tabLabel="Tab 1"
                isSelected={activeSingleTab === "tab1"}
                onClick={() => {
                  setActiveSingleTab("tab1");
                }}
              />
              <Tab

                tabLabel="Right"
                isSelected={activeSingleTab === "tab2"}
                onClick={() => {
                  setActiveSingleTab("tab2");
                }}
              />
              <Tab
                tabLabel="Tab 3"
                isSelected={activeSingleTab === "tab3"}
                onClick={() => {
                  setActiveSingleTab("tab3");
                }}
              />
            </Tabs>
          </Layout>
        </Layout>
      );
    });
  });

// .add("Standard Layout (Content)", () => {
//   return React.createElement(() => {
//     // Left
//     const [innerState, setInnerState] = useState("leftCover");
//     const [activeLeft, setActiveLeft] = useState(false);
//     function toggleLeft() {
//       if (innerState === "leftUncover") {
//         setInnerState("leftCover");
//         setActiveLeft(false);
//       } else {
//         setInnerState("leftUncover");
//         setActiveLeft(true);
//       }
//       return false;
//     }
//     // Main
//     const [mainState, setMainState] = useState("rightOffscreen");
//     // Right
//     const [rightState, setRightState] = useState("rightOffscreen");
//     const [activeRight, setActiveRight] = useState(false);
//     function toggleRight() {
//       if (rightState === "rightOnscreen" || rightState === "fullScreen") {
//         setRightState("rightOffscreen");
//         setMainState("rightOffscreen");
//         setActiveRight(false);
//       } else {
//         setRightState("rightOnscreen");
//         setMainState("rightOnscreen");
//         setActiveRight(true);
//         setInnerState("leftCover");
//         setActiveLeft(false);
//       }
//       return false;
//     }
//     function toggleRightFullscreen() {
//       if (rightState === "fullScreen") {
//         setRightState("rightOnscreen");
//       } else {
//         setRightState("fullScreen");
//       }
//       return false;
//     }
//     // Middle
//     const [middleState, setMiddleState] = useState("bottomOffscreen");
//     // Bottom
//     const [bottomState, setBottomState] = useState("bottomOffscreen");
//     const [activeBottom, setActiveBottom] = useState(false);
//     function toggleBottom() {
//       if (bottomState === "bottomOnscreen" || bottomState === "fullScreen") {
//         setBottomState("bottomOffscreen");
//         setMiddleState("bottomOffscreen");
//         setActiveBottom(false);
//       } else {
//         setBottomState("bottomOnscreen");
//         setMiddleState("bottomOnscreen");
//         setActiveBottom(true);
//       }
//       return false;
//     }
//     function toggleBottomFullscreen() {
//       if (bottomState === "fullScreen") {
//         setBottomState("bottomOnscreen");
//       } else {
//         setBottomState("fullScreen");
//       }
//       return false;
//     }
//     // Controls
//     const screenSmall = window.matchMedia(screen.small);
//     const screenMedium = window.matchMedia(screen.medium);
//     let controlsAlign;
//     if (screenMedium.matches) {
//       controlsAlign = "right";
//     } else if (screenSmall.matches) {
//       controlsAlign = "bottom";
//     }

//     return (
//       <Layout id="outer" type="outerWrapper">
//         <Layout id="inner" type="innerWrapper" state={innerState}>
//           <Layout id="left" type="leftWrapper">
//             <Panel>
//               <PanelSection body>
//                 <Form
//                   title="Form Header"
//                   subtitle="This is the subtitle"
//                   description="Just think about these things in your mind - then bring them into your world. Isn't that fantastic?  All you need to paint is a few tools, a little instruction, and a vision in your mind."
//                 >
//                   <Section title="Group 1">
//                     <TextInput
//                       label="First Name"
//                       placeholder="John"
//                       helpText="The one that your parents gave you"
//                     />
//                     <TextInput
//                       label="Last Name"
//                       placeholder="Williams"
//                       helpText="The one that comes after.."
//                     />
//                   </Section>
//                   <Section title="Group 2">
//                     <CheckboxGroup
//                       id="Section Name"
//                       label="Checkbox Group Label"
//                       data={shortBoxes}
//                       helpText="Hang in there, buddy, I'm here to help!"
//                       columns="2"
//                     />
//                     <CheckboxGroup data={longBoxes} columns="1" />
//                     <SelectMenu
//                       multiSelect
//                       label="Multi-Select"
//                       placeholder="Choose One Or More..."
//                       helpText="Help text for the SelectMenu component"
//                       options={options}
//                     />
//                   </Section>
//                   <Section title="Group 3">
//                     <RadioGroup
//                       id="Section Name"
//                       label="Radio Group Label"
//                       data={shortRadios}
//                       helpText="Hang in there, buddy, I'm here to help!"
//                       columns="2"
//                     />
//                     <RadioGroup data={longRadios} columns="1" />
//                   </Section>
//                 </Form>
//               </PanelSection>
//             </Panel>
//           </Layout>

//           <Layout id="main" type="mainWrapper" state={mainState}>
//             <Layout id="middle" type="middleWrapper" state={middleState}>
//               <Mapbox />
//             </Layout>

//             <Layout id="bottom" type="bottomWrapper" state={bottomState}>
//               <Panel>
//                 <PanelSection>
//                   <Card>
//                     <Tabs>
//                       <Tab tabLabel="List" onClick={toggleBottomFullscreen} />
//                     </Tabs>
//                   </Card>
//                 </PanelSection>
//                 <PanelSection body>
//                   <CardList>
//                     <Card />
//                     <Card />
//                     <Card />
//                     <Card />
//                     <Card />
//                     <Card />
//                     <Card />
//                     <Card />
//                     <Card />
//                     <Card />
//                     <Card />
//                     <Card />
//                   </CardList>
//                 </PanelSection>
//               </Panel>
//             </Layout>
//           </Layout>

//           <Layout id="right" type="rightWrapper" state={rightState}>
//             <Panel>
//               <PanelSection>
//                 <Card>
//                   <Tabs>
//                     <Tab tabLabel="Filters" onClick={toggleRightFullscreen} />
//                   </Tabs>
//                 </Card>
//               </PanelSection>
//             </Panel>
//           </Layout>
//         </Layout>

<<<<<<< HEAD
//         <Layout id="controls" type="controlsWrapper">
//           <Tabs align={controlsAlign}>
//             <Tab
//               icon="location"
//               tabLabel="Property"
//               onClick={toggleLeft}
//               isSelected={activeLeft}
//               // noBorder
//             />
//             <Tab
//               icon="layers"
//               tabLabel="Layers"
//               // onClick={toggleLeft}
//               // isSelected={activeLeft}
//               // noBorder
//             />
//             <Tab
//               icon="filter"
//               tabLabel="Filters"
//               onClick={toggleRight}
//               isSelected={activeRight}
//               // noBorder
//             />

//             <Tab
//               icon="drawings"
//               tabLabel="Draw"
//               // onClick={toggleLeft}
//               // isSelected={activeLeft}
//               // noBorder
//             />
//             <Tab
//               icon="list"
//               tabLabel="List"
//               onClick={toggleBottom}
//               isSelected={activeBottom}
//               // noBorder
//             />
//           </Tabs>
//         </Layout>
//       </Layout>
//     );
//   });
// });
=======
          <Layout id="controls" type="controlsWrapper">
            <Tabs align={controlsAlign}>
              <Tab
                icon="location"
                tabLabel="Property"
                onClick={toggleLeft}
                isSelected={activeLeft}
              // noBorder
              />
              <Tab
                icon="layers"
                tabLabel="Layers"
              // onClick={toggleLeft}
              // isSelected={activeLeft}
              // noBorder
              />
              <Tab
                icon="filter"
                tabLabel="Filters"
                onClick={toggleRight}
                isSelected={activeRight}
              // noBorder
              />

              <Tab
                icon="drawings"
                tabLabel="Draw"
              // onClick={toggleLeft}
              // isSelected={activeLeft}
              // noBorder
              />
              <Tab
                icon="list"
                tabLabel="List"
                onClick={toggleBottom}
                isSelected={activeBottom}
              // noBorder
              />
            </Tabs>
          </Layout>
        </Layout>
      );
    });
  });
>>>>>>> 361826af33e49296fab60f7eb58f666f5c2130ee
