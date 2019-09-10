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
        <Grid columns="1">
          <Title text="Color Palette" size="large" styling="underline" />
          <SubTitle text="Color Palette is controled by themeing. Colors vary depending on theme selected." />
        </Grid>
        <Grid>
          <Colors type="background" />
          <Colors type="appBackground" />
          <Colors type="textColor" />
          <Colors type="disabled" />
          <Colors type="divider" />
          <Colors type="primary" />
          <Colors type="primary" shade="darken" comment="dark (hover)" />
          <Colors type="primary" shade="lighten" comment="light (active)" />
          <Colors type="secondary" />
          <Colors type="secondary" shade="darken" comment="dark (hover)" />
          <Colors type="secondary" shade="lighten" comment="light (active)" />
          <Colors type="info" />
          <Colors type="warning" />
          <Colors type="alert" />
          <Colors type="success" />
        </Grid>
      </Panel>
    );
  });
