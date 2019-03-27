import React from "react";
import { storiesOf } from "@storybook/react";
import PanelHeader from "./PanelHeader";
import FilterDetailHeader from "./FilterDetailHeader";


storiesOf("Blocks|Panel", module)
.add("Header", () => <PanelHeader title="Panel Header"/> )
.add("Detail Header", () => <FilterDetailHeader title="Detail Header"/> );
