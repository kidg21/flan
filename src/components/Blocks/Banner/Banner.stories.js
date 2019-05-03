import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { Padding } from "helpers/Display"
import Grid from "helpers/Grid"
import Banner from "blocks/Banner"

storiesOf("Blocks|Banner", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Banners", () => (
    <Grid>
      <Banner title="This is a Standard notification telling you stuff." />
      <Banner title="This is a Floating notification." isFloating={true} />
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
      <Banner
        title="This is a Standard Info notification."
        cta="Learn More"
        info={true}
      />
      <Banner
        title="This is a Standard Success notification."
        cta="Learn More"
        success={true}
      />
      <Banner
        title="This is a Standard Warning notification."
        cta="Learn More"
        warning={true}
      />
      <Banner
        title="This is a Standard Error notification."
        cta="Learn More"
        error={true}
      />
      <Banner
        icon="home"
        title="This is an Inverse notification."
        cta="Learn More"
        inverse={true}
      />
    </Grid>
  ))
  .add("Info Banner", () => (
    <Banner title="This is a Standard Info notification." info={true} />
  ))
  .add("Success Banner", () => (
    <Banner title="This is a Standard Success notification." success={true} />
  ))
  .add("Warning Banner", () => (
    <Banner title="This is a Standard Warning notification." warning={true} />
  ))
  .add("Error Banner", () => (
    <Banner title="This is a Standard Error notification." error={true} />
  ))
  .add("Inverse Banner", () => (
    <Banner title="This is a Standard Inverse notification." inverse={true} />
  ))
