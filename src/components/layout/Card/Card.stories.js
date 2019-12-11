/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { Padding } from "helpers/Display";
import Card, { CardList } from "layout/Card";
import Button from "atoms/Button";

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
