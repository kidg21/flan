/* eslint-disable linebreak-style */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Text, { Title, Link } from "base/Typography";
import Card, { CardSection, CardGrid } from "elements/Card";
import List, { ListSection, ListItem } from "blocks/List";
import Tabs from "blocks/Tabs";
import Table from "blocks/Table";
import Form, { FormSection } from "layout/Form";
import TextInput from "atoms/TextInput";
import Button, { ButtonGroup } from "atoms/Button";
import { CheckboxGroup } from "atoms/Checkbox";
import { RadioGroup } from "atoms/Radio";
import SelectMenu from "atoms/SelectMenu";
import Panel from "layout/Panel";
import Bar from "layout/Bar";
import Menu from "blocks/Menu";
import Page from "layout/Page";
import Picker, { ColorSwatch } from "elements/Picker";
import SearchBar from "blocks/Search";


function MockMap({ withTools, ...props }) {
  return (
    <React.Fragment>
      {withTools ? <Page
        id="Map Tools"
        template="E_03"
        stateCards
        isOverlay
        A={{
          id: "A",
          content: <SearchBar id="Map_E3" placeholder="Search Location" />,
        }}
        B={{
          id: "B",
          content: <Button label="Button" icon="circle" alignCenter />,
        }}
        C={{
          id: "C",
          content: <Button label="Button" icon="circle" alignCenter />,
        }}
        D={{
          id: "D",
          content: <Button label="Button" icon="circle" alignCenter />,
        }}
        E={{
          id: "E",
          content: <MockPalette />,
        }}
      /> : null}
      <Mapbox
        {...props}
      />
    </React.Fragment>
  );
}
MockMap.propTypes = {
  withTools: PropTypes.bool,
};
MockMap.defaultProps = {
  withTools: false,
};

function MockPalette() {
  return (
    <Picker id="standard" label="Color Picker" columns="3">
      <ColorSwatch color="#EBEAEC" />
      <ColorSwatch color="#D9ECEC" />
      <ColorSwatch isSelected color="#80959D" />
      <ColorSwatch color="#63B1CD" />
      <ColorSwatch color="#06BFAE" />
      <ColorSwatch color="#095593" />
      <ColorSwatch color="#F3822B" />
      <ColorSwatch color="#FFBF00" />
    </Picker>
  );
}
MockPalette.propTypes = {
  // stuff
};
MockPalette.defaultProps = {
  // stuff
};

function MockHeader() {
  return (
    <Card id="Card_Header">
      <CardSection>
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
    <Card id="Card_Footer" isInverse>
      <CardSection>
        <Grid columns="auto 1fr">
          <Link text="1" onClick={() => {}} />
          <Text text="Footer Content Goes Here" />
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

function MockMenu() {
  return (
    <List title="Main Menu" isInteractive isInverse>
      <ListItem title="Menu Item" />
      <ListItem title="Menu Item" isSelected />
      <ListItem title="Menu Item" />
      <ListItem title="Menu Item" />
      <ListItem title="Menu Item" />
    </List>
  );
}
MockMenu.propTypes = {
  // stuff
};
MockMenu.defaultProps = {
  // stuff
};

function MockWorkflow() {
  return (
    <List title="Workflow" isInteractive>
      <ListSection section="Section Name" />
      <ListItem title="Menu Item" />
      <ListSection section="Section Name" />
      <ListItem title="Menu Item" isSelected />
      <ListItem title="Menu Item" />
      <ListItem title="Menu Item" />
      <ListItem title="Menu Item" />
      <ListSection section="Section Name" />
      <ListItem title="Menu Item" />
      <ListItem title="Menu Item" />
    </List>
  );
}
MockWorkflow.propTypes = {
  // stuff
};
MockWorkflow.defaultProps = {
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
      id="MockTable"
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
      <Card id="MockCard_1" />
      <Card id="MockCard_2" />
      <Card id="MockCard_3" />
      <Card id="MockCard_4" />
      <Card id="MockCard_5" />
    </CardGrid>
  );
}
MockCardGrid.propTypes = {
  // stuff
};
MockCardGrid.defaultProps = {
  // stuff
};

const shortBoxes = [
  {
    id: "box-1",
    label: "Label 1",
  },
  {
    id: "box-2",
    label: "Label 2 (disabled)",
    disabled: true,
  },
  {
    id: "box-3",
    label: "Label 3",
  },
  {
    id: "box-4",
    label: "Label 4",
  },
];
const longBoxes = [
  {
    id: "box_long",
    label:
      "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself.",
  },
  {
    id: "box_long2",
    label:
      "Enough with these long labels already...put it on your blog, Shakespeare.",
  },
];
const shortRadios = [
  {
    id: "radio-1",
    name: "radio-group",
    value: "1",
    label: "Label 1",
  },
  {
    id: "radio-2",
    name: "radio-group",
    value: "2",
    label: "Label 2 (disabled)",
    disabled: true,
  },
  {
    id: "radio-3",
    name: "radio-group",
    value: "3",
    label: "Label 3",
  },
  {
    id: "radio-4",
    name: "radio-group",
    value: "4",
    label: "Label 4",
  },
];
const longRadios = [
  {
    id: "radio_long",
    name: "radio-group",
    value: "5",
    label:
      "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself.",
  },
  {
    id: "radio_long2",
    name: "radio-group",
    value: "6",
    label:
      "Enough with these long labels already...put it on your blog, Shakespeare.",
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

function MockForm() {
  return (
    <Form
      id="Form"
      title="Form Header"
      subtitle="This is the subtitle"
      description="Just think about these things in your mind - then bring them into your world. Isn't that fantastic?  All you need to paint is a few tools, a little instruction, and a vision in your mind."
    >
      <FormSection title="Group 1">
        <TextInput
          id="firstName"
          label="First Name"
          placeholder="John"
          helpText="The one that your parents gave you"
        />
        <TextInput
          id="lastName"
          label="Last Name"
          placeholder="Williams"
          helpText="The one that comes after.."
        />
      </FormSection>
      <FormSection title="Group 2">
        <CheckboxGroup
          id="Section Name"
          label="Checkbox Group Label"
          data={shortBoxes}
          helpText="Hang in there, buddy, I'm here to help!"
          columns="2"
        />
        <CheckboxGroup data={longBoxes} columns="1" />
        <SelectMenu
          multiSelect
          label="Multi-Select"
          placeholder="Choose One Or More..."
          helpText="Help text for the SelectMenu component"
          options={options}
        />
      </FormSection>
      <FormSection title="Group 3">
        <RadioGroup
          id="Section Name"
          label="Radio Group Label"
          data={shortRadios}
          helpText="Hang in there, buddy, I'm here to help!"
          columns="2"
        />
        <RadioGroup data={longRadios} columns="1" />
      </FormSection>
    </Form>
  );
}
MockForm.propTypes = {
  // stuff
};
MockForm.defaultProps = {
  // stuff
};

const menuData = [
  { id: "a", label: "Action" },
  { id: "b", label: "Action" },
  { id: "c", label: "Action" },
];

const panelHeader = (
  <Bar
    // padding="2x"
    contentAlign="center"
    left={{
      content: (
        <Menu
          id="MockDetails-Menu"
          data={menuData}
          position="bottomRight"
        />
      ),
      width: "max-content",
    }}
    center={{
      content: <Title text="Details" weight="bold" />,
      align: "left",
    }}
  // right={{
  //   content: (
  //     <Icon
  //       icon="close"
  //     onClick={toggleLeft}
  //     />
  //   ),
  //   width: "max-content",
  // }}
  />
);

const infoCard = (
  <Card
    id="MockDetails-Info"
    media="https://cdn.facilityexecutive.com/wp-content/uploads/2019/09/38391858_ml-800x418-1-574x300.jpg" // Image
    mediaDesc="Media Description"
    title="Best Place Ever"
    description="I Could Tell You More, But..."
    icon="home"
    // commands={[
    //   {
    //     id: "Action One",
    //     label: "Action",
    //   },
    // ]}
    shadow="0"
  />
);

const infoBody = (
  <Page>
    <Title
      text="All About This Item"
      weight="bold"
    />
    <Text
      text="Just think about these things in your mind - then bring them into your world. Isn't that fantastic? You can just push a little tree out of your brush like that. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. I thought today we would make a happy little stream that's just running through the woods here. Just a little indication."
    />
    <Text
      text="In your imagination you can go anywhere you want. Let's put some happy little clouds in our world. We'll throw some old gray clouds in here just sneaking around and having fun. Let's do that again."
    />
    <Text
      text="This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. These things happen automatically. All you have to do is just let them happen. I'll go over the colors one more time that we use: Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red. Only eight colors that you need."
    />
    <Text
      text="You want your tree to have some character. Make it special. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. We spend so much of our life looking - but never seeing."
    />
    <Text
      text="We'll throw some happy little limbs on this tree. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown. Painting should do one thing. It should put happiness in your heart. Think about a cloud. Just float around and be there. In this world, everything can be happy."
    />
    <Text
      text="Nice little fluffy clouds laying around in the sky being lazy. You need to have a very firm paint to do this. You have to allow the paint to break to make it beautiful."
    />
    <Text
      text="A little happy sunlight shining through there. We're not trying to teach you a thing to copy. We're just here to teach you a technique, then let you loose into the world. There's nothing wrong with having a tree as a friend."
    />
  </Page>
);

function MockDetails() {
  return (
    <Panel
      id="Info Panel"
      padding="0"
      header={(
        <React.Fragment>
          {panelHeader}
          {infoCard}
        </React.Fragment>
      )}
    >
      {infoBody}
    </Panel>
  );
}
MockDetails.propTypes = {
  // stuff
};
MockDetails.defaultProps = {
  // stuff
};

function MockTabs() {
  const [activeSingleTab, setActiveSingleTab] = useState("tab1");
  const tabButtons = [
    {
      id: "Tab 1",
      label: "Tab 1",
      isSelected: activeSingleTab === "tab1",
      onClick: () => { setActiveSingleTab("tab1"); },
    },
    {
      id: "Tab 2",
      label: "Tab 2",
      isSelected: activeSingleTab === "tab2",
      onClick: () => { setActiveSingleTab("tab2"); },
    },
    {
      id: "Tab 3",
      label: "Tab 3",
      isSelected: activeSingleTab === "tab3",
      onClick: () => { setActiveSingleTab("tab3"); },
    },
  ];
  return (
    <Tabs data={tabButtons} />
  );
}
MockTabs.propTypes = {
  // stuff
};
MockTabs.defaultProps = {
  // stuff
};

function MockButtons() {
  return (
    <ButtonGroup columns="5">
      <Button label="Button" />
      <Button label="Button" />
      <Button label="Button" />
      <Button label="Button" />
      <Button label="Button" />
    </ButtonGroup>
  );
}
MockButtons.propTypes = {
  // stuff
};
MockButtons.defaultProps = {
  // stuff
};

export {
  MockButtons,
  MockCardGrid,
  MockDetails,
  MockFooter,
  MockForm,
  MockHeader,
  MockPalette,
  MockMap,
  MockMenu,
  MockTable,
  MockTabs,
  MockWorkflow,
};
