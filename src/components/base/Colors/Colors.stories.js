/* eslint-disable linebreak-style */
import React from "react";
import { storiesOf } from "@storybook/react";
import Colors from "./Colors";

import Panel from "layout/Panel";
import Title from "base/Typography";
import Grid from "layout/Grid";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

storiesOf("Application|Style Guides/", module)
  .addDecorator(withInfo)
  .addDecorator(Padding)
  .add("Color Palette", () => {
    return (
      <Panel>
        <Grid>
          <Grid columns="2">
            <Title text="App Colors :" size="xxlarge" />
            <div>
              <Colors type="background" />
              <Colors type="textColor" />
            </div>
          </Grid>
          <Grid columns="2">
            <Title text="Primary :" size="xxlarge" />
            <div>
              <Colors type="primary" shade="darken" />
              <Colors type="primary" />
              <Colors type="primary" shade="lighten" />
            </div>
          </Grid>
          <Grid columns="2">
            <Title text="Secondary :" size="xxlarge" />
            <div>
              <Colors type="secondary" shade="darken" />
              <Colors type="secondary" />
              <Colors type="secondary" shade="lighten" />
            </div>
          </Grid>
          <Grid columns="2">
            <Title text="Alert Colors :" size="xxlarge" />
            <div>
              <Colors type="info" />
              <Colors type="warning" />
              <Colors type="alert" />
              <Colors type="success" />
            </div>
          </Grid>
        </Grid>
      </Panel>
    );
  });
