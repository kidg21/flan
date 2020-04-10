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
        <Step isSuccess title="Task" description="this is what you do" />
        <Step isSuccess title="Task" description="this is what you do" />
        <Step isSelected title="Task" description="this is what you do" />
        <Step title="Task" description="this is what you do" />
        <Step title="Task" description="this is what you do" />
      </ProgressBar>
    );
  });
