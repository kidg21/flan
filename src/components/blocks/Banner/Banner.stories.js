/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import { CardList } from "elements/Card";
import Banner from "blocks/Banner";

const BannerNotes = markdown.require("./Banner.md");

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
      return <Banner title="This is a Banner." />;
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
        icon={select(
            "icon",
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
          text("title text", "This is a Banner", "Settings")
        }
        description={
          text(
            "description",
            "A description can go here, if necessary.",
            "Settings",
          )
        }
        link={text("link", "Link Text", "Settings")}
      />
    );
  })
  .add("Standard Banners", () => {
    return (
      <CardList>
        <Banner title="This is a Banner." />
        <Banner
          title="This is a Banner."
          description="A description can go here, if necessary."
        />
        <Banner
          title="This is a Banner."
          description="A description can go here, if necessary."
          link="Link Text"
        />
      </CardList>
    );
  })
  .add("Icon Banner", () => {
    return (
      <CardList>
        <Banner
          icon="user"
          title="This is a Banner."
          description="A description can go here, if necessary."
          link="Link Text"
        />
      </CardList>
    );
  })
  .add("Info Banner", () => {
    return (
      <CardList>
        <Banner type="info" title="This is an Info Banner." />
      </CardList>
    );
  })
  .add("Success Banner", () => {
    return (
      <CardList>
        <Banner type="success" title="This is a Success Banner." />
      </CardList>
    );
  })
  .add("Warning Banner", () => {
    return (
      <CardList>
        <Banner type="warning" title="This is a Warning Banner." />
      </CardList>
    );
  })
  .add("Alert Banner", () => {
    return (
      <CardList>
        <Banner type="alert" title="This is an Alert Banner." />
      </CardList>
    );
  })

  .add("The Banner Family", () => {
    return (
      <CardList>
        <Banner title="This is a Banner." />
        <Banner
          title="This is a Banner."
          description="A description can go here, if necessary."
        />
        <Banner
          title="This is a Banner."
          description="A description can go here, if necessary."
          link="Link Text"
        />
        <Banner
          icon="user"
          title="This is a Banner."
          description="A description can go here, if necessary."
          link="Link Text"
        />
        <Banner
          type="info"
          title="This is an Info Banner."
          description="A description can go here, if necessary."
          link="Link Text"
        />
        <Banner
          type="success"
          title="This is a Success Banner."
          description="A description can go here, if necessary."
          link="Link Text"
        />
        <Banner
          type="warning"
          title="This is a Warning Banner."
          description="A description can go here, if necessary."
          link="Link Text"
        />
        <Banner
          type="alert"
          title="This is an Alert Banner."
          description="A description can go here, if necessary."
          link="Link Text"
        />
      </CardList>
    );
  });
