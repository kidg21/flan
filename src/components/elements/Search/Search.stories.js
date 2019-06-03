import React from "react";
import { storiesOf } from "@storybook/react";
import Search from "./Search";
import Controls from "./Controls";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

storiesOf("Elements|Search", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Default", () => <Search />)
  .add("Controls", () => <Controls />);
