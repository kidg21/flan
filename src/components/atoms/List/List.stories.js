import React from "react";
import { storiesOf } from "@storybook/react";
import SimpleList from "./SimpleList";
import IconList from "./IconList";


const itemProps = {
    nameProp: "item default"
};

const simpleListProps = {
    itemProps: itemProps
};



// Colors
storiesOf("Atoms|List", module)
.add("Simple List", () => <SimpleList {...simpleListProps}/>)
.add("List with Icons", () => <IconList/>);