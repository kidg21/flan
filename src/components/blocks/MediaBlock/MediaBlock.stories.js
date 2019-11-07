/* eslint-disable react/jsx-filename-extension */
/* eslint-disable inlinebreak-style */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import { withKnobs, boolean, optionsKnob as options } from "@storybook/addon-knobs";
import Image from "atoms/Image";
import Card, { CardList } from "layout/Card";
import Title, { Description } from "base/Typography";
import MediaBlock from "blocks/MediaBlock";
import MediaBlockNotes from "./MediaBlock.md";

const image = (
  <Image
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
    alt="This is alt text for this image"
  />
);
const body = (
  <>
    <Title text="Media Block" />
    <Description text="In life you need colors. We'll put a happy little sky in here. Now we can begin working on lots of happy little things. In this world, everything can be happy. " />
  </>
);
const description = (
  <Description text="In life you need colors. We'll put a happy little sky in here. Now we can begin working on lots of happy little things. In this world, everything can be happy." />
);

storiesOf("Blocks|Media Block", module)
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
              vertical: "vertical",
              inline: "inline",
            },
            null,
            { display: "select" },
            "Media Block",
          )}
          reverse={boolean("reverse", false, "Media Block")}
          circle={boolean("circle", false, "Media Block")}
          border={boolean("border", false, "Media Block")}
        />
      </Card>
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
  })
  .add("The Media Block Family", () => {
    return (
      <CardList>
        <Card>
          <MediaBlock
            media={image}
            body={
              <>
                <Title text="Media Block" />
                {description}
              </>
            }
          />
        </Card>
        <Card>
          <MediaBlock
            media={image}
            body={
              <>
                <Title text="Media Block (reverse)" />
                {description}
              </>
            }
            reverse
          />
        </Card>
        <Card>
          <MediaBlock
            media={image}
            body={
              <>
                <Title text="Media Block - Vertical" />
                {description}
              </>
            }
            align="vertical"
          />
        </Card>
        <Card>
          <MediaBlock
            media={image}
            body={
              <>
                <Title text="Media Block - Vertical (reverse)" />
                {description}
              </>
            }
            align="vertical"
            reverse
          />
        </Card>
        <Card>
          <MediaBlock
            media={image}
            body={
              <>
                <Title text="Media Block - Inline" />
                {description}
              </>
            }
            align="inline"
          />
        </Card>
        <Card>
          <MediaBlock
            media={image}
            body={
              <>
                <Title text="Media Block - Inline (reverse)" />
                {description}
              </>
            }
            align="inline"
            reverse
          />
        </Card>
      </CardList>
    );
  });
