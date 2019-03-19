import React from "react";
import ReactDOM from 'react-dom';
import { storiesOf } from "@storybook/react";
import Command from "./Command";


const iconProps = {
    // nameProp: ["fal", "times"]
    nameProp: "times"
};

const labelProp = {
    contentProp: "Close"
};

const commandProps = {
    iconProps: iconProps,
    labelProp: labelProp,
}

storiesOf("Atoms|Command", module)
.addDecorator(story => <div style={{ padding: "1rem" }}>{story()}</div>)
.add("Default Command", () => (<Command {...commandProps}/>));