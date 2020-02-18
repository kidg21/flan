/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, {useState} from "react";
import Panel from "layout/Panel";
import DataTable from "blocks/Table";
import Card, { CardGrid } from "elements/Card";
import List, { ListItem } from "blocks/List";
import Mapbox from "layout/Map";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Title from "base/Typography";
import Template from "./Template.jsx";

const TemplateNotes = markdown.require("./Template.md");

const headers = [
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

const data = [
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
    headers={headers.slice(1)}
    rows={data}
    listId="foo"
    columnWidth={180}
  />
);

const navBar = {
  content: (
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
  ),
};

storiesOf("Layout |Templates/Template A/", module)
  .addParameters({
    info: {
      text: "Layout info goes here...",
    },
    notes: {
      markdown: TemplateNotes,
    },
  })
  .add(
    "Base",
    () => {
      return (
        <Template
          header={{ content: "" }}
          left={{ content: "" }}
          main=""
          right={{ content: "" }}
          footer={{ content: "" }}
        />
      );
    },
  )
  .add(
    "Configured",
    () => {
      return React.createElement(() => {
        /* let seeRightRegion = null;
        let rightOpen = right.visible;
        let setRightOpen = right.toggle; */
        const [rightOpen, setRightOpen] = useState(true);
        const seeRightRegion = () => { setRightOpen(!rightOpen); };
        // else {null};

        const navBar = {
          content: (
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
          ),
          visible: rightOpen,
          toggle: seeRightRegion,
        };

              return (
        <Template
          header={{
            content: "",
            right:(
              <IconBlock>
              <Icon icon="list"  onClick={seeRightRegion}/>
              <Icon icon="chat" onClick={seeRightRegion}/>
              <Icon icon="calendar" onClick={seeRightRegion}/>
              </IconBlock>
            ),
          }}
          left={{ content: ""}}
          main={<React.Fragment> <Mapbox /> {dataTable}</React.Fragment>}
          right={navBar}
          />
      )}
      )}
  );
