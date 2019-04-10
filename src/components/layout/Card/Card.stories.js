import React from "react"
import { storiesOf } from "@storybook/react"
import { checkA11y } from "@storybook/addon-a11y"
import { Padding } from "../../_helpers/Display"
import Card, { CardList, DaCard } from "layout/Card"

// Card
storiesOf("Layout|Card", module)
  .addDecorator(Padding)
  .addDecorator(checkA11y)
  .add("Default Card - 'wrapper for content modules'", () => <Card />)

// Da Card
storiesOf("Layout|Card", module)
  .addDecorator(Padding)
  .addDecorator(checkA11y)
  .add("Da Card- 'playing with children'", () => (
    <DaCard>
      <button>Button</button>
      <button>Button</button>
      <button>Button</button>
    </DaCard>
  ))

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
  ))
