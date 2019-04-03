import React from "react";
import { storiesOf } from "@storybook/react";
import PanelHeader from "./PanelHeader";
import InfoHeader from "./InfoHeader";
import LayerPanelHeader from "./LayerHeader";


storiesOf("Blocks|Panel", module)
.add("Layer Header", () => <LayerPanelHeader title="Data Overlay Panel"/> )
.add("Info Header", () => <InfoHeader layer="5201 California Ave." title="Irvine, CA 92614"/> )
.add("Filter Header", () => <PanelHeader layer="Data Overlay" title="Filter Header"/> );
