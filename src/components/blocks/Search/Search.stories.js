import React from "react";
import { storiesOf } from "@storybook/react";
import Search from "./Search";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

storiesOf("Blocks|Search", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Default", () => <Search />);
