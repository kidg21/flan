/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";
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
      return <Banner title="This is a notification." />;
    }),
  )
  .add("Knobs", () => {
    return (
      <Banner
        type={select(
          "type",
          {
            standard: null,
            info: "info",
            success: "success",
            warning: "warning",
            alert: "alert",
          },
          null,
          "Settings",
        )}
        icon={
          boolean("icon", false, "Options") &&
          select(
            "icon select",
            {
              user: "user",
              down: "down",
              bookmark: "bookmark_solid",
              plus: "plus",
              print: "print",
            },
            "user",
            "Settings",
          )
        }
        title={
          boolean("title", true, "Options") &&
          text("title text", "This is a notification", "Settings")
        }
        description={
          boolean("description", false, "Options") &&
          text("description text", "A description can go here, if necessary.", "Settings")
        }
        link={boolean("link", false, "Options") && text("link text", "Link Text", "Settings")}
      />
    );
  })
  .add("Standard Banners", () => {
    return (
      <Grid>
        <Banner title="This is a notification." />
        <Banner
          title="This is a notification."
          description="A description can go here, if necessary."
        />
        <Banner
          title="This is a notification."
          description="A description can go here, if necessary."
          link="Link Text"
        />
      </Grid>
    );
  })
  .add("Icon Banner", () => {
    return (
      <Grid>
        <Banner
          type="media"
          icon="user"
          title="This is a notification."
          description="A description can go here, if necessary."
          link="Link Text"
        />
      </Grid>
    );
  })
  .add("Info Banner", () => {
    return (
      <Grid>
        <Banner type="info" title="This is a notification." />
      </Grid>
    );
  })
  .add("Success Banner", () => {
    return (
      <Grid>
        <Banner type="success" title="This is a notification." />
      </Grid>
    );
  })
  .add("Warning Banner", () => {
    return (
      <Grid>
        <Banner type="warning" title="This is a notification." />
      </Grid>
    );
  })
  .add("Alert Banner", () => {
    return (
      <Grid>
        <Banner type="alert" title="This is a notification." />
      </Grid>
    );
  })

  .add("The Banner Family", () => {
    return (
      <Grid>
        <Banner title="This is a notification." />
        <Banner
          title="This is a notification."
          description="A description can go here, if necessary."
        />
        <Banner
          title="This is a notification."
          description="A description can go here, if necessary."
          link="Link Text"
        />
        <Banner
          icon="user"
          title="This is a notification."
          description="A description can go here, if necessary."
          link="Link Text"
        />
        <Banner
          type="info"
          title="This is an Info notification."
          description="A description can go here, if necessary."
          link="Link Text"
        />
        <Banner
          type="success"
          title="This is a Success notification."
          description="A description can go here, if necessary."
          link="Link Text"
        />
        <Banner
          type="warning"
          title="This is a Warning notification."
          description="A description can go here, if necessary."
          link="Link Text"
        />
        <Banner
          type="alert"
          title="This is an Alert notification."
          description="A description can go here, if necessary."
          link="Link Text"
        />
      </Grid>
    );
  });
