import React from "react"
import ReactDOM from "react-dom"
import { storiesOf } from "@storybook/react"
import styled, { css } from "styled-components"
import { colors, shadows } from "Variables"
import { Padding } from "helpers/Display"
import Grid from "helpers/Grid"
import Command from "atoms/Command"

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

const IconGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  @media (min-width: 40.063em) {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  }
  @media (min-width: 64.063em) {
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  }
`
const commandProfile = {
  icon: "user",
  label: "Profile"
}
const commandClose = {
  icon: "times",
  label: "Close",
  iconRight: true
}

storiesOf("Application|Libraries/", module)
  .addDecorator(Padding)
  .add("List of Commands", () => (
    <IconGrid>
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
      <Command icon="map-marker" label="Address" />
      <Command icon="print" label="Print" />
      <Command icon="user" label="Profile" />
      <Command icon="users" label="Contacts" />
      <Command icon={["far", "bell"]} label="Notifications" />
      <Command icon={["far", "bookmark"]} label="Bookmark" />
      <Command icon={["far", "cog"]} label="Settings" />
      <Command icon={["far", "map"]} label="GPS" />
      <Command icon={["far", "plus"]} label="Add To List" />
      <Command icon={["far", "share"]} label="Share" />
    </IconGrid>
  ))

storiesOf("Atoms|Command", module)
  .addDecorator(Padding)
  .add("Default Command", () => (
    <Grid col_4>
      <Command />
      <Command iconRight />
      <Command {...commandProfile} />
      <Command {...commandClose} />
    </Grid>
  ))
