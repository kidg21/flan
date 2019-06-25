import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import InformationCardBar from "./InformationCardBar";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

// Colors
storiesOf("Elements|Card Bar/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Information", () => <InformationCardBar title="Ownership" />);
