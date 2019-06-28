import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { fonts, colors, shadows } from "Variables";
import { storiesOf } from "@storybook/react";
import Panel, { PanelSection } from "layout/Panel";

import Card, { CardList } from "layout/Card";
import Tabs, { Tab } from "blocks/Tabs";
import LayoutMain, {
  Wrapper,
  OuterWrapper,
  InnerWrapper,
  LeftWrapper,
  CenterWrapper,
  CenterWrapperTop,
  CenterWrapperMiddle,
  CenterWrapperBottom,
  RightWrapper,
  BarWrapper,
} from "./Layout";

storiesOf("Application|Layout/", module).add("Layout - Test", () =>
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
    // const [leftOnscreen, setLeftOnscreen] = useState(false);
    const [activeLeft, setActiveLeft] = useState(false);
    const [leftState, setLeftState] = useState(null);
    function toggleLeft() {
      // setLeftOnscreen(!leftOnscreen);
      // rightState ? setRightState(true) : setRightState(false);
      if (leftState === null) {
        setActiveLeft(true);
        // setMainState("fullScreen");
        setLeftState("leftOpen");
      } else {
        setActiveLeft(false);
        // setMainState("");
        setLeftState(null);
      }
      // return false;
    }
    // }
    // Wrapper Right
    const [activeRight, setActiveRight] = useState(false);
    const [mainState, setMainState] = useState("fullScreen");
    const [rightState, setRightState] = useState("offscreenRight");
    function toggleRight() {
      if (rightState === null) {
        setActiveRight(false);
        setMainState("fullScreen");
        setRightState("offscreenRight");
      } else {
        setActiveRight(true);
        setMainState("");
        setRightState(null);
      }
      return false;
    }
    return (
      <Wrapper id="outer" name="outerWrapper">
        <Wrapper id="inner" name="innerWrapper" displayState="translate3d(30%, 0, 0)">
          <Wrapper id="left" name="leftWrapper" />
          <Wrapper id="content" name="contentWrapper" state={leftState}>
            <Wrapper id="main" name="mainWrapper" state={mainState} />
            <Wrapper id="right" name="rightWrapper" state={rightState} />
          </Wrapper>
          <Wrapper id="toggles" name="toggleWrapper">
            <Tabs align="right">
              <Tab tabLabel="Toggle Left Wrapper" onClick={toggleLeft} isSelected={activeLeft} />
              <Tab tabLabel="Toggle Right Wrapper" onClick={toggleRight} isSelected={activeRight} />
              {/* <Tab
                  tabLabel="top"
                  onClick={toggleTop}
                  isSelected={activeTop}
                /> */}
              {/* <Tab tabLabel="bottom" onClick={toggleBottom} /> */}
            </Tabs>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    );
  }),
);
