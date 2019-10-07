import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import Results from "./Results";

storiesOf("Atoms|Results", module)
	.addDecorator(Padding)
	.add("Default", withInfo()(() => <Results count="235" />));
