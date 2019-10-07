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
      return (
        <Layout>
        <Layout height="60%" >
            <Mapbox/>
            </Layout>
        <Layout height="40%" top="60%" >
        <Panel>

          <Bar
          left = { <Tabs >
          <Tab tabLabel="Tab" size="small"/>
          <Tab tabLabel="Tab" size="small"/>
          <Tab tabLabel="Tab" size="small"/>
          <Tab tabLabel="Tab" size="small"/>
          <Tab tabLabel="Tab" size="small"/>
          <Tab tabLabel="Tab" size="small"/>
        </Tabs>}
        right={<Menu data={data} position="bottomLeft"/>}
      />
        </Panel>
        </Layout>
        </Layout>
      );
    })
  );