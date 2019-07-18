import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import InformationCardBar from "./InformationCardBar";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Title from "base/Typography";

// Colors
storiesOf("Elements|Card Bar/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Information Original", () => <InformationCardBar title="Ownership" />)
  .add("Information", () => (
    <InformationCardBar title={<Title title="Ownership" />} />
  ));
