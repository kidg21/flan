import React from "react";
import styled, { css } from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import Card, { CardList } from "layout/Card";
import Badge from "./Badge";
import BadgeNotes from "./Badge.md";

const Title = styled.h6`
  text-align: center;
  margin: 1em;
`;

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
    withInfo()(() => (
      <Grid columns="4">
        <Card>
          <Badge label="1" />
          <Title>Badge</Title>
        </Card>
      </Grid>
    )),
  )
  .add("Knobs", () => (
    <Grid columns="4">
      <Card>
        <Badge
          type={options(
            "type",
            {
              info: "info",
              success: "success",
              warning: "warning",
              "alert (default)": "alert",
              dark: "dark",
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
              user: "user",
              check: "check",
              exclamation: "exclamation",
              envelope: "envelope",
              phone: "phone",
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
        <Title>Badge</Title>
      </Card>
    </Grid>
  ))

  .add("The Badge Family", () => (
    <CardList columns="4">
      <Card>
        <Badge label="1" />
        <Title>1-Digit</Title>
      </Card>
      <Card>
        <Badge label="21" />
        <Title>2-Digit</Title>
      </Card>
      <Card>
        <Badge label="321" />
        <Title>3-Digit</Title>
      </Card>
      <Card>
        <Badge label="4321" />
        <Title>4-Digit</Title>
      </Card>

      <Card>
        <Badge label="9+" />
        <Title>Max 10</Title>
      </Card>
      <Card>
        <Badge label="99+" />
        <Title>Max 100</Title>
      </Card>
      <Card>
        <Badge label="999+" />
        <Title>Max 1K</Title>
      </Card>
      <Card>
        <Badge label="9999+" />
        <Title>Max 10K</Title>
      </Card>

      <Card>
        <Badge icon="user" type="info" />
        <Title>Icon</Title>
      </Card>
      <Card>
        <Badge icon="check" type="success" />
        <Title>Icon</Title>
      </Card>
      <Card>
        <Badge icon="exclamation" type="warning" />
        <Title>Icon</Title>
      </Card>
      <Card>
        <Badge icon="envelope" type="alert" />
        <Title>Icon</Title>
      </Card>

      <Card>
        <Badge label="Info" type="info" />
        <Title>Info</Title>
      </Card>
      <Card>
        <Badge label="Success" type="success" />
        <Title>Success</Title>
      </Card>
      <Card>
        <Badge label="Warning" type="warning" />
        <Title>Warning</Title>
      </Card>
      <Card>
        <Badge label="Alert" />
        <Title>Alert</Title>
      </Card>

      <Card>
        <Badge label="call" type="dark" />
        <Title>Message</Title>
      </Card>
      <Card>
        <Badge label="the" type="dark" />
        <Title>Message</Title>
      </Card>
      <Card>
        <Badge label="police" type="dark" />
        <Title>Message</Title>
      </Card>
      <Card>
        <Badge icon="phone" type="dark" />
        <Title>Message</Title>
      </Card>

      <Card>
        <Badge label="1" position="topRight" />
        <Title>Top-Right</Title>
      </Card>
      <Card>
        <Badge label="1" position="bottomRight" />
        <Title>Bottom-Right</Title>
      </Card>
      <Card>
        <Badge label="1" position="topLeft" />
        <Title>Top-Left</Title>
      </Card>
      <Card>
        <Badge label="1" position="bottomLeft" />
        <Title>Bottom-Left</Title>
      </Card>
    </CardList>
  ));
