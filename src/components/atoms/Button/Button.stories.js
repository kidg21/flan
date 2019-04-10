import React from "react"
import { storiesOf } from "@storybook/react"
import { Padding } from "helpers/Display"
import Button from "./Button"

// Buttons
storiesOf("Atoms|Button", module)
  .addDecorator(Padding)
  .add("Primary", () => <Button label="Primary Button" />)
  .add("Secondary", () => <Button label="Secondary Button" secondary={true} />)
  .add("Floating", () => <Button label="Floating Button" floating={true} />)
