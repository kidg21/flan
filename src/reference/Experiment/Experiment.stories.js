import React from "react"
import Experiment from "./Experiment"

const ExperimentNotes = markdown.require("./Experiment.md");

// NavBlock
storiesOf("Reference|Experiments/Experiment", module)
  .addDecorator(checkA11y)
  .add("Experiment", withInfo()(() => <Experiment />), {
    notes: { markdown: ExperimentNotes }
  })
