import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { Padding } from "../../_helpers/Display";
import Card, { CardList } from "layout/Card";
import Button from "atoms/Button";

// Card
storiesOf("Layout|Card", module)
  .addDecorator(Padding)
  .addDecorator(checkA11y)
  .add("Default Card - 'wrapper for content modules'", () => <Card />);

// Da Card
storiesOf("Layout|Card", module)
  .addDecorator(Padding)
  .addDecorator(checkA11y)
  .add("Card- 'playing with children'", () => (
    <Card>
      <Button label="Button" />
      <Button label="Button" />
      <Button label="Button" />
    </Card>
  ));

// Card List
storiesOf("Layout|CardList", module)
  .addDecorator(checkA11y)
  .add("Card List - 'wrapper for Cards'", () => (
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
