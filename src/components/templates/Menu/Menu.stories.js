import React from "react";
import { storiesOf } from "@storybook/react";
// import CardHeader from "./CardHeader"
import Menu from "./Menu";
import InformationMenu from "./InformationMenu";

storiesOf("Templates|Main Menu", module)
  .add("Default Menu", () => <Menu />)
  .add("Info Menu", () => <InformationMenu />);
