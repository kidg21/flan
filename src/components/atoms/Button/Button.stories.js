import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import Blue from "./BlueButton";
import Green from "./GreenButton";



// Colors
storiesOf("Atoms|Button", module)
.add("Button", () => <Button> New Works</Button>)
.add("Green", () => <Green>Allow</Green>)
.add("Blue", () => <Blue>Apply</Blue>)
.add("Primary", () => <Button primary>Words</Button>);