import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { screen } from "Variables";
import Tabs, { Tab } from "blocks/Tabs";
import Layout from "layout/Layout";
import Card from "layout/Card";

storiesOf("Application|Layout/", module)
  .add("2 Panel - Row", () => (
    <Layout>
      <Layout width="70%" />
      <Layout width="30%" right="0" backgroundColor="lightyellow" />
    </Layout>
  ))

  .add("2 Panel - Column", () => (
    <Layout>
      <Layout height="60%" />
      <Layout height="40%" top="60%" backgroundColor="lightgreen" />
    </Layout>
  ))

  .add("3 Panel", () => (
    <Layout>
      <Layout width="70%" height="60%" />
      <Layout width="70%" height="40%" top="60%" backgroundColor="lightgreen" />
      <Layout width="30%" right="0" backgroundColor="lightyellow" />
    </Layout>
  ))

  .add("Standard Application Layout (Interactive)", () =>
    React.createElement(() => {
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
      const screenSmall = window.matchMedia(screen.small);
      const screenMedium = window.matchMedia(screen.medium);
      let controlsAlign;
      if (screenMedium.matches) {
        controlsAlign = "right";
      } else if (screenSmall.matches) {
        controlsAlign = "bottom";
      }

      return (
        <Layout id="outer" name="outerWrapper">
          <Layout id="inner" name="innerWrapper" state={innerState}>
            <Layout id="left" name="leftWrapper" />
            <Layout id="main" name="mainWrapper" state={mainState}>
              <Layout id="middle" name="middleWrapper" state={middleState} />
              <Layout id="bottom" name="bottomWrapper" state={bottomState}>
                <Card>
                  <Tabs align="bottom">
                    <Tab tabLabel="Toggle Bottom Fullscreen" onClick={toggleBottomFullscreen} />
                  </Tabs>
                </Card>
              </Layout>
            </Layout>
            <Layout id="right" name="rightWrapper" state={rightState}>
              <Card>
                <Tabs align="bottom">
                  <Tab tabLabel="Toggle Right Fullscreen" onClick={toggleRightFullscreen} />
                </Tabs>
              </Card>
            </Layout>
          </Layout>
          <Layout id="controls" name="controlsWrapper">
            <Tabs align={controlsAlign}>
              <Tab tabLabel="Toggle Left Wrapper" onClick={toggleLeft} isSelected={activeLeft} />
              <Tab tabLabel="Toggle Right Wrapper" onClick={toggleRight} isSelected={activeRight} />
              <Tab
                tabLabel="Toggle Bottom Wrapper"
                onClick={toggleBottom}
                isSelected={activeBottom}
              />
            </Tabs>
          </Layout>
        </Layout>
      );
    }),
  );
