import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "layout/Card";
import Grid from "layout/Grid";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  button,
  array,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import GriddNotes from "./Grid.md";

storiesOf("Application|Grid/", module)
  .addParameters({
    info: {
      text: "Grid info goes here.",
    },
    notes: {
      markdown: GriddNotes,
    },
  })
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => (
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    )),
  )
  .add("Knobs", () => (
    <Grid
      // columns={number(
      //   "# of columns",
      //   "2",
      //   {
      //     range: true,
      //     min: "1",
      //     max: "12",
      //     step: 1,
      //   },
      //   "Standard Props",
      // )}
      columns={options(
        "# of columns",
        {
          auto: "",
          "1": "1",
          "2": "2",
          "3": "3",
          "4": "4",
          "5": "5",
          "6": "6",
          "7": "7",
          "8": "8",
          "9": "9",
          "10": "10",
          "11": "11",
          "12": "12",
        },
        "",
        { display: "select" },
        "Standard Props",
      )}
      // columns={text("Custom # of columns", "", "Standard Props")}
    >
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
  ))
  .add("WIP", () => (
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
