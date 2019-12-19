/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import { action } from "@storybook/addon-actions";
import Card, { CardSection, CardList } from "layout/Card";
import Title, { Description } from "base/Typography";
import MediaBlock from "blocks/MediaBlock";
import Button from "atoms/Button";

storiesOf("Work|Card/Layout", module)
  .addDecorator(Padding)
  .addDecorator(checkA11y)
  .add("WIP", () => {
    return (
      <Card
        media="https://cdn.facilityexecutive.com/wp-content/uploads/2019/09/38391858_ml-800x418-1-574x300.jpg"
        title="Title"
        description="Card Description"
        icon="bookmark_solid"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        commands={[
          {
            label: "Command One",
            name: "Command One",
            onClick: action("Command One Clicked")
          },
          {
            label: "Command Two",
            name: "Command Two",
            onClick: action("Command Two Clicked")
          },
          {
            label: "Command Three",
            name: "Command Three",
            onClick: action("Command Three Clicked")
          },
          {
            label: "Command Four",
            name: "Command Four",
            onClick: action("Command Four Clicked")
          }
        ]}
        onClick={action("Primary Action Area Clicked")}
        // more
        expands
      >
        <CardSection onClick={action("Secondary Action Area Clicked")}>
          <Button label="Button" type="solid" />
          <Button label="Button" type="solid" />
        </CardSection>
      </Card>
    );
  })
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
