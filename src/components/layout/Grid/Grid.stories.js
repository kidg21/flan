/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Card from "elements/Card";
import Grid from "layout/Grid";

const GriddNotes = markdown.require("./Grid.md");

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
    withInfo()(() => {
      return (
        <Grid>
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      );
    }),
  )
  .add("Knobs", () => {
    return (
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
            "tiny": "tiny",
            "small": "small",
            "normal (default)": "",
            "large": "large",
            "xlarge": "xlarge",
            "xxlarge": "xxlarge",
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
    );
  })
  .add("Standard Grid", () => {
    return (
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
    );
  })
  .add("Custom Grid", () => {
    return (
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
    );
  });
