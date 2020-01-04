/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import { action } from "@storybook/addon-actions";
import Image from "atoms/Image";
import ModernExterior1 from "images/residential/modern exterior 1.jpg";
import ModernExterior2 from "images/residential/modern exterior 2.jpg";
import ModernExterior3 from "images/residential/modern exterior 3.jpg";
import Card, { CardSection, CardList } from "elements/Card";
import Grid from "layout/Grid";
import Title, { Description } from "base/Typography";
import MediaBlock from "blocks/MediaBlock";
import Button from "atoms/Button";

const data = [
  {
    id: "a",
    type: "success",
    media: ModernExterior1,
    mediaDesc: "ModernExterior 1",
    icon: "bookmark_solid",
    title: "First Card",
    description: "Card Description Goes Here",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commands: [
      {
        id: "Command One",
        label: "Command One",
      },
    ],
    more:
      <MediaBlock
        media={
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
            alt="This is alt text for this image"
          />
        }
        body={
          <>
            <Title text="Media Block" />
            <Description text="In life you need colors. We'll put a happy little sky in here. Now we can begin working on lots of happy little things. In this world, everything can be happy. " />
          </>
        }
      />,
    onClick: action("First Card Clicked"),
  },
  {
    id: "b",
    type: "alert",
    media: ModernExterior2,
    mediaDesc: "ModernExterior 2",
    label: "GP",
    title: "Second Card",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    commands: [
      {
        id: "Command One",
        label: "Command One",
      },
      {
        id: "Command Two",
        label: "Command Two",
      },
    ],
    onClick: action("Second Card Clicked"),
  },
  {
    id: "c",
    type: "info",
    media: ModernExterior3,
    mediaDesc: "ModernExterior 3",
    icon: "home",
    title: "Third Card",
    description: "Nothing To See Here",
    body: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    commands: [
      {
        id: "Command One",
        label: "Command One",
        name: "Command One",
      },
      {
        id: "Command Two",
        label: "Command Two",
        name: "Command Two",
      },
      {
        id: "Command Three",
        label: "Command Three",
        name: "Command Three",
      },
      {
        id: "Command Four",
        label: "Command Four",
        name: "Command Four",
      },
      {
        id: "Command Five",
        label: "Command Five",
        name: "Command FiveCommand Five CommandFiveCommand Five",
      },
    ],
    more: <Button label="Button" type="solid" />,
    onClick: action("Third Card Clicked"),
  },
];

storiesOf("Work|Card/Elements", module)
  .addDecorator(Padding)
  .addDecorator(checkA11y)
  .add("WIP", () => {
    return (
      <Card
        // inverse
        type="info"
        media="https://cdn.facilityexecutive.com/wp-content/uploads/2019/09/38391858_ml-800x418-1-574x300.jpg"
        mediaDesc="Media Description"
        title="Card Title"
        description="Card Description"
        icon="bookmark_solid"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        commands={[
          {
            id: "Command One",
            label: "Command One",
            name: "Command One",
            onClick: action("Command One Clicked"),
          },
          {
            id: "Command Two",
            label: "Command Two",
            name: "Command Two",
            onClick: action("Command Two Clicked"),
          },
          {
            id: "Command Three",
            label: "Command Three",
            name: "Command Three",
            onClick: action("Command Three Clicked"),
          },
          {
            id: "Command Four",
            label: "Command Four",
            name: "Command Four",
            onClick: action("Command Four Clicked"),
          },
          {
            id: "Command Five",
            label: "Command Five",
            name: "Command FiveCommand Five CommandFiveCommand Five",
            onClick: action("Command Five Clicked"),
          },
        ]}
        onClick={action("Primary Action Area Clicked")}
        more={<Button label="Button" type="solid" color="secondary" fullWidth />}

      >
        {/* <CardSection onClick={action("Secondary Action Area Clicked")}>
          <Button label="Button" type="solid" />
          <Button label="Button" type="solid" />
        </CardSection> */}
      </Card>
    );
  })
  .add("Default", () => {
    return <Card />;
  })
  .add("Elevations", () => {
    return (
      <Grid gap="large">
        <Card description="Borderless" borderless />
        <Card description="Standard" />
        <Card description="Raised" raised />
      </Grid>
    );
  })
  .add("Card List (data)", () => {
    return (
      <CardList columns="" data={data} inverse2 />
    );
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
      </CardList>
    );
  });
