import React from "react"
import styled, { css } from "styled-components"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs"
import { Padding } from "helpers/Display"
import Grid from "helpers/Grid"
import Card, { CardList } from "layout/Card"
import Badge from "./Badge"
import BadgeNotes from "./Badge.md"

const Title = styled.h6`
  text-align: center;
  margin: 1em;
`
// Badge
storiesOf("Atoms|Badge", module)
  .addParameters({
    info: {
      text: "Badge info goes here..."
    },
    notes: {
      markdown: BadgeNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  // .add("Documentation", withInfo()(() => <Badge label="1" alert={true} />))
  .add(
    "Documentation",
    withInfo()(() => (
      <Grid col_4>
        <Card>
          <Badge type="notify" label="1" />
          <Title>Badge</Title>
        </Card>
      </Grid>
    ))
  )
  // .add(
  //   "Label Badge",
  //   () => (
  //     <Grid col_4>
  //       <Badge label="1" />
  //       <Badge label="LT" type="dark" />
  //       <Badge label="DK" type="link" />
  //       <Badge label="25" type="success" />
  //       <Badge label="WN" type="warning" />
  //       <Badge label="AN" type="alert" />
  //     </Grid>
  //   ),
  //   { notes: { markdown: BadgeNotes } }
  // )
  // .add("Icon Badge", () => (
  //   <Grid col_4>
  //     <Badge icon={["fas", "info"]} />
  //     <Badge icon="times" type="dark" />
  //     <Badge icon={["far", "bookmark"]} type="link" />
  //     <Badge icon="chevron-right" type="success" />
  //     <Badge icon="check" type="warning" />
  //     <Badge icon="exclamation" type="alert" />
  //   </Grid>
  // ))
  // .add("Badge Sizes", () => (
  //   <Grid>
  //     <Badge label="1" size="tiny" />
  //     <Badge label="1" size="small" />
  //     <Badge label="1" />
  //     <Badge label="1" size="large" />
  //     <Badge label="1" size="xlarge" />
  //     <Badge label="1" size="xxlarge" />
  //     <Badge label="1" size="xxxlarge" />
  //   </Grid>
  // ))
  .add("The Badge Family", () => (
    <CardList col_4>
      <Card>
        <Badge type="notify" label="1" />
        <Title>1-Digit</Title>
      </Card>
      <Card>
        <Badge type="notify" label="21" />
        <Title>2-Digit</Title>
      </Card>
      <Card>
        <Badge type="notify" label="321" />
        <Title>3-Digit</Title>
      </Card>
      <Card>
        <Badge type="notify" label="4321" />
        <Title>4-Digit</Title>
      </Card>
      <Card>
        <Badge type="max10" />
        <Title>Max 10</Title>
      </Card>
      <Card>
        <Badge type="max100" />
        <Title>Max 100</Title>
      </Card>
      <Card>
        <Badge type="max1K" />
        <Title>Max 1K</Title>
      </Card>
      <Card>
        <Badge type="max10K" />
        <Title>Max 10K</Title>
      </Card>
      <Card>
        <Badge label="NEW" type="notify" />
        <Title>Label</Title>
      </Card>
      <Card>
        <Badge label="EDIT" type="notify" />
        <Title>Label</Title>
      </Card>
      <Card>
        <Badge label="GO" type="notify" />
        <Title>Label</Title>
      </Card>
      <Card>
        <Badge label="EAT!" type="notify" />
        <Title>Label</Title>
      </Card>

      <Card>
        <Badge icon="exclamation" type="notify" />
        <Title>Icon</Title>
      </Card>
      <Card>
        <Badge icon="check" type="notify" />
        <Title>Icon</Title>
      </Card>
      <Card>
        <Badge icon="envelope" type="notify" />
        <Title>Icon</Title>
      </Card>
      <Card>
        <Badge icon="user" type="notify" />
        <Title>Icon</Title>
      </Card>

      <Card>
        <Badge label="1" type="notify" position="topRight" />
        <Title>Top-Right</Title>
      </Card>
      <Card>
        <Badge label="1" type="notify" position="bottomRight" />
        <Title>Bottom-Right</Title>
      </Card>
      <Card>
        <Badge label="1" type="notify" position="topLeft" />
        <Title>Top-Left</Title>
      </Card>
      <Card>
        <Badge label="1" type="notify" position="bottomLeft" />
        <Title>Bottom-Left</Title>
      </Card>
    </CardList>
  ))
