import React from "react";
import { storiesOf } from "@storybook/react";
import styled, {css} from 'styled-components';
import Icon from "./Icon";
import PlusIcon from "./PlusIcon";
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

// const copyProps = {
//     nameProp: ["far", "copy"],
//     colorProp: "#99958f",
// };

const directionsProps = {
    nameProp: ["fal", "directions"],
    colorProp: "#60aad2",
};

const cloneProps = {
    nameProp: ["fal", "clone"],
    colorProp: "#99958f",
};

const addProps = {
    nameProp: ["fal", "plus-circle"],
    colorProp: "#60aad2",
  };

const questionProps = {
    nameProp: ["far", "question-circle"],
    colorProp: "#99958f",
  };

// Colors
storiesOf("Atoms|Icons", module)
.add("Navigation Icons", () => <Group> <Icon {...downProps}/>  <Icon {...upProps}/> <Icon {...leftProps}/> <Icon {...rightProps}/> </Group>)
.add("Map Icons", () => <Group> <Icon {...mapMarkerProps}/>  <Icon {...locatorProps}/> <Icon {...worldProps}/> <Icon {...gotoProps}/> <Icon {...plusProps}/> <Icon {...minusProps}/> </Group>)
.add("Property Icons", () => <Group> <PlusIcon {...directionsProps}/> <Icon {...cloneProps}/> <Icon {...questionProps}/> </Group>)
.add("Plus Icon", () => <PlusIcon {...addProps}/>)
.add("Icon Groups", () => <IconGroup/>);