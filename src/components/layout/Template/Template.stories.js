/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { FullScreen } from "helpers/Display";
import Button from "atoms/Button";
import Grid from "layout/Grid";
import Template from "layout/Template";
import Text, { Title } from "base/Typography";
import SearchBar from "blocks/Search";

// export default {
//   title: "Layout|Template/Tests",
//   component: Template,
//   parameters: {
//     docs: { page: null },
//   },
//   includeStories: ["Knobs"],
//   decorators: [FullScreen, withKnobs],
// };

// // Knob Values
// const knobGroups = ["Template"];
// const templates = {
//   None: "",
//   A_01: "A_01",
//   B_01: "B_01",
//   B_02: "B_02",
//   C_01: "C_01",
//   C_02: "C_02",
//   D_01: "D_01",
//   E_01: "E_01",
//   E_02: "E_02",
//   E_03: "E_03",
// };

// // const index = [
// //   "",
// //   <MockHeader />,
// //   <MockFooter />,
// //   <MockMap />,
// //   <MockMap map="satellite" />,
// //   <MockMenu />,
// //   <MockWorkflow />,
// //   <MockDetails />,
// //   <MockCardGrid />,
// //   <MockTable />,
// //   <MockForm />,
// //   <MockTabs />,
// //   <MockButtons />,
// //   <MockPalette />,
// //   <MockData />,
// // ];

// const content = {
//   "None": null,
//   "Header": 1,
//   "Footer": 2,
//   "Map": 3,
//   "Map (satellite)": 4,
//   "Main Menu": 5,
//   "WorkFlow Menu": 6,
//   "Details": 7,
//   "Card Grid": 8,
//   "Table": 9,
//   "Form": 10,
//   "Tabs": 11,
//   "Buttons": 12,
//   "Palette": 13,
//   "Data": 14,
// };

// export const Knobs = () => {
//   const templateID = options("Template", templates, "", { display: "select" }, knobGroups[0]);
//   const contentA = select("A", content, content[0], knobGroups[0]);
//   const contentB = select("B", content, content[0], knobGroups[0]);
//   const contentC = select("C", content, content[0], knobGroups[0]);
//   const contentD = select("D", content, content[0], knobGroups[0]);
//   const contentE = select("E", content, content[0], knobGroups[0]);
//   const borders = boolean("Borders", false, knobGroups[0]);
//   const shadows = boolean("Shadows", false, knobGroups[0]);
//   return (
//     <Template
//       id="Knobs"
//       template={templateID}
//       A={
//         boolean("Include A", true, knobGroups[0])
//         &&
//         { id: "A", content: index[parseFloat(contentA)] }}
//       B={
//         boolean("Include B", true, knobGroups[0])
//         &&
//         { id: "B", content: index[parseFloat(contentB)] }}
//       C={
//         boolean("Include C", true, knobGroups[0])
//         &&
//         { id: "C", content: index[parseFloat(contentC)] }}
//       D={
//         boolean("Include D", true, knobGroups[0])
//         &&
//         { id: "D", content: index[parseFloat(contentD)] }}
//       E={
//         boolean("Include E", true, knobGroups[0])
//         &&
//         { id: "E", content: index[parseFloat(contentE)] }
//       }
//       hasBorders={borders}
//       hasShadows={shadows}
//     />
//   );
// };
// Knobs.story = {
//   parameters: {
//     parameters: {
//       viewMode: "story",
//     },
//   },
// };

storiesOf("Layout/Template/Template Library/A Templates", module)
  // .addDecorator(checkA11y)
  // .addDecorator(FullScreen)
  .add("A_01", () => {
    return (
      <Grid columns="1" rows="100vh" gap="4xl">
        <Template
          id="Template A_01"
          template="A_01"
          hasBorders
          A={{
            id: "A",
            content: "",
          }}
        />
      </Grid>
    );
  });

storiesOf("Layout/Template/Template Library/B Templates", module)
  .add("B_01", () => {
    return (
      <Grid columns="1" rows="100vh" gap="4xl">
        <Template
          id="Template B_01"
          template="B_01"
          hasBorders
          A={{
            id: "A",
            content: "",
          }}
          B={{
            id: "B",
            content: "",
          }}
        />
      </Grid>
    );
  })
  .add("B_02", () => {
    return (
      <Grid columns="1" rows="100vh" gap="4xl">
        <Template
          id="Template B_02"
          template="B_02"
          hasBorders
          A={{
            id: "A",
            content: "",
          }}
          B={{
            id: "B",
            content: "",
          }}
        />
      </Grid>
    );
  });

storiesOf("Layout/Template/Template Library/C Templates", module)
  .add("C_01", () => {
    return (
      <Grid columns="1" rows="100vh" gap="4xl">
        <Template
          id="Template C_01"
          template="C_01"
          hasBorders
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
      </Grid>
    );
  })
  .add("C_02", () => {
    return (
      <Grid columns="1" rows="100vh" gap="4xl">
        <Template
          id="Template C_02"
          template="C_02"
          hasBorders
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
      </Grid>
    );
  });

storiesOf("Layout/Template/Template Library/D Templates", module)
  .add("D_01", () => {
    return (
      <Grid columns="1" rows="100vh" gap="4xl">
        <Template
          id="Template D_01"
          template="D_01"
          hasBorders
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
      </Grid>
    );
  });

storiesOf("Layout/Template/Template Library/E Templates", module)
  .add("E_01", () => {
    return (
      <Grid columns="1" rows="100vh" gap="4xl">
        <Template
          id="Template E_01"
          template="E_01"
          hasBorders
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
  .add("E_02", () => {
    return (
      <Grid columns="1" rows="100vh" gap="4xl">
        <Template
          id="Template E_02"
          template="E_02"
          hasBorders
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
  .add("E_03", () => {
    return (
      <Grid columns="1" rows="100vh" gap="4xl">
        <Template
          id="Template E_03"
          template="E_03"
          hasBorders
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
  });

storiesOf("Layout/Template", module)
  .addDecorator(FullScreen)
  .add("Template Overlay", () => {
    return (
      <React.Fragment>
        <Template
          id="Template Regions"
          template="E_03"
          hasBorders
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
            content: "",
          }}
        />
      </React.Fragment>
    );
  })
  .add("Content Passed As Children", () => {
    return (
      <Template>
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
      </Template>
    );
  });
