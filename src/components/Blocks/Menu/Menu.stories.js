import React from "react";
import { storiesOf } from "@storybook/react";
import Menu from "./SimpleMenu";
import EditDropdown from "./EditMenu";

storiesOf("Blocks|Menu", module)
.add("Default", () => <Menu />)
.add("Dark Menu", () => <EditDropdown />);