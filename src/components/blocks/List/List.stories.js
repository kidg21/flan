/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { Padding } from "helpers/Display";
import Layout from "layout/Layout";
import List, { ListItem } from "blocks/List";
import VirtualizedList from "./VirtualizedList.jsx";

const ListNotes = markdown.require("./List.md");

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
    RECORD_HANDLE: "0",
    RECORD_LABEL: "1",
    SITE_ADDR: "353 S BROADWAY",
    SITE_CITY: "LOS ANGELES",
    SITE_ZIP: "90013",
    UNITS_NUMBER: "",
    USE_CODE_STD_CTGR_DESC: "COMMERCIAL",
    USE_CODE_STD_DESC: "STORE / OFFICE COMBO",
    VAL_TRANSFER: "3388000",
    YR_BLT: "1913",
    ZONING: "LAC2",
    _DMP_ID_FK: "510684071_237050",
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
    RECORD_HANDLE: "1",
    RECORD_LABEL: "2",
    SITE_ADDR: "550 S HILL ST",
    SITE_CITY: "LOS ANGELES",
    SITE_ZIP: "90013",
    UNITS_NUMBER: "",
    USE_CODE_STD_CTGR_DESC: "COMMERCIAL",
    USE_CODE_STD_DESC: "OFFICE BUILDING",
    VAL_TRANSFER: "",
    YR_BLT: "1981",
    ZONING: "LAC5",
    _DMP_ID_FK: "510684071_237208",
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
    RECORD_HANDLE: "2",
    RECORD_LABEL: "3",
    SITE_ADDR: "222 S MAIN ST",
    SITE_CITY: "LOS ANGELES",
    SITE_ZIP: "90012",
    UNITS_NUMBER: "237",
    USE_CODE_STD_CTGR_DESC: "RESIDENTIAL",
    USE_CODE_STD_DESC: "MULTI-FAMILY RES (5+ UNITS)",
    VAL_TRANSFER: "1051800",
    YR_BLT: "2017",
    ZONING: "LAC2",
    _DMP_ID_FK: "510684071_238978",
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
    RECORD_HANDLE: "3",
    RECORD_LABEL: "4",
    SITE_ADDR: "622 E 1ST ST",
    SITE_CITY: "LOS ANGELES",
    SITE_ZIP: "90012",
    UNITS_NUMBER: "",
    USE_CODE_STD_CTGR_DESC: "COMMERCIAL",
    USE_CODE_STD_DESC: "STORES, RETAIL OUTLET",
    VAL_TRANSFER: "15664500",
    YR_BLT: "",
    ZONING: "LACM",
    _DMP_ID_FK: "510684071_239101",
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
    RECORD_HANDLE: "0",
    RECORD_LABEL: "1",
    SITE_ADDR: "353 S BROADWAY",
    SITE_CITY: "LOS ANGELES",
    SITE_ZIP: "90013",
    UNITS_NUMBER: "",
    USE_CODE_STD_CTGR_DESC: "COMMERCIAL",
    USE_CODE_STD_DESC: "STORE / OFFICE COMBO",
    VAL_TRANSFER: "3388000",
    YR_BLT: "1913",
    ZONING: "LAC2",
    _DMP_ID_FK: "510684071_237050",
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
    RECORD_HANDLE: "1",
    RECORD_LABEL: "2",
    SITE_ADDR: "550 S HILL ST",
    SITE_CITY: "LOS ANGELES",
    SITE_ZIP: "90013",
    UNITS_NUMBER: "",
    USE_CODE_STD_CTGR_DESC: "COMMERCIAL",
    USE_CODE_STD_DESC: "OFFICE BUILDING",
    VAL_TRANSFER: "",
    YR_BLT: "1981",
    ZONING: "LAC5",
    _DMP_ID_FK: "510684071_237208",
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
    RECORD_HANDLE: "2",
    RECORD_LABEL: "3",
    SITE_ADDR: "222 S MAIN ST",
    SITE_CITY: "LOS ANGELES",
    SITE_ZIP: "90012",
    UNITS_NUMBER: "237",
    USE_CODE_STD_CTGR_DESC: "RESIDENTIAL",
    USE_CODE_STD_DESC: "MULTI-FAMILY RES (5+ UNITS)",
    VAL_TRANSFER: "1051800",
    YR_BLT: "2017",
    ZONING: "LAC2",
    _DMP_ID_FK: "510684071_238978",
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
    RECORD_HANDLE: "3",
    RECORD_LABEL: "4",
    SITE_ADDR: "622 E 1ST ST",
    SITE_CITY: "LOS ANGELES",
    SITE_ZIP: "90012",
    UNITS_NUMBER: "",
    USE_CODE_STD_CTGR_DESC: "COMMERCIAL",
    USE_CODE_STD_DESC: "STORES, RETAIL OUTLET",
    VAL_TRANSFER: "15664500",
    YR_BLT: "",
    ZONING: "LACM",
    _DMP_ID_FK: "510684071_239101",
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
    RECORD_HANDLE: "0",
    RECORD_LABEL: "1",
    SITE_ADDR: "353 S BROADWAY",
    SITE_CITY: "LOS ANGELES",
    SITE_ZIP: "90013",
    UNITS_NUMBER: "",
    USE_CODE_STD_CTGR_DESC: "COMMERCIAL",
    USE_CODE_STD_DESC: "STORE / OFFICE COMBO",
    VAL_TRANSFER: "3388000",
    YR_BLT: "1913",
    ZONING: "LAC2",
    _DMP_ID_FK: "510684071_237050",
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
    RECORD_HANDLE: "1",
    RECORD_LABEL: "2",
    SITE_ADDR: "550 S HILL ST",
    SITE_CITY: "LOS ANGELES",
    SITE_ZIP: "90013",
    UNITS_NUMBER: "",
    USE_CODE_STD_CTGR_DESC: "COMMERCIAL",
    USE_CODE_STD_DESC: "OFFICE BUILDING",
    VAL_TRANSFER: "",
    YR_BLT: "1981",
    ZONING: "LAC5",
    _DMP_ID_FK: "510684071_237208",
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
    RECORD_HANDLE: "2",
    RECORD_LABEL: "3",
    SITE_ADDR: "222 S MAIN ST",
    SITE_CITY: "LOS ANGELES",
    SITE_ZIP: "90012",
    UNITS_NUMBER: "237",
    USE_CODE_STD_CTGR_DESC: "RESIDENTIAL",
    USE_CODE_STD_DESC: "MULTI-FAMILY RES (5+ UNITS)",
    VAL_TRANSFER: "1051800",
    YR_BLT: "2017",
    ZONING: "LAC2",
    _DMP_ID_FK: "510684071_238978",
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
    RECORD_HANDLE: "3",
    RECORD_LABEL: "4",
    SITE_ADDR: "622 E 1ST ST",
    SITE_CITY: "LOS ANGELES",
    SITE_ZIP: "90012",
    UNITS_NUMBER: "",
    USE_CODE_STD_CTGR_DESC: "COMMERCIAL",
    USE_CODE_STD_DESC: "STORES, RETAIL OUTLET",
    VAL_TRANSFER: "15664500",
    YR_BLT: "",
    ZONING: "LACM",
    _DMP_ID_FK: "510684071_239101",
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
    RECORD_HANDLE: "0",
    RECORD_LABEL: "1",
    SITE_ADDR: "353 S BROADWAY",
    SITE_CITY: "LOS ANGELES",
    SITE_ZIP: "90013",
    UNITS_NUMBER: "",
    USE_CODE_STD_CTGR_DESC: "COMMERCIAL",
    USE_CODE_STD_DESC: "STORE / OFFICE COMBO",
    VAL_TRANSFER: "3388000",
    YR_BLT: "1913",
    ZONING: "LAC2",
    _DMP_ID_FK: "510684071_237050",
  },
];
storiesOf("Blocks|List", module)
  .addParameters({
    info: {
      text:
        "A 'List' can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size. -- 'Ant Design'",
    },
    notes: {
      markdown: ListNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <List>
          <ListItem label="List Item" />
          <ListItem label="List Item" />
          <ListItem label="List Item" />
        </List>
      );
    }),
  )
  .add("Knobs", () => {
    return (
      <List
        title={text("Title", "", "List")}
        interactive={boolean("Interactive", false, "List")}
      >
        <ListItem
          label={text("1 - Label", "Item 1", "Item 1")}
          description={text("1 - Description", "", "Item 1")}
          type={select(
            "1 - Type",
            {
              default: null,
              info: "info",
              success: "success",
              warning: "warning",
              alert: "alert",
            },
            null,
            "Item 1",
          )}
          active={boolean("1 - Active", false, "Item 1")}
          disabled={boolean("1 - Disabled", false, "Item 1")}
        />
        <ListItem
          label={text("2 - Label", "Item 2", "Item 2")}
          description={text("2 - Description", "", "Item 2")}
          type={select(
            "2 - Type",
            {
              default: null,
              info: "info",
              success: "success",
              warning: "warning",
              alert: "alert",
            },
            null,
            "Item 2",
          )}
          active={boolean("2 - Active", false, "Item 2")}
          disabled={boolean("2 - Disabled", false, "Item 2")}
        />
        <ListItem
          label={text("3 - Label", "Item 3", "Item 3")}
          description={text("3 - Description", "", "Item 3")}
          type={select(
            "3 - Type",
            {
              default: null,
              info: "info",
              success: "success",
              warning: "warning",
              alert: "alert",
            },
            null,
            "Item 3",
          )}
          active={boolean("3 - Active", false, "Item 3")}
          disabled={boolean("3 - Disabled", false, "Item 3")}
        />
      </List>
    );
  })

  .add("States", () => {
    return (
      <List>
        <ListItem
          label="List Item (standard)"
          description="This is the description"
        />
        <ListItem
          label="List Item (selected)"
          description="This is the description"
          isSelected
        />
        <ListItem
          label="List Item (disabled)"
          description="This is the description"
          disabled
        />

      </List>
    );
  })

  .add("Interactive", () => {
    return (
      <List interactive>
        <ListItem label="List Item" description="This is the description" />
        <ListItem label="List Item" description="This is the description" />
        <ListItem label="List Item" description="This is the description" />
        <ListItem
          label="List Item (interaction disabled)"
          description="This is the description"
          interactive={false}
        />
        <ListItem label="List Item" description="This is the description" />

      </List>
    );
  })

  .add("Avatar", () => {
    return (
      <List interactive>
        <ListItem
          label="List Item"
          description="This is the description"
          avatar="LB"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          avatar="LB"
          icon="user"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          avatar="LB"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          avatar="LB"
        />
      </List>
    );
  })

  .add("Icon", () => {
    return (
      <List interactive>
        <ListItem
          label="List Item"
          description="This is the description"
          icon="user"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          icon="user"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          icon="user"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          icon="user"
        />
      </List>
    );
  })
  // .add("Virtualized List", () => {
  //   return React.createElement(() => {
  //     const [highlightedCell, setHighlightCell] = useState(null);
  //     const [selectedCell, setSelectedCell] = useState(null);
  //     const onCellClick = (e, { rowIndex }) => {
  //       setSelectedCell({ rowIndex });
  //     };
  //     const Template = (props) => {
  //       return (
  //         <Card
  //           id={props._DMP_ID_FK}
  //           title={`${props.index}: ${props.SITE_ADDR}`}
  //           body={props.APN}
  //         />
  //       );
  //     };
  //     const onCellMouseEnter = (e, { rowIndex }) => {
  //       setHighlightCell({ rowIndex });
  //     };

  //     return (
  //       <Layout>
  //         <VirtualizedList
  //           rows={data}
  //           Template={Template}
  //           id="foo"
  //           onCellClick={onCellClick}
  //           onCellMouseEnter={onCellMouseEnter}
  //           onCellMouseLeave={() => {
  //             setHighlightCell(null);
  //           }}
  //           highlightedCell={highlightedCell}
  //           selectedCell={selectedCell}
  //         />
  //       </Layout>
  //     );
  //   });
  // })
  .add("Toggle List", () => {
    return (
      <List interactive>
        <ListItem
          label="List Item"
          description="This is the description"
          toggle
        />
        <ListItem
          label="List Item"
          description="This is the description"
          toggle
        />
        <ListItem
          label="List Item"
          description="This is the description"
          toggle
        />
        <ListItem
          label="List Item"
          description="This is the description"
          toggle
        />
      </List>
    );
  })
  .add("Count List", () => {
    return (
      <List interactive>
        <ListItem
          label="List Item"
          description="This is the description"
          count="2"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          count="3"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          count="5"
        />
        <ListItem
          label="List Item"
          description="This is the description"
        />
      </List>
    );
  })

  .add("Checkbox List", () => {
    return (
      <List interactive>
        <ListItem
          label="List Item"
          description="This is the description"
          checkbox
        />
        <ListItem
          label="List Item"
          description="This is the description"
          checkbox
        />
        <ListItem
          label="List Item"
          description="This is the description"
          checkbox
        />
        <ListItem
          label="List Item"
          description="This is the description"
          checkbox
        />
      </List>
    );
  });
