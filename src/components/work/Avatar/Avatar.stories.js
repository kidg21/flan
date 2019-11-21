/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import Grid from "layout/Grid";
import Avatar from "./Avatar.jsx";

storiesOf("Atoms|Avatar", module)
  .addParameters({
    info: {
      text: "Avatar info goes here...",
    },
  })
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <Grid>
          <Avatar label="LG" />
          <Avatar
            label="HF"
            color="secondaryDark"
            backgroundColor="secondaryLight"
          />
          <Avatar label="TX" color="alertDark" backgroundColor="alertTint" />
          <Avatar icon="mail" />
          <Avatar
            icon="user"
            color="secondaryDark"
            backgroundColor="secondaryLight"
          />
        </Grid>
      );
    }),
  );
