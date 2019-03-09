import React from "react";
import { storiesOf } from "@storybook/react";
import CardContainer from "./CardContainer";
import CardHeader from "./CardHeader";
import CardOptions from "./CardOptionsSection";
import TrialCard from "./TrialCard";
import Divider from './CardDivider';
import Table from './SimpleDataTable';
import floodzoneFile from './floodzone.png';

const image = {
    src: floodzoneFile,
    alt: 'Flood'
};



storiesOf("Blocks|Card", module)
.add("Layer Card", () => <CardContainer/>)
.add("Top of Card", () => <CardHeader/>)
.add("Options for Card View", () => <CardOptions/>)
.add("Divider", () => <Divider/>)
.add("Table", () => <Table/>)
.add('With an image', () => (<img src={image.src} alt={image.alt}/> ))
.add("Trial Card", () => <TrialCard/>);