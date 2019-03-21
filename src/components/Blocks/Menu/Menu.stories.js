import React from "react";
import { storiesOf } from "@storybook/react";
import Menu from "./SimpleMenu";
import EditDropdown from "./EditMenu";
import TrialMenu from "./TrialMenu";


storiesOf("Blocks|Menu", module)
.add("Default", () => <Menu />)
.add("Trial", () => <TrialMenu />)
.add("Dark Menu", () => <EditDropdown />);