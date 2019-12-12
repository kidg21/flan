/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import PropertyPanelHeader from "elements/PanelHeaders/PropertyPanelHeader";
import Legend from "blocks/Legend";
import Form, { Section } from "layout/Form";
import Card from "elements/Card";
import Layout from "layout/Layout";
import Divider from "atoms/Divider";
import Mapbox from "layout/Map";
import { CardList } from "layout/Card";
import Panel, { PanelSection } from "layout/Panel";
import List, { ListItem } from "blocks/List";

const lotData = [
  { id: "a", name: "Land Use", value: "Commercial" },
  { id: "b", name: "Land Description", value: "Miscellaneous Commercial" },
  { id: "c", name: "Lot Area", value: "62,344 SF | 1.43 Acres" }
];

const ownerData = [
  { id: "a", name: "Owner", value: "1830 La Cienga LLC" },
  { id: "b", name: "Last Transfer", value: "12/31/14" },
  { id: "c", name: "Last Market Sale", value: "10/31/13 for $11,000,110" },
  { id: "d", name: "Opportunity Zone ", value: "No" }
];

const buildingData = [
  { id: "a", name: "Value", value: "$11,851,071" },
  { id: "b", name: "Square Feet", value: "34,529 SF" },
  { id: "c", name: "# of Units", value: "1" },
  { id: "d", name: "Year Built", value: "1950" }
];

const data = [
  {
    id: "a",
    onClickLink: () => {
      console.log("clicked Save");
    },
    name: "Save"
  },
  {
    id: "b",
    onClickLink: () => {
      console.log("clicked Filter");
    },
    name: "Filter"
  },
  {
    id: "c",
    onClickLink: () => {
      console.log("clicked Share");
    },
    name: "Share"
  },
  {
    id: "d",
    onClickLink: () => {
      console.log("clicked Refresh");
    },
    name: "Refresh"
  },
  {
    id: "e",
    onClickLink: () => {
      console.log("clicked Layer");
    },
    name: "Layer"
  }
];

storiesOf("Templates|SI Panel", module).add("Property Panel", () => {
  return (
    <Layout>
      <Layout width="70%">
        <Panel>
          <PanelSection body>
            <Card
              title="5201 California Avenue, Irvine, CA 92614"
              line1="APN #23947828"
              line2="Irvine Company"
              tag="Same Owner"
            />
            <Card
              title="5201 California Avenue, Irvine, CA 92614"
              line1="APN #23947828"
              line2="Irvine Company"
              tag="Same Owner"
            />
            <Card
              title="5201 California Avenue, Irvine, CA 92614"
              line1="APN #23947828"
              line2="Irvine Company"
              tag="Same Owner"
            />
            <Card
              title="5201 California Avenue, Irvine, CA 92614"
              line1="APN #23947828"
              line2="Irvine Company"
              tag="Same Owner"
            />
            <Card
              title="5201 California Avenue, Irvine, CA 92614"
              line1="APN #23947828"
              line2="Irvine Company"
              tag="Same Owner"
            />
            <Card
              title="5201 California Avenue, Irvine, CA 92614"
              line1="APN #23947828"
              line2="Irvine Company"
              tag="Same Owner"
            />
            <Card
              title="5201 California Avenue, Irvine, CA 92614"
              line1="APN #23947828"
              line2="Irvine Company"
              tag="Same Owner"
            />
          </PanelSection>
        </Panel>
      </Layout>
      <Layout right="0" width="30%">
        <Mapbox />
      </Layout>
    </Layout>
  );
});
