/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { IconGrid } from "helpers/Display";
import { CardGrid } from "elements/Card";
import {
  iconsApp,
  iconsBrand,
  iconsNavigation,
} from "atoms/Icon/libraryIcon.data";

export default {
  title: "Work|Docs/Iconography (CSF)",
  parameters: {},
  includeStories: [],
};

/** TODO: Break 'App' icon set into subcategories */
export const Standard = () => {
  return (
    <CardGrid columns="3">
      <IconGrid data={iconsApp} size="10x" />
    </CardGrid>
  );
};

export const Navigation = () => {
  return (
    <CardGrid columns="3">
      <IconGrid data={iconsNavigation} />
    </CardGrid>
  );
};

export const Brand = () => {
  return (
    <CardGrid columns="3">
      <IconGrid data={iconsBrand} />
    </CardGrid>
  );
};
