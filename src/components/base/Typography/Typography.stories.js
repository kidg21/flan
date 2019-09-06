/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import Panel from "layout/Panel";
import { withInfo } from "@storybook/addon-info";
import Grid from "layout/Grid";
import Title, { Headline, SubTitle, Description, Link, Number } from "base/Typography";

/** TODO: Add 'Documentation' and 'Knobs' stories */
storiesOf("Application|Style Guides/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Typography", () => {
    return (
      <Grid columns="1">
        <Headline text="Numbers" />
        <Number text="1234567890" />
        <Number text="3.14" />
        <Number text="1/2" />
        <Headline text="Components" />
        <Title text="This is a Title with text being passed through a prop" />
        <Title text="This is a Title that displays a count" count="1" />
        <Title>
          This is a Title that wraps a text string and an inline
          <Link
            text="This is a standard Link"
            title="Stuff about anchor tags"
            href="https://www.w3.org/MarkUp/1995-archive/Elements/A.html"
            target="_blank"
          />
          component as a child.
        </Title>
        <SubTitle text="This is a Subitle" />
        <SubTitle text="This is a Subitle that displays a count" count="2" />
        <SubTitle>
          This is a SubTitle that wraps a text string and an inline
          <Link
            text="Link"
            title="Stuff about anchor tags"
            href="https://www.w3.org/MarkUp/1995-archive/Elements/A.html"
            target="_blank"
          />
          component as a child.
        </SubTitle>
        <Description text="This is a Description" />
        <Description text="This is a Description that displays a count" count="3" />
        <Description>
          This is a Description that wraps a text string and an inline
          <Link
            text="Link"
            title="Stuff about anchor tags"
            href="https://www.w3.org/MarkUp/1995-archive/Elements/A.html"
            target="_blank"
          />
          component as a child.
        </Description>
        <Link
          text="This is a standard Link"
          title="Stuff about anchor tags"
          href="https://www.w3.org/MarkUp/1995-archive/Elements/A.html"
          target="_blank"
        />
        <Headline text="Types" />
        <Title text="This is 'info' text" type="info" />
        <Title text="This is 'success' text" type="success" />
        <Title text="This is 'warning' text" type="warning" />
        <Title text="This is 'alert' text" type="alert" />
        <Title text="This is 'inverse' text" type="inverse" />
        <Headline text="Sizes" />
        <Title text="This is a 'tiny' Title" size="tiny" />
        <Title text="This is a 'small' Title" size="small" />
        <Title text="This is a standard Title" />
        <Title text="This is a 'large' Title" size="large" />
        <Title text="This is an 'xlarge' Title" size="xlarge" />
        <Title text="This is an 'xxlarge' Title" size="xxlarge" />
        <Headline text="Styling" />
        <Title text="This is an 'italic' Title" styling="italic" />
        <Title text="This is an 'underline' Title" styling="underline" />
      </Grid>
    );
  });
