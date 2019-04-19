import React from "react";
import { storiesOf } from "@storybook/react";
import EditDropdown from "./EditMenu";
import TrialMenu from "./TrialMenu";

storiesOf("Blocks|Menu", module)
  .add("Trial", () => <TrialMenu />)
  .add("Dark Menu", () => <EditDropdown />);
