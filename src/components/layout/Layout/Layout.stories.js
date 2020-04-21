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
import Bar from "layout/Bar";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Card from "elements/Card";
import Layout from "layout/Layout";
import Page, { PageSection } from "layout/Page";
import LightBoxIcon from "images/LightBoxIconLogo.png";
// const LightBoxIcon = "static/media/LightBoxIconLogo.64993202.png";

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
    <MainPanelHeader title="Menu Header" menuData={menuData} />
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

storiesOf("Layout|Layout/", module)
  .add(
    "Main Section Only",
    () => {
      return (
        <Layout
          main={{ id: "Main", content: "" }}
        />
      );
    },
  )
  .add(
    "With Left/Right Sections",
    () => {
      return (
        <Layout
          left={{ id: "Left", content: "" }}
          main={{ id: "Main", content: "" }}
          right={{ id: "Right", content: "" }}
        />
      );
    },
  )
  .add(
    "Adding A Botton Section",
    () => {
      return (
        <Layout
          left={{ id: "Left", content: "" }}
          main={{ id: "Main", content: "" }}
          right={{ id: "Right", content: "" }}
          bottom={{ id: "Bottom", content: "" }}
        />
      );
    },
  )
  .add(
    "With Fixed Header/Footer",
    () => {
      return (
        <Layout
          header={{ id: "Header", content: "" }}
          left={{ id: "Left", content: "" }}
          main={{ id: "Main", content: "" }}
          right={{ id: "Right", content: "" }}
          bottom={{ id: "Bottom", content: "" }}
          footer={{ id: "Footer", content: "" }}
        />
      );
    },
  )
  .add(
    "Full / Interactive (configured)",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(false);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };
        const [rightOpen, setRightOpen] = useState(false);
        const toggleRight = () => { setRightOpen(!rightOpen); };
        const [bottomOpen, setBottomOpen] = useState(false);
        const toggleBottom = () => { setBottomOpen(!bottomOpen); };
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
                        label="Toggle"
                        onClick={toggleLeft}
                      />
                    ),
                  }}
                  center={{
                    content: (
                      <Title text="Header" />
                    ),
                  }}
                  right={{
                    content: (
                      <Command
                        icon="right"
                        label="Toggle"
                        align="right"
                        onClick={toggleRight}
                      />
                    ),
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
            footer={{
              id: "Footer",
              content: (
                <Bar
                  contentAlign="center"
                  padding="2x"
                  left={{
                    content: (
                      <Title text="Footer" />
                    ),
                  }}
                  center={{
                    content: (
                      <Command
                        icon="down"
                        label="Toggle"
                        align="Bottom"
                        onClick={toggleBottom}
                      />
                    ),
                  }}
                  /** Don't do this 'div workaround'.
                  * TODO: We will address alignment issues in Bar
                  */
                  right={{
                    content: <div />,
                  }}
                />
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Single Region Active (small screens)",
    () => {
      return React.createElement(() => {
        const [visibility, setVisibility] = useState({
          left: false,
          right: false,
          bottom: false,
        });
        const toggleLeft = () => {
          setVisibility({ left: !visibility.left, right: false, bottom: false });
        };
        const toggleRight = () => {
          setVisibility({ left: false, right: !visibility.right, bottom: false });
        };
        const toggleBottom = () => {
          setVisibility({ left: false, right: false, bottom: !visibility.bottom });
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
                        label="Toggle"
                        onClick={toggleLeft}
                      />
                    ),
                  }}
                  center={{
                    content: (
                      <Title text="Header" />
                    ),
                  }}
                  right={{
                    content: (
                      <Command
                        icon="right"
                        label="Toggle"
                        align="right"
                        onClick={toggleRight}
                      />
                    ),
                  }}
                />
              ),
            }}
            left={{
              content: listPanel,
              visible: visibility.left,
            }}
            main={{ content: map }}
            right={{
              content: infoPanel,
              visible: visibility.right,
            }}
            bottom={{
              content: dataTable,
              visible: visibility.bottom,
            }}
            footer={{
              id: "Footer",
              content: (
                <Bar
                  contentAlign="center"
                  padding="2x"
                  left={{
                    content: (
                      <Title text="Footer" />
                    ),
                  }}
                  center={{
                    content: (
                      <Command
                        icon="down"
                        label="Toggle"
                        align="Bottom"
                        onClick={toggleBottom}
                      />
                    ),
                  }}
                  /** Don't do this 'div workaround'.
                  * TODO: We will address alignment issues in Bar
                  */
                  right={{
                    content: <div />,
                  }}
                />
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Multiple Icons (configured)",
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
