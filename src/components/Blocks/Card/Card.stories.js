import React from "react";
import { storiesOf } from "@storybook/react";
import LayerCard from "./TrialCard";
import MapLegend from "./MapLegend";




storiesOf("Blocks|Card", module)
.add("Map Legend", () => <MapLegend/>)
.add("Layer Card", () => <LayerCard/>);