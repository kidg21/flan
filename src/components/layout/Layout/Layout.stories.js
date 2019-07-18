import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { colors, viewport, screen } from "Variables";
import Tabs, { Tab } from "blocks/Tabs";
import Wrapper from "layout/Layout";
import Card from "layout/Card";

storiesOf("Application|Layout/", module)
  .add("2 Panel - 70/30", () => (
    <Wrapper>
      <Wrapper width="70%" />
      <Wrapper width="30%" right="0" backgroundColor="lightyellow" />
    </Wrapper>
  ))

  .add("Layout - Test", () =>
    React.createElement(() => {
      // Wrapper Inner
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

      // Wrapper Main
      const [mainState, setMainState] = useState("rightOffscreen");
      // Wrapper Right
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

      // Wrapper Middle
      const [middleState, setMiddleState] = useState("bottomOffscreen");
      // Wrapper Bottom
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

      const screenSmall = window.matchMedia(screen.small);
      const screenMedium = window.matchMedia(screen.medium);
      let controlsAlign;
      if (screenMedium.matches) {
        controlsAlign = "right";
      } else if (screenSmall.matches) {
        controlsAlign = "bottom";
      }

      return (
        <Wrapper id="outer" name="outerWrapper">
          <Wrapper id="inner" name="innerWrapper" state={innerState}>
            <Wrapper id="offscreenLeft" name="leftWrapper" />
            <Wrapper id="main" name="mainWrapper" state={mainState}>
              <Wrapper id="middle" name="middleWrapper" state={middleState} />
              <Wrapper id="bottom" name="bottomWrapper" state={bottomState}>
                <Card>
                  <Tabs align="bottom">
                    <Tab tabLabel="Toggle Bottom Fullscreen" onClick={toggleBottomFullscreen} />
                  </Tabs>
                </Card>
              </Wrapper>
            </Wrapper>
            <Wrapper id="offscreenRight" name="rightWrapper" state={rightState}>
              <Card>
                <Tabs align="bottom">
                  <Tab tabLabel="Toggle Right Fullscreen" onClick={toggleRightFullscreen} />
                </Tabs>
              </Card>
            </Wrapper>
          </Wrapper>
          <Wrapper id="controls" name="controlsWrapper">
            <Tabs align={controlsAlign}>
              <Tab tabLabel="Toggle Left Wrapper" onClick={toggleLeft} isSelected={activeLeft} />
              <Tab tabLabel="Toggle Right Wrapper" onClick={toggleRight} isSelected={activeRight} />
              <Tab
                tabLabel="Toggle Bottom Wrapper"
                onClick={toggleBottom}
                isSelected={activeBottom}
              />
            </Tabs>
          </Wrapper>
        </Wrapper>
      );
    }),
  );
