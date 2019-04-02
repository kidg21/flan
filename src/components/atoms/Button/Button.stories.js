import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import GreenButton from "./GreenButton";



// Colors
storiesOf("Atoms|Button", module)
.add("Default", () => <Button>Default</Button>)
.add("Secondary", () => <GreenButton>Green</GreenButton>);