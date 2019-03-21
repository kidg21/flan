import React from "react";
import { storiesOf } from "@storybook/react";
import styled, {css} from 'styled-components';
import Icon from "./Icon";
import IconGroup from "./IconGroup";


const Group = styled.div`
display: flex; 
width: 40%;
padding-left: 5px;
padding-right: 5px;
justify-content: space-between;
`

const downProps = {
    nameProp: ["far", "angle-down"],
    colorProp: "dimgray",
};

const upProps = {
    nameProp: ["far", "angle-up"],
    colorProp: "dimgray",
};

const leftProps = {
    nameProp: ["far", "angle-left"],
    colorProp: "dimgray",
};

const rightProps = {
    nameProp: ["far", "angle-right"],
    colorProp: "dimgray",
};

const mapMarkerProps = {
    nameProp: ["far", "map-marker"],
    colorProp: "dimgray",
};

<<<<<<< HEAD
const locatorProps = {
    nameProp: ["far", "map"],
    colorProp: "dimgray",
};

const worldProps = {
    nameProp: ["far", "globe"],
    colorProp: "dimgray",
};

const gotoProps = {
    nameProp: ["far", "location-arrow"],
    colorProp: "dimgray",
};

const plusProps = {
    nameProp: ["far", "plus"],
    colorProp: "dimgray",
};

const minusProps = {
    nameProp: ["far", "minus"],
    colorProp: "dimgray",
};

// Colors
storiesOf("Atoms|Icons", module)
.add("Navigation Icons", () => <Group> <Icon {...downProps}/>  <Icon {...upProps}/> <Icon {...leftProps}/> <Icon {...rightProps}/> </Group>)
.add("Map Icons", () => <Group> <Icon {...mapMarkerProps}/>  <Icon {...locatorProps}/> <Icon {...worldProps}/> <Icon {...gotoProps}/> <Icon {...plusProps}/> <Icon {...minusProps}/> </Group>)
.add("Icon Groups", () => <IconGroup/>);
=======
storiesOf("Atoms|Icon", module)
.add("Icon (default)", () => <Icon/>)
.add("Icons (w/props)", () => <Icon {...props}/>);
>>>>>>> 694f422f07be0d20cae5345f9e5d66701ccaa657
