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
    variant: "alert",
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
      <Grid gap="xl">
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
          <Icon icon="circle_solid" variant="info" />
        </IconBlock>
        <IconBlock>
          <Icon icon="circle_solid" />
          <Icon icon="circle_solid" variant="info" />
          <Icon icon="circle_solid" variant="success" />
        </IconBlock>
        <IconBlock>
          <Icon icon="circle_solid" />
          <Icon icon="circle_solid" variant="info" />
          <Icon icon="circle_solid" variant="success" />
          <Icon icon="circle_solid" variant="warning" />
        </IconBlock>
        <IconBlock>
          <Icon icon="circle_solid" />
          <Icon icon="circle_solid" variant="info" />
          <Icon icon="circle_solid" variant="success" />
          <Icon icon="circle_solid" variant="warning" />
          <Icon icon="circle_solid" variant="alert" />
        </IconBlock>
        <IconBlock>
          <Icon icon="circle_solid" />
          <Icon icon="circle_solid" variant="info" />
          <Icon icon="circle_solid" variant="success" />
          <Icon icon="circle_solid" variant="warning" />
          <Icon icon="circle_solid" variant="alert" />
          <Icon icon="circle_solid" />
        </IconBlock>
      </Grid>
    );
  })
  .add("Size", () => {
    return (
      <Grid columns="1" gap="xl">
        <IconBlock data={iconNames} size="xs" />
        <IconBlock data={iconNames} size="sm" />
        <IconBlock data={iconNames} />
        <IconBlock data={iconNames} size="lg" />
        <IconBlock data={iconNames} size="xl" />
        <IconBlock data={iconNames} size="2xl" />
        <IconBlock data={iconNames} size="3xl" />
        <IconBlock data={iconNames} size="4xl" />
      </Grid>
    );
  });
