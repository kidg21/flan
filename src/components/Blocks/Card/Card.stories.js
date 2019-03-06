import React from "react";
import { storiesOf } from "@storybook/react";
import CardContainer from "./CardContainer";
import CardHeader from "./CardHeader";

// Colors
storiesOf("Blocks|Card", module)
.add("Layer Card", () => <CardContainer/>)
.add("Top of Card", () => <CardHeader/>);