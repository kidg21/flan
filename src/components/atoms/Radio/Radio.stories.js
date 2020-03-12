// /* eslint-disable linebreak-style */
// /* eslint-disable react/jsx-filename-extension */
// import React from "react";
// import { Padding } from "helpers/Display";
// import Form, { Section } from "layout/Form";
// import Radio, { RadioGroup } from "atoms/Radio";


// const shortLabels = [
//   {
//     id: "radio-1",
//     name: "radio-group",
//     value: "1",
//     label: "Radio 1",
//   },
//   {
//     id: "radio-2",
//     name: "radio-group",
//     value: "2",
//     label: "Radio 2 (disabled)",
//     disabled: true,
//   },
//   {
//     id: "radio-3",
//     name: "radio-group",
//     value: "3",
//     label: "Radio 3",
//   },
//   {
//     id: "radio-4",
//     name: "radio-group",
//     value: "4",
//     label: "Radio 4",
//   },
// ];
// const longLabels = [
//   {
//     id: "radio_long",
//     name: "radio-group",
//     value: "5",
//     label:
//       "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself.",
//   },
//   {
//     id: "radio_long2",
//     name: "radio-group",
//     value: "6",
//     label:
//       "Enough with these long labels already...put it on your blog, Shakespeare.",
//   },
// ];

// storiesOf("Atoms|Radio", module)
//   .addDecorator(Padding)
//   .addDecorator(withKnobs)
//   .add(
//     "Documentation",
//     () => {
//       return <Radio id="radio1" label="Radio 1" name="radio-group" value="1" />;
//     })
//   .add("Skeleton", () => {
//     return <Radio label="" />;
//   })
//   .add("Knobs", () => {
//     return (
//       <Radio
//         id="radio1"
//         label={text("label", "Radio Label", "Radio")}
//         name="radio-group"
//         value="1"
//         align={options(
//           "align",
//           {
//             left: null,
//             right: "right",
//           },
//           null,
//           { display: "select" },
//           "Radio",
//         )}
//         error={boolean("error", false, "Radio")}
//         disabled={boolean("disabled", false, "Radio")}
//       />
//     );
//   })
//   .add("Radio (states)", () => {
//     return (
//       <RadioGroup>
//         <Radio id="default" value="default" label="Default" name="states" />
//         <Radio
//           id="selected"
//           value="selected"
//           label="Selected"
//           name="states"
//           checked
//         />
//         <Radio
//           id="disabled"
//           value="disabled"
//           label="Disabled"
//           name="states"
//           disabled
//         />
//       </RadioGroup>
//     );
//   })
//   .add("Radio (alignment)", () => {
//     return (
//       <RadioGroup>
//         <Radio
//           id="standard"
//           value="standard"
//           label="Standard"
//           name="alignment"
//         />
//         <Radio
//           id="align-right"
//           value="align-right"
//           label="Right Aligned"
//           name="alignment"
//           align="right"
//         />
//       </RadioGroup>
//     );
//   });

// storiesOf("Blocks|Radio Group", module)
//   .addDecorator(Padding)
//   .addDecorator(withKnobs)
//   .add(
//     "Documentation",
//     () => {
//       return (
//         <Form>
//           <Section>
//             <RadioGroup
//               id="group1"
//               label="Radio Group Label"
//               data={shortLabels}
//               helpText="Hang in there, buddy, I'm here to help!"
//             />
//           </Section>
//         </Form>
//       );
//     })
//   .add("Knobs", () => {
//     return (
//       <Form>
//         <Section title="Knobs">
//           <RadioGroup
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
//               "Radio Group",
//             )}
//             isRequired={boolean("required", false, "Radio Group")}
//             label={text("Input Label", "Input Label", "Radio Group")}
//             helpText={text(
//               "Help Text",
//               "Have you been helped yet?",
//               "Radio Group",
//             )}
//             align={options(
//               "box align",
//               {
//                 left: null,
//                 right: "right",
//               },
//               null,
//               { display: "select" },
//               "Radio Group",
//             )}
//             error={text("error", null, "Radio Group")}
//             disabled={boolean("disabled", false, "Radio Group")}
//           />
//         </Section>
//       </Form>
//     );
//   })
//   .add("Radio Group (responsive)", () => {
//     return (
//       <Form>
//         <Section title="Checkbox Group (responsive)">
//           <RadioGroup data={shortLabels} />
//         </Section>
//       </Form>
//     );
//   })
//   .add("Radio Group (2 columns)", () => {
//     return (
//       <Form>
//         <Section title="Checkbox Group (2 columns)">
//           <RadioGroup data={shortLabels} columns="2" />
//         </Section>
//       </Form>
//     );
//   })
//   .add("Radio Group (3 columns)", () => {
//     return (
//       <Form>
//         <Section title="Checkbox Group (3 columns)">
//           <RadioGroup data={shortLabels} columns="3" />
//         </Section>
//       </Form>
//     );
//   })
//   .add("Radio Group (mixed columns)", () => {
//     return (
//       <Form>
//         <Section title="Checkbox Group (mixed columns)">
//           <RadioGroup data={shortLabels} columns="2" />
//           <RadioGroup data={longLabels} columns="1" />
//         </Section>
//       </Form>
//     );
//   })
//   .add("Radio Group (right-aligned)", () => {
//     return (
//       <Form>
//         <Section title="Checkbox Group (right-aligned)">
//           <RadioGroup data={shortLabels} columns="2" align="right" />
//         </Section>
//       </Form>
//     );
//   });
