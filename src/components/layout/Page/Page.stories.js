/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { ContainerLarge } from "helpers/Display";
import Page from "layout/Page";
import {
  MockButtons,
  MockCardGrid,
  MockData,
  MockDetails,
  MockFooter,
  MockForm,
  MockHeader,
  MockMenu,
  MockPalette,
  MockTable,
  MockTabs,
  MockWorkflow,
} from "helpers/Mocks";

export default {
  title: "Layout|Page/Tests",
  component: Page,
  parameters: {
    docs: { page: null },
  },
  includeStories: ["Knobs"],
  decorators: [ContainerLarge, withKnobs],
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
  <Mapbox />,
  <MockMenu />,
  <MockWorkflow />,
  <MockDetails />,
  <MockCardGrid />,
  <MockTable />,
  <MockForm />,
  <MockTabs />,
  <MockButtons />,
  <MockPalette />,
  <MockData />,
];

const content = {
  "None": null,
  "Header": 1,
  "Footer": 2,
  "Map": 3,
  "Main Menu": 4,
  "WorkFlow Menu": 5,
  "Details": 6,
  "Card Grid": 7,
  "Table": 8,
  "Form": 9,
  "Tabs": 10,
  "Buttons": 11,
  "Palette": 12,
  "Data": 13,
};

export const Knobs = () => {
  const templateID = options("Template", templates, "", { display: "select" }, knobGroups[0]);
  const contentA = select("A", content, content[0], knobGroups[0]);
  const contentB = select("B", content, content[0], knobGroups[0]);
  const contentC = select("C", content, content[0], knobGroups[0]);
  const contentD = select("D", content, content[0], knobGroups[0]);
  const contentE = select("E", content, content[0], knobGroups[0]);
  const borders = boolean("Borders", false, knobGroups[0]);
  const shadows = boolean("Shadows", false, knobGroups[0]);
  return (
    <Page
      id="Knobs"
      template={templateID}
      A={
        boolean("Include A", true, knobGroups[0])
        && { id: "A", content: index[parseFloat(contentA)] }
      }
      B={
        boolean("Include B", true, knobGroups[0])
        && { id: "B", content: index[parseFloat(contentB)] }
      }
      C={
        boolean("Include C", true, knobGroups[0])
        && { id: "C", content: index[parseFloat(contentC)] }
      }
      D={
        boolean("Include D", true, knobGroups[0])
        && { id: "D", content: index[parseFloat(contentD)] }
      }
      E={
        boolean("Include E", true, knobGroups[0])
        && { id: "E", content: index[parseFloat(contentE)] }
      }
      hasBorders={borders}
      hasShadows={shadows}
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
