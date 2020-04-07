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
    <Grid>
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
    <Grid>
      <ThemeColors color="action20" />
      <ThemeColors color="action40" />
      <ThemeColors color="action60" />
      <ThemeColors color="action80" />
      <ThemeColors color="action100" />
    </Grid>
  );
};

export const Secondary = () => {
  return (
    <Grid>
      <ThemeColors color="info20" />
      <ThemeColors color="info40" />
      <ThemeColors color="info60" />
      <ThemeColors color="info80" />
      <ThemeColors color="info100" />
      <ThemeColors color="success20" />
      <ThemeColors color="success40" />
      <ThemeColors color="success60" />
      <ThemeColors color="success80" />
      <ThemeColors color="success100" />
      <ThemeColors color="warning20" />
      <ThemeColors color="warning40" />
      <ThemeColors color="warning60" />
      <ThemeColors color="warning80" />
      <ThemeColors color="warning100" />
      <ThemeColors color="alert20" />
      <ThemeColors color="alert40" />
      <ThemeColors color="alert60" />
      <ThemeColors color="alert80" />
      <ThemeColors color="alert100" />
    </Grid>
  );
};

export const Neutral = () => {
  return (
    <Grid>
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
