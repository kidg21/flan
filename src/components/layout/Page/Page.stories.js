/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Page, { PageSection } from "layout/Page";
import Text, { Title } from "base/Typography";

storiesOf("Layout|Page", module)
  .addDecorator(checkA11y)
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
            size="3x"
            text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
          />
          <Text
            size="3x"
            text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
          />
        </PageSection>
        <PageSection title="Section 2">
          <Text
            size="3x"
            text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
          />
          <Text
            size="3x"
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
          size="3x"
          weight="bold"
          text="My Latest Musings"
        />
        <Text
          size="3x"
          text="Totally Worth The Read...Enjoy!"
        />
        <Text
          size="2x"
          weight="bold"
          text="Just think about these things in your mind - then bring them into your world. Isn't that fantastic? You can just push a little tree out of your brush like that. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. I thought today we would make a happy little stream that's just running through the woods here. Just a little indication."
        />
        <Title
          text="Section 1"
          weight="bold"
        />
        <Text
          size="3x"
          text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Text
          size="3x"
          text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Title
          text="Section 2"
          weight="bold"
        />
        <Text
          size="3x"
          text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
        <Text
          size="3x"
          text="This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy."
        />
      </Page>
    );
  });
