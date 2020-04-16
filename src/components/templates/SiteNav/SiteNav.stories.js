/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Panel from "layout/Panel";
import Table from "blocks/Table";
import List, { ListItem } from "blocks/List";
import Icon from "atoms/Icon";
import Button from "atoms/Button";
import Search from "blocks/Search";
import IconBlock from "blocks/IconBlock";
import Text, { Title } from "base/Typography";
import Avatar from "atoms/Avatar";
import Command from "atoms/Command";
import Bar from "layout/Bar";
import Legend from "blocks/Legend";
import Grid from "layout/Grid";
import Form from "layout/Form";
import TextInput from "atoms/TextInput";
import Map from "layout/Map";
import Menu from "blocks/Menu";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Card from "elements/Card";
import Layout from "layout/Layout";
import Page, { PageSection } from "layout/Page";



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

const panelHeader = (
    <Bar padding="2x" left={<Title size="lg" text="Site Verification"/>}/>
);

const listPanel = (
    <Panel
    header={<Bar padding="2x" left={<Title size="lg" text="Site Verification"/>}/>}
    footer={<Bar right={<Button label="Confirm"/>}/>}>
   <Grid columns="2">
    <Map/>
    <Grid columns="1">
    <Legend  data={options} />
    <Form>
    <TextInput
            label="Dimensions"
            placeholder="103.3 SF x 149.5 SF"
          />
              <TextInput
            label="Primary Frontage St."
            placeholder="Madison Avenue"
          />
              <TextInput
            label="Primary Frontage SF"
            placeholder="103.3"
          />
              <TextInput
            label="Secondary Frontage St."
            placeholder="East 51st Street"
          />
              <TextInput
            label="Secondary Frontage SF"
            placeholder="149.5 SF"
          />
              <TextInput
            label="Comments"
          />
    </Form>
    </Grid>
    </Grid>
    </Panel>

);

const infoPanel = (
<List>
        <ListItem
         title="< Jobs"
        />
        <ListItem
          title="Job Details"/>
        <ListItem
          title="Site Verification"/>
        <ListItem
          title="Data Checklist"/>
         <ListItem
          title="Schedule Visit"/>
        <ListItem
          title="Report"/>
        <ListItem
          title="ReviewSend"/>
      </List>
);



storiesOf("Templates|Site Navigation", module)
  .add(
    "Default",
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
                            <Icon icon="calendar"/>
                            <Icon icon="notification"/>
                            <Avatar label="LG"/>
                        </IconBlock>
                      ),
                      width:"10%",
                    }}
                  />
                ),
              }}
            left={{ id: "Left", content: infoPanel }}
            main={{ id: "Main", content: listPanel }}
          />

        );
      });
    },
  );
