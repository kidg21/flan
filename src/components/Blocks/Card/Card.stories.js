import React from "react";
import { storiesOf } from "@storybook/react";
import LayerCard from "./TrialCard";
import MapLegend from "./MapLegend";
import CardContainer from "./CardHeader";
import IconGroup from "./IconGroup";




storiesOf("Blocks|Card", module)
.add("Map Legend", () => <MapLegend/>)
.add("Icon Group", () => <IconGroup/>)
.add("Header", () => <CardContainer/>)
.add("Layer Card", () => <LayerCard/>);