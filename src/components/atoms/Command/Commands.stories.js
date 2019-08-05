import React from "react";
import { storiesOf } from "@storybook/react";
import styled, { css } from "styled-components";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  button,
  array,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { colors, shadows } from "Variables";
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
    withInfo()(() => (
      <Command
        name={select(
          "name",
          {
            "add to list": "add to list",
            address: "address",
            apn: "apn",
            bookmark: "bookmark",
            contacts: "contacts",
            gps: "gps",
            menu: "menu",
            notifications: "notifications",
            print: "print",
            profile: "profile",
            settings: "settings",
            share: "share",
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
            right: "right",
            center: "center",
          },
          "default",
          { display: "radio" },
          "Standard Props",
        )}
        state={options(
          "state",
          {
            "active ( default )": "default",
            disabled: "disabled",
          },
          "default",
          { display: "radio" },
          "Standard Props",
        )}
        size={options(
          "size",
          {
            small: "small",
            "standard ( default )": "default",
            large: "large",
          },
          "default",
          { display: "radio" },
          "Standard Props",
        )}
        label={text("label", "Custom", "Custom Props")}
        icon={select(
          "icon",
          {
            "user-circle": "user-circle",
            check: "check",
            code: ["far", "code"],
            flag: "flag",
            home: "home",
            cog: "cog",
            phone: "phone",
          },
          "user-circle",
          "Custom Props",
        )}
      />
    )),
  )
  .add("Skeleton", () => <Command />)
  .add("Alignment", () => (
    <Grid columns="3">
      <Title>
        <u>Command Alignment</u>
      </Title>
      <SubTitle>
        The standard Command is left-aligned with its Icon on the left. Set the
        'align' prop to 'center' in order to center-align the Command placing
        its Icon atop the label. Set the 'align' prop to 'right' to right-align
        the Command with its Icon on the right.
      </SubTitle>
      <Command label="Icon-Left" />
      <Command label="Icon-Top" align="center" />
      <Command label="Icon-Right" align="right" />
    </Grid>
  ))

  .add("State", () => (
    <Grid>
      <Title>
        <u>Command State</u>
      </Title>
      <SubTitle>
        The standard Command uses an anchor tag and inherits anchor styling. To
        disable a Command, use the 'disabled' prop.
      </SubTitle>
      <Command label="Active" />
      <Command label="Disabled" state="disabled" />
    </Grid>
  ))
  .add("Size", () => (
    <Grid>
      <Title>
        <u>Command Size</u>
      </Title>
      <SubTitle>
        To override the standard size, set the 'size' prop to 'small', or
        'large'.
      </SubTitle>
      <Command label="Small" size="small" />
      <Command label="Standard" />
      <Command label="Large" size="large" />
    </Grid>
  ));

storiesOf("Application|Libraries/", module)
  .addDecorator(Padding)
  .add("List of Commands", () => (
    <Grid>
      <Title>
        <u>List of Commands</u>
      </Title>
      <SubTitle>
        The Command is an interactive UI element that pairs an icon and a label.
        Use a Command when a user's action is intended to run a workflow or
        function.
      </SubTitle>
      <SectionTitle>Standard Commands</SectionTitle>
      <Command name="add to list" />
      <Command name="address" />
      <Command name="apn" />
      <Command name="bookmark" />
      <Command name="contacts" />
      <Command name="gps" />
      <Command name="menu" />
      <Command name="notifications" />
      <Command name="print" />
      <Command name="profile" />
      <Command name="settings" />
      <Command name="share" />
    </Grid>
  ));
