import React from "react";
import { storiesOf } from "@storybook/react";
import PanelHeader from "./PanelHeader";
import LayerPanelHeader from "./LayerHeader";


storiesOf("Blocks|Panel", module)
.add("Layer Header", () => <LayerPanelHeader title="Data Overlay Panel"/> )
.add("Filter Header", () => <PanelHeader layer="Data Overlay" title="Filter Header"/> );
