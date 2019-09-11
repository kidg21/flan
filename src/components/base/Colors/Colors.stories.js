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
        <Title text="App Background Colors" size="large" styling="underline" />
        <Grid>
          <Colors color="#ffffff" comment="background.default" />
          <Colors color="#f4f6fc" comment="background.app" />
          <Colors color="#E2E1DF" comment="divider" />
        </Grid>
        <Title text="Text Colors" size="large" styling="underline" />
        <Grid>
          <Colors color="#5e5a62" comment="text.primary" />
          <Colors color="#99958f" comment="text.secondary" />
          <Colors color="#ffffff" comment="text.inverse" />
          <Colors color="#5FD1E2" comment="text.link" />
          <Colors color="#E2E1DF" comment="text.disabled" />
        </Grid>
        <Title text="Palette Colors" size="large" styling="underline" />
        <Grid>
          <Colors color="#2B82B1" comment="palette.primary" />
          <Colors color="#66b1e3" comment="palette.primary light" />
          <Colors color="#005681" comment="palette.primary dark" />

          <Colors color="#6c9b39" comment="palette.secondary" />
          <Colors color="#9dcc67" comment="palette.secondary light" />
          <Colors color="#3d6c05" comment="palette.secondary dark" />

          <Colors color="#ffffff" comment="palette.white" />
          <Colors color="#000000" comment="palette.black" />
          <Colors color="#E2E1DF" comment="palette.disabled" />
          <Colors color="#99958F" comment="palette.grey" />
          <Colors color="#206bca" comment="palette.info" />
          <Colors color="#b41313" comment="palette.alert" />
          <Colors color="#ca8720" comment="palette.warning" />
          <Colors color="#07843f" comment="palette.success" />
        </Grid>
        {/* <Title text="Accent Colors" size="large" styling="underline" />
        <Grid>
          <Colors color="#eff1ed" />
          <Colors color="#f45b69" />
          <Colors color="#C9F0FF" />
          <Colors color="#eaf4d3" />
          <Colors color="#d32f2f" />
          <Colors color="#78c0e0" />
          <Colors color="#9ece9a" />
        </Grid> */}
      </Panel>
    );
  });
