import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { Padding } from "helpers/Display"
import Grid from "helpers/Grid"
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs"
import Banner from "blocks/Banner"
import BannerNotes from "./Banner.md"

storiesOf("Blocks|Banner", module)
  .addParameters({
    info: {
      text: "Banner info goes here..."
    },
    notes: {
      markdown: BannerNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Documentation", withInfo()(() => <Banner />))
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
        cta="Learn More"
      />
      <Banner
        icon="home"
        title="This notification is displaing an optional icon."
        description="Additional information can go here, if necessary."
        cta="Learn More"
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
        cta="Learn More"
        inverse={true}
      />
      <Banner
        icon="home"
        title="This notification is displaing an optional icon."
        description="Additional information can go here, if necessary."
        cta="Learn More"
        inverse={true}
      />
    </Grid>
  ))
  .add("Info Banner", () => (
    <Grid>
      <Banner title="This is a Standard Info notification." info={true} />
      <Banner
        title="This is an Inverse Info notification."
        info={true}
        inverse={true}
      />
    </Grid>
  ))
  .add("Success Banner", () => (
    <Grid>
      <Banner title="This is a Standard Success notification." success={true} />
      <Banner
        title="This is an Inverse Success notification."
        success={true}
        inverse={true}
      />
    </Grid>
  ))
  .add("Warning Banner", () => (
    <Grid>
      <Banner title="This is a Standard Warning notification." warning={true} />
      <Banner
        title="This is an Inverse Warning notification."
        warning={true}
        inverse={true}
      />
    </Grid>
  ))
  .add("Error Banner", () => (
    <Grid>
      <Banner title="This is a Standard Error notification." error={true} />
      <Banner
        title="This is an Inverse Error notification."
        error={true}
        inverse={true}
      />
    </Grid>
  ))
