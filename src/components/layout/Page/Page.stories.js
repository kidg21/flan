/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { FullScreen } from "helpers/Display";
import { MockCardGrid, MockDetails, MockFooter, MockForm, MockHeader, MockWorkflow, MockMap, MockTable, MockTabs, MockButtons, MockPalette } from "helpers/Mocks";
import Button from "atoms/Button";
import Grid from "layout/Grid";
import Page from "layout/Page";
import Text, { Title } from "base/Typography";
import SearchBar from "blocks/Search";

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
  <MockWorkflow />,
  <MockTable />,
  <MockForm />,
  <MockDetails />,
  <MockTabs />,
  <MockButtons />,
  <MockPalette />,
];

const content = {
  "None": null,
  "Header": 1,
  "Footer": 2,
  "Map": 3,
  "Map (satellite)": 4,
  "Main Menu": 5,
  "WorkFlow Menu": 6,
  "Details": 7,
  "Card Grid": 8,
  "Table": 9,
  "Form": 10,
  "Tabs": 11,
  "Buttons": 12,
  "Palette": 13,
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
  .add("Template Library", () => {
    return (
      <Grid gap="4xl">
        <Page
          id="Template A_01"
          template="A_01"
          stateCards
          A={{
            id: "A",
            content: "",
          }}
        />
        <Page
          id="Template B_01"
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
          id="Template C_01"
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
          id="Template D_01"
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
          id="Template E_01"
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
          id="Template E_02"
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
        <Page
          id="Template E_03"
          template="E_03"
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
  .add("App: Research", () => {
    return (
      <Page
        id="Page Regions"
        template="E_02"
        A={{
          id: "A",
          content: <MockWorkflow />,
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
          content: <MockMap withTools />,
        }}
        E={{
          id: "E",
          content: <MockFooter />,
        }}
      />
    );
  })
  .add("Page Overlay", () => {
    return (
      <React.Fragment>
        <Page
          id="Page Regions"
          template="E_03"
          stateCards
          isOverlay
          A={{
            id: "A",
            content: <SearchBar id="Search_E3" placeholder="Search Location" />,
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
        />
        <MockMap />
      </React.Fragment>
    );
  })
  .add("Content Passed As Children", () => {
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
