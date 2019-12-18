/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import Card, { CardList } from "layout/Card";

// Card
storiesOf("Work|Card/Layout", module)
  .addDecorator(Padding)
  .addDecorator(checkA11y)
  .add("Default", () => {
    return <Card />;
  })
  .add("Elevated Card", () => {
    return <Card type="elevated" />;
  })
  .add("Card List", () => {
    return (
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
    );
  });

// // Da Card
// storiesOf("Layout|Card", module)
//   .addDecorator(Padding)
//   .addDecorator(checkA11y)
//   .add("Card- 'playing with children'", () => {
//     return (
//       <Card>
//         <Button label="Button" />
//         <Button label="Button" />
//         <Button label="Button" />
//       </Card>
//     );
//   });

// Card List
