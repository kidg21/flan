// /* eslint-disable linebreak-style */
// /* eslint-disable react/jsx-filename-extension */
// import React from "react";
// import { Padding } from "helpers/Display";
// import Form, { FormSection } from "layout/Form";
// import Slider from "atoms/Slider";


// storiesOf("Atoms|Slider", module)
//   .addDecorator(Padding)
//   .addDecorator(withKnobs)
//   .add(
//     "Documentation",
//     () => {
//       return <Slider />;
//     })
//   .add("Knobs", () => {
//     return (
//       <Slider
//         error={boolean("error", false, "Slider")}
//         disabled={boolean("disabled", false, "Slider")}
//       />
//     );
//   })
//   .add("States", () => {
//     return (
//       <Form title="States" columns="1">
//         <FormSection title="Standard">
//           <Slider />
//         </FormSection>
//         <FormSection title="Error">
//           <Slider error />
//         </FormSection>
//         <FormSection title="Disabled">
//           <Slider disabled />
//         </FormSection>
//       </Form>
//     );
//   });
