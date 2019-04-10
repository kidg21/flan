import React from "react"
import { storiesOf } from "@storybook/react"
import { Padding } from "helpers/Display"
import Switch from "./Switch"

// Colors
storiesOf("Atoms|Switch", module)
  .addDecorator(Padding)
  .add("Switch", () => <Switch />)
