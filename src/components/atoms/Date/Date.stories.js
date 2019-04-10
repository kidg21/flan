import React from "react"
import { storiesOf } from "@storybook/react"
import { Padding } from "helpers/Display"
import Date from "atoms/Date"

// Date
storiesOf("Atoms|Date", module)
  .addDecorator(Padding)
  .add("Default", () => <Date />)
