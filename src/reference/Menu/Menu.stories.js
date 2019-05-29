import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import DropdownMenu from "./EditMenu";
import TrialMenu from "./TrialMenu";

storiesOf("Blocks|Menu", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Trial", () => <TrialMenu />)
  .add("Dark Menu", () => <DropdownMenu object="Trial" />);
