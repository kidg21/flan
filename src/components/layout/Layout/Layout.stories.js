import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Tabs, { Tab } from "blocks/Tabs";
import Wrapper from "layout/Layout";

storiesOf("Application|Layout/", module)
  .add("2 Panel - 70/30", () => (
    <Wrapper>
      <Wrapper width="70%" />
      <Wrapper width="30%" right="0" backgroundColor="lightyellow" />
    </Wrapper>
  ))

  .add("Layout - Test", () =>
    React.createElement(() => {
      // Wrapper Top
      // const [topOnscreen, setTopOnscreen] = useState(false);
      const [activeTop, setActiveTop] = useState(false);
      const [topState, setTopState] = useState("offscreenRight");
      function toggleTop() {
        if (topState === null) {
          setActiveTop(false);
          // setActiveToggleTab("");
          // setMainWidth(mainWidthMax);
          setTopState("offscreenRight");
        } else {
          setActiveTop(true);
          // setActiveToggleTab("tabTop");
          // setMainWidth(mainWidthMin);
          setTopState(null);
        }
        // activeTop === true;
        return false;
      }
      //   setTopOnscreen(!topOnscreen); // Toggles the Top Wrapper
      // }
      // Wrapper Bottom
      const [bottomOnscreen, setBottomOnscreen] = useState(false);
      function toggleBottom() {
        setBottomOnscreen(!bottomOnscreen); // Toggles the Bottom Wrapper
      }

      // Wrapper Left
      const [leftState, setLeftState] = useState("offScreen");
      const [activeLeft, setActiveLeft] = useState(false);
      function toggleLeft() {
        if (leftState === "onScreen") {
          setLeftState("offScreen");
          setActiveLeft(false);
        } else {
          setLeftState("onScreen");
          setActiveLeft(true);
        }
        return false;
      }

      // Wrapper Main
      const [mainState, setMainState] = useState("fullScreen");

      // Wrapper Right
      const [rightState, setRightState] = useState("offScreen");
      const [activeRight, setActiveRight] = useState(false);
      function toggleRight() {
        if (rightState === "onScreen" || rightState === "fullScreen") {
          setRightState("offScreen");
          setMainState("fullScreen");
          setActiveRight(false);
        } else {
          setRightState("onScreen");
          setMainState("onScreen");
          setActiveRight(true);
        }
        return false;
      }
      function toggleRightFullscreen() {
        if (rightState === "fullScreen") {
          setRightState("onScreen");
        } else {
          setRightState("fullScreen");
        }
        return false;
      }

      return (
        <Wrapper id="outer" name="outerWrapper">
          <Wrapper id="inner" name="innerWrapper">
            <Wrapper id="left" name="leftWrapper" />
            <Wrapper id="content" name="contentWrapper" state={leftState}>
              <Wrapper id="main" name="mainWrapper" state={mainState} />
              <Wrapper id="right" name="rightWrapper" state={rightState}>
                <Tabs align="bottom">
                  <Tab tabLabel="Toggle Fullscreen" onClick={toggleRightFullscreen} />
                </Tabs>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper id="controls" name="controlsWrapper">
            <Tabs align="right">
              <Tab tabLabel="Toggle Left Wrapper" onClick={toggleLeft} isSelected={activeLeft} />
              <Tab tabLabel="Toggle Right Wrapper" onClick={toggleRight} isSelected={activeRight} />
            </Tabs>
          </Wrapper>
        </Wrapper>
      );
    }),
  );
