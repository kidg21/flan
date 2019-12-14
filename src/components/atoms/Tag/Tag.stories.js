/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";


import Grid from "layout/Grid";
import Tag from "./Tag";

storiesOf("Atoms|Tag", module)
  .addDecorator(withInfo)
  .add("Tag", () => {
    return (
      <Grid columns="8">
        <Tag label="Tag life" /> <Tag label="Tag life" type="blue" />{" "}
        <Tag label="Tag life" type="darkblue" />{" "}
        <Tag label="Tag life" type="lightgreen" />
        <Tag label="Tag life" type="green" />{" "}
        <Tag label="Tag life" type="darkgreen" />
        <Tag label="Info" type="info" /> <Tag label="Warning" type="warning" />
        <Tag label="Success" type="success" />{" "}
        <Tag label="Alert" type="alert" />{" "}
      </Grid>
    );
  });
