/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Grid from "layout/Grid";
import ThemeColors, { Colors } from "./Colors.jsx";

// CSF format
export default {
  title: "Work|Docs/Theming (CSF)",
  parameters: {},
  includeStories: [],
};

export const Brand = () => {
  return (
    <Grid columns="5">
      <Colors color="navy" />
      <Colors color="sky" />
      <Colors color="gold" />
    </Grid>
  );
};

export const Secondary = () => {
  return (
    <Grid columns="5">
      <Colors color="grey" />
      <Colors color="seafoam" />
      <Colors color="whirlpool" />
      <Colors color="aqua" />
      <Colors color="teal" />
      <Colors color="royal" />
      <Colors color="orange" />
      <Colors color="yellow" />
    </Grid>
  );
};

export const Primary = () => {
  return (
    <Grid columns="5">
      <ThemeColors color="action40" />
      <ThemeColors color="action60" />
      <ThemeColors color="action80" />
      <ThemeColors color="action100" />
    </Grid>
  );
};

export const Notification = () => {
  return (
    <Grid columns="5">
      <ThemeColors color="info80" />
      <ThemeColors color="success80" />
      <ThemeColors color="warning80" />
      <ThemeColors color="alert80" />
    </Grid>
  );
};

export const Neutral = () => {
  return (
    <Grid columns="5">
      <Colors color="grey10" />
      <Colors color="grey20" />
      <Colors color="grey30" />
      <Colors color="grey40" />
      <Colors color="grey50" />
      <Colors color="grey60" />
      <Colors color="grey70" />
      <Colors color="grey80" />
      <Colors color="grey90" />
      <Colors color="grey100" />
    </Grid>
  );
};
