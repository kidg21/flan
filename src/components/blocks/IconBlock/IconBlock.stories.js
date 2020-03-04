/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";


import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";

const iconNames = [
  {
    icon: "bookmark",
    onClick: true,
  },
  {
    icon: "calendar",
    disabled: true,
  },
  {
    icon: "call",
    spin: true,
  },
  {
    icon: "delete",
    type: "alert",
  },
  {
    icon: "chat",
    pulse: true,
  },
  {
    icon: "edit",
  },
];

storiesOf("Blocks|Icon Block", module)
  .addDecorator(Padding)
  .add("Icons via Array", () => {
    return (
      <Grid gap="large">
        <IconBlock data={iconNames} />
      </Grid>
    );
  })
  .add("Icons as children", () => {
    return (
      <Grid>
        <IconBlock>
          <Icon icon="circle_solid" />
        </IconBlock>
        <IconBlock>
          <Icon icon="circle_solid" />
          <Icon icon="circle_solid" type="info" />
        </IconBlock>
        <IconBlock>
          <Icon icon="circle_solid" />
          <Icon icon="circle_solid" type="info" />
          <Icon icon="circle_solid" type="success" />
        </IconBlock>
        <IconBlock>
          <Icon icon="circle_solid" />
          <Icon icon="circle_solid" type="info" />
          <Icon icon="circle_solid" type="success" />
          <Icon icon="circle_solid" type="warning" />
        </IconBlock>
        <IconBlock>
          <Icon icon="circle_solid" />
          <Icon icon="circle_solid" type="info" />
          <Icon icon="circle_solid" type="success" />
          <Icon icon="circle_solid" type="warning" />
          <Icon icon="circle_solid" type="alert" />
        </IconBlock>
        <IconBlock>
          <Icon icon="circle_solid" />
          <Icon icon="circle_solid" type="info" />
          <Icon icon="circle_solid" type="success" />
          <Icon icon="circle_solid" type="warning" />
          <Icon icon="circle_solid" type="alert" />
          <Icon icon="circle_solid" />
        </IconBlock>
      </Grid>
    );
  })
  .add("Size", () => {
    return (
      <Grid columns="1" gap="large">
        <IconBlock data={iconNames} />
        <IconBlock data={iconNames} size="lg" />
        <IconBlock data={iconNames} size="2x" />
        <IconBlock data={iconNames} size="3x" />
        <IconBlock data={iconNames} size="4x" />
        <IconBlock data={iconNames} size="5x" />
      </Grid>
    );
  });
