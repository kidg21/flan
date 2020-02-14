/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Grid from "layout/Grid";
import Avatar from "./Avatar.jsx";

storiesOf("Atoms|Avatar", module)
  .addDecorator(withKnobs)
  .add(
    "Documentation",() => {
      return (
        <Grid>
          <Avatar label="LG" />
          <Avatar label="HF" color="warning" />
          <Avatar label="TX" color="success" />
          <Avatar icon="mail" />
          <Avatar icon="user" color="alert" />
        </Grid>
      );
    });
