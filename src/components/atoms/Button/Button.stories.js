/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import Button from "atoms/Button";

// Knob Values
const knobGroups = ["Button"];
const buttonLabel = "Button Label";
const buttonVariants = {
  default: null,
  neutral: "neutral",
  action: "action",
  info: "info",
  success: "success",
  warning: "warning",
  alert: "alert",
};
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
  const variant = select("variant", buttonVariants, buttonVariants.default, knobGroups[0]);
  const icon = select("icon", buttonIcons, buttonIcons[0], knobGroups[0]);
  const count = text("count", "", knobGroups[0]);
  return (
    <Button
      label={label}
      variant={variant}
      icon={icon}
      count={count}
      isSolid={boolean("solid", false, knobGroups[0])}
      isRound={boolean("round", false, knobGroups[0])}
      hasUnderline={boolean("underlined", false, knobGroups[0])}
      isPlain={boolean("plain", false, knobGroups[0])}
      fullWidth={boolean("full width", false, knobGroups[0])}
      disabled={boolean("disabled", false, knobGroups[0])}
      alignCenter={boolean("centered", false, knobGroups[0])}
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
//       <Button label="Solid Primary" isSolid />
//       <Button label="Standard Secondary" color="secondary" />
//       <Button label="Solid Secondary" isSolid color="secondary" />
//       <Button label="Underline Primary" hasUnderline />
//       <Button
//         label="Underline Secondary"
//         hasUnderline
//         color="secondary"
//       />
//       <Button label="Disabled Button" color="secondary" disabled />
//       <Button label="Disabled Underline" hasUnderline disabled />
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
