import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { screen } from "Variables";
import Tabs, { Tab } from "blocks/Tabs";
import Card from "layout/Card";
import Layout from "layout/Layout";
import Mapbox from "layout/Map";
import MapSearch from "elements/MapSearch";
import LayoutNotes from "./Layout.md";
import Panel, {PanelSection} from "layout/Panel";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import NavigationCardBar from "elements/CardBars/NavigationCardBar";

storiesOf("Layout |App Layout/", module)
  .addParameters({
    info: {
      text: "Layout info goes here...",
    },
    notes: {
      markdown: LayoutNotes,
    },
  })

  .add("Documentation", withInfo()(() => <Layout height="25%" />))

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

  .add("Standard Layout (Interactive)", () =>
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
        <Layout id="outer" type="outerWrapper">
          <Layout id="inner" type="innerWrapper" state={innerState}>
            <Layout id="left" type="leftWrapper" />
            <Layout id="main" type="mainWrapper" state={mainState}>
              <Layout id="middle" type="middleWrapper" state={middleState}>
                <Mapbox />
                <MapSearch />
              </Layout>
              <Layout id="bottom" type="bottomWrapper" state={bottomState}>
                <Card>
                  <Tabs align="bottom">
                    <Tab
                      tabLabel="Toggle Bottom Fullscreen"
                      onClick={toggleBottomFullscreen}
                    />
                  </Tabs>
                </Card>
              </Layout>
            </Layout>
            <Layout id="right" type="rightWrapper" state={rightState}>
              <Panel>
          <PanelSection>
            <MainPanelHeader title="Filters" />
          </PanelSection>
          <PanelSection body>
            <NavigationCardBar title="Property Search" />
            <NavigationCardBar title="Builder Sites" />
            <NavigationCardBar title="Demographics" />

            <NavigationCardBar title="Foreclosures" />
            <NavigationCardBar title="Points of Interest" />

            <NavigationCardBar title="Public Schools" />
            <NavigationCardBar title="Qualified Opportunity Zones" />
            <NavigationCardBar title="School District Rating" />
            <NavigationCardBar title="Traffic" />
            <NavigationCardBar title="Transaction" />
            <NavigationCardBar title="Zones" />
          </PanelSection>
        </Panel>
            </Layout>
          </Layout>
          <Layout id="controls" type="controlsWrapper">
            <Tabs align={controlsAlign}>
            <Tab
            icon="location"
                tabLabel="Property"
                onClick={toggleLeft}
                isSelected={activeLeft}
              />
            <Tab
              icon="layers"
                tabLabel="Layers"
                onClick={toggleLeft}
                isSelected={activeLeft}
              />
              <Tab
              icon="filter"
                tabLabel="Filters"
                onClick={toggleRight}
                isSelected={activeRight}

              />

              <Tab
              icon="drawings"
                tabLabel="Draw"
                onClick={toggleLeft}
                isSelected={activeLeft}
              />
            <Tab
              icon="list"
                tabLabel="List"
                onClick={toggleBottom}
                isSelected={activeBottom}
              />
            </Tabs>
          </Layout>
        </Layout>
      );
    }),
  );
