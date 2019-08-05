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
    withInfo()(() => (
      <Banner title="This is a Standard notification telling you stuff." />
    )),
  )
  .add("Skeleton", withInfo()(() => <Banner />))
  .add("Standard Banners", () => (
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
  ))
  .add("Inverse Banners", () => (
    <Grid>
      <Banner
        title="This is a Standard notification telling you stuff."
        inverse={true}
      />
      <Banner
        title="This is a Standard notification that includes a description."
        description="Additional information can go here, if necessary."
        inverse={true}
      />
      <Banner
        title="This is a notification that includes a Call-to-Action link."
        description="Additional information can go here, if necessary."
        link="Learn More"
        inverse={true}
      />
    </Grid>
  ))
  .add("Info Banner", () => (
    <Grid>
      <Banner type="info" title="This is a Standard Info notification." />
      <Banner
        type="info"
        title="This is an Inverse Info notification."
        inverse={true}
      />
    </Grid>
  ))
  .add("Success Banner", () => (
    <Grid>
      <Banner type="success" title="This is a Standard Success notification." />
      <Banner
        type="success"
        title="This is an Inverse Success notification."
        inverse={true}
      />
    </Grid>
  ))
  .add("Warning Banner", () => (
    <Grid>
      <Banner type="warning" title="This is a Standard Warning notification." />
      <Banner
        type="warning"
        title="This is an Inverse Warning notification."
        inverse={true}
      />
    </Grid>
  ))
  .add("Alert Banner", () => (
    <Grid>
      <Banner type="alert" title="This is a Standard Error notification." />
      <Banner
        type="alert"
        title="This is an Inverse Error notification."
        inverse={true}
      />
    </Grid>
  ))
  .add("Icon Banner", () => (
    <Grid>
      <Banner
        type="media"
        icon="home"
        title="This notification is displaying an optional icon."
        description="Additional information can go here, if necessary."
        link="Learn More"
      />
      <Banner
        type="media"
        icon="home"
        title="This notification is displaying an optional icon."
        description="Additional information can go here, if necessary."
        link="Learn More"
        inverse={true}
      />
    </Grid>
  ))
  .add("Image Banner", () => (
    <Grid>
      <Banner
        type="media"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
        title="This notification is displaying an optional image."
        description="Additional information can go here, if necessary."
        link="Learn More"
      />
      <Banner
        type="media"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
        title="This notification is displaying an optional image."
        description="Additional information can go here, if necessary."
        link="Learn More"
        inverse={true}
      />
    </Grid>
  ))
  .add("The Banner Family", () => (
    <Grid>
      <Banner title="This is a Standard notification telling you stuff." />
      <Banner
        title="This is an Inverse notification telling you stuff."
        inverse={true}
      />
      <Banner
        title="This is a Standard notification that includes a description."
        description="Additional information can go here, if necessary."
      />
      <Banner
        title="This is an Inverse notification that includes a description."
        description="Additional information can go here, if necessary."
        inverse={true}
      />
      <Banner
        title="This is a Standard notification that includes a description."
        description="Additional information can go here, if necessary."
        link="Learn More"
      />
      <Banner
        title="This is an Inverse notification that includes a description."
        description="Additional information can go here, if necessary."
        link="Learn More"
        inverse={true}
      />
      <Banner type="info" title="This is a Standard Info notification." />
      <Banner
        type="info"
        title="This is an Inverse Info notification."
        inverse={true}
      />
      <Banner type="success" title="This is a Standard Success notification." />
      <Banner
        type="success"
        title="This is an Inverse Success notification."
        inverse={true}
      />
      <Banner type="warning" title="This is a Standard Warning notification." />
      <Banner
        type="warning"
        title="This is an Inverse Warning notification."
        inverse={true}
      />
      <Banner type="alert" title="This is a Standard Error notification." />
      <Banner
        type="alert"
        title="This is an Inverse Error notification."
        inverse={true}
      />
      <Banner
        type="media"
        icon="home"
        title="This notification is displaying an optional icon."
        description="Additional information can go here, if necessary."
        link="Learn More"
      />
      <Banner
        type="media"
        icon="home"
        title="This notification is displaying an optional icon."
        description="Additional information can go here, if necessary."
        link="Learn More"
        inverse={true}
      />
      <Banner
        type="media"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
        title="This notification is displaying an optional image."
        description="Additional information can go here, if necessary."
        link="Learn More"
      />
      <Banner
        type="media"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
        title="This notification is displaying an optional image."
        description="Additional information can go here, if necessary."
        link="Learn More"
        inverse={true}
      />
    </Grid>
  ));
