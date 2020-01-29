/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import PropertyPanelHeader from "elements/PanelHeaders/PropertyPanelHeader";
import Legend from "blocks/Legend";
import Card from "elements/Card";
import Panel from "layout/Panel";
import List, { ListItem } from "blocks/List";

const lotData = [
  { id: "a", label: "Land Use", value: "Commercial" },
  { id: "b", label: "Land Description", value: "Miscellaneous Commercial" },
  { id: "c", label: "Lot Area", value: "62,344 SF | 1.43 Acres" },
];

const ownerData = [
  { id: "a", label: "Owner", value: "1830 La Cienga LLC" },
  { id: "b", label: "Last Transfer", value: "12/31/14" },
  { id: "c", label: "Last Market Sale", value: "10/31/13 for $11,000,110" },
  { id: "d", label: "Opportunity Zone ", value: "No" },
];

const buildingData = [
  { id: "a", label: "Value", value: "$11,851,071" },
  { id: "b", label: "Square Feet", value: "34,529 SF" },
  { id: "c", label: "# of Units", value: "1" },
  { id: "d", label: "Year Built", value: "1950" },
];

const data = [
  {
    id: "a",
    onClick: () => {
      console.log("clicked Save");
    },
    label: "Save",
  },
  {
    id: "b",
    onClick: () => {
      console.log("clicked Filter");
    },
    label: "Filter",
  },
  {
    id: "c",
    onClick: () => {
      console.log("clicked Share");
    },
    label: "Share",
  },
  {
    id: "d",
    onClick: () => {
      console.log("clicked Refresh");
    },
    label: "Refresh",
  },
  {
    id: "e",
    onClick: () => {
      console.log("clicked Layer");
    },
    label: "Layer",
  },
];

storiesOf("Templates|Panel", module).add("Property Panel", () => {
  return (
    <Panel
      header={
        <PropertyPanelHeader
          title="2801 Kelvin Avenue, Irvine, CA 92614"
          APN="374-342-8957"
          menuData={data}
          onClick={() => { }}
        />
      }
    >
      <Card
        body={
          <React.Fragment>
            <Legend title="Lot" data={lotData} />
            <Legend title="Owner" data={ownerData} />
            <Legend title="Building" data={buildingData} />
          </React.Fragment>
        }
      />
      <List interactive>
        <ListItem
          label="Demographics"
          description="This is the description"
        />
        <ListItem label="Education" description="This is the description" />
        <ListItem label="Topography" description="This is the description" />
        <ListItem label="Crime Rates" description="This is the description" />
        <ListItem label="Elevation" description="This is the description" />
        <ListItem label="Population" description="This is the description" />
        <ListItem label="Income" description="This is the description" />
        <ListItem
          label="Opportunity Zones"
          description="This is the description"
        />
      </List>
    </Panel>
  );
});
