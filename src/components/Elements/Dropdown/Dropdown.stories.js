import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./SimpleDropdown";
import MenuSelect from "./NewDropdown";

// Colors
storiesOf("Elements|Dropdown", module).add("Simple", () => <Dropdown/>)
.add("Select Options", () => <MenuSelect/>);