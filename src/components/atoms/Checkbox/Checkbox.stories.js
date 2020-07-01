// /* eslint-disable linebreak-style */
// /* eslint-disable react/jsx-filename-extension */
// import React from "react";
// import { Padding } from "helpers/Display";
// import Form, { FormSection } from "layout/Form";
// import Checkbox, { CheckboxGroup } from "atoms/Checkbox";

// const shortLabels = [
//   {
//     id: "cbox_1",
//     label: "Box 1",
//   },
//   {
//     id: "cbox_2",
//     label: "Box 2 (disabled)",
//     disabled: true,
//   },
//   {
//     id: "cbox_3",
//     label: "Box 3",
//   },
//   {
//     id: "cbox_4",
//     label: "Box 4",
//   },
// ];
// const longLabels = [
//   {
//     id: "cbox_long",
//     label:
//       "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself.",
//   },
//   {
//     id: "cbox_long2",
//     label:
//       "Enough with these long labels already...put it on your blog, Shakespeare.",
//   },
// ];

// storiesOf("Atoms|Checkbox", module)
//   .addDecorator(Padding)
//   .addDecorator(withKnobs)
//   .add(
//     "Documentation",
//     () => {
//       return <Checkbox id="cbox1" label="Box 1" />;
//     })
//   .add("Skeleton", () => {
//     return <Checkbox id="default" />;
//   })
//   .add("Knobs", () => {
//     return (
//       <Checkbox
//         id="cbox1"
//         label={text("label", "Checkbox Label", "Checkbox")}
//         align={options(
//           "align",
//           {
//             left: null,
//             right: "right",
//           },
//           null,
//           { display: "select" },
//           "Checkbox",
//         )}
//         error={boolean("error", false, "Checkbox")}
//         disabled={boolean("disabled", false, "Checkbox")}
//       />
//     );
//   })
//   .add("Checkbox (states)", () => {
//     return (
//       <CheckboxGroup>
//         <Checkbox id="default" label="Default" />
//         <Checkbox id="selected" label="Selected" checked />
//         <Checkbox id="error" label="Error" error />
//         <Checkbox id="disabled" label="Disabled" disabled />
//       </CheckboxGroup>
//     );
//   })
//   .add("Checkbox (alignment)", () => {
//     return (
//       <CheckboxGroup>
//         <Checkbox id="standard" label="Standard" />
//         <Checkbox id="align-right" label="Right Aligned" align="right" />
//       </CheckboxGroup>
//     );
//   });

// storiesOf("Blocks|Checkbox Group", module)
//   .addDecorator(Padding)
//   .addDecorator(withKnobs)
//   .add(
//     "Documentation",
//     () => {
//       return (
//         <Form>
//           <FormSection>
//             <CheckboxGroup
//               id="group1"
//               label="Checkbox Group Label"
//               data={shortLabels}
//               helpText="Hang in there, buddy, I'm here to help!"
//             />
//           </FormSection>
//         </Form>
//       );
//     })
//   .add("Knobs", () => {
//     return (
//       <Form>
//         <FormSection title="Knobs">
//           <CheckboxGroup
//             id="group1"
//             data={shortLabels}
//             columns={options(
//               "columns",
//               {
//                 "auto ( default )": null,
//                 "one": "1",
//                 "two": "2",
//                 "three": "3",
//                 "four": "4",
//                 "five": "5",
//                 "six": "6",
//               },
//               null,
//               { display: "select" },
//               "Checkbox Group",
//             )}
//             isRequired={boolean("required", false, "Checkbox Group")}
//             label={text("Input Label", "Input Label", "Checkbox Group")}
//             helpText={text(
//               "Help Text",
//               "Have you been helped yet?",
//               "Checkbox Group",
//             )}
//             align={options(
//               "box align",
//               {
//                 left: null,
//                 right: "right",
//               },
//               null,
//               { display: "select" },
//               "Checkbox Group",
//             )}
//             error={text("error", null, "Checkbox Group")}
//             disabled={boolean("disabled", false, "Checkbox Group")}
//           />
//         </FormSection>
//       </Form>
//     );
//   })
//   .add("Checkbox Group (responsive)", () => {
//     return (
//       <Form>
//         <FormSection title="Checkbox Group (responsive)">
//           <CheckboxGroup data={shortLabels} />
//         </FormSection>
//       </Form>
//     );
//   })
//   .add("Checkbox Group (2 columns)", () => {
//     return (
//       <Form>
//         <FormSection title="Checkbox Group (2 columns)">
//           <CheckboxGroup data={shortLabels} columns="2" />
//         </FormSection>
//       </Form>
//     );
//   })
//   .add("Checkbox Group (3 columns)", () => {
//     return (
//       <Form>
//         <FormSection title="Checkbox Group (3 columns)">
//           <CheckboxGroup data={shortLabels} columns="3" />
//         </FormSection>
//       </Form>
//     );
//   })
//   .add("Checkbox Group (mixed columns)", () => {
//     return (
//       <Form>
//         <FormSection title="Checkbox Group (mixed columns)">
//           <CheckboxGroup data={shortLabels} columns="2" />
//           <CheckboxGroup data={longLabels} columns="1" />
//         </FormSection>
//       </Form>
//     );
//   })
//   .add("Checkbox Group (right-aligned)", () => {
//     return (
//       <Form>
//         <FormSection title="Checkbox Group (right-aligned)">
//           <CheckboxGroup data={shortLabels} columns="2" align="right" />
//         </FormSection>
//       </Form>
//     );
//   });
