import React from "react";
import ReactDOM from 'react-dom';
import { storiesOf } from "@storybook/react";
import Command from "./NewCommand";

const props = {
    contentProp: "Dam Command"
};


storiesOf("Atoms|Command", module).add("Default Command", () => (<Command {...props}/>));
