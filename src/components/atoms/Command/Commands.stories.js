import React from "react"
import { storiesOf } from "@storybook/react"
import styled, { css } from "styled-components"
import { Padding } from "helpers/Display"
import Grid from "helpers/Grid"
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
import { colors, shadows } from "Variables"
import Command from "atoms/Command"
import CommandNotes from "./Command.md"

const Title = styled.h2`
  font-weight: 400;
  grid-column: 1/-1;
`

const SubTitle = styled.h5`
  grid-column: 1/-1;
  margin: 0;
`

const SectionTitle = styled.h4`
  grid-column: 1/-1;
  letter-spacing: 1px;
  margin: 0;
  padding-top: 1em;
  border-top: 2px solid ${colors.grey_light};
`

const CommandGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  @media (min-width: 40.063em) {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  }
  @media (min-width: 64.063em) {
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  }
`

// Command
storiesOf("Atoms|Command", module)
  .addParameters({
    info: {
      text:
        "A Command is like a Button...only less button-y.  Oh, and it usually has an icon...unless it doesn't."
    },
    notes: {
      markdown: CommandNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Documentation", withInfo()(() => <Command />))

  .add("Alignment", () => (
    <Grid>
      <Title>
        <u>Command Alignment</u>
      </Title>
      <SubTitle>
        The standard Command has a left-aligned Icon. To right-align the
        Command's Icon, use the 'iconRight' prop.
      </SubTitle>
      <Command label="Standard" />
      <Command label="Icon-Right" iconRight />
    </Grid>
  ))

  .add("State", () => (
    <Grid>
      <Title>
        <u>Command State</u>
      </Title>
      <SubTitle>
        The standard Command uses an anchor tag and inherits anchor styling. To
        override, use the 'success', 'warning', 'alert', or 'isDisabled' prop.
      </SubTitle>
      <Command label="Standard" />
      <Command label="Success" success />
      <Command label="Warning" warning />
      <Command label="Alert" alert />
      <Command label="Disabled" isDisabled />
    </Grid>
  ))

  .add("Size", () => (
    <Grid col_1>
      <Title>
        <u>Command Size</u>
      </Title>
      <SubTitle>
        To override the standard size, use the 'small', 'large', 'xlarge',
        'xxlarge', or 'xxxlarge' prop.
      </SubTitle>
      <Command label="Small" small />
      <Command label="Standard" />
      <Command label="Large" large />
      <Command label="X-Large" xlarge />
      <Command label="XX-Large" xxlarge />
      <Command label="XXX-Large" xxxlarge />
    </Grid>
  ))

storiesOf("Application|Libraries/", module)
  .addDecorator(Padding)
  .add("List of Commands", () => (
    <CommandGrid>
      <Title>
        <u>List of Commands</u>
      </Title>
      <SubTitle>
        The Command is an interactive UI element that pairs an icon and a label.
        Use a Command when a user's action is intended to run a workflow or
        function.
      </SubTitle>
      <SectionTitle>Standard Commands</SectionTitle>
      <Command icon="bars" label="Menu" />
      <Command icon="hashtag" label="APN" />
      <Command icon="map-marker-alt" label="Address" />
      <Command icon="print" label="Print" />
      <Command icon="user" label="Profile" />
      <Command icon="users" label="Contacts" />
      <Command icon={["far", "bell"]} label="Notifications" />
      <Command icon={["far", "bookmark"]} label="Bookmark" />
      <Command icon={["far", "cog"]} label="Settings" />
      <Command icon={["far", "map"]} label="GPS" />
      <Command icon="plus" label="Add To List" />
      <Command icon={["far", "share"]} label="Share" />
    </CommandGrid>
  ))
