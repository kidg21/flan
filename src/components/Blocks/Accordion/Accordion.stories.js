import React from "react";
import { storiesOf } from "@storybook/react";
import AccordionReal from "./AccordionReal";
import Hello from "./AdditionalTrial";


storiesOf("Blocks|Accordion", module)
.add("Accordion Goals", () => <AccordionReal/>)
.add("Accordion", () => <Hello/>);