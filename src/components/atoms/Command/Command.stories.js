/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding, CommandGrid } from "helpers/Display";
// import Text, { Title } from "base/Typography";
import Grid from "layout/Grid";
import commandsStandard from "atoms/Command/libraryCommand.data";
import Command from "atoms/Command";

// storiesOf("Atoms|Command", module)
//   .addParameters({
//     info: {
//       text:
//         "A Command is like a Button...only less button-y.  Oh, and it usually has an icon...unless it doesn't.",
//     },
//     notes: {
//       markdown: CommandNotes,
//     },
//   })
//   .addDecorator(Padding)
//   .addDecorator(withKnobs)
//   .add(
//     "Documentation",
//     withInfo()(() => {
//       return <Command label="Command" icon="circle_solid" />;
//     }),
//   )
//   .add(
//     "Knobs",
//     withInfo()(() => {
//       return (
//         <Command
//           name={select(
//             "name",
//             {
//               "add to list": "add to list",
//               "address": "address",
//               "apn": "apn",
//               "bookmark": "bookmark",
//               "contacts": "contacts",
//               "gps": "gps",
//               "menu": "menu",
//               "notifications": "notifications",
//               "print": "print",
//               "profile": "profile",
//               "settings": "settings",
//               "share": "share",
//               "---------------------": "",
//               "Custom Command": null,
//             },
//             "add to list",
//             "Standard Props",
//           )}
//           align={options(
//             "align",
//             {
//               "left ( default )": null,
//               "right": "right",
//               "center": "center",
//             },
//             null,
//             { display: "radio" },
//             "Standard Props",
//           )}
//           size={options(
//             "size",
//             {
//               "small": "small",
//               "standard ( default )": null,
//               "large": "large",
//             },
//             null,
//             { display: "radio" },
//             "Standard Props",
//           )}
//           label={text("label", "Command", "Custom Props")}
//           icon={select(
//             "icon",
//             {
//               "check": "check",
//               "edit": "edit",
//               "home": "home",
//               "info circle": "info_circle",
//               "mail": "mail",
//               "search": "search",
//               "circle (solid)": "circle_solid",
//             },
//             "circle_solid",
//             "Custom Props",
//           )}
//         />
//       );
//     }),
//   )

export default {
  title: "Atoms/Command/Tests",
  component: Command,
  parameters: {
    docs: { page: null },
  },
  includeStories: ["Knobs", "Actions", "Specs"],
  decorators: [Padding, withKnobs],
};
export const CommandLibrary = () => {
  return (
    <Grid gap="large">
      <CommandGrid data={commandsStandard} />
    </Grid>
  );
};
