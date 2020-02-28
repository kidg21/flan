/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { DMPTheme } from "Variables";
import { ThemeProvider } from "styled-components";
import { expect } from "chai";
import { mount } from "enzyme";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import Button from "atoms/Button";

// Knob Values
const knobGroups = ["Button"];
const buttonLabel = "Button Label";
const buttonTypes = [
  "standard",
  "secondary",
  "info",
  "success",
  "warning",
  "alert",
];
const buttonIcons = ["", "user", "down", "bookmark", "plus", "print"];

export default {
  title: "Atoms/Button/Tests",
  component: Button,
  parameters: {
    docs: { page: null },
  },
  includeStories: ["Knobs", "Actions"],
  decorators: [Padding, withKnobs],
};

export const Knobs = () => {
  const label = text("label", buttonLabel, knobGroups[0]);
  const type = select("type", buttonTypes, buttonTypes[0], knobGroups[0]);
  const icon = select("icon", buttonIcons, buttonIcons[0], knobGroups[0]);
  const count = text("count", "", knobGroups[0]);
  return (
    <Button
      label={label}
      type={type}
      icon={icon}
      count={count}
      solid={boolean("solid", false, knobGroups[0])}
      round={boolean("round", false, knobGroups[0])}
      underlined={boolean("underlined", false, knobGroups[0])}
      plain={boolean("plain", false, knobGroups[0])}
      fullWidth={boolean("full width", false, knobGroups[0])}
      disabled={boolean("disabled", false, knobGroups[0])}
      vertical={boolean("vertical", false, knobGroups[0])}
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

export const Actions = () => {
  return <Button label="Click Me!" onClick={action("onClick")} />;
};
Actions.story = {
  parameters: {
    viewMode: "story",
  },
};

// export const Specs = () => {
//   const story = (
//     <Grid columns="2">
//       <Button label="Standard Primary" />
//       <Button label="Solid Primary" solid />
//       <Button label="Standard Secondary" color="secondary" />
//       <Button label="Solid Secondary" solid color="secondary" />
//       <Button label="Underline Primary" underlined />
//       <Button
//         label="Underline Secondary"
//         underlined
//         color="secondary"
//       />
//       <Button label="Disabled Button" color="secondary" disabled />
//       <Button label="Disabled Underline" underlined disabled />
//     </Grid>
//   );

//   specs(() => {
//     let output = null;
//     return describe("Specs", () => {
//       before(() => {
//         output = mount(<ThemeProvider theme={DMPTheme}>{story}</ThemeProvider>);
//       });

//       after(() => {
//         output.unmount();
//       });

//       it("Is wrapped by a Two-Column Grid", () => {
//         const grid = output.find("Grid");
//         expect(grid.prop("columns")).to.equal("repeat(2, minmax(0, 1fr))");
//       });

//       it("Can render multiple Buttons", () => {
//         const buttons = output.find("button");
//         expect(buttons).to.have.lengthOf(8);
//       });

//       it("Accepts a \"label\" prop", () => {
//         const button = output.find("button").first();
//         const label = button.children();
//         expect(label.text()).to.equal("Standard Primary");
//       });
//     });
//   });

//   return story;
// };
// Specs.story = {
//   parameters: {
//     viewMode: "story",
//   },
// };
