/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Title from "base/Typography";
import Layout from "layout/Layout";
import Panel from "layout/Panel";
import Card from "layout/Card";
import Menu from "blocks/Menu";
import Button from "atoms/Button";
import Command from "atoms/Command";
import SelectMenu from "atoms/SelectMenu";
import Bar from "blocks/Bar";
import DataTable from "blocks/Table";

// Only columns specified here will be displayed
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
  { id: "SITE_ADDR", label: "Address" },
  { id: "SITE_CITY", label: "City" },
  { id: "SITE_ZIP", label: "Zip" },
  { id: "USE_CODE_STD_CTGR_DESC", label: "Use Code Category" },
  { id: "USE_CODE_STD_DESCR", label: "Use Code Description" },
  { id: "VAL_TRANSFER", label: "Value Transfer" },
  { id: "YR_BLT", label: "Year Built" },
  { id: "ZONING", label: "Zoning" },
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

const menu = [
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

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "pistachio", label: "Pistachio" },
  { value: "mint chocolate chip", label: "Mint Chocolate Chip" },
  { value: "cookie dough", label: "Cookie Dough" },
];

storiesOf("Blocks|Table", module)
  // .addDecorator(Container)
  .add("Simple", () => {
    return (
      <Layout>
        <DataTable
          headers={headers.slice(1)}
          rows={data}
          listId="foo"
          columnWidth={180}
        />
      </Layout>
    );
  })

  .add("Interactive", () => {
    return React.createElement(() => {
      const [highlightedCell, setHighlightCell] = useState(null);
      const [selectedCell, setSelectedCell] = useState(null);
      const onCellClick = (e, { rowIndex }) => {
        setSelectedCell({ rowIndex });
      };

      const onHeaderClick = (e, { columnIndex }) => {
        alert(`Header ${columnIndex}: ${headers[columnIndex].id} clicked`);
      };

      const onCellMouseOver = (e, { rowIndex }) => {
        setHighlightCell({ rowIndex });
      };

      return (
        <Layout>
          <DataTable
            headers={headers.slice(1)}
            rows={data}
            listId="foo"
            onCellClick={onCellClick}
            onHeaderClick={onHeaderClick}
            onCellMouseOver={onCellMouseOver}
            highlightedCell={highlightedCell}
            selectedCell={selectedCell}
            columnWidth={180}
          />
        </Layout>
      );
    });
  })

  .add("With Actions (Menu)", () => {
    return React.createElement(() => {
      const [highlightedCell, setHighlightCell] = useState(null);
      const [selectedCell, setSelectedCell] = useState(null);
      for (let i = 0; i < data.length; i++) {
        data[i].options = React.createElement(
          Menu,
          {
            data: menu,
            // onClick: e => {
            //   e.stopPropagation();
            //   alert(`data entry edit ${i} clicked`);
            // }
          },
          null,
        );
      }

      const onCellClick = (e, { rowIndex }) => {
        setSelectedCell({ rowIndex });
      };

      const onHeaderClick = (e, { columnIndex }) => {
        alert(`Header ${columnIndex}: ${headers[columnIndex].id} clicked`);
      };

      const onCellMouseOver = (e, { rowIndex }) => {
        setHighlightCell({ rowIndex });
      };

      return (
        <Layout>
          <DataTable
            headers={headers}
            rows={data}
            listId="foo"
            onCellClick={onCellClick}
            onHeaderClick={onHeaderClick}
            onCellMouseOver={onCellMouseOver}
            highlightedCell={highlightedCell}
            selectedCell={selectedCell}
            columnWidth={180}
          />
        </Layout>
      );
    });
  })

  .add("With Actions (Button)", () => {
    return React.createElement(() => {
      const [highlightedCell, setHighlightCell] = useState(null);
      const [selectedCell, setSelectedCell] = useState(null);
      for (let i = 0; i < data.length; i++) {
        data[i].options = React.createElement(
          Button,
          {
            label: "Click Me!",
            // onClick: (e) => {
            //   e.stopPropagation();
            //   alert(`data entry edit ${i} clicked`);
            // },
          },
          null,
        );
      }

      const onCellClick = (e, { rowIndex }) => {
        setSelectedCell({ rowIndex });
      };

      const onHeaderClick = (e, { columnIndex }) => {
        alert(`Header ${columnIndex}: ${headers[columnIndex].id} clicked`);
      };

      const onCellMouseOver = (e, { rowIndex }) => {
        setHighlightCell({ rowIndex });
      };

      return (
        <Layout>
          <DataTable
            headers={headers}
            rows={data}
            listId="foo"
            onCellClick={onCellClick}
            onHeaderClick={onHeaderClick}
            onCellMouseOver={onCellMouseOver}
            highlightedCell={highlightedCell}
            selectedCell={selectedCell}
            columnWidth={180}
          />
        </Layout>
      );
    });
  })

  .add("With Actions (Command)", () => {
    return React.createElement(() => {
      const [highlightedCell, setHighlightCell] = useState(null);
      const [selectedCell, setSelectedCell] = useState(null);
      for (let i = 0; i < data.length; i++) {
        data[i].options = React.createElement(
          Command,
          {
            command: "edit",
            // onClick: e => {
            //   e.stopPropagation();
            //   alert(`data entry edit ${i} clicked`);
            // }
          },
          null,
        );
      }

      const onCellClick = (e, { rowIndex }) => {
        setSelectedCell({ rowIndex });
      };

      const onHeaderClick = (e, { columnIndex }) => {
        alert(`Header ${columnIndex}: ${headers[columnIndex].id} clicked`);
      };

      const onCellMouseOver = (e, { rowIndex }) => {
        setHighlightCell({ rowIndex });
      };

      return (
        <Layout>
          <DataTable
            headers={headers}
            rows={data}
            listId="foo"
            onCellClick={onCellClick}
            onHeaderClick={onHeaderClick}
            onCellMouseOver={onCellMouseOver}
            highlightedCell={highlightedCell}
            selectedCell={selectedCell}
            columnWidth={180}
          />
        </Layout>
      );
    });
  })

  .add("With Actions (Select)", () => {
    return React.createElement(() => {
      const [highlightedCell, setHighlightCell] = useState(null);
      const [selectedCell, setSelectedCell] = useState(null);
      for (let i = 0; i < data.length; i++) {
        data[i].options = React.createElement(
          SelectMenu,
          {
            placeholder: "Choose...",
            options: options,
            // onClick: e => {
            //   e.stopPropagation();
            //   alert(`data entry edit ${i} clicked`);
            // }
          },
          null,
        );
      }

      const onCellClick = (e, { rowIndex }) => {
        setSelectedCell({ rowIndex });
      };

      const onHeaderClick = (e, { columnIndex }) => {
        alert(`Header ${columnIndex}: ${headers[columnIndex].id} clicked`);
      };

      const onCellMouseOver = (e, { rowIndex }) => {
        setHighlightCell({ rowIndex });
      };

      return (
        <Layout>
          <DataTable
            headers={headers}
            rows={data}
            listId="foo"
            onCellClick={onCellClick}
            onHeaderClick={onHeaderClick}
            onCellMouseOver={onCellMouseOver}
            highlightedCell={highlightedCell}
            selectedCell={selectedCell}
            columnWidth={180}
          />
        </Layout>
      );
    });
  });
