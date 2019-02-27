import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

// Colors
storiesOf("Atoms|Button", module)
.add("Button", () => <Button> New Works</Button>)
.add("Primary", () => <Button primary>Words</Button>);