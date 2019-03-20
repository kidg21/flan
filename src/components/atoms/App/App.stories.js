import React from "react";
import { storiesOf } from "@storybook/react";
import App from "./App";



// Colors
storiesOf("Atoms|App", module)
.add("A Greeting", () => <App/>);