import React from "react";
import ReactDOM from 'react-dom';
import { storiesOf } from "@storybook/react";
import Command from "./Command";



const props = {
    nameProp: ["fal", "times"],
    contentProp: "Command"
};

storiesOf("Atoms|Command", module).add("Default Command", () => (<Command {...props}/>));
