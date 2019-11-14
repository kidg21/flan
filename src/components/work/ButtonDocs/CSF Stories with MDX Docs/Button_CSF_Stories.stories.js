/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import Grid from "layout/Grid";
import Button from "atoms/Button";

// Knob Values
const knobGroups = ["Button", "Group 2"];
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
  title: "Work|Docs/ButtonDocs (CSF Stories with MDX Docs)",
  component: Button,
  decorators: [Padding, withKnobs],
  includeStories: [],
};
export const Standard = () => {
  return <Button label="Standard Button" />;
};
Standard.story = {};
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
Type.story = {};
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
  // parameters: { foo: "bar" },
  // parameters: { docs: { disable: true } },
};
