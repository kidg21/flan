import React from "react";
import ReactDOM from 'react-dom';
import { storiesOf } from "@storybook/react";
import Command from "./Command";


const iconProps = {
    nameProp: ["fal", "times"],
    colorProp: "yellowgreen",
};

const labelProp = {
    contentProp: "grrrr"
};

const commandProps = {
    iconProps: iconProps,
    labelProp: labelProp
}


storiesOf("Atoms|Command", module)
.add("Default Command", () => (<Command {...commandProps}/>));