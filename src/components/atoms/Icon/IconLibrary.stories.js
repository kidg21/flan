/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import { IconGrid } from "helpers/Display";
import { CardList } from "elements/Card";
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
    <CardList columns="3">
      <IconGrid data={iconsApp} size="10x" />
    </CardList>
  );
};

export const Navigation = () => {
  return (
    <CardList columns="3">
      <IconGrid data={iconsNavigation} />
    </CardList>
  );
};

export const Brand = () => {
  return (
    <CardList columns="3">
      <IconGrid data={iconsBrand} />
    </CardList>
  );
};
