/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Body } from "base/Typography";
import Image from "atoms/Image";
import { Padding } from "helpers/Display";
import Card from "./Card.jsx";

const image = (
  <Image
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
    alt="This is alt text for this image"
  />
);

const Text = (
  <Body text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
);

storiesOf("Elements|Card", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Default", () => {
    return <Card title="Title" description="Card Description" />;
  })
  .add("Elevated Default", () => {
    return (
      <Card title="Title" description="Card Description" type="elevated" />
    );
  })
  .add("Expands", () => {
    return <Card title="Title" description="Card Description" expands />;
  })
  .add("Body Text", () => {
    return <Card title="Title" description="Card Description" body={Text} />;
  })
  .add("command", () => {
    return (
      <Card
        title="Title"
        description="Card Description"
        body={Text}
        commands={[{ label: "Search" }, { label: "View" }]}
      />
    );
  })
  .add("commands", () => {
    return (
      <Card
        title="Title"
        description="Card Description"
        body={Text}
        commands={[
          { label: "Search" },
          { label: "View" },
          { label: "Search" },
          { label: "View" },
        ]}
      />
    );
  })
  .add("command1", () => {
    return (
      <Card
        title="Title"
        description="Card Description"
        body={Text}
        commands={[{ label: "Learn More" }]}
      />
    );
  })
  .add("Icon", () => {
    return (
      <Card title="Title" description="Card Description" icon="settings" />
    );
  })
  .add("Example Icon", () => {
    return (
      <Card
        title="Appraisal Research"
        description="19-0942231 - 123 Main St, Woburn, MA 01801"
        icon="analytics"
      />
    );
  })
  .add("SI Example", () => {
    return (
      <Card
        title="5201 California Avenue, Irvine, CA 92614"
        line1="APN #23947828"
        line2="Irvine Company"
        tag="Same Owner"
      />
    );
  })

  .add("Media", () => {
    return <Card title="Title" description="Card Description" media={image} />;
  });
