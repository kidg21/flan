import React from "react";
import { storiesOf } from "@storybook/react";
import Accordion from "./Accordion";
import MapLegend from "../Map/MapLegend";
import Container from "../../atoms/Container/Container";


storiesOf("Blocks|Accordion", module)
.add("Accordion", () => 
<Accordion
title="Accordion Title"
onToggle={visibility => {
    console.log('visibility -->', visibility);
}}
>
<Container>
    <MapLegend/>
    </Container>
</Accordion>);