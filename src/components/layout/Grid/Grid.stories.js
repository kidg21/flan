import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "layout/Card";
import Grid from "layout/Grid";

storiesOf("Application|Grid/", module).add("WIP", () => (
  <Grid gap="xxlarge" columns="5fr 2fr 1fr 5fr 1fr" rows="repeat(3, 150px)">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </Grid>
));
