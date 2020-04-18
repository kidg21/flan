/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Panel from "layout/Panel";
import Table from "blocks/Table";
import List, { ListItem } from "blocks/List";
import Icon from "atoms/Icon";
import Search from "blocks/Search";
import IconBlock from "blocks/IconBlock";
import Text, { Title } from "base/Typography";
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
import Card, { CardSection } from "elements/Card";
import Layout from "layout/Layout";
import Grid from "layout/Grid";
import Menu from "blocks/Menu";
import Page, { PageSection } from "layout/Page";
import Tabs from "blocks/Tabs";

const LightBoxIcon = "static/media/LightBoxIconLogo.64993202.png";

const map = (
  <Mapbox />
);

function doNothing() {
  // do nothing
}

const altHeader = (
  <Card>
    <CardSection padding="0" variant="">
      <Bar
        contentAlign="center"
        // padding="2x"
        left={{
          content: (
            <Command
              icon="left"
              label="Menu"
            // onClick={toggleLeft}
            />
          ),
          width: "8rem",
        }}
        right={{
          content: (
            <Avatar icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE" onClick={doNothing} />
          ),
          width: "8rem",
        }}
      />
    </CardSection>
    <CardSection padding="0" variant="info">
      <Bar
        left={<Title text="Product Home" weight="bold" />}
        contentAlign="center"
      />
    </CardSection>
  </Card>
);

const mainHeaderOne = (
  <Card>
    <CardSection padding="0" variant="info">
      <Bar
        left={<Title text="Product Home" weight="bold" />}
        contentAlign="center"
      />
    </CardSection>
  </Card>
);

const mainHeaderTwo = (
  <Card>
    <CardSection padding="0" variant="success">
      <Bar
        left={<Title text="Application Home" weight="bold" />}
        contentAlign="center"
      />
    </CardSection>
  </Card>
);

const mainHeaderThree = (
  <Card>
    <CardSection padding="0" variant="warning">
      <Bar
        left={<Title text="Module Home" weight="bold" />}
        contentAlign="center"
      />
    </CardSection>
  </Card>
);

const menuIcons = (
  <Bar
    contentAlign="center"
    padding="0"
    left={{
      content: (
        <Grid columns="3">
          <Icon icon="file" onClick={doNothing} />
          <Icon icon="settings" onClick={doNothing} />
          <Icon icon="share" onClick={doNothing} />
        </Grid>
      ),
      width: "50%",
    }}
  />
);

const menuOptionsOne = [
  { id: "a", label: "Product Action" },
  { id: "b", label: "Product Action" },
  { id: "c", label: "Product Action" },
];

const menuHeaderOne = (
  <Card isInverse>
    <Bar
      left={{
        content: (
          <span />
          /* <Icon icon="home" onClick={doNothing} /> */
        ),
      }}
      center={{
        content: (
          <Title text="Level 1" weight="bold" />
        ),
        // align: "left",
      }}
      contentAlign="center"
      right={{
        content: (
          <Icon icon="close" onClick={doNothing} />
        ),
      }}
    // right={menuOptionsOne ? <Menu data={menuOptionsOne} position="bottomLeft" /> : null}
    />
  </Card>
);

const menuNavOne = (
  <Grid columns="1" gap="lg">
    {/* {menuIcons} */}
    <TextInput type="search" placeholder="Product Search" />
    <List isInteractive>
      <ListItem title="Product Home" isSelected />
    </List>
    <List title="Application Group 1" isInteractive>
      <ListItem title="Application 1" />
      <ListItem title="Application 2" />
      <ListItem title="Application 3" />
    </List>
    <List title="Application Group 2" isInteractive>
      <ListItem title="Application 4" />
      <ListItem title="Application 5" />
    </List>
    <List isInteractive>
      <ListItem title="Application 6" />
      <ListItem title="Application 7" />
    </List>
  </Grid>
);

const menuOne = (
  <Panel
    id="Menu"
    header={menuHeaderOne}
  >
    {menuNavOne}
  </Panel>
);

const menuOptionsTwo = [
  { id: "a", label: "App Action" },
  { id: "b", label: "App Action" },
  { id: "c", label: "App Action" },
];

const menuHeaderTwo = (
  <Card>
    <CardSection padding="0" variant="info">
      <Bar
        contentAlign="center"
        left={{
          content: (
            <Icon icon="home" onClick={doNothing} />
          ),
        }}
        center={{
          content: (
            <Title text="Apps" weight="bold" />
          ),
          // align: "left",
        }}
        right={{
          content: (
            <Icon icon="close" onClick={doNothing} />
          ),
        }}
      // right={menuOptionsTwo ? <Menu data={menuOptionsTwo} position="bottomLeft" /> : null}
      />
    </CardSection>
  </Card>
);

const menuNavTwo = (
  <Grid columns="1" gap="lg">
    <Command icon="left" label="Product Menu" />
    {/* {menuIcons} */}
    <TextInput type="search" placeholder="App Search" />
    <List isInteractive>
      <ListItem title="App Home" isSelected />
    </List>
    <List title="Module Group 1" isInteractive>
      <ListItem title="Module 1" />
      <ListItem title="Module 2" />
    </List>
    <List isInteractive>
      <ListItem title="Module 3" />
      <ListItem title="Module 4" />
    </List>
  </Grid>
);

const menuTwo = (
  <Panel
    id="Menu"
    header={menuHeaderTwo}
  >
    {menuNavTwo}
  </Panel>
);

const menuOptionsThree = [
  { id: "a", label: "Module Action" },
  { id: "b", label: "Module Action" },
  { id: "c", label: "Module Action" },
];

const menuHeaderThree = (
  <Card>
    <CardSection padding="0" variant="success">
      <Bar
        contentAlign="center"
        left={{
          content: (
            <Icon icon="home" onClick={doNothing} />
          ),
        }}
        center={{
          content: (
            <Title text="Modules" weight="bold" />
          ),
          align: "left",
        }}
        right={{
          content: (
            <Icon icon="close" onClick={doNothing} />
          ),
        }}
      // right={menuOptionsThree ? <Menu data={menuOptionsThree} position="bottomLeft" /> : null}
      />
    </CardSection>
  </Card>
);

const menuNavThree = (
  <Grid columns="1" gap="lg">
    <Command icon="left" label="Apps Menu" />
    {/* {menuIcons} */}
    <TextInput type="search" placeholder="Module Search" />
    <List isInteractive>
      <ListItem title="Module Home" isSelected />
    </List>
    <List title="Workflow Group 1" isInteractive>
      <ListItem title="Workflow 1" />
      <ListItem title="Workflow 2" />
    </List>
    <List isInteractive>
      <ListItem title="Workflow 3" />
      <ListItem title="Workflow 4" />
    </List>
  </Grid>
);

const menuThree = (
  <Panel
    id="Menu"
    header={menuHeaderThree}
  >
    {menuNavThree}
  </Panel>
);

const infoCard = (
  <Card
    media="https://cdn.facilityexecutive.com/wp-content/uploads/2019/09/38391858_ml-800x418-1-574x300.jpg" // Image
    mediaDesc="Media Description"
    title="Best Place Ever"
    description="I Could Tell You More, But..."
    icon="bookmark_solid"
    shadow="0"
  />
);

const infoPanel = (
  <Panel
    id="Info Panel"
    header={infoCard}
  >
    <Page
      header={{
        title: "My Latest Musings",
        subtitle: "Totally Worth The Read...Enjoy!",
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
      <PageSection title="Section 1">
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
  </Panel>
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
  <Table
    headers={tableHeaders.slice(1)}
    rows={tableData}
    listId="foo"
    columnWidth={180}
  />
);

storiesOf("Templates/Applications", module)
  .add(
    "Lightbox (Standard)",
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
          labelThree = "Module";
        } else {
          labelOne = "Level 1";
          labelTwo = "Level 2";
          labelThree = "Level 3";
        }
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };
        const [levelColor, setLevelColor] = useState("info");
        const [lastLevel, setLastLevel] = useState(null);
        const [currentLevel, setCurrentLevel] = useState("Level 1");
        const [nextLevel, setNextLevel] = useState("Level 2");
        const goNext = () => {
          if (currentLevel === "Level 1") {
            setLastLevel("Level 1");
            setCurrentLevel("Level 2");
            setNextLevel("Level 3");
            setLevelColor("success");
          } else if (currentLevel === "Level 2") {
            setLastLevel("Level 2");
            setCurrentLevel("Level 3");
            setNextLevel("Content");
            setLevelColor("warning");
          } else if (currentLevel === "Level 3") {
            // doSomething
          }
        };
        const goLast = () => {
          if (currentLevel === "Level 3") {
            setLastLevel("Level 1");
            setCurrentLevel("Level 2");
            setNextLevel("Level 3");
            setLevelColor("success");
          } else if (currentLevel === "Level 2") {
            setLastLevel(null);
            setCurrentLevel("Level 1");
            setNextLevel("Level 2");
            setLevelColor("info");
          } else if (currentLevel === "Level 1") {
            setNextLevel("Level 1");
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
  )
  .add(
    "LandVision",
    () => {
      return (
        <Layout
          header={{ id: "Header", content: "" }}
          left={{ id: "Left", content: "" }}
          main={{ id: "Main", content: "" }}
          // right={{ id: "Right", content: "" }}
          // bottom={{ id: "Bottom", content: "" }}
          footer={{ id: "Footer", content: "" }}
        />
      );
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
                        image
                        src={LightBoxIcon}
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
                          onClick={seeRightRegion}
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
              content: menuOne,
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
