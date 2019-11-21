/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import Grid from "layout/Grid";
import Button from "atoms/Button";

// Knob Values
const knobGroups = ["Button (CSF)", "Group 2"];
const buttonLabel = "Button Label";
const buttonTypes = ["standard", "solid", "inline", "underlined"];
const buttonColors = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "alert",
];
const buttonSizes = ["small", "standard", "large"];
const buttonIcons = ["no icon", "user", "down", "bookmark", "plus", "print"];

// CSF format
export default {
  title: "Work|Docs/Button (CSF)",
  component: Button,
  parameters: {
    componentSubtitle:
      "Buttons allow users to take actions, and make choices, with a single tap.",
    /** Use to disable DocsPage per component */
    // parameters: { docs: { page: null } },
  },
  // includeStories: ["Standard", "Knobs", "Actions"],
  decorators: [Padding, withKnobs],
};
export const Standard = () => {
  return <Button label="Standard Button" />;
};
export const Type = () => {
  return (
    <Grid>
      <Button label="Standard Button" />
      <Button label="Solid Button" type="solid" />
      <Button label="Inline Button" type="inline" />
      <Button label="Underlined Button" type="underlined" />
    </Grid>
  );
};
export const Size = () => {
  return (
    <Grid>
      <Button label="Small Button" size="small" />
      <Button label="Standard Button" />
      <Button label="Large Button" size="large" />
    </Grid>
  );
};
export const Color = () => {
  return (
    <Grid>
      <Button label="Standard Button" />
      <Button label="Secondary Button" color="secondary" />
      <Button label="Info Button" color="info" />
      <Button label="Success Button" color="success" />
      <Button label="Warning Button" color="warning" />
      <Button label="Alert Button" color="alert" />
    </Grid>
  );
};
export const Icons = () => {
  return (
    <Grid>
      <Button label="Profile" icon="user" />
      <Button label="Expand" icon="down" />
      <Button label="Bookmark" icon="bookmark" />
      <Button label="Add" icon="plus" />
      <Button label="Print" icon="print" />
    </Grid>
  );
};
export const Knobs = () => {
  const label = text("label", buttonLabel, knobGroups[0]);
  const type = select("type", buttonTypes, buttonTypes[0], knobGroups[0]);
  const color = select("color", buttonColors, buttonColors[0], knobGroups[0]);
  const size = select("size", buttonSizes, buttonSizes[1], knobGroups[0]);
  const icon = select("icon", buttonIcons, buttonIcons[0], knobGroups[0]);
  return (
    <Button
      label={label}
      type={type}
      color={color}
      size={size}
      icon={icon}
      fullWidth={boolean("full width", false, knobGroups[0])}
      disabled={boolean("disabled", false, knobGroups[0])}
    />
  );
};
Knobs.story = {
  parameters: {
    docs: {
      storyDescription:
        "We can add a description for each story to help explain what they represent.  For example, for this 'Knobs' story, you should switch to the 'Canvas' tab to experiment with this story.",
    },
  },
};
export const Actions = () => {
  return <Button label="Click Me!" onClick={action("onClick")} />;
};
Actions.story = {
  parameters: {
    docs: {
      storyDescription:
        "This is another story that should be used in the 'Canvas' tab.",
    },
  },
};
