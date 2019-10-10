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



storiesOf("Templates|Results", module)
  .add("Results List", () =>
    React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("tab1");
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
          size="small"
          tabLabel="Tab 1"
          isSelected={activeSingleTab === "tab1"}
          onClick={() => {
            setActiveSingleTab("tab1");
          }}
          />
          <Tab
          type="inactive"
            size="small"
            tabLabel="Tab 2"
            isSelected={activeSingleTab === "tab2"}
            onClick={() => {
              setActiveSingleTab("tab2");
            }}
          />
          <Tab
          type="inactive"
            size="small"
            tabLabel="Tab 3"
            isSelected={activeSingleTab === "tab3"}
            onClick={() => {
              setActiveSingleTab("tab3");
            }}
          />
                    <Tab
          type="inactive"
          size="small"
          tabLabel="Tab 4"
          isSelected={activeSingleTab === "tab4"}
          onClick={() => {
            setActiveSingleTab("tab4");
          }}
          />
                    <Tab
          type="inactive"
          size="small"
          tabLabel="Tab 5"
          isSelected={activeSingleTab === "tab5"}
          onClick={() => {
            setActiveSingleTab("tab5");
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