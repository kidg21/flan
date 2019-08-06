import React from "react";
import { storiesOf } from "@storybook/react";
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
import Card from "layout/Card";
import Grid from "layout/Grid";
import GriddNotes from "./Grid.md";

storiesOf("Layout|Grid/", module)
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
      columns={options(
        "# of columns",
        {
          "auto-fit": "",
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
      rows={text("grid-template-rows", "auto", "Standard Props")}
      gap={options(
        "grid gap",
        {
          "no gap": "none",
          tiny: "tiny",
          small: "small",
          "normal (default)": "",
          large: "large",
          xlarge: "xlarge",
          xxlarge: "xxlarge",
        },
        "",
        { display: "select" },
        "Standard Props",
      )}
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
  .add("Standard Grid", () => (
    <Grid>
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
  .add("Custom Grid", () => (
    <Grid gap="xxlarge" columns="5fr 2fr 1fr 5fr 1fr" rows="100px 3fr 1fr">
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
