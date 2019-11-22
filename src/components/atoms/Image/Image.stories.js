/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Grid from "layout/Grid";
import Title, { Headline } from "base/Typography";
import Image from "atoms/Image";
import ImageNotes from "./Image.md";

storiesOf("Atoms|Image", module)
  .addParameters({
    info: {
      text: "Image info goes here..."
    },
    notes: {
      markdown: ImageNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
          alt="This is alt text for this image"
        />
      );
    })
  )
  .add("Knobs", () => {
    return (
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
        alt="This is alt text for this image"
        width={text("width", "100", "Image")}
        circle={boolean("circle", false, "Image")}
        border={boolean("border", false, "Image")}
      />
    );
  })
  .add("Type", () => {
    return (
      <Grid gap="tiny">
        <Headline text="Type" />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
          alt="This is alt text for this image"
        />
        <Title text="Default - ( Fills parent container )" />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
          width="125"
          alt="This is alt text for this image"
        />
        <Title text="Specified Width ( width='125' )" />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
          width="125"
          alt="This is alt text for this image"
          circle
        />
        <Title text="Circle ( width='125' )" />
      </Grid>
    );
  });
