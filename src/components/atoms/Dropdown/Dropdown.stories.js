import React from "react";
import { storiesOf } from "@storybook/react";
import DropdownClassic from "./Dropdown";
import InlineDropdown from "./InlineDropdown";

// Colors
storiesOf("Atoms|Dropdown", module)
.add("Classic Dropdown", () => <DropdownClassic/>)
.add("Inline Dropdown", () => <InlineDropdown/>);