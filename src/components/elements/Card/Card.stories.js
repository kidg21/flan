/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import { action } from "@storybook/addon-actions";
import Image from "atoms/Image";
import ModernExterior1 from "images/residential/modern exterior 1.jpg";
import ModernExterior2 from "images/residential/modern exterior 2.jpg";
import ModernExterior3 from "images/residential/modern exterior 3.jpg";
import Card, { CardList } from "elements/Card";
import Grid from "layout/Grid";
import Title, { Description } from "base/Typography";
import MediaBlock from "blocks/MediaBlock";
import Button from "atoms/Button";
import { withKnobs, array } from "@storybook/addon-knobs";

const data = [
  {
    id: "a",
    type: "success",
    image: ModernExterior1,
    imageAlt: "ModernExterior 1",
    // audio: "https://www.w3schools.com/html/horse.mp3",
    // video: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
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
        image={
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
    image: ModernExterior2,
    imageAlt: "ModernExterior 2",
    // youtube: "https://www.youtube.com/embed/GJVwbyAY4Sk?autoplay=0",
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
    image: ModernExterior3,
    imageAlt: "ModernExterior 3",
    // vimeo: "https://player.vimeo.com/video/798022",
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
  .addDecorator(withKnobs)
  .add("Standard (configured)", () => {
    return (
      <Card
        // inverse
        // type="info"
        media="image"
        mediaSource="https://cdn.facilityexecutive.com/wp-content/uploads/2019/09/38391858_ml-800x418-1-574x300.jpg" // Image
        imageAlt="Image Alt Text"
        // mediaSource="https://www.w3schools.com/html/horse.mp3" // HTML5 Audio
        // mediaSource="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" // HTML5 Video
        // mediaSource="https://www.youtube.com/embed/GJVwbyAY4Sk?autoplay=0" // Youtube
        // mediaSource="https://player.vimeo.com/video/798022" // Vimeo
        title="Card Title"
        description="Card Description"
        // label="GP"
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
        more={<Button label="Button" type="solid" color="secondary" fullWidth />}
        onClick={action("Primary Action Area Clicked")}

      >
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
            ],
            "Options",
          )
        }
        media={options(
          "type",
          {
            "no media": null,
            "image": "image",
            "audio": "audio",
            "video": "video",
            "iframe": "iframe",
          },
          null,
          { display: "select" },
          "Media",
        )}
        mediaSource={options(
          "source",
          {
            "no source": null,
            "image url": "https://cdn.facilityexecutive.com/wp-content/uploads/2019/09/38391858_ml-800x418-1-574x300.jpg",
            "audio url": "https://www.w3schools.com/html/horse.mp3",
            "video url": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
            "iframe url": "https://www.youtube.com/embed/GJVwbyAY4Sk?autoplay=0",
          },
          null,
          { display: "select" },
          "Media",
        )}
        imageAlt={
          boolean("alt image text", false, "Media") &&
          text("alt image text", "Image Description", "Media")
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
  .add("Card List (configured)", () => {
    return (
      <CardList columns="" data={data} />
    );
  })
  .add("Card List (containers-only)", () => {
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
