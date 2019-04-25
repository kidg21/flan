import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { Padding } from "helpers/Display"
import Grid from "helpers/Grid"
import Badge from "./Badge"
import BadgeNotes from "./Badge.md"

// Badge
storiesOf("Atoms|Badge", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add(
    "Badge",
    () => (
      <Grid>
        <Badge label="1" />
        <Badge label="25" inverse={true} />
        <Badge label="LT" light={true} />
        <Badge label="WN" warning={true} />
        <Badge label="AL" alert={true} />
        <Badge label="AN" anchor={true} />
        <Badge label="SC" success={true} />
      </Grid>
    ),
    { notes: { markdown: BadgeNotes } }
  )
  .add("Icon Badge", () => (
    <Grid>
      <Badge icon={["far", "info"]} />
      <Badge icon="times" inverse={true} />
      <Badge icon="user" light={true} />
      <Badge icon="check" warning={true} />
      <Badge icon="exclamation" alert={true} />
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
