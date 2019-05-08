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
  .add("Documentation", withInfo()(() => <Badge label="1" alert={true} />))
  .add(
    "Label Badge",
    () => (
      <Grid col_4>
        <Badge label="1" />
        <Badge label="LT" light={true} />
        <Badge label="DK" grey={true} />
        <Badge label="25" dark={true} />
        <Badge label="WN" warning={true} />
        <Badge label="AN" anchor={true} />
        <Badge label="SC" success={true} />
      </Grid>
    ),
    { notes: { markdown: BadgeNotes } }
  )
  .add("Icon Badge", () => (
    <Grid col_4>
      <Badge icon={["far", "info"]} />
      <Badge icon="exclamation" grey={true} />
      <Badge icon="times" dark={true} />
      <Badge icon="check" warning={true} />
      <Badge icon={["far", "bookmark"]} anchor={true} />
      <Badge icon="chevron-right" success={true} />
    </Grid>
  ))
  .add("Badge Sizes", () => (
    <Grid>
      <Badge label="1" tiny={true} />
      <Badge label="1" small={true} />
      <Badge label="1" />
      <Badge label="1" large={true} />
      <Badge label="1" xlarge={true} />
      <Badge label="1" xxlarge={true} />
      <Badge label="1" xxxlarge={true} />
    </Grid>
  ))
  .add("Notifications", () => (
    <CardList col_4>
      <Card>
        <Badge label="1" notification={true} />
        <Title>Standard</Title>
      </Card>
      <Card>
        <Badge notification={true} maxCount={true} />
        <Title>Max Count</Title>
      </Card>
      <Card>
        <Badge label="NEW" notification={true} />
        <Title>Label</Title>
      </Card>
      <Card>
        <Badge label="EDIT" notification={true} />
        <Title>Label</Title>
      </Card>

      <Card>
        <Badge icon="exclamation" notification={true} />
        <Title>Icon</Title>
      </Card>
      <Card>
        <Badge icon="check" notification={true} />
        <Title>Icon</Title>
      </Card>
      <Card>
        <Badge icon="envelope" notification={true} />
        <Title>Icon</Title>
      </Card>
      <Card>
        <Badge icon="user" notification={true} />
        <Title>Icon</Title>
      </Card>

      <Card>
        <Badge label="1" notification={true} />
        <Title>Top-Right</Title>
      </Card>
      <Card>
        <Badge label="1" notification={true} bottomRight={true} />
        <Title>Bottom-Right</Title>
      </Card>
      <Card>
        <Badge label="1" notification={true} topLeft={true} />
        <Title>Top-Left</Title>
      </Card>
      <Card>
        <Badge label="1" notification={true} bottomLeft={true} />
        <Title>Bottom-Left</Title>
      </Card>
    </CardList>
  ))
