import React from "react"
import { storiesOf } from "@storybook/react"
import { checkA11y } from "@storybook/addon-a11y"
import Child from "./Child"
import Parent from "./Parent"

storiesOf("Reference|React Hooks/Context Hook", module)
  .addDecorator(checkA11y)
  .addDecorator(story => <div style={{ padding: "1rem" }}>{story()}</div>)
  .add("Child (default context)", () => <Child />)
  .add("Parent (context override)", () => <Parent />)
