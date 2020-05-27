/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { FullScreen } from "helpers/Display";
import Page, { PageSection } from "layout/Page";
import Panel from "layout/Panel";
import Bar from "layout/Bar";
import Text, { Title } from "base/Typography";
import List, { ListItem } from "blocks/List";
import Card, { CardGrid } from "elements/Card";

const map = (
  <Mapbox
    map=""
  // center={[-72.006, 42.7128]}
  // options={{ zoom: 0 }}
  // zoom="0"
  />
);

const list = (
  <React.Fragment>
    <List title="1: Confirm" isInteractive>
      <ListItem
        title="Verify Site"
      />
    </List>
    <List title="2: Review" isInteractive>
      <ListItem
        title="Assessment"
      />
      <ListItem
        title="Zoning"
      />
      <ListItem
        title="Demographics"
      />
      <ListItem
        title="Maps"
      />
    </List>
    <List title="3: Export" isInteractive>
      <ListItem
        title="View Report(s)"
      />
    </List>
  </React.Fragment>
);

// Knob Values
const knobGroups = ["Page"];
const templates = {
  "Default": "",
  "01": "01",
  "02": "02",
};
const content = {
  None: "",
  Map: map,
  List: list,
};

// const options = [
//   "",
//   map,
//   list,
// ];

// const options = [
//   { 0: "" },
//   { 1: map },
// ];

export default {
  title: "Layout|Page/Tests",
  component: Page,
  parameters: {
    docs: { page: null },
  },
  includeStories: ["Knobs"],
  decorators: [FullScreen, withKnobs],
};

const buttonIcons = [{ content: "" }, { content: map }];

export const Knobs = () => {
  const templateID = options("Template ID", templates, "", { display: "radio" }, knobGroups[0]);

  // const contentA = select("A", options, "", knobGroups[0]);
  const icon = select("icon", buttonIcons, null, knobGroups[0]);


  const cardDisplay = boolean("Display Cards", false, knobGroups[0]);
  return (
    <Page
      id="Knobs"
      template={templateID}
      displayCards={cardDisplay}
      A={{
        id: "Left",
        content: icon,
        // content: [icon],
      }}
      B={{ id: "Main", content: map }}
      C={{
        id: "Right",
        content: (
          <React.Fragment>
            <List title="1: Confirm" isInteractive>
              <ListItem
                title="Verify Site"
              />
            </List>
            <List title="2: Review" isInteractive>
              <ListItem
                title="Assessment"
              />
              <ListItem
                title="Zoning"
              />
              <ListItem
                title="Demographics"
              />
              <ListItem
                title="Maps"
              />
            </List>
            <List title="3: Export" isInteractive>
              <ListItem
                title="View Report(s)"
              />
            </List>
          </React.Fragment>
        ),
      }}
      D={{ id: "D", content: map }}
    />
  );
};
Knobs.story = {
  parameters: {
    parameters: {
      viewMode: "story",
    },
  },
};

storiesOf("Layout|Page", module)
  .addDecorator(checkA11y)
  .addDecorator(FullScreen)
  .add("Page Regions", () => {
    return (
      <Page
        id="Page Regions"
        template="01"
        displayCards={false}
        A={{
          id: "A",
          content: map,
          // content: (
          //   <React.Fragment>
          //     <List title="1: Confirm" isInteractive>
          //       <ListItem
          //         title="Verify Site"
          //       />
          //     </List>
          //     <List title="2: Review" isInteractive>
          //       <ListItem
          //         title="Assessment"
          //       />
          //       <ListItem
          //         title="Zoning"
          //       />
          //       <ListItem
          //         title="Demographics"
          //       />
          //       <ListItem
          //         title="Maps"
          //       />
          //     </List>
          //     <List title="3: Export" isInteractive>
          //       <ListItem
          //         title="View Report(s)"
          //       />
          //     </List>
          //   </React.Fragment>
          // ),
        }}
        B={{
          id: "B",
          content: map,
          // content: (
          //   <Panel
          //     id="Panel"
          //     // offcanvas="left"
          //     D={
          //       <Bar
          //         contentAlign="center"
          //         padding="2x"
          //         center={{
          //           content: <Title text="D" />,
          //           align: "center",
          //         }}
          //       />}
          //     footer={
          //       <Bar
          //         contentAlign="center"
          //         padding="2x"
          //         center={{
          //           content: <Title text="Footer" />,
          //           align: "center",
          //         }}
          //       />}
          //   >
          //     <CardGrid>
          //       <Card />
          //       <Card />
          //       <Card />
          //       <Card />
          //       <Card />
          //       <Card />
          //       <Card />
          //       <Card />
          //       <Card />
          //       <Card />
          //       <Card />
          //       <Card />
          //       <Card />
          //       <Card />
          //     </CardGrid>
          //   </Panel>
          // ),
        }}
        C={{
          id: "C",
          content: map,
          // content: (
          //   <React.Fragment>
          //     <Card
          //       media="https://cdn.facilityexecutive.com/wp-content/uploads/2019/09/38391858_ml-800x418-1-574x300.jpg" // Image
          //       mediaDesc="Media Description"
          //       title="Best Place Ever"
          //       description="I Could Tell You More, But..."
          //       icon="bookmark_solid"
          //       shadow="0"
          //     />
          //   </React.Fragment>
          // ),
        }}
        D={{
          id: "D",
          content: map,
          // content: (
          //   <Bar
          //     contentAlign="center"
          //     padding="2x"
          //     left={{
          //       content: (
          //         <React.Fragment>
          //           <Title text="My Latest Musings" size="xl" weight="bold" />
          //           <Text text="My Latest Musings" weight="light" />
          //           <Text text="Just think about these things in your mind - then bring them into your world. Isn't that fantastic? You can just push a little tree out of your brush like that. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. I thought today we would make a happy little stream that's just running through the woods here. Just a little indication" size="sm" weight="bold" />
          //         </React.Fragment>
          //       ),
          //     }}
          //   />
          // ),
        }}
      />
    );
  })
  .add("Page Templates", () => {
    return (
      <Page id="Page Templates" template="">
        <Text
          text="A. This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Text
          text="B. This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Text
          text="C. This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Text
          text="D. This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Text
          text="E. This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
      </Page>
    );
  })
  .add("All Content Passed As Children", () => {
    return (
      <Page>
        <Title
          size="xl"
          weight="bold"
          text="My Latest Musings"
        />
        <Text
          weight="light"
          text="Totally Worth The Read...Enjoy!"
        />
        <Text
          size="sm"
          weight="bold"
          text="Just think about these things in your mind - then bring them into your world. Isn't that fantastic? You can just push a little tree out of your brush like that. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. I thought today we would make a happy little stream that's just running through the woods here. Just a little indication."
        />
        <Title
          text="Section 1"
          size="lg"
        />
        <Text
          text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Text
          text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Title
          text="Section 2"
          size="lg"
        />
        <Text
          text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Text
          text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
      </Page>
    );
  });
