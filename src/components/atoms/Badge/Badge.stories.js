/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import Card, { CardList } from "layout/Card";
import Title from "base/Typography";
import Badge from "./Badge";
import BadgeNotes from "./Badge.md";

storiesOf("Atoms|Badge", module)
  .addParameters({
    info: {
      text: "Badge info goes here...",
    },
    notes: {
      markdown: BadgeNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <Grid columns="4">
          <Card>
            <Badge label="1" />
            <Title text="Badge" />
          </Card>
        </Grid>
      );
    }),
  )
  .add("Knobs", () => {
    return (
      <Grid columns="4">
        <Card>
          <Badge
            type={options(
              "type",
              {
                "info": "info",
                "success": "success",
                "warning": "warning",
                "alert (default)": "alert",
                "dark": "dark",
              },
              "alert",
              { display: "radio" },
              "Badge",
            )}
            label={text("label", "Label", "Badge")}
            icon={options(
              "icon (no label)",
              {
                "no icon": null,
                "user": "user",
                "check": "check",
                "alert": "alert",
                "mail": "mail_solid",
                "call": "call",
              },
              null,
              { display: "select" },
              "Badge",
            )}
            position={options(
              "align",
              {
                "top-left": "topLeft",
                "top-right (default)": "topRight",
                "bottom-right": "bottomRight",
                "bottom-left": "bottomLeft",
              },
              "topRight",
              { display: "radio" },
              "Badge",
            )}
          />
          <Title text="Badge" />
        </Card>
      </Grid>
    );
  })

  .add("The Badge Family", () => {
    return (
      <CardList columns="4" gap="large">
        <Card>
          <Badge label="1" />
          <Title text="1-Digit" />
        </Card>
        <Card>
          <Badge label="21" />
          <Title text="2-Digit" />
        </Card>
        <Card>
          <Badge label="321" />
          <Title text="3-Digit" />
        </Card>
        <Card>
          <Badge label="4321" />
          <Title text="4-Digit" />
        </Card>

        <Card>
          <Badge label="9+" />
          <Title text="Max 10" />
        </Card>
        <Card>
          <Badge label="99+" />
          <Title text="Max 100" />
        </Card>
        <Card>
          <Badge label="999+" />
          <Title text="Max 1k" />
        </Card>
        <Card>
          <Badge label="9999+" />
          <Title text="Max 10k" />
        </Card>

        <Card>
          <Badge icon="user" type="info" />
          <Title text="Icon" />
        </Card>
        <Card>
          <Badge icon="check" type="success" />
          <Title text="Icon" />
        </Card>
        <Card>
          <Badge icon="alert" type="warning" />
          <Title text="Icon" />
        </Card>
        <Card>
          <Badge icon="mail_solid" type="alert" />
          <Title text="Icon" />
        </Card>

        <Card>
          <Badge label="Info" type="info" />
          <Title text="Info" />
        </Card>
        <Card>
          <Badge label="Success" type="success" />
          <Title text="Success" />
        </Card>
        <Card>
          <Badge label="Warning" type="warning" />
          <Title text="Warning" />
        </Card>
        <Card>
          <Badge label="Alert" type="alert" />
          <Title text="Alert" />
        </Card>

        <Card>
          <Badge label="1" position="topRight" />
          <Title text="Top-Right" />
        </Card>
        <Card>
          <Badge label="1" position="bottomRight" />
          <Title text="Bottom-Right" />
        </Card>
        <Card>
          <Badge label="1" position="topLeft" />
          <Title text="Top-Left" />
        </Card>
        <Card>
          <Badge label="1" position="bottomLeft" />
          <Title text="Bottom-Left" />
        </Card>
      </CardList>
    );
  });
