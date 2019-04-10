import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { checkA11y } from "@storybook/addon-a11y"
import Experiment from "./Experiment"
import ExperimentNotes from "./Experiment.md"

// NavBlock
storiesOf("Reference|Experiments/Experiment", module)
  .addDecorator(checkA11y)
  .add("Experiment", withInfo()(() => <Experiment />), {
    notes: { markdown: ExperimentNotes }
  })
