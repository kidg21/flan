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

  // .add("Standard Layout (Containers)", () => {
  //   return React.createElement(() => {
  //     const [activeSingleTab, setActiveSingleTab] = useState("tab1");

  //     return (
  //       <Layout id="outer" type="outerWrapper">

  //         <Layout id="controls" type="controlsWrapper">
  //           <Tabs>
  //             <Tab
  //               tabLabel="Tab 1"
  //               isSelected={activeSingleTab === "tab1"}
  //               onClick={() => {
  //                 setActiveSingleTab("tab1");
  //               }}
  //             />
  //             <Tab

  //               tabLabel="Right"
  //               isSelected={activeSingleTab === "tab2"}
  //               onClick={() => {
  //                 setActiveSingleTab("tab2");
  //               }}
  //             />
  //             <Tab
  //               tabLabel="Tab 3"
  //               isSelected={activeSingleTab === "tab3"}
  //               onClick={() => {
  //                 setActiveSingleTab("tab3");
  //               }}
  //             />
  //           </Tabs>
  //         </Layout>
  //       </Layout>
  //     );
  //   });
  // });

  .add("Standard Layout (Content)", () => {
    return React.createElement(() => {
      // Left
      const [innerState, setInnerState] = useState("leftCover");
      const [activeLeft, setActiveLeft] = useState(false);
      function toggleLeft() {
        if (innerState === "leftUncover") {
          setInnerState("leftCover");
          setActiveLeft(false);
        } else {
          setInnerState("leftUncover");
          setActiveLeft(true);
        }
        return false;
      }
      // Main
      const [mainState, setMainState] = useState("rightOffscreen");
      // Right
      const [rightState, setRightState] = useState("rightOffscreen");
      const [activeRight, setActiveRight] = useState(false);
      function toggleRight() {
        if (rightState === "rightOnscreen" || rightState === "fullScreen") {
          setRightState("rightOffscreen");
          setMainState("rightOffscreen");
          setActiveRight(false);
        } else {
          setRightState("rightOnscreen");
          setMainState("rightOnscreen");
          setActiveRight(true);
          setInnerState("leftCover");
          setActiveLeft(false);
        }
        return false;
      }
      function toggleRightFullscreen() {
        if (rightState === "fullScreen") {
          setRightState("rightOnscreen");
        } else {
          setRightState("fullScreen");
        }
        return false;
      }
      // Middle
      const [middleState, setMiddleState] = useState("bottomOffscreen");
      // Bottom
      const [bottomState, setBottomState] = useState("bottomOffscreen");
      const [activeBottom, setActiveBottom] = useState(false);
      function toggleBottom() {
        if (bottomState === "bottomOnscreen" || bottomState === "fullScreen") {
          setBottomState("bottomOffscreen");
          setMiddleState("bottomOffscreen");
          setActiveBottom(false);
        } else {
          setBottomState("bottomOnscreen");
          setMiddleState("bottomOnscreen");
          setActiveBottom(true);
        }
        return false;
      }
      function toggleBottomFullscreen() {
        if (bottomState === "fullScreen") {
          setBottomState("bottomOnscreen");
        } else {
          setBottomState("fullScreen");
        }
        return false;
      }
      // Controls
      // const screenSmall = window.matchMedia(screen.small);
      // const screenMedium = window.matchMedia(screen.medium);
      // let controlsAlign;
      // if (screenMedium.matches) {
      //   controlsAlign = "right";
      // } else if (screenSmall.matches) {
      //   controlsAlign = "bottom";
      // }

      return (
        <Layout id="outer" type="outerWrapper">
          <Layout id="inner" type="innerWrapper" state={innerState}>
            <Layout id="left" type="leftWrapper" />
            <Layout id="main" type="mainWrapper" state={mainState}>
              <Layout id="middle" type="middleWrapper" state={middleState} />
              <Layout id="bottom" type="bottomWrapper" state={bottomState}>
                <Tabs>
                  <Tab tabLabel="List" onClick={toggleBottomFullscreen} />
                </Tabs>
              </Layout>
            </Layout>
            <Layout id="right" type="rightWrapper" state={rightState}>
              <Tabs>
                <Tab tabLabel="Filters" onClick={toggleRightFullscreen} />
              </Tabs>
            </Layout>
          </Layout>
          <Layout id="controls" type="controlsWrapper">
            <Tabs >
              <Tab
                tabLabel="Property"
                onClick={toggleLeft}
                isSelected={activeLeft}
              />
              <Tab
                tabLabel="Layers"
              />
              <Tab
                tabLabel="Filters"
                onClick={toggleRight}
                isSelected={activeRight}
              />

              <Tab
                tabLabel="Draw"
              />
              <Tab
                tabLabel="List"
                onClick={toggleBottom}
                isSelected={activeBottom}
              />
            </Tabs>
          </Layout>
        </Layout>
      );
    });
  });
