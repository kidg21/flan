import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import IconBlock from "blocks/IconBlock";
import { withInfo } from "@storybook/addon-info";

storiesOf("Blocks|IconBlock", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Icon Block", () => <IconBlock />);
