// /* eslint-disable linebreak-style */
// /* eslint-disable react/jsx-filename-extension */
// import React from "react";
// import { Padding } from "helpers/Display";
// import Form from "layout/Form";
// import Switch from "atoms/Switch";


// storiesOf("Atoms|Switch", module)

//   .addDecorator(Padding)
//   .addDecorator(withKnobs)
//   .add(
//     "Documentation",
//     () => {
//       return <Switch label="Switch" />;
//     })
//   .add("Knobs", () => {
//     return (
//       <Switch
//         id="switch1"
//         label={text("label", "Switch Label", "Switch")}
//         align={options(
//           "align",
//           {
//             left: null,
//             right: "right",
//           },
//           null,
//           { display: "select" },
//           "Switch",
//         )}
//         error={boolean("error", false, "Switch")}
//         disabled={boolean("disabled", false, "Switch")}
//       />
//     );
//   })
//   .add("States", () => {
//     return (
//       <Form>
//         <Switch id="inactive" label="Inactive" />
//         <Switch id="active" label="Active" checked />
//         <Switch id="error" label="Error" error />
//         <Switch id="disabled" label="Disabled" disabled />
//       </Form>
//     );
//   })
//   .add("Alignment", () => {
//     return (
//       <Form>
//         <Switch id="standard" label="Standard" />
//         <Switch id="align-right" label="Right Aligned" align="right" />
//       </Form>
//     );
//   });
