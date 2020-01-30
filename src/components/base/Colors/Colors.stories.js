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
    <Grid columns="3">
      <Colors color="lightBoxNavy" />
      <Colors color="lightBoxCyan" />
      <Colors color="lightBoxGold" />
      <Colors color="lightBoxGrey" />
      <Colors color="softGrey" />
      <Colors color="softBlue" />
      <Colors color="moss" />
      <Colors color="robinBlue" />
      <Colors color="seafoam" />
      <Colors color="blueSteel" />
      <Colors color="tangerine" />
      <Colors color="lemon" />
    </Grid>
  );
};

export const Primary = () => {
  return (
    <Grid columns="4">
      <ThemeColors color="actionTint" />
      <ThemeColors color="actionLight" />
      <ThemeColors color="action" />
      <ThemeColors color="actionDark" />
    </Grid>
  );
};

export const Secondary = () => {
  return (
    <Grid columns="5">
      <ThemeColors color="infoTint" />
      <ThemeColors color="infoLight" />
      <ThemeColors color="infoBright" />
      <ThemeColors color="info" />
      <ThemeColors color="infoDark" />
      <ThemeColors color="successTint" />
      <ThemeColors color="successLight" />
      <ThemeColors color="successBright" />
      <ThemeColors color="success" />
      <ThemeColors color="successDark" />
      <ThemeColors color="warningTint" />
      <ThemeColors color="warningLight" />
      <ThemeColors color="warningBright" />
      <ThemeColors color="warning" />
      <ThemeColors color="warningDark" />
      <ThemeColors color="alertTint" />
      <ThemeColors color="alertLight" />
      <ThemeColors color="alertBright" />
      <ThemeColors color="alert" />
      <ThemeColors color="alertDark" />
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
