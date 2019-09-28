/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Card, { CardList } from "layout/Card";
import Title, { SubTitle, Description } from "base/Typography";
import MediaBlock from "blocks/MediaBlock";
import Flan from "images/flan.jpg";

// const data = [
//   { id: "a", color: "Owners/Units", name: "Multiple Owners (2 Units)" },
//   { id: "b", color: "Master Parcel No.", name: "387483675638" },
//   { id: "c", color: "Zoning", name: "No Zone" }
// ];

const image = (
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
    width="100px"
    // height="100px"
    alt="alternate description"
  />
);
const image2 = <img src={Flan} width="150px" height="100%" alt="alternate description" />;

storiesOf("Work|Blocks/Media Block", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Simple", () => {
    return (
      <CardList>
        <Card>
          <MediaBlock
            media={image}
            body={
              <>
                <Title text="Media Block - Default" />
                <Description text="In life you need colors. We'll put a happy little sky in here. Now we can begin working on lots of happy little things. In this world, everything can be happy. " />
              </>
            }
          />
        </Card>
        <Card>
          <MediaBlock
            layout="flip"
            media={image2}
            body={
              <>
                <Title text="Media Block - Default" />
                <Description text="In life you need colors. We'll put a happy little sky in here. Now we can begin working on lots of happy little things. In this world, everything can be happy. " />
              </>
            }
          />
        </Card>
        <Card>
          <MediaBlock
            layout="vertical"
            media={image}
            body={
              <>
                <Title text="Media Block - Default" />
                <Description text="In life you need colors. We'll put a happy little sky in here. Now we can begin working on lots of happy little things. In this world, everything can be happy. " />
              </>
            }
          />
        </Card>
      </CardList>
    );
  });
