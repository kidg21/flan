import React from "react";
import { storiesOf } from "@storybook/react";
import Colors from "./colors";

// Colors
// storiesOf('Colors', module)
//   .add('colors', () => (
//     <Colors />
//   )); 

  storiesOf("Base/Colors")
  .addWithChapters("Colors", {
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
            title: "Default Colors",
            subtitle: "Each section can be used to render a component",
            sectionFn: () => <Colors>Default</Colors>,
            options: {
              // decorator,
              showSource: false,
              allowSourceToggling: true
            }
          },
          // {
          //   title: "Primary Buttons",
          //   sectionFn: () => <NewButton primary>Primary</NewButton>,
          //   options: {
          //     showSource: true,
          //     allowSourceToggling: true,
          //     showPropTables: true,
          //     allowPropTablesToggling: true
          //   }
          // },
          // {
          //   title: "Disabled Buttons",
          //   subtitle: "Each section can be used to render a component",
          //   sectionFn: () => <NewButton isDisabled>Disabled</NewButton>,
          //   options: {
          //     decorator,
          //     showSource: false,
          //     allowSourceToggling: true,
          //     showPropTables: true,
          //     allowPropTablesToggling: true
          //   }
          // }
        ]
      }
    ]
  })


