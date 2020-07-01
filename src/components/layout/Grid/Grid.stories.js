/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Card from "elements/Card";
import Grid from "layout/Grid";


storiesOf("Utilities|Grid/", module)

  .addDecorator(withKnobs)
  .add(
    "Documentation",
    () => {
      return (
        <Grid>
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      );
    },
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
            "0": "0",
            "xs": "xs",
            "sm": "sm",
            "default": "",
            "lg": "lg",
            "xl": "xl",
            "2xl": "2xl",
            "3xl": "3xl",
            "4xl": "4xl",
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
      <Grid columns="5fr 2fr 1fr 5fr 1fr" rows="100px 3fr 1fr" gap="xl">
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
