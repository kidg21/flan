import React from "react";
import { storiesOf } from "@storybook/react";
import styled, {css} from 'styled-components';
import Icon from "./Icon";


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

storiesOf("Atoms|Icon", module)
.add("Icon (default)", () => <Icon/>)
.add("Icons (w/props)", () => <Icon {...props}/>);
