import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";

const props = {
    nameProp: ["fal", "times"],
    colorProp: "red",
};

storiesOf("Atoms|Icon", module)
.add("Icon (default)", () => <Icon/>)
.add("Icons (w/props)", () => <Icon {...props}/>);