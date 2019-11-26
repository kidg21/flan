/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card";
import Image from "atoms/Image";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

const image = (
  <Image
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
    alt="This is alt text for this image"
  />
);

storiesOf("Elements|Card", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Default", () => {
    return <Card title="Title" description="Card Description" />;
  })
  .add("Expands", () => {
    return <Card title="Title" description="Card Description" expands />;
  })
  .add("Icon", () => {
    return (
      <Card title="Title" description="Card Description" icon="settings" />
    );
  })
  .add("Media", () => {
    return (
      <Card
        title="Title"
        description="Card Description"
        media={image}
        expands
      />
    );
  });
