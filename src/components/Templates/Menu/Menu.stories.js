import React from "react";
import { storiesOf } from "@storybook/react";
// import CardHeader from "./CardHeader"
import MainMenu from "./Menu";
import TrialMenu from "./TrialMenu";

storiesOf("Templates|Main Menu", module)
  .add("Default", () => <MainMenu />)
  .add("Trial", () => <TrialMenu />);
