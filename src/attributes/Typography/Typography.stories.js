import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "./Typography";

// Colors

storiesOf('Style Guidelines|Typography', module)
.addDecorator(story => <div style={{ padding: '1.5rem 2rem' }}>{story()}</div>)
.add("Text", () => <Typography />)