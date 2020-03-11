/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import LightBoxIcon from "images/LightBoxIconLogo.png";
import Panel from "layout/Panel";
import DataTable from "blocks/Table";
import List, { ListItem } from "blocks/List";
import Mapbox from "layout/Map";
import { Title } from "base/Typography";
import Avatar from "atoms/Avatar";
import Command from "atoms/Command";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import IconBlock from "blocks/IconBlock";
import Card, { CardGrid } from "elements/Card";
import Template from "layout/Template";

const map = (
  <Mapbox />
);

const listPanel = (
  <Panel
    id="Panel"
  >
    <List interactive>
      <ListItem title="Layers" />
      <ListItem title="Results" />
      <ListItem title="Form" />
      <ListItem title="Research" />
    </List>
  </Panel>
);

const infoPanel = (
  <Card
    media="https://cdn.facilityexecutive.com/wp-content/uploads/2019/09/38391858_ml-800x418-1-574x300.jpg" // Image
    mediaDesc="Media Description"
    title="Card Title"
    description="Card Description"
    icon="bookmark_solid"
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    shadow="none"
  />
);

const tableHeaders = [
  { id: "options", label: "Actions" },
  { id: "ACREAGE", label: "Acreage", sortable: true },
  { id: "AGGR_ACREAGE", label: "Aggregate Acreage", sortable: true },
  { id: "AGGR_LOT_COUNT", label: "Aggregate Lot Count" },
  { id: "APN", label: "APN" },
  { id: "BUILDING_SQFT", label: "Building SQFT", sortable: true },
  { id: "DATE_TRANSFER", label: "Date Transfer", sortable: true },
  { id: "LAND_SQFT", label: "Land SQFT" },
  { id: "MAIL_ADDR", label: "Mailing Address" },
  { id: "OWNER_NAME_1", label: "Owner Name 1" },
];

const tableData = [
  {
    ACREAGE: "0.12",
    AGGR_ACREAGE: "0.12",
    AGGR_GROUP: "510684071_237050",
    AGGR_LOT_COUNT: "1",
    APN: "5149-015-023",
    BUILDING_SQFT: "34658",
    DATE_TRANSFER: "2019/09/04 00:00:00",
    DRAW_TYPE: "",
    LAND_SQFT: "5027",
    MAIL_ADDR: "353 S BROADWAY # 500",
    OWNER_NAME_1: "CHANDLER, HARRY BRANT",
  },
  {
    ACREAGE: "1.11",
    AGGR_ACREAGE: "1.11",
    AGGR_GROUP: "510684071_237208",
    AGGR_LOT_COUNT: "1",
    APN: "5149-032-019",
    BUILDING_SQFT: "399256",
    DATE_TRANSFER: "2019/07/24 00:00:00",
    DRAW_TYPE: "",
    LAND_SQFT: "48504",
    MAIL_ADDR: "250 W 55TH ST",
    OWNER_NAME_1: "IDC MANAGING MEMBER TIC LLC",
  },
  {
    ACREAGE: "0.94",
    AGGR_ACREAGE: "0.94",
    AGGR_GROUP: "510684071_238978",
    AGGR_LOT_COUNT: "1",
    APN: "5161-026-040",
    BUILDING_SQFT: "223783",
    DATE_TRANSFER: "2019/07/11 00:00:00",
    DRAW_TYPE: "",
    LAND_SQFT: "41050",
    MAIL_ADDR: "",
    OWNER_NAME_1: "EQR STOA LP",
  },
  {
    ACREAGE: "0.07",
    AGGR_ACREAGE: "0.684631",
    AGGR_GROUP: "510684071_239100",
    AGGR_LOT_COUNT: "3",
    APN: "5163-002-006",
    BUILDING_SQFT: "600",
    DATE_TRANSFER: "2019/09/09 00:00:00",
    DRAW_TYPE: "",
    LAND_SQFT: "3182",
    MAIL_ADDR: "",
    OWNER_NAME_1: "EAST 1ST STREET PROPERTY LLC",
  },
  {
    ACREAGE: "0.12",
    AGGR_ACREAGE: "0.12",
    AGGR_GROUP: "510684071_237050",
    AGGR_LOT_COUNT: "1",
    APN: "5149-015-023",
    BUILDING_SQFT: "34658",
    DATE_TRANSFER: "2019/09/04 00:00:00",
    DRAW_TYPE: "",
    LAND_SQFT: "5027",
    MAIL_ADDR: "353 S BROADWAY # 500",
    OWNER_NAME_1: "CHANDLER, HARRY BRANT",
  },
];

const dataTable = (
  <DataTable
    headers={tableHeaders.slice(1)}
    rows={tableData}
    listId="foo"
    columnWidth={180}
  />
);

storiesOf("Template |Templates/Template A/", module)
  .add(
    "Base",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(false);
        const seeLeftRegion = () => { setLeftOpen(!leftOpen); };
        const [rightOpen, setRightOpen] = useState(false);
        const seeRightRegion = () => { setRightOpen(!rightOpen); };
        const [bottomOpen, setBottomOpen] = useState(false);
        const seeBottomRegion = () => { setBottomOpen(!bottomOpen); };
        return (
          <Template
            header={{
              id: "Header",
              content: (
                <Bar
                  padding="2x"
                  contentAlign="center"
                  leftWidth="max-content"
                  left={
                    <Avatar
                      image
                      src={LightBoxIcon}
                      alt="logo"
                      onClick={seeLeftRegion}
                    />
                  }
                  center={<Title text="Layout Component" />}
                  rightWidth="max-content"
                  right={
                    <Command
                      icon="right"
                      label="Right"
                      align="right"
                      onClick={seeRightRegion}
                    />
                  }
                />
              ),
            }}
            left={{
              content: listPanel,
              toggle: seeLeftRegion,
              visible: leftOpen,
            }}
            main={{ content: map }}
            right={{
              content: infoPanel,
              toggle: seeRightRegion,
              visible: rightOpen,
            }}
            bottom={{
              content: dataTable,
              toggle: seeBottomRegion,
              visible: bottomOpen,
            }}
            footer={{
              id: "Footer",
              content: (
                <Bar
                  padding="2x"
                  center={
                    <Command
                      icon="down"
                      label="Bottom"
                      align="Bottom"
                      onClick={seeBottomRegion}
                    />
                  }
                />
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Configured Icons",
    () => {
      return React.createElement(() => {
        const [rightOpen, setRightOpen] = useState(true);
        const seeRightRegion = () => { setRightOpen(!rightOpen); };
        const [leftOpen, setLeftOpen] = useState(true);
        const seeLeftRegion = () => { setLeftOpen(!leftOpen); rightOpen(false); };
        const navBar = {
          content: "",
          id: "Left Region",
          toggle: seeLeftRegion,
          visible: leftOpen,
        };
        const appBar = {
          content: "",
          id: "Right Region",
          toggle: seeRightRegion,
          visible: rightOpen,
        };
        return (
          <Template
            header={{
              // content: "Title",
              id: "Header",
              right: (
                <IconBlock>
                  <Icon icon="list" onClick={seeRightRegion} />
                  <Icon icon="chat" onClick={seeRightRegion} />
                  <Icon icon="calendar" onClick={seeRightRegion} />
                </IconBlock>
              ),
              // width: "max-content", // Separate left/right widths
            }}
            left={navBar}
            main={{
              // content: <Mapbox />,
              id: "Main Region",
            }}
            right={appBar}
          />
        );
      });
    },
  )
  .add(
    "With Bottom",
    () => {
      return React.createElement(() => {
        const [rightOpen, setRightOpen] = useState(true);
        const seeRightRegion = () => { setRightOpen(!rightOpen); };
        const [bottomOpen, setBottomOpen] = useState(false);
        const seeBottomRegion = () => { setBottomOpen(!bottomOpen); };
        const [leftOpen, setLeftOpen] = useState(true);
        const seeLeftRegion = () => { setLeftOpen(!leftOpen); rightOpen(false); };

        // const navBar = {
        //   content: (
        //     <Panel
        //       id="Panel"
        //     >
        //       <List interactive>
        //         <ListItem title="Layers" />
        //         <ListItem title="Results" />
        //         <ListItem title="Form" />
        //         <ListItem title="Research" />
        //       </List>
        //     </Panel>
        //   )
        // };

        const leftBar = {
          content: (
            <DataTable
              headers={tableHeaders.slice(1)}
              rows={tableData}
              listId="foo"
              columnWidth={180}
            />
          ),
          visible: leftOpen,
          toggle: seeLeftRegion,
        };
        const rightBar = {
          content: (
            <DataTable
              headers={tableHeaders.slice(1)}
              rows={tableData}
              listId="foo"
              columnWidth={180}
            />
          ),
          visible: rightOpen,
          toggle: seeRightRegion,
        };
        const bottomBar = {
          content: (
            <DataTable
              headers={tableHeaders.slice(1)}
              rows={tableData}
              listId="foo"
              columnWidth={180}
            />
          ),
          visible: bottomOpen,
          toggle: seeBottomRegion,
        };
        return (
          <Template
            header={{
              content: "",
              width: "15%",
              right: (
                <IconBlock>
                  <Icon icon="list" onClick={seeBottomRegion} />
                  <Icon icon="chat" onClick={seeRightRegion} />
                  <Icon icon="calendar" onClick />
                </IconBlock>
              ),
            }}
            main=""
            right={rightBar}
            left={leftBar}
            bottom={bottomBar}
          />
        );
      });
    },
  );

