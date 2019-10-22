/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import Banner from "blocks/Banner";
import BannerNotes from "./Banner.md";

storiesOf("Blocks|Banner", module)
  .addParameters({
    info: {
      text: "Banner info goes here...",
    },
    notes: {
      markdown: BannerNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return <Banner title="This is a Standard notification telling you stuff." />;
    }),
  )
  .add("Standard Banners", () => {
    return (
      <Grid>
        <Banner title="This is a Standard notification telling you stuff." />
        <Banner
          title="This is a Standard notification that includes a description."
          description="Additional information can go here, if necessary."
        />
        <Banner
          title="This is a notification that includes a Call-to-Action link."
          description="Additional information can go here, if necessary."
          link="Learn More"
        />
      </Grid>
    );
  })
  .add("Info Banner", () => {
    return (
      <Grid>
        <Banner type="info" title="This is a Standard Info notification." />
      </Grid>
    );
  })
  .add("Success Banner", () => {
    return (
      <Grid>
        <Banner type="success" title="This is a Standard Success notification." />
      </Grid>
    );
  })
  .add("Warning Banner", () => {
    return (
      <Grid>
        <Banner type="warning" title="This is a Standard Warning notification." />
      </Grid>
    );
  })
  .add("Alert Banner", () => {
    return (
      <Grid>
        <Banner type="alert" title="This is a Standard Error notification." />
      </Grid>
    );
  })
  .add("Icon Banner", () => {
    return (
      <Grid>
        <Banner
          type="media"
          icon="user"
          title="This notification is displaying an optional icon."
          description="Additional information can go here, if necessary."
          link="Learn More"
        />
      </Grid>
    );
  })
  .add("Image Banner", () => {
    return (
      <Grid>
        <Banner
          type="media"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
          title="This notification is displaying an optional image."
          description="Additional information can go here, if necessary."
          link="Learn More"
        />
      </Grid>
    );
  })

  .add("The Banner Family", () => {
    return (
      <Grid>
        <Banner title="This is a Standard notification telling you stuff." />
        <Banner
          title="This is a Standard notification that includes a description."
          description="Additional information can go here, if necessary."
        />
        <Banner
          title="This is a Standard notification that includes a description."
          description="Additional information can go here, if necessary."
          link="Learn More"
        />
        <Banner type="info" title="This is a Standard Info notification." />
        <Banner type="success" title="This is a Standard Success notification." />
        <Banner type="warning" title="This is a Standard Warning notification." />
        <Banner type="alert" title="This is a Standard Error notification." />
        <Banner
          type="media"
          icon="user"
          title="This notification is displaying an optional icon."
          description="Additional information can go here, if necessary."
          link="Learn More"
        />
        <Banner
          type="media"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
          title="This notification is displaying an optional image."
          description="Additional information can go here, if necessary."
          link="Learn More"
        />
      </Grid>
    );
  });
