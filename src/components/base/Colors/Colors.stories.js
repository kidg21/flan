import React from "react";
import { storiesOf } from "@storybook/react";
import Colors from "./Colors";

// Colors
storiesOf('Style Guidelines|Colors', module)
.addDecorator(story => <div style={{ padding: '1rem' }}>{story()}</div>)
.add("Default Colors", () => <Colors />)