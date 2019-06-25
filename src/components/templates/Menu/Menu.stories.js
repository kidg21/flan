import React from "react";
import { storiesOf } from "@storybook/react";
import Menu, { InformationMenu } from "templates/Menu";

storiesOf("Templates|Main Menu", module)
  .add("Default Menu", () => <Menu />)
  .add("Info Menu", () => <InformationMenu />);
