import React from "react";
import { storiesOf } from "@storybook/react";
import List from "./List";
import { addDecorator } from "@storybook/react";

addDecorator(story => <div style={{ padding: 5 }}>{story()}</div>);

const decorator = story => (
    <div
      style={{
        display: 'inline-block',
        padding: '2px',
      }}
    >
      {story()}
    </div>
  );

  
storiesOf("blocks | List", module)

.addWithChapters("List Types", {
  useTheme: false,
  subtitle: "Display multiple components within one story!",
  info: `
        React Storybook Chapters addon allows showcasing of multiple components within a story by breaking it down into smaller categories (**Chapters**) and subcategories (**Sections**) for more organizational goodness.
        This section is called **Story Info** and you can provide an abstract of your story here.
        A story consists of multiple chapters and a chapter consists of multiple sections. Each section can render a block of code,
        which typically used to showcase one component or a particular state of a component.
        Yes, all info sections support markdown formatting!
      `,
  chapters: [
    {
      sections: [
        // List of sections
        {
          title: "Default Buttons",
          subtitle: "Each section can be used to render a component",
          sectionFn: () => (<List></List>),
          options: {
            decorator,
            showSource: false,
            allowSourceToggling: true,
          }
        },
        ]}]})
;