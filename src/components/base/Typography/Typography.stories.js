import React from "react"
import { storiesOf } from "@storybook/react"
import Typography from "./Typography"

// Colors

storiesOf("Application|Style Guides/", module)
  .addDecorator(story => (
    <div style={{ padding: "1.5rem 2rem" }}>{story()}</div>
  ))
  .add("Typography", () => <Typography />)
