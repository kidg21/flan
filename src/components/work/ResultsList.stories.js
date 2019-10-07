import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import NavigationPanelHeader from "elements/PanelHeaders/NavigationPanelHeader";
import NavigationCardBar from "elements/CardBars/NavigationCardBar";
import Panel, { PanelSection } from "layout/Panel";
import Layout from "layout/Layout";
import Mapbox from "layout/Map";
import Tabs, { Tab } from "blocks/Tabs";
import Bar from "blocks/Bar";
import Menu from "blocks/Menu";

const data = [
    { id: "a", onClickLink: "", name: "Save" },
    { id: "b", onClickLink: "", name: "Filter" },
    { id: "c", onClickLink: "", name: "Share" },
    { id: "d", onClickLink: "", name: "Filter" },
    { id: "e", onClickLink: "", name: "Layer" },
  ];



storiesOf("Work|Results", module)
  .add("Results List", () =>
    React.createElement(() => {
      const [activeMultiTab, setActiveMultiTab] = useState(true);
      const [activeMultiTab2, setActiveMultiTab2] = useState(false);
      const [activeMultiTab3, setActiveMultiTab3] = useState(false);
      const [activeMultiTab4, setActiveMultiTab4] = useState(false);
      const [activeMultiTab5, setActiveMultiTab5] = useState(false);
      return (
        <Layout>
        <Layout height="60%" >
            <Mapbox/>
            </Layout>
        <Layout height="40%" top="60%" >
        <Panel>

          <Bar
          left = { <Tabs >
          <Tab
          type="inactive"
            tabLabel="Tab 1"
            size="small"
            isSelected={activeMultiTab}
            onClick={() => {
              setActiveMultiTab(!activeMultiTab);
            }}
          />
          <Tab
          type="inactive"
            tabLabel="Tab 2"
            size="small"
            isSelected={activeMultiTab2}
            onClick={() => {
              setActiveMultiTab2(!activeMultiTab2);
            }}
          />
          <Tab
          type="inactive"
            tabLabel="Tab 3"
            size="small"
            isSelected={activeMultiTab3}
            onClick={() => {
              setActiveMultiTab3(!activeMultiTab3);
            }}
          />
                    <Tab
          type="inactive"
            tabLabel="Tab 4"
            size="small"
            isSelected={activeMultiTab3}
            onClick={() => {
              setActiveMultiTab4(!activeMultiTab4);
            }}
          />
                    <Tab
          type="inactive"
            tabLabel="Tab 5"
            size="small"
            isSelected={activeMultiTab3}
            onClick={() => {
              setActiveMultiTab5(!activeMultiTab5);
            }}
          />
        </Tabs>}
        right={<Menu data={data} position="bottomLeft"/>}
      />
        </Panel>
        </Layout>
        </Layout>
      );
    })
  );