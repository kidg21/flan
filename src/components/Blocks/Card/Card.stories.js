import React from "react";
import { storiesOf } from "@storybook/react";
import LayerCard from "./TrialCard";
import MapLegend from "./MapLegend";
import CardContainer from "./CardHeader";




storiesOf("Blocks|Card", module)
.add("Map Legend", () => <MapLegend/>)
.add("Header", () => <CardContainer/>)
.add("Layer Card", () => <LayerCard/>);