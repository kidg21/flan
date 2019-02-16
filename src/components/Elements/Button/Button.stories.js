import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import NewButton from "./NewButton";

import { addDecorator } from "@storybook/react";

addDecorator(story => <div style={{ padding: 20 }}>{story()}</div>);

const decorator = story => (
  <div
    style={{
      display: "inline-block",
      padding: "10px"
    }}
  >
    {story()}
  </div>
);

storiesOf("Components/Buttons")
  .addWithChapters("Buttons", {
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
            sectionFn: () => <NewButton>Default</NewButton>,
            options: {
              decorator,
              showSource: false,
              allowSourceToggling: true
            }
          },
          {
            title: "Primary Buttons",
            sectionFn: () => <NewButton primary>Primary</NewButton>,
            options: {
              showSource: true,
              allowSourceToggling: true,
              showPropTables: true,
              allowPropTablesToggling: true
            }
          },
          {
            title: "Disabled Buttons",
            subtitle: "Each section can be used to render a component",
            sectionFn: () => <NewButton isDisabled>Disabled</NewButton>,
            options: {
              decorator,
              showSource: false,
              allowSourceToggling: true,
              showPropTables: true,
              allowPropTablesToggling: true
            }
          }
        ]
      }
    ]
  })

  ///Button Groups
  .addWithChapters("Groups", {
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
            title: "This is a Section's Title",
            subtitle: "Each section can be used to render a component",
            info: `
                          Provide additional information about your section here.
                          Each section comes with a **Section Title**, **Section Subtitle**, **Section Info**.
                          Simply omit any of them to hide them from rendering. The section below does not have a subtitle nor info.
                          There's also the option of showing the source code and propTypes of the component.
                        `,
            sectionFn: () => <NewButton>Basic</NewButton>,
            options: {
              decorator,
              showSource: false,
              allowSourceToggling: true,
              showPropTables: true,
              allowPropTablesToggling: true
            }
          },
          {
            title: "Here's another section, but without subtitle and info",
            sectionFn: () => <NewButton primary>Primary</NewButton>,
            options: {
              showSource: true,
              allowSourceToggling: true,
              showPropTables: true,
              allowPropTablesToggling: true
            }
          }
        ]
      }
    ]
  });
