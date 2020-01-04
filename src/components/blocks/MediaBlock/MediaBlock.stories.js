/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from "react";
import { Padding } from "helpers/Display";
import Image from "atoms/Image";
import Card, { CardList } from "layout/Card";
import Text, { Title, Description } from "base/Typography";
import MediaBlock from "blocks/MediaBlock";

const MediaBlockNotes = markdown.require("./MediaBlock.md");

const image = (
  <Image
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
    alt="This is alt text for this image"
  />
);
const body = (
  <Fragment>
    <Title size="h6" text="Media Block" />
    <Text text="In life you need colors. We'll put a happy little sky in here. Now we can begin working on lots of happy little things. In this world, everything can be happy. " />
  </Fragment>
);
const description = (
  <Text text="In life you need colors. We'll put a happy little sky in here. Now we can begin working on lots of happy little things. In this world, everything can be happy." />
);

storiesOf("Blocks|Media Block", module)
  .addParameters({
    info: {
      text: "Media Block info goes here..."
    },
    notes: {
      markdown: MediaBlockNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return <MediaBlock media={image} body={body} />;
    })
  )
  .add("Knobs", () => {
    return (
      <Card padding="none">
        <MediaBlock
          media={image}
          body={body}
          align={options(
            "align",
            {
              default: null,
              vertical: "vertical",
              inline: "inline"
            },
            null,
            { display: "select" },
            "Media Block"
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
        <Card padding="none">
          <MediaBlock
            media={image}
            body={
              <Fragment>
                <Title size="h6" text="Media Block" />
                {description}
              </Fragment>
            }
          />
        </Card>
        <Card padding="none">
          <MediaBlock
            media={image}
            body={
              <Fragment>
                <Title size="h6" text="Media Block (reverse)" />
                {description}
              </Fragment>
            }
            reverse
          />
        </Card>
        <Card padding="none">
          <MediaBlock
            media={image}
            body={
              <Fragment>
                <Title size="h6" text="Media Block - Vertical" />
                {description}
              </Fragment>
            }
            align="vertical"
          />
        </Card>
        <Card padding="none">
          <MediaBlock
            media={image}
            body={
              <Fragment>
                <Title size="h6" text="Media Block - Vertical (reverse)" />
                {description}
              </Fragment>
            }
            align="vertical"
            reverse
          />
        </Card>
        <Card padding="none">
          <MediaBlock
            media={image}
            body={
              <Fragment>
                <Title size="h6" text="Media Block - Inline" />
                {description}
              </Fragment>
            }
            align="inline"
          />
        </Card>
        <Card padding="none">
          <MediaBlock
            media={image}
            body={
              <Fragment>
                <Title size="h6" text="Media Block - Inline (reverse)" />
                {description}
              </Fragment>
            }
            align="inline"
            reverse
          />
        </Card>
      </CardList>
    );
  });
