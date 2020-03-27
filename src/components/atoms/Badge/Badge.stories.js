// /* eslint-disable linebreak-style */
// /* eslint-disable react/jsx-filename-extension */
// import React from "react";
// import { Padding } from "helpers/Display";
// import Grid from "layout/Grid";
// import Card, { CardSection, CardGrid } from "elements/Card";
// import Title from "base/Typography";
// import Badge from "./Badge.jsx";


// storiesOf("Atoms|Badge", module)
//   .addDecorator(Padding)
//   .addDecorator(withKnobs)
//   .add(
//     "Documentation",
//     () => {
//       return (
//         <Grid columns="4">
//           <Card>
//             <CardSection>
//               <Badge label="1" />
//               <Title text="Badge" />
//             </CardSection>
//           </Card>
//         </Grid>
//       );
//     })
//   .add("Knobs", () => {
//     return (
//       <Grid columns="4">
//         <Card>
//           <CardSection>
//             <Badge
//               variant={options(
//                 "variant",
//                 {
//                   "info": "info",
//                   "success": "success",
//                   "warning": "warning",
//                   "alert (default)": "alert",
//                   "dark": "dark",
//                 },
//                 "alert",
//                 { display: "radio" },
//                 "Badge",
//               )}
//               label={text("label", "Label", "Badge")}
//               position={options(
//                 "align",
//                 {
//                   "top-left": "topLeft",
//                   "top-right (default)": "topRight",
//                   "bottom-right": "bottomRight",
//                   "bottom-left": "bottomLeft",
//                 },
//                 "topRight",
//                 { display: "radio" },
//                 "Badge",
//               )}
//             />
//             <Title text="Badge" />
//           </CardSection>
//         </Card>
//       </Grid>
//     );
//   })

//   .add("The Badge Family", () => {
//     return (
//       <CardGrid columns="4" gap="large">
//         <Card>
//           <CardSection>
//             <Badge label="1" />
//             <Title text="1-Digit" />
//           </CardSection>
//         </Card>
//         <Card>
//           <CardSection>
//             <Badge label="21" />
//             <Title text="2-Digit" />
//           </CardSection>
//         </Card>
//         <Card>
//           <CardSection>
//             <Badge label="321" />
//             <Title text="3-Digit" />
//           </CardSection>
//         </Card>
//         <Card>
//           <CardSection>
//             <Badge label="4321" />
//             <Title text="4-Digit" />
//           </CardSection>
//         </Card>

//         <Card>
//           <CardSection>
//             <Badge label="9+" />
//             <Title text="Max 10" />
//           </CardSection>
//         </Card>
//         <Card>
//           <CardSection>
//             <Badge label="99+" />
//             <Title text="Max 100" />
//           </CardSection>
//         </Card>
//         <Card>
//           <CardSection>
//             <Badge label="999+" />
//             <Title text="Max 1k" />
//           </CardSection>
//         </Card>
//         <Card>
//           <CardSection>
//             <Badge label="9999+" />
//             <Title text="Max 10k" />
//           </CardSection>
//         </Card>
//         <Card>
//           <CardSection>
//             <Badge label="Info" variant="info" />
//             <Title text="Info" />
//           </CardSection>
//         </Card>
//         <Card>
//           <CardSection>
//             <Badge label="Success" variant="success" />
//             <Title text="Success" />
//           </CardSection>
//         </Card>
//         <Card>
//           <CardSection>
//             <Badge label="Warning" variant="warning" />
//             <Title text="Warning" />
//           </CardSection>
//         </Card>
//         <Card>
//           <CardSection>
//             <Badge label="Alert" variant="alert" />
//             <Title text="Alert" />
//           </CardSection>
//         </Card>

//         <Card>
//           <CardSection>
//             <Badge label="1" position="topRight" />
//             <Title text="Top-Right" />
//           </CardSection>
//         </Card>
//         <Card>
//           <CardSection>
//             <Badge label="1" position="bottomRight" />
//             <Title text="Bottom-Right" />
//           </CardSection>
//         </Card>
//         <Card>
//           <CardSection>
//             <Badge label="1" position="topLeft" />
//             <Title text="Top-Left" />
//           </CardSection>
//         </Card>
//         <Card>
//           <CardSection>
//             <Badge label="1" position="bottomLeft" />
//             <Title text="Bottom-Left" />
//           </CardSection>
//         </Card>
//       </CardGrid>
//     );
//   });
