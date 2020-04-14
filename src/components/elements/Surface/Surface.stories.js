/* eslint-disable linebreak-style */
import React from "react";
import { Padding } from "helpers/Display";
import Menu from "blocks/Menu";
import Surface from "elements/Surface";
import SummaryPanelTemplate from "elements/Surface/SurfaceTemplates";

/* eslint-disable no-alert */
/* eslint-disable no-template-curly-in-string */
const mockRecords = [
  {
    _DMP_ID: "100660192_194571250",
    _DESCRIPTOR: "450 N GRAND AVE, LOS ANGELES, CA 90012",
    _X_COORD: -118.24338,
    _XMAX: -118.2418,
    _XMIN: -118.24504,
    _Y_COORD: 34.059126,
    _YMAX: 34.060432,
    _YMIN: 34.05781,
    ACREAGE: 10.25,
    ADDRESS_ID: "US_06_037_159289302",
    AGGR_ACREAGE: 10.254133,
    AGGR_GROUP: "100660192_194571250",
    AGGR_LOT_COUNT: 1,
    AIR_CONDITIONING_TYPE_DESC: "",
    ALTERNATE_APN: "",
    APN: "5408-002-902",
    APN_UNF: "5408002902",
    ASMT_YEAR: "2019",
    ASSOCIATE_PARCEL_COUNT: 1,
    ASSR_ACREAGE: 10.25,
    ASSR_BOOK_PAGE: "",
    ASSR_SQFT: 446636,
    AVM_VALUE: null,
    BEDROOMS: null,
    BLDG_NUMBER: null,
    BLOCK_NUMBER: "",
    BSMT_1_CODE: "",
    BUILDING_SQFT: 23415,
    CAL_ACREAGE: 10.2533,
    CAL_SQFT: 446634,
    CENSUS_BLOCK_GROUP: "1",
    CENSUS_TRACT: "207101",
    CONDITION_CODE_DESC: "",
    CONSTRUCTION_CODE_DESC: "",
    COUNTY: "LOS ANGELES",
    DATE_NOVAL_TRANSFER: null,
    DATE_TRANSFER: null,
    DOC_NUMBER: "",
    DOC_NUMBER_NOVAL: "",
    DOC_TYPE_DESC: "",
    FIPS_CODE: "06037",
    FIREPLACE_TYPE: "",
    GARAGE_CODE_DESC: "",
    GEOMETRY: {},
    HEATING_DESC: "",
    IMPRV_PCT: null,
    INT_RATE_TYPE_1: "",
    INT_RATE_TYPE_2: "",
    LAND_SQFT: 446636,
    LANDUSE_CODE: "650",
    LANDUSE_DESC: "SCHOOL",
    LEGAL_1: "TRACT NO 26838 LOT 1",
    LIVING_SQFT: null,
    LNDR_FIRST_NAME_1: "",
    LNDR_LAST_NAME_1: "",
    LOAN_VALUE_1: null,
    LOAN_VALUE_2: null,
    LOCATION_ID: "US_06_037_5408002902",
    LOT_DEPTH: null,
    LOT_NUMBER: "1",
    LOT_WIDTH: null,
    MAP_LINK: "5408-002-902",
    MAP_REFERENCE_1: "-",
    OWNER_ADDRESS: "333 S BEAUDRY AVE",
    OWNER_CITY: "LOS ANGELES",
    OWNER_NAME_1: "L A UNIFIED SCHOOL DIST",
    OWNER_NAME_2: "",
    OWNER_OCCUPIED: "N",
    OWNER_STATE: "CA",
    OWNER_ZIP: "90017",
    OWNERSHIP_STATUS_CODE: "",
    OWNERSHIP_STATUS_DESC: "",
    PARCEL_APN: "5408002902",
    PARKING_SPACES: 0,
    PRICE_PER_ACRE: null,
    PRICE_PER_SQFT: null,
    PROPERTY_ID: "060371222436",
    RANGE: "",
    ROOF_CONSTRUCTION_DESC: "",
    ROOF_COVER_DESC: "",
    SALE_CODE_DESC: "",
    SECTION: "",
    SELLER_NAME: "",
    SITE_ADDR: "450 N GRAND AVE",
    SITE_CITY: "LOS ANGELES",
    SITE_STATE: "CA",
    SITE_ZIP: "90012",
    STORIES_NUMBER: "2",
    STYLE_DESC: "",
    SUBDIVISION: "",
    TAX_ACCT_NBR: "",
    TAX_AMOUNT: null,
    TAX_EXEMPTION_DESC: "",
    TAX_ID: "US_06_037_5408-002-902",
    TAX_YEAR: null,
    TD_DOC_NUMBER_1: "",
    TITLE_COMPANY_NAME: "",
    TOTAL_BATHS_CALCULATED: 0,
    TOTAL_ROOMS: null,
    TOWNSHIP: "",
    TRACT_NUMBER: "26838",
    UNITS_NUMBER: null,
    USE_CODE_MUNI: "8832",
    USE_CODE_STD_CTGR_DESC: "MISCELLANEOUS",
    USE_CODE_STD_DESC: "SCHOOL",
    VAL_ASSD: 3847860,
    VAL_ASSD_IMPRV: null,
    VAL_ASSD_LAND: 3847860,
    VAL_MARKET: null,
    VAL_TRANSFER: null,
    YR_BLT: "1976",
    YR_BLT_EFFECT: null,
    ZONING: "LAPF",
  },
  {
    _DMP_ID: "100660192_1945711233",
    _DESCRIPTOR: "1335 BEST ST, IRVINE, CA 92618",
    _X_COORD: -118.24338,
    _XMAX: -118.2418,
    _XMIN: -118.24504,
    _Y_COORD: 34.059126,
    _YMAX: 34.060432,
    _YMIN: 34.05781,
    ACREAGE: 10.25,
    ADDRESS_ID: "US_06_037_159289332",
    AGGR_ACREAGE: 10.254133,
    AGGR_GROUP: "100660192_194571270",
    AGGR_LOT_COUNT: 1,
    AIR_CONDITIONING_TYPE_DESC: "",
    ALTERNATE_APN: "",
    APN: "5408-002-922",
    APN_UNF: "5408002922",
    ASMT_YEAR: "2019",
    ASSOCIATE_PARCEL_COUNT: 1,
    ASSR_ACREAGE: 10.25,
    ASSR_BOOK_PAGE: "",
    ASSR_SQFT: 336636,
    AVM_VALUE: null,
    BEDROOMS: null,
    BLDG_NUMBER: null,
    BLOCK_NUMBER: "",
    BSMT_1_CODE: "",
    BUILDING_SQFT: null,
    CAL_ACREAGE: 9.1134,
    CAL_SQFT: 336636,
    CENSUS_BLOCK_GROUP: "1",
    CENSUS_TRACT: "207103",
    CONDITION_CODE_DESC: "",
    CONSTRUCTION_CODE_DESC: "",
    COUNTY: "ORANGE",
    DATE_NOVAL_TRANSFER: null,
    DATE_TRANSFER: null,
    DOC_NUMBER: "",
    DOC_NUMBER_NOVAL: "",
    DOC_TYPE_DESC: "",
    FIPS_CODE: "05034",
    FIREPLACE_TYPE: "",
    GARAGE_CODE_DESC: "",
    GEOMETRY: {},
    HEATING_DESC: "",
    IMPRV_PCT: null,
    INT_RATE_TYPE_1: "",
    INT_RATE_TYPE_2: "",
    LAND_SQFT: 336636,
    LANDUSE_CODE: "650",
    LANDUSE_DESC: "RESIDENTIAL",
    LEGAL_1: "TRACT NO 26838 LOT 1",
    LIVING_SQFT: null,
    LNDR_FIRST_NAME_1: "",
    LNDR_LAST_NAME_1: "",
    LOAN_VALUE_1: null,
    LOAN_VALUE_2: null,
    LOCATION_ID: "US_06_037_5408002922",
    LOT_DEPTH: null,
    LOT_NUMBER: "1",
    LOT_WIDTH: null,
    MAP_LINK: "5408-002-922",
    MAP_REFERENCE_1: "-",
    OWNER_ADDRESS: "1335 BEST ST",
    OWNER_CITY: "IRVINE",
    OWNER_NAME_1: "FOO",
    OWNER_NAME_2: "",
    OWNER_OCCUPIED: "Y",
    OWNER_STATE: "CA",
    OWNER_ZIP: "92618",
    OWNERSHIP_STATUS_CODE: "",
    OWNERSHIP_STATUS_DESC: "",
    PARCEL_APN: "5408002922",
    PARKING_SPACES: 0,
    PRICE_PER_ACRE: null,
    PRICE_PER_SQFT: null,
    PROPERTY_ID: "060371222123",
    RANGE: "",
    ROOF_CONSTRUCTION_DESC: "",
    ROOF_COVER_DESC: "",
    SALE_CODE_DESC: "",
    SECTION: "",
    SELLER_NAME: "",
    SITE_ADDR: "1335 BEST ST",
    SITE_CITY: "IRVINE",
    SITE_STATE: "CA",
    SITE_ZIP: "92618",
    STORIES_NUMBER: "2",
    STYLE_DESC: "",
    SUBDIVISION: "",
    TAX_ACCT_NBR: "",
    TAX_AMOUNT: null,
    TAX_EXEMPTION_DESC: "",
    TAX_ID: "US_06_037_5408-002-922",
    TAX_YEAR: null,
    TD_DOC_NUMBER_1: "",
    TITLE_COMPANY_NAME: "",
    TOTAL_BATHS_CALCULATED: 0,
    TOTAL_ROOMS: null,
    TOWNSHIP: "",
    TRACT_NUMBER: "268321",
    UNITS_NUMBER: null,
    USE_CODE_MUNI: "8832",
    USE_CODE_STD_CTGR_DESC: "MISCELLANEOUS",
    USE_CODE_STD_DESC: "RESIDENTIAL",
    VAL_ASSD: 986123,
    VAL_ASSD_IMPRV: null,
    VAL_ASSD_LAND: 986123,
    VAL_MARKET: null,
    VAL_TRANSFER: null,
    YR_BLT: null,
    YR_BLT_EFFECT: null,
    ZONING: "LAPF",
  },
];

const mockContentNoDisplayFields = {
  title: "My Other Surface",
  sections: [
    {
      title: "1st Section",
      records: [mockRecords[0]],
    },
  ],
};

const mockContent = {
  title: "My Surface",
  sections: [
    {
      title: "",
      records: [mockRecords[0]],
      displayFields: [
        {
          label: "Site Address",
          value: "${records[0].SITE_ADDR} ${records[0].SITE_CITY}, ${records[0].SITE_STATE} ${records[0].SITE_CITY}",
          onClick: () => { alert("Site Address clicked in Main Section"); },
        },
        {
          label: "Parcel No. (APN)",
          value: "${records[0].APN}",
        },
        {
          label: "Land Use Cat.",
          value: "${records[0].LANDUSE_DESC}",
        },
        {
          label: "Land use Desc.",
          value: "${records[0].LANDUSE_DESC}",
        },
        {
          label: "Building Area",
          value: "${records[0].BUILDING_SQFT} SF",
        },
        {
          label: "Lot Area",
          value: "${records[0].ASSR_SQFT} SF (${records[0].CAL_ACREAGE} ACRES)",
        },
        {
          label: "No. of Units",
          value: "1",
        },
        {
          label: "Year Built",
          value: "${records[0].YR_BLT}",
        },
        {
          label: "Assessed Value",
          value: "${records[0].VAL_ASSD.toLocaleString('en-us', {style: 'currency', currency: 'USD'})}",
        },
        {
          label: "Owner 1",
          value: "${records[0].OWNER_NAME_1}",
        },
        {
          label: "Owner 2",
          value: "${records[0].OWNER_NAME_2}",
        },
        {
          label: "Owner Address",
          value: "${records[0].OWNER_ADDRESS} ${records[0].OWNER_CITY}, ${records[0].OWNER_STATE} ${records[0].OWNER_CITY}",
        },
        {
          label: "Last Transfer",
          value: "",
        },
        {
          label: "Last Market Sale",
          value: "12/19/14 for ($1,000,000)",
        },
        {
          label: "Opportunity Zone",
          value: "Yes (Low-Income Community)",
        },
      ],
      commands: [
        {
          getName: () => { return "Add To List"; },
          execute: () => { alert("Add To List clicked in First Section"); },
        },
        {
          getName: () => { return "Full Property Detail"; },
          execute: () => { alert("Property Detail clicked in First Section"); },
        },
        {
          getName: () => { return "Copy Geometry"; },
          execute: () => { alert("Copy Geometry clicked in First Section"); },
        },
      ],
    },
    {
      title: "Property",
      records: [mockRecords[0]],
      displayFields: [
        {
          label: "Site Address",
          value: "${records[0].SITE_ADDR} ${records[0].SITE_CITY}, ${records[0].SITE_STATE} ${records[0].SITE_CITY}",
        },
        {
          label: "Parcel No. (APN)",
          value: "${records[0].APN}",
        },
        {
          label: "Legal Information",
          value: "SALT LAKE DEPOT TRACT # 2 LOT 50 BLK A",
          onClick: () => { alert("Hello there"); },
        },
        {
          label: "Subdivision",
          value: "SALT LAKE DEPOT",
        },
        {
          label: "Legal Lot",
          value: "50",
        },
        {
          label: "Legal Block",
          value: "A",
        },
      ],
      commands: [
        {
          getName: () => { return "Tax Map"; },
          execute: () => { alert("Tax map clicked in second-section"); },
        },
        {
          getName: () => { return "Site Profile Report"; },
          execute: () => { alert("Site Profile Report clicked in second-section"); },
        },
        {
          getName: () => { return "Full Property Detail"; },
          execute: () => { alert("Property Detail clicked in second-section"); },
        },
      ],
    },
    {
      title: "Ownership",
      records: [mockRecords[0]],
      displayFields: [
        {
          label: "Owner 1",
          value: "${records[0].OWNER_NAME_1}",
        },
        {
          label: "Owner 2",
          value: "${records[0].OWNER_NAME_2}",
        },
        {
          label: "Owner Address",
          value: "${records[0].OWNER_ADDRESS} ${records[0].OWNER_CITY}, ${records[0].OWNER_STATE} ${records[0].OWNER_CITY}",
        },
        {
          label: "Vesting Code",
          value: "SW",
        },
        {
          label: "Vesting Code Desc",
          value: "FAMILY",
        },
        {
          label: "Owner Occupied",
          value: "Y",
        },
      ],
      commands: [
        {
          getName: () => { return "List Units"; },
          execute: () => { alert("List units clicked in third-section"); },
        },
        {
          getName: () => { return "Owner Portfolio"; },
          execute: () => { alert("Owner Portfolio clicked in third-section"); },
        },
      ],
    },
  ],
};

const mockStringTemplate = `React.createElement("div", null, React.createElement("h2", null, "This is being rendered from a string and using our LB-React-Core components"), props.content.sections.map(function (section) {
  return React.createElement(lbReactCore.List, null, section.displayFields.map(function (displayField) {
    return React.createElement(lbReactCore.ListItem, {
      title: displayField.label,
      description: displayField.value
    });
  }), React.createElement("br", null), React.createElement("br", null));
}))`;

const testData = [{
  id: "a",
  label: "Add to List",
}, {
  id: "b",
  label: "Owner Portfolio",
}, {
  id: "c",
  label: "Full Property Detail",
}, {
  id: "d",
  label: "Copy Geometry",
}, {
  id: "e",
  label: "Tax Map",
}, {
  id: "f",
  label: "Site Profile Report",
}, {
  id: "g",
  label: "List Units",
}];

storiesOf("Templates|Surface Panel", module)
  .addDecorator(Padding)
  .add("Summary Panel", () => {
    return (
      <Surface surfaceTemplate={SummaryPanelTemplate} content={mockContent} id={"surface-summary-panel-story"} />
    );
  })
  .add("Summary Panel Menu", () => {
    return (
      <Menu id="menu-test" data={testData} />
    );
  })
  .add("Template from string", () => {
    return (<Surface surfaceTemplate={mockStringTemplate} content={mockContent} id={"surface-string-template-story"} />);
  })
  .add("Content with no displayFields", () => {
    return (<Surface surfaceTemplate={SummaryPanelTemplate} content={mockContentNoDisplayFields} id={"surface-raw-fields-story"} />);
  });
