import React from "react";
import { storiesOf } from "@storybook/react";
import PanelHeader from "./PanelHeader";
import FilterDetailHeader from "./FilterDetailHeader";
import LayerPanelHeader from "./LayerHeader";


storiesOf("Blocks|Panel", module)
.add("Layer Header", () => <LayerPanelHeader title="Layer Panel"/> )
.add("Header", () => <PanelHeader title="Panel Header"/> )
.add("Detail Header", () => <FilterDetailHeader title="Detail Header"/> );
