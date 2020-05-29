/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Placeholder from "images/placeholders/placeholder-photo.png";
import Grid from "layout/Grid";
import Text, { Title, Link } from "base/Typography";
import Icon from "atoms/Icon";
import Card, { CardSection, CardGrid } from "elements/Card";
import List, { ListItem } from "blocks/List";
import Table from "blocks/Table";


function MockMap({ ...props }) {
  return (
    <Mapbox
      {...props}
    />
  );
}
MockMap.propTypes = {
  // stuff
};
MockMap.defaultProps = {
  // stuff
};

function MockHeader() {
  return (
    <Card>
      <CardSection padding="" variant="info">
        <Title size="xl" text="This Is A Title" weight="bold" />
        <Text text="The Description Goes Here" />
      </CardSection>
    </Card>
  );
}
MockHeader.propTypes = {
  // stuff
};
MockHeader.defaultProps = {
  // stuff
};

function MockFooter() {
  return (
    <Card>
      <CardSection>
        <Grid columns="auto 1fr">
          {/* <Icon icon="info" size="xs" onClick /> */}
          <Link text="1" onClick />
          <Text text="The Description Goes Here" />
        </Grid>
      </CardSection>
    </Card>
  );
}
MockFooter.propTypes = {
  // stuff
};
MockFooter.defaultProps = {
  // stuff
};

function MockList() {
  return (
    <React.Fragment>
      <List title="Group Name" isInteractive>
        <ListItem
          title="List Item"
        />
      </List>
      <List title="Group Name" isInteractive>
        <ListItem
          title="List Item"
        />
        <ListItem
          title="List Item"
        />
        <ListItem
          title="List Item"
        />
        <ListItem
          title="List Item"
        />
      </List>
      <List title="Group Name" isInteractive>
        <ListItem
          title="List Item"
        />
        <ListItem
          title="List Item"
        />
      </List>
    </React.Fragment>
  );
}
MockList.propTypes = {
  // stuff
};
MockList.defaultProps = {
  // stuff
};

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

function MockTable() {
  return (
    <Table
      headers={tableHeaders.slice(1)}
      rows={tableData}
      listId="Table"
      columnWidth={180}
    />
  );
}
MockMap.propTypes = {
  // stuff
};
MockMap.defaultProps = {
  // stuff
};

// const data = [
//   {
//     id: "a",
//     // variant: "success",
//     // media: ModernExterior1,
//     // mediaDesc: "ModernExterior 1",
//     icon: "bookmark_solid",
//     title: "First Card",
//     description: "Card Description Goes Here",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     commands: [
//       {
//         id: "Command One",
//         label: "Command One",
//       },
//     ],
//   },
//   {
//     id: "b",
//     // variant: "alert",
//     // media: ModernExterior2,
//     // mediaDesc: "ModernExterior 2",
//     label: "GP",
//     title: "Second Card",
//     body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     commands: [
//       {
//         id: "Command One",
//         label: "Command One",
//       },
//       {
//         id: "Command Two",
//         label: "Command Two",
//       },
//     ],
//   },
//   {
//     id: "c",
//     // variant: "info",
//     // media: ModernExterior3,
//     // mediaDesc: "ModernExterior 3",
//     icon: "home",
//     title: "Third Card",
//     description: "Nothing To See Here",
//     body: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     commands: [
//       {
//         id: "Command One",
//         label: "Command One",
//       },
//       {
//         id: "Command Two",
//         label: "Command Two",
//       },
//       {
//         id: "Command Three",
//         label: "Command Three",
//       },
//       {
//         id: "Command Four",
//         label: "Command Four",
//       },
//       {
//         id: "Command Five",
//         label: "Command Five",
//       },
//     ],
//   },
// ];

function MockCardGrid({ ...props }) {
  return (
    // <CardGrid data={data} {...props} />
    <CardGrid {...props}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardGrid>
  );
}
MockCardGrid.propTypes = {
  // stuff
};
MockCardGrid.defaultProps = {
  // stuff
};

export { MockHeader, MockFooter, MockMap, MockList, MockTable, MockCardGrid };
