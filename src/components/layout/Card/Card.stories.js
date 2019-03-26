import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import Card, { CardList } from "./Card";

storiesOf("Layout|Card", module)
  .addDecorator(checkA11y)
  // .addDecorator(story => <div style={{ padding: "1rem" }}>{story()}</div>)
  .add("Default Card - 'just a wrapper'", () => <Card />)
  .add("Card List - 'Lots of Cards'", () => (
    <CardList>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardList>
  ));
