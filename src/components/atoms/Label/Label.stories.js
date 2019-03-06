import React from "react";
import ReactDOM from 'react-dom';
import { storiesOf } from "@storybook/react";
import Label from "./Label";

const labelProp = {
    contentProp: "Label"
};



storiesOf("Atoms|Label", module)
.add("Default Label", () => (<Label {...labelProp}/>));