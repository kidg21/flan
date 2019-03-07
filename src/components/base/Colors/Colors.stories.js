import React from "react";
import { storiesOf } from "@storybook/react";
import Colors from "./Colors";

// Colors
storiesOf('Base|Colors', module)
.addDecorator(story => <div style={{ padding: '1rem' }}>{story()}</div>)
.add("Default Colors", () => <Colors />)