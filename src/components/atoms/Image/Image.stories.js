/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import Image from "atoms/Image";

storiesOf("Atoms|Image", module)
  .addDecorator(Padding)
  .add("Default", () => {
    return (
      <Grid>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
          label="This is a label"
        />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
          width="50px"
          height="50px"
          label="This is a label"
        />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
          width="50px"
          height="50px"
          type="circle"
          label="This is a label"
        />
        {/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE" />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
          type="thumb"
        />
         */}
      </Grid>
    );
  });
