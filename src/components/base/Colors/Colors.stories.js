import React from "react"
import { storiesOf } from "@storybook/react"
import Colors from "./Colors"

// Colors
storiesOf("Application|Style Guides/", module)
  .addDecorator(story => <div style={{ padding: "1rem" }}>{story()}</div>)
  .add("Color Palette", () => <Colors />)
