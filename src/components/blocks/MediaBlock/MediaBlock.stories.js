/* eslint-disable react/jsx-filename-extension */
/* eslint-disable listitembreak-style */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import { withKnobs, text, boolean, files, optionsKnob as options } from "@storybook/addon-knobs";
import Card, { CardList } from "layout/Card";
import Title, { Description } from "base/Typography";
import Flan from "images/flan.jpg";
import MediaBlock from "blocks/MediaBlock";
import MediaBlockNotes from "./MediaBlock.md";

const image = (
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
    width="100%"
    height="100%"
    alt="alternate description"
  />
);
const image2 = <img src={Flan} width="100%" height="100%" alt="alternate description" />;
const body = (
  <>
    <Title text="Media Block - Default" />
    {/* <Title text="Media Block - Default Media Block - Default Media Block - Default Media Block - Default Media Block - Default Media Block - Default" /> */}
    <Description text="In life you need colors. We'll put a happy little sky in here. Now we can begin working on lots of happy little things. In this world, everything can be happy. " />
  </>
);

storiesOf("Work|Blocks/Media Block", module)
  .addParameters({
    info: {
      text: "Media Block info goes here...",
    },
    notes: {
      markdown: MediaBlockNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return <MediaBlock media={image} body={body} />;
    }),
  )
  .add("Knobs", () => {
    return (
      <Card>
        <MediaBlock
          media={image}
          body={body}
          align={options(
            "align",
            {
              default: null,
              center: "center",
              vertical: "vertical",
            },
            null,
            { display: "select" },
            "Media Block",
          )}
          reverse={boolean("reverse", false, "Media Block")}
          listitem={boolean("list item", false, "Media Block")}
        />
      </Card>
    );
  })
  .add("Single-Line Item", () => {
    return (
      <CardList>
        <Card>
          <MediaBlock media={image} body={body} listitem />
        </Card>
        <Card>
          <MediaBlock media={image} body={body} listitem />
        </Card>
        <Card>
          <MediaBlock media={image} body={body} listitem reverse />
        </Card>
      </CardList>
    );
  })
  .add("Alignment", () => {
    return (
      <CardList>
        <Card>
          <MediaBlock body={body} />
        </Card>
        <Card>
          <MediaBlock media={image} body={body} />
        </Card>
        <Card>
          <MediaBlock media={image} body={body} reverse />
        </Card>
        <Card>
          <MediaBlock media={image} body={body} align="vertical" />
        </Card>
      </CardList>
    );
  })
  .add("Nested", () => {
    return (
      <MediaBlock media={image} body={body}>
        <MediaBlock media={image} body={body}>
          <MediaBlock media={image} body={body} />
          <MediaBlock media={image} body={body} />
        </MediaBlock>
        <MediaBlock media={image} body={body} />
      </MediaBlock>
    );
  });
