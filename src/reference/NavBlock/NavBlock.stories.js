// import React from "react";
import React from "react";
import Hooks from "./Hooks.jsx";
import NavBlock from "./NavBlock.jsx";

const NavBlockNotes = markdown.require("./NavBlock.md");

const config = {
  // left: 'Storybook Left Nav',
  // title: 'Jabba the Hut',
  // right: 'Storybook Right Nav',
  // setTitle(" Update Hook In Storybook ");
};

/* storiesOf("Blocks|NavBlock", module)
  .addDecorator(checkA11y)
  // .addDecorator(withKnobs)
  // .addDecorator(story => <div style={{ padding: "1rem" }}>{story()}</div>)
  // .add("work in progress", withInfo()(() => <NavBlock left="Da Props!" right="Right Props!" />), {
  .add("work in progress", withInfo()(() => { return <NavBlock {...config} />; }), {
    // notes: "A Nav Block displays a combination of navigation actions, contextual description, and status indicators"
    notes: { markdown: NavBlockNotes },
  })
  .add("with Hooks", () => { return <Hooks />; }); */
