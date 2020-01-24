/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";


import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import { Title } from "base/Typography";
import Card from "elements/Card";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
/** TODO: Add documentation */
// import IconNotes from "atoms/Icon/Icon.md";

storiesOf("Blocks|Icon Block", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Icon Block", () => {
    return (
      <Grid columns="1">
        <Title text="Icon Block" styling="underline" />
        <Title text="Distributes icons horizontally" />
        <Grid columns="3">
          <Card>
            <IconBlock>
              <Icon icon="circle_solid" />
            </IconBlock>
          </Card>
          <Card>
            <IconBlock>
              <Icon icon="circle_solid" />
              <Icon icon="circle_solid" type="info" />
            </IconBlock>
          </Card>
          <Card>
            <IconBlock>
              <Icon icon="circle_solid" />
              <Icon icon="circle_solid" type="info" />
              <Icon icon="circle_solid" type="success" />
            </IconBlock>
          </Card>
          <Card>
            <IconBlock>
              <Icon icon="circle_solid" />
              <Icon icon="circle_solid" type="info" />
              <Icon icon="circle_solid" type="success" />
              <Icon icon="circle_solid" type="warning" />
            </IconBlock>
          </Card>
          <Card>
            <IconBlock>
              <Icon icon="circle_solid" />
              <Icon icon="circle_solid" type="info" />
              <Icon icon="circle_solid" type="success" />
              <Icon icon="circle_solid" type="warning" />
              <Icon icon="circle_solid" type="alert" />
            </IconBlock>
          </Card>
          <Card>
            <IconBlock>
              <Icon icon="circle_solid" />
              <Icon icon="circle_solid" type="info" />
              <Icon icon="circle_solid" type="success" />
              <Icon icon="circle_solid" type="warning" />
              <Icon icon="circle_solid" type="alert" />
              <Icon icon="circle_solid" />
            </IconBlock>
          </Card>
        </Grid>
      </Grid>
    );
  });
