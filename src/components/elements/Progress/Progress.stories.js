/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Padding } from "helpers/Display";
import ProgressBar, { Step } from "./Progress.jsx";

storiesOf("Elements|Progress", module)
  .addDecorator(Padding)
  .add("Flow", () => {
    return (
      <ProgressBar >
        <Step isComplete title="Task" description="this is what you do" />
        <Step isComplete title="Task" description="this is what you do" />
        <Step isSelected title="Task" description="this is what you do" />
        <Step title="Task" description="this is what you do" />
        <Step title="Task" description="this is what you do" />
      </ProgressBar>
    );
  })
  .add("Bar", () => {
    return (
      <ProgressBar >
        <Step isComplete  />
        <Step isComplete  />
        <Step isSelected />
        <Step  />
        <Step  />
      </ProgressBar>
    );
  });
