/* eslint-disable linebreak-style */
import React from "react";
import { storiesOf } from "@storybook/react";
import Colors from "./Colors";
import styled from "styled-components";
import Panel from "layout/Panel";
import Title, { SubTitle } from "base/Typography";
import Grid from "layout/Grid";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

const GradientColorGreen = styled.div`
  width: 5em;
  border-radius: 5px;
  height: 5em;
  margin: 5px;
  background-image: linear-gradient(#75ab3f, #b6dc70);
`;

const GradientColorBlue = styled.div`
  width: 5em;
  border-radius: 5px;
  height: 5em;
  margin: 5px;
  background-image: linear-gradient(#2b82b1, #60ccfc);
`;

storiesOf("Application|Style Guides/", module)
  .addDecorator(Padding)
  .add("Color Palette", () => {
    return (
      <Panel>
        <Title text="Color Palette" size="large" styling="underline" />
        <SubTitle text="Color Palette is controled by themeing. Colors vary depending on theme selected." />
        <Title text="Main Colors" size="large" styling="underline" />
        <Grid>
          <Colors color="primary" />
          <Colors color="primaryLight" />
          <Colors color="primaryTint" />
          <Colors color="primaryDark" />

          <Colors color="secondary" />
          <Colors color="secondaryLight" />
          <Colors color="secondaryTint" />
          <Colors color="secondaryDark" />
        </Grid>
        <Title text="Greys" size="large" styling="underline" />
        <Grid>
          <Colors color="grey" />
          <Colors color="grey2" />
          <Colors color="grey3" />
          <Colors color="grey4" />
          <Colors color="grey5" />
          <Colors color="grey6" />
        </Grid>
        <Title text="Notification Colors" size="large" styling="underline" />
        <Grid>
          <Colors color="info" />
          <Colors color="success" />
          <Colors color="warning" />
          <Colors color="alert" />
        </Grid>
      </Panel>
    );
  });
