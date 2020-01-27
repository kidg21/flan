/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import { action } from "@storybook/addon-actions";
import Image from "atoms/Image";
import ModernExterior1 from "images/residential/modern exterior 1.jpg";
import ModernExterior2 from "images/residential/modern exterior 2.jpg";
import ModernExterior3 from "images/residential/modern exterior 3.jpg";
import Card, { CardSection, CardGrid } from "elements/Card";
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
      },
      {
        id: "Command Two",
        label: "Command Two",
      },
      {
        id: "Command Three",
        label: "Command Three",
      },
      {
        id: "Command Four",
        label: "Command Four",
      },
      {
        id: "Command Five",
        label: "Command Five",
      },
    ],
    more: <Button label="Button" type="solid" />,
    onClick: action("Third Card Clicked"),
  },
];

storiesOf("Elements|Card", module)
  .addDecorator(Padding)
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add("Standard (configured)", () => {
    return (
      <Card
        // inverse
        // type="info"
        media="https://cdn.facilityexecutive.com/wp-content/uploads/2019/09/38391858_ml-800x418-1-574x300.jpg" // Image
        mediaDesc="Media Description"
        // media="https://www.w3schools.com/html/horse.mp3" // HTML5 Audio
        // media="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" // HTML5 Video
        // media="https://www.youtube.com/embed/GJVwbyAY4Sk?autoplay=0" // Youtube
        // media="https://player.vimeo.com/video/798022" // Vimeo
        title="Card Title"
        description="Card Description"
        // label="GP"
        icon="bookmark_solid"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        commands={[
          {
            id: "Command One",
            label: "Command One",
            onClick: action("Command One Clicked"),
          },
          {
            id: "Command Two",
            label: "Command Two",
            onClick: action("Command Two Clicked"),
          },
          {
            id: "Command Three",
            label: "Command Three",
            onClick: action("Command Three Clicked"),
          },
          {
            id: "Command Four",
            label: "Command Four",
            onClick: action("Command Four Clicked"),
          },
          {
            id: "Command Five",
            label: "Command Five",
            onClick: action("Command Five Clicked"),
          },
        ]}
        more={<Button label="Button" type="solid" color="secondary" fullWidth />}
        onClick={action("Primary Action Area Clicked")}
      >
        {/* Any type of child content is supported */}
        {/* <CardSection onClick={action("Secondary Action Area Clicked")}>
          <Button label="Button" type="solid" />
          <Button label="Button" type="solid" />
        </CardSection> */}
      </Card>
    );
  })
  .add("Standard (container-only)", () => {
    return <Card />;
  })
  .add("Knobs", () => {
    return (
      <Card
        type={select(
          "type",
          {
            standard: null,
            info: "info",
            success: "success",
            warning: "warning",
            alert: "alert",
          },
          null,
          "Settings",
        )}
        shadow={select(
          "shadow",
          {
            "none": "none",
            "standard": null,
            "2x": "2x",
          },
          null,
          "Settings",
        )}
        inverse={
          boolean("inverse", false, "Settings")
        }
        onClick={
          boolean("onClick", false, "Settings")
        }
        title={
          text("title", "Card Title", "Options")
        }
        description={
          text(
            "description",
            "Card Description",
            "Options",
          )
        }
        label={
          text("label (requires Title or Description)", "GP", "Options")
        }
        icon={
          select(
            "icon (requires Title or Description)",
            {
              "no icon": null,
              "user": "user",
              "down": "down",
              "bookmark": "bookmark_solid",
              "plus": "plus",
              "print": "print",
            },
            null,
            "Options",
          )
        }
        more={
          boolean("more", false, "Options") &&
          array(
            "extra content",
            [<Button label="Button" type="solid" color="secondary" fullWidth />],
            "Options",
          )
        }
        body={
          text(
            "body",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Options",
          )
        }
        commands={
          object(
            "commands",
            [
              {
                id: "Command One",
                label: "Command One",
                onClick: action("Command One Clicked"),
              },
              {
                id: "Command Two",
                label: "Command Two",
                onClick: action("Command Two Clicked"),
              },
              {
                id: "Command Three",
                label: "Command Three",
                onClick: action("Command Three Clicked"),
              },
              {
                id: "Command Four",
                label: "Command Four",
                onClick: action("Command Four Clicked"),
              },
              {
                id: "Command Five",
                label: "Command Five",
                onClick: action("Command Five Clicked"),
              },
            ],
            "Options",
          )
        }
        media={options(
          "media",
          {
            "No Media": null,
            "Image": "https://cdn.facilityexecutive.com/wp-content/uploads/2019/09/38391858_ml-800x418-1-574x300.jpg",
            "HTML5 Audio": "https://www.w3schools.com/html/horse.mp3",
            "HTML5 Video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
            "Youtube": "https://www.youtube.com/embed/GJVwbyAY4Sk?autoplay=0",
            "Vimeo": "https://player.vimeo.com/video/798022",
          },
          null,
          { display: "select" },
          "Media",
        )}
        mediaDesc={
          boolean("media description", false, "Media") &&
          text("media description", "Media Description", "Media")
        }
      />
    );
  })
  .add("Shadows", () => {
    return (
      <Grid gap="large">
        <Card description="None" shadow="none" />
        <Card description="Standard" />
        <Card description="2x" shadow="2x" />
      </Grid>
    );
  })
  .add("Card Grid (configured)", () => {
    return (
      <CardGrid data={data} />
    );
  })
  .add("Card Grid (containers-only)", () => {
    return (
      <CardGrid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardGrid>
    );
  });
