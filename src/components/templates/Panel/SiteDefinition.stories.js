/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Legend from "blocks/Legend";
import Form, { Section } from "layout/Form";
import Card from "elements/Card";
import Layout from "layout/Layout";
import Button from "atoms/Button";
import Bar from "blocks/Bar";
import Title, { Description, SubTitle } from "base/Typography";
import Icon from "atoms/Icon";
import Image from "atoms/Image";
import Divider from "atoms/Divider";
import Mapbox from "layout/Map";
import { CardList } from "layout/Card";
import Panel, { PanelSection } from "layout/Panel";
import List, { ListItem } from "blocks/List";
import NavigationPanelHeader from "elements/PanelHeaders/NavigationPanelHeader";

const lotData = [
  { id: "a", name: "Land Use", value: "Commercial" },
  { id: "b", name: "Land Description", value: "Miscellaneous Commercial" },
  { id: "c", name: "Lot Area", value: "62,344 SF | 1.43 Acres" },
];

const ownerData = [
  { id: "a", name: "Owner", value: "1830 La Cienga LLC" },
  { id: "b", name: "Last Transfer", value: "12/31/14" },
  { id: "c", name: "Last Market Sale", value: "10/31/13 for $11,000,110" },
  { id: "d", name: "Opportunity Zone ", value: "No" },
];

const buildingData = [
  { id: "a", name: "Value", value: "$11,851,071" },
  { id: "b", name: "Square Feet", value: "34,529 SF" },
  { id: "c", name: "# of Units", value: "1" },
  { id: "d", name: "Year Built", value: "1950" },
];

const summaryData = [
  { id: "a", name: "Parcels", value: "1" },
  { id: "b", name: "Owners", value: "1" },
  { id: "c", name: "Buildings", value: "1" },
  { id: "d", name: "Square Footage", value: "1950" },
  { id: "a", name: "Acreage", value: "298" },
  { id: "b", name: "Topography", value: "Urban" },
  { id: "c", name: "Last Trans Date", value: "1/27/03" },
  { id: "d", name: "Sites Included", value: "Rockefeller" },
];

const data = [
  {
    id: "a",
    onClickLink: () => {
      console.log("clicked Save");
    },
    name: "Save",
  },
  {
    id: "b",
    onClickLink: () => {
      console.log("clicked Filter");
    },
    name: "Filter",
  },
  {
    id: "c",
    onClickLink: () => {
      console.log("clicked Share");
    },
    name: "Share",
  },
  {
    id: "d",
    onClickLink: () => {
      console.log("clicked Refresh");
    },
    name: "Refresh",
  },
  {
    id: "e",
    onClickLink: () => {
      console.log("clicked Layer");
    },
    name: "Layer",
  },
];

storiesOf("Templates|SI Panel", module)
  .add("Recommendations", () => {
    return (
      <Layout>
        <Layout>
          <Panel>
            <React.Fragment>
              <Bar
                padding="3x"
                contentAlign="center"
                leftWidth="3%"
                centerAlign="left"
                left={<Icon icon="left" type="info" size="lg" />}
                center={
                  <React.Fragment>
                    <Title text="Recommended Properties" size="2x" />
                    <Description text="Choose to add parcels to your site. You may choose from our recommended list or click directly on the map parcel to add." />
                  </React.Fragment>
                }
              />
            </React.Fragment>
          </Panel>
        </Layout>
        <Layout right="0" width="50%" height="90%" top="10%">
          <Panel>
            <PanelSection body>
              <CardList columns="1">
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
              </CardList>
            </PanelSection>
            <PanelSection>
              <Bar padding="2x" center={<Button label="Continue" />} />
            </PanelSection>
          </Panel>
        </Layout>
        <Layout width="50%" height="90%" top="10%">
          <Mapbox />
        </Layout>
      </Layout>
    );
  })

  .add("Property Panel", () => {
    return (
      <Layout>
        <Layout>
          <Panel>
            <React.Fragment>
              <Bar
                padding="3x"
                contentAlign="center"
                leftWidth="3%"
                centerAlign="left"
                left={<Icon icon="left" type="info" size="lg" />}
                center={
                  <React.Fragment>
                    <Title text="Confirm your Property" size="2x" />
                    <Description text="Confirm your property to continue defining your site" />
                  </React.Fragment>
                }
              />
            </React.Fragment>
          </Panel>
        </Layout>
        <Layout right="0" width="50%" height="90%" top="10%">
          <Panel>
            <PanelSection body>
              <Card
                title="5201 California Avenue, Irvine CA 92614"
                icon="directions"
                body={
                  <React.Fragment>
                    <Legend title="Lot" data={lotData} />
                    <Legend title="Owner" data={ownerData} />
                    <Legend title="Building" data={buildingData} />
                  </React.Fragment>
                }
              />
              <List interactive divider>
                <ListItem
                  label="Demographics"
                  description="This is the description"
                />
                <ListItem
                  label="Education"
                  description="This is the description"
                />
                <ListItem
                  label="Topography"
                  description="This is the description"
                />
                <ListItem
                  label="Crime Rates"
                  description="This is the description"
                />
                <ListItem
                  label="Elevation"
                  description="This is the description"
                />
                <ListItem
                  label="Population"
                  description="This is the description"
                />
                <ListItem
                  label="Income"
                  description="This is the description"
                />
                <ListItem
                  label="Opportunity Zones"
                  description="This is the description"
                />
              </List>
            </PanelSection>
            <PanelSection>
              <Bar padding="2x" center={<Button label="Continue" />} />
            </PanelSection>
          </Panel>
        </Layout>
        <Layout width="50%" height="90%" top="10%">
          <Mapbox />
        </Layout>
      </Layout>
    );
  })

  .add("Edit", () => {
    return (
      <Layout>
        <Layout>
          <Panel>
            <React.Fragment>
              <Bar
                padding="3x"
                contentAlign="center"
                leftWidth="3%"
                centerAlign="left"
                left={<Icon icon="left" type="info" size="lg" />}
                center={
                  <React.Fragment>
                    <Title text="Edit your Site Geometry" size="2x" />
                    <Description text="Add or remove parcels to your site by clicking directly on the map parcel to add to list" />
                  </React.Fragment>
                }
              />
            </React.Fragment>
          </Panel>
        </Layout>
        <Layout right="0" width="50%" height="90%" top="10%">
          <Panel>
            <PanelSection body>
              <Card
                title="5201 California Avenue, Irvine CA 92614"
                icon="directions"
                body={
                  <React.Fragment>
                    <Legend title="Lot" data={lotData} />
                    <Legend title="Owner" data={ownerData} />
                    <Legend title="Building" data={buildingData} />
                  </React.Fragment>
                }
              />
              <Bar
                padding="2x"
                left={<SubTitle size="sm" text="Properties Added" />}
              />
              <CardList columns="1">
                <Card
                  title="Empire State Building"
                  description="This is the description"
                />
                <Card
                  title="Eiffel Tower"
                  description="This is the description"
                />
              </CardList>
            </PanelSection>
            <PanelSection>
              <Bar padding="2x" center={<Button label="Continue" />} />
            </PanelSection>
          </Panel>
        </Layout>
        <Layout width="50%" height="90%" top="10%">
          <Mapbox />
        </Layout>
      </Layout>
    );
  })

  .add("Summary", () => {
    return (
      <Layout>
        <Layout>
          <Panel>
            <React.Fragment>
              <Bar
                padding="3x"
                contentAlign="center"
                leftWidth="3%"
                centerAlign="left"
                left={<Icon icon="left" type="info" size="lg" />}
                center={
                  <React.Fragment>
                    <Title text="Completed Site Definition" size="2x" />
                    <Description text="Add or remove parcels to your site by clicking directly on the map parcel to add to list" />
                  </React.Fragment>
                }
              />
            </React.Fragment>
          </Panel>
        </Layout>
        <Layout right="0" width="50%" height="90%" top="10%">
          <Panel>
            <PanelSection body>
              <CardList columns="1">
                <Card
                  icon="download"
                  title="Site Summary"
                  body={
                    <React.Fragment>
                      <Legend data={summaryData} />
                    </React.Fragment>
                  }
                />
                <Card
                  title="5201 California Avenue, Irvine CA 92614"
                  icon="directions"
                  body={
                    <React.Fragment>
                      <Legend title="Lot" data={lotData} />
                      <Legend title="Owner" data={ownerData} />
                      <Legend title="Building" data={buildingData} />
                    </React.Fragment>
                  }
                />
                <Bar
                  padding="2x"
                  left={<Title size="sm" text="Properties Added" />}
                />
                <Card
                  title="Empire State Building"
                  description="This is the description"
                />
                <Card
                  title="Eiffel Tower"
                  description="This is the description"
                />
              </CardList>
            </PanelSection>
            <PanelSection>
              <Bar padding="2x" center={<Button label="Continue" />} />
            </PanelSection>
          </Panel>
        </Layout>
        <Layout width="50%" height="90%" top="10%">
          <Mapbox />
        </Layout>
      </Layout>
    );
  });
