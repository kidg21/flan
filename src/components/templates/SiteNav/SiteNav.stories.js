/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Panel from "layout/Panel";
import List, { ListItem } from "blocks/List";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Text from "base/Typography";
import Avatar from "atoms/Avatar";
import Command from "atoms/Command";
import Tabs, { TabItem } from "blocks/Tabs";
import Card, { CardGrid } from "elements/Card";
import NavigationPanelHeader from "elements/PanelHeaders/NavigationPanelHeader";
import Bar from "layout/Bar";
import Legend from "blocks/Legend";
import Grid from "layout/Grid";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Layout from "layout/Layout";

const siteData = (
  <Panel >
    <Tabs>
      <TabItem label="Parcels in Site" isSelected />
      <TabItem label="Measurements" />
    </Tabs>
    <CardGrid columns="1">
      <Card
        onClick
        commands={
          object(
            "commands",
            [
              {
                label: "View Details",
              },
            ],
          )}
        body={
          <Grid columns="1" gap="0">
            <Text text="Lollipop Factory" weight="bold" />
            <Text text="145 Lollipop Way, Lollipop LA 34209" />
            <Text text="APN # 1239832947" />
            <Text text="Owner Name" />
          </Grid>}
      />
      <Card
        onClick
        commands={
          object(
            "commands",
            [
              {
                label: "View Details",
              },
            ],
          )}
        body={
          <Grid columns="1" gap="0">
            <Text text="Lollipop Factory" weight="bold" />
            <Text text="145 Lollipop Way, Lollipop LA 34209" />
            <Text text="APN # 1239832947" />
            <Text text="Owner Name" />
          </Grid>}
      />
      <Card
        onClick
        commands={
          object(
            "commands",
            [
              {
                label: "View Details",
              },
            ],
          )}
        body={
          <Grid columns="1" gap="0">
            <Text text="Lollipop Factory" weight="bold" />
            <Text text="145 Lollipop Way, Lollipop LA 34209" />
            <Text text="APN # 1239832947" />
            <Text text="Owner Name" />
          </Grid>}
      />
      <Card
        onClick
        commands={
          object(
            "commands",
            [
              {
                label: "View Details",
              },
            ],
          )}
        body={
          <Grid columns="1" gap="0">
            <Text text="Lollipop Factory" weight="bold" />
            <Text text="145 Lollipop Way, Lollipop LA 34209" />
            <Text text="APN # 1239832947" />
            <Text text="Owner Name" />
          </Grid>}
      />
    </CardGrid>
  </Panel>
);

const options = [
  { label: "LightBox ID", value: "1212123232" },
  { label: "Latitude", value: "40.34234" },
  { label: "Longitude", value: "-73.432432" },
  { label: "Assessor Parcel Reconciliation", value: "Owner Check" },
  { label: "Address", value: "477 Madison Avenue" },
  { label: "City", value: "New York" },
  { label: "State", value: "New York" },
  { label: "Zip", value: "10222" },
  { label: "Census Tract", value: "10200" },
  { label: "Census Block", value: "N/A" },
  { label: "County", value: "New York" },
  { label: "CBSA", value: "New York-Newark-New Jersey" },
  { label: "Market", value: "New York" },
  { label: "Submarket", value: "Midtown East" },
  { label: "Opportunity Zone", value: "Yes" },
];


const listPanel = (
  <Panel header={
    <NavigationPanelHeader title="Site A1A" />}
  >
    <Legend data={options} />
  </Panel>
);

const infoPanel = (
  <List isInteractive>
    <ListItem
      title="< Jobs"
    />
    <ListItem
      title="Job Details"
    />
    <ListItem
      title="Site Verification"
    />
    <ListItem
      title="Data Checklist"
    />
    <ListItem
      title="Schedule Visit"
    />
    <ListItem
      title="Report"
    />
    <ListItem
      title="ReviewSend"
    />
  </List>
);


storiesOf("Templates|Panels/", module)
  .add(
    "Site Overview",
    () => {
      return React.createElement(() => {
        return (
          <Layout
            header={{
              id: "Header",
              content: (
                <Bar
                  contentAlign="center"

                  left={{
                    content: (
                      <Command
                        label="LightBox"
                      />
                    ),
                  }}
                  right={{
                    content: (
                      <IconBlock>
                        <Icon icon="calendar" />
                        <Icon icon="notification" />
                        <Avatar label="LG" />
                      </IconBlock>
                    ),
                    width: "10%",
                  }}
                />
              ),
            }}
            left={{ id: "Left", content: infoPanel }}
            main={{ id: "Main", content: (<Panel padding="0" header={<MainPanelHeader title="Site Verification" />} />) }}
            right={{ id: "Right", content: siteData }}
          />

        );
      });
    },
  )
  .add(
    "Property Summary",
    () => {
      return React.createElement(() => {
        return (
          <Layout
            header={{
              id: "Header",
              content: (
                <Bar
                  contentAlign="center"

                  left={{
                    content: (
                      <Command
                        label="LightBox"
                      />
                    ),
                  }}
                  right={{
                    content: (
                      <IconBlock>
                        <Icon icon="calendar" />
                        <Icon icon="notification" />
                        <Avatar label="LG" />
                      </IconBlock>
                    ),
                    width: "10%",
                  }}
                />
              ),
            }}
            left={{ id: "Left", content: infoPanel }}
            main={{ id: "Main", content: (<Panel padding="0" header={<MainPanelHeader title="Site Verification" />} />) }}
            right={{ id: "Right", content: listPanel }}
          />

        );
      });
    },
  );
