/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";

import { Padding, IconGrid } from "helpers/Display";
import Grid from "layout/Grid";
import Title, { SubTitle } from "base/Typography";
import { CardList } from "layout/Card";
import {
  iconsApp,
  iconsBrand,
  iconsNavigation,
} from "atoms/Icon/libraryIcon.data";

/** TODO: Break 'App' icon set into subcategories */
storiesOf("Application|Libraries/Icon Library", module)
  .addDecorator(Padding)
  .add("App Icons", () => {
    return (
      <Grid columns="1">
        <Title text="App Icons" size="large" styling="underline" />
        <SubTitle text="Click the name of the icon to select, copy, and use the value in the Icon's 'name' prop" />
        <CardList>
          <IconGrid data={iconsApp} />
        </CardList>
      </Grid>
    );
  });

storiesOf("Application|Libraries/Icon Library", module)
  .addDecorator(Padding)
  .add("Navigation Icons", () => {
    return (
      <Grid columns="1">
        <Title text="Navigation Icons" size="large" styling="underline" />
        <SubTitle text="Click the name of the icon to select, copy, and use the value in the Icon's 'name' prop" />
        <CardList>
          <IconGrid data={iconsNavigation} />
        </CardList>
      </Grid>
    );
  });

storiesOf("Application|Libraries/Icon Library", module)
  .addDecorator(Padding)
  .add("Brand Icons", () => {
    return (
      <Grid columns="1">
        <Title text="Brand Icons" size="large" styling="underline" />
        <SubTitle text="Click the name of the icon to select, copy, and use the value in the Icon's 'name' prop" />
        <CardList>
          <IconGrid data={iconsBrand} />
        </CardList>
      </Grid>
    );
  });
