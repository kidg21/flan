import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";

const props = {
    nameProp: ["fal", "times"]
};


// Colors
storiesOf("Atoms|Icon", module)
.add("Icons", () => <Icon {...props}/>);