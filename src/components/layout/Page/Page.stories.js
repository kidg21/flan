/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { FullScreen } from "helpers/Display";
import Page, { PageSection } from "layout/Page";
import Bar from "layout/Bar";
import Text, { Title } from "base/Typography";
import List, { ListItem } from "blocks/List";
import Card from "elements/Card";

const map = (
  <Mapbox />
);

storiesOf("Layout|Page", module)
  .addDecorator(checkA11y)
  .addDecorator(FullScreen)
  .add("Page Regions", () => {
    return (
      <Page
        id="Page Regions"
        template="02"
        header={{
          id: "Header",
          content: (
            <Bar
              contentAlign="center"
              padding="2x"
              left={{
                content: (
                  <React.Fragment>
                    <Title text="My Latest Musings" size="xl" weight="bold" />
                    <Text text="My Latest Musings" weight="light" />
                    <Text text="Just think about these things in your mind - then bring them into your world. Isn't that fantastic? You can just push a little tree out of your brush like that. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. I thought today we would make a happy little stream that's just running through the woods here. Just a little indication" size="sm" weight="bold" />
                  </React.Fragment>
                ),
              }}
            />
          ),
        }}
        A={{
          id: "A",
          content: (
            <React.Fragment>
              <List title="1: Confirm" isInteractive>
                <ListItem
                  title="Verify Site"
                />
              </List>
              <List title="2: Review" isInteractive>
                <ListItem
                  title="Assessment"
                />
                <ListItem
                  title="Zoning"
                />
                <ListItem
                  title="Demographics"
                />
                <ListItem
                  title="Maps"
                />
              </List>
              <List title="3: Export" isInteractive>
                <ListItem
                  title="View Report(s)"
                />
              </List>
            </React.Fragment>
          ),
        }}
        B={{
          id: "B",
          content: map,
        }}
        C={{
          id: "C",
          content: (
            <React.Fragment>
              <Card
                media="https://cdn.facilityexecutive.com/wp-content/uploads/2019/09/38391858_ml-800x418-1-574x300.jpg" // Image
                mediaDesc="Media Description"
                title="Best Place Ever"
                description="I Could Tell You More, But..."
                icon="bookmark_solid"
                shadow="0"
              />
            </React.Fragment>
          ),
        }}
      />
    );
  })
  .add("Page Templates", () => {
    return (
      <Page id="Page Templates" template="">
        <Text
          text="A. This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Text
          text="B. This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Text
          text="C. This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Text
          text="D. This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Text
          text="E. This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
      </Page>
    );
  })
  .add("Using Header Props", () => {
    return (
      <Page
        id="A Page"
        header={{
          title: "My Latest Musings",
          subtitle: "Totally Worth The Read...Enjoy!",
          description: "Just think about these things in your mind - then bring them into your world. Isn't that fantastic? You can just push a little tree out of your brush like that. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. I thought today we would make a happy little stream that's just running through the woods here. Just a little indication.",
        }}
      >
        <PageSection title="Section 1">
          <Text
            text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
          />
          <Text
            text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
          />
        </PageSection>
        <PageSection title="Section 2">
          <Text
            text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
          />
          <Text
            text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
          />
        </PageSection>
      </Page>
    );
  })
  .add("All Content Passed As Children", () => {
    return (
      <Page>
        <Title
          size="xl"
          weight="bold"
          text="My Latest Musings"
        />
        <Text
          weight="light"
          text="Totally Worth The Read...Enjoy!"
        />
        <Text
          size="sm"
          weight="bold"
          text="Just think about these things in your mind - then bring them into your world. Isn't that fantastic? You can just push a little tree out of your brush like that. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. I thought today we would make a happy little stream that's just running through the woods here. Just a little indication."
        />
        <Title
          text="Section 1"
          size="lg"
        />
        <Text
          text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Text
          text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Title
          text="Section 2"
          size="lg"
        />
        <Text
          text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Text
          text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
      </Page>
    );
  });
