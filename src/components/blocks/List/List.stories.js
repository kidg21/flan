/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* global number */
import React, { useState } from "react";
import Layout from "layout/Layout";
import Card from "elements/Card";
import List, { ListItem } from "blocks/List";
import InputBlock from "blocks/InputBlock";
import SelectMenu from "atoms/SelectMenu";
import { CheckboxGroup } from "atoms/Checkbox";
import Button from "atoms/Button";
import Grid from "layout/Grid";
import CardList from "./CardList.jsx";
// import VirtualizedList from "./VirtualizedList.jsx";

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
          pre={select(
            "1 - Pre",
            {
              default: null,
              icon: "icon",
              avatar: "avatar",
            },
            null,
            "Item 1",
          )}
          preLabel={text("1 - Pre-Label", "A", "Item 1")}
          preIcon={select(
            "1 - Pre-Icon",
            {
              home: "home",
              user: "user",
              bookmark: "bookmark",
              print: "print",
            },
            "home",
            "Item 1",
          )}
          post={select(
            "1 - Post",
            {
              default: null,
              checkbox: "checkbox",
              toggle: "toggle",
              label: "label",
            },
            null,
            "Item 1",
          )}
          postLabel={text("1 - Post-Label", "Label", "Item 1")}
          isSelected={boolean("1 - Selected", false, "Item 1")}
          disabled={boolean("1 - Disabled", false, "Item 1")}
        />
        <ListItem
          label={text("1 - Label", "Item 2", "Item 2")}
          description={text("2 - Description", "", "Item 2")}
          pre={select(
            "2 - Pre",
            {
              default: null,
              icon: "icon",
              avatar: "avatar",
            },
            null,
            "Item 2",
          )}
          preLabel={text("2 - Pre-Label", "A", "Item 2")}
          preIcon={select(
            "2 - Pre-Icon",
            {
              home: "home",
              user: "user",
              bookmark: "bookmark",
              print: "print",
            },
            "home",
            "Item 2",
          )}
          post={select(
            "2 - Post",
            {
              default: null,
              checkbox: "checkbox",
              toggle: "toggle",
              label: "label",
            },
            null,
            "Item 2",
          )}
          postLabel={text("2 - Post-Label", "Label", "Item 2")}
          isSelected={boolean("2 - Selected", false, "Item 2")}
          disabled={boolean("2 - Disabled", false, "Item 2")}
        />
        <ListItem
          label={text("3 - Label", "Item 3", "Item 3")}
          description={text("3 - Description", "", "Item 3")}
          pre={select(
            "3 - Pre",
            {
              default: null,
              icon: "icon",
              avatar: "avatar",
            },
            null,
            "Item 3",
          )}
          preLabel={text("3 - Pre-Label", "A", "Item 3")}
          preIcon={select(
            "3 - Pre-Icon",
            {
              home: "home",
              user: "user",
              bookmark: "bookmark",
              print: "print",
            },
            "home",
            "Item 3",
          )}
          post={select(
            "3 - Post",
            {
              default: null,
              checkbox: "checkbox",
              toggle: "toggle",
              label: "label",
            },
            null,
            "Item 3",
          )}
          postLabel={text("3 - Post-Label", "Label", "Item 3")}
          isSelected={boolean("3 - Selected", false, "Item 3")}
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
  .add("Pre-Avatar", () => {
    return (
      <List interactive>
        <ListItem
          label="List Item"
          description="This is the description"
          pre="avatar"
          preLabel="AB"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          pre="avatar"
          preIcon="user"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          pre="avatar"
          preLabel="CD"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          pre="avatar"
          preIcon="file"
        />
      </List>
    );
  })
  .add("Pre-Icon", () => {
    return (
      <List interactive>
        <ListItem
          label="List Item"
          description="This is the description"
          pre="icon"
          preLabel="home"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          pre="icon"
          preLabel="user"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          pre="icon"
          preLabel="bookmark"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          pre="icon"
          preLabel="print"
        />
      </List>
    );
  })
  .add("Post-Toggle", () => {
    return (
      <List interactive>
        <ListItem
          label="List Item"
          description="This is the description"
          post="toggle"
          postLabel="optional"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          post="toggle"
          postLabel="toggle"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          post="toggle"
          postLabel="label"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          post="toggle"
        />
      </List>
    );
  })
  .add("Post-Label", () => {
    return (
      <List interactive>
        <ListItem
          label="List Item"
          description="This is the description"
          post="label"
          postLabel="label"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          post="label"
          postLabel="6"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          post="label"
          postLabel="NEW!"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          post="label"
          postLabel="9"
        />
      </List>
    );
  })
  .add("Post-Checkbox", () => {
    return (
      <List interactive>
        <ListItem
          label="List Item"
          description="This is the description"
          post="checkbox"
          postLabel="optional"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          post="checkbox"
          postLabel="checkbox"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          post="checkbox"
          postLabel="label"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          post="checkbox"
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
  //           description={props.APN}
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
  .add("CardList Infinite Scroller", () => {
    const randomData = Array.from(Array(50), (x, i) => { return { label: `FOO-${Math.floor(Math.random() * 1000)}-${i}` }; });
    const randomData2 = Array.from(Array(100), (x, i) => { return { label: `FOO-THE-SECOND-${Math.floor(Math.random() * 1000)}-${i}` }; });
    return React.createElement(() => {
      const [_data, setData] = useState({
        id1: Array(randomData.length),
        id2: Array(randomData2.length),
      }); // ideally your store could track this
      const [selectedCell, setSelectedCell] = useState(null);
      const [highlightedCell, setHighlightedCell] = useState(null);
      const [focusedRow, setFocusedRow] = useState(null);
      const [scrollAlignment, setAlignment] = useState(null);
      const [clearScroll, setClearScroll] = useState(true);
      const [scrollTop, setScrollTop] = useState(null);
      const [columnCount, setColCount] = useState(2);
      const [columnWidth, setColWidth] = useState(null);
      const [rowHeight, setRowHeight] = useState(100);
      const [id, setId] = useState("id1");

      let clRef;
      return (
        <Layout>
          <Grid columns="4" align="center">
            <Button
              label="Add Entry"
              onClick={() => {
                const appendRandomItem = { label: `Added-${Math.floor(Math.random() * 1000)}-${_data[id].length}` };
                if (id === "id1") randomData.push(appendRandomItem);
                if (id === "id2") randomData2.push(appendRandomItem);
                setData({
                  ..._data,
                  [id]: [..._data[id], null],
                });
              }}
            />
            <SelectMenu
              label="List id"
              options={[
                { value: "id1", label: "ID1" },
                { value: "id2", label: "ID2" },
              ]}
              selectOptions={id}
              isClearable={false}
              onChangeState={(state, newState, setState) => {
                setId(newState.selected.value);
                setState(newState);
              }}
            />
            <InputBlock
              label="Delete cell index"
              button={{
                label: "Delete",
                onClick: (e, state) => {
                  if (state.input["delete-input"]) {
                    const index = parseInt(state.input["delete-input"], 10);
                    if (!isNaN(index)) {
                      if (id === "id1") randomData.splice(index, 1);
                      if (id === "id2") randomData2.splice(index, 1);
                      const newRows = _data[id].slice();
                      newRows.splice(index, 1);
                      setData({
                        ..._data,
                        [id]: newRows,
                      });
                    }
                  }
                },
              }}
              textInputs={[{
                id: "delete-input",
                pattern: "^[0-9]*$",
              }]}
            />
            <CheckboxGroup
              label="onScroll Options"
              data={[{
                checked: clearScroll,
                onChange: () => {
                  setClearScroll(!clearScroll);
                },
                label: "clear out focusRow/scrollTop",
              }]}
            />
            <InputBlock
              label="Focus Row"
              button={{
                label: "Enter",
                onClick: (e, state) => {
                  if (!state.input["focus-input"]) {
                    setFocusedRow(null);
                  } else {
                    const focusIndex = parseInt(state.input["focus-input"], 10);
                    setFocusedRow(focusIndex);
                    setHighlightedCell(clRef.getCellInfo({ rowIndex: focusIndex }));
                  }
                },
              }}
              textInputs={[{
                id: "focus-input",
                pattern: "^[0-9]*$",
              }]}
            />
            <SelectMenu
              label="Scroll Alignment"
              options={[
                { value: "start", label: "start" },
                { value: "auto", label: "auto" },
                { value: "center", label: "center" },
                { value: "end", label: "end" },
              ]}
              placeholder={"start (default)"}
              onChangeState={(state, newState, setState) => {
                const newAlignment = newState.selected ? newState.selected.value : null;
                setAlignment(newAlignment);
                setState(newState);
              }}
            />
            <InputBlock
              label="Set Scroll Top"
              button={{
                label: "Enter",
                onClick: (e, state) => {
                  if (!state.input["scrolltop-input"]) {
                    setScrollTop(null);
                  } else {
                    setScrollTop(parseInt(state.input["scrolltop-input"], 10));
                  }
                },
              }}
              textInputs={[{
                id: "scrolltop-input",
                pattern: "^[0-9]*$",
              }]}
            />
            <InputBlock
              label="Column Count"
              button={{
                label: "Enter",
                onClick: (e, state) => {
                  const input = state.input["count-input"];
                  if (!input) {
                    setColCount(null);
                  } else {
                    setColCount(parseInt(input, 10));
                  }
                },
              }}
              textInputs={[{
                id: "count-input",
                pattern: "^[0-9]*$",
                value: columnCount,
              }]}
            />
            <InputBlock
              label="Column Width"
              button={{
                label: "Enter",
                onClick: (e, state) => {
                  const input = state.input["colWidth-input"];
                  const parsedInput = parseInt(input, 10);
                  if (!parsedInput) {
                    setColWidth(null);
                  } else {
                    setColWidth(parsedInput);
                  }
                },
              }}
              textInputs={[{
                id: "colWidth-input",
                pattern: "^[0-9]*$|auto",
                placeholder: "use column count",
              }]}
            />
            <InputBlock
              label="Row Height"
              button={{
                label: "Enter",
                onClick: (e, state) => {
                  const input = state.input["rowHeight-input"];
                  const parsedInput = parseInt(input, 10);
                  if (!parsedInput || input === "auto") {
                    setRowHeight(null);
                  } else {
                    setRowHeight(parsedInput);
                  }
                },
              }}
              textInputs={[{
                id: "rowHeight-input",
                pattern: "^[0-9]*$|auto",
                placeholder: "auto",
                value: rowHeight,
              }]}
            />
          </Grid>
          <CardList
            id={"cardList"}
            listId={id}
            ref={(r) => { clRef = r; }}
            data={_data[id]}
            // simple template
            Template={(props) => {
              if (!props.data || props.data.status === "loading") return <div style={{ height: "100px" }}>loading</div>;
              return <div>{`${props.index}: ${props.data.label}`}</div>;
            }}
            // simple onClick interaction
            onCellClick={(e, selectIndex) => {
              if (selectedCell && selectedCell.rowIndex === selectIndex.rowIndex && selectedCell.columnIndex === selectIndex.columnIndex) {
                setSelectedCell(null);
              } else {
                setSelectedCell(selectIndex);
              }
            }}
            height={number("height", 300)}
            columnCount={columnCount}
            columnWidth={columnWidth}
            width={number("width", null)}
            rowHeight={rowHeight}
            onCellMouseEnter={(e, highlightIndex) => {
              setHighlightedCell(highlightIndex);
            }}
            onCellMouseLeave={() => {
              setHighlightedCell(null);
            }}
            selectedCell={selectedCell}
            highlightedCell={highlightedCell}
            scrollToAlignment={scrollAlignment}
            scrollTop={scrollTop}
            focusedRow={focusedRow}
            onScroll={() => {
              // reset focusRow if we scroll away from it
              if (typeof focusedRow === "number" && clearScroll) {
                setFocusedRow(null);
              }
              if (typeof scrollTop === "number" && clearScroll) {
                setScrollTop(null);
              }
              console.log("scroll changed");
            }}
            loadRows={({ startIndex, stopIndex }) => {
              return new Promise((resolve) => {
                console.log(`startIndex: ${startIndex}, stopIndex: ${stopIndex}`);
                for (let i = startIndex; i < _data[id].length && i <= stopIndex; i++) {
                  _data[id][i] = { status: "loading" };
                }
                setTimeout(() => {
                  console.log(`loaded ${startIndex} to ${stopIndex}`);
                  const newRows = _data[id].slice();
                  for (let i = startIndex; i < _data[id].length && i <= stopIndex; i++) {
                    if (id === "id1") newRows.splice(i, 1, randomData[i]);
                    if (id === "id2") newRows.splice(i, 1, randomData2[i]);
                  }
                  setData({
                    ..._data,
                    [id]: newRows,
                  });
                  resolve({ startIndex, stopIndex });
                }, 2000);
              });
            }}
          />
        </Layout>
      );
    });
  });
