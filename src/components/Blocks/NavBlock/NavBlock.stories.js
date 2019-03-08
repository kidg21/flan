import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { checkA11y } from "@storybook/addon-a11y";
import NavBlock from "./NavBlock";
import NavBlockNotes from "./NavBlock.md";
import { addDecorator } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  object
} from "@storybook/addon-knobs";

const config = {
  left: 'Storybook Left Nav',
  // title: 'Jabba the Hut',
  right: 'Storybook Right Nav',
};

storiesOf("Blocks|NavBlock", module)
  .addDecorator(checkA11y)
  // .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ padding: '1rem' }}>{story()}</div>)
  // .add("work in progress", withInfo()(() => <NavBlock left="Da Props!" right="Right Props!" />), {
  .add("work in progress", withInfo()(() => <NavBlock {...config} />), {
    // notes: "A Nav Block displays a combination of navigation actions, contextual description, and status indicators"
    notes: { markdown: NavBlockNotes },
  });
