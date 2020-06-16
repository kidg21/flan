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
import Text, { Title } from "base/Typography";
import Avatar from "atoms/Avatar";
import Command from "atoms/Command";
import Checkbox from "atoms/Checkbox";
import TextInput from "atoms/TextInput";
import Button, { ButtonGroup } from "atoms/Button";
import Bar from "layout/Bar";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Card, { CardSection } from "elements/Card";
import Layout from "layout/Layout";
import Grid from "layout/Grid";
import Menu from "blocks/Menu";
import Page, { PageSection } from "layout/Page";
import SelectMenu from "atoms/SelectMenu";
import Image from "atoms/Image";
import LightBoxLogo from "images/LightBoxLogo.png";
import LightBoxIcon from "images/LightBoxIconLogo.png";
import { MockHeader, MockFooter, MockMap, MockWorkflow, MockTable, MockCardGrid, MockDetails, MockMenu } from "helpers/Mocks";

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
  .add("Placeholder (Space For Rent)", () => { });

storiesOf("Templates/02_Applications", module)
  .addDecorator(FullScreen)
  .add(
    "Application (Template)",
    () => {
      return React.createElement(() => {
        const [showLabels, setLabelState] = useState(false);
        const toggleLabels = () => { setLabelState(!showLabels); };

        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        const [recordView, setRecordView] = useState("bottom");
        const showRecord = () => { setRecordView(null); };
        const hideRecord = () => { setRecordView("bottom"); };

        const homeView = (
          <Page
            id="Page Regions"
            template="E_02"
            // stateCards
            A={{
              id: "A",
              content: <MockWorkflow />,
            }}
            B={{
              id: "B",
              content: <MockHeader />,
            }}
            C={{
              id: "C",
              content: <MockDetails />,
            }}
            D={{
              id: "D",
              content: <MockMap withTools />,
            }}
            E={{
              id: "E",
              content: <MockFooter />,
            }}
          />
        );

        const objectHeaders1 = [
          { id: "select", label: <Grid columns="auto 1fr"><Checkbox />Objects</Grid> },
          { id: "f1", label: "Field Name", sortable: true },
          { id: "f2", label: "Field Name", sortable: false },
          { id: "f3", label: "Field Name", sortable: false },
          { id: "f4", label: "Field Name", sortable: true },
          { id: "f5", label: "Field Name", sortable: true },
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
                title: "Object Type A",
                subtitle: "Here are all of the objects of this type...",
              }}
            >
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
                            <TextInput id="Search Objects" type="search" placeholder="Search Objects" />
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
            </Page>
          </Panel>
        );

        const objectHeaders2 = [
          { id: "select", label: <Grid columns="auto 1fr"><Checkbox />Objects</Grid> },
          { id: "f1", label: "Field Name", sortable: true },
          { id: "f2", label: "Field Name", sortable: false },
          { id: "f3", label: "Field Name", sortable: false },
          { id: "f4", label: "Field Name", sortable: true },
          { id: "f5", label: "Field Name", sortable: true },
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
                title: "Object Type B",
                subtitle: "Here are all of the objects of this type...",
              }}
            >
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
                            <TextInput id="Search Objects" type="search" placeholder="Search Objects" />
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
            </Page>
          </Panel>
        );

        const objectHeaders3 = [
          { id: "select", label: <Grid columns="auto 1fr"><Checkbox />Objects</Grid> },
          { id: "f1", label: "Field Name", sortable: true },
          { id: "f2", label: "Field Name", sortable: false },
          { id: "f3", label: "Field Name", sortable: false },
          { id: "f4", label: "Field Name", sortable: true },
          { id: "f5", label: "Field Name", sortable: true },
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
                title: "Object Type C",
                subtitle: "Here are all of the objects of this type...",
              }}
            >
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
                            <TextInput id="Search Objects" type="search" placeholder="Search Objects" />
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
            </Page>
          </Panel>
        );

        const recordDetails = (
          <Bar
            left={{
              content: (
                <React.Fragment>
                  <Title text="Module A" size="xl" weight="bold" />
                  <Text text="Here is everything we have for you..." size="lg" weight="bold" />
                </React.Fragment>
              ),
            }}
          />
        );

        const recordModules = (
          <Bar
            left={{
              content: (
                <React.Fragment>
                  <Title text="Module B" size="xl" weight="bold" />
                  <Text text="Here is everything we have for you..." size="lg" weight="bold" />
                </React.Fragment>
              ),
            }}
          />
        );

        const recordRelated = (
          <Bar
            left={{
              content: (
                <React.Fragment>
                  <Title text="Module C" size="xl" weight="bold" />
                  <Text text="Here is everything we have for you..." size="lg" weight="bold" />
                </React.Fragment>
              ),
            }}
          />
        );

        const [recordSection, setRecordSection] = useState(recordDetails);
        const showDetails = () => { setRecordSection(recordDetails); };
        const showModules = () => { setRecordSection(recordModules); };
        const showRelated = () => { setRecordSection(recordRelated); };

        const [mainView, setMainView] = useState(homeView);
        const showHome = () => { setMainView(homeView); };
        const showObjects1 = () => { setMainView(objectsView1); };
        const showObjects2 = () => { setMainView(objectsView2); };
        const showObjects3 = () => { setMainView(objectsView3); };

        return (
          <Layout
            header={{
              id: "Header",
              content: (
                <Bar
                  contentAlign="center"
                  padding="2x"
                  hasDivider
                  left={{
                    content: (
                      <Grid columns="max-content 1fr" gap="2xl" align="center">
                        <Icon
                          icon="menu"
                          size="lg"
                          onClick={toggleLeft}
                        />
                        <Image src={LightBoxLogo} alt="Lightbox Logo" width="80%" />
                      </Grid>
                    ),
                    width: "15%",
                  }}
                  center={{
                    content: (
                      <ButtonGroup columns="5">
                        <Button label={showLabels ? "Jobs" : "Application A"} />
                        <Button label={showLabels ? "Reports" : "Application C"} />
                        <Button label={showLabels ? "Insights" : "Application D"} />
                      </ButtonGroup>
                    ),
                    align: "left",
                  }}
                  right={{
                    content: (
                      <Grid columns="max-content max-content max-content max-content" gap="4xl" align="center">
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
                        <Avatar label="GP" onClick={toggleLabels} />
                      </Grid>
                    ),
                    width: "fit-content",
                  }}
                />
              ),
            }}
            left={{
              id: "Left",
              content: <MockMenu />,
              // content: (
              //   <Panel
              //     id="Menu"
              //     header={
              //       <Bar
              //         padding="2x"
              //         contentAlign="center"
              //         left={{
              //           content: (
              //             <Menu
              //               data={[
              //                 { id: "a", label: "Action" },
              //                 { id: "b", label: "Action" },
              //                 { id: "c", label: "Action" },
              //               ]}
              //               position="bottomRight"
              //             />
              //           ),
              //           width: "max-content",
              //         }}
              //         center={{
              //           content: <Title text="Application B" weight="bold" />,
              //           align: "left",
              //         }}
              //         right={{
              //           content: (
              //             <Icon
              //               icon="close"
              //               onClick={toggleLeft}
              //             />
              //           ),
              //           width: "max-content",
              //         }}
              //       />
              //     }
              //   >
              //     <Grid columns="1" gap="lg">
              //       <TextInput id="Search Object Types" type="search" placeholder="Search Object Types" />
              //       <List isInteractive>
              //         <ListItem
              //           title="Home Page"
              //           onClick={() => {
              //             showHome();
              //             hideRecord();
              //           }}
              //         />
              //       </List>
              //       <List title="Object Types" isInteractive>
              //         <ListItem
              //           title="Object Type A"
              //           onClick={() => {
              //             showObjects1();
              //             hideRecord();
              //           }}
              //         />
              //         <ListItem
              //           title="Object Type B"
              //           onClick={() => {
              //             showObjects2();
              //             hideRecord();
              //           }}
              //         />
              //         <ListItem
              //           title="Object Type C"
              //           onClick={() => {
              //             showObjects3();
              //             hideRecord();
              //           }}
              //         />
              //       </List>
              //     </Grid>
              //   </Panel>
              // ),
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <React.Fragment>
                  {mainView}
                  <Panel
                    id="object record"
                    padding="0"
                    offcanvas={recordView}
                    header={
                      <Bar
                        padding="2x"
                        hasDivider
                        left={{
                          content: (
                            <Title text="Object Details" size="xl" weight="bold" />
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
                    }
                  >
                    <Page columns="15rem 1fr" gap="2xl">
                      <PageSection>
                        <Grid columns="1" gap="lg">
                          <List title="1: Confirm" isInteractive>
                            <ListItem
                              title="Verify Site"
                              onClick={() => {
                                showDetails();
                              }}
                            // isSelected
                            />
                          </List>
                          <List title="2: Review" isInteractive>
                            <ListItem
                              title="Assessment"
                              onClick={() => {
                                showModules();
                              }}
                            // isSelected
                            />
                            <ListItem
                              title="Zoning"
                              onClick={() => {
                                showRelated();
                              }}
                            // isSelected
                            />
                            <ListItem
                              title="Demographics"
                              onClick={() => {
                                showModules();
                              }}
                            // isSelected
                            />
                            <ListItem
                              title="Maps"
                              onClick={() => {
                                showModules();
                              }}
                            // isSelected
                            />
                          </List>
                          <List title="3: Export" isInteractive>
                            <ListItem
                              title="View Report(s)"
                              onClick={() => {
                                showDetails();
                              }}
                            // isSelected
                            />
                          </List>
                        </Grid>
                      </PageSection>
                      {recordSection}
                    </Page>
                  </Panel>
                </React.Fragment>
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
  );

storiesOf("Templates/03_Lists", module)
  .add("Placeholder (Space For Rent)", () => { });

storiesOf("Templates/04_Details", module)
  .addDecorator(FullScreen)
  .add("Scroll", () => {
    return (
      <Grid columns="2">
        <Page columns="15rem 1fr" gap="2xl">
          <Panel>
            <Grid columns="1" gap="lg">
              <List title="1: Confirm" isInteractive>
                <ListItem
                  title="Verify Site"
                />
              </List>
              <List title="2: Review" isInteractive>
                <ListItem
                  title="Section 1"
                />
                <ListItem
                  title="Section 2"
                />
                <ListItem
                  title="Section 3"
                />
              </List>
              <List title="3: Export" isInteractive>
                <ListItem
                  title="View Reports"
                />
              </List>
            </Grid>
          </Panel>
          <Bar
            left={{
              content: (
                <React.Fragment>
                  <Title text="Module A" size="xl" weight="bold" />
                  <Text text="Here is everything we have for you..." size="lg" weight="bold" />
                </React.Fragment>
              ),
            }}
          />
        </Page>
        <Page
          header={{
            title: "Object Type C",
            subtitle: "Here are all of the objects of this type...",
          }}
        >
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
                        <TextInput id="Search Objects" type="search" placeholder="Search Objects" />
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
            <Table
              headers={[
                { id: "select", label: <Grid columns="auto 1fr"><Checkbox />Objects</Grid> },
                { id: "f1", label: "Field Name", sortable: true },
                { id: "f2", label: "Field Name", sortable: false },
                { id: "f3", label: "Field Name", sortable: false },
                { id: "f4", label: "Field Name", sortable: true },
                { id: "f5", label: "Field Name", sortable: true },
                { id: "actions", label: "Actions" },
                { id: "blank", label: "", sortable: false },
                { id: "blank2", label: "", sortable: false },
                { id: "blank3", label: "", sortable: false },
              ]}
              rows={[
                {
                  select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={doNothing} /></Grid>,
                  f1: "Value",
                  f2: "Value",
                  f3: "Value",
                  f4: "Value",
                  f5: "Value",
                  actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
                  blank: "",
                  blank2: "",
                  blank3: "",
                },
                {
                  select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={doNothing} /></Grid>,
                  f1: "Value",
                  f2: "Value",
                  f3: "Value",
                  f4: "Value",
                  f5: "Value",
                  actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
                  blank: "",
                  blank2: "",
                  blank3: "",
                },
                {
                  select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={doNothing} /></Grid>,
                  f1: "Value",
                  f2: "Value",
                  f3: "Value",
                  f4: "Value",
                  f5: "Value",
                  actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
                  blank: "",
                  blank2: "",
                  blank3: "",
                },
                {
                  select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={doNothing} /></Grid>,
                  f1: "Value",
                  f2: "Value",
                  f3: "Value",
                  f4: "Value",
                  f5: "Value",
                  actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
                  blank: "",
                  blank2: "",
                  blank3: "",
                },
                {
                  select: <Grid columns="auto 1fr" align="center"><Checkbox /><Button label="Object ID" isPlain onClick={doNothing} /></Grid>,
                  f1: "Value",
                  f2: "Value",
                  f3: "Value",
                  f4: "Value",
                  f5: "Value",
                  actions: <Grid columns="4"><Icon icon="edit" onClick={doNothing} /><Icon icon="delete" onClick={doNothing} /></Grid>,
                  blank: "",
                  blank2: "",
                  blank3: "",
                },
              ]}
              listId="foo"
              columnWidth={140}
            />
          </Grid>
        </Page>
      </Grid>
    );
  })
  .add("Object Details", () => {
    return (
      <Layout
        header={{ id: "Header", content: "" }}
        left={{ id: "Left", content: "" }}
        main={{
          id: "Main",
          content: (
            <Page columns="15rem 1fr" gap="2xl">
              <Card
                padding="4x"
              >
                <CardSection>
                  <List title="1: Confirm" isInteractive>
                    <ListItem
                      title="Verify Site"
                    // onClick={() => {
                    //   showDetails();
                    // }}
                    />
                  </List>
                </CardSection>
                <CardSection>
                  <List title="2: Review" isInteractive>
                    <ListItem
                      title="Section 1"
                    // onClick={() => {
                    //   showModules();
                    // }}
                    />
                    <ListItem
                      title="Section 2"
                    // onClick={() => {
                    //   showRelated();
                    // }}
                    />
                    <ListItem
                      title="Section 3"
                    // onClick={() => {
                    //   showModules();
                    // }}
                    />
                  </List>
                </CardSection>
                <CardSection>
                  <List title="3: Export" isInteractive>
                    <ListItem
                      title="View Reports"
                    // onClick={() => {
                    //   showDetails();
                    // }}
                    />
                  </List>
                </CardSection>
              </Card>
              <Bar
                left={{
                  content: (
                    <React.Fragment>
                      <Title text="Module A" size="xl" weight="bold" />
                      <Text text="Here is everything we have for you..." size="lg" weight="bold" />
                    </React.Fragment>
                  ),
                }}
              />
            </Page>
          ),
        }}
      />
    );
  });

storiesOf("Templates/06_Cards", module)
  .add("Placeholder (Space For Rent)", () => { });

