import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { checkA11y } from "@storybook/addon-a11y";
import NavBlock from "./NavBlock";
import NavBlockNotes from "./NavBlock.md";
import { addDecorator } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

// const stories = storiesOf('Storybook Knobs', module);
// stories.addDecorator(withKnobs);

addDecorator((story) => (
    <div style={{padding: 20}}>
      {story()}
    </div>
  ));

// NavBlock
storiesOf("NavBlock", module)
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add("work in progress", withInfo()(() => <NavBlock />), {
    // notes: "A Nav Block displays a combination of navigation actions, contextual description, and status indicators"
    notes: { markdown: NavBlockNotes }
  });


