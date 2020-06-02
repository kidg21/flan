/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { FullScreen } from "helpers/Display";
import { MockCardGrid, MockDetails, MockFooter, MockForm, MockHeader, MockList, MockMap, MockTable, MockTabs, MockButtons } from "helpers/Mocks";
import Grid from "layout/Grid";
import Page from "layout/Page";
import Text, { Title } from "base/Typography";

export default {
  title: "Layout|Page/Tests",
  component: Page,
  parameters: {
    docs: { page: null },
  },
  includeStories: ["Knobs"],
  decorators: [FullScreen, withKnobs],
};

// Knob Values
const knobGroups = ["Page"];
const templates = {
  "None": "",
  "A": "A_01",
  "A-B": "B_01",
  "A-B-C": "C_01",
  "A-B-C-D": "D_01",
  "A-B-C-D-E": "E_01",
  "'Appraisal Research'": "E_02",
};

const index = [
  "",
  <MockHeader />,
  <MockFooter />,
  <MockMap />,
  <MockMap map="satellite" />,
  <MockCardGrid />,
  <MockList />,
  <MockTable />,
  <MockForm />,
  <MockDetails />,
  <MockTabs />,
  <MockButtons />,
];

const content = {
  "None": null,
  "Header": 1,
  "Footer": 2,
  "Map": 3,
  "Map (satellite)": 4,
  "Card Grid": 5,
  "List": 6,
  "Table": 7,
  "Form": 8,
  "Details": 9,
  "Tabs": 10,
  "Buttons": 11,
};

export const Knobs = () => {
  const templateID = options("Template", templates, "", { display: "select" }, knobGroups[0]);
  const contentA = select("A", content, content[0], knobGroups[0]);
  const contentB = select("B", content, content[0], knobGroups[0]);
  const contentC = select("C", content, content[0], knobGroups[0]);
  const contentD = select("D", content, content[0], knobGroups[0]);
  const contentE = select("E", content, content[0], knobGroups[0]);
  const cardState = boolean("Card State", false, knobGroups[0]);
  return (
    <Page
      id="Knobs"
      template={templateID}
      A={
        boolean("Include A", true, knobGroups[0])
        &&
        { id: "A", content: index[parseFloat(contentA)] }}
      B={
        boolean("Include B", true, knobGroups[0])
        &&
        { id: "B", content: index[parseFloat(contentB)] }}
      C={
        boolean("Include C", true, knobGroups[0])
        &&
        { id: "C", content: index[parseFloat(contentC)] }}
      D={
        boolean("Include D", true, knobGroups[0])
        &&
        { id: "D", content: index[parseFloat(contentD)] }}
      E={
        boolean("Include E", true, knobGroups[0])
        &&
        { id: "E", content: index[parseFloat(contentE)] }
      }
      stateCards={cardState}
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
        template="E_02"
        // stateCards
        A={{
          id: "A",
          content: <MockList />,
        }}
        B={{
          id: "B",
          content: (
            <React.Fragment>
              <MockHeader />
              <MockTabs />
            </React.Fragment>
          ),
        }}
        C={{
          id: "C",
          content: <MockDetails />,
        }}
        D={{
          id: "D",
          content: (
            <React.Fragment>
              {/* <MockTabs /> */}
              <MockButtons />
              <MockMap />
            </React.Fragment>
          ),
          // content: <MockMap />,
        }}
        E={{
          id: "E",
          content: (
            // <React.Fragment>
            // <MockButtons />
            <MockFooter />
            // </React.Fragment>
          ),
          // content: <MockFooter />,
        }}
      />
    );
  })
  .add("Template Library", () => {
    return (
      <Grid gap="4xl">
        <Page
          id="Page Regions"
          template="A_01"
          stateCards
          A={{
            id: "A",
            content: "",
          }}
        />
        <Page
          id="Page Regions"
          template="B_01"
          stateCards
          A={{
            id: "A",
            content: "",
          }}
          B={{
            id: "B",
            content: "",
          }}
        />
        <Page
          id="Page Regions"
          template="C_01"
          stateCards
          A={{
            id: "A",
            content: "",
          }}
          B={{
            id: "B",
            content: "",
          }}
          C={{
            id: "C",
            content: "",
          }}
        />
        <Page
          id="Page Regions"
          template="D_01"
          stateCards
          A={{
            id: "A",
            content: "",
          }}
          B={{
            id: "B",
            content: "",
          }}
          C={{
            id: "C",
            content: "",
          }}
          D={{
            id: "D",
            content: "",
          }}
        />
        <Page
          id="Page Regions"
          template="E_01"
          stateCards
          A={{
            id: "A",
            content: "",
          }}
          B={{
            id: "B",
            content: "",
          }}
          C={{
            id: "C",
            content: "",
          }}
          D={{
            id: "D",
            content: "",
          }}
          E={{
            id: "E",
            content: "",
          }}
        />
        <Page
          id="Page Regions"
          template="E_02"
          stateCards
          A={{
            id: "A",
            content: "",
          }}
          B={{
            id: "B",
            content: "",
          }}
          C={{
            id: "C",
            content: "",
          }}
          D={{
            id: "D",
            content: "",
          }}
          E={{
            id: "E",
            content: "",
          }}
        />
      </Grid>
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
