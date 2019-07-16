import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import GroupCardBar from "./GroupCardBar";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

// Colors
storiesOf("Elements|Card Bar/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Group", () => <GroupCardBar title="Ownership" length={2}/>);
