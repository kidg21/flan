// /* eslint-disable linebreak-style */
// /* eslint-disable react/jsx-filename-extension */
// import React from "react";
// import { Padding } from "helpers/Display";
// import LightBoxIcon from "images/LightBoxIconLogo.png";
// import Grid from "layout/Grid";
// import { Title } from "base/Typography";
// import Image from "atoms/Image";

// const logo = {
//   src: LightBoxIcon,
//   alt: "logo",
// };


// storiesOf("Atoms|Image", module)

//   .addDecorator(Padding)
//   .addDecorator(withKnobs)
//   .add(
//     "Documentation",
//     () => {
//       return (
//         <Image
//           src={logo.src}
//           alt={logo.alt}
//         />
//       );
//     })
//   .add("Knobs", () => {
//     return (
//       <Image
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
//         alt="This is alt text for this image"
//         width={text("width", 100, "Image")}
//         isRound={boolean("circle", false, "Image")}
//         border={boolean("border", false, "Image")}
//       />
//     );
//   })
//   .add("Type", () => {
//     return (
//       <Grid gap="xs">
//         <Title text="Type" />
//         <Image
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
//           alt="This is alt text for this image"
//         />
//         <Title text="Default - ( Fills parent container )" />
//         <Image
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
//           width={125}
//           alt="This is alt text for this image"
//         />
//         <Title text="Specified Width ( width='125' )" />
//         <Image
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
//           width={125}
//           alt="This is alt text for this image"
//           isRound
//         />
//         <Title text="Circle ( width='125' )" />
//       </Grid>
//     );
//   });
