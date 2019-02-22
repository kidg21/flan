import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { checkA11y } from "@storybook/addon-a11y";
import Experiment from "./Experiment";
import ExperimentNotes from "./Experiment.md";
import { addDecorator } from '@storybook/react';
// import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


// const stories = storiesOf('Storybook Knobs', module);
// stories.addDecorator(withKnobs);

// addDecorator((story) => (
//     <div style={{padding: 20}}>
//       {story()}
//     </div>
//   ));

// NavBlock
storiesOf("Scratchpad|Experiment", module)
  .addDecorator(checkA11y)
  // .addDecorator(withKnobs)
  .add("Experiment", withInfo()(() => <Experiment />), {
    notes: { markdown: ExperimentNotes }
  });


