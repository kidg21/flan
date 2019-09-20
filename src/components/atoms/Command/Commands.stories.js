/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, select, optionsKnob as options } from "@storybook/addon-knobs";
import { colors } from "Variables";
import Command from "atoms/Command";
import CommandNotes from "./Command.md";

const Title = styled.h2`
  font-weight: 400;
  grid-column: 1/-1;
`;

const SubTitle = styled.h5`
  grid-column: 1/-1;
  margin: 0;
`;

const SectionTitle = styled.h4`
  grid-column: 1/-1;
  letter-spacing: 1px;
  margin: 0;
  padding-top: 1em;
  border-top: 2px solid ${colors.grey_light};
`;

// Command
storiesOf("Atoms|Command", module)
  .addParameters({
    info: {
      text:
        "A Command is like a Button...only less button-y.  Oh, and it usually has an icon...unless it doesn't.",
    },
    notes: {
      markdown: CommandNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return <Command label="Command" icon="circle_solid" />;
    }),
  )
  .add(
    "Knobs",
    withInfo()(() => {
      return (
        <Command
          name={select(
            "name",
            {
              "add to list": "add to list",
              "address": "address",
              "apn": "apn",
              "bookmark": "bookmark",
              "contacts": "contacts",
              "gps": "gps",
              "menu": "menu",
              "notifications": "notifications",
              "print": "print",
              "profile": "profile",
              "settings": "settings",
              "share": "share",
              "---------------------": "",
              "Custom Command": null,
            },
            "add to list",
            "Standard Props",
          )}
          align={options(
            "align",
            {
              "left ( default )": "default",
              "right": "right",
              "center": "center",
            },
            "default",
            { display: "radio" },
            "Standard Props",
          )}
          size={options(
            "size",
            {
              "small": "small",
              "standard ( default )": "default",
              "large": "large",
            },
            "default",
            { display: "radio" },
            "Standard Props",
          )}
          label={text("label", "Command", "Custom Props")}
          icon={select(
            "icon",
            {
              "check": "check",
              "edit": "edit",
              "home": "home",
              "info circle": "info_circle",
              "mail": "mail",
              "search": "search",
              "circle (solid)": "circle_solid",
            },
            "circle_solid",
            "Custom Props",
          )}
        />
      );
    }),
  )
  .add("Skeleton", () => {
    return <Command icon="" />;
  })
  .add("Alignment", () => {
    return (
      <Grid columns="3">
        <Title>
          <u>Command Alignment</u>
        </Title>
        <SubTitle>
          The standard Command is left-aligned with its Icon on the left. Set the &apos;align&apos;
          prop to &apos;center&apos; in order to center-align the Command placing its Icon atop the
          label. Set the &apos;align&apos; prop to &apos;right&apos; to right-align the Command with
          its Icon on the right.
        </SubTitle>
        <Command label="Icon-Left" icon="circle_solid" />
        <Command label="Icon-Top" icon="circle_solid" align="center" />
        <Command label="Icon-Right" icon="circle_solid" align="right" />
      </Grid>
    );
  })
  .add("State", () => {
    return (
      <Grid>
        <Title>
          <u>Command State</u>
        </Title>
        <SubTitle>
          The standard Command uses an anchor tag and inherits anchor styling. To disable a Command,
          use the &apos;disabled&apos; prop.
        </SubTitle>
        <Command icon="circle_solid" label="Active" />
        <Command icon="circle_solid" label="Disabled" disabled />
      </Grid>
    );
  })
  .add("Size", () => {
    return (
      <Grid>
        <Title>
          <u>Command Size</u>
        </Title>
        <SubTitle>
          To override the standard size, set the &apos;size&apos; prop to &apos;small&apos;, or
          &apos;large&apos;.
        </SubTitle>
        <Command icon="circle_solid" label="Small" size="small" />
        <Command icon="circle_solid" label="Standard" />
        <Command icon="circle_solid" label="Large" size="large" />
      </Grid>
    );
  });

storiesOf("Application|Libraries/", module)
  .addDecorator(Padding)
  .add("Command Library", () => {
    return (
      <Grid>
        <Title>
          <u>List of Commands</u>
        </Title>
        <SubTitle>
          The Command is an interactive UI element that pairs an icon and a label. Use a Command
          when a user&apos;s action is intended to begin an action or workflow.
        </SubTitle>
        <SectionTitle>Standard Commands</SectionTitle>
        <Command name="add to list" />
        <Command name="address" />
        <Command name="apn" />
        <Command name="bookmark" />
        <Command name="profile" />
        <Command name="gps" />
        <Command name="menu" />
        <Command name="notifications" />
        <Command name="print" />
        <Command name="profile" />
        <Command name="settings" />
        <Command name="share" />
      </Grid>
    );
  });
