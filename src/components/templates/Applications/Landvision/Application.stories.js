/* eslint-disable complexity */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { FullScreen } from "helpers/Display";
import Panel from "layout/Panel";
import Table from "blocks/Table";
import List, { ListItem } from "blocks/List";
import Icon from "atoms/Icon";
import Search from "blocks/Search";
import IconBlock from "blocks/IconBlock";
import Text, { Title, Link } from "base/Typography";
import Avatar from "atoms/Avatar";
import Command from "atoms/Command";
import Switch from "atoms/Switch";
import Checkbox from "atoms/Checkbox";
import TextInput from "atoms/TextInput";
import SearchBar from "blocks/Search";
import Button, { ButtonGroup } from "atoms/Button";
import Bar from "layout/Bar";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import NavigationPanelHeader from "elements/PanelHeaders/NavigationPanelHeader";
import PropertyPanelHeader from "elements/PanelHeaders/PropertyPanelHeader";
import Card, { CardSection, CardGrid } from "elements/Card";
import Layout from "layout/Layout";
import Grid from "layout/Grid";
import Menu from "blocks/Menu";
import Page, { PageSection } from "layout/Page";
import Tabs from "blocks/Tabs";
import SelectMenu from "atoms/SelectMenu";
import Image from "atoms/Image";
import Legend from "blocks/Legend";
import Control, { ControlItem } from "blocks/Control";

const LightBoxIcon = "static/media/LightBoxIconLogo.64993202.png";

const map = (
  <Mapbox />
);

const menuData = [
  { id: "a", label: "Save" },
  { id: "b", label: "Filter" },
  { id: "c", label: "Something" },
  { id: "d", label: "Filter" },
  { id: "e", label: "Layer" },
];

const panelHeader = (
  <Card shadow="0">
    <MainPanelHeader title="Menu" menuData={menuData} />
  </Card>
);

const listPanel = (
  <Panel
    id="List Panel"
    header={panelHeader}
  >
    <List interactive>
      <ListItem title="Layers" />
      <ListItem title="Results" />
      <ListItem title="Form" />
      <ListItem title="Research" />
    </List>
  </Panel>
);

function doNothing() {
  // do nothing
}

const infoCard = (
  <Card isInverse>
    <Bar
      left={{
        content: (
          <Title text="Object Record" weight="bold" />
        ),
        align: "left",
      }}
      contentAlign="center"
      right={{
        content: (
          <Icon icon="close" onClick={doNothing} />
        ),
        width: "min-content",
      }}
    />
  </Card>
);

const pageContent = (
  <Page
    header={{
      title: "All About This Item",
      // subtitle: "Totally Worth The Read...Enjoy!",
      description: "Just think about these things in your mind - then bring them into your world. Isn't that fantastic? You can just push a little tree out of your brush like that. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. I thought today we would make a happy little stream that's just running through the woods here. Just a little indication.",
    }}
  >
    <PageSection title="Section 1">
      <Text
        text="In your imagination you can go anywhere you want. Let's put some happy little clouds in our world. We'll throw some old gray clouds in here just sneaking around and having fun. Let's do that again."
      />
      <Text
        text="This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. These things happen automatically. All you have to do is just let them happen. I'll go over the colors one more time that we use: Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red. Only eight colors that you need."
      />
    </PageSection>
    <PageSection title="Section 2">
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
    </PageSection>
  </Page>
);

const infoPanel = (
  <Panel
    id="Info Panel"
    header={infoCard}
  >
    {pageContent}
  </Panel>
);

const landingPanel = (
  <Panel
    id="Application Home"
  >
    <Title text="Application Home" size="lg" weight="bold" />
    <Text text="Welcome, and such..." />
  </Panel>
);

const itemPanel1 = (
  <Panel
    id="Item Panel 1"
  >
    {/* <Avatar label="1" brand="research" /> */}
    <Title text="Item 1" size="lg" weight="bold" />
    <Text text="All about Item 1..." />
  </Panel>
);

const itemPanel2 = (
  <Panel
    id="Item Panel 2"
  >
    {/* <Avatar label="2" brand="bi" /> */}
    <Title text="Item 2" size="lg" weight="bold" />
    <Text text="All about Item 2..." />
  </Panel>
);

const itemPanel3 = (
  <Panel
    id="Item Panel 3"
  >
    {/* <Avatar label="3" brand="broker" /> */}
    <Title text="Item 3" size="lg" weight="bold" />
    <Text text="All about Item 3..." />
  </Panel>
);

const tableHeaders = [
  { id: "select", label: <Checkbox /> },
  { id: "objects", label: "Objects" },
  { id: "f1", label: "Field Name", sortable: true },
  { id: "f2", label: "Field Name", sortable: false },
  { id: "f3", label: "Field Name", sortable: false },
  { id: "f4", label: "Field Name", sortable: true },
  { id: "f5", label: "Field Name", sortable: true },
  { id: "actions", label: "Actions" },
];

const tableData = [
  {
    select: <Checkbox />,
    objects: <Command label="Object" />,
    f1: "Value",
    f2: "Value",
    f3: "Value",
    f4: "Value",
    f5: "Value",
    actions: <Grid columns="5"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
  },
  {
    select: <Checkbox />,
    objects: <Command label="Object" />,
    f1: "Value",
    f2: "Value",
    f3: "Value",
    f4: "Value",
    f5: "Value",
    actions: <Grid columns="5"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
  },
  {
    select: <Checkbox />,
    objects: <Command label="Object" />,
    f1: "Value",
    f2: "Value",
    f3: "Value",
    f4: "Value",
    f5: "Value",
    actions: <Grid columns="5"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
  },
];

const dataTable = (
  <Table
    headers={tableHeaders}
    rows={tableData}
    listId="foo"
    columnWidth={120}
  />
);

storiesOf("Templates/01_Products", module)
  .add(
    "Lightbox (Standard)",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };
        const [menu2, setMenu2] = useState("right");
        const [menu3, setMenu3] = useState("right");
        const showMenu1 = () => {
          setMenu2("right");
          setMenu3("right");
        };
        const showMenu2 = () => {
          if (menu2 === "right") {
            setMenu2(null);
          } else if (menu3 === null) {
            setMenu3("right");
          } else {
            setMenu2("right");
          }
        };
        const showMenu3 = () => {
          if (menu3 === "right") {
            setMenu3(null);
          } else {
            setMenu3("right");
          }
        };
        const [showLabels, setLabelState] = useState(false);
        const toggleLabels = () => { setLabelState(!showLabels); };
        return (
          <Layout
            header={{
              id: "Header",
              content: (
                <Card>
                  <Bar
                    contentAlign="center"
                    padding="2x"
                    left={{
                      content: (
                        <Command
                          icon="left"
                          label="Menu"
                          onClick={toggleLeft}
                        />
                      ),
                    }}
                    center={{
                      content: (
                        <Title text={showLabels ? "Appraisal Product" : "Header - Product"} />
                      ),
                    }}
                    right={{
                      content: (
                        <Checkbox id="labels" label="Labels" align="right" onChange={toggleLabels} />
                      ),
                    }}
                  />
                </Card>
              ),
            }}
            left={{
              id: "Left",
              content: (
                <React.Fragment>
                  <Panel
                    id="Menu 1"
                    header={
                      <Card >
                        <CardSection variant="info" padding="0">
                          <Bar
                            contentAlign="center"
                            left={{
                              content: (
                                <Title text={showLabels ? "Appraisal" : "Product"} weight="bold" />
                              ),
                            }}
                            right={{
                              content: (
                                <Menu
                                  data={[
                                    { id: "a", label: showLabels ? "Import" : "Menu Action" },
                                    { id: "c", label: showLabels ? "Export" : "Menu Action" },
                                    { id: "b", label: showLabels ? "Share" : "Menu Action" },
                                  ]}
                                  position="bottomLeft"
                                />
                              ),
                              width: "min-content",
                            }}
                          />
                        </CardSection>
                      </Card>}
                  >
                    <Grid columns="1" gap="lg">
                      <Command label={showLabels ? "Appraisal Home" : "Product Home"} onClick={showMenu1} />
                      <TextInput type="search" placeholder={showLabels ? "Search Appraisal" : "Search - Product"} />
                      <List title={showLabels ? "Create" : "Group 1"} isInteractive>
                        <ListItem
                          title={showLabels ? "New Job" : "Content - Product"}
                        // post={{ type: "icon", icon: "right" }}
                        // onClick={showMenu2}
                        />
                        <ListItem
                          title={showLabels ? "Add Task" : "Content - Product"}
                        // post={{ type: "icon", icon: "right" }}
                        // onClick={showMenu2}
                        />
                      </List>
                      <List title={showLabels ? "Review" : "Group 2"} isInteractive>
                        <ListItem
                          title={showLabels ? "Jobs" : "Content - Product"}
                        // post={{ type: "icon", icon: "right" }}
                        // onClick={showMenu2}
                        />
                        <ListItem
                          title={showLabels ? "RFPs" : "Content - Product"}
                        // post={{ type: "icon", icon: "right" }}
                        // onClick={showMenu2}
                        />
                        <ListItem
                          title={showLabels ? "Tasks" : "Content - Product"}
                        // post={{ type: "icon", icon: "right" }}
                        // onClick={showMenu2}
                        />
                      </List>
                      <List isInteractive>
                        <ListItem
                          title={showLabels ? "Research" : "Application"}
                          post={{ type: "icon", icon: "right" }}
                          onClick={showMenu2}
                        />
                      </List>
                    </Grid>
                  </Panel>
                  <Panel
                    id="Menu 2"
                    offcanvas={menu2}
                    header={
                      <Card>
                        <CardSection variant="success" padding="0">
                          <Bar
                            contentAlign="center"
                            left={{
                              content: (
                                <Title text={showLabels ? "Jobs" : "Application"} weight="bold" />
                              ),
                            }}
                            right={{
                              content: (
                                <Menu
                                  data={[
                                    { id: "a", label: showLabels ? "Preferences" : "Menu Action" },
                                    { id: "c", label: showLabels ? "Export" : "Menu Action" },
                                    { id: "b", label: showLabels ? "Share" : "Menu Action" },
                                  ]}
                                  position="bottomLeft"
                                />
                              ),
                              width: "min-content",
                            }}
                          />
                        </CardSection>
                      </Card>}
                  >
                    <Grid columns="1" gap="lg">
                      <Command icon="left" label={showLabels ? "Appraisal Menu" : "Product"} onClick={showMenu1} />
                      <TextInput type="search" placeholder={showLabels ? "Search Applications" : "Search - Application"} />
                      <List title={showLabels ? "Job Overview" : "Group 1"} isInteractive>
                        <ListItem
                          title={showLabels ? "Job Details" : "Content - App"}
                        // post={{ type: "icon", icon: "right" }}
                        // onClick={showMenu3}
                        />
                        <ListItem
                          title={showLabels ? "Shared Documents" : "Content - App"}
                        // post={{ type: "icon", icon: "right" }}
                        // onClick={showMenu3}
                        />
                      </List>
                      <List title={showLabels ? "Task List" : "Group 2"} isInteractive>
                        <ListItem
                          title={showLabels ? "Verify Site" : "Module"}
                          post={{ type: "icon", icon: "right" }}
                          onClick={showMenu3}
                        />
                        <ListItem
                          title={showLabels ? "Appraisal Research" : "Module"}
                          post={{ type: "icon", icon: "right" }}
                          onClick={showMenu3}
                        />
                        <ListItem
                          title={showLabels ? "Review & Send" : "Module"}
                          post={{ type: "icon", icon: "right" }}
                          onClick={showMenu3}
                        />
                      </List>
                    </Grid>
                  </Panel>
                  <Panel
                    id="Menu 3"
                    offcanvas={menu3}
                    header={
                      <Card >
                        <CardSection variant="warning" padding="0">
                          <Bar
                            contentAlign="center"
                            left={{
                              content: (
                                <Title text={showLabels ? "Content Menu" : "Module"} weight="bold" />
                              ),
                            }}
                            right={{
                              content: (
                                <Menu
                                  data={[
                                    { id: "a", label: showLabels ? "Print" : "Menu Action" },
                                    { id: "c", label: showLabels ? "Export" : "Menu Action" },
                                    { id: "b", label: showLabels ? "Share" : "Menu Action" },
                                  ]}
                                  position="bottomLeft"
                                />
                              ),
                              width: "min-content",
                            }}
                          />
                        </CardSection>
                      </Card>}
                  >
                    <Grid columns="1" gap="lg">
                      <Command icon="left" label={showLabels ? "Jobs" : "Application"} onClick={showMenu2} />
                      <TextInput type="search" placeholder={showLabels ? "Search Content" : "Search - Module"} />
                      <List title={showLabels ? "Appraisal Research" : "Group 1"} isInteractive>
                        <ListItem
                          title={showLabels ? "Assessment" : "Module - Content"}
                          onClick={doNothing}
                        />
                        <ListItem
                          title={showLabels ? "Zoning" : "Module - Content"}
                          onClick={doNothing}
                        />
                        <ListItem
                          title={showLabels ? "Demographics" : "Module - Content"}
                          onClick={doNothing}
                        />
                        <ListItem
                          title={showLabels ? "Maps" : "Module - Content"}
                          onClick={doNothing}
                        />
                        <ListItem
                          title={showLabels ? "Data Extraction" : "Module - Content"}
                          onClick={doNothing}
                        />
                      </List>
                    </Grid>
                  </Panel>
                </React.Fragment>
              ),
              visible: leftOpen,
            }}
            footer={{
              id: "Footer",
              content: (
                <Card>
                  <Bar
                    contentAlign="center"
                    left={{
                      content: (
                        <Title text={showLabels ? "Footer for Appraisal stuff..." : "Footer - Product"} />
                      ),
                    }}
                  />
                </Card>
              ),
            }}
          />
        );
      });
    },
  );
storiesOf("Templates/02_Applications", module)
  .addDecorator(FullScreen)
  .add(
    "Application (Template)",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };
        const [rightOpen, setRightOpen] = useState(false);
        const openRight = () => { setRightOpen(true); };
        const closeRight = () => { setRightOpen(false); };

        const [recordView, setRecordView] = useState("bottom");
        const showRecord = () => { setRecordView(null); };
        const hideRecord = () => { setRecordView("bottom"); };

        const homeView = (
          <Panel>
            <Page
              header={{
                title: "Application Home",
                subtitle: "You've come to the right place to begin working with [insert object types here]",
                description: "Just think about these things in your mind - then bring them into your world. Isn't that fantastic? You can just push a little tree out of your brush like that. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. I thought today we would make a happy little stream that's just running through the woods here. Just a little indication.",
              }}
            />
          </Panel>
        );

        const objectHeaders1 = [
          { id: "select", label: <Grid columns="auto 1fr"><Checkbox />Objects</Grid> },
          // { id: "objects", label: "Objects" },
          { id: "f1", label: "Field Name", sortable: true },
          { id: "f2", label: "Field Name", sortable: false },
          { id: "f3", label: "Field Name", sortable: false },
          { id: "f4", label: "Field Name", sortable: true },
          { id: "f5", label: "Field Name", sortable: true },
          // { id: "f6", label: "Field Name", sortable: false },
          // { id: "f7", label: "Field Name", sortable: false },
          { id: "actions", label: "Actions" },
          { id: "blank", label: "", sortable: false },
          { id: "blank2", label: "", sortable: false },
          { id: "blank3", label: "", sortable: false },
        ];

        const objectData1 = [
          {
            select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={showRecord} /></Grid>,
            f1: "Value",
            f2: "Value",
            f3: "Value",
            f4: "Value",
            f5: "Value",
            // f6: "Value",
            // f7: "Value",
            actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
            blank: "",
            blank2: "",
            blank3: "",
          },
          {
            select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={showRecord} /></Grid>,
            f1: "Value",
            f2: "Value",
            f3: "Value",
            f4: "Value",
            f5: "Value",
            // f6: "Value",
            // f7: "Value",
            actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
            blank: "",
            blank2: "",
            blank3: "",
          },
          {
            select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={showRecord} /></Grid>,
            f1: "Value",
            f2: "Value",
            f3: "Value",
            f4: "Value",
            f5: "Value",
            // f6: "Value",
            // f7: "Value",
            actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
            blank: "",
            blank2: "",
            blank3: "",
          },
        ];

        const objectTable1 = (
          <Table
            headers={objectHeaders1}
            rows={objectData1}
            listId="foo"
            columnWidth={140}
          />
        );

        const objectsView1 = (
          <Panel>
            <Page
              header={{
                title: "Object Type",
                subtitle: "Here are all of the objects of this type...",
                // description: "Just think about these things in your mind - then bring them into your world. Isn't that fantastic? You can just push a little tree out of your brush like that. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. I thought today we would make a happy little stream that's just running through the woods here. Just a little indication.",
              }}
            />
            <PageSection>
              <Grid columns="1" rows="auto 300px" gap="0">
                <Card shadow="0">
                  <CardSection padding="0">
                    <Bar
                      contentAlign="center"
                      left={{
                        content: (
                          <Grid columns="2">
                            <SelectMenu
                              options={[
                                { value: "all", label: "All Filters" },
                                { value: "a", label: "Filter A" },
                                { value: "b", label: "Filter B" },
                              ]}
                              selectOptions="all"
                              isClearable={false}
                            />
                            <TextInput type="search" placeholder="Search Objects" />
                          </Grid>
                        ),
                        width: "max-content",
                      }}
                      right={{
                        content: (
                          <Grid columns="max-content max-content max-content" gap="4xl">
                            <Command label="Action" onClick={doNothing} />
                            <Command label="Action" onClick={doNothing} />
                            <Menu
                              data={[
                                { id: "a", label: "Action" },
                                { id: "b", label: "Action" },
                                { id: "c", label: "Action" },
                              ]}
                              position="bottomLeft"
                            />
                          </Grid>
                        ),
                        width: "fit-content",
                      }}
                    />
                  </CardSection>
                </Card>
                {objectTable1}
              </Grid>
            </PageSection>
          </Panel>
        );

        const objectHeaders2 = [
          { id: "select", label: <Grid columns="auto 1fr"><Checkbox />Objects</Grid> },
          // { id: "objects", label: "Objects" },
          { id: "f1", label: "Field Name", sortable: true },
          { id: "f2", label: "Field Name", sortable: false },
          { id: "f3", label: "Field Name", sortable: false },
          { id: "f4", label: "Field Name", sortable: true },
          { id: "f5", label: "Field Name", sortable: true },
          // { id: "f6", label: "Field Name", sortable: false },
          // { id: "f7", label: "Field Name", sortable: false },
          { id: "actions", label: "Actions" },
          { id: "blank", label: "", sortable: false },
          { id: "blank2", label: "", sortable: false },
          { id: "blank3", label: "", sortable: false },
        ];

        const objectData2 = [
          {
            select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={showRecord} /></Grid>,
            f1: "Value",
            f2: "Value",
            f3: "Value",
            f4: "Value",
            f5: "Value",
            // f6: "Value",
            // f7: "Value",
            actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
            blank: "",
            blank2: "",
            blank3: "",
          },
          {
            select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={showRecord} /></Grid>,
            f1: "Value",
            f2: "Value",
            f3: "Value",
            f4: "Value",
            f5: "Value",
            // f6: "Value",
            // f7: "Value",
            actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
            blank: "",
            blank2: "",
            blank3: "",
          },
        ];

        const objectTable2 = (
          <Table
            headers={objectHeaders2}
            rows={objectData2}
            listId="foo"
            columnWidth={140}
          />
        );

        const objectsView2 = (
          <Panel>
            <Page
              header={{
                title: "Object Type",
                subtitle: "Here are all of the objects of this type...",
                // description: "Just think about these things in your mind - then bring them into your world. Isn't that fantastic? You can just push a little tree out of your brush like that. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. I thought today we would make a happy little stream that's just running through the woods here. Just a little indication.",
              }}
            />
            <PageSection>
              <Grid columns="1" rows="auto 300px" gap="0">
                <Card shadow="0">
                  <CardSection padding="0">
                    <Bar
                      contentAlign="center"
                      left={{
                        content: (
                          <Grid columns="2">
                            <SelectMenu
                              options={[
                                { value: "all", label: "All Filters" },
                                { value: "a", label: "Filter A" },
                                { value: "b", label: "Filter B" },
                              ]}
                              selectOptions="all"
                              isClearable={false}
                            />
                            <TextInput type="search" placeholder="Search Objects" />
                          </Grid>
                        ),
                        width: "max-content",
                      }}
                      right={{
                        content: (
                          <Grid columns="max-content max-content max-content" gap="4xl">
                            <Command label="Action" onClick={doNothing} />
                            <Command label="Action" onClick={doNothing} />
                            <Menu
                              data={[
                                { id: "a", label: "Action" },
                                { id: "b", label: "Action" },
                                { id: "c", label: "Action" },
                              ]}
                              position="bottomLeft"
                            />
                          </Grid>
                        ),
                        width: "fit-content",
                      }}
                    />
                  </CardSection>
                </Card>
                {objectTable2}
              </Grid>
            </PageSection>
          </Panel>
        );

        const objectHeaders3 = [
          { id: "select", label: <Grid columns="auto 1fr"><Checkbox />Objects</Grid> },
          // { id: "objects", label: "Objects" },
          { id: "f1", label: "Field Name", sortable: true },
          { id: "f2", label: "Field Name", sortable: false },
          { id: "f3", label: "Field Name", sortable: false },
          { id: "f4", label: "Field Name", sortable: true },
          { id: "f5", label: "Field Name", sortable: true },
          // { id: "f6", label: "Field Name", sortable: false },
          // { id: "f7", label: "Field Name", sortable: false },
          { id: "actions", label: "Actions" },
          { id: "blank", label: "", sortable: false },
          { id: "blank2", label: "", sortable: false },
          { id: "blank3", label: "", sortable: false },
        ];

        const objectData3 = [
          {
            select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={showRecord} /></Grid>,
            f1: "Value",
            f2: "Value",
            f3: "Value",
            f4: "Value",
            f5: "Value",
            // f6: "Value",
            // f7: "Value",
            actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
            blank: "",
            blank2: "",
            blank3: "",
          },
          {
            select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={showRecord} /></Grid>,
            f1: "Value",
            f2: "Value",
            f3: "Value",
            f4: "Value",
            f5: "Value",
            // f6: "Value",
            // f7: "Value",
            actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
            blank: "",
            blank2: "",
            blank3: "",
          },
          {
            select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={showRecord} /></Grid>,
            f1: "Value",
            f2: "Value",
            f3: "Value",
            f4: "Value",
            f5: "Value",
            // f6: "Value",
            // f7: "Value",
            actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
            blank: "",
            blank2: "",
            blank3: "",
          },
          {
            select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={showRecord} /></Grid>,
            f1: "Value",
            f2: "Value",
            f3: "Value",
            f4: "Value",
            f5: "Value",
            // f6: "Value",
            // f7: "Value",
            actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
            blank: "",
            blank2: "",
            blank3: "",
          },
          {
            select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={showRecord} /></Grid>,
            f1: "Value",
            f2: "Value",
            f3: "Value",
            f4: "Value",
            f5: "Value",
            // f6: "Value",
            // f7: "Value",
            actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
            blank: "",
            blank2: "",
            blank3: "",
          },
        ];

        const objectTable3 = (
          <Table
            headers={objectHeaders3}
            rows={objectData3}
            listId="foo"
            columnWidth={140}
          />
        );

        const objectsView3 = (
          <Panel>
            <Page
              header={{
                title: "Object Type",
                subtitle: "Here are all of the objects of this type...",
                // description: "Just think about these things in your mind - then bring them into your world. Isn't that fantastic? You can just push a little tree out of your brush like that. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. I thought today we would make a happy little stream that's just running through the woods here. Just a little indication.",
              }}
            />
            <PageSection>
              <Grid columns="1" rows="auto 300px" gap="0">
                <Card shadow="0">
                  <CardSection padding="0">
                    <Bar
                      contentAlign="center"
                      left={{
                        content: (
                          <Grid columns="2">
                            <SelectMenu
                              options={[
                                { value: "all", label: "All Filters" },
                                { value: "a", label: "Filter A" },
                                { value: "b", label: "Filter B" },
                              ]}
                              selectOptions="all"
                              isClearable={false}
                            />
                            <TextInput type="search" placeholder="Search Objects" />
                          </Grid>
                        ),
                        width: "max-content",
                      }}
                      right={{
                        content: (
                          <Grid columns="max-content max-content max-content" gap="4xl">
                            <Command label="Action" onClick={doNothing} />
                            <Command label="Action" onClick={doNothing} />
                            <Menu
                              data={[
                                { id: "a", label: "Action" },
                                { id: "b", label: "Action" },
                                { id: "c", label: "Action" },
                              ]}
                              position="bottomLeft"
                            />
                          </Grid>
                        ),
                        width: "fit-content",
                      }}
                    />
                  </CardSection>
                </Card>
                {objectTable3}
              </Grid>
            </PageSection>
          </Panel>
        );

        const recordDetails = (
          <React.Fragment>
            <PageSection>
              <Bar
                padding="0"
                left={{
                  content: (
                    <React.Fragment>
                      <Title text="Object Details" size="xl" weight="bold" />
                      <Text text="Here is everything we have for you..." size="lg" weight="bold" />
                    </React.Fragment>
                  ),
                }}
                right={{
                  content: (
                    <Grid columns="max-content max-content max-content" gap="4xl">
                      <Command label="Action" onClick={doNothing} />
                      <Command label="Action" onClick={doNothing} />
                      <Menu
                        data={[
                          { id: "a", label: "Action" },
                          { id: "b", label: "Action" },
                          { id: "c", label: "Action" },
                        ]}
                        position="bottomLeft"
                      />
                    </Grid>
                  ),
                  width: "fit-content",
                }}
              />
            </PageSection>
            {/* <PageSection title="Here is some data for this object">
              <Grid columns="">
                <Legend
                  title="Object Data"
                  data={[
                    { label: "Field Name", value: "Value" },
                    { label: "Field Name", value: <Link text="Value" /> },
                    { label: "Field Name", value: <Link text="Value" /> },
                    { label: "Field Name", value: "Value" },
                    { label: "Field Name", value: "Value" },
                  ]}
                />
                <Legend
                  title="Object Data"
                  data={[
                    { label: "Field Name", value: "Value" },
                    { label: "Field Name", value: "Value" },
                    { label: "Field Name", value: "Value" },
                    { label: "Field Name", value: <Link text="Value" /> },
                    { label: "Field Name", value: "Value" },
                  ]}
                />
                <Legend
                  title="Object Data"
                  data={[
                    { label: "Field Name", value: <Link text="Value" /> },
                    { label: "Field Name", value: "Value" },
                    { label: "Field Name", value: "Value" },
                    { label: "Field Name", value: <Link text="Value" /> },
                    { label: "Field Name", value: "Value" },
                  ]}
                />
              </Grid>
            </PageSection> */}
          </React.Fragment>
        );

        const recordModules = (
          <React.Fragment>
            <PageSection>
              <Bar
                padding="0"
                left={{
                  content: (
                    <React.Fragment>
                      <Title text="Object Modules" size="xl" weight="bold" />
                      <Text text="Here is everything we have for you..." size="lg" weight="bold" />
                    </React.Fragment>
                  ),
                }}
                right={{
                  content: (
                    <Grid columns="max-content max-content max-content" gap="4xl">
                      <Command label="Action" onClick={doNothing} />
                      <Command label="Action" onClick={doNothing} />
                      <Menu
                        data={[
                          { id: "a", label: "Action" },
                          { id: "b", label: "Action" },
                          { id: "c", label: "Action" },
                        ]}
                        position="bottomLeft"
                      />
                    </Grid>
                  ),
                  width: "fit-content",
                }}
              />
            </PageSection>
            {/* <PageSection title="Some object content or workflows">
              <CardGrid columns="">
                <Card
                  title="Content Module"
                  description="Here we're describing this module for you..."
                  commands={[
                    {
                      id: "1",
                      label: "Action",
                    },
                    {
                      id: "2",
                      label: "Action",
                    },
                  ]}
                />
                <Card
                  title="Content Workflow"
                  description="Here we're describing this module for you..."
                  commands={[
                    {
                      id: "1",
                      label: "Action",
                    },
                  ]}
                />
              </CardGrid>
            </PageSection> */}
          </React.Fragment>
        );

        const recordRelated = (
          <React.Fragment>
            <PageSection>
              <Bar
                padding="0"
                left={{
                  content: (
                    <React.Fragment>
                      <Title text="Related Records" size="xl" weight="bold" />
                      <Text text="Here is everything we have for you..." size="lg" weight="bold" />
                    </React.Fragment>
                  ),
                }}
                right={{
                  content: (
                    <Grid columns="max-content max-content max-content" gap="4xl">
                      <Command label="Action" onClick={doNothing} />
                      <Command label="Action" onClick={doNothing} />
                      <Menu
                        data={[
                          { id: "a", label: "Action" },
                          { id: "b", label: "Action" },
                          { id: "c", label: "Action" },
                        ]}
                        position="bottomLeft"
                      />
                    </Grid>
                  ),
                  width: "fit-content",
                }}
              />
            </PageSection>
            {/* <PageSection title="Related records from other objects">
              <CardGrid columns="">
                <Card
                  title="Related Record"
                  description="Here we're describing this module for you..."
                  commands={[
                    {
                      id: "1",
                      label: "Action",
                    },
                  ]}
                />
                <Card
                  title="Related Record"
                  description="Here we're describing this module for you..."
                  commands={[
                    {
                      id: "1",
                      label: "Action",
                    },
                  ]}
                />
                <Card
                  title="Related Record"
                  description="Here we're describing this module for you..."
                  commands={[
                    {
                      id: "1",
                      label: "Action",
                    },
                  ]}
                />
              </CardGrid>
            </PageSection> */}
          </React.Fragment>
        );

        const [recordSection, setRecordSection] = useState(recordDetails);
        const showDetails = () => { setRecordSection(recordDetails); };
        const showModules = () => { setRecordSection(recordModules); };
        const showRelated = () => { setRecordSection(recordRelated); };

        const [activeSingleTab, setActiveSingleTab] = useState("tab1");
        const tabButtons = [
          {
            id: "Details",
            label: "Object Details",
            isSelected: activeSingleTab === "tab1",
            onClick: () => { setActiveSingleTab("tab1"); showDetails(); },
          },
          {
            id: "Modules",
            label: "Content Modules",
            isSelected: activeSingleTab === "tab2",
            onClick: () => { setActiveSingleTab("tab2"); showModules(); },
          },
          {
            id: "Records",
            label: "Related Records",
            isSelected: activeSingleTab === "tab3",
            onClick: () => { setActiveSingleTab("tab3"); showRelated(); },
          },
        ];

        const [mainView, setMainView] = useState(homeView);
        const showHome = () => { setMainView(homeView); };
        const showObjects1 = () => { setMainView(objectsView1); };
        const showObjects2 = () => { setMainView(objectsView2); };
        const showObjects3 = () => { setMainView(objectsView3); };
        // const showRecord = () => { setMainView(objectRecord); };
        // const hideRecord = () => { setMainView(objectsView); };

        const summaryHeader = (
          <Card isInverse>
            <Bar
              left={{
                content: (
                  <Title text="Object Summary" weight="bold" />
                ),
                align: "left",
              }}
              contentAlign="center"
              right={{
                content: (
                  <Icon icon="close" onClick={closeRight} />
                ),
                width: "min-content",
              }}
            />
          </Card>
        );

        const objectSummary = (
          <Panel
            id="Info Panel"
            // header={summaryHeader}
            padding="0"
          >
            <Page>
              <PageSection>
                <Bar
                  padding="0"
                  left={{
                    content: (
                      <React.Fragment>
                        <Title text="Object Summary" size="xl" weight="bold" />
                        <Text text="Here is everything we have for you..." size="lg" weight="bold" />
                      </React.Fragment>
                    ),
                  }}
                  right={{
                    content: (
                      <Grid columns="2" size="xl">
                        <Menu
                          data={[
                            { id: "a", label: "Action" },
                            { id: "b", label: "Action" },
                            { id: "c", label: "Action" },
                          ]}
                          position="bottomLeft"
                        />
                        <Icon
                          icon="close"
                          onClick={closeRight}
                        />
                      </Grid>
                    ),
                    width: "max-content",
                  }}
                />
              </PageSection>
              <PageSection>
                <CardGrid columns="1">
                  {/* <Button label="View Object Record" isSolid fullWidth onClick={doNothing} /> */}
                  <Button label="View Object Record" isSolid fullWidth onClick={showRecord} />
                  <Card>
                    <Legend
                      title="Object Data"
                      data={[
                        { label: "Field Name", value: "Value" },
                        { label: "Field Name", value: <Link text="Value" /> },
                        { label: "Field Name", value: <Link text="Value" /> },
                        { label: "Field Name", value: "Value" },
                        { label: "Field Name", value: "Value" },
                      ]}
                    />
                  </Card>
                  <Card
                    title="Content Module"
                    description="Here we're describing this module for you..."
                    commands={[
                      {
                        id: "1",
                        label: "Action",
                      },
                      {
                        id: "2",
                        label: "Action",
                      },
                    ]}
                  />
                  <Card
                    title="Related Record"
                    description="Here we're describing this module for you..."
                    commands={[
                      {
                        id: "1",
                        label: "Action",
                      },
                    ]}
                  />
                </CardGrid>
              </PageSection>
            </Page>
          </Panel>
        );

        return (
          <Layout
            header={{
              id: "Header",
              content: (
                <Bar
                  contentAlign="center"
                  padding="2x"
                  left={{
                    content: (
                      <Command
                        // icon="menu"
                        label="Menu"
                        onClick={toggleLeft}
                      />
                    ),
                    width: "15%",
                  }}
                  center={{
                    content: (
                      <ButtonGroup columns="5">
                        <Button label="Application A" />
                        <Button label="Application C" />
                        <Button label="Application D" />
                      </ButtonGroup>
                    ),
                    align: "left",
                  }}
                  right={{
                    content: (
                      <Grid columns="max-content max-content max-content" gap="4xl">
                        <Command label="Action" onClick={doNothing} />
                        <Command label="Action" onClick={doNothing} />
                        <Menu
                          data={[
                            { id: "a", label: "Action" },
                            { id: "b", label: "Action" },
                            { id: "c", label: "Action" },
                          ]}
                          position="bottomLeft"
                        />
                      </Grid>
                    ),
                    width: "fit-content",
                  }}
                />
              ),
            }}
            left={{
              id: "Left",
              content: (
                <Panel
                  id="Menu"
                >
                  <Grid columns="1" gap="lg">
                    <Bar
                      padding="0"
                      left={{
                        content: (
                          <Command
                            // icon="home"
                            label="Home"
                            onClick={() => {
                              showHome();
                              hideRecord();
                              closeRight();
                            }}
                          />
                        ),
                      }}
                      right={{
                        content: (
                          <Grid columns="2" size="xl">
                            <Menu
                              data={[
                                { id: "a", label: "Action" },
                                { id: "b", label: "Action" },
                                { id: "c", label: "Action" },
                              ]}
                              position="bottomLeft"
                            />
                            <Icon
                              icon="close"
                              onClick={toggleLeft}
                            />
                          </Grid>
                        ),
                        width: "max-content",
                      }}
                    />
                    <TextInput type="search" placeholder="Search Object Types" />
                    <List isInteractive>
                      <ListItem
                        title="Object Type"
                        onClick={() => {
                          showObjects1();
                          hideRecord();
                          closeRight();
                        }}
                      />
                      <ListItem
                        title="Object Type"
                        onClick={() => {
                          showObjects2();
                          hideRecord();
                          closeRight();
                        }}
                      />
                      <ListItem
                        title="Object Type"
                        onClick={() => {
                          showObjects3();
                          hideRecord();
                          closeRight();
                        }}
                      />
                    </List>
                  </Grid>
                </Panel>
              ),
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <React.Fragment>
                  {mainView}
                  <Panel
                    id="object record"
                    offcanvas={recordView}
                    header={
                      <Card shadow="0">
                        <CardSection padding="2x" variant="">
                          <Bar
                            left={{
                              content: (
                                <Title text="Object Record" size="xl" weight="bold" />
                              ),
                              align: "left",
                            }}
                            contentAlign="center"
                            right={{
                              content: (
                                <Grid columns="2" gap="4xl">
                                  <Menu
                                    data={[
                                      { id: "a", label: "Action" },
                                      { id: "b", label: "Action" },
                                      { id: "c", label: "Action" },
                                    ]}
                                    position="bottomLeft"
                                  />
                                  <Icon
                                    icon="close"
                                    onClick={hideRecord}
                                  />
                                </Grid>
                              ),
                              width: "max-content",
                            }}
                          />
                        </CardSection>
                        <CardSection padding="2x">
                          <Tabs data={tabButtons} />
                        </CardSection>
                      </Card>
                    }
                  >
                    <Page>
                      {recordSection}
                    </Page>
                  </Panel>
                </React.Fragment>
              ),
            }}
            right={{
              id: "Right",
              content: objectSummary,
              visible: rightOpen,
            }}
            // bottom={{ id: "Bottom", content: "" }}
            footer={{
              id: "Footer",
              content: (
                <Card>
                  <Bar
                    contentAlign="center"
                    padding="2x"
                    left={{
                      content: (
                        <Title text="Footer content goes here" />
                      ),
                    }}
                  />
                </Card>
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Base Navigation",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };
        const [menu2, setMenu2] = useState("right");
        const [menu3, setMenu3] = useState("right");
        const showMenu1 = () => {
          setMenu2("right");
          setMenu3("right");
        };
        const showMenu2 = () => {
          if (menu2 === "right") {
            setMenu2(null);
          } else if (menu3 === null) {
            setMenu3("right");
          } else {
            setMenu2("right");
          }
        };
        const showMenu3 = () => {
          if (menu3 === "right") {
            setMenu3(null);
          } else {
            setMenu3("right");
          }
        };
        const [showLabels, setLabelState] = useState(false);
        const toggleLabels = () => { setLabelState(!showLabels); };
        const [main, setMain] = useState(landingPanel);
        const showLanding = () => { setMain(landingPanel); };
        const showMain1 = () => { setMain(itemPanel1); };
        const showMain2 = () => { setMain(itemPanel2); };
        const showMain3 = () => { setMain(itemPanel3); };
        return (
          <Layout
            header={{
              id: "Header",
              content: (
                <Card>
                  <Bar
                    contentAlign="center"
                    padding="2x"
                    left={{
                      content: (
                        <Command
                          icon="left"
                          label="Menu"
                          onClick={toggleLeft}
                        />
                      ),
                    }}
                    center={{
                      content: (
                        <Title text={showLabels ? "Appraisal Product" : "Header"} />
                      ),
                    }}
                    right={{
                      content: <span />,
                      // content: (
                      //   <Checkbox id="labels" label="Labels" align="right" onChange={toggleLabels} />
                      // ),
                    }}
                  />
                </Card>
              ),
            }}
            left={{
              id: "Left",
              content: (
                <React.Fragment>
                  <Panel
                    id="Menu 1"
                    header={
                      <Card >
                        <CardSection variant="info" padding="0">
                          <Bar
                            contentAlign="center"
                            left={{
                              content: (
                                <Title text={showLabels ? "Appraisal" : "Lists"} weight="bold" />
                              ),
                            }}
                            right={{
                              content: (
                                <Menu
                                  data={[
                                    { id: "a", label: showLabels ? "Import" : "Action" },
                                    { id: "c", label: showLabels ? "Export" : "Action" },
                                    { id: "b", label: showLabels ? "Share" : "Action" },
                                  ]}
                                  position="bottomLeft"
                                />
                              ),
                              width: "min-content",
                            }}
                          />
                        </CardSection>
                      </Card>}
                  >
                    <Grid columns="1" gap="lg">
                      <Command label={showLabels ? "Appraisal Home" : "Application Home"} onClick={showLanding} />
                      <TextInput type="search" placeholder={showLabels ? "Search Appraisal" : "Search Lists"} />
                      <List isInteractive>
                        <ListItem
                          title={showLabels ? "Research" : "List 1"}
                          post={{ type: "icon", icon: "right" }}
                          onClick={showMenu2}
                        />
                        <ListItem
                          title={showLabels ? "Research" : "List 2"}
                          post={{ type: "icon", icon: "right" }}
                          onClick={showMenu2}
                        />
                        <ListItem
                          title={showLabels ? "Research" : "List 3"}
                          post={{ type: "icon", icon: "right" }}
                          onClick={showMenu2}
                        />
                      </List>
                    </Grid>
                  </Panel>
                  <Panel
                    id="Menu 2"
                    offcanvas={menu2}
                    header={
                      <Card>
                        <CardSection variant="info" padding="0">
                          <Bar
                            contentAlign="center"
                            left={{
                              content: (
                                <Title text={showLabels ? "Jobs" : "Items"} weight="bold" />
                              ),
                            }}
                            right={{
                              content: (
                                <Menu
                                  data={[
                                    { id: "a", label: showLabels ? "Preferences" : "Action" },
                                    { id: "c", label: showLabels ? "Export" : "Action" },
                                    { id: "b", label: showLabels ? "Share" : "Action" },
                                  ]}
                                  position="bottomLeft"
                                />
                              ),
                              width: "min-content",
                            }}
                          />
                        </CardSection>
                      </Card>}
                  >
                    <Grid columns="1" gap="lg">
                      <Command icon="left" label={showLabels ? "Appraisal Menu" : "Lists"} onClick={showMenu1} />
                      <TextInput type="search" placeholder={showLabels ? "Search Applications" : "Search Items"} />
                      <CardGrid columns="1">
                        <Command label="Item 1" onClick={showMain1} />
                        <Command label="Item 2" onClick={showMain2} />
                        <Command label="Item 3" onClick={showMain3} />
                      </CardGrid>
                    </Grid>
                  </Panel>
                  <Panel
                    id="Menu 3"
                    offcanvas={menu3}
                    header={
                      <Card >
                        <CardSection variant="warning" padding="0">
                          <Bar
                            contentAlign="center"
                            left={{
                              content: (
                                <Title text={showLabels ? "Content Menu" : "Module"} weight="bold" />
                              ),
                            }}
                            right={{
                              content: (
                                <Menu
                                  data={[
                                    { id: "a", label: showLabels ? "Print" : "Menu Action" },
                                    { id: "c", label: showLabels ? "Export" : "Menu Action" },
                                    { id: "b", label: showLabels ? "Share" : "Menu Action" },
                                  ]}
                                  position="bottomLeft"
                                />
                              ),
                              width: "min-content",
                            }}
                          />
                        </CardSection>
                      </Card>}
                  >
                    <Grid columns="1" gap="lg">
                      <Command icon="left" label={showLabels ? "Jobs" : "Application"} onClick={showMenu2} />
                      <TextInput type="search" placeholder={showLabels ? "Search Content" : "Search - Module"} />
                      <List title={showLabels ? "Appraisal Research" : "Group 1"} isInteractive>
                        <ListItem
                          title={showLabels ? "Assessment" : "Module - Content"}
                          onClick={doNothing}
                        />
                        <ListItem
                          title={showLabels ? "Zoning" : "Module - Content"}
                          onClick={doNothing}
                        />
                        <ListItem
                          title={showLabels ? "Demographics" : "Module - Content"}
                          onClick={doNothing}
                        />
                        <ListItem
                          title={showLabels ? "Maps" : "Module - Content"}
                          onClick={doNothing}
                        />
                        <ListItem
                          title={showLabels ? "Data Extraction" : "Module - Content"}
                          onClick={doNothing}
                        />
                      </List>
                    </Grid>
                  </Panel>
                </React.Fragment>
              ),
              visible: leftOpen,
            }}
            main={{ id: "Main", content: main }}
            footer={{
              id: "Footer",
              content: (
                <Card>
                  <Bar
                    contentAlign="center"
                    left={{
                      content: (
                        <Title text={showLabels ? "Footer for Appraisal stuff..." : "Footer"} />
                      ),
                    }}
                  />
                </Card>
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Jobs Portal",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(false);
        const seeLeftRegion = () => { setLeftOpen(!leftOpen); };
        const [rightOpen, setRightOpen] = useState(false);
        const seeRightRegion = () => { setRightOpen(!rightOpen); };
        const [bottomOpen, setBottomOpen] = useState(false);
        const seeBottomRegion = () => { setBottomOpen(!bottomOpen); };
        return (
          <Layout
            header={{
              id: "Header",
              content: (
                <Bar
                  contentAlign="center"
                  padding="2x"
                  left={{
                    content: (
                      <Avatar
                        icon={LightBoxIcon}
                        alt="logo"
                        onClick={seeLeftRegion}
                      />
                    ),
                    width: "10%",
                  }}
                  center={{
                    content: (
                      <Search placeholder="Search" />
                    ),
                    align: "right",

                  }}
                  right={{
                    content: (
                      <IconBlock>
                        <Icon
                          icon="list"
                          onClick={seeBottomRegion}
                        />
                        <Icon
                          icon="calendar"
                          onClick={seeRightRegion}
                        />
                        <Icon
                          icon="chat"
                          onClick={seeRightRegion}
                        />
                        <Avatar
                          label="LB"
                          onClick={seeRightRegion}
                        />
                      </IconBlock>
                    ),
                    width: "15%",
                  }}
                />
              ),
            }}
            left={{
              content: listPanel,
              visible: leftOpen,
            }}
            main={{ content: map }}
            right={{
              content: infoPanel,
              visible: rightOpen,
            }}
            bottom={{
              content: dataTable,
              visible: bottomOpen,
            }}
          />
        );
      });
    },
  )
  .add(
    "Application (Reference)",
    () => {
      return React.createElement(() => {
        // const [leftContent, setLeftContent] = useState(menuOne);
        // const contentOne = () => { setLeftContent(dataTable); };
        // const contentTwo = () => { setLeftContent(menuOne); };
        // const contentThree = () => { setLeftContent(dataTable); };
        const [showLabels, setLabelState] = useState(false);
        const toggleLabels = () => { setLabelState(!showLabels); };
        let labelOne;
        let labelTwo;
        let labelThree;
        if (showLabels === true) {
          labelOne = "Product";
          labelTwo = "Application";
          labelThree = "Content";
        } else {
          labelOne = "Product";
          labelTwo = "Application";
          labelThree = "Module";
        }
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };
        const [levelColor, setLevelColor] = useState("info");
        const [lastLevel, setLastLevel] = useState(null);
        const [currentLevel, setCurrentLevel] = useState("Product");
        const [nextLevel, setNextLevel] = useState("Application");
        const goNext = () => {
          if (currentLevel === "Product") {
            setLastLevel("Product");
            setCurrentLevel("Application");
            setNextLevel("Module");
            setLevelColor("success");
          } else if (currentLevel === "Application") {
            setLastLevel("Application");
            setCurrentLevel("Module");
            setNextLevel("Content");
            setLevelColor("warning");
          } else if (currentLevel === "Module") {
            // doSomething
          }
        };
        const goLast = () => {
          if (currentLevel === "Module") {
            setLastLevel("Product");
            setCurrentLevel("Application");
            setNextLevel("Module");
            setLevelColor("success");
          } else if (currentLevel === "Application") {
            setLastLevel(null);
            setCurrentLevel("Product");
            setNextLevel("Application");
            setLevelColor("info");
          } else if (currentLevel === "Product") {
            setNextLevel("Product");
          }
        };
        return (
          <Layout
            header={{
              id: "Header",
              content: (
                <Bar
                  contentAlign="center"
                  padding="2x"
                  left={{
                    content: (
                      <Command
                        icon="left"
                        label="Menu"
                        onClick={toggleLeft}
                      />
                    ),
                  }}
                  center={{
                    content: (
                      <Title text={showLabels ? "THE Appraisal Product" : `Header - ${labelOne}`} />
                    ),
                  }}
                  right={{
                    content: (
                      <Checkbox id="labels" label="Labels" align="right" onChange={toggleLabels} />
                    ),
                  }}
                />
              ),
            }}
            left={{
              id: "Left",
              content: (
                <Panel
                  id="Menu"
                  header={
                    <Card isInverse>
                      <Bar
                        left={{
                          content: (
                            <Title text={`Menu - ${currentLevel}`} weight="bold" />
                          ),
                          align: "left",
                        }}
                        contentAlign="center"
                        right={{
                          content: (
                            <Menu
                              data={[
                                { id: "a", label: `${currentLevel} Action` },
                                { id: "b", label: `${currentLevel} Action` },
                                { id: "c", label: `${currentLevel} Action` },
                              ]}
                              position="bottomLeft"
                            />
                          ),
                          width: "min-content",
                        }}
                      />
                    </Card>}
                >
                  <Grid columns="1" gap="lg">
                    {/* {menuIcons} */}
                    {lastLevel ? <Command icon="left" label={lastLevel} onClick={goLast} /> : null}
                    <TextInput type="search" placeholder={`Search - ${currentLevel}`} />
                    <List isInteractive>
                      <ListItem title={`Home - ${currentLevel}`} isInteractive />
                    </List>
                    <List title="Group 1" isInteractive>
                      <ListItem title={`${nextLevel}`} onClick={goNext} />
                      <ListItem title={`${nextLevel}`} onClick={goNext} />
                      <ListItem title={`${nextLevel}`} onClick={goNext} />
                    </List>
                    <List title="Group 2" isInteractive>
                      <ListItem title={`${nextLevel}`} onClick={goNext} />
                      <ListItem title={`${nextLevel}`} onClick={goNext} />
                    </List>
                    <List isInteractive>
                      <ListItem title={`${nextLevel}`} onClick={goNext} />
                      <ListItem title={`${nextLevel}`} onClick={goNext} />
                    </List>
                  </Grid>
                </Panel>
              ),
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Card>
                  <CardSection padding="0" variant={levelColor}>
                    <Bar
                      left={
                        <Title text={`${currentLevel} Home`} weight="bold" />
                      }
                      contentAlign="center"
                    />
                  </CardSection>
                </Card>
              ),
            }}
            // right={{ id: "Right", content: "" }}
            // bottom={{ id: "Bottom", content: "" }}
            footer={{
              id: "Footer",
              content: (
                <Card isInverse>
                  <Bar
                    contentAlign="center"
                    left={{
                      content: (
                        <Title text={showLabels ? "Footer for Appraisal stuff..." : `Footer - ${labelOne}`} />
                      ),
                    }}
                  />
                </Card>
              ),
            }}
          />
        );
      });
    },
  );
